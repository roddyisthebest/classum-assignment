import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Community from '../screen/Community';
import Icon from 'react-native-vector-icons/Ionicons';

import Dummy from '../screen/Dummy';
const NativeTab = createBottomTabNavigator();

const Tab = () => {
  return (
    <NativeTab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '600',
          marginBottom: 7,
        },

        tabBarIconStyle: {
          marginTop: 5,
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'black',
        tabBarStyle: {
          borderTopColor: '#BDC5CD',
          borderTopWidth: 0.5,
        },
        headerLeftContainerStyle: {
          paddingLeft: 30,
        },
        headerRightContainerStyle: {
          paddingRight: 30,
        },
        header: () => null,
        //   headerTitle: () => (

        //   ),
        //   headerLeft: () => (

        //   ),
      }}
    >
      <NativeTab.Screen
        name="커뮤니티"
        component={Community}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name={focused ? 'chatbubbles' : 'chatbubbles-outline'}
              size={20}
            />
          ),
        }}
      />
      <NativeTab.Screen
        name="콘텐츠"
        component={Dummy}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name={focused ? 'person-circle' : 'person-circle-outline'}
              size={20}
            />
          ),
        }}
      />
      <NativeTab.Screen
        name="설문"
        component={Dummy}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name={focused ? 'clipboard' : 'clipboard-outline'}
              size={20}
            />
          ),
        }}
      />
      <NativeTab.Screen
        name="통계"
        component={Dummy}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name={focused ? 'pie-chart' : 'pie-chart-outline'}
              size={20}
            />
          ),
        }}
      />
      <NativeTab.Screen
        name="설정"
        component={Dummy}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name={focused ? 'settings' : 'settings-outline'} size={20} />
          ),
        }}
      />
    </NativeTab.Navigator>
  );
};

export default Tab;
