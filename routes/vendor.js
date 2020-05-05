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
    }
]), addVendor);
router.delete('/deletevendor/:_id', deleteVendor);
router.put('/updatevendor', updateVendor);

module.exports = router;
