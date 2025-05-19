import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AddAddressScreen = ({ navigation }) => {
  const [address, setAddress] = useState('');

  const handleSave = () => {
    // Adres kaydetme işlemi burada yapılacak
    console.log('Adres kaydedildi:', address);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Başlık */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>FurEverCare</Text>
      </View>

      {/* Arama kutusu */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#A259FF" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Mahalle, sokak veya cadde ara"
          placeholderTextColor="#333"
          value={address}
          onChangeText={setAddress}
        />
      </View>

      {/* Konum kullan butonu */}
      <TouchableOpacity style={styles.locationButton}>
        <Ionicons name="location-outline" size={18} color="#A259FF" style={{ marginRight: 6 }} />
        <Text style={{ color: '#A259FF', fontWeight: '500' }}>Bulunduğum Konumu Kullan</Text>
      </TouchableOpacity>

      {/* Kaydet butonu */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddAddressScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EADCF8',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  headerTitle: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3EFFF',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  locationButton: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#A259FF',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#F9F2FF',
  },
  saveButton: {
    backgroundColor: '#A259FF',
    borderRadius: 20,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 30,
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});