import { StyleSheet } from 'react-native';
import { COLOR_CODE } from '../../../constants/ColorCode';

export const GoBackStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    color: COLOR_CODE.JET_BLACK,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: '800',
  },
});
