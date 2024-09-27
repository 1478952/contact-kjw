import * as bcrypt from "bcrypt";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { CreateAuthDto } from "./dto/create-auth.dto";
import { UpdateAuthDto } from "./dto/update-auth.dto";
import { UserModel } from "src/user/entities/user.entity";
import { UserService } from "src/user/user.service";

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UserService) {}

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
}
