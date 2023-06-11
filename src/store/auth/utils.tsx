import {getItem, removeItem, setItem} from '@utils/storage';

const TOKEN = 'token';

export type TokenType = {
  access: string;
  refreshToken: string;
};

export const getToken = () => getItem<TokenType>(TOKEN);
export const removeToken = () => removeItem(TOKEN);
export const setToken = (value: TokenType) => setItem(TOKEN, value);
