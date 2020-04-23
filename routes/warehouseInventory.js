const express = require('express');
const {
    getWhInventory,
    addWhInventory,
    deleteWhInventory,
    updateWhInventory
} = require('../controllers/warehouseInventory');

const router = express.Router();


router.get('/getwhinventory', getWhInventory);
router.post('/addwhinventory', addWhInventory);
router.post('/deletewhinventory', deleteWhInventory);
router.put('/updatewhinventory', updateWhInventory);

module.exports = router;
