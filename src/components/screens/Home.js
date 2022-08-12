import React from 'react';
import { View, Text, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { Lobster_400Regular } from '@expo-google-fonts/lobster';
import { useFonts } from '@expo-google-fonts/lobster';
import AppLoading from 'expo-app-loading';
import Ionic from 'react-native-vector-icons/Ionicons';

import Stories from '../screenComponents/Stories';
import Post from '../screenComponents/Post';

const Home = () => {
  let [fontsLoaded, error] = useFonts({
    Lobster_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
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
        <Post />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
          }}
        >
          <Ionic
            name="ios-reload-circle-sharp"
            style={{ fontSize: 60, opacity: 0.2 }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
