import React from 'react';
import MainTemplate from '../templates/MainTemplate';
import WelcomeMessage from '../atoms/message/WelcomeMessage';
import { WELCOME_MESSAGE } from '../../constants/Message';
import HomeContent from '../organisms/home/HomeContent';
import { MainTemplateStyles } from '../templates/Template.module';
import { WelcomeMessageStyle } from '../atoms/message/WelcomeMessage.module';

const HomePage: React.FC = () => {
  return (
    <MainTemplate templateStyle={MainTemplateStyles.container}>
      <WelcomeMessage
        message={WELCOME_MESSAGE.HOME_MESSAGE}
        TextStyle={WelcomeMessageStyle.messageText_black}
      />
      <HomeContent />
    </MainTemplate>
  );
};

export default HomePage;
