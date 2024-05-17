import React from 'react';
import { Pressable, View } from 'react-native';
import SettingWorkOut from '../../molecules/home/SettingWorkOut';
import ShareGroup from '../../molecules/home/ShareGroup';
import { useAppNavigation } from '../../../navigation/Navigation';

const HomeContent: React.FC = () => {
  const { navigateToWorkOut } = useAppNavigation();

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
