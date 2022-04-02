import { IsNotEmpty } from 'class-validator';

export class LoginDto {
    username: string;
    @IsNotEmpty()
    email: string;
    @IsNotEmpty()
    password: string;
}
