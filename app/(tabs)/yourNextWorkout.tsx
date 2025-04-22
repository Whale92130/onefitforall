import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../(tabs)/colors';

const YourNextWorkout = () => {
  // Mock data for the next workout
  const nextWorkout = {
    title: 'Full Body Blast',
    exercises: ['Squats', 'Push-ups', 'Lunges', 'Plank'],
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Your Next Workout</Text>
      </View>
      <View style={styles.buttonContainer}>
        {nextWorkout.exercises.map((exercise, index) => (
          <TouchableOpacity key={index} style={styles.button}>
            <Text style={styles.buttonText}>{exercise}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 16,
    color: Colors.textSecondary,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    padding: 10,
  },
  header: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: Colors.textPrimary,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 5,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    flex: 1,
    backgroundColor: Colors.button,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
});

export default YourNextWorkout;