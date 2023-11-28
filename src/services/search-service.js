import api from './api';

class SearchService {
    async search(value){
        return await api.get(`search.php?s=${value}`)
        .then((response) => response.data)
        .then((response) => {
          if (!response.meals) return [];
          const meal = response.meals[0];
          const ingridients  =  Object.keys(meal)
          .filter((p) => p.includes("Ingredient"))
          .map((p) => meal[p]);
          const measures = Object.keys(meal)
          .filter((p) => p.includes("Measure"))
          .map((p) => meal[p]);
          
          return response.meals.map((meal) => ({
            id: meal.idMeal,
            meal: meal.strMeal,
            drinkAlternate: meal.strDrinkAlternate,
            category: meal.strCategory,
            area: meal.strArea,
            instructions: meal.strInstructions,
            thumb: meal.strMealThumb,
            youtube: meal.strYoutube,
            ingredients: ingridients.map((val, inx) => ({ingridient: val, measure: measures[inx]})),
            source: meal.strSource,
            imageSource: meal.strImageSource,
          }));
        })
    }
}

export default new SearchService();