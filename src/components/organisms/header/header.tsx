import React from 'react';
import { Text, View } from 'react-native';
import { headerStyles } from './header.module';

export const Header = () => {
  return (
    <View style={headerStyles.header}>
      <View>
        <Text>ここはヘッダーです。</Text>
      </View>
    </View>
  );
};
