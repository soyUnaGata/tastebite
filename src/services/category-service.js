import api from "./api";

class CategoryService {
  async getAll() {
    return await api
      .get("categories.php")
      .then((response) => response.data)
      .then((response) => {
        if (!response.categories) return [];
        return response.categories.map((category) => ({
          id: category.idCategory,
          category: category.strCategory,
          description: category.strCategoryDescription,
          img: category.strCategoryThumb,
        }));
      });
  }
}

export default new CategoryService();
