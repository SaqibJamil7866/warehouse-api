    const { v4: uuidv4 } = require('uuid');
    const ErrorResponse = require('../utils/errorResponse');
    const asyncHandler = require('../middleware/async');
    const Item = require('../models/item');
    const Vendor = require('../models/vendor');
    const FunctionalUnit = require('../models/functionalUnit');

    exports.getItems = asyncHandler(async (req, res) => {
      const items = await Item.find().populate('vendorId').populate('receiptUnit').populate('issueUnit');
      const vendors = await Vendor.find();
      const functionalUnit = await FunctionalUnit.find();
      const data ={
        items,
        vendors,
        functionalUnit
      }
      
      res.status(200).json({ success: true, data: data });
    });

    exports.addItem = asyncHandler(async (req, res, next) => {
      const { name, description, subClass, itemCode, vendorId, purchasePrice, receiptUnit, issueUnit, minimumLevel,
        maximumLevel, reorderLevel } = req.body;
      const item = await Item.create({
        uuid: uuidv4(),
        name,
        description,
        subClass,
        itemCode,
        vendorId,
        purchasePrice,
        receiptUnit,
        issueUnit,
        minimumLevel,
        maximumLevel,
        reorderLevel
      });

      res.status(200).json({ success: true, data: item });
    });

    exports.deleteItem = asyncHandler(async (req, res, next) => {
        const { _id } = req.params;
        const item = await Item.findById(_id);

        if(!item) {
          return next(
            new ErrorResponse(`Item not found with id of ${_id}`, 404)
          );
        }

        await Item.deleteOne({_id: _id});

        res.status(200).json({ success: true, data: {} });

    });

    exports.updateItem = asyncHandler(async (req, res, next) => {
        const { _id } = req.body;

        let item = await Item.findById(_id);

        if(!item) {
          return next(
            new ErrorResponse(`Item not found with id of ${_id}`, 404)
          );
        }

        item = await Item.updateOne({_id: _id}, req.body);

        res.status(200).json({ success: true, data: item });
    });