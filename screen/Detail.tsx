import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Dimensions,
  Platform,
  Keyboard,
} from 'react-native';
import Post from '../components/Post';
import { useSelector, useDispatch } from 'react-redux';

import Upload from '../components/Upload';
import {
  addChat,
  addPosts,
  initialStateProps,
  resetChats,
  setVariation,
} from '../store/slice';
import Chat from '../components/Chat';
import { db } from '../firebase';
import { ChatDataType } from '../types';
const Detail = ({
  navigation: { navigate },
}: {
  navigation: { navigate: Function };
}) => {
  const renderItem = ({ item }: { item: ChatDataType }) => <Chat item={item} />;
  const dispatch = useDispatch();
  const target = useRef<any>();
  const { chats } = useSelector((state: initialStateProps) => ({
    chats: state.chats,
  }));

  const { newChat } = useSelector((state: initialStateProps) => ({
    newChat: state.variation.newChat,
  }));

  const [iosHeaderHeight, setIosHeaderHeight] = useState<number>(0.2);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setIosHeaderHeight(0.5);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIosHeaderHeight(0.2);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  useEffect(() => {
    if (newChat) {
      target.current.scrollToOffset({ animated: true, offset: 0 });
      dispatch(setVariation({ key: 'newChat', value: false }));
    }
  }, [newChat]);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        inverted
        renderItem={renderItem}
        data={chats}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={
          <View
            style={{
              height:
                Platform.OS === 'android'
                  ? Dimensions.get('window').height * 0.25
                  : Dimensions.get('window').height * iosHeaderHeight,
            }}
          ></View>
        }
        ref={target}
        removeClippedSubviews={true}
      />

      <Upload type="chat"></Upload>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF0F4',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
});

export default Detail;
