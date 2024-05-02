import React from 'react';
import { Text, View } from 'react-native';
import { footerStyles } from './footer.module';

export const Footer = () => {
  return (
    <View style={footerStyles.footer}>
      <Text>ワークアウト</Text>
      <Text>ホーム</Text>
      <Text>アクティビティ</Text>
    </View>
  );
};
