const { v4: uuidv4 } = require('uuid');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const BusinessUnit = require('../models/businessUnit');
const SystemAdmin = require('../models/systemAdmin');

exports.getBusinessUnit = asyncHandler(async (req, res) => {
    const businessUnit = await BusinessUnit.find().populate('createBySystemAdminStaffId');
    const systemAdmin = await SystemAdmin.find();
    const data = {
      businessUnit,
      systemAdmin
    }
    res.status(200).json({ success: true, data: data });
});

exports.addBusinessUnit = asyncHandler(async (req, res) => {
    const { buName, description, buHead, createBySystemAdminStaffId, timeStamp } = req.body;
    const businessUnit = await BusinessUnit.create({
        uuid: uuidv4(),
        buName,
        description,
        buHead,
        createBySystemAdminStaffId,
        timeStamp
    });

    res.status(200).json({ success: true, data: businessUnit });
});

exports.deleteBusinessUnit = asyncHandler(async (req, res, next) => {
    const { _id } = req.params;
    const businessUnit = await BusinessUnit.findById(_id);

    if(!businessUnit) {
      return next(
        new ErrorResponse(`Business unit not found with id of ${_id}`, 404)
      );
    }

    await BusinessUnit.deleteOne({_id: _id});

    res.status(200).json({ success: true, data: {} });

});

exports.updateBusinessUnit = asyncHandler(async (req, res, next) => {
    const { _id } = req.body;

    let businessUnit = await BusinessUnit.findById(_id);

    if(!businessUnit) {
      return next(
        new ErrorResponse(`Business unit not found with id of ${_id}`, 404)
      );
    }

    businessUnit = await BusinessUnit.updateOne({_id: _id}, req.body);

    res.status(200).json({ success: true, data: businessUnit });
});