import { Exclude } from "class-transformer";
import { IsString, Length } from "class-validator";
import { BaseModel } from "src/common/entities/base.entity";
import { lengthValidationMessage } from "src/common/validation-message/length-validation.message";
import { stringValidationMessage } from "src/common/validation-message/string-validation.message";
import { Column } from "typeorm";

export class UserModel extends BaseModel {
  @Column({ unique: true, nullable: false, length: 20 })
  @IsString({
    message: stringValidationMessage,
  })
  @Length(1, 20, {
    message: lengthValidationMessage,
  })
  name: string;

  @Column()
  @IsString({
    message: stringValidationMessage,
  })
  @Length(3, 8, {
    message: lengthValidationMessage,
  })
  @Exclude({
    toPlainOnly: true,
  })
  password: string;
}
