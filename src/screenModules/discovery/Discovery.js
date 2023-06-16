/**
 * @author Rahul Rajput
 * @email rahul@studiographene.com
 * @create date 2020-05-06 09:51:44
 * @modify date 2022-08-28 17:37:53
 * @desc [Discovery screen placeholder]
 */

/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import WrappedComponent from '../../components/WrapperComponent';
import SGTouchable from '../../components/SGTouchable';
import {useDispatch, useSelector} from 'react-redux';
import {getUserList} from '../../redux/user/Action';
import SGHeader from '../../components/SGHeader';
import {Texts} from '../../constants/Strings';

const Discovery = props => {
  const dispatch = useDispatch();
  const {userList} = useSelector(state => state.userReducer);

  const getData = () => {
    props.showLoader();
    const onSuccess = () => {
      props.hideLoader();
    };
    const onError = () => {
      props.hideLoader();
    };
    dispatch(getUserList(onSuccess, onError));
  };

  return (
    <>
      <SGHeader title={Texts.discovery} showBack={false} />
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex: 10}}>
          <Text>Discovery page</Text>
          <View style={{margin: 20}}>
            <SGTouchable onPress={getData}>
              <Text>Press here</Text>
            </SGTouchable>
            <FlatList
              data={userList}
              renderItem={({item}) => (
                <View
                  style={{
                    flex: 1,
                    marginBottom: 10,
                    backgroundColor: 'pink',
                    width: '100%',
                  }}>
                  <Text>{item.name}</Text>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
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
  subView: {
    flex: 1,
    position: 'absolute',
    right: 0,
    backgroundColor: '#FFFFFF',
    height: 500,
  },
});

export default WrappedComponent(Discovery);
