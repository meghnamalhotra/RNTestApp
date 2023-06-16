/**
 * @author Rahul Rajput
 * @email rahul@studiographene.com
 * @create date 2020-05-06 09:52:09
 * @modify date 2022-11-29 12:18:31
 * @desc [Registration screen]
 */
/* eslint-disable no-return-assign */
/* eslint-disable react-native/no-inline-styles */

import React, {useCallback, useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import SGHeader from '../../components/SGHeader';
import WrappedComponent from '../../components/WrapperComponent';
import SGTouchable from '../../components/SGTouchable';
import {ScreenNames} from '../../constants/Constants';
import {AuthContext} from './AuthContext';
import {Texts} from '../../constants/Strings';
import {register} from '../../redux/user/Action';

const Register = props => {
  const dispatch = useDispatch();
  const {setToken} = useContext(AuthContext);
  const onLoginPress = useCallback(() => {
    const onSuccess = userData => {
      setToken(userData?.token);
    };
    dispatch(register(onSuccess));
  }, [dispatch, setToken]);
  return (
    <>
      <SGHeader title={Texts.register} />
      <View style={styles.container}>
        <Text>Register screen</Text>
        <SGTouchable
          onPress={() => {
            props.navigation.navigate(ScreenNames.LoginScreen);
          }}>
          <Text>Goto Login</Text>
          <SGTouchable onPress={onLoginPress}>
            <Text style={styles.registerText}>Login</Text>
          </SGTouchable>
        </SGTouchable>
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
  registerText: {
    marginTop: 50,
    fontWeight: '500',
    fontSize: 20,
  },
});

export default WrappedComponent(Register);
