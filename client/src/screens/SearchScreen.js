import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from '../constants/theme';
import MainHeader from '../components/shared/MainHeader';
import SearchInput from '../components/Search/SearchInput';
import Tabs from '../components/shared/Tabs';
import SearchMasonry from '../components/Search/SearchMasonry';
import {SEARCH_ALL, SEARCH_CCTVS, SEARCH_HOTELS, SEARCH_PLACES, SEARCH_TODAY} from '../data';

const tabs = [
  {
    title: 'All',
    content: () => <SearchMasonry key="all" list={SEARCH_ALL} />,
  },
  {
    title: 'Today',
    content: () => <SearchMasonry key="today" list={SEARCH_TODAY} />,
  },
  {
    title: 'Earlier',
    content: () => <SearchMasonry key="earlier" list={SEARCH_CCTVS} />,
  },
];

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <MainHeader title="Search" />
      <SearchInput />
      <Tabs items={tabs} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
});

export default SearchScreen;
