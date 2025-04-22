// navbar.tsx

import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from 'react-native';
import { Colors } from '../(tabs)/colors';

export type IconName = 'home' | 'start' | 'profile';

type IconConfig = {
  name: IconName;
  source: ImageSourcePropType;
};

export type NavbarProps = {
  activeIcon: IconName;
  onIconPress: (icon: IconName) => void;
};

const ICONS: IconConfig[] = [
  {
    name: 'home',
    source: require('../../assets/navbar_icons/home_icon.png'),
  },
  {
    name: 'start',
    source: require('../../assets/navbar_icons/start_icon.png'),
  },
  {
    name: 'profile',
    source: require('../../assets/icons/logo.jpeg'),
  },
];

const Navbar: React.FC<NavbarProps> = ({ activeIcon, onIconPress }) => (
  <View style={styles.navbar}>
    {ICONS.map((icon) => (
      <TouchableOpacity
        key={icon.name}
        style={styles.iconContainer}
        onPress={() => onIconPress(icon.name)}
      >
        <Image
          source={icon.source}
          style={[
            styles.iconImage,
            activeIcon === icon.name
              ? styles.activeIcon
              : styles.inactiveIcon,
            icon.name === 'profile' && styles.profileIcon,
          ]}
        />
      </TouchableOpacity>
    ))}
  </View>
);

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.background,
    borderTopWidth: 1,
    borderTopColor: Colors.background,
    height: 42,
    paddingHorizontal: 10,
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconImage: {
    width: 28,
    height: 28,
  },
  profileIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.textPrimary,
  },
  activeIcon: {
    tintColor: Colors.button,
  },
  inactiveIcon: {
    tintColor: 'black',
  },
});

export default Navbar;
