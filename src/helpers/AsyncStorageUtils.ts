import AsyncStorage from "@react-native-community/async-storage";

const KEY = {
  USER_DATA: "USER_DATA",
  LANGUAGE: "LANGUAGE",
  INIT_STORAGE: "@INIT_STORAGE",
  KEY_EXPIRED: "@KEY_EXPIRED",
  FAVORITE: "@FAVORITE",
  TOKEN: "@TOKEN"
};
/**
 * Saves an object to storage.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
async function save(key: string, value: string): Promise<boolean> {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
}

async function saveObject(key: string, value: unknown): Promise<boolean> {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}
/**
 * Loads a string from storage.
 *
 * @param key The key to fetch.
 */
async function get(key: string): Promise<string | null> {
  try {
    return await AsyncStorage.getItem(key);
  } catch {
    return null;
  }
}
/**
 * Removes something from storage.
 *
 * @param key The key to kill.
 */
async function remove(key: string): Promise<boolean> {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch {
    return false;
  }
}
/**
 * Loads something from storage and runs it thru JSON.parse.
 *
 * @param key The key to fetch.
 */
async function getObject<T>(key: string): Promise<T | null> {
  try {
    const almostThere = await AsyncStorage.getItem(key);
    return typeof almostThere === "string" ? JSON.parse(almostThere) : null;
  } catch {
    return null;
  }
}

export {
  save,
  saveObject,
  get,
  getObject,
  remove,
  KEY
};
