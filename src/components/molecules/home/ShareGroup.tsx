import React from 'react';
import { Text, View } from 'react-native';
import HomeContentMessage from '../../atoms/message/HomeContentMessage';
import { SHARE_GROUP_MESSAGE } from '../../../constants/Message';
import { HomeContentStyle } from './HomeContent.module';

const ShareGroup = () => {
  return (
    <View style={HomeContentStyle.content}>
      <Text style={HomeContentStyle.TitleText}>
        <HomeContentMessage message={SHARE_GROUP_MESSAGE.TITLE} />
      </Text>
      <Text style={HomeContentStyle.ExplanationText}>
        <HomeContentMessage message={SHARE_GROUP_MESSAGE.EXPLANATION} />
      </Text>
    </View>
  );
};

export default ShareGroup;
