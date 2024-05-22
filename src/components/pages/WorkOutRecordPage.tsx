import React from 'react';
import { Text, View } from 'react-native';
import MainTemplate from '../templates/MainTemplate/MainTemplate';
import GoBack from '../molecules/transition/GoBack';
import InputForm from '../molecules/form/InputForm';

const WorkOutRecordPage = () => {
  return (
    <MainTemplate>
      <GoBack />
      <InputForm />
    </MainTemplate>
  );
};

export default WorkOutRecordPage;
