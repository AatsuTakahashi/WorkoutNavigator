import React from 'react';
import MainTemplate from '../templates/MainTemplate/MainTemplate';
import WelcomeMessage from '../atoms/message/WelcomeMessage';
import { WELCOME_MESSAGE } from '../../constants/Message';
import { Text } from 'react-native';

const HomePage: React.FC = () => {
  return (
    <MainTemplate>
      <WelcomeMessage message={WELCOME_MESSAGE} />
      <Text>ワークアウトを設定</Text>
      <Text>グループで共有する</Text>
    </MainTemplate>
  );
};

export default HomePage;
