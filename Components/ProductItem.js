import React from 'react';
import { Image, StyleSheet, Text, Pressable } from 'react-native';

const ProductItem = ({ item }) => {
console.log(item);
  return (
    <Pressable style={styles.card}>
      <Text style={styles.text}>
        {item.title}
      </Text>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{ uri: item.images[0] }}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    backgroundColor: 'white', // Ajusta el color de fondo según tus necesidades
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  image: {
    width: '100%',
    height: 200,
  },
});

export default ProductItem;
