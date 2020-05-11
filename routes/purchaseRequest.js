const express = require('express');
const { validateParams } = require('../middleware/validator');

const {
    getPurchaseRequests,
    addPurchaseRequest,
    deletePurchaseRequest,
    updatePurchaseRequest
} = require('../controllers/purchaseRequest');

const router = express.Router();


router.get('/getpurchaserequests', getPurchaseRequests);
router.post('/addpurchaserequest', validateParams([
    {
        param_key: 'requestNo',
        required: true,
        type: 'string'
    },
    {
        param_key: 'generatedBy',
        required: true,
        type: 'string'
    },
    {
        param_key: 'date',
        required: true,
        type: 'string'
    },
    {
        param_key: 'vendorId',
        required: true,
        type: 'string'
    },
    {
        param_key: 'status',
        required: true,
        type: 'string'
    },
    {
        param_key: 'itemCode',
        required: true,
        type: 'string'
    },
    {
        param_key: 'name',
        required: true,
        type: 'string'
    },
    {
        param_key: 'description',
        required: true,
        type: 'string'
    },
    {
        param_key: 'currentQty',
        required: true,
        type: 'string'
    },
    {
        param_key: 'reqQty',
        required: true,
        type: 'string'
    },
    {
        param_key: 'comments',
        required: true,
        type: 'string'
    }
  ]), addPurchaseRequest);
router.delete('/deletepurchaserequest/:_id', deletePurchaseRequest);
router.put('/updatepurchaserequest', updatePurchaseRequest);

module.exports = router;
