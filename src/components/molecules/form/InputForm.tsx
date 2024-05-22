import { Formik, FormikProps } from 'formik';
import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import * as Yup from 'yup';
import ButtonAtoms from '../../atoms/button/ButtonAtoms';

const InputForm: React.FC = () => {
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
    title: Yup.string().required('タイトルは必須です。'),
    content: Yup.string().required('内容は必須です。'),
    others: Yup.string(),
  });

  return (
    <Formik
      initialValues={{ title: '', content: '', others: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log('フォームの値:', { ...values, date: selectedDate });
      }}
    >
      {(
        props: FormikProps<{ title: string; content: string; others: string }>
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
            <ButtonAtoms
              buttonText={
                selectedDate ? selectedDate.toDateString() : '日付を選択'
              }
              onPress={showDatePicker}
            />

            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode='date'
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
            <TextInput
              placeholder='タイトル'
              onChangeText={handleChange('title')}
              onBlur={handleBlur('title')}
              value={values.title}
            />
            {touched.title && errors.title && <Text>{errors.title}</Text>}
            <TextInput
              placeholder='内容'
              onChangeText={handleChange('content')}
              onBlur={handleBlur('content')}
              value={values.content}
            />
            {touched.content && errors.content && <Text>{errors.content}</Text>}
            <TextInput
              placeholder='その他'
              onChangeText={handleChange('others')}
              onBlur={handleBlur('others')}
              value={values.others}
            />
            <ButtonAtoms buttonText='送信' onPress={handleSubmit} />
          </View>
        );
      }}
    </Formik>
  );
};

export default InputForm;
