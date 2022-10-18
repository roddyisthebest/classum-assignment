import React, { memo, useEffect, useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { initialStateProps, setInteration } from '../store/slice';
import Icon from 'react-native-vector-icons/Ionicons';
import { PostDataType, FileType } from '../types';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import ImagePreview from '../components/ImagePreview';
import * as Sharing from 'expo-sharing';

type NavigationParam = {
  Stack: {
    screen: string;
  };
};

const Post = ({ index, item }: { index: number; item: PostDataType }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp<NavigationParam>>();

  const name = useSelector((state: initialStateProps) => state.user.name);
  const [clap, setClap] = useState<boolean>(false);
  const [interest, setInterest] = useState<boolean>(false);
  useEffect(() => {
    const isThere = item.interest.find((element) => element === name);
    setInterest(isThere ? true : false);
  }, [item.interest]);

  useEffect(() => {
    const isThere = item.clap.find((element) => element === name);
    setClap(isThere ? true : false);
  }, [item.clap]);

  const saveFile = async (url: string) => {
    try {
      await Sharing.shareAsync(url);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.containerWrapper}>
      <Pressable
        style={styles.container}
        onPress={() => {
          navigation.navigate('Stack', { screen: 'Detail' });
        }}
      >
        <View style={styles.userImageWrapper}>
          <ImageBackground
            source={{
              uri: item.user.img,
            }}
            borderRadius={40}
            resizeMode={'cover'}
            style={styles.userImage}
          ></ImageBackground>
        </View>
        <View style={styles.header}>
          <Text style={styles.headerNameText}>{item.user.name}</Text>
          <View style={styles.spot}></View>
          <Text style={styles.headerText}>참여자</Text>
          <View style={styles.spot}></View>
          <Text style={styles.headerText}>2 hours ago</Text>
        </View>
        {item.title.length !== 0 ? (
          <TextInput
            value={item.title}
            editable={false}
            style={styles.headerInput}
          ></TextInput>
        ) : null}
        {item.contents.length !== 0 ? (
          <TextInput
            value={item.contents}
            multiline
            editable={false}
            style={styles.headerContents}
          ></TextInput>
        ) : null}

        {(item.data as string[]).length !== 0 ? (
          item.dataType === 'images' ? (
            <ImagePreview
              type="post"
              item={item.data as string[]}
            ></ImagePreview>
          ) : (
            <TouchableOpacity
              style={styles.fileItem}
              onPress={() => {
                saveFile((item.data as FileType).uri);
              }}
            >
              <View style={styles.fileLeftSide}>
                <Icon name="download-outline" color="black" size={20} />
              </View>
              <View style={styles.fileRightSide}>
                <Text style={styles.fileTitle}>
                  {(item.data as FileType).name}
                </Text>
                <Text style={styles.fileType}>
                  {(item.data as FileType).uri.split('.')[1]} ·
                  {((item.data as FileType).size / 1000000).toFixed(1)}
                  MB
                </Text>
              </View>
            </TouchableOpacity>
          )
        ) : null}
        <View style={styles.tagWrapper}>
          <View style={styles.tagItem}>
            <Text style={styles.tagText}>No.{index + 1}</Text>
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
        <TouchableOpacity
          style={styles.interactionItem}
          onPress={() => {
            dispatch(setInteration({ idx: index, key: 'interest', name }));
          }}
        >
          <Icon
            name={'heart'}
            size={18}
            color={interest ? '#ff1a1a' : '#E2E1E6'}
            style={{ marginRight: 5 }}
          />
          <Text
            style={
              interest
                ? styles.interactionTextWithExistence
                : styles.interactionTextWithNoExistence
            }
          >
            관심있어요 {item.interest.length}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            dispatch(setInteration({ idx: index, key: 'clap', name }));
          }}
          style={styles.interactionItem}
        >
          <Icon
            name={'hand-right'}
            size={18}
            color={clap ? '#fbceb1' : '#E2E1E6'}
            style={{ marginRight: 5 }}
          />
          <Text
            style={
              clap
                ? styles.interactionTextWithExistence
                : styles.interactionTextWithNoExistence
            }
          >
            짝짝 {item.clap.length}
          </Text>
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
    marginTop: 15,
  },
  tagItem: {
    paddingVertical: 8,
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
    marginTop: 25,
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
  interactionTextWithExistence: {
    color: 'black',
    fontSize: 13,
    fontWeight: '700',
  },
  interactionTextWithNoExistence: {
    color: '#b8b6bd',
    fontSize: 13,
    fontWeight: '700',
  },
  imageItem: {
    flex: 1,
  },
  fileItem: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    backgroundColor: '#F8F8F8',
    borderColor: '#E0E1E5',
    borderWidth: 1.5,
    borderRadius: 8,
    marginTop: 10,
  },
  fileLeftSide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fileRightSide: {
    flex: 3,
    paddingVertical: 15,
    justifyContent: 'center',
  },
  fileTitle: {
    fontSize: 10,
    fontWeight: '600',
    color: 'black',
  },
  fileType: {
    fontSize: 10,
    fontWeight: '600',
    color: 'gray',
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

export default memo(Post);
