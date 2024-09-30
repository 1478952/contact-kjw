import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { UserModule } from "./user/user.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModel } from "./user/entities/user.entity";
import { ENV_DEV } from "./common/const/env-keys.const";

@Module({
  imports: [
    AuthModule,
    UserModule,
    TypeOrmModule.forRoot({
      // 데이터베이스 연결시 사용
      type: "mysql", // 데이터베이스 타입
      host: process.env.DB_HOST,
      port: Number(process.env.DB_INNER_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [UserModel],
      synchronize: ENV_DEV,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
