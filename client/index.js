/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import TabNavigator from './src/navigations/TabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import MainNavigator from './src/navigations/MainNavigator';

AppRegistry.registerComponent(appName, () => MainNavigator);
