import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Header from '../Components/Header';
import ProductItem from '../Components/ProductItem';
import allProducts from '../Data/products.json';
import Search from '../Components/Search';

const ItemListCategories = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    if (category) {
      const filteredProducts = allProducts.filter(product => product.category === category && product.title.includes(keyword));
      setProducts(filteredProducts);
    } else {
      const filteredProducts = allProducts.filter(product => product.title.includes(keyword));
      setProducts(filteredProducts);
    }
    console.log(products); 
  }, [category, keyword]);
  

  return (
    <View>
      <Header title={category || "Products"} />
      <Search onSearch={setKeyword} />
      <View style={styles.container}>
        <FlatList
          data={products}
          renderItem={({ item }) => <ProductItem item={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});

export default ItemListCategories;
