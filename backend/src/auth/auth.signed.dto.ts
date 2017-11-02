export interface Token {
    readonly expiresIn: number;
    readonly accessToken: string;
}

export interface AuthSignedDto {
    readonly user: {
        _id: string,
        email: string,
        firstName: string,
        lastName: string,
    };
    readonly token: Token;
}