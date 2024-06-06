import React, { useEffect } from 'react';
import { TaskComponentProps } from '../../../types/WorkOut';
import { formatFullDate } from '../../../utils/dataFormatter';
import { Text, TextInput, View } from 'react-native';
import { TaskStyle } from './Task.module';
import { FormStyles } from '../form/InputForm.module';
import { FORM_MESSAGE } from '../../../constants/Message';
import { COLOR_CODE } from '../../../constants/ColorCode';

const Task: React.FC<TaskComponentProps> = ({
  route,
  isEditing,
  title,
  setTitle,
  content,
  setContent,
  others,
  setOthers,
  date,
}) => {
  const { workout } = route.params;
  const formattedDate = workout.date ? formatFullDate(workout.date) : '';

  useEffect(() => {
    console.log({
      title,
      content,
      others,
      date,
    });
  }, [title, content, others, date]);

  return (
    <View style={TaskStyle.container}>
      {isEditing ? (
        <>
          <Text style={FormStyles.formText}>{FORM_MESSAGE.FORM_TITLE}</Text>
          <TextInput
            id='title'
            value={title}
            onChangeText={setTitle}
            placeholder={FORM_MESSAGE.EDIT_TITLE}
            placeholderTextColor={COLOR_CODE.SILVERY_WHITE}
            style={TaskStyle.textInput}
          />
          <Text style={FormStyles.formText}>{FORM_MESSAGE.FORM_CONTENT}</Text>
          <TextInput
            id='content'
            value={content}
            onChangeText={setContent}
            placeholder={FORM_MESSAGE.EDIT_CONTENT}
            placeholderTextColor={COLOR_CODE.SILVERY_WHITE}
            style={TaskStyle.textInput}
            multiline
          />
          <Text style={FormStyles.formText}>{FORM_MESSAGE.FORM_OTHERS}</Text>
          <TextInput
            id='others'
            value={others}
            onChangeText={setOthers}
            placeholder={FORM_MESSAGE.EDIT_OTHERS}
            placeholderTextColor={COLOR_CODE.SILVERY_WHITE}
            style={TaskStyle.textInput}
            multiline
          />
        </>
      ) : (
        <>
          <Text style={TaskStyle.titleText}>{title}</Text>
          <Text style={TaskStyle.dateText}>{formattedDate}</Text>
          <Text style={TaskStyle.contentText}>{content}</Text>
          <Text style={TaskStyle.othersText}> {others}</Text>
        </>
      )}
    </View>
  );
};

export default Task;
