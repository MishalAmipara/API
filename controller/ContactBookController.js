var UserModel = require('../model/ContactBook/RegisterModel');
var ContactModel = require('../model/ContactBook/ContactModel');

var Login_status = 0;

exports.RegisterUser = async (req,res)=>{
    try {
        var data = await UserModel.create(req.body);
        res.status(200).json({
            status: "Success",
            data
        })
    } catch (error) {
        res.status(200).json({
            status: "Error",
            message: error.message
        })
    }
}

exports.LoginUser = async (req,res)=>{
    try {
        var data = await UserModel.find({"email":req.body.email});
        if(data.length==1)
        {
            if(data[0].password==req.body.password)
            {
                Login_status = data[0].id;
                res.status(200).json({
                    status: "Success"
                })
            }else{
                res.status(200).json({
                    status: "Check Your Email and Password"
                })
            }
        }else{
            res.status(200).json({
                status: "Check Your Email and Password"
            })
        }
       
    } catch (error) {
        res.status(200).json({
            status: "Error",
            message: error.message
        })
    }
}

exports.AddContact = async (req,res)=>{
    try {
        req.body.user_id = Login_status;
        var data = await ContactModel.create(req.body);
        res.status(200).json({
            status: "Success",
            data
        })
    } catch (error) {
        res.status(200).json({
            status: "Error",
            message: error.message
        })
    }
}

exports.ViewContact = async (req,res)=>{
    try {
        var data = await ContactModel.find({"user_id":Login_status});
        res.status(200).json({
            status: "Success",
            data
        })
    } catch (error) {
        res.status(200).json({
            status: "Error",
            message: error.message
        })
    }
}

exports.UpdateContact = async (req,res)=>{
    try {
        var id = req.params.id;
        var data = await ContactModel.findByIdAndUpdate(id,req.body);
        res.status(200).json({
            status: "Success"
        })
    } catch (error) {
        res.status(200).json({
            status: "Error",
            message: error.message
        })
    }
}

exports.DeleteContact = async (req,res)=>{
    try {
        var id = req.params.id;
        var data = await ContactModel.findByIdAndDelete(id);
        res.status(200).json({
            status: "Success"
        })
    } catch (error) {
        res.status(200).json({
            status: "Error",
            message: error.message
        })
    }
}

exports.UpdateAccout = async (req,res) => {
    try {
        var data = await UserModel.findByIdAndUpdate(id,req.body);
        res.status(200).json({
            status: "Success"
        })
    } catch (error) {
        res.status(200).json({
            status: "Error",
            message: error.message
        })
    }
}

exports.UpdateAccoutGetValue = async (req,res) => {
    try {
        var data = await UserModel.findById(Login_status);
        res.status(200).json({
            status: "Success",
            data
        })
    } catch (error) {
        res.status(200).json({
            status: "Error",
            message: error.message
        })
    }
}

exports.UpdateContactGetValue = async (req,res)=>{
    try {
        var id = req.params.id;
        var data = await ContactModel.findById(id);
        res.status(200).json({
            status: "Success",
            data
        })
    } catch (error) {
        res.status(200).json({
            status: "Error",
            message: error.message
        })
    }
}

exports.ContactBookLogout = async (req,res) => {
    try {
        Login_status=0;
        res.status(200).json({
            status: "Logout Success"
        })
    } catch (error) {
        res.status(200).json({
            status: "Error",
            message: error.message
        })
    }
}