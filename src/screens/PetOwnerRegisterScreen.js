import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AuthService from '../services/auth';

const PetOwnerRegisterScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);

  const handleRegister = async () => {
    const [name, surname] = fullName.split(' ');
    try {
      let result = await AuthService.registerPetOwner(name, surname, email, phone, password);
      console.log('Kayıt başarılı:', JSON.stringify(result));
      if (result.user.id) {
        navigation.navigate('Verification', { userType: 'pet_owner' });
      }
    }
    catch (error) {
      console.error('Kayıt hatası:', error);
      alert('Kayıt işlemi başarısız oldu. Lütfen bilgilerinizi kontrol edin.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Geri Butonu */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Icon name="arrow-left" size={24} color="#000" />
      </TouchableOpacity>

      <Text style={styles.title}>EVCİL HAYVAN SAHİBİ KAYIT</Text>

      {/* Ad Soyad */}
      <View style={styles.inputWrapper}>
        <Icon name="account-outline" size={20} color="#999" style={styles.icon} />
        <TextInput
          placeholder="Ad Soyad"
          style={styles.input}
          value={fullName}
          onChangeText={setFullName}
          autoCapitalize='words'
          autoCorrect={false}
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
          autoCapitalize='none'
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

      {/* Kayıt Ol Butonu */}
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Kayıt Ol</Text>
      </TouchableOpacity>

      {/* Giriş Yap */}
      <Text style={styles.loginText}>Hesabınız var mı?</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginLink}>Giriş Yap</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PetOwnerRegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EADCF8',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
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
  loginText: {
    marginTop: 20,
    color: '#999',
  },
  loginLink: {
    color: '#7C3AED',
    marginTop: 5,
    fontWeight: 'bold',
  },
});