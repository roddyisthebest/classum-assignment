import { Dimensions, StyleSheet, Text, View } from 'react-native';

const Post = () => {
  return (
    <View style={styles.container}>
      <Text>Post</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    minHeight: 50,
    width: Dimensions.get('window').width,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Post;
