import * as Cookies from 'js-cookie';
import { USER_COOKIE } from '../../constants/index';

export const getUser = (): any | undefined => {
    const userStr = Cookies.get(USER_COOKIE);
    if (userStr) {
        return JSON.parse(userStr);
    }

    return undefined;
};