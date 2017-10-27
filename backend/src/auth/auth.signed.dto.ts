export interface Token {
    readonly expiresIn: number;
    readonly accessToken: string;
}

export interface AuthSignedDto {
    readonly user: object;
    readonly token: Token;
}