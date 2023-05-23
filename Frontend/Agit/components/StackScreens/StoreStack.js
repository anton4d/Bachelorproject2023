import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import StoresScreen from '../Mainscreens/StoresScreen';
import MockedDataScreen from '../Mainscreens/MockedDataScreen';


const Stack = createNativeStackNavigator();
const StoreStack = () => {

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Stores"
                          component={StoresScreen}/>
            <Stack.Screen name={"MockedDataScreen"}
                          component={MockedDataScreen}/>
        </Stack.Navigator>
    );
};


export default StoreStack;