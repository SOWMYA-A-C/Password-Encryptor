import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
//import ScheduleScreen from '../screens/ScheduleScreen';
import CalenderScreen from '../screens/CalenderScreen';
import PasswordEncryptor from '../screens/PasswordEncryptor';
//import PasswordDecryptor from '../screens/PasswordDecryptor'


export const BottomTabNavigator = createBottomTabNavigator({
    // PasswordDecryptor:{
    //     screen:PasswordDecryptor,
    //     navigationOptions:{
    //       tabBarIcon:<Image source = {require('../assets/scheduling.png')} style = {{borderRadius:15, width:20, height:20}}/>,
    //       tabBarLabel:'Password Decryptor',
    //     },
    //   },
      CalenderScreen:{
        screen:CalenderScreen,
        navigationOptions:{
          tabBarIcon:<Image source = {require('../assets/calender.webp')} style = {{borderRadius:15, width:20, height:20}}/>,
          tabBarLabel:'Calendar Screen',
        },
      },
      PasswordEncryptor:{
        screen:PasswordEncryptor,
        navigationOptions:{
          tabBarIcon:<Image source = {require('../assets/passwordEncryption.gif')} style = {{borderRadius:15, width:20, height:20}}/>,
          tabBarLabel:'Password Encryptor',
        }
      }
});

