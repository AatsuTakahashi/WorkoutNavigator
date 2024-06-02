import { StyleSheet } from 'react-native';
import { COLOR_CODE } from '../../../constants/ColorCode';

export const TaskStyle = StyleSheet.create({
  functionalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 40,
  },
  container: {
    backgroundColor: COLOR_CODE.WHITE_SMOKE,
    borderRadius: 10,
    marginTop: 50,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 20,
    padding: 10,
    height: 500,
  },
  titleText: {
    fontSize: 40,
    paddingTop: 20,
    paddingBottom: 20,
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 20,
    paddingTop: 5,
    paddingBottom: 5,
  },
  contentText: {
    fontSize: 15,
    paddingTop: 50,
    paddingBottom: 20,
  },
  othersText: {
    fontSize: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
});
