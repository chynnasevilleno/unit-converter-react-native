import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DrawerNavigator from './app/components/navigation/DrawerNavigator';

export default class App extends React.Component {
  render() {
    return (
      <DrawerNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
