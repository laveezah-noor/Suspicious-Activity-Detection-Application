import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator";
import { useColorScheme, StatusBar } from "react-native";
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import TripDetailsScreen from "../screens/TripDetailsScreen";
import WelcomeScreen from "../screens/WelcomeScreen.js";
import SignupScreen from "../screens/SignupScreen";
import LoginScreen from "../screens/LoginScreen";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

const Stack = createSharedElementStackNavigator();
// const Drawer = createDrawerNavigator();

const MainNavigator = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <NavigationContainer>
      {/* <Drawer.Navigator>
        <Drawer.Screen 
        name="Home" 
        component={TabNavigator}
        options={{
          headerShown: false,
          useNativeDriver: true,
          
          gestureEnabled: false,
          opacity: progress,
        }}
        />
        {/* <Drawer.Screen name="Settings" component={SettingsScreen} /> */}
      {/* </Drawer.Navigator> */} 
      {/* <StatusBar hidden /> */}
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Stack.Navigator>
      <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{
              headerShown: false
            }}
          />
          
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{
              headerShown: false
            }}
          />          
        <Stack.Screen
          name="Root"
          component={TabNavigator}
          options={{
            headerShown: false,
            useNativeDriver: true,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="TripDetails"
          component={TripDetailsScreen}
          options={{
            headerShown: false,
            useNativeDriver: true,
            gestureEnabled: false,
            cardStyleInterpolator: ({current: {progress}}) => ({
              cardStyle: {
              },
            }),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
