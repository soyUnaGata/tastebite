import api from "./api";

class RandomMeal {
  async getRandomMeal() {
    return await api
      .get("random.php")
      .then((response) => response.data)
      .then((response) => {
        if (!response.meals) return [];
        const meal = response.meals[0];
        const ingridients = Object.keys(meal)
          .filter((p) => p.includes("Ingredient"))
          .map((p) => meal[p]);
        const measures = Object.keys(meal)
          .filter((p) => p.includes("Measure"))
          .map((p) => meal[p]);

        return response.meals.map((meal) => ({
          id: meal.idMeal,
          meal: meal.strMeal,
          category: meal.strCategory,
          area: meal.strArea,
          instructions: meal.strInstructions,
          thumb: meal.strMealThumb,
          ingredients: ingridients.map((val, inx) => ({
            ingridient: val,
            measure: measures[inx],
          })),
          youtube: meal.strYoutube,
        }));
      });
  }
}

export default new RandomMeal();
