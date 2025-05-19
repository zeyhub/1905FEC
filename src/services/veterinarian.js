// services/veterinarian.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import SERVICE_URLS from '../constants/service_urls';

const VeterinarianService = {
  async getAll() {
    try {
      const token = await AsyncStorage.getItem('token');
      const response = await fetch(`${SERVICE_URLS.BASE_URL}/veterinarians`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error('Veterinerler alınamadı.');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching veterinarians:', error);
      throw error;
    }
  }
};

export default VeterinarianService;