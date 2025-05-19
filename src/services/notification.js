import SERVICE_URLS from "../constants/service_urls";
import AsyncStorage from "@react-native-async-storage/async-storage";

const NotificationService = {
    getAllNotifications: async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            const response = await fetch(SERVICE_URLS.BASE_URL + '/notifications', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching pets:', error);
            throw error;
        }
    },
}

export default NotificationService;