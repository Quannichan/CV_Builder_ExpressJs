const express = require("express");
const image = require("./image")
const Router = express.Router()
const postController = require("../../controller/postController");
const infoController = require("../../controller/infoController");
const VnpayController = require("../../controller/vnpayController");
const postSampleController = require("../../controller/postSampleController");

Router.use("/images", image)

Router.post("/postPubl", new postController().Service_public);

Router.post("/postSamplePubl", new postSampleController().Service_public);

Router.post("/userPubl", new infoController().Service_User_Publ);

Router.get("/vnpay/ipn_return", new VnpayController().IPN_CALLBACK);

Router.get("/verify/account", new infoController().Service_User_Get_Publ);

module.exports = Router