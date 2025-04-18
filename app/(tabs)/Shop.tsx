import React, { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  StyleSheet,
  View, 
  Text,
  FlatList, 
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  currency: {
    fontSize: 16,
  },
  body: {
    flex: 1,
    paddingHorizontal: 10,
  },
  itemsContainer: {
    // Changed to column to allow content to scroll vertically
    flexDirection: 'column',
    width: '100%',
    padding: 10,
  },
  item: {
    width: '46%',
    backgroundColor: '#fff',
    padding: 10,
    marginHorizontal: '2%',
    borderRadius: 5,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 14,
  },
  itemPriceError: {
    fontSize: 14,
    color: 'red',
  },
  buyButtonAffordable: {
    backgroundColor: 'green',
    padding: 8,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buyButtonUnaffordable: {
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
});

type ShopProps = {
  navigation: NativeStackNavigationProp<any>;
};const Shop: React.FC<ShopProps> = ({ navigation }) => {
  const [gold, setGold] = useState(900);


  const [items, setItems] = useState([
    { id: '1', name: 'Golden Wreath', price: 999 },
    { id: '2', name: 'Deep Space', price: 45 },
    { id: '3', name: 'Winter Solstice', price: 60 },
    { id: '4', name: 'Glitch', price: 80 },
    { id: '6', name: 'Sea Shanty', price: 120 },
    { id: '7', name: 'Football', price: 150 },
    { id: '8', name: 'Kindgom', price: 180 },
    { id: '5', name: 'Royalty', price: 1999 },
    { id: '9', name: 'Legendary Artifact', price: 500 },
    { id: '10', name: 'Magical', price: 75 },
    { id: '11', name: 'Archer', price: 90 },
    { id: '12', name: 'Electricity', price: 130 },
    { id: '13', name: 'Halloween', price: 65 },
    { id: '14', name: 'Christmas', price: 110 },
    { id: '15', name: 'Fireworks', price: 40 },
    { id: '16', name: 'Thief', price: 70 },
    { id: '17', name: 'Dragon', price: 300 },
  ]);

    const purchaseItem = (item: { id: string; name: string; price: number }) => {
    if (gold >= item.price) {
      setGold(gold - item.price);

      // Here you would typically update the user's inventory
      console.log(`Purchased ${item.name} for ${item.price}`);
    }
  };

  const renderItem = ({ item }: { item: { id: string; name: string; price: number } }) => (
    <View style={styles.item}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>Price: {item.price} gold</Text>
      <TouchableOpacity
        style={gold >= item.price ? styles.buyButtonAffordable : styles.buyButtonUnaffordable}
        onPress={() => {
          if (gold >= item.price) {
            purchaseItem(item);
          }
        }}
      >
        <Text>{gold >= item.price ? 'Buy' : 'Not enough gold'}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" /> 
        </TouchableOpacity>
        <Text style={styles.currency}>Gold: {gold}</Text>
      </View>
      <View style={styles.body}>
        <FlatList
          data={items}
          numColumns={2}
          renderItem={renderItem}
          keyExtractor={(item) => item.id} 
          contentContainerStyle={styles.itemsContainer}
        />
      </View>
    </View>
  );
}; 
export default Shop;