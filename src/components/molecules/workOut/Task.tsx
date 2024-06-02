import React from 'react';
import { TaskProps } from '../../../types/WorkOut';
import { formatFullDate } from '../../../utils/dataFormatter';
import { Text, View } from 'react-native';
import { TaskStyle } from './Task.module';

const Task: React.FC<TaskProps> = ({ route }) => {
  const { workout } = route.params;

  const formattedDate = workout.date ? formatFullDate(workout.date) : '';

  return (
    <View style={TaskStyle.container}>
      <Text style={TaskStyle.titleText}>{workout.title}</Text>
      <Text style={TaskStyle.dateText}>{formattedDate}</Text>
      <Text style={TaskStyle.contentText}>{workout.content}</Text>
      <Text style={TaskStyle.othersText}> {workout.others}</Text>
    </View>
  );
};

export default Task;
