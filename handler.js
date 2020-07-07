const express = require("express")
const { stringify } = require("querystring")
const router = express.Router()
router.get('/messages',function(req,res){
    res.send("hello world")
})
router.post('/messages',function(req,res){
    console.log(req.body)
    console.log(JSON.stringify(req.body))
    res.status(200).send("success!!")
})
module.exports = router
