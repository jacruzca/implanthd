export interface Token {
    readonly expiresIn: number;
    readonly accessToken: string;
}

export interface AuthSignedDto {
    readonly user: {
        _id: string,
        email: string,
    };
    readonly token: Token;
}