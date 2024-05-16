import { StyleSheet } from 'react-native';
import { COLOR_CODE } from '../../../constants/ColorCode';

export const HomeContentStyle = StyleSheet.create({
  content: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 15,
    height: 120,
    backgroundColor: COLOR_CODE.SILVERY_WHITE,
  },
  TitleText: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingTop: 5,
    color: COLOR_CODE.WHITE,
  },
  ExplanationText: {
    fontSize: 10,
    fontWeight: 'bold',
    padding: 10,
    color: COLOR_CODE.WHITE,
  },
});
