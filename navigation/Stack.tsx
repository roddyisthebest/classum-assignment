import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Detail from '../screen/Detail';
import Slide from '../screen/Slide';
import { Platform, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const NativeStack = createNativeStackNavigator();

const Stack = ({
  navigation: { goBack },
}: {
  navigation: { goBack: Function };
}) => {
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

        headerShadowVisible: false,
      }}
    >
      <NativeStack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerRight: () =>
            Platform.OS === 'ios' ? (
              <Pressable
                onPress={() => {
                  goBack();
                }}
              >
                <Icon name={'close'} color={'black'} size={25}></Icon>
              </Pressable>
            ) : null,
          headerBackTitleVisible: false,
          headerShadowVisible: false,
        }}
      />
      <NativeStack.Screen
        name="Slide"
        component={Slide as any}
        options={{
          headerLeft: () =>
            Platform.OS === 'ios' ? (
              <Pressable
                onPress={() => {
                  goBack();
                }}
              >
                <Icon name={'arrow-back'} color={'black'} size={25}></Icon>
              </Pressable>
            ) : null,
        }}
      />
    </NativeStack.Navigator>
  );
};

export default Stack;
