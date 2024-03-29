const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./db/Database.js");
const cloudinary = require("cloudinary");

//HANDLING UNCAUGHT EXCEPTIONS
process.on("uncaughtException",(err) =>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server for Handling uncaught Exception`);
})

if (process.env.NODE_ENV === 'production') {
    // Serve the built frontend from the 'frontend/build' directory
    app.use(express.static(path.join(__dirname, 'frontend/build')));
  
    // Serve the index.html file for any other routes
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'frontend/build', 'index.html'));
    });
  }
  

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