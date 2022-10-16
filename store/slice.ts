import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PostDataType, ChatDataType } from '../types/index';

export type initialStateProps = {
  user: {
    name: string;
    img: string;
  };
  posts: PostDataType[];
  chats: ChatDataType[];
};

const { actions, reducer } = createSlice({
  name: 'store',
  initialState: {
    user: {
      name: '',
      img: '',
    },
    posts: [
      {
        title: '테스트',
        contents: '꽃길만 걷게 해줄게',
        files: [
          {
            size: 100,
            uri: 'https://blog.kakaocdn.net/dn/bdGVxy/btq6N2YiHF8/4MdPYEvSV88WW7Z48gw84K/img.png',
          },
        ],
        interest: ['seong-yeon'],
        clap: ['seong-yeon'],
      },
      {
        title: '테스트',
        contents: '꽃길만 걷게 해줄게',
        files: [
          {
            size: 100,
            uri: 'https://imgnn.seoul.co.kr/img/upload/2013/05/05/SSI_20130505112323_V.jpg',
          },
          {
            size: 10000,
            uri: 'https://lh5.googleusercontent.com/p/AF1QipNnvXr1ejUm7zLvjHqbSaHIhDpr-3XiE8kMI2Nv=w408-h306-k-no',
          },
          {
            size: 100,
            uri: 'https://blog.kakaocdn.net/dn/bdGVxy/btq6N2YiHF8/4MdPYEvSV88WW7Z48gw84K/img.png',
          },
        ],
        interest: ['seong-yeon'],
        clap: ['seong-yeon'],
      },
      {
        title: '테스트',
        contents: '꽃길만 걷게 해줄게',
        files: [
          {
            size: 100,
            uri: 'https://imgnn.seoul.co.kr/img/upload/2013/05/05/SSI_20130505112323_V.jpg',
          },
          {
            size: 10000,
            uri: 'https://lh5.googleusercontent.com/p/AF1QipNnvXr1ejUm7zLvjHqbSaHIhDpr-3XiE8kMI2Nv=w408-h306-k-no',
          },
          {
            size: 100,
            uri: 'https://blog.kakaocdn.net/dn/bdGVxy/btq6N2YiHF8/4MdPYEvSV88WW7Z48gw84K/img.png',
          },
          {
            size: 100,
            uri: 'https://imgnn.seoul.co.kr/img/upload/2013/05/05/SSI_20130505112323_V.jpg',
          },
          {
            size: 10000,
            uri: 'https://lh5.googleusercontent.com/p/AF1QipNnvXr1ejUm7zLvjHqbSaHIhDpr-3XiE8kMI2Nv=w408-h306-k-no',
          },
          {
            size: 100,
            uri: 'https://blog.kakaocdn.net/dn/bdGVxy/btq6N2YiHF8/4MdPYEvSV88WW7Z48gw84K/img.png',
          },
        ],
        interest: ['seong-yeon'],
        clap: ['seong-yeon'],
      },
      {
        title: '테스트',
        contents: '꽃길만 걷게 해줄게',
        files: [],
        interest: ['seong-yeon'],
        clap: ['seong-yeon'],
      },
      {
        title: '테스트',
        contents: '꽃길만 걷게 해줄게',
        files: [],
        interest: ['seong-yeon'],
        clap: ['seong-yeon'],
      },
      {
        title: '테스트',
        contents: '꽃길만 걷게 해줄게',
        files: [],
        interest: ['seong-yeon'],
        clap: ['seong-yeon'],
      },
      {
        title: '테스트',
        contents: '꽃길만 걷게 해줄게',
        files: [],
        interest: ['seong-yeon'],
        clap: ['seong-yeon'],
      },
      {
        title: '테스트',
        contents: '꽃길만 걷게 해줄게',
        files: [],
        interest: ['seong-yeon'],
        clap: ['seong-yeon'],
      },
      {
        title: '테스트',
        contents: '꽃길만 걷게 해줄게',
        files: [],
        interest: ['seong-yeon'],
        clap: ['seong-yeon'],
      },
      {
        title: '테스트',
        contents: '꽃길만 걷게 해줄게',
        files: [],
        interest: ['seong-yeon'],
        clap: ['seong-yeon'],
      },
      {
        title: '테스트',
        contents: '꽃길만 걷게 해줄게',
        files: [],
        interest: ['seong-yeon'],
        clap: ['seong-yeon'],
      },
      {
        title: '테스트',
        contents: '꽃길만 걷게 해줄게',
        files: [],
        interest: ['seong-yeon'],
        clap: ['seong-yeon'],
      },
      {
        title: '테스트',
        contents: '꽃길만 걷게 해줄게',
        files: [],
        interest: ['seong-yeon'],
        clap: ['seong-yeon'],
      },
      {
        title: '테스트',
        contents: '꽃길만 걷게 해줄게',
        files: [],
        interest: ['seong-yeon'],
        clap: ['seong-yeon'],
      },
      {
        title: '테스트',
        contents: '꽃길만 걷게 해줄게',
        files: [],
        interest: ['seong-yeon'],
        clap: ['seong-yeon'],
      },
      {
        title: '테스트',
        contents: '꽃길만 걷게 해줄게',
        files: [],
        interest: ['seong-yeon'],
        clap: ['seong-yeon'],
      },
      {
        title: '테스트',
        contents: '꽃길만 걷게 해줄게',
        files: [],
        interest: ['seong-yeon'],
        clap: ['seong-yeon'],
      },
      {
        title: '테스트',
        contents: '꽃길만 걷게 해줄게',
        files: [],
        interest: ['seong-yeon'],
        clap: ['seong-yeon'],
      },
      {
        title: '테스트',
        contents: '꽃길만 걷게 해줄게',
        files: [],
        interest: ['seong-yeon'],
        clap: ['seong-yeon'],
      },
    ] as PostDataType[],
    chats: [] as ChatDataType[],
  },
  reducers: {
    setName: (
      state,
      { payload }: PayloadAction<{ name: string; img: string }>
    ) => ({
      ...state,
      user: {
        name: payload.name,
        img: payload.img,
      },
    }),
    addPost: (state, { payload }: PayloadAction<PostDataType>) => ({
      ...state,
      posts: [payload, ...state.posts],
    }),
    deletePost: (state, { payload }: PayloadAction<number>) => ({
      ...state,
      posts: state.posts.filter((e, index) => index !== payload),
    }),
    setInteration: (
      state,
      {
        payload,
      }: PayloadAction<{
        idx: number;
        key: 'clap' | 'interest';
        name: string;
      }>
    ) => {
      const isThereUser = state.posts[payload.idx][payload.key].find(
        (element) => element === payload.name
      );
      const copyPosts = [...state.posts];
      copyPosts.splice(payload.idx, 1, {
        ...state.posts[payload.idx],
        [payload.key]: isThereUser
          ? state.posts[payload.idx][payload.key].filter(
              (element) => element !== payload.name
            )
          : [...state.posts[payload.idx][payload.key], payload.name],
      });
      return {
        ...state,
        posts: copyPosts,
      };
    },
    addPosts: (state) => {
      const posts: PostDataType[] = [];
      if (state.posts.length > 100) {
        return { ...state };
      } else {
        for (let i = 0; i < 20; i++)
          posts.push({
            title: '테스트',
            contents: '꽃길만 걷게 해줄게',
            files: [],
            interest: ['seong-yeon'],
            clap: ['seong-yeon'],
          });
      }
      return { ...state, posts: [...state.posts, ...posts] };
    },
    addChat: (state, { payload }: PayloadAction<ChatDataType>) => ({
      ...state,
      chats: [payload, ...state.chats],
    }),
    resetChats: (state) => ({ ...state, chats: [] }),
  },
});

export const {
  addPost,
  deletePost,
  setInteration,
  addPosts,
  setName,
  addChat,
  resetChats,
} = actions;
export default reducer;
