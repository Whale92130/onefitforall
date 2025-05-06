import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Animated, Image } from 'react-native';
import { Colors } from '../(tabs)/colors';
import crateImage from '../../assets/images/crate.png';
import { useNavigation } from 'expo-router';



interface CrateResult {
  theme: string;
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary';
}

const OpenCrateScreen = () => {

  const [lootCrateResult, setLootCrateResult] = useState<CrateResult | null>(null);
  const navigation = useNavigation();
  const crateAnimation = useRef(new Animated.Value(0)).current;
  const [isAnimating, setIsAnimating] = useState(false);
  const [result, setResult] = useState<CrateResult | null>(null);

  useEffect(() => {
    if (isAnimating) {
      // Reset state before starting the animation
      setLootCrateResult(null);
      setResult(null);
      Animated.timing(crateAnimation, {
        toValue: 1,
        duration: 1500, // Shorter duration for growing/shrinking effect
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
    opacity: crateAnimation.interpolate({ inputRange: [0, 0.5, 1], outputRange: [0, 1, 0] }), // Fade in and out
    transform: [
      { scale: crateAnimation.interpolate({ inputRange: [0, 0.5, 1], outputRange: [0.5, 1.5, 0.5] }) }, // Grow and shrink
      { translateX: -50 }, // Keep centered horizontally
      { translateY: -50 }, // Keep centered vertically
    ],
  };
  const handleOpenCrate = () => {
    // Trigger CSS animation here
    setIsAnimating(true); // This will also trigger the JS animation and subsequent result display

    let crateResult: CrateResult;
    const roll = Math.random(); // Generate a random number between 0 (inclusive) and 1 (exclusive)

    if (roll <= 0.60) { // 60% chance for Common
      const commonRoll = Math.random();
      const themes = ['Greyscale Theme', 'Dark Theme'];
      const selectedTheme = themes[Math.floor(commonRoll * themes.length)];

      crateResult = {
 theme: selectedTheme,
 rarity: 'Common',
      };
    } else if (roll > 0.60 && roll <= 0.90) { // 30% chance for Rare (0.60 to 0.90)
      const rareRoll = Math.random();
      if (rareRoll < 0.25) crateResult = { theme: 'Winter Theme', rarity: 'Rare' };    
      else if (rareRoll < 0.5) crateResult = { theme: 'Summer Theme', rarity: 'Rare' };
      else if (rareRoll < 0.75) crateResult = { theme: 'Autumn Theme', rarity: 'Rare' };
      else crateResult = { theme: 'Spring Theme', rarity: 'Rare' };
    } else if (roll > 0.90 && roll < 0.98) { // 8% chance for Epic (0.90 to 0.98)
      const epicRoll = Math.random();
      const themes = ['Mr. Hare Theme', 'CCA Theme', 'The Nether Theme'];
      const selectedTheme = themes[Math.floor(epicRoll * themes.length)];

      crateResult = { 
 theme: selectedTheme,
 rarity: 'Epic',
      };
    } else { // 2% chance for Legendary (0.98 to 1.00)
      const legendaryRoll = Math.random();
      const themes = ['Midnight Theme', 'America Theme', 'Ender Pearl Theme'];
      const selectedTheme = themes[Math.floor(legendaryRoll * themes.length)];

      crateResult = {
 theme: selectedTheme,
 rarity: 'Legendary',
      };

    }
    return crateResult;
  }
  const getRarityColor = (rarity: string) => {
    switch (rarity) { // Corrected switch statement to use rarity string
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
        </View>
      ) : (
        <View style={styles.contentContainer}>

        </View>

      )}
      {lootCrateResult && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.claimButton]} onPress={() => console.log('Claim pressed')}>
            <Text style={styles.buttonText}>Claim</Text>
          </TouchableOpacity>{/* Changed console.log to navigation.navigate */}
          <TouchableOpacity style={[styles.button, styles.claimAndEquipButton]} onPress={() => navigation.navigate('index')}>
            <Text style={styles.buttonText}>Claim and Equip</Text>
          </TouchableOpacity>
        </View>        

      )}
      {isAnimating && (
 <Animated.Image
 source={crateImage}
 style={[styles.crateImage, animatedCrateStyle]}
 resizeMode="contain" />
      )}
      <View style={styles.openAnotherButtonContainer}>
      <Button
        title={lootCrateResult ? 'Open Another' : 'Open Crate'}
        onPress={() => {
          setIsAnimating(true);
          const crateResult = handleOpenCrate(); setResult(crateResult);
        }} />
    </View>
    </View>
  );
}
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
    flexDirection: 'row', // Arrange buttons horizontally
 position: 'absolute',
 bottom: 90, // Adjust vertical position as needed
    justifyContent: 'space-around',
 },
  button: { 
 paddingVertical: 15, 
    paddingHorizontal: 20,
    borderRadius: 5,
  },
 claimButton: {
 position: 'absolute',
    left: '50%',
    marginLeft: -130, // Adjust based on button width and desired margin
    backgroundColor: 'green',
    marginRight: 100, // Increased margin to the right
  },
  claimAndEquipButton: {
    backgroundColor: 'blue', // Example background color
    marginLeft: 150,
 },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },  
  rarityText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  crateImage: {
    position: 'absolute', // Position absolutely for animation
    width: 200,
    height: 200,
    top: '50%', // Center vertically
    left: '50%', // Center horizontally
 transform: [{ translateX: -100 }, { translateY: -100 }],
  },
  openAnotherButtonContainer: {
    position: 'absolute', bottom: 50, // Position absolutely at the bottom
    alignSelf: 'center',
  }
});

export default OpenCrateScreen;

