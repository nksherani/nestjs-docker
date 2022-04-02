export interface JwtTokenModel {
    username: string,
    email: string,
    sub: any,
    iat: number,
    exp: number
}