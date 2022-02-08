import {RootStackNavigation} from '@/navigator';
import React from 'react';
import {Button, Text, View} from 'react-native';

interface IFoundProps {
  navigation: RootStackNavigation;
}

const Found: React.FC<IFoundProps> = ({navigation}) => {
  const onPress = () => {
    navigation.navigate('Detail', {
      id: 100,
    });
  };

  return (
    <View>
      <Text>Found</Text>
      <Button title="跳转" onPress={onPress} />
    </View>
  );
};

export default Found;
