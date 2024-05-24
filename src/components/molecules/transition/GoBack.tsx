import React from 'react';
import { Pressable, SafeAreaView, Text, View } from 'react-native';
import { LeftArrowIcon } from '../../atoms/icon/LeftArrowIcon';
import HomeContentMessage from '../../atoms/message/HomeContentMessage';
import { GoBackStyles } from './GoBack.module';
import { BUTTON_TEXT_MESSAGE } from '../../../constants/Message';
import { useAppNavigation } from '../../../navigation/Navigation';

const GoBack: React.FC = () => {
  const { navigateToWorkOut } = useAppNavigation();

  return (
    <SafeAreaView>
      <Pressable
        style={GoBackStyles.container}
        onPress={() => navigateToWorkOut()}
      >
        <LeftArrowIcon size={30} />
        <Text style={GoBackStyles.text}>
          <HomeContentMessage message={BUTTON_TEXT_MESSAGE.GO_BACK} />
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default GoBack;
