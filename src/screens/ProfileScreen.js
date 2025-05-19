import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = ({ navigation }) => {
  const handleProfileDetailPress = () => {
    navigation.navigate('ProfileDetail');
  }

  const handleSavedPetsPress = () => {
    navigation.navigate('SavedPets');
  }

  const handleAddressesPress = () => {
    navigation.navigate('SavedAddress');
  }

  const handleServiceHistoryPress = () => {
    navigation.navigate('ServiceHistory');
  }

  const handleLogoutPress = () => {
    navigation.navigate('Login');
  }
  return (
    <View style={styles.container}>
      {/* Üst Kısım */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="#000" />
        <Text style={styles.title}>FurEverCare</Text>
        <Ionicons name="paw" size={24} color="#000" />
      </View>

      {/* Profil Bilgisi */}
      <View style={styles.profileSection}>
        <View style={styles.profileCircle} />
        <Text style={styles.name}>İsim Soyisim</Text>
      </View>

      {/* Seçenekler */}
      <TouchableOpacity style={styles.option} onPress={handleProfileDetailPress}>
        <Text style={styles.optionText}>Hesap Bilgilerim</Text>
        <Ionicons name="chevron-forward" size={20} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={handleSavedPetsPress}>
        <Text style={styles.optionText}>Kayıtlı Dostlarım</Text>
        <Ionicons name="chevron-forward" size={20} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={handleAddressesPress}>
        <Text style={styles.optionText}>Adreslerim</Text>
        <Ionicons name="chevron-forward" size={20} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={handleServiceHistoryPress}>
        <Text style={styles.optionText}>Hizmet Geçmişim</Text>
        <Ionicons name="chevron-forward" size={20} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={handleLogoutPress}>
        <Text style={styles.optionText}>Çıkış Yap</Text>
        <Ionicons name="chevron-forward" size={20} color="red" />
      </TouchableOpacity>

    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EADCF8',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ccc',
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  option: {
    backgroundColor: '#fff',
    borderColor: '#7C3AED',
    borderWidth: 1,
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    fontWeight: '500',
  },
});