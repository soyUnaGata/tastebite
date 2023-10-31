import axios from "axios";


const recipes = axios.create({
    baseURL: "www.themealdb.com/api/json/v1/1/search.php",
    headers: {'content-type':'application/json'}
});

const instance = axios.create({
    headers: {
        "content-type": "application/json",
        'X-RapidAPI-Key': '61a375978cmshf846d6b66b3bf59p1a86dajsnb4a3a186e84a',
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    },
})

export  {recipes, instance};