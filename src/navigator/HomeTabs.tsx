import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from '@/pages/Home';

interface IHomeTabsProps {}

const Tab = createMaterialTopTabNavigator();

const HomeTabs: React.FC<IHomeTabsProps> = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        lazy: true,
        tabBarScrollEnabled: true,
        tabBarItemStyle: {width: 80},
        tabBarIndicatorStyle: {
          height: 4,
          width: 20,
          marginLeft: 30,
          borderRadius: 2,
          backgroundColor: '#f86442',
        },
        tabBarActiveTintColor: '#f86442',
        tabBarInactiveTintColor: '#333',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{tabBarLabel: '推荐'}}
      />
    </Tab.Navigator>
  );
};

export default HomeTabs;
