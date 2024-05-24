import { StyleSheet } from 'react-native';
import { COLOR_CODE } from '../../../constants/ColorCode';

export const GoBackStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    margin: 5,
    color: COLOR_CODE.JET_BLACK,
    width: 100,
  },
  text: {
    fontSize: 20,
  },
});
