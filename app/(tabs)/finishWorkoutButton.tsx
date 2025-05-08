import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors } from './colors'; // Assuming colors are defined here

interface FinishWorkoutButtonProps {
  onPress?: () => void;
}

const FinishWorkoutButton: React.FC<FinishWorkoutButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>Finish Workout</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary, // Or any suitable color from your Colors file
    padding: 15,
    borderRadius: 10, // Rounded corners
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.textPrimary, // Text color for the button
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FinishWorkoutButton;
