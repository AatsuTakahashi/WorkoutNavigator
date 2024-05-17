import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../RootStackParamList/RootStackParamList';

export const useAppNavigation = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const navigateToHome = () => {
    navigation.navigate('Home');
  };
  const navigateToWorkOut = () => {
    navigation.navigate('WorkOut');
  };

  const navigateToWorkOutRecord = () => {
    navigation.navigate('WorkOutRecord');
  };

  return {
    navigation,
    navigateToHome,
    navigateToWorkOut,
    navigateToWorkOutRecord,
  };
};
