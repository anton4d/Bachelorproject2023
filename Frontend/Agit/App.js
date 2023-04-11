import * as React from 'react';
import { useState,useEffect } from 'react-native';
import { AsyncStorage } from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from './components/Mainscreens/Homescreen';
import SearchScreen from './components/Mainscreens/Searchscreen';
import SettingsScreen from './components/Mainscreens/Settingsscreen';
import StoresScreen from './components/Mainscreens/Storesscreen';
import WelcomeScreen from './components/welcomeScreens/WelcomeScreens';




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
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  const [isFirstTime, setIsFirstTime] = useState(false);


  useEffect(() => {
    // Check if the app is being opened for the first time
    AsyncStorage.getItem('isFirstTime').then((value) => {
      if (value === null) {
        // Set the value to indicate that it is the first time the app is opened
        AsyncStorage.setItem('isFirstTime', 'true');
        setIsFirstTime(true);
      } else {
        setIsFirstTime(false);
      }
    });
  }, []);
  const handleIsFirstTime = () => {
    AsyncStorage.setItem('isFirstTime', 'false');
    setIsFirstTime(false);
  };


    if (isFirstTime){
    return (
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen 
      name="welcomeScreen"
      component={WelcomeScreen}
      options={{ headerShown: false }}
      handleIsFirstTime={handleIsFirstTime}/>
      </Stack.Navigator>
      </NavigationContainer>
  );
  } else {
    return (
      <NavigationContainer>
      <MyTabs />
      </NavigationContainer>
  );
  }
}
export default App