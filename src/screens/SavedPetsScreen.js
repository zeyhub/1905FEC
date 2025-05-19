import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, LayoutAnimation, Platform, UIManager } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PetService from '../services/pet';

// Android için animasyonları etkinleştir
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const SavedPetsScreen = ({ navigation }) => {
  const [pets, setPets] = useState([]);
  const [expandedPetId, setExpandedPetId] = useState(null);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const data = await PetService.getPets();
        setPets(data);
      } catch (error) {
        console.error('Error fetching pets:', error);
      }
    };
    fetchPets();
  }, []);

  const toggleExpand = (id) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedPetId(prevId => (prevId === id ? null : id));
  };

  const renderPet = ({ item }) => {
    const isExpanded = item.id === expandedPetId;
    return (
      <TouchableOpacity onPress={() => toggleExpand(item.id)} activeOpacity={0.8}>
        <View style={styles.petCard}>
          <View style={styles.petHeader}>
            <Text style={styles.petName}>{item.name}</Text>
            <Ionicons name={isExpanded ? 'chevron-up' : 'chevron-down'} size={20} color="#333" />
          </View>
          {isExpanded && (
            <View style={styles.details}>
              <Text style={styles.detailText}>Tür: {item.type}</Text>
              <Text style={styles.detailText}>Yaş: {item.age}</Text>
              <Text style={styles.detailText}>Kilo: {item.weight}</Text>
              <Text style={styles.detailText}>Cinsiyet: {item.gender}</Text>
              <Text style={styles.detailText}>Kısır mı?: {item.infertilty ? 'Evet' : 'Hayır'}</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
       <Text style={styles.pageTitle}>Kayıtlı Dostlarım</Text>
      {pets.length === 0 ? (
        <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 16 }}>
          Henüz kaydedilmiş dost yok
        </Text>
      ) : (
        <FlatList
          data={pets}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderPet}
          contentContainerStyle={{ paddingVertical: 20 }}
        />
      )}

      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddPet')}>
        <Text style={styles.addButtonText}>Yeni Dost Ekle</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SavedPetsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EADCF8',
    paddingHorizontal: 20,
  },
  petCard: {
    backgroundColor: '#fff',
    borderRadius: 36,
    padding: 30,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  petHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  petName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  details: {
    marginTop: 10,
    paddingLeft: 10,
  },
  detailText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  addButton: {
    backgroundColor: '#A259FF',
    borderRadius: 20,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 20,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },

  pageTitle: {
  fontSize: 22,
  fontWeight: 'bold',
  marginTop: 60,
  marginBottom: 10,
  color: '#333',
  textAlign: 'center',
},
list: {
  paddingTop: 10, // başlıktan sonra boşluk 
},
});