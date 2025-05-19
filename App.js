import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoadingScreen from './src/screens/LoadingScreen';
import LoginScreen from './src/screens/LoginScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import UserTypeSelectScreen from './src/screens/UserTypeSelectScreen';
import PetOwnerRegisterScreen from './src/screens/PetOwnerRegisterScreen';
import VeterinarianRegisterScreen from './src/screens/VeterinarianRegisterScreen';
import GroomerRegisterScreen from './src/screens/GroomerRegisterScreen';
import HotelRegisterScreen from './src/screens/HotelRegisterScreen';
import CaregiverRegisterScreen from './src/screens/CaregiverRegisterScreen';
import VerificationScreen from './src/screens/VerificationScreen';
import RegistrationSuccessScreen from './src/screens/RegistrationSuccessScreen';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import AppointmentNavigator from './src/navigation/AppointmentNavigator';




const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="UserTypeSelect" component={UserTypeSelectScreen} />
        <Stack.Screen name="PetOwnerRegister" component={PetOwnerRegisterScreen} />
        <Stack.Screen name="VeterinarianRegister" component={VeterinarianRegisterScreen} />
        <Stack.Screen name="GroomerRegister" component={GroomerRegisterScreen} />
        <Stack.Screen name="HotelRegister" component={HotelRegisterScreen} />
        <Stack.Screen name="CaregiverRegister" component={CaregiverRegisterScreen} />
        <Stack.Screen name="Verification" component={VerificationScreen} />
        <Stack.Screen name="RegisterSuccess" component={RegistrationSuccessScreen} />
        <Stack.Screen name="Home" component={BottomTabNavigator} />
        <Stack.Screen name="AppointmentNavigator" component={AppointmentNavigator} />
        
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}