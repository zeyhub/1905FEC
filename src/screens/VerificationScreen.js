import React, { useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const VerificationScreen = ({ navigation, route }) => {
  const { userType } = route?.params?.userType;
  
  const [code, setCode] = useState(['', '', '', '']);
  const inputRefs = useRef([]);

  const handleChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Otomatik geçiş
    if (text && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleVerify = () => {
    const fullCode = code.join('');
    console.log('Doğrulama Kodu:', fullCode);
    if (userType === 'veterinarian' || userType === 'groomer' || userType === 'hotel') {
      navigation.navigate('RegisterSuccess');
    } else {
      navigation.navigate('Home'); // örnek: pet sahibi ise direkt uygulamaya geçer
    } 
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/icon.png')} style={styles.logo} />
      <Text style={styles.appName}>FurEverCare</Text>

      <Text style={styles.title}>DOĞRULAMA</Text>
      <Text style={styles.subtitle}>Cep telefonunuza gelen doğrulama kodunu giriniz.</Text>

      <View style={styles.codeContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputRefs.current[index] = ref)}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
            style={styles.codeInput}
            maxLength={1}
            keyboardType="number-pad"
          />
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleVerify}>
        <Text style={styles.buttonText}>Doğrula</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VerificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EADCF8',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 5,
  },
  appName: {
    fontSize: 16,
    marginBottom: 20,
    fontWeight: '500',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 30,
  },
  codeInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#7C3AED',
    paddingVertical: 14,
    paddingHorizontal: 80,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});