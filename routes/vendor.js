const express = require('express');
const { authorize } = require('../middleware/auth');
const {
    getVendors,
    addVendor,
    deleteVendor,
    updateVendor
} = require('../controllers/vendor');

const router = express.Router();


router.get('/getvendors',authorize('admin') ,getVendors);
router.post('/addvendor', addVendor);
router.delete('/deletevendor', deleteVendor);
router.put('/updatevendor', updateVendor);

module.exports = router;
