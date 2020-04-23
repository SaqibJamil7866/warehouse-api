const express = require('express');
const {
    getVendors,
    addVendor,
    deleteVendor,
    updateVendor
} = require('../controllers/vendor');

const router = express.Router();


router.get('/getVendors', getVendors);
router.post('/addVendor', addVendor);
router.post('/deleteVendor', deleteVendor);
router.put('/updateVendor', updateVendor);

module.exports = router;
