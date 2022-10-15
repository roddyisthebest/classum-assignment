import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Dimensions,
} from 'react-native';
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view';
import Post from '../components/Post';
import { useSelector } from 'react-redux';

import Upload from '../components/Upload';
import { initialStateProps } from '../store/slice';
import { PostDataType } from '../types';
const Community = ({
  navigation: { navigate },
}: {
  navigation: { navigate: Function };
}) => {
  const renderItem = ({
    item,
    index,
  }: {
    item: PostDataType;
    index: number;
  }) => <Post data={item} index={index} />;
  const { posts } = useSelector((state: initialStateProps) => ({
    posts: state.posts,
  }));
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        renderItem={renderItem}
        data={posts}
        keyExtractor={(item, index) => index.toString()}
      />

      <Upload></Upload>
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

export default Community;
