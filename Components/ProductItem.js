import React from 'react';
import { colors } from "../Global/colors";
import {
    Image,
    StyleSheet,
    Text,
    Pressable,
} from "react-native";

const ProductItem = ({ item, setProductDetailId}) => {
    return (
        <Pressable
            style={styles.card}
        >
            <Text style={styles.text}>
                {item.title}
            </Text>
            <Image
                style={styles.image}
                resizeMode="cover"
                source={{ uri: item.images[0]}}
            />
        </Pressable>
    );
};

export default ProductItem;