import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { GetUserDto } from './dto/get-user.dto';
import { Model, Document } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {User, UserDocument} from '../schemas/user.schema'
// import bcrypt from 'bcrypt'
const bcrypt = require('bcrypt')

// This should be a real class/interface representing a user entity
export type User__ = any;

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<User__ | undefined> {
    return this.users.find(user => user.username === username);
  }
  create(createUserDto: CreateUserDto): Promise<User & Document<any, any, any>> {
    return bcrypt.genSalt(3).then(salt =>{
      return bcrypt.hash(createUserDto.password,salt).then(hash =>{
        const createdUser = new this.userModel(createUserDto);
        createdUser.passwordHash = hash;
        createdUser.salt = salt;
        createdUser.createdDate = new Date();
        return createdUser.save().then(createdResponse=>{
          console.log(createdResponse);
          return createdResponse._id;
        });
        
      });
    })
    
  }

  findAll(): Promise<GetUserDto[]> {
    const users = this.userModel.find().exec().then(users=>{
      const userDtos =users.map(user=>{
        const userDto: GetUserDto = {
          userName: user.username,
          fullName: user.fullName,
          email: user.email
        }
        return userDto;
      });
      return userDtos;
    });
    return users;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
