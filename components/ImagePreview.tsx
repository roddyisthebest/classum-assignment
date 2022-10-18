import React, { useState, useEffect, memo } from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Dimensions,
} from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

type NavigationParam = {
  Stack: {
    screen: string;
    params: {
      item: string[];
      index: number;
    };
  };
};
const ImagePreview = ({
  type,
  item,
}: {
  type: 'chat' | 'post';
  item: string[];
}) => {
  const [height, setHeight] = useState<number>(0);
  const navigation = useNavigation<NavigationProp<NavigationParam>>();

  useEffect(() => {
    if (item.length === 1) {
      setHeight(250);
    } else if (item.length === 2) {
      setHeight(150);
    } else {
      setHeight(95);
    }
  }, [item]);
  return (
    <View
      style={{
        height,
        marginVertical: type === 'chat' ? 5 : 0,
        marginTop: type === 'chat' ? 0 : 10,
        flexDirection: 'row',
        width: type === 'chat' ? Dimensions.get('window').width * 0.8 : '100%',
      }}
    >
      {item.map((uri: string, index: number) => {
        return index < 3 ? (
          <TouchableOpacity
            style={{ flex: 1, marginLeft: index !== 0 ? 10 : 0 }}
            key={index}
            onPress={() => {
              navigation.navigate('Stack', {
                screen: 'Slide',
                params: { item, index },
              });
            }}
          >
            {index === 2 && item.length - 3 !== 0 ? (
              <View style={styles.imagePlusBackground}>
                <Text style={styles.imagePlusText}>+{item.length - 3}</Text>
              </View>
            ) : null}

            <ImageBackground
              source={{
                uri,
              }}
              borderRadius={8}
              resizeMode={'cover'}
              style={styles.imageItem}
              defaultSource={require('../assets/loadingImage.png')}
            ></ImageBackground>
          </TouchableOpacity>
        ) : null;
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  imageItem: {
    flex: 1,
    borderRadius: 8,
    borderColor: '#e0e0e0',
    borderWidth: 1,
  },
  imagePlusBackground: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: '#00000078',
    zIndex: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagePlusText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
});
export default memo(ImagePreview);
