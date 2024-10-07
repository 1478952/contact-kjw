import { BadRequestException, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { UserModel } from "./entities/user.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserModel)
    private readonly usersRepository: Repository<UserModel>,
  ) {}

  async createUser(user: Pick<UserModel, "name" | "password">) {
    const isNameExists = await this.usersRepository.exists({
      where: {
        name: user.name,
      },
    });

    if (isNameExists) {
      throw new BadRequestException("이미 존재하는 name 입니다!");
    }

    const userObject = this.usersRepository.create({
      name: user.name,
      password: user.password,
    });

    const newUser = await this.usersRepository.save(userObject);

    return newUser;
  }

  async getUserByName(name: string) {
    return this.usersRepository.findOne({
      where: {
        name,
      },
    });
  }
}
