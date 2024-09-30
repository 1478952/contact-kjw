import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { CreateAuthDto } from "./dto/create-auth.dto";
import { UpdateAuthDto } from "./dto/update-auth.dto";
import { UserModel } from "src/user/entities/user.entity";
import { UserService } from "src/user/user.service";
import { ConfigService } from "@nestjs/config";
import { ENV_JWT_SECRET } from "src/common/const/env-keys.const";

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  verifyToken(token: string) {
    try {
      return this.jwtService.verify(token, {
        secret: this.configService.get(ENV_JWT_SECRET),
      });
    } catch (error) {
      throw new UnauthorizedException("토큰이 만료되었거나 잘못된 토큰입니다!");
    }
  }

  rotateToken(token: string, isRefreshToken: boolean) {
    const decoded = this.jwtService.verify(token, {
      secret: this.configService.get(ENV_JWT_SECRET),
    });

    if (decoded.type !== "refresh") {
      throw new UnauthorizedException(
        "토큰 재발급은 Refresh 토큰으로만 가능합니다!",
      );
    }

    return this.signToken(
      {
        ...decoded,
      },
      isRefreshToken,
    );
  }

  async authenticateWithNameAndPassword(
    user: Pick<UserModel, "name" | "password">,
  ) {
    const existingUser = await this.usersService.getUserByName(user.name);

    if (!existingUser) {
      throw new UnauthorizedException("존재하지 않는 사용자입니다.");
    }

    const passOk = await bcrypt.compare(user.password, existingUser.password);

    if (!passOk) {
      throw new UnauthorizedException("비밀번호가 틀렸습니다.");
    }

    return existingUser;
  }

  decodeBasicToken(base64String: string) {
    const decoded = Buffer.from(base64String, "base64").toString("utf8");

    const split = decoded.split(":");

    if (split.length !== 2) {
      throw new UnauthorizedException("잘못된 유형의 토큰입니다.");
    }

    const name = split[0];
    const password = split[1];

    return {
      name,
      password,
    };
  }

  extractTokenFromHeader(header: string, isBearer: boolean) {
    const splitToken = header.split(" ");

    const prefix = isBearer ? "Bearer" : "Basic";

    if (splitToken.length !== 2 || splitToken[0] !== prefix) {
      throw new UnauthorizedException("잘못된 토큰입니다.");
    }

    const token = splitToken[1];

    return token;
  }

  signToken(user: Pick<UserModel, "name" | "id">, isRefreshToken: boolean) {
    const payload = {
      email: user.name,
      sub: user.id,
      type: isRefreshToken ? "refresh" : "access",
    };

    return this.jwtService.sign(payload, {
      secret: this.configService.get(ENV_JWT_SECRET),
      expiresIn: isRefreshToken ? 3600 : 300, // seconds
    });
  }

  loginUser(user: Pick<UserModel, "name" | "id">) {
    return {
      accessToken: this.signToken(user, false),
      refreshToken: this.signToken(user, true),
    };
  }

  async loginWithName(user: Pick<UserModel, "name" | "password">) {
    const existingUser = await this.authenticateWithNameAndPassword(user);

    return this.loginUser(existingUser);
  }
}
