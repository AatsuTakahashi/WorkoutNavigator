import React from 'react';
import { Text, View } from 'react-native';
import { footerStyles } from './footer.module';

export const Footer = () => {
  return (
    <View style={footerStyles.footer}>
      <Text>ここはfooterです。</Text>
    </View>
  );
};
