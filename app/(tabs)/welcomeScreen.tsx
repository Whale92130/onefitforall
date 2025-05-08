import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../(tabs)/colors';

interface WelcomeScreenProps {
  onSignInPress: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onSignInPress }) => {
  const handleSignIn = () => {
    onSignInPress();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to OneFitForAll</Text>
      <TouchableOpacity onPress={handleSignIn} style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 20,
  },
  button: {
    backgroundColor: Colors.button,
    padding: 10,
    borderRadius: 5,
  },
    buttonText:{
        color: 'white'
    }
});

export default WelcomeScreen;