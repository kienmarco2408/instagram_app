import { View, Text, Dimensions, TouchableOpacity, Image } from 'react-native';
import React, { useRef, useState } from 'react';
import { Video, AVPlaybackStatus } from 'expo-av';
import Ionic from 'react-native-vector-icons/Ionicons';

const SingleReel = ({ item, index, currentIndex }) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const videoRef = useRef(null);

  const onBuffer = (buffer) => {
    console.log('buffering', buffer);
  };
  const onError = (error) => {
    console.log('error', error);
  };

  const [mute, setMute] = useState(false);

  return (
    <View
      style={{ width: windowWidth, height: windowHeight, position: 'relative' }}
    >
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setMute(!mute)}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}
      >
        <Video
          videoRef={videoRef}
          onBuffer={onBuffer}
          onError={onError}
          repeat={true}
          resizeMode="cover"
          paused={false}
          source={require('../../storage/video/video1.mp4')}
          isMuted={mute}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
          }}
          shouldPlay={true}
          isLooping={true}
        />
      </TouchableOpacity>
      <Ionic
        name="volume-mute"
        style={{
          fontSize: mute ? 20 : 0.001,
          color: 'white',
          position: 'absolute',
          top: windowHeight / 2.3,
          left: windowWidth / 2.3,
          backgroundColor: 'rgba(52,52,52,0.9)',
          borderRadius: 100,
          padding: mute ? 20 : 0.001,
        }}
      />
      <View>
        <View>
          <TouchableOpacity>
            <View>
              <Image />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SingleReel;
