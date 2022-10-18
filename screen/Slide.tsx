import { useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Swiper from 'react-native-swiper';
import { FileType } from '../types';
const Slide = ({
  route: {
    params: { item, index },
  },
}: {
  route: { params: { index: number; item: string[] } };
}) => {
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
