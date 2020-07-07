const handler = require("./handler")
const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
//서버 기본 설정
const app = express();
const PORT = process.env.NODE_ENV === 'production'? 3001:3002
//미들웨어
app.use(bodyParser.json())
//라우터
app.use('/', handler)
app.use(cors())
//서버 소켓 열기
app.listen(PORT,function(){
    console.log(`server listen on ${PORT}`)
})