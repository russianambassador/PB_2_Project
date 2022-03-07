import express from "express";
import UserCtrl from "../controllers/user.controller.js"


const router = express.Router();

router.get("/checkUser", UserCtrl.GetUserCheck);
//update
router.put("/:id", UserCtrl.updateUser)

export default router;