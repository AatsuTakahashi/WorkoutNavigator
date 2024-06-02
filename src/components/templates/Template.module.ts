import { StyleSheet } from 'react-native';
import { COLOR_CODE } from '../../constants/ColorCode';

export const MainTemplateStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_CODE.WHITE,
  },
});

export const WorkOutTemplateStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_CODE.DARK_BLACK,
  },
});

export const TaskTemplateStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  },
});
