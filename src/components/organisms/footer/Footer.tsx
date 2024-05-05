import React from 'react';
import { View } from 'react-native';
import { footerStyles } from './Footer.module';
import { ActivityItem } from '../../molecules/footer/ActivityItem';
import { HomeItem } from '../../molecules/footer/HomeItem';
import { WorkOutItem } from '../../molecules/footer/WorkOutItem';

export const Footer = () => {
  return (
    <View style={footerStyles.footer}>
      <View style={footerStyles.footerItem}>
        <WorkOutItem />
        <HomeItem />
        <ActivityItem />
      </View>
    </View>
  );
};
