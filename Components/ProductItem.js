import React from 'react';
import { Image, StyleSheet, Text, Pressable/*, useWindowDimensions*/, Dimensions} from 'react-native';

const ProductItem = ({ item }) => {
    console.log(item);
    const windowWidth = Dimensions.get('window').width;
    const containerWidth = (windowWidth - 30) / 2;

   // const {height, width} = useWindowDimensions();

return (
<Pressable style={[styles.card, { width: containerWidth }]}>
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
backgroundColor: 'white',
marginBottom: 10,
borderWidth: 1,
borderColor: 'black',
},
text: {
fontSize: 18,
/*width: '70%', *///
fontWeight: 'bold',
marginBottom: 5,
},
image: {
/*minHeight: 90, //
minWidth: 90,*/ //
width: '100%',
height: 200,
},
});

export default ProductItem;
