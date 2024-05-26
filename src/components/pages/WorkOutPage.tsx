import React from 'react';
import MainTemplate from '../templates/MainTemplate';
import { Text, View } from 'react-native';
import WelcomeMessage from '../atoms/message/WelcomeMessage';
import { WELCOME_MESSAGE } from '../../constants/Message';
import ManagementWorkOut from '../organisms/workOut/ManagementWorkOut';
import { WorkOutTemplateStyles } from '../templates/Template.module';
import { WelcomeMessageStyle } from '../atoms/message/WelcomeMessage.module';

const WorkOutPage = () => {
  return (
    <MainTemplate templateStyle={WorkOutTemplateStyles.container}>
      <WelcomeMessage
        message={WELCOME_MESSAGE.WORK_OUT_MESSAGE}
        TextStyle={WelcomeMessageStyle.messageText_white}
      />
      <ManagementWorkOut />
    </MainTemplate>
  );
};

export default WorkOutPage;
