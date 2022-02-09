import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Listen from '@/pages/Listen';
import Found from '@/pages/Found';
import Account from '@/pages/Account';
import {RootStackNavigation, RootStackParamList} from '.';
import {
  RouteProp,
  TabNavigationState,
  useNavigationState,
} from '@react-navigation/native';
import {useEffect} from 'react';
import {IconFaxian, IconHome, IconShoucang, IconWode} from '@/assets/iconfont';
import HomeTabs from './HomeTabs';

type Route = RouteProp<RootStackParamList, 'BottomTabs'> & {
  state?: TabNavigationState<RootStackParamList>;
};

interface IBottomTabsProps {
  navigation: RootStackNavigation;
  route: Route;
}

export type BottomTabParamList = {
  HomeTabs: undefined;
  Listen: undefined;
  Found: undefined;
  Account: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabs: React.FC<IBottomTabsProps> = ({navigation, route}) => {
  const _routeName = useNavigationState(state => {
    const _index = state.routes[0].state?.index;
    return state.routes[0].state?.routes[_index!].name;
  });

  useEffect(() => {
    navigation.setOptions({
      headerTitle: getHeaderTitle(_routeName!) || '首页',
    });
  }, [_routeName, navigation, route]);

  const getHeaderTitle = (name: string) => {
    switch (name) {
      case 'HomeTabs':
        return '首页';
      case 'Listen':
        return '我听';
      case 'Found':
        return '发现';
      case 'Account':
        return '账户';
      default:
        return '首页';
    }
  };

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeTabs"
        component={HomeTabs}
        options={{
          headerShown: false,
          tabBarLabel: '首页',
          tabBarActiveTintColor: '#f86442',
          tabBarIcon: ({color, size}) => <IconHome color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Listen"
        component={Listen}
        options={{
          tabBarLabel: '我听',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <IconShoucang color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Found"
        component={Found}
        options={{
          tabBarLabel: '发现',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <IconFaxian color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: '我的',
          headerShown: false,
          tabBarIcon: ({color, size}) => <IconWode color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
