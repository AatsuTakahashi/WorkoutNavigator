import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './WelcomeMessage.module';

interface WelcomeMessageProps {
  message: string;
}

const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.messageText}>{message}</Text>
    </View>
  );
};

export default WelcomeMessage;
