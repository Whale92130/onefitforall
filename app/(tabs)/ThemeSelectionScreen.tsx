import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Colors, switchTheme, themes } from './colors';

export default function App() {
  const [themeVersion, setThemeVersion] = useState<'light' | 'dark' | 'goodBoy' | 'CCA'>('light');

  const applyTheme = (name: typeof themeVersion) => {
    switchTheme(name);
    setThemeVersion(name);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: Colors.background }]}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Text style={[styles.title, { color: Colors.textPrimary }]}>
          Current Theme: {themeVersion}
        </Text>
        {Object.keys(themes).map((theme) => (
          <View key={theme} style={{ marginVertical: 5 }}>
            <Button
              title={`Switch to ${theme}`}
              color={Colors.button}
              onPress={() => applyTheme(theme as keyof typeof themes)}
            />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
