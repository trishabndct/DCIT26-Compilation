import React, { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [input, setInput] = useState('');
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (!input.trim()) return;
    setItems([...items, input.trim()]);
    setInput('');
  };

  return (
    <View style={styles.screen}>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="Enter Item"
          value={input}
          onChangeText={setInput}
        />
        <Pressable style={styles.button} onPress={addItem}>
          <Text style={styles.buttonText}>ADD</Text>
        </Pressable>
      </View>

      <FlatList
        data={items}
        keyExtractor={(_, index) => String(index)}
        renderItem={({ item }) => <Text style={styles.card}>{item}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    paddingTop: 50,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#e75480',
    borderRadius: 10,
    padding: 8,
    marginRight: 8,
  },
  button: {
    backgroundColor: '#e75480',
    borderRadius: 10,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#ffd6e5',
    borderWidth: 1,
    borderColor: '#e75480',
    borderRadius: 10,
    padding: 10,
    marginTop: 5,
    color: 'black',
  },
});