const express = require('express');
const router = express.Router();
const controllerNews = require('../controllers/news');

router.get('/', controllerNews.list);
router.post('/', controllerNews.create);
router.patch('/:id', controllerNews.update);
router.delete('/:id', controllerNews.delete);

module.exports = router;
