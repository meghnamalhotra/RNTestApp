import React, {useCallback, useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import WrappedComponent from '../../components/WrapperComponent';
import SGTouchable from '../../components/SGTouchable';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../constants/Constants';
import {Texts} from '../../constants/Strings';
import SGHeader from '../../components/SGHeader';
import Config from 'react-native-config';
import {AuthContext} from './AuthContext';
import {login} from '../../redux/user/Action';

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {setToken} = useContext(AuthContext);
  const onPress = useCallback(() => {
    navigation.navigate(ScreenNames.RegisterScreen);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onLoginPress = useCallback(() => {
    const onSuccess = userData => {
      setToken(userData?.token);
    };
    dispatch(login(onSuccess));
  }, [dispatch, setToken]);

  return (
    <>
      <View style={styles.container}>
        <Text>Login Screen</Text>
        <Text>{Config?.WELCOME_MESSAGE}</Text>
        <SGTouchable onPress={onPress}>
          <Text>Go to Register</Text>
        </SGTouchable>
        <SGTouchable onPress={onLoginPress}>
          <Text style={styles.loginText}>Login</Text>
        </SGTouchable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    marginTop: 50,
    fontWeight: '500',
    fontSize: 20,
  },
});

export default WrappedComponent(Login);
