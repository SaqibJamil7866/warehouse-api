    const { v4: uuidv4 } = require('uuid');
    const ErrorResponse = require('../utils/errorResponse');
    const asyncHandler = require('../middleware/async');
    const Vendor = require('../models/vendor');

    exports.getVendors = asyncHandler(async (req, res) => {
      const vendor = await Vendor.find();
      const data = {
        vendor
      }
      
      res.status(200).json({ success: true, data: data });
    });

    exports.addVendor = asyncHandler(async (req, res) => {
      const { englishName, arabicName, telephone1, telephone2, contactEmail, address, country, city,
        zipcode, pobox, faxno, taxno, contactPersonName, contactPersonTelephone, contactPersonEmail, paymentTerms,
        rating, status } = req.body;

      const vendor = await Vendor.create({
        uuid: uuidv4(),
        englishName, arabicName, telephone1, telephone2, contactEmail,
        address, country, city, zipcode, pobox, faxno,
        taxno, contactPersonName, contactPersonTelephone, contactPersonEmail,
        paymentTerms, rating, status
      });

      res.status(200).json({ success: true, data: vendor });
    });

    exports.deleteVendor = asyncHandler(async (req, res, next) => {
      const { _id } = req.params;
      const vendor = await Vendor.findById(_id);
      if(!vendor) {
        return next(
          new ErrorResponse(`Vendor not found with id of ${_id}`, 404)
        );
      }

      await Vendor.deleteOne({_id: _id});

      res.status(200).json({ success: true, data: {} });

    });

    exports.updateVendor = asyncHandler(async (req, res, next) => {
      const { _id } = req.body;

      let vendor = await Vendor.findById(_id);

      if(!vendor) {
        return next(
          new ErrorResponse(`Vendor not found with id of ${_id}`, 404)
        );
      }

      vendor = await Vendor.updateOne({_id: _id}, req.body);

      res.status(200).json({ success: true, data: vendor });
    });