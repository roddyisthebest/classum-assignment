import React from 'react';
import {
  Dimensions,
  StyleSheet,
  ImageBackground,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Post = () => {
  return (
    <View style={styles.containerWrapper}>
      <Pressable style={styles.container}>
        <View style={styles.userImageWrapper}>
          <ImageBackground
            source={{
              uri: 'https://blog.kakaocdn.net/dn/bdGVxy/btq6N2YiHF8/4MdPYEvSV88WW7Z48gw84K/img.png',
            }}
            borderRadius={40}
            resizeMode={'cover'}
            style={styles.userImage}
          ></ImageBackground>
        </View>
        <View style={styles.header}>
          <Text style={styles.headerNameText}>배성연</Text>
          <View style={styles.spot}></View>
          <Text style={styles.headerText}>참여자</Text>
          <View style={styles.spot}></View>
          <Text style={styles.headerText}>2 hours ago</Text>
        </View>
        <TextInput
          value={'테스트'}
          editable={false}
          style={styles.headerInput}
        ></TextInput>
        <TextInput
          value={'니가 싫어 싫어 니가 싫어 싫어'}
          multiline
          editable={false}
          style={styles.headerContents}
        ></TextInput>
        <View style={styles.tagWrapper}>
          <View style={styles.tagItem}>
            <Text style={styles.tagText}>No.9</Text>
          </View>
          <View style={styles.tagItem}>
            <Text style={styles.tagText}># 과제</Text>
          </View>
        </View>
        <View style={styles.chatWrapper}>
          <Text style={styles.chatText}>댓글 2개</Text>
        </View>
      </Pressable>
      <View style={styles.interactionWrapper}>
        <TouchableOpacity style={styles.interactionItem}>
          <Icon
            name={'happy'}
            size={18}
            color="#E2E1E6"
            style={{ marginRight: 5 }}
          />
          <Text style={styles.interactionText}>관심있어요 0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.interactionItem}>
          <Icon
            name={'hand-right'}
            size={18}
            color="#E2E1E6"
            style={{ marginRight: 5 }}
          />
          <Text style={styles.interactionText}>짝짝 0</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerWrapper: {
    paddingVertical: 25,
    paddingHorizontal: 20,
    width: Dimensions.get('window').width,
    backgroundColor: '#EFF0F4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
    paddingTop: 30,
    paddingBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  userImageWrapper: {
    width: 45,
    height: 45,
    borderRadius: 40,
    backgroundColor: 'white',
    position: 'absolute',
    left: 15,
    top: -20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userImage: {
    width: 35,
    height: 35,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerNameText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#646368',
  },
  headerText: {
    fontSize: 13,
    fontWeight: '400',
    color: '#888690',
  },
  spot: {
    width: 3,
    height: 3,
    borderRadius: 3,
    backgroundColor: '#8C8D92',
    marginHorizontal: 5,
  },
  headerInput: {
    fontWeight: '700',
    fontSize: 15,
    color: 'black',
  },
  headerContents: {
    fontWeight: '400',
    fontSize: 15,
    color: '#737279',
  },
  tagWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  tagItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
    backgroundColor: '#EFF0F4',
    marginRight: 10,
  },
  tagText: {
    fontSize: 15,
    color: '#737279',
  },
  chatWrapper: {
    // marginTop: 10,
  },
  chatText: {
    color: '#8E8F91',
  },
  interactionWrapper: {
    position: 'absolute',
    // right: 20,
    bottom: 5,
    flexDirection: 'row',

    // backgroundColor: 'black',
    width: '100%',
    height: 40,
    justifyContent: 'flex-end',
  },
  interactionItem: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    borderColor: '#E2E1E6',
    borderWidth: 2.5,
    backgroundColor: 'white',
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  interactionText: {
    color: '#b8b6bd',
    fontSize: 13,
    fontWeight: '700',
  },
});

export default Post;
