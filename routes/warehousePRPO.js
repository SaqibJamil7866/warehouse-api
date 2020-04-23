const express = require('express');
const {
    getWhPRPO,
    addWhPRPO,
    deleteWhPRPO,
    updateWhPRPO
} = require('../controllers/warehousePRPO');

const router = express.Router();


router.get('/getWhPRPO', getWhPRPO);
router.post('/addWhPRPO', addWhPRPO);
router.post('/deleteWhPRPO', deleteWhPRPO);
router.put('/updateWhPRPO', updateWhPRPO);

module.exports = router;
