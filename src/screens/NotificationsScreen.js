import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import NotificationService from '../services/notification';

const NotificationsScreen = ({ navigation }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const data = await NotificationService.getAllNotifications();
        setNotifications(data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    }
    fetchNotifications();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.notificationCard}>
      <Text>{item.message}</Text>
      <Text>{item.type}</Text>
      <Text>{new Date(item.created_at).toLocaleDateString()}</Text>
      <Text>{item.is_read ? 'Okundu' : 'Okunmadı'}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 16 }}>
        Bildirimler
      </Text>
      {notifications.length === 0 && (
        <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 16 }}>
          Henüz bildirim yok
        </Text>
      )}
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingVertical: 20 }}
        style={{ width: '100%' }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EADCF8',
    paddingHorizontal: 20,
  },
  notificationCard: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});

export default NotificationsScreen;