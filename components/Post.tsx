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

const Post = memo(({ index, data }: { index: number; data: PostDataType }) => {
  const dispatch = useDispatch();
  const name = useSelector((state: initialStateProps) => state.name);
  const [clap, setClap] = useState<boolean>(false);
  const [interest, setInterest] = useState<boolean>(false);
  const [height, setHeight] = useState<number>(0);
  useEffect(() => {
    const isThere = data.interest.find((element) => element === name);
    setInterest(isThere ? true : false);
  }, [data.interest]);

  useEffect(() => {
    const isThere = data.clap.find((element) => element === name);
    setClap(isThere ? true : false);
  }, [data.clap]);

  useEffect(() => {
    if (data.files.length === 1) {
      setHeight(130);
    } else if (data.files.length === 2) {
      setHeight(150);
    } else {
      setHeight(105);
    }
  }, [data.files]);

  return (
    <View style={styles.containerWrapper}>
      <Pressable style={styles.container} onPress={() => {}}>
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
        {data.title.length !== 0 ? (
          <TextInput
            value={data.title}
            editable={false}
            style={styles.headerInput}
          ></TextInput>
        ) : null}

        <TextInput
          value={data.contents}
          multiline
          editable={false}
          style={styles.headerContents}
        ></TextInput>
        {data.files.length !== 0 ? (
          <View
            style={{
              height,
              marginTop: 15,
              marginBottom: 5,
              flexDirection: 'row',
            }}
          >
            {data.files.map((file: FileType, index: number) => {
              return index < 3 ? (
                <TouchableOpacity
                  style={{ flex: 1, marginLeft: index !== 0 ? 10 : 0 }}
                  key={index}
                >
                  {index === 2 ? (
                    <View style={styles.imagePlusBackground}>
                      <Text style={styles.imagePlusText}>
                        +{data.files.length - 2}
                      </Text>
                    </View>
                  ) : null}
                  {file.type === 'success' ? (
                    <View style={styles.fileItem}>
                      <Text style={styles.flieTitleText}>
                        {(file.name?.length as number) > 7
                          ? file.name?.substring(0, 8) + '...'
                          : file.name}
                      </Text>
                      <Text style={styles.fileSubText}>
                        {file.mimeType.split('/')[1]} ·{' '}
                        {(file.size / 1000000).toFixed(1)}MB
                      </Text>
                    </View>
                  ) : (
                    <ImageBackground
                      source={{
                        uri: file.uri,
                      }}
                      borderRadius={8}
                      resizeMode={'cover'}
                      style={styles.imageItem}
                    ></ImageBackground>
                  )}
                </TouchableOpacity>
              ) : null;
            })}
          </View>
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
            관심있어요 {data.interest.length}
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
            짝짝 {data.clap.length}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});

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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8F8F8',
    borderColor: '#E0E1E5',
    borderWidth: 1.5,
    borderRadius: 8,
  },
  flieTitleText: {
    color: 'black',
    fontSize: 12,
    fontWeight: '700',
  },
  fileSubText: {
    fontSize: 7,
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

export default Post;
