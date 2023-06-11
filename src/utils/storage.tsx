import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();

export function getItem<T>(key: string): T {
  console.log('GET ', key);
  const value = storage.getString(key);

  return value ? JSON.parse(value) || null : null;
}

export function setItem<T>(key: string, value: T) {
  console.log('SET ', key, value);
  storage.set(key, JSON.stringify(value));
}

export function removeItem(key: string) {
  console.log('Remove ', key);
  storage.delete(key);
}
