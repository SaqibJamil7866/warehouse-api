const express = require('express');
const { authorize } = require('../middleware/auth');
const { validateParams } = require('../middleware/validator');

const {
    getVendors,
    addVendor,
    deleteVendor,
    updateVendor
} = require('../controllers/vendor');

const router = express.Router();


router.get('/getvendors',getVendors);
router.post('/addvendor', validateParams([
    {
        param_key: 'name',
        required: true,
        type: 'string'
    },
    {
        param_key: 'contactPerson',
        required: true,
        type: 'string'
    },
    {
        param_key: 'phoneNumber',
        required: true,
        type: 'string'
    },
    {
        param_key: 'website',
        required: true,
        type: 'string'
    },
    {
        param_key: 'address',
        required: true,
        type: 'string'
    },
    {
        param_key: 'zipCode',
        required: true,
        type: 'string'
    },
    {
        param_key: 'city',
        required: true,
        type: 'string'
    },
    {
        param_key: 'country',
        required: true,
        type: 'string'
    },
    {
        param_key: 'rating',
        required: true,
        type: 'string'
    },
    {
        param_key: 'status',
        required: true,
        type: 'string'
    }
]), addVendor);
router.delete('/deletevendor/:_id', deleteVendor);
router.put('/updatevendor', updateVendor);

module.exports = router;
