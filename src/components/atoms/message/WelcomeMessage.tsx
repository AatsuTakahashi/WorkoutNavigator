import React from 'react';
import { Text, View } from 'react-native';
import { WelcomeMessageStyle } from './WelcomeMessage.module';

interface WelcomeMessageProps {
  message: string;
}

const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ message }) => {
  return (
    <View style={WelcomeMessageStyle.container}>
      <Text style={WelcomeMessageStyle.messageText}>{message}</Text>
    </View>
  );
};

export default WelcomeMessage;
