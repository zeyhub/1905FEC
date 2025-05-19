import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const dummyData = [
  {
    id: '1',
    time: '13.00',
    date: '22.05.2025',
    description: 'Lösemi Aşı Uygulaması\nEvde Bakım Randevusu',
    phone: '05555555555'
  },
  {
    id: '2',
    time: '15.00',
    date: '23.05.2025',
    description: 'Karma Aşı Uygulaması\nKlinik Randevusu',
    phone: '05555555555'
  }
];

const AppointmentRequestsScreen = () => {
  const [appointments, setAppointments] = useState(dummyData);

  const handleApprove = (id) => {
    // API entegrasyonu yapılacak
    console.log(`Randevu onaylandı: ${id}`);
  };

  const handleReject = (id) => {
    // API entegrasyonu yapılacak
    console.log(`Randevu reddedildi: ${id}`);
  };

  const renderAppointment = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.datetime}>{item.time}  -  {item.date}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.phone}>{item.phone}</Text>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.approveButton} onPress={() => handleApprove(item.id)}>
          <Text style={styles.approveText}>Onayla</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rejectButton} onPress={() => handleReject(item.id)}>
          <Text style={styles.rejectText}>Reddet</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bekleyen Randevu Talepleri</Text>
      <FlatList
        data={appointments}
        renderItem={renderAppointment}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0e6fc',
    paddingTop: 60,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
  },
  list: {
    paddingHorizontal: 20,
  },
  card: {
    borderWidth: 1,
    borderColor: '#b494f6',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  datetime: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    marginBottom: 4,
  },
  phone: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 12,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  approveButton: {
    borderWidth: 1,
    borderColor: '#00cc66',
    paddingVertical: 6,
    paddingHorizontal: 24,
    borderRadius: 20,
  },
  approveText: {
    color: '#00cc66',
    fontWeight: 'bold',
  },
  rejectButton: {
    borderWidth: 1,
    borderColor: '#cc0000',
    paddingVertical: 6,
    paddingHorizontal: 24,
    borderRadius: 20,
  },
  rejectText: {
    color: '#cc0000',
    fontWeight: 'bold',
  },
});

export default AppointmentRequestsScreen;