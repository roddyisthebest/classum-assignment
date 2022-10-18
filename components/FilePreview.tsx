import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
} from 'react-native';
import { memo } from 'react';
import { FileType } from '../types';
import Icon from 'react-native-vector-icons/Ionicons';

const FilePreview = memo(
  ({
    item,
    deleteFile,
    index,
  }: {
    item: FileType;
    deleteFile: Function;
    index: number;
  }) => {
    return item.type === 'success' ? (
      <View style={styles.fileWrapper}>
        <View style={styles.fileLeftSide}>
          <Icon name="document-attach-outline" color="black" size={20} />
        </View>
        <View style={styles.fileRightSide}>
          <Text style={styles.fileTitle}>
            {(item.name?.length as number) > 7
              ? item.name?.substring(0, 8) + '...'
              : item.name}
          </Text>
          <Text style={styles.fileType}>
            {item.uri.split('.')[1]} · {(item.size / 1000000).toFixed(1)}MB
          </Text>
        </View>
        <Pressable
          style={styles.deleteBtn}
          onPress={() => {
            deleteFile(index);
          }}
        >
          <Icon name="close-outline" color="white" size={10} />
        </Pressable>
      </View>
    ) : (
      <View style={styles.imageWrapper}>
        <Pressable
          style={styles.deleteBtn}
          onPress={() => {
            deleteFile(index);
          }}
        >
          <Icon name="close-outline" color="white" size={10} />
        </Pressable>
        <ImageBackground
          source={{
            uri: item.uri,
          }}
          style={styles.image}
          resizeMode="cover"
          borderRadius={5}
        ></ImageBackground>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    minWidth: 50,
    height: 25,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageWrapper: {
    position: 'relative',
    width: 65,
    height: 65,
  },
  image: {
    flex: 1,
    height: 65,
  },
  fileWrapper: {
    position: 'relative',
    width: 160,
    height: 65,
    backgroundColor: '#F8F8F8',
    borderColor: '#E0E1E6',
    borderWidth: 1.5,
    borderRadius: 5,
    flexDirection: 'row',
    flex: 1,
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

  deleteBtn: {
    width: 20,
    height: 20,
    borderRadius: 25,
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
});

export default FilePreview;
