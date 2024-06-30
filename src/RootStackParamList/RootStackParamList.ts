import { Workout } from '../types/WorkOut';

export type RootStackParamList = {
  Home: undefined;
  WorkOut: undefined;
  WorkOutRecord: undefined;
  DetailTask: { workout: Workout };
  Activity: undefined;
};
