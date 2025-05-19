// services/veterinarian.js
import SERVICE_URLS from '../constants/service_urls';

const VeterinarianService = {
  async getAll() {
    const response = await fetch(`${SERVICE_URLS.BASE_URL}/veterinarians`);
    if (!response.ok) {
      throw new Error('Veterinerler alınamadı.');
    }
    return await response.json();
  }
};

export default VeterinarianService;