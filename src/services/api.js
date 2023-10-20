import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.spoonacular.com/recipes/complexSearch",
    headers: {'content-type':'application/json'}
});

export default instance;