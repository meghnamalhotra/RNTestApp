/**
 * @author Rahul Rajput
 * @email rahul@studiographene.com
 * @create date 2020-04-17 11:00:06
 * @modify date 2020-04-29 13:02:17
 * @desc [Define your helper functions here]
 */

import {Dimensions, Platform, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Texts, Errors} from '../constants/Strings';

const Functions = {
  isIOS() {
    if (Platform.OS === 'ios') {
      return true;
    } else {
      return false;
    }
  },

  isIPhoneX() {
    if (Dimensions.get('window').height == 812.0) {
      return true;
    } else if (Dimensions.get('window').height == 896) {
      return true;
    } else {
      return false;
    }
  },

  getTopMargin() {
    var margin = 0;

    //Check if it's iOS
    if (this.isIOS) {
      margin = margin + 20;

      //Check if it's iPhone X
      if (this.isIPhoneX()) {
        margin = margin + 24;
      }
    }

    return margin;
  },

  getBottomMargin() {
    var margin = 0;

    if (this.isIPhoneX()) {
      margin = margin + 34;
    }

    return margin;
  },

  showErrorMessage(message) {
    Alert.alert(Errors.oops, message, [{text: Texts.ok, style: 'default'}], {
      cancelable: false,
    });
  },

  async saveUserId(id) {
    try {
      await AsyncStorage.setItem('@Example:userId', id);
    } catch (error) {
      // Error saving data
      console.log(`Save user id Error: ${error}`);
    }
  },

  async getUserId() {
    try {
      const userId = await AsyncStorage.getItem('@Example:userId');
      return userId;
    } catch (error) {
      // Error retrieving data
      console.log('Retrive user id Error', error);
      return [];
    }
  },

  async saveJWTAuth(jwtAuth) {
    try {
      await AsyncStorage.setItem('@Example:jwtAuth', jwtAuth);
    } catch (error) {
      // Error saving data
      console.log(`Save jwtAuth Error: ${error}`);
    }
  },

  async getCurrentJWTAuth() {
    try {
      const jwtAuth = await AsyncStorage.getItem('@Example:jwtAuth');
      return jwtAuth;
    } catch (error) {
      // Error retrieving data
      console.log('Retrive jwtAuth Error', error);
      return undefined;
    }
  },

  async saveVerificationInfo(verificationInfo) {
    const jsonVerificationInfo = JSON.stringify(verificationInfo);
    try {
      await AsyncStorage.setItem(
        '@Example:verificationInfo',
        jsonVerificationInfo,
      );
    } catch (error) {
      // Error saving data
      console.log(`Save verification info Error: ${error}`);
    }
  },

  async getVerificationInfo() {
    try {
      const jsonVerificationInfo = await AsyncStorage.getItem(
        '@Example:verificationInfo',
      );
      const verificationInfo = JSON.parse(jsonVerificationInfo);
      return verificationInfo;
    } catch (error) {
      // Error retrieving data
      console.log('Retrive is verification info Error', error);
      return undefined;
    }
  },

  async saveLoginState(state) {
    try {
      await AsyncStorage.setItem('@Example:loginState', state);
    } catch (error) {
      // Error saving data
      console.log(`Save login state Error: ${error}`);
    }
  },

  async getLoginState() {
    try {
      const state = await AsyncStorage.getItem('@Example:loginState');
      return state;
    } catch (error) {
      // Error retrieving data
      console.log('Retrive login state Error', error);
      return undefined;
    }
  },

  async logoutUser() {
    try {
      const state = await AsyncStorage.removeItem('@Example:loginState');
      await AsyncStorage.removeItem('@Example:jwtAuth');
      await AsyncStorage.removeItem('@Example:userId');
      await AsyncStorage.removeItem('@Example:verificationInfo');
      return state;
    } catch (error) {
      // Error retrieving data
      console.log('Error occured while logging user out', error);
      return undefined;
    }
  },

  getKeyboardBehavior() {
    if (Functions.isIOS()) {
      return 'padding';
    } else {
      return undefined;
    }
  },
  getMessageValidation(message) {
    if (/[a-zA-Z]/.test(message)) {
      return true;
    }
  },
};

module.exports = Functions;
