import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  ViewStyle,
  TextStyle,
  StyleProp,
} from 'react-native';

interface ButtonAtomsProps {
  buttonText: string;
  onPress: () => void;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
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
