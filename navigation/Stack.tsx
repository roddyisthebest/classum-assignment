import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Detail from '../screen/Detail';
import Slide from '../screen/Slide';
const NativeStack = createNativeStackNavigator();

const Stack = () => {
  return (
    <NativeStack.Navigator
      screenOptions={{
        headerBackTitleVisible: true,
        headerTitleStyle: {
          fontWeight: '700',
        },
        contentStyle: { backgroundColor: 'white' },
        presentation: 'card',
        headerTitle: '',
      }}
    >
      <NativeStack.Screen name="Detail" component={Detail} />
      <NativeStack.Screen name="Slide" component={Slide} />
    </NativeStack.Navigator>
  );
};

export default Stack;
