const router = require('express').Router();

const bookController = require('../controllers/book');
router.get('/', bookController.booklist);
router.delete('/:id', bookController.deletebook);
router.post('/', bookController.create);
router.get('/:id', bookController.getbook);
router.put('/:id', bookController.updatebook);
module.exports = router;