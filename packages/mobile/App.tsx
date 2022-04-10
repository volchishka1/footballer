import React from 'react';
import {Button, Text, View} from 'react-native';
import Config from 'react-native-config';
import {myString} from '@footballer/common';
import { decrement, increment, useAppDispatch, useAppSelector, AppRootStateType } from '@footballer/redux';


export const App = () => {
    const count = useAppSelector((state: AppRootStateType) => state.toolkit.count);
    const dispatch = useAppDispatch();
    const onIncreasePress = () => {
        // @ts-ignore
        dispatch(increment(count));
    };
    const onDecreasePress = () => {
        // @ts-ignore
        dispatch(decrement(count));
    };
  return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>value: {count}</Text>
          <Button title={'increment'} onPress={onIncreasePress}>
              {'+'}
          </Button>
          <Button title={'decrement'} onPress={onDecreasePress}>
              {'-'}
          </Button>
            <Text>{myString()}</Text>
            <Text>`${Config.REACT_APP_BASE_URL}`</Text>
        </View>
  );
};