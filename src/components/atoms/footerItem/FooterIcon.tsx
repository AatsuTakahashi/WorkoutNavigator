import { View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import { footerIconStyles } from './FooterItem.module';

export const WorkOutIcon = () => {
  return (
    <View style={footerIconStyles.container}>
      <FontAwesome5 name='list-alt' size={25} />
    </View>
  );
};

export const HomeIcon = () => {
  return (
    <View style={footerIconStyles.container}>
      <FontAwesome5 name='home' size={25} />
    </View>
  );
};

export const ActivityIcon = () => {
  return (
    <View style={footerIconStyles.container}>
      <Feather name='activity' size={25} />
    </View>
  );
};
