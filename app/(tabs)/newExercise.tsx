import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import AddExercise from './addExercise'; // Assuming AddExercise component is in the same directory

export default function NewExercise() {
  const [exerciseCount, setExerciseCount] = useState(1); // Start with one AddExercise component

  const handleAddExercise = () => {
    setExerciseCount(prevCount => prevCount + 1);
  };

  const handleRemoveExercise = () => {
    setExerciseCount(prevCount => Math.max(1, prevCount - 1)); // Ensure at least one exercise remains
  };

  const renderExercises = () => {
    const exercises = [];
    for (let i = 0; i < exerciseCount; i++) {
      exercises.push(<AddExercise key={i} onDelete={() => {}} />); // Add onDelete prop as it exists in HomeScreen
    }
    return exercises;
  };

  return (
    <View style={styles.outerContainer}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {renderExercises()}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button title="Add exercise" onPress={handleAddExercise} />
        {exerciseCount > 1 && ( // Render "Remove exercise" only if there's more than one exercise
          <Button title="Remove exercise" onPress={handleRemoveExercise} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    paddingHorizontal: 20, // Add horizontal padding for spacing
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around', // Adjust as needed for button spacing
    paddingVertical: 10, // Add vertical padding
    borderTopWidth: 1, // Optional: Add a border to separate buttons from exercises
    borderColor: '#ccc', // Optional: Border color
  },
});