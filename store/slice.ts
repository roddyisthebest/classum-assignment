import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PostDataType, ChatDataType } from '../types/index';

export type initialStateProps = {
  user: {
    name: string;
    img: string;
  };
  posts: PostDataType[];
  chats: ChatDataType[];
  variation: {
    newPost: boolean;
    newChat: boolean;
  };
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
        data: [],
        dataType: 'images',
        interest: ['seong-yeon'],
        clap: ['seong-yeon'],
        user: {
          name: 'seong-yeon',
          img: 'https://blog.kakaocdn.net/dn/bdGVxy/btq6N2YiHF8/4MdPYEvSV88WW7Z48gw84K/img.png',
        },
      },
      {
        title: '테스트',
        contents: '꽃길만 걷게 해줄게',
        data: [],
        dataType: 'images',
        interest: ['seong-yeon'],
        clap: ['seong-yeon'],
        user: {
          name: 'seong-yeon',
          img: 'https://blog.kakaocdn.net/dn/bdGVxy/btq6N2YiHF8/4MdPYEvSV88WW7Z48gw84K/img.png',
        },
      },
      {
        title: '테스트',
        contents: '꽃길만 걷게 해줄게',
        data: [],
        dataType: 'images',
        interest: ['seong-yeon'],
        clap: ['seong-yeon'],
        user: {
          name: 'seong-yeon',
          img: 'https://blog.kakaocdn.net/dn/bdGVxy/btq6N2YiHF8/4MdPYEvSV88WW7Z48gw84K/img.png',
        },
      },
      {
        title: '테스트',
        contents: '꽃길만 걷게 해줄게',
        data: [],
        dataType: 'images',
        interest: ['seong-yeon'],
        clap: ['seong-yeon'],
        user: {
          name: 'seong-yeon',
          img: 'https://blog.kakaocdn.net/dn/bdGVxy/btq6N2YiHF8/4MdPYEvSV88WW7Z48gw84K/img.png',
        },
      },
      {
        title: '테스트',
        contents: '꽃길만 걷게 해줄게',
        data: [],
        dataType: 'images',
        interest: ['seong-yeon'],
        clap: ['seong-yeon'],
        user: {
          name: 'seong-yeon',
          img: 'https://blog.kakaocdn.net/dn/bdGVxy/btq6N2YiHF8/4MdPYEvSV88WW7Z48gw84K/img.png',
        },
      },
      {
        title: '테스트',
        contents: '꽃길만 걷게 해줄게',
        data: [],
        dataType: 'images',
        interest: ['seong-yeon'],
        clap: ['seong-yeon'],
        user: {
          name: 'seong-yeon',
          img: 'https://blog.kakaocdn.net/dn/bdGVxy/btq6N2YiHF8/4MdPYEvSV88WW7Z48gw84K/img.png',
        },
      },
      {
        title: '테스트',
        contents: '꽃길만 걷게 해줄게',
        data: [],
        dataType: 'images',
        interest: ['seong-yeon'],
        clap: ['seong-yeon'],
        user: {
          name: 'seong-yeon',
          img: 'https://blog.kakaocdn.net/dn/bdGVxy/btq6N2YiHF8/4MdPYEvSV88WW7Z48gw84K/img.png',
        },
      },
      {
        title: '테스트',
        contents: '꽃길만 걷게 해줄게',
        data: [],
        dataType: 'images',
        interest: ['seong-yeon'],
        clap: ['seong-yeon'],
        user: {
          name: 'seong-yeon',
          img: 'https://blog.kakaocdn.net/dn/bdGVxy/btq6N2YiHF8/4MdPYEvSV88WW7Z48gw84K/img.png',
        },
      },
      {
        title: '테스트',
        contents: '꽃길만 걷게 해줄게',
        data: [],
        dataType: 'images',
        interest: ['seong-yeon'],
        clap: ['seong-yeon'],
        user: {
          name: 'seong-yeon',
          img: 'https://blog.kakaocdn.net/dn/bdGVxy/btq6N2YiHF8/4MdPYEvSV88WW7Z48gw84K/img.png',
        },
      },
      {
        title: '테스트',
        contents: '꽃길만 걷게 해줄게',
        data: [],
        dataType: 'images',
        interest: ['seong-yeon'],
        clap: ['seong-yeon'],
        user: {
          name: 'seong-yeon',
          img: 'https://blog.kakaocdn.net/dn/bdGVxy/btq6N2YiHF8/4MdPYEvSV88WW7Z48gw84K/img.png',
        },
      },
      {
        title: '테스트',
        contents: '꽃길만 걷게 해줄게',
        data: [],
        dataType: 'images',
        interest: ['seong-yeon'],
        clap: ['seong-yeon'],
        user: {
          name: 'seong-yeon',
          img: 'https://blog.kakaocdn.net/dn/bdGVxy/btq6N2YiHF8/4MdPYEvSV88WW7Z48gw84K/img.png',
        },
      },
      {
        title: '테스트',
        contents: '꽃길만 걷게 해줄게',
        data: [],
        dataType: 'images',
        interest: ['seong-yeon'],
        clap: ['seong-yeon'],
        user: {
          name: 'seong-yeon',
          img: 'https://blog.kakaocdn.net/dn/bdGVxy/btq6N2YiHF8/4MdPYEvSV88WW7Z48gw84K/img.png',
        },
      },
      {
        title: '테스트',
        contents: '꽃길만 걷게 해줄게',
        data: [],
        dataType: 'images',
        interest: ['seong-yeon'],
        clap: ['seong-yeon'],
        user: {
          name: 'seong-yeon',
          img: 'https://blog.kakaocdn.net/dn/bdGVxy/btq6N2YiHF8/4MdPYEvSV88WW7Z48gw84K/img.png',
        },
      },
      {
        title: '테스트',
        contents: '꽃길만 걷게 해줄게',
        data: [],
        dataType: 'images',
        interest: ['seong-yeon'],
        clap: ['seong-yeon'],
        user: {
          name: 'seong-yeon',
          img: 'https://blog.kakaocdn.net/dn/bdGVxy/btq6N2YiHF8/4MdPYEvSV88WW7Z48gw84K/img.png',
        },
      },
      {
        title: '테스트',
        contents: '꽃길만 걷게 해줄게',
        data: [],
        dataType: 'images',
        interest: ['seong-yeon'],
        clap: ['seong-yeon'],
        user: {
          name: 'seong-yeon',
          img: 'https://blog.kakaocdn.net/dn/bdGVxy/btq6N2YiHF8/4MdPYEvSV88WW7Z48gw84K/img.png',
        },
      },
      {
        title: '테스트',
        contents: '꽃길만 걷게 해줄게',
        data: [],
        dataType: 'images',
        interest: ['seong-yeon'],
        clap: ['seong-yeon'],
        user: {
          name: 'seong-yeon',
          img: 'https://blog.kakaocdn.net/dn/bdGVxy/btq6N2YiHF8/4MdPYEvSV88WW7Z48gw84K/img.png',
        },
      },
      {
        title: '테스트',
        contents: '꽃길만 걷게 해줄게',
        data: [],
        dataType: 'images',
        interest: ['seong-yeon'],
        clap: ['seong-yeon'],
        user: {
          name: 'seong-yeon',
          img: 'https://blog.kakaocdn.net/dn/bdGVxy/btq6N2YiHF8/4MdPYEvSV88WW7Z48gw84K/img.png',
        },
      },
      {
        title: '테스트',
        contents: '꽃길만 걷게 해줄게',
        data: [],
        dataType: 'images',
        interest: ['seong-yeon'],
        clap: ['seong-yeon'],
        user: {
          name: 'seong-yeon',
          img: 'https://blog.kakaocdn.net/dn/bdGVxy/btq6N2YiHF8/4MdPYEvSV88WW7Z48gw84K/img.png',
        },
      },
      {
        title: '테스트',
        contents: '꽃길만 걷게 해줄게',
        data: [],
        dataType: 'images',
        interest: ['seong-yeon'],
        clap: ['seong-yeon'],
        user: {
          name: 'seong-yeon',
          img: 'https://blog.kakaocdn.net/dn/bdGVxy/btq6N2YiHF8/4MdPYEvSV88WW7Z48gw84K/img.png',
        },
      },
      {
        title: '테스트',
        contents: '꽃길만 걷게 해줄게',
        data: [],
        dataType: 'images',
        interest: ['seong-yeon'],
        clap: ['seong-yeon'],
        user: {
          name: 'seong-yeon',
          img: 'https://blog.kakaocdn.net/dn/bdGVxy/btq6N2YiHF8/4MdPYEvSV88WW7Z48gw84K/img.png',
        },
      },
      {
        title: '테스트',
        contents: '꽃길만 걷게 해줄게',
        data: [],
        dataType: 'images',
        interest: ['seong-yeon'],
        clap: ['seong-yeon'],
        user: {
          name: 'seong-yeon',
          img: 'https://blog.kakaocdn.net/dn/bdGVxy/btq6N2YiHF8/4MdPYEvSV88WW7Z48gw84K/img.png',
        },
      },
    ] as PostDataType[],
    chats: [] as ChatDataType[],
    variation: {
      newPost: false,
      newChat: false,
    },
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
      if (state.posts.length > 99) {
        return { ...state };
      } else {
        for (let i = 0; i < 20; i++)
          posts.push({
            title: '테스트',
            contents: '꽃길만 걷게 해줄게',
            data: [
              'https://lh3.googleusercontent.com/-52QVDnBEaQo/Wo2NpTEM_rI/AAAAAAABSZU/VbYCnEl7HVgwtsJeRDzgAl4e2z1mna3KgCHMYCw/s0/8f5262cffe50055e25c1b7eee687d433debf88a8.jpg',
              'https://lh3.googleusercontent.com/-52QVDnBEaQo/Wo2NpTEM_rI/AAAAAAABSZU/VbYCnEl7HVgwtsJeRDzgAl4e2z1mna3KgCHMYCw/s0/8f5262cffe50055e25c1b7eee687d433debf88a8.jpg',
              'https://lh3.googleusercontent.com/-52QVDnBEaQo/Wo2NpTEM_rI/AAAAAAABSZU/VbYCnEl7HVgwtsJeRDzgAl4e2z1mna3KgCHMYCw/s0/8f5262cffe50055e25c1b7eee687d433debf88a8.jpg',
            ],
            dataType: 'images',
            interest: ['seong-yeon'],
            clap: ['seong-yeon'],
            user: {
              name: 'seong-yeon',
              img: 'https://blog.kakaocdn.net/dn/bdGVxy/btq6N2YiHF8/4MdPYEvSV88WW7Z48gw84K/img.png',
            },
          });
      }
      return { ...state, posts: [...state.posts, ...posts] };
    },
    addChat: (state, { payload }: PayloadAction<ChatDataType>) => ({
      ...state,
      chats: [payload, ...state.chats],
    }),
    resetChats: (state) => ({ ...state, chats: [] }),
    setVariation: (
      state,
      { payload }: PayloadAction<{ key: string; value: boolean }>
    ) => ({
      ...state,
      variation: {
        ...state.variation,
        [payload.key]: payload.value,
      },
    }),
  },
});

export const {
  addPost,
  setInteration,
  addPosts,
  setName,
  addChat,
  resetChats,
  setVariation,
} = actions;
export default reducer;
