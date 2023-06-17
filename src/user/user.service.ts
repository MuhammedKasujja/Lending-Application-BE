import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  create(createUserDto: CreateUserDto) {
    const user = new User();
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.picture = createUserDto.picture;
    user.telephone = createUserDto.telephone;
    user.email = createUserDto.email;
    user.password = createUserDto.password;

    return this.userRepo.save(user);
  }

  findAll() {
    return this.userRepo.find();
  }

  findOne(id: number) {
    return this.getUserById(id);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.getUserById(id);
    user.firstName = updateUserDto.firstName ?? user.firstName;
    user.lastName = updateUserDto.lastName ?? user.lastName;
    user.picture = updateUserDto.picture ?? user.picture;
    user.telephone = updateUserDto.telephone ?? user.telephone;
    return this.userRepo.save(user);
  }

  async remove(id: number) {
    const user = await this.getUserById(id);
    return this.userRepo.remove(user);
  }

  private async getUserById(id: number) {
    const user = await this.userRepo.findOneBy({ id });
    if (!user) {
      throw new HttpException(
        `User with id ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
    return user;
  }
}
