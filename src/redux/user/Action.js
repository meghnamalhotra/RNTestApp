import Urls from '../../network/NetworkUrls';
import NetworkManager from '../../network/NetworkManager';
import {GET_USER_LIST, LOGOUT, SAVE_USER_DATA} from './Constants';
import {parseUserList} from './ParseData';
import {removeAsync, setAsync} from '../../utils/AsyncUtil';
import {AsyncKeys} from '../../constants/Constants';

export const getUserList =
  (onSuccess = () => {}, onError = () => {}) =>
  async dispatch => {
    const apiResponse = await NetworkManager.get(Urls.userList);
    if (apiResponse?.apiSuccess && apiResponse?.responseData?.length) {
      dispatch({
        type: GET_USER_LIST,
        userList: parseUserList(apiResponse?.responseData),
      });
      onSuccess();
    } else {
      onError();
    }
  };

export const login =
  (onSuccess = () => {}, onError = () => {}) =>
  dispatch => {
    // Using dummy data to imitate auth flow
    const userData = {
      id: 1,
      firstName: 'Jon',
      lastName: 'Doe',
      email: 'doejon@gmail.com',
      token: 'akdladkflankflasdkfalsdalkskda',
    };
    dispatch(setUserData(userData));
    saveData(userData);
    onSuccess(userData);
  };

export const register =
  (onSuccess = () => {}, onError = () => {}) =>
  dispatch => {
    // Using dummy data to imitate auth flow
    const userData = {
      id: 1,
      firstName: 'Jon',
      lastName: 'Doe',
      email: 'doejon@gmail.com',
      token: 'akdladkflankflasdkfalsdalkskda',
    };
    dispatch(setUserData(userData));
    saveData(userData);
    onSuccess(userData);
  };

export const logout = (onSuccess = () => {}) => {
  onSuccess();
  NetworkManager.setAuthToken(null);
  removeAsync(AsyncKeys.userData);
  return {
    type: LOGOUT,
  };
};

export const setUserData = data => {
  NetworkManager.setAuthToken(data.token);
  return {
    type: SAVE_USER_DATA,
    userData: data,
  };
};

export const saveData = data => {
  setAsync(AsyncKeys.userData, data);
};
