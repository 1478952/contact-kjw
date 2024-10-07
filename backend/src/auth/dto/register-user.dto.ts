import { PickType } from "@nestjs/mapped-types";
import { UserModel } from "src/user/entities/user.entity";

export class RegistartUserDto extends PickType(UserModel, [
  "name",
  "password",
]) {}
