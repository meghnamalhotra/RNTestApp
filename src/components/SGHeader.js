import React, {useCallback, useContext, useMemo} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Platform} from 'react-native';
import {SafeAreaInsetsContext} from 'react-native-safe-area-context';
import {Colors, Fonts} from '../constants/Constants';
import {useNavigation} from '@react-navigation/native';
import HamburgerIcon from '../assets/svgs/hamburger.svg';
import IosBack from '../assets/svgs/iosBack.svg';
import AndroidBack from '../assets/svgs/androidBack.svg';

type HeaderProps = {
  title: string,
  showBack: string,
};

const SGHeader = (props: HeaderProps) => {
  const {title, showBack = true} = props;
  const navigation = useNavigation();
  const insets = useContext(SafeAreaInsetsContext);
  const paddingStyle = useMemo(() => {
    return {
      paddingTop: insets?.top ? insets.top : 20,
    };
  }, [insets.top]);

  const onMenuPress = useCallback(() => {
    showBack ? navigation.goBack() : navigation.openDrawer();
  }, [navigation, showBack]);

  const BackIcon = useMemo(() => {
    return Platform.OS === 'android' ? AndroidBack : IosBack;
  }, []);

  return (
    <>
      <View style={[styles.container, paddingStyle]}>
        <TouchableOpacity onPress={onMenuPress} style={styles.sideView}>
          {showBack ? (
            <BackIcon height={20} width={20} fill={Colors.glBlack} />
          ) : (
            <HamburgerIcon />
          )}
        </TouchableOpacity>
        <Text style={styles.headerTitleStyle}>{title}</Text>
        <View style={styles.sideView} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingBottom: 20,
    alignItems: 'center',
  },
  headerTitleStyle: {
    flex: 1,
    fontSize: 16,
    fontFamily: Fonts.OpenSansMedium,
    textAlign: 'center',
    color: Colors.glBlack,
  },
  sideView: {
    flex: 0.2,
  },
});

export default SGHeader;
