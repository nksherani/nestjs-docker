import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { GetUserDto } from './dto/get-user.dto';
import { Model, Document } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {User, UserDocument} from '../schemas/user.schema'
const bcrypt = require('bcrypt')

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findOne(email: string): Promise<User & Document<any, any, any>> {
    return this.userModel.findOne({email}).exec();
  }
  async create(createUserDto: CreateUserDto): Promise<User & Document<any, any, any>> {
    var count = await this.userModel.count().exec();
    var existingEmail = await this.userModel.findOne({email: createUserDto.email}).exec();
    var existingUsername = await this.userModel.findOne({username: createUserDto.username}).exec();
    if(existingEmail || existingUsername)
    {
      throw new Error('User already exists');
    }
    return bcrypt.genSalt(3).then(salt =>{
      return bcrypt.hash(createUserDto.password,salt).then(hash =>{
        const createdUser = new this.userModel(createUserDto);
        if(count)
        {
          createdUser.role = 'user'
        }
        else{
          createdUser.role = 'admin'
        }
        createdUser.passwordHash = hash;
        createdUser.salt = salt;
        createdUser.createdDate = new Date();
        return createdUser.save().then(createdResponse=>{
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
