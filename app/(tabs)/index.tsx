// HomeScreen.tsx

import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import YourNextWorkout from './yourNextWorkout';
import RecomendedWorkouts from './recomendedWorkouts';
import Leaderboard from './leaderboard';
import TopBar from './topbar';
import Navbar, { IconName } from './navbar';
import Profile from './profile';
import Timer from  './timer';
import { Colors } from '../(tabs)/colors';

export default function HomeScreen() {
  const [currentSection, setCurrentSection] = useState<IconName>('home');

  const leaderboardData = [
    { name: 'Alice Johnson', workouts: 15 },
    { name: 'Bob Williams', workouts: 20 },
    { name: 'Charlie Brown', workouts: 10 },
  ];

  const renderSection = () => {
    switch (currentSection) {
      case 'start':
        return (
          <View style={styles.sectionContainer}>
            <Timer/>
          </View>
        );
      case 'profile':
        return (
          <View style={styles.sectionContainer}>
            <Profile/>
          </View>
        );
      case 'home':
      default:
        return (
          <>
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
      <TopBar />
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
    flex: 1,
    margin: 10,
  },
});
