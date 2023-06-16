import React, {useCallback, useContext} from 'react';
import {Alert, TouchableOpacity} from 'react-native';
import {NetworkStatusContext} from '../network/NetworkStatus';
import {Errors} from '../constants/Strings';

const SGTouchable = props => {
  const {children, onPress = () => {}, checkConnection = true} = props;
  const isConnectionAvailable = useContext(NetworkStatusContext);
  const onTouchablePress = useCallback(() => {
    if (isConnectionAvailable) {
      onPress();
    } else {
      Alert.alert(Errors.alert, Errors.noInternet);
    }
  }, [isConnectionAvailable, onPress]);
  return (
    <TouchableOpacity
      {...props}
      onPress={checkConnection ? onTouchablePress : onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default SGTouchable;
