import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import ButtonAtoms from '../../atoms/button/ButtonAtoms';
import { BUTTON_TEXT_MESSAGE } from '../../../constants/Message';
import { WorkOutStyles } from './ManagementWorkOut.module';
import { useAppNavigation } from '../../../navigation/Navigation';
import { useFormData } from '../../../context/FormContext';
import { format } from 'date-fns';

const ManagementWorkOut: React.FC = () => {
  const { formData } = useFormData();
  const { navigateToWorkOutRecord } = useAppNavigation();

  return (
    <View>
      <ButtonAtoms
        buttonText={BUTTON_TEXT_MESSAGE.RECORD_WORK_OUT}
        onPress={() => navigateToWorkOutRecord()}
        buttonStyle={WorkOutStyles.buttonStyles}
        textStyle={WorkOutStyles.buttonText}
      />
      {formData && (
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={WorkOutStyles.formDataContainer}
        >
          {/* <Text>{formData.date ? format(formData.date, 'M/d') : ''}</Text>
          <Text>{formData.title}</Text> */}
          {/* テスト */}
          <View style={WorkOutStyles.test1}>
            <Text>5/27</Text>
            <Text>テスト1</Text>
          </View>
          <View style={WorkOutStyles.test1}>
            <Text>5/27</Text>
            <Text>テスト2</Text>
          </View>
          <View style={WorkOutStyles.test1}>
            <Text>5/27</Text>
            <Text>テスト3</Text>
          </View>
          <View style={WorkOutStyles.test1}>
            <Text>5/27</Text>
            <Text>テスト4</Text>
          </View>
          <View style={WorkOutStyles.test1}>
            <Text>5/27</Text>
            <Text>テスト5</Text>
          </View>
          <View style={WorkOutStyles.test1}>
            <Text>5/27</Text>
            <Text>テスト6</Text>
          </View>
          <View style={WorkOutStyles.test1}>
            <Text>5/27</Text>
            <Text>テスト7</Text>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default ManagementWorkOut;
