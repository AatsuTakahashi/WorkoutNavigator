import { StyleSheet } from 'react-native';
import { COLOR_CODE } from '../../../constants/ColorCode';

export const WorkOutStyles = StyleSheet.create({
  buttonStyles: {
    margin: 20,
    padding: 10,
    borderWidth: 1,
    borderRadius: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: COLOR_CODE.JET_BLACK,
    fontSize: 20,
  },
});