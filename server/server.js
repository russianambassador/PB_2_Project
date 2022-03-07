import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import postRoutes from "./routes/post.routes.js"

const app = express();

//middleware
app.use(cors());                //CORS policy
app.use(express.json());        //alows to accept json in a body of request
app.use(morgan('dev'))
app.use(helmet());              //dummy security of HTTP requests

app.use("/api/user", userRoutes);

app.use("/api/auth", authRoutes);

app.use("/api/post", postRoutes);
app.use("*", (req, res) => res.status(404).json({error: "Not found. Please check your URL address or try again later."}));


export default app;