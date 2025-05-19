import React, { useState } from 'react';
import { Text, View } from 'react-native';

const HomeCareAppointmentScreen = ({ navigation }) => {
    const handleBack = () => {
        navigation.goBack();
    };
    
    return (
        <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.back} onPress={handleBack}>{'< Geri'}</Text>
            <Text style={styles.logoText}>🐾 FurEverCare</Text>
        </View>
    
        <View style={styles.content}>
            <Text style={styles.title}>Evde Bakım Randevusu</Text>
            <Text style={styles.description}>Evde bakım randevunuzu kolayca alın.</Text>
        </View>
    
        {/* Add your appointment booking form or functionality here */}
    
        </View>
    );
    }

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f8f8f8',
    },
    back: {
        fontSize: 18,
        color: '#007BFF',
        marginRight: 10,
    },
    logoText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    content: {
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: '#555',
    },
};

export default HomeCareAppointmentScreen;