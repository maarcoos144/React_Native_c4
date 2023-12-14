import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import Card from "./Card";

const CategoryItem = ({ category }) => {
    return (
        <Pressable 
            onPress={() => console.log("Category pressed: " + category)}
        >
            <Card style={StyleSheet.cardContainer}>
                <Text style={styles.text}>{category}</Text>
            </Card>
        </Pressable>
    );
};

export default CategoryItem;

const styles = StyleSheet.create({
    cardContainer: {
        marginHorinzontal: 30,
        marginVertical: 10,
        padding: 10,
        justinContent: "center",
        alignItems: "flex-start",
    },
    text: {
        fontSize: 20,
    },
});