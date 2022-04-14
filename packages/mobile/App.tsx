import React from 'react';
import {Button, Text, View} from 'react-native';
import Config from 'react-native-config';
import {myString} from '@footballer/common';
import {
    decrement,
    increment,
    useAppDispatch,
    useAppSelector,
    getCountriesFetch,
    ProvideredStore,
    createGlobalStore
} from '@footballer/redux';
import AsyncStorage from "@react-native-async-storage/async-storage";


const App = () => {
    const count = useAppSelector((state) => state.toolkit.count);
    const countries = useAppSelector((state) => state.toolkit.countries);
    const dispatch = useAppDispatch();
    const data = JSON.stringify(countries);
    const dataSlice = data.slice(0, 30);

    const getCountries = () => {
        dispatch(getCountriesFetch());
    };

    const onIncreasePress = () => {
        dispatch(increment());
    };
    const onDecreasePress = () => {
        dispatch(decrement());
    };

    const store = createGlobalStore(AsyncStorage);

    return (
        // @ts-ignore
        <ProvideredStore store={store}>
            <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
                <Text>data = {dataSlice}</Text>
                <Button title={'ADD Countries'} onPress={getCountries}>
                    {'Получить страны'}
                </Button>
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
        </ProvideredStore>
    );
};

export default App;