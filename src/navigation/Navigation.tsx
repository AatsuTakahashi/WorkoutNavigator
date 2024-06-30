import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../RootStackParamList/RootStackParamList';
import { Workout } from '../types/WorkOut';

export const useAppNavigation = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const navigateToHome = () => {
    navigation.navigate('Home');
  };
  const navigateToWorkOut = () => {
    navigation.navigate('WorkOut');
  };

  const navigateToActivity = () => {
    navigation.navigate('Activity');
  };

  const navigateToWorkOutRecord = () => {
    navigation.navigate('WorkOutRecord');
  };

  const navigateToDetailTask = (workout: Workout) => {
    navigation.navigate('DetailTask', { workout });
  };

  return {
    navigation,
    navigateToHome,
    navigateToWorkOut,
    navigateToActivity,
    navigateToWorkOutRecord,
    navigateToDetailTask,
  };
};
