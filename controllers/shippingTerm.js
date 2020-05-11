const { v4: uuidv4 } = require('uuid');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const ShippingTerm = require('../models/shippingTerm');

exports.getShippingTerms = asyncHandler(async (req, res) => {
    const shippingTerm = await ShippingTerm.find();

    const data = {
        shippingTerm
    }
    
    res.status(200).json({ success: true, data: data });
});

exports.addShippingTerm = asyncHandler(async (req, res) => {
    const { description } = req.body;
    const shippingTerm = await ShippingTerm.create({
        uuid: uuidv4(),
        description,
    });

    res.status(200).json({ success: true, data: shippingTerm });
});

exports.deleteShippingTerm = asyncHandler(async (req, res, next) => {
    const { _id } = req.params;
    const shippingTerm = await ShippingTerm.findById(_id);
    if(!shippingTerm) {
        return next(
            new ErrorResponse(`Shipping Term not found with id of ${_id}`, 404)
        );
    }

    await ShippingTerm.deleteOne({_id: _id});
    res.status(200).json({ success: true, data: {} });
});

exports.updateShippingTerm = asyncHandler(async (req, res, next) => {
    const { _id } = req.body;

    let shippingTerm = await ShippingTerm.findById(_id);

    if(!shippingTerm) {
        return next(
        new ErrorResponse(`Shipping Term not found with id of ${_id}`, 404)
        );
    }

    shippingTerm = await ShippingTerm.updateOne({_id: _id}, req.body);
    res.status(200).json({ success: true, data: shippingTerm });
});