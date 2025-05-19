import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';

const sliderData = [
  {
    id: '1',
    image: 'https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg',
    title: 'Veteriner Randevunuzu Kolayca Alın',
  },
  {
    id: '2',
    image: 'https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg',
    title: 'Evde Veteriner Hizmeti',
  },
    {
    id: '3',
    image: 'https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg',
    title: 'Evde Kuaför Hizmeti',
  },
    {
    id: '4',
    image: 'https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg',
    title: 'Otel Randevunuzu Oluşturun',
  },
    {
    id: '5',
    image: 'https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg',
    title: 'Size En Uygun Bakıcıyı Bulun',
  },
];

const HomePageScreen = ({ navigation }) => {
  const renderSliderItem = ({ item }) => (
    <View style={styles.sliderItem}>
      <Image source={item.image} style={styles.sliderImage} />
      <Text style={styles.sliderText}>{item.title}</Text>
    </View>
  );

  const handleVeterinaryAppointment = () => {
    console.log('Veterinary appointment booked');
    navigation.navigate('AppointmentNavigator', {
      screen: 'VeterinaryAppointment',
    });
  }

  const handleHomeCareAppointment = () => {
    console.log('Home care appointment booked');
    navigation.navigate('AppointmentNavigator', {
      screen: 'HomeCareAppointment',
    });
  }

  const handleGroomingAppointment = () => {
    console.log('Grooming appointment booked');
    navigation.navigate('AppointmentNavigator', {
      screen: 'GroomingAppointment',
    });
  }

  const handleHomeGroomingAppointment = () => {
    console.log('Home grooming appointment booked');
    navigation.navigate('AppointmentNavigator', {
      screen: 'HomeGroomingAppointment',
    });
  }

  const handleHotelReservation = () => {
    console.log('Hotel reservation made');
    navigation.navigate('AppointmentNavigator', {
      screen: 'HotelReservation',
    });
  }
  const handleIndividualCaregiver = () => {
    console.log('Individual caregiver found');
    navigation.navigate('AppointmentNavigator', {
      screen: 'IndividualCaregiver',
    });
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.back}>{'< Geri'}</Text>
        <Text style={styles.logoText}>🐾 FurEverCare</Text>
      </View>

      <FlatList
        data={sliderData}
        renderItem={renderSliderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.slider}
      />

      <Text style={styles.sectionTitle}>HİZMETLERİMİZ</Text>

      <View style={styles.buttonContainer}>
        <CustomButton text="Veteriner Randevusu Al" onPress={handleVeterinaryAppointment} />
        <CustomButton text="Evde Bakım Randevusu Al" onPress={handleHomeCareAppointment} />
        <CustomButton text="Kuaför Randevusu Al" onPress={handleGroomingAppointment} />
        <CustomButton text="Evde Kuaför Randevusu Al" onPress={handleHomeGroomingAppointment} />
        <CustomButton text="Otel Rezervasyonu Yap" onPress={handleHotelReservation} />
        <CustomButton text="Bireysel Bakıcı Bul" onPress={handleIndividualCaregiver} />
      </View>
    </ScrollView>
  );
};

const CustomButton = ({ text, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
);

export default HomePageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EADCF8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    alignItems: 'center',
  },
  back: {
    fontSize: 16,
    color: '#333',
  },
  logoText: {
    fontSize: 18,
    fontWeight: '600',
  },
  slider: {
    marginBottom: 20,
  },
  sliderItem: {
    marginHorizontal: 10,
    alignItems: 'center',
  },
  sliderImage: {
    width: 280,
    height: 140,
    borderRadius: 12,
  },
  sliderText: {
    marginTop: 5,
    fontSize: 14,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
    color: '#222',
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#fff',
    borderWidth: 1.5,
    borderColor: '#A86DFF',
    borderRadius: 15,
    paddingVertical: 12,
    paddingHorizontal: 30,
    marginVertical: 8,
    width: '85%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#7C3AED',
    fontSize: 16,
    fontWeight: '500',
  },
});