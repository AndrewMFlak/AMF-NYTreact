import axios from "axios";

const APIkey = "?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931"

let searchTerm = "Russia";


export default {
    getRandomArticle: function () {
        return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json" + APIkey);
    },
    getSearchedArticle: function () {
        return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json" + APIkey + "&q=" + searchTerm);
    }

};