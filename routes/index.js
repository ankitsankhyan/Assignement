const router = require('express').Router();
const {validbook, validate} = require('../middleware/validator');
const bookController = require('../controllers/book');
router.get('/', bookController.booklist);
router.delete('/:id', bookController.deletebook);
router.post('/', validbook,validate,bookController.create);
router.get('/:id', bookController.getbook);
router.put('/:id',validbook,validate, bookController.updatebook);
module.exports = router;