import SERVICE_URLS from "../constants/service_urls";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PetService = {
    getPets: async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            const response = await fetch(SERVICE_URLS.BASE_URL + '/pets', {
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

    addPet: async (name, type, age, weight, gender, infertilty) => {
        try {
            const token = await AsyncStorage.getItem('token');
            const response = await fetch(SERVICE_URLS.BASE_URL + '/pets', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ name, type, age, weight, gender, infertilty}),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return await response.json();
        } catch (error) {
            console.error('Error adding pet:', error);
            throw error;
        }
    },
}

export default PetService;