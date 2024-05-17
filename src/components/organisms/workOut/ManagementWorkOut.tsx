import React from 'react';
import { View } from 'react-native';
import ButtonAtoms from '../../atoms/button/ButtonAtoms';
import { BUTTON_TEXT_MESSAGE } from '../../../constants/Message';
import { WorkOutStyles } from './ManagementWorkOut.module';
import { useAppNavigation } from '../../../navigation/Navigation';

const ManagementWorkOut: React.FC = () => {
  const { navigateToWorkOutRecord } = useAppNavigation();

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
