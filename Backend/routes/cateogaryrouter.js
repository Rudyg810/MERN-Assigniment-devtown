const   express  =require(   "express")
const cateogarymode = require("../models/cateogarymode.js")
const { admincheck, requireSignin } =require(   "../middlewares/authmiddleware.js")
const  {singlecateogarycontroller, cateogarycontroller, UpdateCateogarycontroller, CreateCateogarycontroller, deletecateogary } =require(   "../controller/Cateogarycontroller.js")

const cateogaryrouter = express.Router()

cateogaryrouter.post("/create-cateogary",requireSignin,admincheck,  CreateCateogarycontroller)

cateogaryrouter.put("/update-cateogary",requireSignin,admincheck,  UpdateCateogarycontroller);
cateogaryrouter.get("/cateogary", cateogarycontroller)
cateogaryrouter.get("/single-cateogary/:slug", singlecateogarycontroller)
cateogaryrouter.post("/delete-cateogary",requireSignin,admincheck,  deletecateogary)

module.exports = cateogaryrouter