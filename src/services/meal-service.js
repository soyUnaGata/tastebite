import api from './api';

class MealService {
    async search(id){
        return await api.get(`lookup.php?i=${id}`)
        .then((response) => response.data) 
        .then(({meals}) => {
            if(!meals || !meals.length) return;
            const meal = meals[0];   
            return {
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
              };

        })
    }
}

export default new MealService();