import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const SearchContent = (props) => {
  const searchData = [
    {
      id: 0,
      images: [
        require('../../storage/images/post_1.jpg'),
        require('../../storage/images/post_2.jpg'),
        require('../../storage/images/post_3.jpg'),
        require('../../storage/images/post_4.jpg'),
        require('../../storage/images/post_5.jpg'),
        require('../../storage/images/post_6.jpg'),
      ],
    },
    {
      id: 1,
      images: [
        require('../../storage/images/post_7.jpg'),
        require('../../storage/images/post_8.jpg'),
        require('../../storage/images/post_9.jpg'),
        require('../../storage/images/post_10.jpg'),
        require('../../storage/images/post_11.jpg'),
        require('../../storage/images/post_12.jpg'),
      ],
    },
    {
      id: 2,
      images: [
        require('../../storage/images/post_13.jpg'),
        require('../../storage/images/post_14.jpg'),
        require('../../storage/images/post_15.jpg'),
      ],
    },
  ];
  return (
    <View>
      {searchData.map((data, index) => {
        return (
          <>
            {data.id === 0 ? (
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-evenly',
                }}
              >
                {data.images.map((imageData, imgIndex) => {
                  return (
                    <TouchableOpacity
                      onPressIn={() => props.data(imageData)}
                      onPressOut={() => props.data(null)}
                      style={{ paddingBottom: 2 }}
                    >
                      <Image
                        source={imageData}
                        style={{ width: 129, height: 150 }}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}
            {data.id === 1 ? (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    width: 261,
                    justifyContent: 'space-between',
                  }}
                >
                  {data.images.slice(0, 4).map((imageData, imgIndex) => {
                    return (
                      <TouchableOpacity
                        onPressIn={() => props.data(imageData)}
                        onPressOut={() => props.data(null)}
                        style={{ paddingBottom: 2 }}
                      >
                        <Image
                          source={imageData}
                          style={{ width: 129, height: 150 }}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>
                <TouchableOpacity
                  onPressIn={() => props.data(data.images[5])}
                  onPressOut={() => props.data(null)}
                  style={{ marginLeft: 2 }}
                >
                  <Image
                    source={data.images[5]}
                    style={{ width: 129, height: 300 }}
                  />
                </TouchableOpacity>
              </View>
            ) : null}
            {data.id === 2 ? (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                }}
              >
                <TouchableOpacity
                  onPressIn={() => props.data(data.images[2])}
                  onPressOut={() => props.data(null)}
                  style={{ paddingRight: 2 }}
                >
                  <Image
                    source={data.images[2]}
                    style={{ width: 260, height: 300 }}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    width: 130,
                    justifyContent: 'space-between',
                  }}
                >
                  {data.images.slice(0, 2).map((imageData, imgIndex) => {
                    return (
                      <TouchableOpacity
                        onPressIn={() => props.data(imageData)}
                        onPressOut={() => props.data(null)}
                        style={{ paddingBottom: 2 }}
                      >
                        <Image
                          source={imageData}
                          style={{ width: 129, height: 150 }}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            ) : null}
          </>
        );
      })}
    </View>
  );
};
export default SearchContent;
