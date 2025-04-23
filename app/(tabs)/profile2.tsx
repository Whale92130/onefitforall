import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Profile() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
        <TouchableOpacity style={styles.settingsButton}>
          <Ionicons name="settings-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.profileSection}>
        <TouchableOpacity style={styles.profilePictureArea}>
          <Image
            source={{ uri: 'https://via.placeholder.com/150' }}
            style={styles.profilePicture}
          />
        </TouchableOpacity>
        <Text style={styles.username}>Username</Text>
      </View>

      <View style={styles.goalsBar}>
        <Text>Goals Progress</Text>
      </View>

      <View style={styles.friendsBar}>
        <Text>Friends (100)</Text>
      </View>

      <View style={styles.shopCratesContainer}>
        <TouchableOpacity style={styles.shopButton} onPress={() => {
          router.push("/Shop");
        }}>
          <Text>Shop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cratesButton} onPress={() => {
          router.push("/Crates");
        }}>
          <Text>Crates</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  settingsButton: {
    padding: 10,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePictureArea: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    marginBottom: 10,
  },
  profilePicture: {
    width: '100%',
    height: '100%',
  },
  username: {
    fontSize: 18,
    fontWeight: '600',
  },
  goalsBar: {
    backgroundColor: '#e0e0e0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  friendsBar: {
    backgroundColor: '#e0e0e0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  shopCratesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  shopButton: {
    backgroundColor: '#c0c0c0',
    padding: 15,
    borderRadius: 10,
  },
  cratesButton: {
    backgroundColor: '#c0c0c0',
    padding: 15,
    borderRadius: 10,
  },
});