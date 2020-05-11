const express = require('express');
const { validateParams } = require('../middleware/validator');

const {
    getShippingTerms,
    addShippingTerm,
    deleteShippingTerm,
    updateShippingTerm
} = require('../controllers/shippingTerm');

const router = express.Router();


router.get('/getshippingterms', getShippingTerms);
router.post('/addshippingterm', validateParams([
    {
        param_key: 'description',
        required: true,
        type: 'string'
    }
  ]), addShippingTerm);
router.delete('/deleteShippingTerm/:_id', deleteShippingTerm);
router.put('/updateShippingTerm', updateShippingTerm);

module.exports = router;