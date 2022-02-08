import {RootStackNavigation} from '@/navigator';
import React from 'react';
import {Button, Text, View} from 'react-native';

interface IListenProps {
  navigation: RootStackNavigation;
}

const Listen: React.FC<IListenProps> = ({navigation}) => {
  const onPress = () => {
    navigation.navigate('Detail', {
      id: 100,
    });
  };

  return (
    <View>
      <Text>Listen</Text>
      <Button title="跳转" onPress={onPress} />
    </View>
  );
};

export default Listen;
