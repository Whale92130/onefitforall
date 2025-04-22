
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Crates = () => {
  const [lootCrateResult, setLootCrateResult] = useState(generateLootCrate());

  function generateLootCrate() {
    const randomNumber = Math.random();
    if (randomNumber < 0.7) {
      return "Common";
    } else if (randomNumber < 0.9) {
      return "Rare";
    } else {
      return "Epic";
    }
  }

  const handleOpenCrate = () => {
    setLootCrateResult(generateLootCrate());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crates</Text>
      <Text style={styles.message}>Welcome to the crates!</Text>
      <Text style={styles.result}>Loot Crate Result: {lootCrateResult}</Text>
      <TouchableOpacity style={styles.button} onPress={handleOpenCrate}>
        <Text style={styles.buttonText}>Open Crate</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
    color: '#555',
  },
  result: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 20,
    color: '#007bff',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    minWidth: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Crates;