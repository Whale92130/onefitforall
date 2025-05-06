
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useTheme, ThemeProvider } from '../ThemeContext'; // Import ThemeContext
import { useRouter } from 'expo-router';
import { Colors } from './colors';
const ThemeSelectionScreen = () => {
  const router = useRouter();
  const { theme, setTheme } = useTheme(); // Use the theme context

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    router.back();
  };

  const navigateToSettings = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
        router.replace('/settings');
    }
  };

 return (
 <View style={[styles.container, { backgroundColor: Colors.background }]}>
         <View style={styles.headerContainer}>
 <TouchableOpacity onPress={navigateToSettings} style={styles.backButton}>
          <Image
            source={require('../../assets/images/back.png')} // Ensure this path is correct
            style={[styles.backIcon, {tintColor: Colors.textPrimary}]}
          />
        </TouchableOpacity>
        <Text style={[styles.headerText, { color: Colors.textPrimary }]}>Theme Selection</Text>
      </View>
      <TouchableOpacity
        style={[styles.themeButton, { backgroundColor: Colors.background }]}
        onPress={() => handleThemeChange("light")}
      >
        <Text style={[styles.themeButtonText, { color: Colors.textPrimary }]}>Light Theme</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.themeButton, { backgroundColor: Colors.background }]}
        onPress={() => handleThemeChange("dark")}
      >
        <Text style={[styles.themeButtonText, { color: Colors.textPrimary }]}>Dark Theme</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 20
    },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingHorizontal: 15,
      paddingBottom: 15,
      width: '100%',
    },
    backButton: {
      padding: 5,
    },
    backIcon: {
      width: 24,
      height: 24,
    },
    headerText: {
      fontSize: 28,
      fontWeight: 'bold',
    },
  themeButton: {
    padding: 20,
    margin: 10,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  themeButtonText: {
    fontSize: 18,
  },
});

export default ThemeSelectionScreen;