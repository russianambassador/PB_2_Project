import express from "express";
import UserCtrl from "../controllers/user.controller.js"


const router = express.Router();

router.get("/checkUser", UserCtrl.GetUserCheck)

export default router;