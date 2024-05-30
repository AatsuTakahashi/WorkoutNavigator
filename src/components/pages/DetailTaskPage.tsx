import React from 'react';
import { Text, View } from 'react-native';
import { TaskProps } from '../../types/WorkOut';
import { formatFullDate } from '../../utils/dataFormatter';

const DetailTaskPage: React.FC<TaskProps> = ({ route }) => {
  const { workout } = route.params;

  const formattedDate = workout.date ? formatFullDate(workout.date) : '';

  return (
    <View>
      <Text>{workout.title}</Text>
      <Text>{workout.content}</Text>
      <Text>{workout.others}</Text>
      <Text>{formattedDate}</Text>
    </View>
  );
};

export default DetailTaskPage;
