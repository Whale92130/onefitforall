import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Colors } from '../(tabs)/colors';
import { useNavigation } from 'expo-router'; // Assuming this is correct based on the file path

export default function OpenCrateScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('crates')}>
      <Image source={require('../../assets/images/crate.png')} style={styles.image} />
      <Text style={styles.text}>Open Crate</Text>
    </TouchableOpacity>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 150,
    height: 150,
    borderRadius: 20,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.textPrimary
  }
});