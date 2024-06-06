import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

export const fetchUpdateData = async (workoutId: string) => {
  try {
    const docRef = doc(db, 'workouts', workoutId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const updatedWorkout = docSnap.data();
      return {
        title: updatedWorkout.title,
        content: updatedWorkout.content,
        others: updatedWorkout.others,
        date: updatedWorkout.date.toDate(),
      };
    } else {
      console.log('No such document!');
      return null;
    }
  } catch (error) {
    console.error('Error fetching updated data:', error);
    throw error;
  }
};
