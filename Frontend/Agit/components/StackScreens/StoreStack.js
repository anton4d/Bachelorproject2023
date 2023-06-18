import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import StoresScreen from '../Mainscreens/StoresScreen';
import StoreScreen from "../propScreens/StoreScreen";
import ProductScreen from "../propScreens/ProductScreen";

const Stack = createNativeStackNavigator();
const StoreStack = () => {

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Stores"
                          component={StoresScreen}/>
            <Stack.Screen name={"MockedDataScreen"}
                          component={StoreScreen}/>
            <Stack.Screen name={"product"} component={ProductScreen}/>
        </Stack.Navigator>
    );
};


export default StoreStack;