import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../RootStackParamList/RootStackParamList';
import { StackNavigationProp } from '@react-navigation/stack';

export type TaskDetailRouteProp = RouteProp<RootStackParamList, 'DetailTask'>;
export type TaskDetailNavigationProp = StackNavigationProp<
  RootStackParamList,
  'DetailTask'
>;

export type TaskProps = {
  route: TaskDetailRouteProp;
  navigation: TaskDetailNavigationProp;
};

export type Workout = {
  title: string;
  content: string;
  others: string;
  date: Date | null;
};
