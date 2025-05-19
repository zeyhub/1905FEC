import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import VeterinaryAppointmentScreen from "../screens/VeterinaryAppointmentScreen";
import HomeCareAppointmentScreen from "../screens/HomeCareAppointmentScreen";
import GroomingAppointmentScreen from "../screens/GroomingAppointmentScreen";
import HomeGroomingAppointmentScreen from "../screens/HomeGroomingAppointmentScreen";
import HotelReservationScreen from "../screens/HotelReservationScreen";
import IndividualCaregiverScreen from "../screens/IndividualCaregiverScreen";

const AppointmentNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="VeterinaryAppointment" component={VeterinaryAppointmentScreen} />
            <Stack.Screen name="HomeCareAppointment" component={HomeCareAppointmentScreen} />
            <Stack.Screen name="GroomingAppointment" component={GroomingAppointmentScreen} />
            <Stack.Screen name="HomeGroomingAppointment" component={HomeGroomingAppointmentScreen} />
            <Stack.Screen name="HotelReservation" component={HotelReservationScreen} />
            <Stack.Screen name="IndividualCaregiver" component={IndividualCaregiverScreen} />
        </Stack.Navigator>
    );
}
export default AppointmentNavigator;