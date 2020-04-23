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
router.post('/deleteItem', deleteItem);
router.put('/updateItem', updateItem);

module.exports = router;
