import React from 'react';
import GoBack from '../molecules/transition/GoBack';
import InputForm from '../molecules/form/InputForm';
import MainTemplate from '../templates/MainTemplate';
import { MainTemplateStyles } from '../templates/Template.module';

const WorkOutRecordPage = () => {
  const handleFormSubmit = (values: {
    title: string;
    content: string;
    others: string;
    date: Date | null;
  }) => {
    console.log('Form submitted:', values);
  };

  return (
    <MainTemplate templateStyle={MainTemplateStyles.container}>
      <GoBack />
      <InputForm onSubmit={handleFormSubmit} />
    </MainTemplate>
  );
};

export default WorkOutRecordPage;
