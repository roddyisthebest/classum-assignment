import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tab from './Tab';
import Stack from './Stack';
import { useDispatch } from 'react-redux';
import { setName, addChat } from '../store/slice';
import {
  collection,
  limit,
  orderBy,
  onSnapshot,
  query,
} from 'firebase/firestore';
import { db } from '../firebase';

const Nav = createNativeStackNavigator();

const Root = () => {
  const dispatch = useDispatch();
  const q = query(collection(db, 'chats'), orderBy('createdAt'));

  useEffect(() => {
    const unsubscribe = onSnapshot(q, (snapshot: any) => {
      snapshot.docChanges().forEach((change: any) => {
        if (change.type === 'added') {
          dispatch(addChat(change.doc.data()));
        }
      });
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const name = [
      {
        name: 'roddy',
        img: 'https://lastfm.freetls.fastly.net/i/u/ar0/f4b041824736267bf894b5389c328ccd.jpg',
      },
      {
        name: 'seulgi',
        img: 'http://www.stardailynews.co.kr/news/photo/201809/215406_245231_5550.jpg',
      },
      {
        name: 'crush',
        img: 'https://i.scdn.co/image/ab6761610000e5eb8e9d1c8642df6f869631fe62',
      },
      {
        name: 'xiah',
        img: 'https://thumb.mtstarnews.com/06/2009/05/2009050511444164763_1.jpg/dims/optimize',
      },
      {
        name: 'max',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4pgDcxOH333jCR0IlKbSO0HEogMH9eLbI9w&usqp=CAU',
      },
    ];
    const random = Math.floor(Math.random() * name.length) + 0;
    dispatch(setName(name[random]));
  }, []);

  return (
    <Nav.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Nav.Screen name="Tabs" component={Tab} />
      <Nav.Screen name="Stack" component={Stack} />
    </Nav.Navigator>
  );
};

export default Root;
