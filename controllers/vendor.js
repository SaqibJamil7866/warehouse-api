const Vendor = require('../models/vendor');

    exports.getVendors = (req, res, next) => {
        try {
            Vendor.find().then(function(data, err){
                if(err) throw err;
                res.status(200).send({success:true, data: data , message: "Vendors fetched successfully" });
            })
        } catch (e) {
            res.status(400).send({success:false, message: "Error getting vendors!", error: e.toString()});
        }
    };

    exports.addVendor = (req, res, next) => {
        const { name, phoneNumber, status, address, fax, email, contactPerson, createdBySystemAdminStaffId,
            review, timeStamp, rating } = req.body;
        
        try{
            Vendor.create({
                name,
                phoneNumber,
                status,
                address,
                fax,
                email,
                contactPerson,
                createdBySystemAdminStaffId,
                review,
                timeStamp,
                rating
            }).then((response, err) => {
                if(err) throw err;
                res.status(200).send({ success: true, message: "Vendor added successfully"});
            });
        }
        catch(e){
            res.status(400).send({success:false, message: "Error adding vendor!", error: e.toString()});
        }
    };

    exports.deleteVendor = (req, res, next) => {
        const { _id } = req.body;

        try{
            Vendor.deleteOne({_id: _id}).then(function(response, err){
                if(err) throw err;
                res.status(200).send({success:true, message: "Vendor deleted successfully" });
            })
        } catch(e) {
            res.status(400).send({success:false, message: "Error deleting vendor!", error: e.toString()});
        }
    };

    exports.updateVendor = (req, res, next) => {
        const { _id } = req.body;

        try {
            Vendor.updateOne({_id: _id}, req.body).then(function(){
                res.status(200).send({success:true, message: "Vendor update successfully" });
            })
        } catch (e) {
            res.status(400).send({success:false, message: "Error deleting vendor!", error: e.toString()});
        }
    };