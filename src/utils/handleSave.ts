import { Timestamp, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { fetchUpdateData } from './fetchUpdateData';

export const handleSave = async (
  workoutId: string,
  title: string,
  content: string,
  others: string,
  date: Date,
  setTitle: (value: string) => void,
  setContent: (value: string) => void,
  setOthers: (value: string) => void,
  setDate: (value: Date) => void,
  setIsEditing: (value: boolean) => void
) => {
  const validDate =
    date instanceof Date && !isNaN(date.getTime()) ? date : new Date();
  const updateWorkout = {
    title,
    content,
    others,
    date: Timestamp.fromDate(validDate),
  };
  try {
    const taskDoc = doc(db, 'workouts', workoutId);
    await updateDoc(taskDoc, updateWorkout);
    const updateData = await fetchUpdateData(workoutId);
    if (updateData) {
      setTitle(updateData.title);
      setContent(updateData.content);
      setOthers(updateData.others);
      setDate(updateData.date);
    }
    setIsEditing(false);
  } catch (error) {
    console.error('Error updating data:', error);
  }
};
