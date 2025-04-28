import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Colors } from './colors'; // Assuming you have a colors file

const SettingsScreen = () => {
  // Placeholder functions for settings actions
  const handleAccountPress = () => {
    console.log('Account settings pressed');
    // Navigate to Account Settings screen or perform action
  };

  const handleNotificationsPress = () => {
    console.log('Notifications settings pressed');
    // Navigate to Notifications Settings screen or perform action
  };

  const handlePrivacyPress = () => {
    console.log('Privacy settings pressed');
    // Navigate to Privacy Settings screen or perform action
  };

  const handleLogoutPress = () => {
    console.log('Logout pressed');
    // Implement logout logic here
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      <TouchableOpacity style={styles.settingItem} onPress={handleAccountPress}>
        <Text style={styles.settingText}>Account</Text>
        <Text style={styles.arrow}>{'>'}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingItem} onPress={handleNotificationsPress}>
        <Text style={styles.settingText}>Notifications</Text>
         <Text style={styles.arrow}>{'>'}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingItem} onPress={handlePrivacyPress}>
        <Text style={styles.settingText}>Privacy</Text>
         <Text style={styles.arrow}>{'>'}</Text>
      </TouchableOpacity>

      {/* Add more settings items as needed */}

      <TouchableOpacity style={[styles.settingItem, styles.logoutButton]} onPress={handleLogoutPress}>
        <Text style={[styles.settingText, styles.logoutText]}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background, // Use background color from your theme
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.textPrimary, // Use text color from your theme
    paddingHorizontal: 20,
    paddingTop: 40, // Adjust as needed for status bar height
    paddingBottom: 20,
  },
  settingItem: {
    backgroundColor: Colors.background, // Use a list item background color
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.textPrimary, // Use a border color
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingText: {
    fontSize: 18,
    color: Colors.textPrimary, // Use text color from your theme
  },
  arrow: {
      fontSize: 18,
      color: Colors.textPrimary, // Use a secondary text color
  },
  logoutButton: {
    marginTop: 30,
    borderBottomWidth: 0, // Remove bottom border for logout
    backgroundColor: Colors.background, // Use a danger/warning color
  },
  logoutText: {
    color: Colors.primary, // Use text color suitable for the danger background
    textAlign: 'center',
    flex: 1, // Make text take full width for centering
  },
});

export default SettingsScreen;