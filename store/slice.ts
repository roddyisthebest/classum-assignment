import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PostDataType } from '../types/index';

export type initialStateProps = {
  name: string;
  posts: PostDataType[];
  chats: any[];
};

const { actions, reducer } = createSlice({
  name: 'store',
  initialState: {
    name: 'seong-yeon',
    posts: [
      // {
      //   title: '',
      //   contents: '꽃길만 걷게 해줄게',
      //   files: [
      //     {
      //       size: 10000,
      //       uri: 'https://lh5.googleusercontent.com/p/AF1QipNnvXr1ejUm7zLvjHqbSaHIhDpr-3XiE8kMI2Nv=w408-h306-k-no',
      //     },
      //     {
      //       size: 100,
      //       uri: 'https://blog.kakaocdn.net/dn/bdGVxy/btq6N2YiHF8/4MdPYEvSV88WW7Z48gw84K/img.png',
      //     },
      //   ],
      //   interest: ['seong-yeon', 'roddy'],
      //   clap: [],
      // },
      // {
      //   title: '테스트',
      //   contents: '꽃길만 걷게 해줄게',
      //   files: [
      //     {
      //       size: 100,
      //       uri: 'https://blog.kakaocdn.net/dn/bdGVxy/btq6N2YiHF8/4MdPYEvSV88WW7Z48gw84K/img.png',
      //     },
      //   ],
      //   interest: ['seong-yeon'],
      //   clap: ['seong-yeon'],
      // },
      // {
      //   title: '테스트',
      //   contents: '꽃길만 걷게 해줄게',
      //   files: [
      //     {
      //       size: 100,
      //       uri: 'https://imgnn.seoul.co.kr/img/upload/2013/05/05/SSI_20130505112323_V.jpg',
      //     },
      //     {
      //       size: 10000,
      //       uri: 'https://lh5.googleusercontent.com/p/AF1QipNnvXr1ejUm7zLvjHqbSaHIhDpr-3XiE8kMI2Nv=w408-h306-k-no',
      //     },
      //     {
      //       size: 100,
      //       uri: 'https://blog.kakaocdn.net/dn/bdGVxy/btq6N2YiHF8/4MdPYEvSV88WW7Z48gw84K/img.png',
      //     },
      //   ],
      //   interest: ['seong-yeon'],
      //   clap: ['seong-yeon'],
      // },
      // {
      //   title: '테스트',
      //   contents: '꽃길만 걷게 해줄게',
      //   files: [
      //     {
      //       size: 100,
      //       uri: 'https://imgnn.seoul.co.kr/img/upload/2013/05/05/SSI_20130505112323_V.jpg',
      //     },
      //     {
      //       size: 10000,
      //       uri: 'https://lh5.googleusercontent.com/p/AF1QipNnvXr1ejUm7zLvjHqbSaHIhDpr-3XiE8kMI2Nv=w408-h306-k-no',
      //     },
      //     {
      //       size: 100,
      //       uri: 'https://blog.kakaocdn.net/dn/bdGVxy/btq6N2YiHF8/4MdPYEvSV88WW7Z48gw84K/img.png',
      //     },
      //     {
      //       size: 100,
      //       uri: 'https://imgnn.seoul.co.kr/img/upload/2013/05/05/SSI_20130505112323_V.jpg',
      //     },
      //     {
      //       size: 10000,
      //       uri: 'https://lh5.googleusercontent.com/p/AF1QipNnvXr1ejUm7zLvjHqbSaHIhDpr-3XiE8kMI2Nv=w408-h306-k-no',
      //     },
      //     {
      //       size: 100,
      //       uri: 'https://blog.kakaocdn.net/dn/bdGVxy/btq6N2YiHF8/4MdPYEvSV88WW7Z48gw84K/img.png',
      //     },
      //   ],
      //   interest: ['seong-yeon'],
      //   clap: ['seong-yeon'],
      // },
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
    chats: [] as any[],
  },
  reducers: {
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
  },
});

export const { addPost, deletePost, setInteration } = actions;
export default reducer;
