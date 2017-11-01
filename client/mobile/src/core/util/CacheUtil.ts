import { TOKEN_COOKIE, USER_COOKIE } from '../../constants/index';
import { AsyncStorage } from 'react-native';

export const getUser = async (): Promise<any | undefined> => {
    const userStr = await AsyncStorage.getItem(USER_COOKIE);
    if (userStr) {
        return JSON.parse(userStr);
    }

    return undefined;
};

export const logout = async () => {
    await AsyncStorage.removeItem(USER_COOKIE);
    await AsyncStorage.removeItem(TOKEN_COOKIE);
};