import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {colors} from '../constants/theme';
import MainHeader from '../components/shared/MainHeader';
import ScreenHeader from '../components/shared/ScreenHeader';
import Drawer from '../components/shared/Drawer';
import TopPlacesCarousel from '../components/Home/TopPlacesCarousel';
import {CAMERAS, PLACES, TOP_AREAS} from '../data';
import SectionHeader from '../components/shared/SectionHeader';
import TripsList from '../components/Home/TripsList';

const HomeScreen = () => {
  const drawer = React.useRef(null);
  return (
    <View style={styles.container}>
      <MainHeader title="Home Security App" drawer={drawer}/>
      <ScreenHeader mainTitle="Monitor Your" secondTitle="Home CCTV" />
       <ScrollView showsVerticalScrollIndicator={false}> 
        <TopPlacesCarousel list={TOP_AREAS} />
        <SectionHeader
          title="All Cameras"
          buttonTitle="See All"
          onPress={() => {}}
        />
        <TripsList list={CAMERAS} />
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
