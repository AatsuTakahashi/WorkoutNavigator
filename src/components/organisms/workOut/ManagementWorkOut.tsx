import React from 'react';
import { View } from 'react-native';
import ButtonAtoms from '../../atoms/button/ButtonAtoms';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../RootStackParamList/RootStackParamList';
import { BUTTON_TEXT_MESSAGE } from '../../../constants/Message';

const ManagementWorkOut = () => {
  const navigation =
    useNavigation<NavigationProp<RootStackParamList, 'WorkOutRecord'>>();

  const navigateToWorkOutRecord = () => {
    navigation.navigate('WorkOutRecord');
  };
  return (
    <View>
      <ButtonAtoms
        color='#949593'
        buttonText={BUTTON_TEXT_MESSAGE.RECORD_WORK_OUT}
        onPress={() => navigateToWorkOutRecord()}
      />
    </View>
  );
};

export default ManagementWorkOut;
