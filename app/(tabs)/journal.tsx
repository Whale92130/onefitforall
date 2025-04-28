import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { Link } from 'expo-router';
import { useState } from 'react';


interface JournalEntry {
  id: string;
  content: string;
  date: string;
}


const journalData: JournalEntry[] = [
  { id: '1', content: 'Today was a good day.', date: '2023-11-20' },
  { id: '2', content: 'Learned something new today!', date: '2023-11-19' },
];


export default function JournalScreen() {
  const [journals, setJournals] = useState<JournalEntry[]>(journalData);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Journal</Text>


      <FlatList
        data={journals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.journalEntry}>
            <Text>{item.date}</Text>
            <Text>{item.content}</Text>
          </View>
        )}
      />


      <Link href="/new-journal" asChild>
        <TouchableOpacity style={styles.plusButton}>
          <Text style={styles.plusButtonText}>+</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  plusButton: {
    backgroundColor: 'blue',
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  plusButtonText: {
    color: 'white',
    fontSize: 24,
  },
  journalEntry: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginVertical: 5,
    width: '100%',
  }
});
