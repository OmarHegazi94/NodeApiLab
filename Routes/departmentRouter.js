let express=require("express");
let path=require("path");
let mongoose = require("mongoose");
let departmentRouter=express.Router();

require("./../Models/departmentModel");
let departmentSchema = mongoose.model("departments");

departmentRouter.route("/departments")
    .get((request, response) => {

        departmentSchema.find({}).populate({path:"students"})
        .then((result) => {
            response.send(result);
        }).catch((error) => response.send(error));

    })
    .post((request, response) => {

        let departmentObject = new departmentSchema({
            _id: request.body.id,
            name: request.body.name
        });
        departmentObject.save().then((result) => {
            response.send(result);
        }).catch((error) => {
            response.send(error);
        });

    })
    .put((request, response) => {

        departmentSchema.updateOne({ _id: request.body.id }, {
            $set: {
                name: request.body.name
            }
        }).then((result) => {
            response.send(result);
        }).catch((error) => {
            response.send(error);
        });

    })
    .delete((request, response) => {

        departmentSchema.deleteOne({ _id: request.body.id })
            .then((result) => {
                response.send(result);
            }).catch((error) => {
                response.send(error);
            });

    });






module.exports=departmentRouter;
