const express = require('express');
const {
    getBusinessUnit,
    addBusinessUnit,
    deleteBusinessUnit,
    updateBusinessUnit
} = require('../controllers/businessUnit');

const router = express.Router();


router.get('/getbusinessunit', getBusinessUnit);
router.post('/addbusinessunit', addBusinessUnit);
router.delete('/deletebusinessunit/:_id', deleteBusinessUnit);
router.put('/updatebusinessunit', updateBusinessUnit);

module.exports = router;