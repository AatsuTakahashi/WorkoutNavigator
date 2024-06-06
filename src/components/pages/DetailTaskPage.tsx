import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { TaskProps } from '../../types/WorkOut';
import MainTemplate from '../templates/MainTemplate';
import { TaskTemplateStyles } from '../templates/Template.module';
import GoBack from '../molecules/transition/GoBack';
import Task from '../molecules/workOut/Task';
import { TaskStyle } from '../molecules/workOut/Task.module';
import { handleEditToggle } from '../../utils/handleEditToggle';
import { handleSave } from '../../utils/handleSave';
import { fetchUpdateData } from '../../utils/fetchUpdateData';
import ButtonAtoms from '../atoms/button/ButtonAtoms';

const DetailTaskPage: React.FC<TaskProps> = ({ route, navigation }) => {
  const { workout } = route.params;
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(workout.title);
  const [content, setContent] = useState(workout.content);
  const [others, setOthers] = useState(workout.others);
  const [date, setDate] = useState<Date | null>(
    workout.date ? new Date(workout.date) : new Date()
  );

  useEffect(() => {
    setTitle(workout.title);
    setContent(workout.content);
    setOthers(workout.others);
    setDate(workout.date ? new Date(workout.date) : new Date());
  }, [workout]);

  useEffect(() => {
    if (isEditing) {
      fetchUpdateData(workout.id).then((data) => {
        if (data) {
          setTitle(data.title);
          setContent(data.content);
          setOthers(data.others);
          setDate(data.date);
        }
      });
    }
  }, [isEditing]);

  const isSaveDisabled =
    title === '' || content === '' || date === null || others === '';

  return (
    <MainTemplate templateStyle={TaskTemplateStyles.container}>
      <View style={TaskStyle.functionalContainer}>
        <GoBack />
        {isEditing ? (
          <>
            <ButtonAtoms
              onPress={() =>
                handleSave(
                  workout.id,
                  title,
                  content,
                  others,
                  date || new Date(),
                  setTitle,
                  setContent,
                  setOthers,
                  setDate,
                  setIsEditing
                )
              }
              buttonText='保存'
            />
            <ButtonAtoms
              onPress={() => handleEditToggle(isEditing, setIsEditing)}
              buttonText='キャンセル'
            />
          </>
        ) : (
          <ButtonAtoms
            onPress={() => handleEditToggle(isEditing, setIsEditing)}
            buttonText='編集'
          />
        )}
      </View>
      <View>
        <Task
          route={route}
          isEditing={isEditing}
          title={title}
          setTitle={setTitle}
          content={content}
          setContent={setContent}
          others={others}
          setOthers={setOthers}
          date={date}
          setDate={setDate}
          navigation={navigation}
        />
      </View>
    </MainTemplate>
  );
};

export default DetailTaskPage;
