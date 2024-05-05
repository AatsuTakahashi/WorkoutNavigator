import { StyleSheet } from 'react-native';

export const headerStyles = StyleSheet.create({
  header: {
    height: 120,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderColor: '#F5F5F5',
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
  },
  menuIcon: {
    left: 140,
    top: 5,
  },
});
