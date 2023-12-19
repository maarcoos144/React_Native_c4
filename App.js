import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Header from './Components/Header';
import Home from './Screens/Home';
import ItemListCategories from './Screens/ItemListCategories';

const App = () => {
  const [categorySelected, setCategorySelected] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header title="Your App Title" />
      {
        categorySelected ?
          <ItemListCategories
            category={categorySelected}
            setCategorySelected={setCategorySelected}
          />
          :
          <Home setCategorySelected={setCategorySelected} />
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
