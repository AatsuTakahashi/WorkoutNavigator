import { StyleSheet } from 'react-native';
import { COLOR_CODE } from '../../../constants/ColorCode';

export const WelcomeMessageStyle = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
  },
  messageText_white: {
    fontSize: 50,
    fontWeight: 'bold',
    color: COLOR_CODE.WHITE,
  },
  messageText_black: {
    fontSize: 50,
    fontWeight: 'bold',
    color: COLOR_CODE.JET_BLACK,
  },
});
