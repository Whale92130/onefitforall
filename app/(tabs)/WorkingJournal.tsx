import React, { useState } from 'react';
import { View, TextInput, Button, Text, FlatList, StyleSheet } from 'react-native';
import { Colors } from "/home/user/onefitforall/constants/Colors";

// Define the type for a single journal entry
interface JournalEntry {
 content: string;
 date: string;
}

const Journal = () => {
  const [currentEntry, setCurrentEntry] = useState<string>('');
  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>([]);

  const deleteEntry = (index: number) => {
    setJournalEntries((prevEntries) => {
      const newEntries = [...prevEntries];
      newEntries.splice(index, 1);
      return newEntries;
    });
  };

  const addEntry = () => {
    if (currentEntry.trim()) {
      const newEntry = {
        content: currentEntry,
        date: new Date().toLocaleDateString(),
      };
      setJournalEntries([...journalEntries, newEntry]);
      setCurrentEntry(''); // Clear the input field
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Journal</Text>
      <TextInput
        style={styles.input}
        placeholder="Write your journal entry here..."
        multiline
        value={currentEntry}
        onChangeText={setCurrentEntry}
      />
      <Button title="Save Entry" onPress={addEntry} />

      <Text style={styles.entriesTitle}>Journal Entries:</Text>
      <FlatList
        data={journalEntries}
        keyExtractor={(item, index) => `${item.date}-${index}`} // More robust key
        renderItem={({ item }) => (
          <View style={styles.entryCard}>
            <Text style={styles.entryDate}>{item.date}</Text>
            <Text style={styles.entryContent}>{item.content}</Text>
 {/* For simplicity, using Button here, but its styling options are limited */}
 <Button title="Delete" onPress={() => deleteEntry(journalEntries.indexOf(item))} color={Colors.light.tint} />
            </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.light.background, // Use a background color from Colors
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: Colors.light.background, // Use a background color from Colors
  },
  input: {
    borderWidth: 1, // Subtle border
    borderColor: Colors.light.tint, // Use a tint color for the border
    borderRadius: 8, // Rounded corners for a modern look
    padding: 15,
    marginBottom: 20, // More space below the input
    minHeight: 100,
    textAlignVertical: 'top',
    
    fontSize: 16, // Slightly larger font size
    color: Colors.light.text, // Text color
  },
  entriesTitle: {
    fontSize: 18,
 fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 15,
    color: Colors.light.text,
  },
  entryCard: { // Renamed from entryContainer for clarity
    backgroundColor: Colors.light.background, // White background for entry cards\n
    padding: 15,
 marginBottom: 10,
    borderRadius: 8,
    elevation: 2, // Add a subtle shadow for depth (Android)
    shadowColor: '#000', // Shadow color (iOS)
    shadowOffset: { width: 0, height: 2 }, // Shadow offset (iOS)
    shadowOpacity: 0.1, // Shadow opacity (iOS)
    shadowRadius: 1.5, // Shadow radius (iOS)
  },
  entryDate: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
  entryContent: {
    fontSize: 16,
    color: Colors.light.text, // Text color
  },
});

export default Journal;
