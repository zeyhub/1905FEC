import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import PetService from '../services/pet';
import VeterinarianService from '../services/veterinarian';
import AppointmentService from '../services/appointment';

const VeterinaryAppointmentScreen = () => {
  const [pets, setPets] = useState([]);
  const [vets, setVets] = useState([]);
  const [selectedPet, setSelectedPet] = useState('');
  const [selectedVet, setSelectedVet] = useState('');
  const [date, setDate] = useState('');
  const [note, setNote] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const petsData = await PetService.getPets();
        const vetsData = await VeterinarianService.getAll();
        setPets(petsData);
        setVets(vetsData);
      } catch (error) {
        console.error('Veri alma hatası:', error);
        Alert.alert('Hata', 'Veriler yüklenemedi.');
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async () => {
    try {
      if (!selectedPet || !selectedVet || !date) {
        Alert.alert('Uyarı', 'Lütfen tüm alanları doldurun.');
        return;
      }

      await AppointmentService.createAppointment(selectedPet, selectedVet, date, note);
      Alert.alert('Başarılı', 'Randevu başarıyla oluşturuldu.');
    } catch (error) {
      Alert.alert('Hata', 'Randevu oluşturulamadı.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Evcil Hayvan Seçin</Text>
      <Picker
        selectedValue={selectedPet}
        onValueChange={(itemValue) => setSelectedPet(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="-- Seçin --" value="" />
        {pets.map((pet) => (
          <Picker.Item key={pet.id} label={pet.name} value={pet.id} />
        ))}
      </Picker>

      <Text style={styles.label}>Veteriner Seçin</Text>
      <Picker
        selectedValue={selectedVet}
        onValueChange={(itemValue) => setSelectedVet(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="-- Seçin --" value="" />
        {vets.map((vet) => (
          <Picker.Item key={vet.user.id} label={vet.user.name} value={vet.id} />
        ))}
      </Picker>

      <Text style={styles.label}>Tarih (GG-AA-YYYY)</Text>
      <TextInput
        style={styles.input}
        placeholder="12-05-2025"
        value={date}
        onChangeText={setDate}
      />

      <Text style={styles.label}>Not (Opsiyonel)</Text>
      <TextInput
        style={[styles.input, { height: 80 }]}
        multiline
        placeholder="Not eklemek istiyorsanız yazın..."
        value={note}
        onChangeText={setNote}
      />

      <Button title="Randevu Oluştur" onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f2f2f2',
  },
  label: {
    marginTop: 12,
    fontWeight: 'bold',
  },
  picker: {
    backgroundColor: 'white',
    marginVertical: 8,
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 8,
    borderRadius: 5,
  },
});

export default VeterinaryAppointmentScreen;