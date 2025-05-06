import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const NewWorkout = ({ onPress }: { onPress: () => void }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}><Text>New Workout</Text></TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: '#DDDDDD',
    borderRadius: 5,
    marginTop: 20,
  },
});

export default NewWorkout;
