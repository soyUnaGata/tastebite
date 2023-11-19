import api from './api';

class CategoryService {
  async getAll() {
    return await api.get(`categories.php`).then((response) => response.data);
  }
}

export default new CategoryService();
