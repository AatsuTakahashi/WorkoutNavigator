import React from 'react';
import { View } from 'react-native';
import ButtonAtoms from '../../atoms/button/ButtonAtoms';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../RootStackParamList/RootStackParamList';
import { BUTTON_TEXT_MESSAGE } from '../../../constants/Message';
import { WorkOutStyles } from './ManagementWorkOut.module';

const ManagementWorkOut = () => {
  const navigation =
    useNavigation<NavigationProp<RootStackParamList, 'WorkOutRecord'>>();

  const navigateToWorkOutRecord = () => {
    navigation.navigate('WorkOutRecord');
  };
  return (
    <View>
      <ButtonAtoms
        buttonText={BUTTON_TEXT_MESSAGE.RECORD_WORK_OUT}
        onPress={() => navigateToWorkOutRecord()}
        buttonStyle={WorkOutStyles.buttonStyles}
        textStyle={WorkOutStyles.buttonText}
      />
    </View>
  );
};

export default ManagementWorkOut;
