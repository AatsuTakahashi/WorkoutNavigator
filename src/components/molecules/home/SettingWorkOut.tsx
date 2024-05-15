import React from 'react';
import { Text, View } from 'react-native';
import HomeContentMessage from '../../atoms/message/HomeContentMessage';
import { SETTING_MESSAGE } from '../../../constants/Message';
import { HomeContentStyle } from './HomeContent.module';

const SettingWorkOut = () => {
  return (
    <View style={HomeContentStyle.content}>
      <Text style={HomeContentStyle.TitleText}>
        <HomeContentMessage message={SETTING_MESSAGE.TITLE} />
      </Text>
      <Text style={HomeContentStyle.ExplanationText}>
        <HomeContentMessage message={SETTING_MESSAGE.EXPLANATION} />
      </Text>
    </View>
  );
};

export default SettingWorkOut;
