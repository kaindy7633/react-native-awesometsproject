import {RootStackNavigation} from '@/navigator';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {useRecoilState} from 'recoil';
import {testState} from '@/recoil/atoms';
interface IHomeProps {
  navigation: RootStackNavigation;
}

const Home: React.FC<IHomeProps> = ({navigation}) => {
  const [testDemo, setTestDemo] = useRecoilState(testState);

  const onPress = () => {
    navigation.navigate('Detail', {
      id: 100,
    });
  };

  const handleTest = () => {
    setTestDemo(testDemo + 10);
  };

  return (
    <View>
      <Text>Home</Text>
      <Text>{testDemo}</Text>
      <Button title="跳转" onPress={onPress} />
      <Button title="Add" onPress={handleTest} />
    </View>
  );
};

export default Home;
