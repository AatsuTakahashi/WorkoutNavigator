import { StyleSheet } from 'react-native';
import { COLOR_CODE } from '../../../constants/ColorCode';

export const footerStyles = StyleSheet.create({
  footer: {
    height: 110,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    backgroundColor: COLOR_CODE.WHITE,
    borderTopWidth: 1,
    borderTopColor: COLOR_CODE.WHITE_SMOKE,
  },
  footerItem: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: 5,
  },
  workOutItem: {
    paddingRight: 60,
  },
  HomeItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  ActivityItem: {
    paddingLeft: 60,
  },
});
