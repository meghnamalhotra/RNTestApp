/* eslint-disable react-hooks/exhaustive-deps */
/**
 * @author Rahul Rajput
 * @email rahul@studiographene.com
 * @create date 2020-04-27 19:11:48
 * @modify date 2020-04-27 19:11:48
 * @desc [This is the main Splash Screen]
 */

/* eslint-disable no-return-assign */
/* eslint-disable react-native/no-inline-styles */

import React, {useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Functions from '../../utils/Functions';
import {LoginState} from '../../constants/Constants';
import WrappedComponent from '../../components/WrapperComponent';

const SplashScreen = props => {
  useEffect(() => {
    props.showLoader();
    checkLoginState();
  }, []);

  const checkLoginState = async () => {
    //Get current login state
    const state = await Functions.getLoginState();

    //Check the the user is logged in or not
    if (state === LoginState.login) {
      // User is logged in - send him to dashboard
      props.navigation.navigate('GoTabs');
    } else {
      // User is not logged in
      props.navigation.navigate('LoginScreen');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Splash screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default WrappedComponent(SplashScreen, {loader: true});
