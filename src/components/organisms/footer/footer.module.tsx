import { StyleSheet } from 'react-native';

export const footerStyles = StyleSheet.create({
  footer: {
    height: 110,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F5F5F5',
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
