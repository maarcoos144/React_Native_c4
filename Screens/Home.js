import React from 'react';
import { View, SafeAreaView } from 'react-native';
import Header from '../Components/Header';
import Categories from '../Components/Categories';

const Home = ({ navigation }) => {
  const setCategorySelected = (category) => {
    navigation.navigate('ItemListCategories', { category });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 1 }}>
        <Header title='Categories' />
        <Categories setCategorySelected={setCategorySelected} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
