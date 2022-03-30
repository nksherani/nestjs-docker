export class CreateUserDto {
    userName: string;
    email: string;
    passwordHash: string;
    salt: string;
}
