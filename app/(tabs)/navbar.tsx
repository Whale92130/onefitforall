import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const Navbar = () => {
  const router = useRouter();

  const icons = [
    { name: "home", route: "/(tabs)/index" },
    { name: "search", icon: "file-text", route: "/(tabs)/explore" },
    { name: "plus-circle", icon: "plus-circle", route: "/(tabs)/create" },
    { name: "heart", icon: "heart", route: "/(tabs)/favorites" },
    { name: "user", icon: "user", route: "/(tabs)/Profile" },
  ];

  return (
    <View style={styles.navbar}>
      {icons.map((icon, index) => (
        <TouchableOpacity key={index} style={styles.iconContainer} onPress={() => router.push(icon.route)}>
          {icon.name === "home" && (
            <Ionicons name="home" size={24} color="black" />
          )}
          {icon.name === "search" && (
            <Feather name="search" size={24} color="black" />
          )}
          {icon.name === "plus-circle" && (
            <Ionicons name="plus-circle" size={24} color="black" />
          )}
          {icon.name === "heart" && (
            <Feather name="heart" size={24} color="black" />
          )}
          {icon.name === "user" && (
            <View style={styles.profileIcon}>
              <MaterialIcons name="person" size={20} color="black" />
              {/*  Ideally replace with user profile image */}
            </View>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  iconContainer: {
    alignItems: 'center',
  },
  iconText: {
    fontSize: 12,
  },
  profileIcon: {
    // Style for profile icon if needed
  },
});

export default Navbar;