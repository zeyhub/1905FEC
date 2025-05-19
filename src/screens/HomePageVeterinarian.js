import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomePageVeterinarian = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>FurEverCare</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('TodaysAppointments')}
      >
        <Text style={styles.buttonText}>Bugünkü Randevular</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('UpcomingAppointments')}
      >
        <Text style={styles.buttonText}>Yaklaşan Randevular</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AppointmentRequests')}
      >
        <Text style={styles.buttonText}>Randevu Talepleri</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomePageVeterinarian;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EADCF8',
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 40,
  },
  button: {
    borderWidth: 1.5,
    borderColor: '#A259FF',
    borderRadius: 10,
    paddingVertical: 14,
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  buttonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: '600',
  },
});