const express = require('express');
const { validateParams } = require('../middleware/validator');

const {
    getBusinessUnit,
    addBusinessUnit,
    deleteBusinessUnit,
    updateBusinessUnit
} = require('../controllers/businessUnit');

const router = express.Router();


router.get('/getbusinessunit', getBusinessUnit);
router.post('/addbusinessunit', validateParams([
    {
        param_key: 'buName',
        required: true,
        type: 'string'
    },
    {
        param_key: 'description',
        required: true,
        type: 'string'
    },
    {
        param_key: 'functionalUnitId',
        required: true,
        type: 'string'
    }
]),addBusinessUnit);
router.delete('/deletebusinessunit/:_id', deleteBusinessUnit);
router.put('/updatebusinessunit', updateBusinessUnit);

module.exports = router;