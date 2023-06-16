/**
 * @author Meghna Malhotra
 * @email meghna.malhotra@studiographene.com
 * @create date 2022-06-30 14:13:20
 * @modify date 2022-11-29 11:39:10
 * @desc Util file for AsyncStorage
 */

import AsyncStorage from '@react-native-async-storage/async-storage';
import Logger from './LoggerUtil';

export const setAsync = async function (key, data) {
  try {
    if (typeof data !== 'string') {
      data = JSON.stringify(data);
    }
    await AsyncStorage.setItem(key, data);
  } catch (error) {
    Logger.warn('Async Error set error', error);
  }
};

export const getAsync = async function (key, isParsed = false) {
  try {
    let data = await AsyncStorage.getItem(key);
    if (data && isParsed) {
      data = JSON.parse(data);
    }
    return data;
  } catch (error) {
    Logger.warn('Async Error get error', error);
  }
};

export const removeAsync = async function (key) {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    Logger.warn('Async Error remove error', error);
  }
};

export const clearAsync = async function () {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    Logger.warn('Async Error clear error', error);
  }
};
