/**
 * @author Rahul Rajput
 * @email rahul@studiographene.com
 * @create date 2020-04-16 13:15:54
 * @modify date 2022-11-29 12:49:48
 * @desc [Just a placeholder for possible user profile screen]
 */
/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import SGHeader from '../../components/SGHeader';
import WrappedComponent from '../../components/WrapperComponent';
import {AuthContext} from '../login/AuthContext';
import {logout} from '../../redux/user/Action';
import SGTouchable from '../../components/SGTouchable';
import { ScreenNames } from '../../constants/Constants';

const Profile = () => {
  const {userData} = useSelector(state => state.userReducer);
  const navigation = useNavigation();
  const {setToken} = useContext(AuthContext);
  const dispatch = useDispatch();
  const onLogoutPress = useCallback(() => {
    const onSuccess = () => {
      setToken(null);
    };
    dispatch(logout(onSuccess));
  }, [dispatch, setToken]);

  return (
    <>
      <SGHeader showBack={navigation.canGoBack()} />
      <View style={styles.container}>
        {userData && (
          <>
            <Text style={styles.userDataText}>
              First Name: {userData.firstName}
            </Text>
            <Text style={styles.userDataText}>
              Last Name: {userData.lastName}
            </Text>
            <Text style={styles.userDataText}>Email: {userData.email}</Text>
            <SGTouchable onPress={onLogoutPress}>
              <Text style={styles.logoutText}>Logout</Text>
            </SGTouchable>
          </>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userDataText: {
    fontSize: 16,
    fontWeight: '400',
    marginTop: 20,
  },
  logoutText: {
    fontSize: 20,
    fontWeight: '500',
    marginTop: 50,
  },
});

export default WrappedComponent(Profile);
