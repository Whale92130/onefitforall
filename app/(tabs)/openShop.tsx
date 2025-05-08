import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Colors } from '../(tabs)/colors';
import { useNavigation } from 'expo-router';

export default function OpenShopScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('shop')}>
        <Image source={require('../../assets/images/shop_icon.png')} style={styles.image} />
        <Text style={styles.text}>Open Shop</Text>
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
    tintColor: Colors.textPrimary,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.textPrimary
  }
});