import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { UserModel } from "./entities/user.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserModel)
    private readonly usersRepository: Repository<UserModel>,
  ) {}
  async getUserByName(name: string) {
    return this.usersRepository.findOne({
      where: {
        name,
      },
    });
  }
}
