import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "../Mainscreens/HomeScreen";
import ProductScreen from "../propScreens/ProductScreen";
import StoreScreen from "../propScreens/StoreScreen";


const Stack = createNativeStackNavigator();
const HomeStack = () => {

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="home"
                          component={HomeScreen}/>
            <Stack.Screen name={"store"}
                          component={StoreScreen}/>
            <Stack.Screen name={"product"}
                          component={ProductScreen}/>
        </Stack.Navigator>
    );
};


export default HomeStack;