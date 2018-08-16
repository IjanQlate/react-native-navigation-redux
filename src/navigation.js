import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import HomeScreen from './modules/home/home'


export const StackNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
});

export const DrawerNavigator = createDrawerNavigator({
    Home: {
      screen: HomeScreen
    },
  });