import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Pressable, Text, ScrollView } from 'react-native'; 
import { AntDesign, Entypo } from '@expo/vector-icons';
import { colors } from '../Global/colors';

const Search = ({ onSearch }) => {
const [input, setInput] = useState('');
const [error, setError] = useState('');

const search = () => {
const expression = /\d/;
if (expression.test(input)) {
    setError('Only search letters');
} else {
    setError('');
    onSearch(input);
}
};

const removeInput = () => {
setInput('');
setError('');
};

return (
<ScrollView contentContainerStyle={styles.container}>
    <View style={styles.inputContainer}>
    <TextInput
        style={styles.input}
        value={input}
        onChangeText={setInput}
        placeholder="Buscar producto..."
    />
    <Pressable style={styles.searchButton} onPress={search}>
        <AntDesign name="search1" size={24} color={colors.primaryColor} />
    </Pressable>
    <Pressable style={styles.removeButton} onPress={removeInput}>
        <Entypo name="circle-with-cross" size={25} color="black" />
    </Pressable>
    </View>
    {error ? <Text style={styles.errorText}>{error}</Text> : null}
</ScrollView>
);
};

const styles = StyleSheet.create({
container: {
padding: 10,
paddingTop: 20,
flexGrow: 1, // Ajuste importante para que ScrollView funcione correctamente
},
inputContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
width: '100%',
marginBottom: 10,
},
input: {
color: 'white',
backgroundColor: colors.green3,
borderRadius: 8,
padding: 10,
borderWidth: 1,
borderColor: colors.lightGray,
width: '70%',
fontSize: 20,
},
searchButton: {
padding: 10,
},
removeButton: {
padding: 10,
},
errorText: {
color: 'red',
},
});

export default Search;
