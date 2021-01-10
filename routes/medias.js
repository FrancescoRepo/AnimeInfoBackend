const express = require('express');
const router = express.Router();

const {
    getGenres,
    getMediaOfCategory,
    searchMedia
} = require('../controllers/medias');

router.route('/media/categories').get(getGenres);
router.route('/categories/:genre/:type').get(getMediaOfCategory);
router.route('/media/:title/:type').get(searchMedia);

module.exports = router;