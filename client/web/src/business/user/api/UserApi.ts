import { ApiAbstract } from '../../ApiInterface';

export default class UserApi extends ApiAbstract {

    private readonly SIGNIN = 'v1p/auth/signin';
    private readonly SIGNUP = 'v1p/auth/signup';

    signIn = (email: string, password: string, rememberSession: boolean = false) => {
        return this.getApi().post(this.SIGNIN, {email, password, rememberSession});
    }

    signUp = (user: object) => {
        return this.getApi().post(this.SIGNUP, user);
    }

}