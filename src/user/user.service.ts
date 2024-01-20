import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { hashPwd } from '../utils/hash-pwd';
import { RegisterUserResponse } from '../interface/user-interface';

@Injectable()
export class UserService {
  filter(user: User): RegisterUserResponse {
    const { id, email, login } = user;
    return { id, email, login, isSuccess: true };
  }

  async create(newUser: CreateUserDto): Promise<RegisterUserResponse> {
    const { email, login, pwd } = newUser;

    if (
      !email ||
      !login ||
      !pwd ||
      email.length < 3 ||
      email.length > 255 ||
      login.length < 3 ||
      login.length > 50 ||
      pwd.length < 3 ||
      pwd.length > 50
    ) {
      return { isSuccess: false };
    }

    const user = new User();
    user.login = login;
    user.email = email;
    user.pwdHash = hashPwd(pwd);

    await user.save();

    return this.filter(user);
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
