import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Colors } from '../(tabs)/colors';
import React from 'react';

interface LeaderboardItemProps {
  name: string;
  workouts: number;
  rank: number;
}

const LeaderboardItem: React.FC<LeaderboardItemProps> = ({ name, workouts, rank }) => (
  <View style={styles.leaderboardItem}>
    <Text style={styles.rank}>{rank}</Text>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.workouts}>{workouts}</Text>
  </View>
);

interface LeaderboardProps {
  leaderboardData: { name: string; workouts: number; }[] | undefined;
}

const defaultLeaderboardData = [
    { name: 'John Doe', workouts: 12 },
    { name: 'Jane Smith', workouts: 11 },
    { name: 'Peter Jones', workouts: 10 },
  ];

export default function Leaderboard({ leaderboardData = defaultLeaderboardData }: LeaderboardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leaderboard</Text>
      <ScrollView>
        <View style={styles.header}>
          <Text style={[styles.headerText, styles.rank]}>Rank</Text>
          <Text style={[styles.headerText, styles.name]}>Name</Text>
          <Text style={[styles.headerText, styles.workouts]}>Workouts</Text>
        </View>
        {Array.isArray(leaderboardData) ? leaderboardData.map((item, index) => (
          <LeaderboardItem key={index} name={item.name} workouts={item.workouts} rank={index + 1} />
        )) : <Text>No leaderboard data available.</Text>}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    padding: 4,
    backgroundColor: Colors.primary,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: Colors.textPrimary,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.secondary,
  },
  headerText: {
    fontWeight: 'bold',
    color: Colors.textPrimary
  },
  leaderboardItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary,
  },
  rank: {
    width: 40, //Increased width to prevent cutoff
    textAlign: 'left',
    color: Colors.textPrimary,
  },
  name: {
    flex: 1,
    textAlign: 'center',
    color: Colors.textPrimary,
  },
  workouts: {
    width: 80,
    textAlign: 'right',
    color: Colors.textPrimary,
  },
});
