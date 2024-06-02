import React from 'react';
import { Text, View } from 'react-native';
import { TaskProps } from '../../types/WorkOut';
import MainTemplate from '../templates/MainTemplate';
import { TaskTemplateStyles } from '../templates/Template.module';
import GoBack from '../molecules/transition/GoBack';
import Task from '../molecules/workOut/Task';
import { TaskStyle } from '../molecules/workOut/Task.module';

const DetailTaskPage: React.FC<TaskProps> = ({ route, navigation }) => {
  return (
    <MainTemplate templateStyle={TaskTemplateStyles.container}>
      <View style={TaskStyle.functionalContainer}>
        <GoBack />
        <Text>編集する</Text>
      </View>
      <View>
        <Task route={route} navigation={navigation} />
      </View>
    </MainTemplate>
  );
};

export default DetailTaskPage;
