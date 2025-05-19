import SERVICE_URLS from "../constants/service_urls";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthService = {
    async login (email, password) {
        const response = await fetch(SERVICE_URLS.BASE_URL + '/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })

        if (!response.ok) {
            console.error('Login failed:', response.status, response.statusText);
            throw new Error('Login failed');
        }

        const data = await response.json();
        await AsyncStorage.setItem('token', data.token);
        return data;
    },

    async forgotPassword(email) {
        const response = await fetch(SERVICE_URLS.BASE_URL + '/auth/forgot-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });

        if (!response.ok) {
            throw new Error('Request failed');
        }

        const data = await response.json();
        return data;
    },

    async registerPetOwner(name, surname, email, phone_number, password) {
        const response = await fetch(SERVICE_URLS.BASE_URL + '/auth/register/petowner', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, surname, email, phone_number, password }),
        });

        if (!response.ok) {
            throw new Error('Register failed');
        }

        const data = await response.json();
        return data;
    },

    async registerVeterinarian(name, surname, email, phone_number, password, clinic_name, district, neighborhood, tax_document) {
        const response = await fetch(SERVICE_URLS.BASE_URL + '/auth/register/veterinarian', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, surname, email, phone_number, password, clinic_name, district, neighborhood, tax_document }),
        });

        if (!response.ok) {
            throw new Error('Register failed');
        }

        const data = await response.json();
        return data;
    },

    async registerGroomer(name, surname, email, phone_number, password, groomer_name, district, neighborhood, lisence_document) {
        const response = await fetch(SERVICE_URLS.BASE_URL + '/auth/register/groomer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, surname, email, phone_number, password, groomer_name, district, neighborhood, lisence_document })
        });

        if (!response.ok) {
            throw new Error('Register failed');
        }

        const data = await response.json();
        return data;
    },

    async registerHotel(name, surname, email, phone_number, password, hotel_name, district, neighborhood, lisence_document) {
        const response = await fetch(SERVICE_URLS.BASE_URL + '/auth/register/hotel', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, surname, email, phone_number, password, hotel_name, district, neighborhood, lisence_document })
        });

        if (!response.ok) {
            throw new Error('Register failed');
        }

        const data = await response.json();
        return data;
    },

    async registerCaregiver(name, surname, email, phone_number, password, district, neighborhood) {
        const response = await fetch(SERVICE_URLS.BASE_URL + '/auth/register/caregiver', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, surname, email, phone_number, password, district, neighborhood })
        });

        if (!response.ok) {
            throw new Error('Register failed');
        }

        const data = await response.json();
        return data;
    },
};

export default AuthService;