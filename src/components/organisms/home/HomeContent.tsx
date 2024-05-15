import React from 'react';
import { Pressable, View } from 'react-native';
import SettingWorkOut from '../../molecules/home/SettingWorkOut';
import ShareGroup from '../../molecules/home/ShareGroup';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../RootStackParamList/RootStackParamList';

const HomeContent = () => {
  const navigation =
    useNavigation<NavigationProp<RootStackParamList, 'WorkOut'>>();

  const navigateToWorkOut = () => {
    navigation.navigate('WorkOut');
  };
  return (
    <View>
      <Pressable onPress={() => navigateToWorkOut()}>
        <SettingWorkOut />
      </Pressable>
      <ShareGroup />
    </View>
  );
};

export default HomeContent;
