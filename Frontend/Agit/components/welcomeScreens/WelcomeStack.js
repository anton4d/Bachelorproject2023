import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import WelcomeScreen from "./WelcomeScreen";
import OneTimeLocation from "./OneTimeLocation";
import WelcomeLogIn from "./WelcomeLogIn";
import WelcomeSignIn from "./WelcomeSignIn";
import WelcomeForgotPassword from "./WelcomeForgotPassword";
import Walkthrough from "./Walkthrough";



const Stack = createNativeStackNavigator();
const WelcomeStack = ({updateIsFirstTime}) => {

  return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="welcome"
                      component={WelcomeScreen}/>
        <Stack.Screen name={"OneTimeLocation"}
                      component={OneTimeLocation}/>
        <Stack.Screen name={"Login"}
                      component={WelcomeLogIn}/>
        <Stack.Screen name={"SignIn"}
                      component={WelcomeSignIn}/>
        <Stack.Screen name={"ForgotPassword"}
                      component={WelcomeForgotPassword}/>
        <Stack.Screen name={"Walktrough"}>
          {(props) => <Walkthrough  WelcomeDone={updateIsFirstTime} />}
        </Stack.Screen>
        </Stack.Navigator>
  );
};


export default WelcomeStack;