import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';
import AddressesService from '../services/addresses';

const AddAddressDetails = ({ navigation }) => {
  const [form, setForm] = useState({
    addressLine: '',
    city: '',
    district: '',
    neighborhood: '',
    building: '',
    floor: '',
    apartment: '',
    addressNote: '',
    addressTitle: ''
  });

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSave = async () => {
    try {
      await AddressesService.addAddress(
        form.addressLine,
        form.city,
        form.district,
        form.neighborhood,
        form.building,
        form.floor,
        form.apartment,
        form.addressNote,
        form.addressTitle,
        false // isDefault
      );
      navigation.goBack();
    } catch (error) {
      console.error('Error saving address:', error);
    }
    
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{ marginTop: 40 }}>
        <TextInput
          placeholder="Adres (Cadde, Sokak ve Diğer Bilgiler)"
          style={styles.input}
          value={form.addressLine}
          onChangeText={(val) => handleChange('addressLine', val)}
        />
        <View style={styles.row}>
          <TextInput
            placeholder="İl"
            style={[styles.input, styles.halfInput]}
            value={form.city}
            onChangeText={(val) => handleChange('city', val)}
          />
          <TextInput
            placeholder="İlçe"
            style={[styles.input, styles.halfInput]}
            value={form.district}
            onChangeText={(val) => handleChange('district', val)}
          />
        </View>
        <TextInput
          placeholder="Mahalle"
          style={styles.input}
          value={form.neighborhood}
          onChangeText={(val) => handleChange('neighborhood', val)}
        />
        <View style={styles.row}>
          <TextInput
            placeholder="Bina no"
            style={[styles.input, styles.thirdInput]}
            value={form.building}
            onChangeText={(val) => handleChange('building', val)}
          />
          <TextInput
            placeholder="Kat"
            style={[styles.input, styles.thirdInput]}
            value={form.floor}
            onChangeText={(val) => handleChange('floor', val)}
          />
          <TextInput
            placeholder="Daire"
            style={[styles.input, styles.thirdInput]}
            value={form.apartment}
            onChangeText={(val) => handleChange('apartment', val)}
          />
        </View>
        <TextInput
          placeholder="Adres Tarifi"
          style={styles.input}
          value={form.addressNote}
          onChangeText={(val) => handleChange('addressNote', val)}
        />
        <TextInput
          placeholder="Adres Başlığı (Ev Adresim, İş Adresim)"
          style={styles.input}
          value={form.addressTitle}
          onChangeText={(val) => handleChange('addressTitle', val)}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Kaydet</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default AddAddressDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EADCF8',
    paddingHorizontal: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#A259FF',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 12,
    fontSize: 14,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    flex: 0.48,
  },
  thirdInput: {
    flex: 0.3,
    
  },
  button: {
    backgroundColor: '#A259FF',
    borderRadius: 20,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});