import React from 'react';
import { SafeAreaView, View, TextInput } from 'react-native';
import { Styles } from './TextInputAtoms.module';
import { PLACEHOLDER_MESSAGE } from '../../../constants/Message';
import { COLOR_CODE } from '../../../constants/ColorCode';

const TextInputAtoms = () => {
  return (
    <SafeAreaView>
      <View>
        <TextInput
          style={Styles.input}
          placeholder={PLACEHOLDER_MESSAGE.INITIAL_VALUE}
          placeholderTextColor={COLOR_CODE.SILVERY_WHITE}
        />
      </View>
    </SafeAreaView>
  );
};

export default TextInputAtoms;
