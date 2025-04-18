
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const TopBar = () => {
  const profilePictureUrl = 'https://via.placeholder.com/50'; // Replace with actual user profile picture URL
  const streakCount = 10; // Replace with actual user streak count

  return (
    <View style={styles.container}>
      <Image source={{ uri: profilePictureUrl }} style={styles.profilePicture} />
      <View style={styles.streakContainer}>
        <Text style={styles.streakText}>{streakCount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    width: '100%',
  },
  profilePicture: {
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