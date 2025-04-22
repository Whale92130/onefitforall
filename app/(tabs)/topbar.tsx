import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';
import { Colors } from '../(tabs)/colors';

const TopBar = () => {
  const streakCount = 10; // Replace with actual user streak count

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image source={require('../../assets/icons/logo.jpeg')} style={styles.logo} />
        <View style={styles.streakContainer}>
          <Text style={styles.streakText}>{streakCount}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: Colors.background,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    width: '100%',
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  streakContainer: {
    backgroundColor: '#e0e0e0',
    padding: 8,
    borderRadius: 15,
  },
  streakText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TopBar;