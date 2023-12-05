import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Modal, ScrollView, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';

const App = () => {
  const [textItem, setTextItem] = useState('');
  const [itemList, setItemList] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const onHandlerChangeItem = (t) => setTextItem(t);

  const add = () => {
    setItemList(currentItems => [
      ...currentItems,
      { id: Math.random().toString(), value: textItem, completed: false }
    ]);
    setTextItem('');
  }

  const deleteItem = (itemId) => {
    setModalVisible(true);
    setItemSelected(itemList.find(item => item.id === itemId));
  }

  const confirmDelete = () => {
    setModalVisible(false);
    setItemList(currentItems => currentItems.filter(item => item.id !== itemSelected.id));
  }

  const cancelDelete = () => {
    setModalVisible(false);
    setItemSelected({});
  }

  const toggleCompleted = (itemId) => {
    setItemList(currentItems =>
      currentItems.map(item =>
        item.id === itemId ? { ...item, completed: !item.completed } : item
      )
    );
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Indique el producto a ingresar"
          style={styles.input}
          onChangeText={onHandlerChangeItem}
          value={textItem}
        />
        <Button title="Agregar" onPress={add} />
      </View>
      <FlatList
        data={itemList}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => toggleCompleted(item.id)}>
            <View style={[styles.itemList, { backgroundColor: item.completed ? '#c0ffc0' : 'transparent' }]}>
              <Text style={styles.itemText}>{item.value}</Text>
              {item.completed && <Feather name="check-circle" size={24} color="green" />}
              <TouchableOpacity onPress={() => deleteItem(item.id)}>
                <Feather name="trash-2" size={24} color="red" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />

      <Modal
        animationType='slide'
        visible={modalVisible}>
        <View style={styles.modalTitle}>
          <Text>Mi Modal</Text>
        </View>
        <View style={styles.modalMessage}>
          <Text>¿Está seguro que desea borrar?</Text>
          <Text style={styles.modalItem}>{itemSelected.value}</Text>
        </View>
        <View style={styles.modalButtonContainer}>
          <View style={styles.modalButton}>
            <Button onPress={confirmDelete} title="Confirmar" />
          </View>
          <View style={styles.modalButton}>
            <Button onPress={cancelDelete} title="Cancelar" color="gray" />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 30,
    marginTop: 10,
    backgroundColor: '#42CDC7'
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: 200,
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },
  itemList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5
  },
  itemText: {
    fontSize: 18,
    marginRight: 10,
    flex: 1
  },
  modalTitle: {
    backgroundColor: '#ccc',
    color: 'white',
    fontSize: 18,
    padding: 10,
    marginBottom: 10,
    textAlign: 'center'
  },
  modalMessage: {
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#42CDC7'
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#09635F'
  },
  modalButton: {
    flex: 1,
    marginHorizontal: 5
  },
  modalItem: {
    fontSize: 30
  }
});

export default App;
