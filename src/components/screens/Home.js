import React from 'react';
import { View, Text, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { Lobster_400Regular } from '@expo-google-fonts/lobster';
import { useFonts } from '@expo-google-fonts/lobster';
import AppLoading from 'expo-app-loading';

import Stories from '../screenComponents/Stories';

const Home = () => {
  let [fontsLoaded, error] = useFonts({
    Lobster_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingHorizontal: 15,
          alignItems: 'center',
        }}
      >
        <FontAwesome name="plus-square-o" style={{ fontSize: 24 }} />
        <Text
          style={{
            fontFamily: 'Lobster_400Regular',
            fontSize: 25,
            fontWeight: '500',
          }}
        >
          Instagram
        </Text>
        <Feather name="navigation" style={{ fontSize: 24 }} />
      </View>
      <ScrollView>
        <Stories />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
