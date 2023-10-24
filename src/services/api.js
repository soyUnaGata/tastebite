import axios from "axios";


// const instance = axios.create({
//     baseURL: "https://api.spoonacular.com/recipes",
//     headers: {'content-type':'application/json'}
// });

const instance = axios.create({
    headers: {
        "content-type": "application/json",
        'X-RapidAPI-Key': '61a375978cmshf846d6b66b3bf59p1a86dajsnb4a3a186e84a',
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    },
})

export default instance;