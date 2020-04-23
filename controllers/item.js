const Item = require('../models/item');

    exports.getItems = (req, res, next) => {
        try {
            Item.find().then(function(items, err){
                if(err) throw err;
                res.status(200).send({success:true, data: items , message: "Items fetched successfully" });
            })
        } catch (e) {
            res.status(400).send({success:false, message: "Error getting item!", error: e.toString()});
        }
    };

    exports.addItem = (req, res, next) => {
        const { name, description, subClass, unit, vendorId, purchasePrice, buPrice, salePrice, barCode } = req.body;
        try{
            Item.create({
                name,
                description,
                subClass,
                unit,
                unit,
                vendorId,
                purchasePrice,
                buPrice,
                salePrice,
                barCode
            }).then((response, err) => {
                if(err) throw err;
                res.status(200).send({ success: true, message: "Item added successfully"});
            });
        }
        catch(e){
            res.status(400).send({success:false, message: "Error adding item!", error: e.toString() });
        }
    };

    exports.deleteItem = (req, res, next) => {
        const { _id } = req.body;

        try{
            Item.deleteOne({_id: _id}).then(function(response, err){
                if(err) throw err;
                res.status(200).send({success:true, message: "Item deleted" });
            })
        } catch(e) {
            res.status(400).send({success:false, message: "Error deleting item!", error: e.toString() });
        }
    };

    exports.updateItem = (req, res, next) => {
        const { _id } = req.body;

        try {
            Item.updateOne({_id: _id}, req.body).then(function(){
                res.status(200).send({success:true, message: "Item update" });
            })
        } catch (e) {
            res.status(400).send({success:false, message: "Error deleting item!", error: e.toString()});
        }
    };