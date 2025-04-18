import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import YourNextWorkout from './yourNextWorkout';
import RecomendedWorkouts from './recomendedWorkouts';
import Leaderboard from './leaderboard';
import TopBar from './topbar';
import { Colors } from '../(tabs)/colors';

export default function HomeScreen() {
  const leaderboardData = [
    { name: 'Alice Johnson', workouts: 15 },
    { name: 'Bob Williams', workouts: 20 },
    { name: 'Charlie Brown', workouts: 10 },
  ];
  return (
    <View style={styles.container}>
      <TopBar/>
      <View style={styles.topSection}><RecomendedWorkouts /></View>
      <View style={styles.bottomSection}>
        <View style={styles.bottomItem}><YourNextWorkout /></View>
        <View style={styles.bottomItem}><Leaderboard leaderboardData={leaderboardData} /></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    flexDirection: 'column',
  },
  topSection: {
    flex: 1,
    height: 220,
    margin: 5,
  },
  recomended: {
    height: '100%',
  },
  bottomSection: {
    height: '100%',
    flex: 2,
    flexDirection: 'row',
    margin: 5,
  },
  bottomItem: {
    height: '100%',
    margin: 5,
    flex: 1,
  },
});