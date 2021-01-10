const axios = require('axios');
const asyncHandler = require("../middlewares/asyncHandler");

const URL = "https://graphql.anilist.co";
const queries = require('../queries/queries');

/**
 * Get all genres
 */
exports.getGenres = asyncHandler(async (req, res, next) => {
    let body = {
        "query": queries.allCategories
    }
    axios.post(URL, body).then(response => {
        if(response.status == 200) {
            let json = response.data["data"]["GenreCollection"];
            let output = [];
            json.forEach(element => {
                genreItem = {};
                genreItem.name = element;
                genreItem.type = "category";
                output.push(genreItem);
            });
            res.status(200).json(output);
        }
    });
});

/**
 * Get a list of anime based on the input category
 */
exports.getMediaOfCategory = asyncHandler(async (req, res, next) => {
    let type = req.params.type;
    let categoryName = req.params.genre;
    let page = req.query.page;
    let perPage = req.query.perPage;
    let variables = {
        'type': type,
        'genre': categoryName,
        'page': page,
        'perPage': perPage
    }
    let body = {
        'query': queries.listMediaOfCategory,
        'variables': variables
    }
    axios.post(URL, body).then(response => {
        if(response.status == 200) {
            let json = response.data["data"];
            res.status(200).send(json);
        }
    });
});

/**
 * Search for anime based on the input title
 */
exports.searchMedia = asyncHandler(async (req, res, next) => {
    let type = req.params.type;
    let title = req.params.title;
    let page = req.query.page;
    let perPage = req.query.perPage;
    
    let variables = {
        'type': type,
        'search': title,
        'page': page,
        'perPage': perPage
    }
    let body = {
        'query': queries.animeSearch,
        'variables': variables
    }

    axios.post(URL, body).then(response => {
        if(response.status == 200) {
            let json = response.data["data"];
            res.status(200).send(json);
        }
    });
});