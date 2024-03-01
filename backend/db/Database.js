const mongoose = require("mongoose");
const url = "mongodb+srv://archanakmhss:oSSqO8SkndMDkYSs@cluster0.ek3o0pt.mongodb.net/?retryWrites=true&w=majority"
const connectDatabase = () =>{
    mongoose.connect(url,{
        useNewUrlParser :true,
        useUnifiedTopology:true,
    }).then((data) =>{
        console.log(`DATABASE CONNECTION SUCCESSFUL WITH SERVER: ${data.connection.host}`);
    })
}
module.exports = connectDatabase;