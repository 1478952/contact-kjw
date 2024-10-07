import { Controller, Post, UseGuards, Headers, Body } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { IsPubblic } from "src/common/decorator/is-public.decorator";
import { RefreshTokenGuard } from "./guard/bearer-token.guard";
import { RegistartUserDto } from "./dto/register-user.dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("register/name")
  @IsPubblic()
  postUser(@Body() body: RegistartUserDto) {
    return this.authService.registerWithName(body);
  }

  @Post("token/access")
  postTokenAccess(@Headers("authorization") rawToken: string) {
    const token = this.authService.extractTokenFromHeader(rawToken, true);

    const newToken = this.authService.rotateToken(token, false);

    return {
      accessToken: newToken,
    };
  }

  @Post("token/refresh")
  @IsPubblic()
  @UseGuards(RefreshTokenGuard)
  postTokenRefresh(@Headers("authorization") rawToken: string) {
    const token = this.authService.extractTokenFromHeader(rawToken, true);

    const newToken = this.authService.rotateToken(token, true);

    return {
      refreshToken: newToken,
    };
  }

  @Post("login/user")
  @IsPubblic()
  postLoginName(@Headers("authorization") rawToken: string) {
    const token = this.authService.extractTokenFromHeader(rawToken, false);

    const credentials = this.authService.decodeBasicToken(token);

    return this.authService.loginWithName(credentials);
  }
}
