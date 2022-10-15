import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Pressable,
  KeyboardAvoidingView,
  Text,
  TextInput,
  Platform,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { FileType } from '../types';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import Preview from './Preview';
import { addPost, initialStateProps } from '../store/slice';

const Upload = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((state: initialStateProps) => ({
    name: state.name,
  }));
  const [clicked, setClicked] = useState(false);
  const [upload, setUpload] = useState(false);
  const [files, setFiles] = useState<FileType[]>([]);
  const [title, setTitle] = useState<string>('');
  const [contents, setContents] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const renderItem = ({ item, index }: { item: FileType; index: number }) => (
    <Preview data={item} key={index} index={index} deleteFile={deleteFile} />
  );

  const uploadImage = useCallback(async () => {
    try {
      setLoading(true);
      let result: any = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        aspect: [4, 3],
        quality: 1,
        allowsMultipleSelection: true,
      });
      if (!result.cancelled) {
        setFiles((prev) => [...prev, ...result.selected]);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, []);

  const uploadFile = useCallback(async () => {
    try {
      setLoading(true);

      let result: any = await DocumentPicker.getDocumentAsync({});

      if (result.type === 'success') {
        setFiles((prev) => [...prev, ...[result]]);
        console.log(result);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteFile = useCallback((idx: number) => {
    setFiles((prev) => prev.filter((file, index) => index !== idx));
  }, []);

  const reset = useCallback(() => {
    setClicked(false);
    setFiles([]);
    setUpload(false);
    setTitle('');
    setContents('');
  }, []);

  return !clicked ? (
    <Pressable
      style={notClickedStyles.container}
      onPress={() => {
        setClicked(true);
      }}
    >
      <Image
        source={{
          uri: 'https://blog.kakaocdn.net/dn/bdGVxy/btq6N2YiHF8/4MdPYEvSV88WW7Z48gw84K/img.png',
        }}
        style={notClickedStyles.img}
      ></Image>
      <View style={notClickedStyles.inputBox}>
        <Text style={notClickedStyles.inputText}>
          공유하고 싶은 생각이 있나요?
        </Text>
        <Icon name={'send'} size={15} color="#86868E" />
      </View>
    </Pressable>
  ) : (
    <>
      <Pressable style={clickedStyles.bkgButton} onPress={reset}></Pressable>
      <KeyboardAvoidingView
        style={clickedStyles.view}
        behavior={Platform.select({ ios: 'position', android: undefined })}
      >
        <View style={clickedStyles.container}>
          <View style={clickedStyles.header}>
            <View style={clickedStyles.headerItem}>
              <Image
                source={{
                  uri: 'https://blog.kakaocdn.net/dn/bdGVxy/btq6N2YiHF8/4MdPYEvSV88WW7Z48gw84K/img.png',
                }}
                style={clickedStyles.img}
              ></Image>
              <Text style={clickedStyles.username}>배성연</Text>
            </View>
          </View>

          <TextInput
            placeholder="제목 (선택)"
            placeholderTextColor="#86868E"
            style={clickedStyles.headerInput}
            value={title}
            onChangeText={(text) => setTitle(text)}
            autoFocus
          ></TextInput>
          <TextInput
            placeholder="공유하고 싶은 생각이 있나요?"
            placeholderTextColor="#86868E"
            style={clickedStyles.textInput}
            autoFocus
            value={contents}
            onChangeText={(text) => setContents(text)}
            multiline
            numberOfLines={10}
          ></TextInput>
          {files.length || loading ? (
            <View style={clickedStyles.flatListWrapper}>
              {loading ? (
                <ActivityIndicator color="#687684" size={30} />
              ) : (
                <FlatList
                  renderItem={renderItem}
                  data={files}
                  horizontal
                  keyExtractor={(item, index) => index.toString()}
                  ItemSeparatorComponent={() => <View style={{ width: 5 }} />}
                ></FlatList>
              )}
            </View>
          ) : null}

          {upload && (
            <View style={clickedStyles.uploadTab}>
              <Pressable style={clickedStyles.uploadItem} onPress={uploadImage}>
                <Icon name={'image-outline'} size={25} color="black" />
                <Text style={clickedStyles.uploadText}>사진</Text>
              </Pressable>
              <Pressable style={clickedStyles.uploadItem} onPress={uploadFile}>
                <Icon
                  name={'document-attach-outline'}
                  size={25}
                  color="black"
                />
                <Text style={clickedStyles.uploadText}>파일</Text>
              </Pressable>
            </View>
          )}

          <View style={clickedStyles.bottomTab}>
            <Pressable
              onPress={() => {
                setUpload((prev) => !prev);
              }}
            >
              <Icon
                name={upload ? 'close-circle' : 'add-circle-outline'}
                size={25}
                color="black"
              />
            </Pressable>
            <Pressable
              onPress={() => {
                dispatch(
                  addPost({
                    title,
                    contents,
                    files,
                    interest: [name],
                    clap: [name],
                  })
                );
                reset();
              }}
            >
              <Icon name={'send'} size={20} color="#86868E" />
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

const clickedStyles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 0,
    paddingTop: 20,
  },
  view: {
    width: Dimensions.get('window').width,
  },
  bkgButton: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#c9cdd6bc',
    position: 'absolute',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerItem: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  username: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
    marginLeft: 8,
  },
  headerInput: {
    fontWeight: '700',
    fontSize: 15,
    marginTop: 13.5,
  },
  textInput: {
    fontWeight: '200',
    fontSize: 15,
    marginTop: 13.5,
    height: 100,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    textAlignVertical: 'top',
  },
  img: {
    width: 30,
    height: 30,
    borderRadius: 20,
  },
  uploadTab: {
    paddingHorizontal: 5,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  uploadItem: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  uploadText: {
    color: 'black',
    marginLeft: 10,
    fontWeight: '800',
  },
  bottomTab: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
  },
  flatListWrapper: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },
});

const notClickedStyles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.08,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowOffset: { width: 0, height: -3 },
    shadowColor: 'lightgray',
    shadowOpacity: 0.8,
    elevation: 1,
    alignItems: 'center',
    paddingHorizontal: 15,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
  },
  img: {
    width: Dimensions.get('window').height * 0.043,
    height: Dimensions.get('window').height * 0.043,
    borderRadius: 20,
  },
  inputBox: {
    borderRadius: 18,
    height: Dimensions.get('window').height * 0.043,
    flex: 1,
    backgroundColor: '#EFF0F4',
    marginLeft: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 17,
  },
  inputText: {
    color: '#86868E',
    fontSize: 15,
    fontWeight: '500',
  },
});

export default Upload;
