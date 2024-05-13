import React from 'react';
import { Text, View } from 'react-native';
import SettingWorkOut from '../../molecules/home/SettingWorkOut';
import ShareGroup from '../../molecules/home/ShareGroup';

const HomeContent = () => {
  return (
    <View>
      <SettingWorkOut />
      <ShareGroup />
    </View>
  );
};

export default HomeContent;
