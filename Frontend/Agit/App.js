import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from './components/Mainscreens/Homescreen';
import SearchScreen from './components/Mainscreens/Searchscreen';
import SettingsScreen from './components/Mainscreens/Settingsscreen';
import StoresScreen from './components/Mainscreens/Storesscreen';
import { View, Text,} from 'react-native';





const Tab = createBottomTabNavigator();


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
async function checkIfFirstTimeOpening() {
  try {
    const value = await AsyncStorage.getItem('isFirstTimeOpening');
    if (value === null) {
      await AsyncStorage.setItem('isFirstTimeOpening', 'false');
      console.log('This is the first time the app is opened');
      return true;
    } else {
      console.log('The app has been opened before');
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
}

function App() {
  const [isFirstTime, setIsFirstTime] = useState(true);

  useEffect(() => {
    async function checkFirstTime() {
      const isFirstTimeOpening = await checkIfFirstTimeOpening();
      setIsFirstTime(isFirstTimeOpening);
    }

    checkFirstTime();
  }, []);

  return (
      <NavigationContainer>
        {isFirstTime ? (
            <View><Text>This is the first time the app is opened</Text></View>

        ) : (
            <MyTabs />
        )}
      </NavigationContainer>
  );
}
export default App