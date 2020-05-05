const { v4: uuidv4 } = require('uuid');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const StaffType = require('../models/staffType');

exports.getStaffType = asyncHandler(async (req, res) => {
    const staffType = await StaffType.find().populate('createdBySystemAdminStaffId');
    
    res.status(200).json({ success: true, data: staffType });
});

exports.addStaffType = asyncHandler(async (req, res) => {
    const { type, description, accessLevel, status, createdBySystemAdminStaffId, timeStamp } = req.body;
    const staffType = await StaffType.create({
        uuid: uuidv4(),
        type,
        description,
        accessLevel,
        status,
        createdBySystemAdminStaffId,
        timeStamp
    });

    res.status(200).json({ success: true, data: staffType });
});

exports.deleteStaffType = asyncHandler(async (req, res, next) => {
    const { _id } = req.params;
    const staffType = await StaffType.findById(_id);

    if(!staffType) {
      return next(
        new ErrorResponse(`Staff type not found with id of ${_id}`, 404)
      );
    }

    await StaffType.deleteOne({_id: _id});

    res.status(200).json({ success: true, data: {} });

});

exports.updateStaffType = asyncHandler(async (req, res, next) => {
    const { _id } = req.body;

    let staffType = await StaffType.findById(_id);

    if(!staffType) {
      return next(
        new ErrorResponse(`Staff type not found with id of ${_id}`, 404)
      );
    }

    staffType = await StaffType.updateOne({_id: _id}, req.body);

    res.status(200).json({ success: true, data: staffType });
});