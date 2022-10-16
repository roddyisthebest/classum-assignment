import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Detail from '../screen/Detail';
import Slide from '../screen/Slide';
import { Pressable } from 'react-native';
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
      }}
    >
      <NativeStack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerRight: () => (
            <Pressable
              onPress={() => {
                goBack();
              }}
            >
              <Icon name={'close'} color={'black'} size={25}></Icon>
            </Pressable>
          ),
          //   header: () => null,
          headerShadowVisible: false,
        }}
      />
      <NativeStack.Screen name="Slide" component={Slide} />
    </NativeStack.Navigator>
  );
};

export default Stack;
