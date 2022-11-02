const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const connectionString = process.env.CONNECTION_STRING
const connectDb =async ()=>{
   await mongoose.connect(connectionString)
    console.log('connected to database')
}
//("mongodb+srv://Oleevarh:Comput%40%40%401995@cluster0.erlcmid.mongodb.net/friends_DB?retryWrites=true&w=majority")
module.exports = connectDb