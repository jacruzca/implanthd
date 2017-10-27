import { UserModel } from './user.model';

export class UserTokenDto {

    readonly user: UserModel;

    readonly token: string;
}