import React from 'react';
import MainTemplate from '../templates/MainTemplate';
import { MainTemplateStyles } from '../templates/Template.module';
import WelcomeMessage from '../atoms/message/WelcomeMessage';
import { WELCOME_MESSAGE } from '../../constants/Message';
import { WelcomeMessageStyle } from '../atoms/message/WelcomeMessage.module';

const ActivityPage = () => {
  return (
    <MainTemplate templateStyle={MainTemplateStyles.container}>
      <WelcomeMessage
        message={WELCOME_MESSAGE.ACTIVITY_MESSAGE}
        TextStyle={WelcomeMessageStyle.messageText_black}
      />
    </MainTemplate>
  );
};

export default ActivityPage;
