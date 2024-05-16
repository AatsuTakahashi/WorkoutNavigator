import React from 'react';
import MainTemplate from '../templates/MainTemplate/MainTemplate';
import { Text, View } from 'react-native';
import WelcomeMessage from '../atoms/message/WelcomeMessage';
import { WELCOME_MESSAGE } from '../../constants/Message';
import ManagementWorkOut from '../organisms/workOut/ManagementWorkOut';

const WorkOutPage = () => {
  return (
    <MainTemplate>
      <WelcomeMessage message={WELCOME_MESSAGE.WORK_OUT_MESSAGE} />
      <ManagementWorkOut />
    </MainTemplate>
  );
};

export default WorkOutPage;
