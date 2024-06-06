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
  id: string;
  title: string;
  content: string;
  others: string;
  date: Date | null;
};

export interface TaskComponentProps extends TaskProps {
  isEditing: boolean;
  title: string;
  setTitle: (text: string) => void;
  content: string;
  setContent: (text: string) => void;
  others: string;
  setOthers: (text: string) => void;
  date: Date | null;
  setDate: (date: Date | null) => void;
}
