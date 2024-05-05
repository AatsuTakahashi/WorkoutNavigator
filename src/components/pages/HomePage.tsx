import React from 'react';
import MainTemplate from '../templates/MainTemplate';
import { Text, View } from 'react-native';

const HomePage: React.FC = () => {
  return (
    <MainTemplate>
      <View>
        <Text>テスト ホームページ</Text>
      </View>
    </MainTemplate>
  );
};

export default HomePage;
