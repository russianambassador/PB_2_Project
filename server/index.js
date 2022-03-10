import express from "express";
import mongoose from "mongoose";

import app from "./server.js"
import config from "./config/config.js"

//configuring hidden enviroment variables

//database connection setup
const port = config.PORT || 6000;
mongoose.connect(config.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(data => {
    app.listen(port, ()=> {
        console.log("Server is running at port " + port)
    })
})
.catch(e => {console.error(e.stack);
             process.exit(1);
        });


