import DeviceInfo from 'react-native-device-info';

export const isTablet = DeviceInfo.isTablet();
export const appVersion = DeviceInfo.getVersion();
export const applicationId = DeviceInfo.getBundleId();
