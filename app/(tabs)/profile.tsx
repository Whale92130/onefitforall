import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  Platform,
  Settings, // Import Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker'; // Import ImagePicker
import { useRouter } from 'expo-router';
import { Colors } from './colors';

export default function ProfileScreen() {
  const [username, setUsername] = useState('Username');
  const [isEditingUsername, setIsEditingUsername] = useState(false);
  const [tempUsername, setTempUsername] = useState(username);
  const [profilePicUri, setProfilePicUri] = useState<string | null>(null); // Use null initially
  const router = useRouter();

  // Request permissions on component mount
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const libraryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (libraryStatus.status !== 'granted') {
          Alert.alert('Permission Denied', 'Sorry, we need camera roll permissions to make this work!');
        }
        // You might also want to request camera permissions if you allow taking photos
        // const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
        // if (cameraStatus.status !== 'granted') {
        //   Alert.alert('Permission Denied', 'Sorry, we need camera permissions to make this work!');
        // }
      }
    })();
  }, []);

  const handleEditPicture = async () => {
    // Check permissions again in case they were changed in settings
    const libraryStatus = await ImagePicker.getMediaLibraryPermissionsAsync();
    if (libraryStatus.status !== 'granted') {
      Alert.alert(
        'Permission Required',
        'Please grant camera roll permissions in your settings to select a profile picture.',
        [
          { text: "OK" }
        ]
      );
      // Optionally, try requesting again or guide user to settings
      // const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      // if (status !== 'granted') return;
      return; // Exit if permission not granted
    }

    // Launch the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1], // Keep aspect ratio square for profile pics
      quality: 0.5, // Reduce quality to save space/bandwidth
    });

    console.log(result); // Log result for debugging

    if (!result.canceled) {
      if (result.assets && result.assets.length > 0) {
        setProfilePicUri(result.assets[0].uri);
        // TODO: Implement logic to upload the selected image to your server/storage
        Alert.alert('Profile Picture Updated', 'Your new picture has been selected.');
      }
    }
  };

  const handleEditUsername = () => {
    setTempUsername(username);
    setIsEditingUsername(true);
  };

  const handleSaveUsername = () => {
    setUsername(tempUsername);
    setIsEditingUsername(false);
    // TODO: Add logic to save the username persistently (e.g., API call, AsyncStorage)
    Alert.alert('Username Saved', `Username changed to: ${tempUsername}`);
  };

  const handleCancelEditUsername = () => {
    setIsEditingUsername(false);
  };

  const navigateToSettings = () => {
    router.push('/(tabs)/settings'); // Navigate to the settings tab
  };

  return (
    <View style={styles.container}>
      {/* Header Section */
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Profile</Text>

          <TouchableOpacity onPress={navigateToSettings}>
            <Image source={require('../../assets/images/settings.png')} style={styles.settingsIcon} />
          </TouchableOpacity>

        </View>

      }
      <View style={styles.profilePicContainer}>
        <Image
          // Use a default placeholder if profilePicUri is null
          source={profilePicUri ? { uri: profilePicUri } : require('../../assets/images/default_avatar.png')} // Correct path
          style={styles.profilePic}
        />
        <TouchableOpacity style={styles.editPicButton} onPress={handleEditPicture}>
          {/* Correct the path here */}
          <Image source={require('../../assets/images/editProfilePic.png')} style={styles.editIcon} />
        </TouchableOpacity>
      </View>

      {/* Username Section */}
      <View style={styles.usernameContainer}>
        {isEditingUsername ? (
          <View style={styles.editUsernameView}>
            <TextInput
              style={styles.usernameInput}
              value={tempUsername}
              onChangeText={setTempUsername}
              autoFocus
              onSubmitEditing={handleSaveUsername}
            />
            <TouchableOpacity onPress={handleSaveUsername} style={styles.iconButton}>
              <Ionicons name="checkmark-circle-outline" size={28} color="green" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCancelEditUsername} style={styles.iconButton}>
              <Ionicons name="close-circle-outline" size={28} color="red" />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.displayUsernameView}>
            <Text style={styles.usernameText}>{username}</Text>
            <TouchableOpacity onPress={handleEditUsername} style={styles.iconButton}>
              {/* Correct the path here */}
              <Image source={require('../../assets/images/editUsername.png')} style={styles.editUsernameIcon} />
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* Other Profile Info (Placeholder for Goal and Friends) */}
      {/* Add Goal and Friends sections here based on the image if needed */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the container fills the available space
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  profilePicContainer: {
    marginBottom: 20,
    alignItems: 'center',
    position: 'relative',
  },
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#e0e0e0',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  editPicButton: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 6,
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  usernameContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  displayUsernameView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  usernameText: {
    color: Colors.textPrimary,
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 5,
  },
  editUsernameView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Colors.textPrimary,
    paddingBottom: 2,
  },
  usernameInput: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 5,
    minWidth: 100,
    marginRight: 5,
  },
  iconButton: {
    padding: 5,
  },
  editIcon: {
    width: 18, // Adjusted size slightly
    height: 18,
    tintColor: 'white',
  },
  editUsernameIcon: { // Can be the same as editIcon or different
    width: 24,
    height: 24,
    tintColor: Colors.textPrimary,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.textPrimary,
  },
  settingsIcon: {
    width: 30, // Adjust size as needed
    height: 30, // Adjust size as needed
    tintColor: Colors.textPrimary, // Make the settings icon black
  },
});
