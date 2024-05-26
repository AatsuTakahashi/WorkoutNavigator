import React from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import ButtonAtoms from '../../atoms/button/ButtonAtoms';
import { BUTTON_TEXT_MESSAGE } from '../../../constants/Message';
import { WorkOutStyles } from './ManagementWorkOut.module';
import { useAppNavigation } from '../../../navigation/Navigation';
import useFetchCollection from '../../../hooks/useFetchCollection';
import { formatDate } from '../../../utils/dataFormatter';

const ManagementWorkOut: React.FC = () => {
  const { navigateToWorkOutRecord } = useAppNavigation();
  const { data: workouts, loading, error } = useFetchCollection('workouts');

  return (
    <View>
      <ButtonAtoms
        buttonText={BUTTON_TEXT_MESSAGE.RECORD_WORK_OUT}
        onPress={() => navigateToWorkOutRecord()}
        buttonStyle={WorkOutStyles.buttonStyles}
        textStyle={WorkOutStyles.buttonText}
      />
      <ScrollView>
        {loading ? (
          <ActivityIndicator size={'large'} color='#0000ff' />
        ) : error ? (
          <Text>{error}</Text>
        ) : (
          workouts.map((workout) => (
            <View key={workout.id}>
              <Text>{workout.date ? formatDate(workout.date) : 'No Date'}</Text>
              <Text>{workout.title}</Text>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
};

export default ManagementWorkOut;
