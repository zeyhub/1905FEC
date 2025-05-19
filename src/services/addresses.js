import AsyncStorage from "@react-native-async-storage/async-storage";
import SERVICE_URLS from "../constants/service_urls";

const AddressesService = {
    async getAllAddresses() {
        try {
            const token = await AsyncStorage.getItem('token');
            const response = await fetch(`${SERVICE_URLS.BASE_URL}/addresses`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });
            if (!response.ok) {
                throw new Error('Adresler alınamadı.');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching addresses:', error);
            throw error;
        }
    },

    async addAddress(addressLine,
        city,
        district,
        neighborhood,
        building,
        floor,
        apartment,
        addressNote,
        addressTitle,
        isDefault) {
        try {
            const token = await AsyncStorage.getItem('token');
            const response = await fetch(`${SERVICE_URLS.BASE_URL}/addresses`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    addressLine,
                    city,
                    district,
                    neighborhood,
                    building,
                    floor,
                    apartment,
                    addressNote,
                    addressTitle,
                    isDefault
                }),
            });
            if (!response.ok) {
                throw new Error('Adres eklenemedi.');
            }
            return await response.json();
        } catch (error) {
            console.error('Error adding address:', error);
            throw error;
        }
    },
}

export default AddressesService;