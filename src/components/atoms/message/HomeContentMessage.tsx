import React from 'react';
import { Text, View } from 'react-native';
import { ContentMessageStyle } from './HomeContentMessage.module';

interface HomeContentMessageProps {
  message: string;
}

const HomeContentMessage: React.FC<HomeContentMessageProps> = ({ message }) => {
  return (
    <View>
      <Text>{message}</Text>
    </View>
  );
};

export default HomeContentMessage;
