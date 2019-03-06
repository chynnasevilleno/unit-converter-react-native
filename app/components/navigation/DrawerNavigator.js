import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import MassScreen from '../screens/MassScreen';
import LengthScreen from '../screens/LengthScreen';
import TimeScreen from '../screens/TimeScreen';

import MenuDrawer from '../components/MenuDrawer';

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
	drawerWidth: WIDTH*0.83,
	contentComponent: ({ navigation }) => {
		return(<MenuDrawer navigation={navigation} />)
	}
}

const DrawerNavigator =  createDrawerNavigator(
	{
		Mass: {
			screen: MassScreen
		},
		Length: {
			screen: LengthScreen
		},
		Time: {
			screen: TimeScreen
		}
	},
	DrawerConfig
);

export default createAppContainer(DrawerNavigator);