import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const userTypes = [
  {
    id: 'pet_owner',
    label: 'Evcil Hayvan Sahibi',
    image: require('../../assets/images/pet_owner.png'),
    screen: 'PetOwnerRegister',
  },
  {
    id: 'veterinarian',
    label: 'Veteriner',
    image: require('../../assets/images/veterinarian.png'),
    screen: 'VeterinarianRegister',
  },
  {
    id: 'groomer',
    label: 'Kuaför',
    image: require('../../assets/images/groomer.png'),
    screen: 'GroomerRegister',
  },
  {
    id: 'hotel',
    label: 'Otel Sahibi',
    image: require('../../assets/images/hotel.png'),
    screen: 'HotelRegister',
  },
  {
    id: 'caregiver',
    label: 'Gönüllü Bakıcı',
    image: require('../../assets/images/caregiver.png'),
    screen: 'CaregiverRegister',
  },
];

const UserTypeSelectScreen = ({ navigation }) => {
  const [selectedType, setSelectedType] = useState(null);

  const handleSelect = (type) => {
    setSelectedType(type.id);
    setTimeout(() => {
      navigation.navigate(type.screen); // Seçilen ekranlara yönlendirme yap
    }, 300);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.card,
        selectedType === item.id && styles.selectedCard, // Seçim yapıldığında efekt
      ]}
      onPress={() => handleSelect(item)}
    >
      <Image source={item.image} style={styles.icon} />
      <Text style={styles.cardLabel}>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#EADCF8' }}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Icon name="arrow-left" size={24} color="#000" />
        <Text style={{ fontSize: 16, color: '#000' }}>Geri</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.title}>KULLANICI TÜRÜNÜ SEÇİNİZ</Text>
        <FlatList
          data={userTypes}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.grid}
        />
      </View>
    </SafeAreaView>
  );
};

export default UserTypeSelectScreen;

const styles = StyleSheet.create({
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    left: 20,
    zIndex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#EADCF8',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  grid: {
    justifyContent: 'center',
  },
  card: {
    width: 120,
    height: 120,
    backgroundColor: '#fff',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    elevation: 5,
    shadowColor: '#7C3AED',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },
  selectedCard: {
    borderColor: '#7C3AED',
    borderWidth: 2,
  },
  icon: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  cardLabel: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',
  },
});