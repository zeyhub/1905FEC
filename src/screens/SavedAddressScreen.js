import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AddressListScreen = ({ navigation }) => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      title: 'Ev Adresi',
      district: 'Kadıköy / İstanbul',
      details: 'Caferağa Mah., Moda Cad., No:12, Daire:4',
    },
    {
      id: 2,
      title: 'İş Adresi',
      district: 'Beşiktaş / İstanbul',
      details: 'Barbaros Mah., Levent Cad., No:8, Kat:5',
    },
  ]);

  const handleAddAddress = () => {
    navigation.navigate('AddAddressDetails'); // "Yeni Adres Ekle" sayfasına yönlendirme
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adreslerim</Text>

      <ScrollView contentContainerStyle={styles.listContainer}>
        {addresses.map((item) => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardText}>{item.district}</Text>
            <Text style={styles.cardText}>{item.details}</Text>
          </View>
        ))}
      </ScrollView>

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