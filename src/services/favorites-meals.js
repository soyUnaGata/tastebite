class FavoritesMeals{
    favorites = []

    constructor(){
        this.favorites = this.getAll();
    }

    add(favorite){
        this.favorites.push(favorite);
        localStorage.setItem('favorites', JSON.stringify(this.favorites))
    }

    getAll(){
        return JSON.parse(localStorage.getItem('favorites') || '[]')
    }

    remove(favorite){
        const index = this.favorites.findIndex(item => item.id === favorite.id);
        if(index !== -1){
            this.favorites.splice(index, 1)
            localStorage.setItem('favorites', JSON.stringify(this.favorites))
        }
    }

    exists({id}){
        return this.favorites.some(f => f.id === id);
    }
}

export default new FavoritesMeals();