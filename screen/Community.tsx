import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Community = ({
  navigation: { navigate },
}: {
  navigation: { navigate: Function };
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigate('Stack', { screen: 'Detail' });
        }}
      >
        <Text>move</Text>
      </TouchableOpacity>
      <Text>Community</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Community;
