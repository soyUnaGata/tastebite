class FavoritesMeals{
    favorites = []

    constructor(){
        this.favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    }

    add(favorite){
        this.favorites.push(favorite);
        localStorage.setItem('favorites', JSON.stringify(this.favorites))
    }

    getAll(){
        return JSON.parse(JSON.stringify(this.favorites))
    }

    remove(){
        const index = this.favorites.findIndex(item => item.id == favorite.id);
        if(index !== -1){
            this.favorites.splice(index, 1)
            localStorage.setItem('favorite', JSON.stringify(this.favorites))
        }
    }
}

export default new FavoritesMeals();