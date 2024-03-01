const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./db/Database.js");
const cloudinary = require("cloudinary");

//HANDLING UNCAUGHT EXCEPTIONS
process.on("uncaughtException",(err) =>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server for Handling uncaught Exception`);
})

//CONFIG
dotenv.config({
    path :"backend/config/.env"
})
connectDatabase();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})


//CREATE SERVER
const server = app.listen(process.env.PORT,() =>{
    console.log(`SERVER IS WORKING`)
})



//UNHANDLING PROMISE REJECTION
process.on("unhandledRejection", (err) =>{
    console.log(`Shutting down server for ${err.message}`);
    console.log(`Shutting down the server due to Unhandled promise rejection`);
    server.close(() =>{
        process.exit(1);
    });
});