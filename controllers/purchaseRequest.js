const { v4: uuidv4 } = require('uuid');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Vendor = require('../models/vendor');
const PurchaseRequest = require('../models/purchaseRequest');
const Items = require('../models/item');

exports.getPurchaseRequests = asyncHandler(async (req, res) => {
    const purchaseRequest = await PurchaseRequest.find().populate('vendorId');
    const vendor = await Vendor.find();
    const items = await Items.find();
    const status = [{key:'to_do', value:'To do'},{key:'in_progress', value:'In Progress'},
        {key:'on_hold', value:'On hold'},{key:'modified', value:'Modified'},{key:'done', value:'Done'}];

    const data = {
        purchaseRequest,
        vendor,
        status,
        items
    }
    
    res.status(200).json({ success: true, data: data });
});

exports.addPurchaseRequest = asyncHandler(async (req, res) => {
    const { requestNo, generatedBy, date, vendorId, status, itemCode, name, description,
        currentQty, reqQty, comments } = req.body;
    const purchaseRequest = await PurchaseRequest.create({
        uuid: uuidv4(),
        requestNo,
        generatedBy,
        date,
        vendorId,
        status,
        itemCode,
        name,
        description,
        currentQty,
        reqQty,
        comments
    });

    res.status(200).json({ success: true, data: purchaseRequest });
});

exports.deletePurchaseRequest = asyncHandler(async (req, res, next) => {
    const { _id } = req.params;
    const purchaseRequest = await PurchaseRequest.findById(_id);
    if(!purchaseRequest) {
        return next(
        new ErrorResponse(`Purchase Request not found with id of ${_id}`, 404)
        );
    }

    await PurchaseRequest.deleteOne({_id: _id});
    res.status(200).json({ success: true, data: {} });
});

exports.updatePurchaseRequest = asyncHandler(async (req, res, next) => {
    const { _id } = req.body;

    let purchaseRequest = await PurchaseRequest.findById(_id);

    if(!purchaseRequest) {
        return next(
        new ErrorResponse(`Purchase Request not found with id of ${_id}`, 404)
        );
    }

    purchaseRequest = await PurchaseRequest.updateOne({_id: _id}, req.body);
    res.status(200).json({ success: true, data: PurchaseRequest });
});