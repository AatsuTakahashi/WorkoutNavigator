import { Formik, FormikProps } from 'formik';
import React, { useState } from 'react';
import {
  Keyboard,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import * as Yup from 'yup';
import ButtonAtoms from '../../atoms/button/ButtonAtoms';
import CalenderModal from '../../atoms/input/CalenderModal';
import { format } from 'date-fns';
import { FormStyles } from './InputForm.module';
import { FORM_MESSAGE } from '../../../constants/Message';
import { useFormData } from '../../../context/FormContext';
import { useAppNavigation } from '../../../navigation/Navigation';
import { db } from '../../../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

interface InputFormProps {
  onSubmit: (values: {
    title: string;
    content: string;
    others: string;
    date: Date | null;
  }) => void;
}

const InputForm: React.FC<InputFormProps> = ({ onSubmit }) => {
  const { setFormData } = useFormData();
  const { navigateToWorkOut } = useAppNavigation();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required(FORM_MESSAGE.VALIDATION_TITLE),
    content: Yup.string().required(FORM_MESSAGE.VALIDATION_CONTENT),
    others: Yup.string(),
  });

  const saveDataToFirestore = async (data: {
    title: string;
    content: string;
    others: string;
    date: Date | null;
  }) => {
    console.log('Inside saveDataToFirestore'); // デバッグ用ログ
    try {
      console.log('Attempting to save data to Firestore:', data); // デバッグ用ログ
      await addDoc(collection(db, 'workouts'), data);
      console.log('Data saved successfully');
    } catch (error) {
      console.error('Error saving data:', error);
      throw error; // エラーを再スロー
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <Formik
          initialValues={{ title: '', content: '', others: '' }}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            const formData = { ...values, date: selectedDate };
            await saveDataToFirestore(formData);
            navigateToWorkOut();
          }}
        >
          {/* <Formik
          initialValues={{ title: '', content: '', others: '' }}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            const formData = { ...values, date: selectedDate };
            console.log('Form submitted:', formData); // デバッグ用ログ
            try {
              await saveDataToFirestore(formData); // Firestoreにデータを保存
              console.log('Navigating to WorkOutPage');
              navigateToWorkOut(); // フォーム送信後にWorkOutPageに遷移
            } catch (error) {
              console.error('Error during submission:', error); // エラーをキャッチしてログに出力
            }
          }}
        > */}
          {(
            props: FormikProps<{
              title: string;
              content: string;
              others: string;
            }>
          ) => {
            const {
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            } = props;
            return (
              <View>
                <View style={FormStyles.container}>
                  <View>
                    <Text style={FormStyles.formText}>
                      {FORM_MESSAGE.DATE_PICKER_TEXT}
                    </Text>
                    <ButtonAtoms
                      buttonText={
                        selectedDate
                          ? format(selectedDate, FORM_MESSAGE.DATE_FORMAT)
                          : FORM_MESSAGE.DATE_PICKER_BUTTON_TEXT
                      }
                      onPress={showDatePicker}
                      textStyle={
                        selectedDate
                          ? FormStyles.datePickerButtonTextSelected
                          : FormStyles.datePickerButtonText
                      }
                      buttonStyle={FormStyles.datePickerButton}
                    />
                  </View>
                  <CalenderModal
                    visible={isDatePickerVisible}
                    onConfirm={handleConfirm}
                  />
                  <Text style={FormStyles.formText}>
                    {FORM_MESSAGE.FORM_TITLE}
                  </Text>
                  <TextInput
                    placeholder={FORM_MESSAGE.TEXT_INPUT}
                    onChangeText={handleChange('title')}
                    onBlur={handleBlur('title')}
                    value={values.title}
                    style={FormStyles.textInput_title}
                  />
                  {touched.title && errors.title && (
                    <Text style={FormStyles.errorText}>{errors.title}</Text>
                  )}
                  <Text style={FormStyles.formText}>
                    {FORM_MESSAGE.FORM_CONTENT}
                  </Text>
                  <TextInput
                    placeholder={FORM_MESSAGE.TEXT_INPUT}
                    onChangeText={handleChange('content')}
                    onBlur={handleBlur('content')}
                    value={values.content}
                    style={FormStyles.textInput_content}
                    multiline
                  />
                  {touched.content && errors.content && (
                    <Text style={FormStyles.errorText}>{errors.content}</Text>
                  )}
                  <Text style={FormStyles.formText}>
                    {FORM_MESSAGE.FORM_OTHERS}
                  </Text>
                  <TextInput
                    placeholder=''
                    onChangeText={handleChange('others')}
                    onBlur={handleBlur('others')}
                    value={values.others}
                    style={FormStyles.textInput_others}
                    multiline
                  />
                </View>
                <View style={FormStyles.confirmButtonContainer}>
                  <ButtonAtoms
                    buttonText={FORM_MESSAGE.SEND_BUTTON_TEXT}
                    onPress={() => {
                      console.log('Submit button pressed'); // デバッグ用ログ
                      handleSubmit();
                    }}
                    buttonStyle={FormStyles.confirmButton}
                    textStyle={FormStyles.confirmButtonText}
                  />
                </View>
              </View>
            );
          }}
        </Formik>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default InputForm;
