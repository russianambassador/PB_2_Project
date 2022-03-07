import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./server.js"


//configuring hidden enviroment variables
dotenv.config()
//database connection setup
const port = process.env.PORT || 6000;
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true})
.then(data => {
    app.listen(port, ()=> {
        console.log("Server is running at port " + port)
    })
})
.catch(e => {console.error(e.stack);
             process.exit(1);
        });


