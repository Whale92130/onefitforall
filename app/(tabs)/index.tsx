// HomeScreen.tsx

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import YourNextWorkout from './yourNextWorkout';
import RecomendedWorkouts from './recomendedWorkouts';
import Leaderboard from './leaderboard';
import TopBar from './topbar';
import Navbar, { IconName } from './navbar';
import Profile from './profile';
//import Stopwatch from  './stopwatch';
import { Colors } from '../(tabs)/colors';
//import Shop from './shop';
import OpenCrate from './openCrate';
import OpenShop from './openShop';
import SettingsScreen from './settings';


export default function HomeScreen() {
  const [currentSection, setCurrentSection] = useState<IconName>('home');


  const leaderboardData = [
    { name: 'Alice Johnson', workouts: 15 },
    { name: 'Bob Williams', workouts: 20 },
    { name: 'Charlie Brown', workouts: 10 },
  ];

  const Stack = createStackNavigator();

  const renderSection = () => {
    switch (currentSection) {
      case 'newWorkout':
        return (
          <View style={styles.sectionContainer}>
            {/* ADD ALL CODE FOR NEW WORKOUT PAGE HERE */}

          </View>
        );
      case 'profile':
        return (
          <>
            <View style={styles.sectionContainer}>
              <Profile/>
              <View style={styles.horizontalButtons}>
                <OpenCrate/>
                <OpenShop/>
              </View>
            </View>
          </>
        );
      case 'home':
      default:
        return (
          <>
            <TopBar />
            <View style={styles.topSection}>
              <RecomendedWorkouts />
            </View>
            <View style={styles.bottomSection}>
              <View style={styles.bottomItem}>
                <YourNextWorkout />
              </View>
              <View style={styles.bottomItem}>
                <Leaderboard leaderboardData={leaderboardData} />
              </View>
            </View>
          </>
        );
    }
  };


  return (
    <View style={styles.container}>
      {renderSection()}
      <Navbar
        activeIcon={currentSection}
        onIconPress={(icon) => setCurrentSection(icon)}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  topSection: {
    flex: 1,
    height: 220,
    margin: 5,
  },
  bottomSection: {
    flex: 2,
    flexDirection: 'row',
    margin: 5,
  },
  bottomItem: {
    flex: 1,
    margin: 5,
  },
  sectionContainer: {
    display: 'flex',
    justifyContent: 'flex-start', // Push children to the top
    flex: 1,
    margin: 10,
  },
  horizontalButtons: {
    flexDirection: 'row', // Arrange children horizontally
    marginTop: 10, // Add some space below the profile
  },
});