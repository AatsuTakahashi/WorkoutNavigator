import React from 'react';
import MainTemplate from '../templates/MainTemplate/MainTemplate';
import WelcomeMessage from '../atoms/message/WelcomeMessage';
import { WELCOME_MESSAGE } from '../../constants/Message';
import { Text } from 'react-native';
import HomeContent from '../organisms/home/HomeContent';

const HomePage: React.FC = () => {
  return (
    <MainTemplate>
      <WelcomeMessage message={WELCOME_MESSAGE.HOME_MESSAGE} />
      <HomeContent />
    </MainTemplate>
  );
};

export default HomePage;
