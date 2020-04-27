const express = require('express');
const {
    getItems,
    addItem,
    deleteItem,
    updateItem
} = require('../controllers/item');

const router = express.Router();


router.get('/getitems', getItems);
router.post('/additem', addItem);
router.delete('/deleteitem/:_id', deleteItem);
router.put('/updateitem', updateItem);

module.exports = router;
