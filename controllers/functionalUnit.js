const { v4: uuidv4 } = require('uuid');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const FunctionalUnit = require('../models/functionalUnit');

exports.getFunctionalUnits = asyncHandler(async (req, res) => {
  const functionalUnits = await FunctionalUnit.find();
  const data ={
    functionalUnits
  }
  
  res.status(200).json({ success: true, data: data });
});

exports.addFunctionalUnit = asyncHandler(async (req, res, next) => {
  const { fuName, description, fuHead, status } = req.body;
  const functionalUnit = await FunctionalUnit.create({
    uuid: uuidv4(),
    fuName,
    description,
    fuHead,
    status
  });

  res.status(200).json({ success: true, data: functionalUnit });
});

exports.deleteFunctionalUnit = asyncHandler(async (req, res, next) => {
    const { _id } = req.params;
    const functionalUnit = await FunctionalUnit.findById(_id);

    if(!functionalUnit) {
      return next(
        new ErrorResponse(`Functional Unit not found with id of ${_id}`, 404)
      );
    }

    await FunctionalUnit.deleteOne({_id: _id});
    res.status(200).json({ success: true, data: {} });
});

exports.updateFunctionalUnit = asyncHandler(async (req, res, next) => {
    const { _id } = req.body;

    let functionalUnit = await FunctionalUnit.findById(_id);

    if(!functionalUnit) {
      return next(
        new ErrorResponse(`Functional Unit not found with id of ${_id}`, 404)
      );
    }

    functionalUnit = await FunctionalUnit.updateOne({_id: _id}, req.body);
    res.status(200).json({ success: true, data: functionalUnit });
});