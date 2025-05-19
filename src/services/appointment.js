import SERVICE_URLS from '../constants/service_urls';

const AppointmentService = {
  // Randevu oluşturma
  async createAppointment(petId, vetId, date, note) {
    const response = await fetch(`${SERVICE_URLS.BASE_URL}/appointments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        petId,
        veterinarianId: vetId,
        appointmentDate: date,
        note,
      }),
    });

    if (!response.ok) {
      throw new Error('Randevu oluşturulamadı.');
    }

    return await response.json();
  },

  // Kullanıcıya ait randevuları getirme (isteğe bağlı)
  async getAppointmentsByUser(userId) {
    const response = await fetch(`${SERVICE_URLS.BASE_URL}/appointments/user/${userId}`);
    if (!response.ok) {
      throw new Error('Randevular alınamadı.');
    }
    return await response.json();
  },
};

export default AppointmentService; 