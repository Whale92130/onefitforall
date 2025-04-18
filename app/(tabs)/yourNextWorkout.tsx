import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, useWindowDimensions } from 'react-native';
import { Colors } from '../(tabs)/colors';

export default function HomeScreen() {
  const { height, width } = useWindowDimensions();
  const buttonHeight = height * 0.1; // Adjust this fraction as needed (e.g., 0.1 for 10% of screen height)
  const buttonPadding = buttonHeight * 0.2; // Adjust this fraction as needed for padding

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Your Next Workout</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, { height: buttonHeight, paddingVertical: buttonPadding }]} onPress={() => console.log("workout1 pressed")}>
            <Text style={styles.buttonText}>workout1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { height: buttonHeight, paddingVertical: buttonPadding }]} onPress={() => console.log("Add pressed")}>
            <Text style={styles.buttonText}>workout2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { height: buttonHeight, paddingVertical: buttonPadding }]} onPress={() => console.log("workout3 pressed")}>
            <Text style={styles.buttonText}>workout3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { height: buttonHeight, paddingVertical: buttonPadding }]} onPress={() => console.log("workout3 pressed")}>
            <Text style={styles.buttonText}>workout4</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Text: {
    color: Colors.textPrimary,
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
  },
  buttonContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: Colors.button,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 5,
  },
  buttonText: {
    color: Colors.textSecondary,
    fontSize: 15,
  },
  footer: {
    borderRadius: 10,
  },
});