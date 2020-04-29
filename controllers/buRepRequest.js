const { v4: uuidv4 } = require('uuid');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const BuRepRequest = require('../models/buRepRequest');

exports.getBuRepRequest = asyncHandler(async (req, res) => {
    const buRepRequest = await BuRepRequest.find().populate('buId').populate('requesterStaffId');
    res.status(200).json({ success: true, data: buRepRequest });
});

exports.addBuRepRequest = asyncHandler(async (req, res) => {
    const { buId, itemId, qty, status } = req.body;
    const buRepRequest = await BuRepRequest.create({
        uuid: uuidv4(),
        buId,
        itemId,
        qty,
        status
    });

    res.status(200).json({ success: true, data: buRepRequest });
});

exports.deleteBuRepRequest = asyncHandler(async (req, res, next) => {
    const { _id } = req.params;
    const buRepRequest = await BuRepRequest.findById(_id);

    if(!buRepRequest) {
      return next(
        new ErrorResponse(`Bu rep request not found with id of ${_id}`, 404)
      );
    }

    await BuRepRequest.deleteOne({_id: _id});

    res.status(200).json({ success: true, data: {} });

});

exports.updateBuRepRequest = asyncHandler(async (req, res, next) => {
    const { _id } = req.body;

    let buRepRequest = await BuRepRequest.findById(_id);

    if(!buRepRequest) {
      return next(
        new ErrorResponse(`Bu rep request not found with id of ${_id}`, 404)
      );
    }

    buRepRequest = await BuRepRequest.updateOne({_id: _id}, req.body);

    res.status(200).json({ success: true, data: buRepRequest });
});