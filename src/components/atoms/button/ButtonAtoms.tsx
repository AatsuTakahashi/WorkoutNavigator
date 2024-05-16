import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  ViewStyle,
  TextStyle,
} from 'react-native';

interface ButtonAtomsProps {
  buttonText: string;
  onPress: () => void;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const ButtonAtoms: React.FC<ButtonAtomsProps> = ({
  buttonText,
  onPress,
  buttonStyle,
  textStyle,
}) => {
  return (
    <SafeAreaView>
      <View>
        <Pressable onPress={onPress} style={buttonStyle}>
          <Text style={textStyle}>{buttonText}</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default ButtonAtoms;
