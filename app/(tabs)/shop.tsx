import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../(tabs)/colors';


type Item = {
  name: string;
  price: number;
};


const Shop = () => {
  const [money, setMoney] = useState(900000);
  const [purchasedItems, setPurchasedItems] = useState<string[]>([]);
  const navigation = useNavigation();
  const items: Item[] = [
    { name: 'Golden Wreath', price: 1000000 },
    { name: 'Deep Space', price: 50000 },
    { name: 'Winter Solstice', price: 25000 },
    { name: 'Glitch', price: 15000 },
    { name: 'Sea Shanty', price: 10000 },
    { name: 'Football', price: 5000 },
  ];
 
  const buyItem = (item: Item) => {
    if (purchasedItems.includes(item.name)) {
      alert("You already own this item!");
    } else if (money >= item.price) {
        setMoney(money - item.price);
        setPurchasedItems([...purchasedItems, item.name]);
      alert(`You bought ${item.name} for ${item.price}!`);
    } else if (purchasedItems.includes(item.name)) {
 alert("You already own this item!");
    } else { alert("You don't have enough money!"); }
  };


  return (
    <View style={styles.container}>
      <View style={styles.backButtonContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.moneyText}>Money: {money}</Text>
      <ScrollView contentContainerStyle={styles.shopContainer}>
        {items.map((item, index) => (
          <TouchableOpacity key={index} style={styles.itemButton} onPress={() => buyItem(item)} >
            {/* Placeholder for image */}
            <View style={styles.imagePlaceholder}>
              {/* Image component would go here */}
              {/* <Image source={{ uri: 'https://placehold.co/200x200/D3D3D3/FFFFFF?text=Shop_Item' }} style={{ width: '100%', height: '100%' }} /> */}
            </View>
            {/* Centered Item Name */}
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={[styles.priceText, { fontSize: 14 }]}>${item.price}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonContainer: {
    position: 'absolute',
    top: 40, // Adjust as needed
    left: 20, // Adjust as needed
    zIndex: 1, // Ensure button is above other content
    backgroundColor: Colors.primary, // Background color of the box
    padding: 10, // Padding inside the box
    borderRadius: 5, // Optional: add some border radius
  },
  backButtonText: {
    fontSize: 18,
    color: Colors.textPrimary, // Text color (white in this example for better contrast)
    fontWeight: 'bold',
  },
  moneyText: { 
    fontSize: 24,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  shopContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 5, // Add some horizontal padding
  },
  itemButton: {
    width: Dimensions.get('window').width / 2 - 20, // Two items per row with margin
    height: Dimensions.get('window').width / 2 * 1.2, // Make it taller than wide
    backgroundColor: Colors.primary,
    margin: 10,
    alignItems: 'center',
    borderRadius: 10,
    padding: 10, // Add padding inside the button
  },
  imagePlaceholder: {
    width: '100%',
    flex: 1, // Take up available space for the image
    backgroundColor: '#D3D3D3', // Placeholder background
    borderRadius: 8, // Match button border radius
    marginBottom: 5, // Space between image and text
  },
  itemName: {
    fontSize: 16, // Adjust font size as needed
    textAlign: 'center', // Center item name
    color: Colors.textPrimary,
  },
  priceText: {
    fontSize: 14,
    color: Colors.textPrimary,
  },
});

export default Shop;

//https://placehold.co/200x200/D3D3D3/FFFFFF?text=Shop_Item