import { Dispatch, SetStateAction } from 'react';

export const handleEditToggle = (
  isEditing: boolean,
  setIsEditing: Dispatch<SetStateAction<boolean>>
) => {
  setIsEditing(!isEditing);
};
