import {
  faChartLine,
  faHouse,
  faPersonWalking,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { View } from 'react-native';

export const WorkOutIcon = () => {
  return (
    <View>
      <FontAwesomeIcon icon={faPersonWalking} />{' '}
    </View>
  );
};

export const HomeIcon = () => {
  return (
    <View>
      <FontAwesomeIcon icon={faHouse} />
    </View>
  );
};

export const ActivityIcon = () => {
  return (
    <View>
      <FontAwesomeIcon icon={faChartLine} />
    </View>
  );
};
