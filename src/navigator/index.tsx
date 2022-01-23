import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '@/pages/Home';
import Detail from '@/pages/Detail';

interface INavigatorProps {}

type RootStackParamList = {
  Home: undefined;
  Detail: undefined;
};
const Stack = createStackNavigator<RootStackParamList>();

const Navigator: React.FC<INavigatorProps> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
