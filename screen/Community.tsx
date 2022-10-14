import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view';
import Post from '../components/Post';

import Upload from '../components/Upload';
const Community = ({
  navigation: { navigate },
}: {
  navigation: { navigate: Function };
}) => {
  const [data, setData] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
  ]);
  const renderItem = () => <Post />;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList renderItem={renderItem} data={data} />

      <Upload></Upload>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
});

export default Community;
