import React from 'react';
import { Text, View } from 'react-native';
import { FOOTER_TEXT } from '../../../constants/footerText';

export const WorkOutText = () => {
  return (
    <View>
      <Text>{FOOTER_TEXT.WORKOUT}</Text>
    </View>
  );
};

export const HomeText = () => {
  return (
    <View>
      <Text>{FOOTER_TEXT.HOME}</Text>
    </View>
  );
};

export const ActivityText = () => {
  return (
    <View>
      <Text>{FOOTER_TEXT.ACTIVITY}</Text>
    </View>
  );
};
