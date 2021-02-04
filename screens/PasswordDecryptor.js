// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import CalenderScreen from './CalenderScreen';
import { ListItem } from 'react-native-elements';
import { Icon } from 'react-native-vector-icons';
import { FlatList } from 'react-native-gesture-handler';

export default class PasswordDecryptor extends React.Component {

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> Decryptor </Text>
       
      </View>
    );
  }
}
