import React from 'react';
import { Text, TextStyle, View } from 'react-native';
import { WelcomeMessageStyle } from './WelcomeMessage.module';

interface WelcomeMessageProps {
  message: string;
  TextStyle?: TextStyle;
}

const WelcomeMessage: React.FC<WelcomeMessageProps> = ({
  message,
  TextStyle,
}) => {
  return (
    <View style={WelcomeMessageStyle.container}>
      <Text style={TextStyle}>{message}</Text>
    </View>
  );
};

export default WelcomeMessage;
