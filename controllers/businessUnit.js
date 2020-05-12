const { v4: uuidv4 } = require('uuid');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const BusinessUnit = require('../models/businessUnit');
const BusinessUnitLogs = require('../models/businessUnitLogs');

exports.getBusinessUnit = asyncHandler(async (req, res) => {
    const businessUnit = await BusinessUnit.find().populate('buLogsId');
    const buHeads = [{key:'medical_ops', value:'Medical Ops'}, {key:'hosp_ops', value:'Hosp Ops'}];
    const statues = [{key:'active', value:'Active'}, {key:'in_active', value:'In Active'}];
    const buLogs = [];
    businessUnit.forEach(element => {
      buLogs.push(element.buLogsId)
    });
    const data = {
      businessUnit,
      buHeads,
      statues,
      buLogs
    }
    res.status(200).json({ success: true, data: data });
});

exports.addBusinessUnit = asyncHandler(async (req, res) => {
    const { buName, description, buHead, status, updatedBy, reason } = req.body;
    const buLogs = await BusinessUnitLogs.create({
      uuid: uuidv4(),
      status,
      reason,
      updatedBy
    });
  
    const businessUnit = await BusinessUnit.create({
        uuid: uuidv4(),
        buName,
        description,
        buHead,
        status,
        buLogsId: buLogs._id
    });

    res.status(200).json({ success: true, data: businessUnit });
});

exports.deleteBusinessUnit = asyncHandler(async (req, res, next) => {
    // const { _id } = req.params;
    // const businessUnit = await BusinessUnit.findById(_id);

    // if(!businessUnit) {
    //   return next(
    //     new ErrorResponse(`Business unit not found with id of ${_id}`, 404)
    //   );
    // }

    // await BusinessUnit.deleteOne({_id: _id});

    res.status(200).json({ success: false, data: {}, msg:'Can not delete permanentaly' });

});

exports.updateBusinessUnit = asyncHandler(async (req, res, next) => {
    const { _id, buLogsId, updatedBy, reason } = req.body;

    let businessUnitLogs = await BusinessUnitLogs.findById(buLogsId);
    let businessUnit = await BusinessUnit.findById(_id);

    if(!businessUnitLogs) {
      return next(
        new ErrorResponse(`Business unit Log not found with id of ${_id}`, 404)
      );
    }
    else if(businessUnitLogs.status !== businessUnit.status){
      businessUnitLogs.status = businessUnit.status;
      businessUnitLogs.updatedBy = updatedBy;
      businessUnitLogs.reason = reason;
    }

    if(!businessUnit) {
      return next(
        new ErrorResponse(`Business unit not found with id of ${_id}`, 404)
      );
    }

    businessUnit = await BusinessUnit.updateOne({_id: _id}, req.body);
    businessUnitLogs = await BusinessUnitLogs.updateOne({_id: buLogsId}, businessUnitLogs)

    res.status(200).json({ success: true, data: businessUnit });
});