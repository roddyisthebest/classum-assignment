import { useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Swiper from 'react-native-swiper';
import { FileType } from '../types';
const Slide = ({
  route: {
    params: { data, index },
  },
  navigation: { setOptions, goBack },
}: {
  route: { params: { index: number; data: string[] } };
  navigation: { setOptions: Function; goBack: Function };
}) => {
  return (
    <Swiper showsButtons={data.length !== 1} index={index}>
      {data.map((uri, index) => (
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
