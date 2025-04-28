import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, FlatList, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


interface JournalEntry {
  id: string;
  content: string;
}


const JournalEntryScreen = () => {
  const [entryText, setEntryText] = useState('');
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const navigation = useNavigation();


  useEffect(() => {
    loadEntries();
  }, []);


  const loadEntries = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('journalEntries');
      if (jsonValue) {
        const parsedEntries = JSON.parse(jsonValue) as JournalEntry[];
        setEntries(parsedEntries);
      }
    } catch (e) {
      Alert.alert('Error', 'Failed to load entries.');
    }
  };


  const saveEntry = async (newEntry: JournalEntry) => {
    try {
      const updatedEntries = [...entries, newEntry];
      await AsyncStorage.setItem('journalEntries', JSON.stringify(updatedEntries));
      setEntries(updatedEntries);
    } catch (e) {
      Alert.alert('Error', 'Failed to save entry.');
    }
  };


  const deleteEntry = async (entryId: string) => {
    try {
      const updatedEntries = entries.filter(entry => entry.id !== entryId);
      await AsyncStorage.setItem('journalEntries', JSON.stringify(updatedEntries));
      setEntries(updatedEntries);
    } catch (e) {
      Alert.alert('Error', 'Failed to delete entry.');
    }
  };


  const handleSave = () => {
    if (entryText.trim() === '') {
      Alert.alert('Error', 'Please enter some text before saving.');
      return;
    }
    const newEntry: JournalEntry = { id: Date.now().toString(), content: entryText };
    saveEntry(newEntry);
    setEntryText('');
  };


  const renderItem = ({ item }: { item: JournalEntry }) => (
    <View style={styles.entryItem}>
      <Text>{item.content}</Text>
      <TouchableOpacity onPress={() => deleteEntry(item.id)}>
        <Text style={styles.deleteButton}>Delete</Text>
      </TouchableOpacity>
    </View>
  );


  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        multiline
        placeholder="Write your journal entry here..."
        value={entryText}
        onChangeText={setEntryText}
        textAlignVertical="top"
      />
      <Button title="Save" onPress={handleSave} />
      <FlatList
        data={entries}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListHeaderComponent={<Text style={styles.entriesTitle}>Saved Entries</Text>}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
    padding: 10,
    flex: 1,
    maxHeight: 200,
  },
  entryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingVertical: 10,
  },
  deleteButton: {
    color: 'red',
  },
  entriesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
});


export default JournalEntryScreen;