import api from './api';

class SearchService {
    async search(value){
        return await api.get(`search.php?s=${value}`)
        .then((response) => response.data)
        .then((response) => {
          if (!response.meals) return [];
          return response.meals.map((meal) => ({
            id: meal.idMeal,
            meal: meal.strMeal,
            drinkAlternate: meal.strDrinkAlternate,
            category: meal.strCategory,
            area: meal.strArea,
            instructions: meal.strInstructions,
            thumb: meal.strMealThumb,
            youtube: meal.strYoutube,
            ingredients: Object.keys(meal)
              .filter((p) => p.includes("Ingredient"))
              .map((p) => meal[p]),
            measures: Object.keys(meal)
              .filter((p) => p.includes("Measure"))
              .map((p) => meal[p]),
            source: meal.strSource,
            imageSource: meal.strImageSource,
          }));
        })
    }
}

export default new SearchService();