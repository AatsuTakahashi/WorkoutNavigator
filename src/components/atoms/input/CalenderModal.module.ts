import { StyleSheet } from 'react-native';
import { COLOR_CODE } from '../../../constants/ColorCode';

export const ModalStyles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#FFF',
  },
  titleText: {
    color: COLOR_CODE.JET_BLACK,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  confirmButtonContainer: {
    alignItems: 'center',
  },
  confirmButton: {
    margin: 20,
    width: 200,
    backgroundColor: COLOR_CODE.WHITE,
    borderWidth: 1,
    borderColor: COLOR_CODE.JET_BLACK,
    borderRadius: 10,
  },
  confirmButtonText: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
    color: COLOR_CODE.JET_BLACK,
  },
});
