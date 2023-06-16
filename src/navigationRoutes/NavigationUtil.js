/**
 * @author Himanshu Yadav
 * @email himanshu.yadav@studiographene.com
 * @create date 2022-06-23 18:52:03
 * @modify date 2022-08-28 17:21:10
 * @desc Util file for navigators which contains screenOptions to apply on navigators screens, i.e. headerShown
 */

import React from 'react';
import {Colors, ScreenNames} from '../constants/Constants';
import ProfileIcon from '../assets/svgs/profile.svg';
import DiscoveryIcon from '../assets/svgs/discovery.svg';
import AIcon from '../assets/svgs/ai.svg';

export const stackScreenOptions = {
  headerShown: false,
  animation: 'slide_from_right',
};

export const tabScreenOptions = ({route}) => ({
  tabBarIcon: ({color}) => {
    if (route.name === ScreenNames.Discovery) {
      return <DiscoveryIcon height={30} width={30} fill={color} />;
    } else if (route.name === ScreenNames.Profile) {
      return <ProfileIcon height={30} width={30} fill={color} />;
    }else if (route.name === ScreenNames.ChatBot) {
      return <AIcon height={30} width={30} fill={color} />;
    }else if (route.name === ScreenNames.ImageGenerator) {
      return <AIcon height={30} width={30} fill={color} />;
    }
  },
  tabBarActiveTintColor: Colors.glOrange,
  tabBarInactiveTintColor: Colors.glGrey,
  headerShown: false,
});

export const drawerScreenOptions = {
  drawerType: 'front',
  headerShown: false,
};
