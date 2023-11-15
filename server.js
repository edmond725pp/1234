require('dotenv').config();
//新增 Express 和 Mongoose
const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;


//連接到我們的伺服器
mongoose.connect(mongoString);
const database = mongoose.connection;

//拋出成功或錯誤訊息
database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
//
app.use(express.json());

app.listen(8099, () => {
    console.log(`Server Started at ${8099}`)
})

//檔案匯入到我們的主腳本檔案 sever.js 中
const routes = require('./routes/routes');
app.use('/api', routes)
