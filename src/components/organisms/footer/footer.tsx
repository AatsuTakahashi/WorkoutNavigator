import React from 'react';
import { View } from 'react-native';
import { footerStyles } from './footer.module';
import { ActivityItem } from '../../molecules/footer/activityItem';
import { HomeItem } from '../../molecules/footer/homeItem';
import { WorkOutItem } from '../../molecules/footer/workOutItem';

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
