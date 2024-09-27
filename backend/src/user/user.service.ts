import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { UserModel } from "./entities/user.entity";

@Injectable()
export class UserService {
  constructor(private readonly usersRepository: Repository<UserModel>) {}
  async getUserByName(name: string) {
    return this.usersRepository.findOne({
      where: {
        name,
      },
    });
  }
}
