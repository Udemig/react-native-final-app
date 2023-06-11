import {create} from 'zustand';
import {TokenType, removeToken, setToken} from './utils';

interface AuthState {
  token?: TokenType | null;
  status: 'idle' | 'signOut' | 'signIn';
  signIn: (data: TokenType) => void;
  signOut: () => void;
  hydrate: () => void;
}

export const _useAuth = create<AuthState>((set, get) => ({
  status: 'idle',
  token: null,
  signIn: (token: TokenType) => {
    setToken(token);
    set({status: 'signIn', token});
  },
  signOut: () => {
    removeToken();
    set({status: 'signOut', token: null});
  },
  hydrate: () => {},
}));

export const signIn = (token: TokenType) => _useAuth.getState().signIn(token);
export const signOut = () => _useAuth.getState().signOut();
export const hydrate = () => _useAuth.getState().hydrate();
