import React from 'react';
import { Text, View } from 'react-native';
import { FOOTER_TEXT } from '../../../constants/FooterText';
import { footerTextStyles } from './FooterItem.module';

export const WorkOutText = () => {
  return (
    <View style={footerTextStyles.container}>
      <Text style={footerTextStyles.footerText}>{FOOTER_TEXT.WORKOUT}</Text>
    </View>
  );
};

export const HomeText = () => {
  return (
    <View style={footerTextStyles.container}>
      <Text style={footerTextStyles.footerText}>{FOOTER_TEXT.HOME}</Text>
    </View>
  );
};

export const ActivityText = () => {
  return (
    <View style={footerTextStyles.container}>
      <Text style={footerTextStyles.footerText}>{FOOTER_TEXT.ACTIVITY}</Text>
    </View>
  );
};
