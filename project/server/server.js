import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import compression from "compression";
import bodyParser from "body-parser";

import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import postRoutes from "./routes/post.routes.js"

import requstHandler from "./middleware/allowedMethods.js"
//import authJwt from "./middleware/authJwt.js"         //temporarily(or permanently if I find a better solution) removed

const app = express();

//middleware
app.use(cors());                //CORS policy (Cross Origin Resource Sharing)
app.use(express.json());        //alows to accept json in a body of request
app.use(morgan('dev'))          //logs every request to the dev console
app.use(helmet());              //secures HTTP requests
app.use(compression());         //decreases downloadable amount of data for users - improves perfomance
app.use(bodyParser.json());                              //support parsing of application/json type post data
app.use(bodyParser.urlencoded({ extended: true }));      //support parsing of application/x-www-form-urlencoded post data
app.use(cookieParser());
app.use(requstHandler)
//api routes
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);

//app.use("*", (req, res) => res.status(404).json( "404 Not found. Please check your URL address or try again later."));


// Catch unauthorised errors
app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
      res.status(401).json({"error" : err.name + ": " + err.message})
    }else if (err) {
      res.status(400).json({"error" : err.name + ": " + err.message})
      console.log(err)
    }
  })
export default app;