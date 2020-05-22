const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Staff = require('../models/staff');
const StaffType = require('../models/staffType');

exports.getStaff = asyncHandler(async (req, res) => {
    const staff = await Staff.find().populate('createdBySystemAdminStaffId').populate('staffTypeId');
    const staffType = await StaffType.find();
    const data = {
      staff,
      staffType
    }
    res.status(200).json({ success: true, data: data });
});

exports.addStaff = asyncHandler(async (req, res) => {

    const { staffTypeId, firstName, lastName, designation, contactNumber, identificationNumber, email,
        gender, dob, address, createdBySystemAdminStaffId, timeStamp, status } = req.body;

    const staff = await Staff.create({
        staffTypeId,
        firstName,
        lastName,
        designation,
        contactNumber,
        identificationNumber,
        email,
        gender,
        dob,
        address,
        createdBySystemAdminStaffId,
        timeStamp,
        status
    });

    res.status(200).json({ success: true, data: staff });
});

exports.deleteStaff = asyncHandler(async (req, res, next) => {
    const { _id } = req.params;
    const staff = await Staff.findById(_id);

    if(!staff) {
      return next(
        new ErrorResponse(`Staff not found with id of ${_id}`, 404)
      );
    }

    await Staff.deleteOne({_id: _id});

    res.status(200).json({ success: true, data: {} });

});

exports.updateStaff = asyncHandler(async (req, res, next) => {
    const { _id } = req.body;

    let staff = await Staff.findById(_id);

    if(!staff) {
      return next(
        new ErrorResponse(`Staff not found with id of ${_id}`, 404)
      );
    }

    staff = await Staff.updateOne({_id: _id}, req.body);

    res.status(200).json({ success: true, data: staff });
});