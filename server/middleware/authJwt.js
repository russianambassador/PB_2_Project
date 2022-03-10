import jwt from "jsonwebtoken";
import config from "../config/config.js";


const verifyToken = async (req, res, next) => {
    const token = req.cookies.accessToken;
    try {
      if (!token) {
        return res.status(401).json('You need to Login')
      }
      const decryptToken = await jwt.verify(token, config.secret);
      if(!decryptToken){
          return res.status(401).json({message:"Unauthorized access. You have been logged out. Please login"})
      }
      req.auth = decryptToken;
      
      
      next();
    } catch (err) {
      return res.status(500).json(err.toString());
    }
  };

  export default verifyToken;