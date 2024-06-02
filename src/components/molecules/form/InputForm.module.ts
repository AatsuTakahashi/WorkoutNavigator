import { StyleSheet } from 'react-native';
import { COLOR_CODE } from '../../../constants/ColorCode';

export const FormStyles = StyleSheet.create({
  container: {
    backgroundColor: COLOR_CODE.WHITE,
    margin: 10,
    height: 500,
    padding: 10,
  },
  datePickerButton: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLOR_CODE.SILVERY_WHITE,
  },
  datePickerButtonText: {
    color: COLOR_CODE.SILVERY_WHITE,
  },
  datePickerButtonTextSelected: {
    color: COLOR_CODE.JET_BLACK,
  },
  formText: {
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: '500',
    fontSize: 15,
  },
  textInput_title: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLOR_CODE.SILVERY_WHITE,
    height: 40,
    padding: 10,
  },
  textInput_content: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLOR_CODE.SILVERY_WHITE,
    height: 100,
    textAlignVertical: 'top',
    padding: 10,
  },
  textInput_others: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLOR_CODE.SILVERY_WHITE,
    height: 160,
    textAlignVertical: 'top',
    padding: 10,
  },
  confirmButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmButton: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLOR_CODE.JET_BLACK,
    width: 200,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 20,
  },
  confirmButtonText: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    color: COLOR_CODE.JET_BLACK,
  },
  errorText: {
    color: COLOR_CODE.TRANSLUCENT_BRONZE_RED,
    paddingTop: 2,
  },
});
