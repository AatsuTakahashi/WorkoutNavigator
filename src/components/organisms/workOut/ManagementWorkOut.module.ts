import { StyleSheet } from 'react-native';
import { COLOR_CODE } from '../../../constants/ColorCode';

export const WorkOutStyles = StyleSheet.create({
  buttonStyles: {
    margin: 20,
    padding: 10,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: COLOR_CODE.WHITE,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: COLOR_CODE.WHITE,
    fontSize: 20,
  },
  formDataContainer: {
    top: 30,
    padding: 10,
    margin: 10,
    flexDirection: 'row',
  },
  content: {
    borderRadius: 20,
    padding: 5,
    margin: 10,
    height: 200,
    width: 150,
    backgroundColor: COLOR_CODE.ASH_GREY,
  },
  TitleText: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingLeft: 5,
    paddingTop: 5,
    color: COLOR_CODE.WHITE,
  },
  contentText: {
    fontSize: 25,
    fontWeight: '400',
    position: 'absolute',
    bottom: 15,
    paddingBottom: 15,
    paddingLeft: 5,
    color: COLOR_CODE.WHITE,
  },
  detailText: {
    fontSize: 12,
    paddingRight: 5,
    paddingBottom: 5,
    position: 'absolute',
    bottom: 0,
    right: 5,
    color: COLOR_CODE.WHITE,
  },
});
