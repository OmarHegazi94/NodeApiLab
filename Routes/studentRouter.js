let express = require("express");
let path = require("path");
let mongoose = require("mongoose");
let studentRouter = express.Router();

require("./../Models/studentModel");
let studentSchema = mongoose.model("students");

studentRouter.route("/students")
    .get((requset, response) => {

        studentSchema.find({}).then((result) => {
            response.send(result);
        })
            .catch((error) => { response.send(error); });
    })
    .post((request, response) => {
        let studentObject = new studentSchema({
            _id: request.body.id,
            name: request.body.name,
            department: request.body.department
        });
        studentObject.save().then((result) => {
            response.send(result);
        }).catch((error) => {
            response.send(error);
        });
    })
    .put((request, response) => {
        studentSchema.updateOne({ _id: request.body.id }, {
            $set: {
                name: request.body.name,
                department: request.body.department
            }
        }).then((result) => {
            response.send(result);
        }).catch((error) => {
            response.send(error);
        });
    })
    .delete((request, response) => {
        studentSchema.deleteOne({ _id: request.body.id }).then((result) => { response.send(result); }).catch(error => { response.send(error); });
    });

module.exports = studentRouter;
