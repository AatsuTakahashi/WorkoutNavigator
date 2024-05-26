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
  formDataContainer: {
    // borderWidth: 1,
    top: 30,
    padding: 10,
    margin: 10,
    flexDirection: 'row',
  },
  test1: {
    borderWidth: 1,
    padding: 5,
    margin: 10,
    height: 150,
    width: 110,
  },
  test2: {
    borderWidth: 1,
    padding: 5,
    margin: 10,
    height: 150,
    width: 110,
  },
});
