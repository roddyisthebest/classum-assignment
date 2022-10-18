import React, { useEffect } from 'react';
import { StyleSheet, ImageBackground, Platform, Pressable } from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/Ionicons';

const Slide = ({
  route: {
    params: { item, index },
  },
  navigation: { setOptions, goBack },
}: {
  route: { params: { index: number; item: string[] } };
  navigation: { setOptions: Function; goBack: Function };
}) => {
  useEffect(() => {
    setOptions({
      headerLeft: () =>
        Platform.OS === 'ios' ? (
          <Pressable
            onPress={() => {
              goBack();
            }}
          >
            <Icon name={'arrow-back'} color={'black'} size={25}></Icon>
          </Pressable>
        ) : null,
    });
  }, []);

  return (
    <Swiper showsButtons={item.length !== 1} index={index}>
      {item.map((uri, index) => (
        <ImageBackground
          source={{
            uri,
          }}
          resizeMode="contain"
          style={styles.item}
          key={index}
          defaultSource={require('../assets/loadingImage.png')}
        ></ImageBackground>
      ))}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Slide;
