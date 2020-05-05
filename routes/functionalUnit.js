const express = require('express');
const { validateParams } = require('../middleware/validator');

const {
    getFunctionalUnits,
    addFunctionalUnit,
    deleteFunctionalUnit,
    updateFunctionalUnit
} = require('../controllers/functionalUnit');

const router = express.Router();


router.get('/getfunctionalunits', getFunctionalUnits);
router.post('/addfunctionalunit', validateParams([
    {
        param_key: 'fuName',
        required: true,
        type: 'string'
    },
    {
        param_key: 'description',
        required: true,
        type: 'string'
    }
  ]), addFunctionalUnit);
router.delete('/deletefunctionalunit/:_id', deleteFunctionalUnit);
router.put('/updatefunctionalunit', updateFunctionalUnit);

module.exports = router;
