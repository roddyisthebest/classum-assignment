import { StyleSheet, Image, View, Dimensions } from 'react-native';

const Detail = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://blog.kakaocdn.net/dn/bdGVxy/btq6N2YiHF8/4MdPYEvSV88WW7Z48gw84K/img.png',
        }}
        style={styles.img}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.08,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowOffset: { width: 0, height: -3 },
    shadowColor: 'lightgray',
    shadowOpacity: 0.8,
    elevation: 1,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  img: {
    width: Dimensions.get('window').height * 0.04,
    height: Dimensions.get('window').height * 0.04,
    borderRadius: 20,
  },
});

export default Detail;
