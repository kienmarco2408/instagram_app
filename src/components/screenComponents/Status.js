import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Animated,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const Status = ({ route, navigation }) => {
  const { name } = route.params;
  const { image } = route.params;

  useEffect(() => {
    let timer = setTimeout(() => {
      navigation.goBack();
    }, 5000);

    Animated.timing(progress, {
      toValue: 5,
      duration: 5000,
      useNativeDriver: false,
    }).start();
    return () => clearTimeout(timer);
  }, []);

  const [progress, setProgress] = useState(new Animated.Value(0));

  const progressAnimation = progress.interpolate({
    inputRange: [0, 5],
    outputRange: ['0%', '100%'],
  });

  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : null}
      >
        <View
          style={{
            backgroundColor: 'black',
            height: '100%',
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              height: 3,
              width: '95%',
              borderWidth: 1,
              backgroundColor: 'gray',
              position: 'absolute',
              top: 18,
            }}
          >
            <Animated.View
              style={{
                height: '100%',
                backgroundColor: 'white',
                width: progressAnimation,
              }}
            ></Animated.View>
          </View>
          <View
            style={{
              padding: 15,
              flexDirection: 'row',
              alignItems: 'center',
              position: 'absolute',
              top: 12,
              left: 0,
              width: '90%',
            }}
          >
            <View
              style={{
                borderRadius: 100,
                width: 30,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image
                source={image}
                style={{
                  backgroundColor: 'orange',
                  borderRadius: 100,
                  resizeMode: 'cover',
                  width: '92%',
                  height: '92%',
                }}
              />
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                width: '100%',
              }}
            >
              <Text style={{ color: 'white', fontSize: 15, paddingLeft: 10 }}>
                {name}
              </Text>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionic
                  name="close"
                  style={{ fontSize: 20, color: 'white', opacity: 0.6 }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Image
            source={image}
            style={{ position: 'absolute', width: '100%', height: 550 }}
          />

          <View
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              marginVertical: 10,
              width: '100%',
            }}
          >
            <TextInput
              placeholder="Send message"
              placeholderTextColor="white"
              style={{
                borderColor: 'white',
                borderRadius: 25,
                width: '85%',
                height: 50,
                paddingLeft: 20,
                borderWidth: 1,
                fontSize: 18,
                color: 'white',
              }}
            />
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Feather
                name="navigation"
                style={{ fontSize: 30, color: 'white' }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Status;
