import { Text, TextInput, TouchableOpacity, View } from "react-native";
import PetService from "../services/pet";
import { useState } from "react";

const AddPetScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [type, settype] = useState('');
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [gender, setGender] = useState('');
    const [infertilty, setInfertily] = useState('');

    const handleAddPet = async () => {
        try {
            await PetService.addPet(name, type, age, weight, gender, infertilty);
            navigation.goBack();
        } catch (error) {
            console.error('Error adding pet:', error);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Yeni Dost Ekle</Text>
            <TextInput
                style={styles.input}
                placeholder="Dostunuzun Adı"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Dostunuzun Türü"
                value={type}
                onChangeText={settype}
            />
            <TextInput
                style={styles.input}
                placeholder="Yaşı"
                value={age}
                onChangeText={setAge}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                placeholder="Dostunuzun kilosu"
                value={weight}
                onChangeText={setWeight}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                placeholder="Dostunuzun cinsiyeti"
                value={gender}
                onChangeText={setGender}
            />
            <TextInput
                style={styles.input}
                placeholder="Kısırlık"
                value={infertilty}
                onChangeText={setInfertily}
                
            />
            <TouchableOpacity style={styles.button} onPress={handleAddPet}>
                <Text style={styles.buttonText}>Kaydet</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#EADCF8',
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
        color: '#333',
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    button: {
        backgroundColor: '#6A5ACD',
        paddingVertical: 15,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
    },
};

export default AddPetScreen;