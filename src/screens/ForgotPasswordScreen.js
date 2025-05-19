import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AuthService from '../services/auth';

const ForgotPasswordScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleForgotPassword = async () => {
        if (email.trim() === '') {
            setErrorMessage('Lütfen e-posta adresinizi girin.');
            return;
        }
        
        try {
            const response = await AuthService.forgotPassword(email);
            console.log('Şifre sıfırlama bağlantısı gönderildi:', response);
            alert('Şifre sıfırlama bağlantısı e-posta adresinize gönderildi.');
            navigation.navigate('Login');
        } catch (error) {
            console.error('Şifre sıfırlama hatası:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>ŞİFREMİ UNUTTUM</Text>
            {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
            <View style={styles.inputWrapper}>
                <TextInput
                    style={styles.input}
                    placeholder="E-posta adresi"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={handleForgotPassword}
            >
                <Text style={styles.buttonText}>Şifremi Sıfırla</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 30,
        backgroundColor: '#EADCF8',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
        color: '#333',
    },
    inputWrapper: {
        marginBottom: 10,
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 15,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#A259FF',
    },
    button: {
        backgroundColor: '#7C3AED',
        padding: 15,
        borderRadius: 20,
        alignItems: 'center',
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 16,
    },
    error: {
        color: 'red',
        marginBottom: 10,
    },
};

export default ForgotPasswordScreen;