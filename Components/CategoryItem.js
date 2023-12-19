import { Pressable, StyleSheet, Text } from 'react-native';
import React from 'react';
import Card from '../Components/Card';

const CategoryItem = ({ category, setCategorySelected }) => {
  return (
    <Pressable
      onPress={() => setCategorySelected(category)}
    >
      <Card style={styles.cardContainer}>
        <Text style={styles.text}>{category}</Text>
      </Card>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 30,
    marginVertical: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  text: {
    fontSize: 20,
  },
});

export default CategoryItem;
