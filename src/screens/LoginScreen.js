import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  CheckBox,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AuthService from '../services/auth';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async () => {
    console.log('E-posta:', email);
    console.log('Şifre:', password);
    console.log('Beni Hatırla:', rememberMe);

    try {
      const response = await AuthService.login(email, password);
      console.log('Giriş başarılı:', response);
      navigation.navigate('Home');
    } catch (error) {
      console.error('Giriş hatası:', error);
      return;
    }
  };

  const handleForgotPassword = () => {
    console.log('Şifremi unuttum');
    navigation.navigate('ForgotPassword');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>KULLANICI GİRİŞİ</Text>

      {/* E-posta input */}
      <View style={styles.inputWrapper}>
        <Icon name="email-outline" size={20} color="#999" style={styles.icon} />
        <TextInput
          placeholder="E-posta"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>

      {/* Şifre input */}
      <View style={styles.inputWrapper}>
        <Icon name="lock-outline" size={20} color="#999" style={styles.icon} />
        <TextInput
          placeholder="Şifre"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={secureText}
          autoCapitalize="none"
          autoCorrect={false}
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

      {/* Beni hatırla ve Şifremi unuttum */}
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={() => setRememberMe(!rememberMe)}
        >
          <Icon
            name={rememberMe ? 'checkbox-marked' : 'checkbox-blank-outline'}
            size={20}
            color="#7C3AED"
          />
          <Text style={styles.rememberText}> Beni Hatırla</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotText}>Şifremi unuttum</Text>
        </TouchableOpacity>
      </View>

      {/* Giriş Yap butonu */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Giriş Yap</Text>
      </TouchableOpacity>

      <Text style={styles.or}>veya</Text>

      {/* Kayıt Ol butonu */}
      <TouchableOpacity 
        style={styles.outlinedButton}
        onPress={() => navigation.navigate('UserTypeSelect')}
        >
        <Text style={styles.outlinedText}>Kayıt Ol</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EADCF8',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 30,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    width: '100%',
  },
  icon: {
    marginRight: 5,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberText: {
    color: '#555',
    fontSize: 14,
  },
  forgotText: {
    color: '#7C3AED',
    fontSize: 14,
  },
  button: {
    backgroundColor: '#7C3AED',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  or: {
    marginVertical: 10,
    color: '#666',
  },
  outlinedButton: {
    borderWidth: 2,
    borderColor: '#7C3AED',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  outlinedText: {
    color: '#7C3AED',
    fontWeight: '600',
  },
});