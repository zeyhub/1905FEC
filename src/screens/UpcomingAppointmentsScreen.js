import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const mockAppointments = [
  {
    id: '1',
    time: '09.00',
    date: '19.05.2025',
    title: 'Kısırlaştırma Ameliyatı',
    type: 'Klinik Randevusu',
    phone: '05555555555',
  },
  {
    id: '2',
    time: '13.00',
    date: '19.05.2025',
    title: 'Lösemi Aşı Uygulaması',
    type: 'Evde Bakım Randevusu',
    phone: '05555555555',
  },
  {
    id: '3',
    time: '13.00',
    date: '20.05.2025',
    title: 'Kuduz Aşı Uygulaması',
    type: 'Klinik Randevusu',
    phone: '05555555555',
  },
  {
    id: '4',
    time: '15.00',
    date: '20.05.2025',
    title: 'Karma Aşı Uygulaması',
    type: 'Evde Bakım Randevusu',
    phone: '05555555555',
  },
];

const UpcomingAppointmentsScreen = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Normalde fetch yapılırdı, şimdilik mock data
    setAppointments(mockAppointments);
  }, []);

  const renderAppointment = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.time}>{item.time}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.type}>{item.type}</Text>
      <Text style={styles.phone}>{item.phone}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Yaklaşan Randevular</Text>
      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id}
        renderItem={renderAppointment}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default UpcomingAppointmentsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EADCF8',
    padding: 20,
  },
  pageTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 15,
    marginBottom: 15,
    borderColor: '#A259FF',
    borderWidth: 1,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  time: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  date: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 2,
  },
  type: {
    fontSize: 13,
    color: '#333',
    marginBottom: 2,
  },
  phone: {
    fontSize: 13,
    color: '#333',
  },
});