import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View, SafeAreaView } from 'react-native';
import Header from '../Components/Header';
import ProductItem from '../Components/ProductItem';
import allProducts from '../Data/products.json';
import Search from '../Components/Search';

const ItemListCategories = ({ route }) => {
  const { category } = route.params;
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [numColumns, setNumColumns] = useState(2);

  useEffect(() => {
    if (category) {
      const filteredProducts = allProducts.filter(product => product.category === category && product.title.includes(keyword));
      setProducts(filteredProducts);
    } else {
      const filteredProducts = allProducts.filter(product => product.title.includes(keyword));
      setProducts(filteredProducts);
    }
  }, [category, keyword]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header title={category || 'Products'} />
        <Search onSearch={setKeyword} />
        <FlatList
          key={numColumns}
          data={products}
          renderItem={({ item }) => <ProductItem item={item} />}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.flatListContainer}
          numColumns={numColumns}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
  },
  flatListContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    padding: 10,
  },
});

export default ItemListCategories;
