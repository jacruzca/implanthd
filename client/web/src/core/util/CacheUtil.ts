import * as Cookies from 'js-cookie';
import { TOKEN_COOKIE, USER_COOKIE } from '../../constants/index';

export const getUser = (): any | undefined => {
    const userStr = Cookies.get(USER_COOKIE);
    if (userStr) {
        return JSON.parse(userStr);
    }

    return undefined;
};

export const logout = () => {
    Cookies.remove(USER_COOKIE);
    Cookies.remove(TOKEN_COOKIE);
};