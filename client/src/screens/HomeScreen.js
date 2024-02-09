import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {colors} from '../constants/theme';
import MainHeader from '../components/shared/MainHeader';
import ScreenHeader from '../components/shared/ScreenHeader';
import Drawer from '../components/shared/Drawer';
import TopFavCarousel from '../components/Home/TopFavCarousel';
import {CAMERAS, PLACES, TOP_AREAS} from '../data';
import SectionHeader from '../components/shared/SectionHeader';
import CamerasList from '../components/Home/CamerasList';

const HomeScreen = () => {
  const drawer = React.useRef(null);
  return (
    <View style={styles.container}>
      <MainHeader title="Home Security App" drawer={drawer}/>
      <ScreenHeader mainTitle="Monitor Your" secondTitle="Home CCTV" />
       <ScrollView showsVerticalScrollIndicator={false}> 
        <TopFavCarousel list={TOP_AREAS} />
        <SectionHeader
          title="All Cameras"
          buttonTitle="See All"
          onPress={() => {}}
        />
        <CamerasList list={CAMERAS} />
      </ScrollView> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color:'light',
    backgroundColor: colors.light,
  },
});

export default HomeScreen;
