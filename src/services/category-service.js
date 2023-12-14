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

  async getCategory(category) {
    return await api
      .get(`filter.php?c=${category}`)
      .then((response) => response.data)
      .then((response) => {
        if (!response.meals) return [];
        return response.meals.map((meal) => ({
          id: meal.idMeal,
          meal: meal.strMeal,
          thumb: meal.strMealThumb,
        }));
      });
  }
}

export default new CategoryService();
