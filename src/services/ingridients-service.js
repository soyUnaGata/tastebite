import api from "./api";

class IngridientsService {
  async getAllIngridients() {
    return await api
      .get("list.php?i=list")
      .then((response) => response.data)
      .then((response) => {
        if (!response.meals) return [];
        return response.meals.map((meal) => ({
          id: meal.idIngredient,
          description: meal.strDescription,
          ingridient: meal.strIngredient,
          ingridientImg: api + `ingredients/${ingridient}`,
        }));
      });
  }
}

export default new IngridientsService();
