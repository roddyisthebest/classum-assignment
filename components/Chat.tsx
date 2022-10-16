import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { useSelector } from 'react-redux';
import React, { memo } from 'react';
import { initialStateProps } from '../store/slice';
import { ChatDataType } from '../types';
import Icon from 'react-native-vector-icons/Ionicons';

const Chat = memo(({ data }: { data: ChatDataType }) => {
  const { name } = useSelector((state: initialStateProps) => ({
    name: state.user.name,
  }));

  return (
    <View
      style={
        data.user.name === name ? myStyles.container : noyMyStyles.container
      }
    >
      <View
        style={
          data.user.name === name
            ? myStyles.chatWrapper
            : noyMyStyles.chatWrapper
        }
      >
        <View
          style={
            data.user.name === name
              ? myStyles.headerWrapper
              : noyMyStyles.headerWrapper
          }
        >
          <Text style={myStyles.headerNameText}>{data.user.name}</Text>
          <View style={myStyles.headerDot}></View>
          <Text style={myStyles.headerPositionText}>참여자</Text>
          <Image
            source={{
              uri: data.user.img,
            }}
            style={
              data.user.name === name
                ? myStyles.headerImage
                : noyMyStyles.headerImage
            }
          ></Image>
        </View>
        <View style={myStyles.conentsWrapper}>
          {data.type === 'text' && (
            <TouchableOpacity
              style={
                data.user.name === name
                  ? myStyles.contentsButton
                  : noyMyStyles.contentsButton
              }
            >
              <Text
                style={
                  data.user.name === name
                    ? myStyles.contentsButtonText
                    : noyMyStyles.contentsButtonText
                }
              >
                {data.contents as string}
              </Text>
            </TouchableOpacity>
          )}

          {data.type === 'images' && (
            <View style={allStyles.imagesWrapper}>
              {(data.contents as string[]).map((uri, index) => (
                <ImageBackground
                  source={{
                    uri,
                  }}
                  borderRadius={8}
                  resizeMode={'cover'}
                  key={uri}
                  style={{ flex: 1, backgroundColor: 'gray', borderRadius: 8 }}
                ></ImageBackground>
              ))}
            </View>
          )}

          {data.type === 'file' && (
            <TouchableOpacity style={allStyles.fileWrapper}>
              <View style={allStyles.fileLeftSide}>
                <Icon name="document-attach-outline" color="black" size={20} />
              </View>
              <View style={allStyles.fileRightSide}>
                <Text style={allStyles.fileTitle}>
                  {((data.contents as any).name.length as number) > 7
                    ? (data.contents as any)?.name.substring(0, 8) + '...'
                    : (data.contents as any)?.name}
                </Text>
                <Text style={allStyles.fileType}>
                  {(data.contents as any).type} ·
                  {((data.contents as any).size / 1000000).toFixed(1)}MB
                </Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
        <View style={myStyles.timeWrapper}>
          <Text style={myStyles.timeText}>7:58 PM</Text>
        </View>
      </View>
    </View>
  );
});

const myStyles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    // backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'flex-end',
  },
  chatWrapper: {
    alignItems: 'flex-end',
  },
  headerWrapper: {
    flexDirection: 'row',
    height: 30,
    alignItems: 'center',
  },
  headerNameText: {
    fontSize: 13,
    color: 'black',
    fontWeight: '400',
  },
  headerDot: {
    width: 3,
    height: 3,
    backgroundColor: 'gray',
    marginHorizontal: 5,
  },
  headerPositionText: {
    fontSize: 13,
    color: 'gray',
    fontWeight: '400',
  },
  headerImage: {
    width: 30,
    height: 30,
    borderRadius: 30,
    marginLeft: 7.5,
  },
  conentsWrapper: {
    marginTop: 10,
  },
  contentsButton: {
    backgroundColor: 'black',
    maxWidth: Dimensions.get('window').width * 0.8,
    padding: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  contentsButtonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: '500',
  },
  timeWrapper: {
    marginTop: 10,
  },
  timeText: {
    fontSize: 12,
    fontWeight: '700',
    color: 'gray',
  },
});

const noyMyStyles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'flex-start',
  },
  chatWrapper: {
    alignItems: 'flex-start',
  },
  headerWrapper: {
    flexDirection: 'row-reverse',
    height: 30,
    alignItems: 'center',
  },
  headerImage: {
    width: 30,
    height: 30,
    borderRadius: 30,
    marginRight: 7.5,
  },
  contentsButton: {
    backgroundColor: 'white',
    maxWidth: Dimensions.get('window').width * 0.8,
    padding: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  contentsButtonText: {
    color: 'black',
    fontSize: 17,
    fontWeight: '500',
  },
});

const allStyles = StyleSheet.create({
  imagesWrapper: {
    width: Dimensions.get('window').width * 0.8,
    height: 100,
    flexDirection: 'row',
  },
  fileWrapper: {
    width: Dimensions.get('window').width * 0.8,
    height: 80,
    backgroundColor: '#F8F8F8',
    borderColor: '#E0E1E6',
    borderWidth: 1.5,
    borderRadius: 5,
    flexDirection: 'row',
  },
  fileLeftSide: {
    flex: 1.8,
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
});

export default Chat;
