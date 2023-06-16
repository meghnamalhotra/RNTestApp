/**
 * @author Himanshu Yadav
 * @email himanshu.yadav@studiographene.com
 * @create date 2022-06-23 18:48:51
 * @modify date 2022-08-29 12:29:31
 * @desc A HOC to wrap screen components with provision to show and hide safe area and loader functionality
 */

/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */

import React, {useContext, useMemo, useState, useCallback} from 'react';
import {View, StyleSheet, ActivityIndicator, Dimensions} from 'react-native';
import {SafeAreaInsetsContext} from 'react-native-safe-area-context';
import {NetworkStatusContext} from '../network/NetworkStatus';

const {height, width} = Dimensions.get('screen');

function WrappedComponent(
  ScreenComponent,
  options = {topSafeArea: false, bottomSafeArea: true, initialLoader: false},
) {
  return props => {
    const {topSafeArea, bottomSafeArea, initialLoader} = options;
    const [isLoading, setLoading] = useState(initialLoader);
    const insets = useContext(SafeAreaInsetsContext);
    const isConnectionAvailable = useContext(NetworkStatusContext);
    const containerStyle = useMemo(() => {
      return [
        styles.container,
        topSafeArea && {paddingTop: insets.top},
        bottomSafeArea && {paddingBottom: insets.bottom},
      ];
    }, []);

    const showLoader = useCallback(() => {
      !isLoading && setLoading(true);
    }, [isLoading]);

    const hideLoader = useCallback(() => {
      setLoading(false);
    }, []);
    return (
      <View style={containerStyle}>
        <ScreenComponent
          insets={insets}
          isLoading={isLoading}
          showLoader={showLoader}
          hideLoader={hideLoader}
          isConnectionAvailable={isConnectionAvailable}
          {...props}
        />
        {isLoading && (
          <View style={styles.loader}>
            <ActivityIndicator size={'large'} animating={isLoading} />
          </View>
        )}
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loader: {
    position: 'absolute',
    height: height,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
});

export default WrappedComponent;
