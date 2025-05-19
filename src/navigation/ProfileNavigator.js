import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/ProfileScreen";
import ProfileDetailScreen from "../screens/AccountDetailScreen";
import SavedPetsScreen from "../screens/SavedPetsScreen";
import SavedAddressScreen from "../screens/SavedAddressScreen";
import ServiceHistoryScreen from "../screens/ServiceHistoryScreen";
import AddPetScreen from "../screens/AddPetScreen";
import AddAddressScreen from "../screens/AddAddressScreen";
import AddAddressDetails from "../screens/AddAddressDetails";


const Stack = createNativeStackNavigator();
const ProfileNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="ProfileDetail" component={ProfileDetailScreen} />
            <Stack.Screen name="SavedPets" component={SavedPetsScreen} />
            <Stack.Screen name="SavedAddress" component={SavedAddressScreen} />
            <Stack.Screen name="ServiceHistory" component={ServiceHistoryScreen} />
            <Stack.Screen name="AddPet" component={AddPetScreen} />
            <Stack.Screen name="AddAddress" component={AddAddressScreen} />
            <Stack.Screen name="AddAddressDetails" component={AddAddressDetails} />
           
        </Stack.Navigator>
    );
}
export default ProfileNavigator;