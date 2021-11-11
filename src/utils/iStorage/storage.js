import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 *
 * @param {*} key
 * @param {*} value
 * @param {*} duration in milliseconds
 */
async function setItem(key, value, duration = -1) {
  if (!key || !value) {
    throw new Error("Missing key or value");
  }

  const data = {
    key,
    value,
    time: new Date().getTime(),
    duration,
  };

  await AsyncStorage.setItem(key, JSON.stringify(data));
}

/**
 *
 * @param key The key to get
 * @returns Value for the key stored in storage
 */
async function getItem(key, throwException = false) {
  if (!key) {
    throw new Error("Missing key or value");
  }

  const result = await AsyncStorage.getItem(key);

  if (!result) {
    return null;
  }

  const data = JSON.parse(result);
  if (data?.duration && data?.duration !== -1) {
    if (new Date().getTime() - data?.time > data?.duration) {
      if (throwException) {
        throw new Error("STORAGE_DATA_EXPIRED");
      } else {
        return null;
      }
    }
  }
  return data?.value;
}

/**
 * Remove value stored in the key
 * @param key
 */
async function removeItem(key) {
  if (!key) {
    throw new Error("Missing key or value");
  }

  await AsyncStorage.removeItem(key);
}

/**
 * Clear all data in storage
 */
async function clear() {
  await AsyncStorage.clear();
}

export default {
  setItem,
  getItem,
  removeItem,
  clear,
};
