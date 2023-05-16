import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/Mainscreens/Homescreen';
import SearchScreen from './components/Mainscreens/Searchscreen';
import SettingsScreen from './components/Mainscreens/Settingsscreen';
import SettingsScreenNotLoggedIn from './components/Mainscreens/SettingsScreenNotLoggedIn';
import StoresScreen from './components/Mainscreens/Storesscreen';
import WelcomeStack from "./components/welcomeScreens/WelcomeStack";
import { View, Text, Button, } from 'react-native';
import { IconButton } from '@react-native-material/core';





const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Stores"
        component={StoresScreen}
        options={{
          tabBarLabel: 'Saved Stores',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="store" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-search-outline" color={color} size={size} />
          ),
        }}
      />


      <Tab.Screen
        name="Indstillinger"
        component={SettingsScreenNotLoggedIn}
        options={{
          tabBarLabel: 'Indstillinger',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
          headerLeft: () => (
            <IconButton
              icon={props => <MaterialCommunityIcons name="arrow-left" {...props} />}
              onPress={() => navigate('Home')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
async function checkIfFirstTimeOpeningAndNotDoneWithWelcome() {
  try {
    const value = await AsyncStorage.getItem('isFirstTimeOpeningAndNotDoneWithWelcome');
    if (value === null) {
      await AsyncStorage.setItem('isFirstTimeOpeningAndNotDoneWithWelcome', 'true');
      //console.log('This is the first time the app is opened');
      return true;
    }
    else if(value === "true")  {
      //console.log('The app has been opened before but the welcome/setup is not done');
      return true;
    }
    else {
        //console.log("the app has been opened before and welcome/setup is done")
        await AsyncStorage.removeItem("isFirstTimeOpeningAndNotDoneWithWelcome")
        return false
      }
  } catch (error) {
    console.log(error);
    return false;
  }
}
async function setDoneWithWelcome(value) {
    try {
        await AsyncStorage.setItem('isFirstTimeOpeningAndNotDoneWithWelcome', value.toString())
    } catch (error) {
        console.log(error);
    }
}

function App() {
  const [isFirstTime, setIsFirstTime] = useState(false);

    const updateIsFirstTime = (value) => {
        console.log("doneWelcome")
        setDoneWithWelcome(value)
        setIsFirstTime(value);

    };

  useEffect(() => {
    async function checkFirstTime() {
      const isFirstTimeOpening = await checkIfFirstTimeOpeningAndNotDoneWithWelcome();
      setIsFirstTime(isFirstTimeOpening);
    }

    checkFirstTime();
  }, []);


  return (
      <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>

        {isFirstTime ? (
            <Stack.Screen name="welcomeStack">
                {(props) => <WelcomeStack  updateIsFirstTime={updateIsFirstTime} />}
            </Stack.Screen>

        ) : (
            <Stack.Screen name={"MyTabs"} component={MyTabs}/>
        )}
          </Stack.Navigator>
      </NavigationContainer>
  );
}
export default App