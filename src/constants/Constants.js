/**
 * @author Rahul Rajput
 * @email rahul@studiographene.com
 * @create date 2020-05-06 09:51:53
 * @modify date 2022-11-29 11:15:12
 * @desc [Define all your constants here]
 */

import {Dimensions, Platform} from 'react-native';

export const deviceHeight = Dimensions.get('window').height;
export const deviceWidth = Dimensions.get('window').width;
export const IS_IOS = Platform.OS === 'ios';
export const IS_ANDROID = Platform.OS === 'android';

export const ScreenNames = {
  Discovery: 'Discovery',
  ChatBot : 'ChatBot',
  Profile: 'Profile',
  LoginScreen: 'LoginScreen',
  RegisterScreen: 'RegisterScreen',
  ForgotPasswordScreen: 'ForgotPasswordScreen',
  SplashScreen: 'SplashScreen',
  MyTabs: 'MyTabs',
  MyStack: 'MyStack',
  ImageGenerator: 'ImageGenerator',
};

export const Colors = {
  glWhite: '#F2F2F2',
  glGrey: '#707070',
  glBlack: '#2F2F2F',
  glOrange: '#FF8C63',
  glButtonOrange: '#FF8C68',
  white: '#FFFFFF',
  glPlaceholder: 'rgba(39, 39, 39, 0.3)',
  glTextLight: 'rgba(39, 39, 39, 0.7)',
  glTextGen: 'rgba(39, 39, 39, 1)',
};

export const Fonts = {
  OpenSansBold: 'OpenSans-Bold',
  OpenSansBoldItalic: 'OpenSans-BoldItalic',
  OpenSansExtraBold: 'OpenSans-ExtraBold',
  OpenSansExtraBoldItalic: 'OpenSans-ExtraBoldItalic',
  OpenSansItalic: 'OpenSans-Italic',
  OpenSansLight: 'OpenSans-Light',
  OpenSansLightItalic: 'OpenSans-LightItalic',
  OpenSansMedium: 'OpenSans-Medium',
  OpenSansMediumItalic: 'OpenSans-MediumItalic',
  OpenSansRegular: 'OpenSans-Regular',
  OpenSansSemiBold: 'OpenSans-SemiBold',
  OpenSansSemiBoldItalic: 'OpenSans-SemiBoldItalic',
};

export const AsyncKeys = {
  userData: '@userData',
};

export const Debug = {
  APILogs: true,
};

export const Numbers = {
  maxPhoneNo: 13,
  minPhoneNo: 6,
  maxContributionPercent: 100,
};
export const APIParameters = {
  //General
  id: '_id',
  data: 'data',
  userId: 'userId',
  UserId_: 'UserId',
  token: 'token',
  name: 'name',
  description: 'description',
  deviceToken: 'deviceToken',
  deviceId: 'deviceId',
  deviceType: 'deviceType',

  //User
  email: 'email',
  password: 'password',
  firstName: 'firstName',
  lastName: 'lastName',
  countryCode: 'countryCode',
  phoneNumber: 'phoneNumber',
  dateOfBirth: 'dob',
  residency: 'residency',
  nationality: 'nationality',
  receiveMarketing: 'receiveMarketing',
  imageUrl: 'imageUrl',
  referalCode: 'referedByCode',
  referedPhoneNumber: 'referedByPhoneNumber',
  accessCode: 'access_code',
};

export const LoginState = {
  login: 'logged in',
};

export const daysOfWeeks = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
