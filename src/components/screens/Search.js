import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import SearchBox from '../screenComponents/SearchBox';
import SearchContent from '../screenComponents/SearchContent';

const Search = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'white',
          position: 'relative',
        }}
      >
        <ScrollView>
          <SearchBox />
          <SearchContent />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Search;
