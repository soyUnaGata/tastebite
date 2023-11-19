import api from './api';

class ImagesService {
    async getAllImages(){
        return await api.get(`search.php?s=`)
        .then((response) => response.data)
        .then((response) => {
          if (!response.meals) return [];
          return response.meals.map((meal) => ({
            thumb: meal.strMealThumb,
          }));
        })
    }
}

export default new ImagesService();