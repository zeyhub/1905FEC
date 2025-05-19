import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AddressesService from '../services/addresses';

const AddressListScreen = ({ navigation }) => {
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const data = await AddressesService.getAllAddresses();
        setAddresses(data);
      } catch (error) {
        console.error('Error fetching addresses:', error);
      }
    };

    fetchAddresses();

    const unsubscribe = navigation.addListener('focus', () => {
      fetchAddresses(); // Sayfa odaklandığında adresleri yeniden fetch et
    });

    return unsubscribe; // Cleanup listener
  }, [navigation]);

  const handleAddAddress = () => {
    navigation.navigate('AddAddressDetails'); // "Yeni Adres Ekle" sayfasına yönlendirme
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adreslerim</Text>

      {addresses.length > 0 ? <ScrollView contentContainerStyle={styles.listContainer}>
        {addresses.map((item) => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.cardTitle}>{item.addressTitle}</Text>
            <Text style={styles.cardText}>{item.district}</Text>
            <Text style={styles.cardText}>{item.addressNote}</Text>
            <Text style={styles.cardText}>{item.city}/{item.district}/{item.neighborhood}</Text>
          </View>
        ))}
      </ScrollView> : <Text style={{ textAlign: 'center', marginTop: 20 }}>Henüz adres eklenmedi.</Text>}

      <TouchableOpacity style={styles.addButton} onPress={handleAddAddress}>
        <Text style={styles.addButtonText}>Yeni Adres Ekle</Text>
        <Ionicons name="add-circle-outline" size={24} color="#fff" style={{ marginLeft: 8 }} />
      </TouchableOpacity>
    </View>
  );
};

export default AddressListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EADCF8',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'left',
    color: '#333',
  },
  listContainer: {
    paddingBottom: 100,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 20,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  cardText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 2,
  },
  addButton: {
    backgroundColor: '#A259FF',
    borderRadius: 20,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 0,
    marginBottom: 20,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});