import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Animated, Image } from 'react-native';
import { Colors } from '../(tabs)/colors';

import crate from '../../assets/images/crate.png';
interface CrateResult {
  theme: string;
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary';
}

const OpenCrateScreen = () => {

  const [lootCrateResult, setLootCrateResult] = useState<CrateResult | null>(null);
  const crateAnimation = useRef(new Animated.Value(0)).current;
  const [isAnimating, setIsAnimating] = useState(false);
  const [result, setResult] = useState<CrateResult | null>(null);

  useEffect(() => {
    if (isAnimating) {
      Animated.timing(crateAnimation, {
        toValue: 1,
        duration: 4000, // 4 seconds
        useNativeDriver: true,
      }).start(() => {
        crateAnimation.setValue(0);
        if (result) {
          setLootCrateResult(result);
        }
        setIsAnimating(false);
      });
    }
  }, [isAnimating, crateAnimation]);

  const animatedCrateStyle = {
    opacity: crateAnimation.interpolate({ inputRange: [0, 0.5, 1], outputRange: [0, 1, 0] }),
    transform: [{ scale: crateAnimation.interpolate({ inputRange: [0, 0.5, 1], outputRange: [0, 5, 0] }) }],
    shadowOpacity: crateAnimation.interpolate({ inputRange: [0, 0.5, 1], outputRange: [0, 0.8, 0] }),
  };
  const handleOpenCrate = () => {
    let crateResult: CrateResult;
    const roll = Math.floor(Math.random() * 20) + 1;
    

    if (roll >= 1 && roll <= 12) {
      const commonRoll = Math.random();
      crateResult = {
        theme: commonRoll < 0.5 ? 'Greyscale Theme' : 'Dark Theme',       
        rarity: 'Common',
      };
    } else if (roll >= 13 && roll <= 17) {
      const rareRoll = Math.random();
      if (rareRoll < 0.25) crateResult = { theme: 'Winter Theme', rarity: 'Rare' };    
      else if (rareRoll < 0.5) crateResult = { theme: 'Summer Theme', rarity: 'Rare' };
      else if (rareRoll < 0.75) crateResult = { theme: 'Autumn Theme', rarity: 'Rare' };
      else crateResult = { theme: 'Spring Theme', rarity: 'Rare' };
    } else if (roll >= 18 && roll <= 19) {
      const epicRoll = Math.random();
      if (epicRoll < 0.33) crateResult = { theme: 'Mr. Hare Theme', rarity: 'Epic' };
      else if (epicRoll < 0.66) crateResult = { theme: 'CCA Theme', rarity: 'Epic' };
      else crateResult = { theme: 'The Nether Theme', rarity: 'Epic' };
    } else if (roll === 20) {
      const legendaryRoll = Math.random();
      if (legendaryRoll < 0.33) crateResult = { theme: 'Midnight Theme', rarity: 'Legendary' };
      else if (legendaryRoll < 0.66) crateResult = { theme: 'America Theme', rarity: 'Legendary' };
      else crateResult = { theme: 'Ender Pearl Theme', rarity: 'Legendary' };
    }
    else {
        crateResult = {theme: 'none', rarity: 'Common'}
    };
      return crateResult;
  }

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Common':
        return 'green';
      case 'Rare':
        return 'blue';
      case 'Epic':
        return 'purple';
      case 'Legendary':
        return 'orange';
      default:
        return 'gray';
    }
  };

  const getThemeBackgroundColor = (theme: string) => {
    switch (theme) {
      case 'Greyscale Theme':
        return '#d4d4d4'
      case 'Dark Theme':
        return '#292929'
      case 'Ocean Theme':
        return '#1f28a3'
      case 'Winter Theme':
        return '#90c0e8'
      case 'Summer Theme':
        return '#ffe51f'
      case 'Autumn Theme':
        return '#c93c00'
      case 'Spring Theme':
        return '#80d162'
      case 'Mr. Hare Theme':
        return '#ffff00'
      case 'CCA Theme':
        return '#b52400'
      case 'The Nether Theme':
        return '#ff6200'
      case 'Midnight Theme':
        return '#000000'
      case 'America Theme':
        return '#ff0022'
      case 'Ender Pearl Theme':
        return '#1b0042'
      default:
        return 'transparent'
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: Colors.primary }]}>
      {lootCrateResult ? (
        <View style={styles.contentContainer}>
          <Text style={styles.themeText}>You got: {lootCrateResult.theme}</Text>
          <View
            style={[styles.square, { backgroundColor: getThemeBackgroundColor(lootCrateResult.theme) }]}
 />
          <Text style={[{ color: getRarityColor(lootCrateResult.rarity) }, styles.rarityText]}>
            {lootCrateResult.rarity}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, styles.claimButton]}>
              <Text style={styles.buttonText}>Claim</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.claimAndEquipButton]}
            >
              <Text style={styles.buttonText}>Claim and Equip</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.contentContainer}>
        </View>        
        
      )}
      {isAnimating && (
        <Animated.View style={[
          styles.crate,
          animatedCrateStyle,
        ]}>
          <Image source={crate} style={{ width: 100, height: 100 }} resizeMode="contain" />
        </Animated.View>

      )}
      <Button
        title={lootCrateResult ? 'Open Another' : 'Open Crate'}
        onPress={() => {
          setIsAnimating(true);
          const crateResult = handleOpenCrate(); setResult(crateResult);
        }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    alignItems: 'center',
    
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    marginBottom: 10,
  },
  themeText: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  square: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  claimButton: {
    backgroundColor: 'green',
  },
  claimAndEquipButton: {
    backgroundColor: 'blue',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },  
  rarityText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  crate: {
    width: 100,
    height: 100,
    position: 'absolute',
    zIndex: 10,
    top: '50%',
    left: '50%',
    borderRadius: 100,
    transform: [{ translateX: -50 }, { translateY: -50 }],
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 40,
    backgroundColor: 'transparent', // Ensure it's transparent
  }
});

export default OpenCrateScreen;
