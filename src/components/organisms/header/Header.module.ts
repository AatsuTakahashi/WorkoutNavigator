import { StyleSheet } from 'react-native';
import { COLOR_CODE } from '../../../constants/ColorCode';

export const headerStyles = StyleSheet.create({
  header: {
    height: 120,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR_CODE.WHITE,
    borderBottomWidth: 1,
    borderColor: COLOR_CODE.WHITE_SMOKE,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    top: 20,
  },
  userIcon: {
    width: 50,
    height: 50,
    borderRadius: 50,
    right: 70,
    marginLeft: 5,
  },
  menuIcon: {
    left: 140,
    top: 5,
    marginRight: 5,
  },
});
