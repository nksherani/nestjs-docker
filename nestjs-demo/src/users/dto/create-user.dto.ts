import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {

    username: string;
    firstName: string;
    lastName: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;
    
    fullName: string;
}
