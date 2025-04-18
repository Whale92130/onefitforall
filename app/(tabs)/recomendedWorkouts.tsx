import React from 'react';
import { View, Text, StyleSheet, Platform, ScrollView, Image } from 'react-native';
import { Colors } from '../(tabs)/colors';

function RecomnededWorkouts() {
  const workoutData = [
    { id: '1', name: 'Workout A', image: 'https://placehold.co/200x150/808080/FFFFFF?text=Workout+A' },
    { id: '2', name: 'Workout B', image: 'https://placehold.co/200x150/A9A9A9/FFFFFF?text=Workout+B' },
    { id: '3', name: 'Workout C', image: 'https://placehold.co/200x150/C0C0C0/FFFFFF?text=Workout+C' },
    { id: '4', name: 'Workout D', image: 'https://placehold.co/200x150/D3D3D3/FFFFFF?text=Workout+D' },
    { id: '5', name: 'Workout E', image: 'https://placehold.co/200x150/808080/FFFFFF?text=Workout+E' },
    { id: '6', name: 'Workout F', image: 'https://placehold.co/200x150/A9A9A9/FFFFFF?text=Workout+F' },
    { id: '7', name: 'Workout G', image: 'https://placehold.co/200x150/C0C0C0/FFFFFF?text=Workout+G' },
    { id: '8', name: 'Workout H', image: 'https://placehold.co/200x150/D3D3D3/FFFFFF?text=Workout+H' },
    { id: '9', name: 'Workout I', image: 'https://placehold.co/200x150/808080/FFFFFF?text=Workout+I' },
    { id: '10', name: 'Workout J', image: 'https://placehold.co/200x150/A9A9A9/FFFFFF?text=Workout+J' },
    { id: '11', name: 'Workout K', image: 'https://placehold.co/200x150/C0C0C0/FFFFFF?text=Workout+K' },
    { id: '12', name: 'Workout L', image: 'https://placehold.co/200x150/D3D3D3/FFFFFF?text=Workout+L' },
  ];

  return (
    <View style={styles.container}>
        <Text style={styles.heading}>Recommended Workouts</Text>
        <View style={styles.scrollContainer}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContentContainer}
            >
                {workoutData.map(workout => (
                    <View key={workout.id} style={styles.workoutItem}>
                        <Image source={{ uri: workout.image }} style={styles.image} />
                        <Text style={styles.workoutName}>{workout.name}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    </View>
  );

  
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: Colors.primary,
    borderRadius: 10,
    padding: 15,
  },
  scrollContainer: {
    width: '100%',
    marginTop: 10,
  },
  scrollContentContainer: {
    paddingRight: 15,
    alignItems: 'flex-start',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.textPrimary,
    marginBottom: 2,
    textAlign: 'center',
  },
  workoutItem: {
    width: 120,
    marginRight: 10,
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 80,
    borderRadius: 8,
  },
  workoutName: {
    marginTop: 5,
    fontSize: 12,
    color: Colors.textPrimary,
  },
});

export default RecomnededWorkouts;