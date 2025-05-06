import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Colors } from './colors'; // Assuming you have a colors file
import { useRouter } from 'expo-router';
import ThemeSelectionScreen from "./ThemeSelectionScreen";

// Define Colors if not imported (replace with your actual Colors import)
// const Colors = {
//   background: '#FFFFFF',
//   textPrimary: '#000000',
//   textSecondary: '#555555',
//   border: '#DDDDDD',
//   primary: '#FF0000', // Example danger color for logout
// };

const SettingsScreen = () => {
  // --- Hooks must be called inside the component ---
  const router = useRouter();

  const navigateToProfile = () => {
    // Use router.back() typically for a back button
    // router.push('/'); // Or push to a specific route if needed
    if (router.canGoBack()) {
        router.back();
    } else {
        // Optional: Fallback if there's no screen to go back to
        router.replace('/'); // Go to home/root as a fallback
    }
  };
  // --- End Hook Placement Fix ---


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

  const handleThemePress = () => {
    console.log('Theme selection pressed');
    router.push('/ThemeSelectionScreen'); // Navigate to the new ThemeSelectionScreen
  };

  return (
    // Use contentContainerStyle for inner padding if needed, but paddingTop on the ScrollView works well here.
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={navigateToProfile} style={styles.backButton}>
          <Image
            source={require('../../assets/images/back.png')} // Ensure this path is correct
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Settings</Text>
      </View>

      {/* Settings Items Section */}
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
      <TouchableOpacity style={styles.settingItem} onPress={handleThemePress}>
        <Text style={styles.settingText}>Theme</Text>
        <Text style={styles.arrow}>{'>'}</Text>
      </TouchableOpacity>


      {/* Logout Button */}
      <TouchableOpacity style={[styles.settingItem, styles.logoutButton]} onPress={handleLogoutPress}>
        <Text style={[styles.settingText, styles.logoutText]}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    // --- Add paddingTop to push content down from the top edge ---
    paddingTop: 20, // Adjust this value for desired margin
  },
  headerContainer: {
    flexDirection: 'row', // Arrange items horizontally
    alignItems: 'center', // Align items vertically in the center
    // --- Change from 'center' to 'flex-start' to align left ---
    justifyContent: 'flex-start',
    // --- Add horizontal padding for space from screen edges ---
    paddingHorizontal: 15,
    // --- Add bottom padding for space below the header line ---
    paddingBottom: 15, // Creates space before the first setting item
    // Remove paddingTop here, handled by container's paddingTop
  },
  backButton: {
    // Add padding if the touchable area needs to be larger than the icon
    padding: 5, // Optional: makes the button easier to press
  },
  backIcon: {
    width: 24,
    height: 24,
    // --- Add marginRight to space the icon from the text ---
    marginRight: 10, // Adjust spacing as needed
    tintColor: Colors.textPrimary, // Use color from theme
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.textPrimary,
    // --- Remove specific padding, alignment is handled by container ---
  },
  settingItem: {
    backgroundColor: Colors.background, // Or a slightly different shade like Colors.listItemBackground
    paddingVertical: 15,
    // --- Consistent horizontal padding ---
    paddingHorizontal: 20, // Match or relate to header padding
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingText: {
    fontSize: 18,
    color: Colors.textPrimary,
  },
  arrow: {
      fontSize: 18,
      color: Colors.textSecondary, // Use secondary color for less emphasis
  },
  logoutButton: {
    marginTop: 30, // Space above the logout button
    borderBottomWidth: 0, // No line below logout
    // Optionally change background for emphasis, but often not needed
    // backgroundColor: Colors.dangerBackground,
  },
  logoutText: {
    color: Colors.primary, // Use a distinct color (like red) for logout
    textAlign: 'center', // Center the text
    flex: 1, // Ensure it takes full width for centering to work reliably
    fontWeight: 'bold', // Make it stand out
  },
});

export default SettingsScreen;