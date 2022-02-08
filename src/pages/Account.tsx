import {RootStackNavigation} from '@/navigator';
import React from 'react';
import {Button, Text, View} from 'react-native';

interface IAccountProps {
  navigation: RootStackNavigation;
}

const Account: React.FC<IAccountProps> = ({navigation}) => {
  const onPress = () => {
    navigation.navigate('Detail', {
      id: 100,
    });
  };

  return (
    <View>
      <Text>Account</Text>
      <Button title="跳转" onPress={onPress} />
    </View>
  );
};

export default Account;
