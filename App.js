/* eslint-disable react-hooks/exhaustive-deps */
/**
 * Forms
 * App
 * @author-Himanshu Yadav
 * @modify date 2022-11-29 12:56:42
 */

import React, {useEffect, useState, useMemo, useCallback} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {AsyncKeys} from './src/constants/Constants';
import ErrorBoundary from './src/components/ErrorBoundary';
import {StatusBar} from 'react-native';
import Store from './src/store';
import AppNavigator from './src/navigationRoutes';
import {PersistGate} from 'redux-persist/integration/react';
import RNAsyncStorageFlipper from 'rn-async-storage-flipper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo, {NetworkStatusProvider} from './src/network/NetworkStatus';
import {getAsync} from './src/utils/AsyncUtil';
import {AuthProvider} from './src/screenModules/login/AuthContext';
import {setUserData} from './src/redux/user/Action';
import GeneralStatusBarColor from './src/components/GeneralStatusBar';

const {store, persistor} = Store();
const App = () => {
  const [isConnectionAvailable, setConnectionAvailable] = useState(true);
  const [token, setToken] = useState(null);
  useEffect(() => {
    //Enable async storage flipper plugin in dev mode
    if (__DEV__) {
      RNAsyncStorageFlipper(AsyncStorage);
    }
    const netUnsubscribeFunc = NetInfo.addEventListener(state => {
      setConnectionAvailable(state.isConnected);
    });
    checkLogin();
    return () => {
      netUnsubscribeFunc();
    };
  }, []);

  const checkLogin = useCallback(async () => {
    const userData = await getAsync(AsyncKeys.userData, true);
    if (userData) {
      store.dispatch(setUserData(userData));
      setToken(userData.token);
    }
  }, []);

  const authContextData = useMemo(() => {
    return {
      token: token,
      setToken: setToken,
    };
  }, [token]);

  return (
    <ErrorBoundary>
      <SafeAreaProvider>
        <NetworkStatusProvider value={isConnectionAvailable}>
          <AuthProvider value={authContextData}>
            <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
              <GeneralStatusBarColor backgroundColor="#000" barStyle="light-content"/>
                <AppNavigator />
              </PersistGate>
            </Provider>
          </AuthProvider>
        </NetworkStatusProvider>
      </SafeAreaProvider>
    </ErrorBoundary>
  );
};

export default App;
