import {RootStackParamList} from '@/navigator';
import {RouteProp} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';

interface IDetailProps {
  route: RouteProp<RootStackParamList, 'Detail'>;
}

const Detail: React.FC<IDetailProps> = ({route}) => {
  return (
    <View>
      <Text>Detail</Text>
      <Text>{route.params.id}</Text>
    </View>
  );
};

export default Detail;
