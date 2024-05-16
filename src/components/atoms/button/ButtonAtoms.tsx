import React from 'react';
import { View, Button, Text, SafeAreaView } from 'react-native';

interface ButtonAtomsProps {
  color: string;
  buttonText: string;
  onPress: () => void;
}

const ButtonAtoms: React.FC<ButtonAtomsProps> = ({
  color,
  buttonText,
  onPress,
}) => {
  return (
    <SafeAreaView>
      <View>
        <Button color={color} title={buttonText} onPress={onPress} />
      </View>
    </SafeAreaView>
  );
};

export default ButtonAtoms;
