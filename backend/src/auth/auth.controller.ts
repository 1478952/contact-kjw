import { Controller, Post, UseGuards, Headers } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { IsPubblic } from "src/common/decorator/is-public.decorator";
import { BasicTokenGuard } from "./guard/basic-token.guard";
import { RefreshTokenGuard } from "./guard/bearer-token.guard";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

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

    /**
     * {accessToken: {token}}
     */
    const newToken = this.authService.rotateToken(token, true);

    return {
      refreshToken: newToken,
    };
  }

  @Post("login/email")
  @IsPubblic()
  @UseGuards(BasicTokenGuard)
  postLoginEmail(@Headers("authorization") rawToken: string) {
    const token = this.authService.extractTokenFromHeader(rawToken, false);

    const credentials = this.authService.decodeBasicToken(token);

    return this.authService.loginWithName(credentials);
  }
}
