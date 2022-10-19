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
  Keyboard,
} from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

import { FileType } from '../types';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import FilePreview from './FilePreview';
import { addPost, initialStateProps, setVariation } from '../store/slice';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

const Upload = ({ type }: { type: 'chat' | 'post' }) => {
  const storage = getStorage();

  const dispatch = useDispatch();
  const target = useRef<any>();
  const headerHeight = useHeaderHeight();

  const { user } = useSelector((state: initialStateProps) => ({
    user: state.user,
  }));

  const [clicked, setClicked] = useState(false);
  const [upload, setUpload] = useState(false);
  const [files, setFiles] = useState<FileType[]>([]);
  const [title, setTitle] = useState<string>('');
  const [contents, setContents] = useState<string>('');
  const [localLoading, setlocalLoading] = useState<boolean>(false);
  const [remoteLoading, setRemoteLoading] = useState<boolean>(false);

  useEffect(() => {
    setClicked(type === 'chat');
  }, [type]);

  const renderItem = ({ item, index }: { item: FileType; index: number }) => (
    <FilePreview
      item={item}
      key={index}
      index={index}
      deleteFile={deleteFile}
    />
  );

  const uploadImage = async () => {
    try {
      setlocalLoading(true);
      let result: any = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        aspect: [4, 3],
        quality: 1,
        allowsMultipleSelection: true,
      });

      if (Platform.OS === 'android' && result.selected === undefined) {
        if (!result.cancelled) {
          setFiles((prev) => [...prev, result]);
        }
      } else {
        if (!result.cancelled) {
          setFiles((prev) => [...prev, ...result.selected]);
        }
      }
    } catch (e) {
      console.log(e);
    } finally {
      setlocalLoading(false);
    }
  };

  const uploadFile = async () => {
    try {
      setlocalLoading(true);
      let result: any = await DocumentPicker.getDocumentAsync({});
      if (result.type === 'success') {
        setFiles((prev) => [...prev, ...[result]]);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setlocalLoading(false);
    }
  };

  const deleteFile = useCallback(
    (idx: number) => {
      setFiles((prev) => prev.filter((file, index) => index !== idx));
    },
    [files]
  );

  const upLoadToStorage = async () => {
    const imageUrls: any[] = [];
    const fileUrls: any[] = [];
    try {
      setRemoteLoading(true);

      await Promise.all(
        files.map(async (e) => {
          const blob = await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function () {
              resolve(xhr.response);
            };
            xhr.onerror = function (e) {
              console.log(e);
              reject(new TypeError('Network request failed'));
            };
            xhr.responseType = 'blob';
            xhr.open('GET', e.uri, true);
            xhr.send(null);
          });
          const fileName =
            new Date().getTime().toString() + '.' + e.uri.split('.')[1];

          await uploadBytes(ref(storage, fileName), blob as any);
          const url = await getDownloadURL(ref(storage, fileName));
          if (e.type === 'success') {
            fileUrls.push({
              name: e.name,
              type: e.uri.split('.')[1],
              url: url,
              size: e.size,
            });
          } else {
            imageUrls.push(url);
          }
          return new Promise((resolve, reject) => {
            resolve('clear set urlLogic');
          });
        })
      );
      imageUrls.length !== 0 &&
        (await addDoc(collection(db, 'chats'), {
          user: {
            name: user.name,
            img: user.img,
          },
          contents: imageUrls,
          type: 'images',
          createdAt: new Date().getTime(),
        }));

      fileUrls.map(async (url) => {
        await addDoc(collection(db, 'chats'), {
          user: {
            name: user.name,
            img: user.img,
          },
          contents: url,
          type: 'file',
          createdAt: new Date().getTime(),
        });
      });

      contents.length !== 0 &&
        (await addDoc(collection(db, 'chats'), {
          user: {
            name: user.name,
            img: user.img,
          },
          contents,
          type: 'text',
          createdAt: new Date().getTime(),
        }));
      dispatch(setVariation({ key: 'newChat', value: true }));
    } catch (e) {
      console.log(e);
    } finally {
      setRemoteLoading(false);
    }
  };

  const upLoadToStore = async () => {
    const fileteredImages = files.filter((e) => e.type !== 'success');
    const fileteredFiles = files.filter((e) => e.type === 'success');

    dispatch(
      addPost({
        title,
        contents,
        interest: [user.name],
        clap: [user.name],
        data:
          fileteredImages.length > 0 ? fileteredImages.map((e) => e.uri) : [],
        dataType: 'images',
        user,
      })
    );

    fileteredFiles.length !== 0 &&
      fileteredFiles.map((e) =>
        dispatch(
          addPost({
            title: '',
            contents: '파일업로드',
            interest: [user.name],
            clap: [user.name],
            data: e,
            dataType: 'file',
            user,
          })
        )
      );

    dispatch(setVariation({ key: 'newPost', value: true }));
  };

  const reset = () => {
    type !== 'chat' && setClicked(false);
    setFiles([]);
    setUpload(false);
    setTitle('');
    setContents('');
    Keyboard.dismiss();
  };

  return !clicked ? (
    <Pressable
      style={notClickedStyles.container}
      onPress={() => {
        setClicked(true);
      }}
    >
      <Image
        source={{
          uri: user.img ? user.img : 'dummy',
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
      {type !== 'chat' ? (
        <Pressable style={clickedStyles.bkgButton} onPress={reset}></Pressable>
      ) : null}

      <KeyboardAvoidingView
        keyboardVerticalOffset={headerHeight}
        style={clickedStyles.view}
        behavior={Platform.select({ ios: 'position', android: undefined })}
      >
        <View
          style={
            type === 'chat'
              ? clickedStyles.containerChat
              : clickedStyles.containerPost
          }
        >
          <View style={clickedStyles.header}>
            <View style={clickedStyles.headerItem}>
              <Image
                source={{
                  uri: user.img ? user.img : 'dummy',
                }}
                style={clickedStyles.img}
              ></Image>
              <Text style={clickedStyles.username}>{user.name}</Text>
            </View>
          </View>
          {type !== 'chat' ? (
            <TextInput
              placeholder="제목 (선택)"
              placeholderTextColor="#86868E"
              style={clickedStyles.headerInput}
              value={title}
              onChangeText={(text) => setTitle(text)}
            ></TextInput>
          ) : null}

          <TextInput
            placeholder="공유하고 싶은 생각이 있나요?"
            placeholderTextColor="#86868E"
            style={
              type === 'chat'
                ? clickedStyles.textInputChat
                : clickedStyles.textInputPost
            }
            autoFocus={type !== 'chat'}
            value={contents}
            onChangeText={(text) => setContents(text)}
            multiline={type !== 'chat'}
            numberOfLines={1}
            ref={target}
          ></TextInput>
          {files.length || localLoading ? (
            <View style={clickedStyles.flatListWrapper}>
              {localLoading ? (
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
            {remoteLoading ? (
              <ActivityIndicator color="#687684" size={30} />
            ) : (
              <Pressable
                disabled={remoteLoading}
                onPress={async () => {
                  type !== 'chat' ? upLoadToStore() : upLoadToStorage();
                  reset();
                }}
              >
                <Icon name={'send'} size={20} color="#86868E" />
              </Pressable>
            )}
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

const clickedStyles = StyleSheet.create({
  containerChat: {
    width: Dimensions.get('window').width,
    backgroundColor: 'white',
    borderColor: 'lightgray',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: -0,
    paddingTop: 20,
  },
  containerPost: {
    width: Dimensions.get('window').width,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: -0,
    paddingTop: 20,
  },
  view: {
    width: Dimensions.get('window').width,
    zIndex: 100,
  },
  bkgButton: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#c9cdd6bc',
    position: 'absolute',
    zIndex: 100,
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
  textInputChat: {
    fontWeight: '200',
    fontSize: 15,
    marginTop: 13.5,
    paddingBottom: 10,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    textAlignVertical: 'top',
  },

  textInputPost: {
    fontWeight: '200',
    fontSize: 15,
    marginTop: 13.5,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    textAlignVertical: 'top',
    height: 80,
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
