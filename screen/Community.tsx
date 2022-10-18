import React, { useEffect, useRef } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  Dimensions,
  Platform,
} from 'react-native';
import Post from '../components/Post';
import { useSelector, useDispatch } from 'react-redux';

import Upload from '../components/Upload';
import { addPosts, initialStateProps, setVariation } from '../store/slice';
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
  }) => <Post item={item} index={index} />;
  const dispatch = useDispatch();
  const { posts } = useSelector((state: initialStateProps) => ({
    posts: state.posts,
  }));
  const { newPost } = useSelector((state: initialStateProps) => ({
    newPost: state.variation.newPost,
  }));

  const target = useRef<any>();

  useEffect(() => {
    if (newPost) {
      target.current.scrollToOffset({ animated: true, offset: 0 });
      dispatch(setVariation({ key: 'newPost', value: false }));
    }
  }, [newPost]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        renderItem={renderItem}
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={
          <View
            style={{
              height:
                Platform.OS === 'android'
                  ? Dimensions.get('window').height * 0.05
                  : 0,
            }}
          ></View>
        }
        onEndReached={() => {
          dispatch(addPosts());
          console.log('밑에 닿음');
        }}
        removeClippedSubviews={true}
        ListFooterComponent={
          <View
            style={{ height: Dimensions.get('window').height * 0.1 }}
          ></View>
        }
        ref={target}
      />

      <Upload type="post"></Upload>
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
