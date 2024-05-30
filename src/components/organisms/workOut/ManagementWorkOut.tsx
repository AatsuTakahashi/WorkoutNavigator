import React from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import ButtonAtoms from '../../atoms/button/ButtonAtoms';
import { BUTTON_TEXT_MESSAGE } from '../../../constants/Message';
import { WorkOutStyles } from './ManagementWorkOut.module';
import { useAppNavigation } from '../../../navigation/Navigation';
import useFetchCollection from '../../../hooks/useFetchCollection';
import { formatDate } from '../../../utils/dataFormatter';
import { COLOR_CODE } from '../../../constants/ColorCode';
import { LinearGradient } from 'expo-linear-gradient';

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
      <ScrollView
        showsVerticalScrollIndicator={false}
        horizontal={true}
        style={WorkOutStyles.formDataContainer}
      >
        {loading ? (
          <ActivityIndicator size={'large'} color={COLOR_CODE.SILVERY_WHITE} />
        ) : error ? (
          <Text>{error}</Text>
        ) : (
          workouts.map((workout) => (
            <LinearGradient
              colors={[COLOR_CODE.WHITE_SMOKE, COLOR_CODE.DARK_BLACK]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              key={workout.id}
              style={WorkOutStyles.content}
            >
              <Text style={WorkOutStyles.TitleText}>
                {workout.date ? formatDate(workout.date) : ''}
              </Text>
              <Text style={WorkOutStyles.contentText}>{workout.title}</Text>
              <Text style={WorkOutStyles.detailText}>詳細を見る</Text>
            </LinearGradient>
          ))
        )}
      </ScrollView>
    </View>
  );
};

export default ManagementWorkOut;
