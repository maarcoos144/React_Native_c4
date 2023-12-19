import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import categories from '../Data/categories.json';
import CategoryItem from '../Components/CategoryItem';

const Categories = ({ setCategorySelected }) => {
  return (
    <View style={styles.container}>
      <FlatList
        styles={styles.container}
        renderItem={({ item }) => <CategoryItem category={item} setCategorySelected={setCategorySelected} />}
        data={categories}
        keyExtractor={category => category}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  }
})

export default Categories;
