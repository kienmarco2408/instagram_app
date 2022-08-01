import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Lobster_400Regular, useFonts } from '@expo-google-fonts/lobster';
import AppLoading from 'expo-app-loading';

export default function App() {
  let [fontsLoaded, error] = useFonts({
    Lobster_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'Lobster-Regular' }}>
        Open up App.js to start working on your app!
      </Text>
      <Ionic name="play" style={{ fontSize: 20 }} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
