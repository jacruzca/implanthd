import * as Cookies from 'js-cookie';
import { TOKEN_COOKIE, USER_COOKIE } from '../../constants/index';

export const getUser = (): any | undefined => {
    const userStr = Cookies.get(USER_COOKIE);
    if (userStr) {
        try {
            return JSON.parse(userStr);
        } catch (e) {
            return undefined;
        }
    }

    return undefined;
};

export const setUser = (user: any) => {
    Cookies.set(USER_COOKIE, user);
};

export const logout = () => {
    Cookies.remove(USER_COOKIE);
    Cookies.remove(TOKEN_COOKIE);
};