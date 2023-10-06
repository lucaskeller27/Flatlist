import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [nameList, setNameList] = useState([]);

  useEffect(() => {
    console.log('Nomes atualizados:', nameList);
  }, [nameList]);

  function handleAddName() {
    setNameList([...nameList, name]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Nomes</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite um nome"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Button title="Adicionar Nome" onPress={handleAddName} />
      <FlatList
        data={nameList}
        keyExtractor={(index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.nameItem}>{item}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
  nameItem: {
    fontSize: 18,
    marginBottom: 8,
  },
});
