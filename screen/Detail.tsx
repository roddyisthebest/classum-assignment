import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Dimensions,
} from 'react-native';
import Post from '../components/Post';
import { useSelector, useDispatch } from 'react-redux';

import Upload from '../components/Upload';
import {
  addChat,
  addPosts,
  initialStateProps,
  resetChats,
} from '../store/slice';
import Chat from '../components/Chat';
import { db } from '../firebase';
import { ChatDataType } from '../types';
const Detail = ({
  navigation: { navigate },
}: {
  navigation: { navigate: Function };
}) => {
  const renderItem = ({ item }: { item: ChatDataType }) => <Chat data={item} />;
  const dispatch = useDispatch();
  const target = useRef<any>();
  const { chats } = useSelector((state: initialStateProps) => ({
    chats: state.chats,
  }));

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        inverted
        renderItem={renderItem}
        data={chats}
        keyExtractor={(item, index) => index.toString()}
        onContentSizeChange={() =>
          target.current.scrollToOffset({ animated: true, offset: 0 })
        }
        ListHeaderComponent={
          <View
            style={{ height: Dimensions.get('window').height * 0.2 }}
          ></View>
        }
        ref={target}
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
