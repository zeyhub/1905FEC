import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AuthService from '../services/auth';

const CaregiverRegisterScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [district, setDistrict] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [secureText, setSecureText] = useState(true);

  const handleRegister = async () => {
    console.log('İlçe:', district);
    console.log('Mahalle:', neighborhood);
    const [name, surname] = fullName.split(' ');
    try {
      let result = await AuthService.registerCaregiver(name, surname, email, phone, password, district, neighborhood);
      console.log('Kayıt başarılı:', JSON.stringify(result));
      if (result.user.id) {
        navigation.navigate('Verification' , { userType: 'caregiver' });
      }
    }
    catch (error) {
      console.error('Kayıt hatası:', error);
      alert('Kayıt işlemi başarısız oldu. Lütfen bilgilerinizi kontrol edin.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>EVDE BAKICI KAYIT</Text>

        {/* Ad Soyad */}
        <View style={styles.inputWrapper}>
          <Icon name="account-outline" size={20} color="#999" style={styles.icon} />
          <TextInput
            placeholder="Ad Soyad"
            style={styles.input}
            value={fullName}
            onChangeText={setFullName}
          />
        </View>

        {/* E-posta */}
        <View style={styles.inputWrapper}>
          <Icon name="email-outline" size={20} color="#999" style={styles.icon} />
          <TextInput
            placeholder="E-posta"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        {/* Telefon No */}
        <View style={styles.inputWrapper}>
          <Icon name="phone-outline" size={20} color="#999" style={styles.icon} />
          <TextInput
            placeholder="Telefon no"
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
        </View>

        {/* Şifre */}
        <View style={styles.inputWrapper}>
          <Icon name="lock-outline" size={20} color="#999" style={styles.icon} />
          <TextInput
            placeholder="Şifre"
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={secureText}
          />
          <TouchableOpacity onPress={() => setSecureText(!secureText)}>
            <Icon
              name={secureText ? 'eye-off-outline' : 'eye-outline'}
              size={20}
              color="#999"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>

        {/* İlçe */}
        <View style={styles.inputWrapper}>
          <Icon name="map-marker-outline" size={20} color="#999" style={styles.icon} />
          <TextInput
            placeholder="İlçe"
            style={styles.input}
            value={district}
            onChangeText={setDistrict}
          />
        </View>

        {/* Mahalle */}
        <View style={styles.inputWrapper}>
          <Icon name="home-map-marker" size={20} color="#999" style={styles.icon} />
          <TextInput
            placeholder="Mahalle"
            style={styles.input}
            value={neighborhood}
            onChangeText={setNeighborhood}
          />
        </View>

        {/* Kayıt Ol Butonu */}
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Kayıt Ol</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CaregiverRegisterScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#EADCF8',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  icon: {
    marginRight: 5,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
  },
  button: {
    backgroundColor: '#7C3AED',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});