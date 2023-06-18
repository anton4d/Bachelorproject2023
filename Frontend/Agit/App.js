import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Ionicons } from 'react-native-vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeStack from "./components/StackScreens/HomeStack";
import SearchScreen from './components/Mainscreens/SearchScreen';
import SettingsScreen from './components/Mainscreens/SettingsScreen';
import StoreStack from './components/StackScreens/StoreStack';
import SettingsScreenNotLoggedIn from './components/Mainscreens/SettingsScreenNotLoggedIn';
import WelcomeStack from "./components/welcomeScreens/WelcomeStack";





const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Hjem"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ffffff', borderBottomColor: '#03a43e', borderBottomWidth: 2,
        },
        headerTitleAlign: 'center',
        headerTintColor: '#03a43e',
        tabBarStyle: { backgroundColor: '#ffffff', borderTopColor: '#03a43e', borderTopWidth: 2,},
        tabBarActiveTintColor: '#ffffff',
        tabBarActiveBackgroundColor: '#03a43e',
        tabBarInactiveTintColor: '#03a43e',
        tabBarInactiveBackgroundColor: '#ffffff',
        tabBarLabelStyle: { fontSize: 13, fontWeight: 'bold' },
      }}
    >
      <Tab.Screen
        name="Hjem"
        component={HomeStack}
        options={{
          tabBarLabel: 'Hjem',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Gemte Butikker"
        component={StoreStack}
        options={{
          tabBarLabel: 'Gemte Butikker',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="store" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Søg"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Søg',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="store-search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Indstillinger"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Indstillinger',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-sharp" color={color} size={size} />
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
    else if (value === "true") {
      //console.log('The app has been opened before but the welcome/setup is not done');
      return true;
    }
    else {
      //console.log("the app has been opened before and welcome/setup is done")
      //await AsyncStorage.removeItem("isFirstTimeOpeningAndNotDoneWithWelcome")
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
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        {isFirstTime ? (
          <Stack.Screen name="welcomeStack">
            {(props) => <WelcomeStack updateIsFirstTime={updateIsFirstTime} />}
          </Stack.Screen>

        ) : (
          <Stack.Screen name={"MyTabs"} component={MyTabs} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App