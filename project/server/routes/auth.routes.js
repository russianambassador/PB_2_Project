import express from "express";
import AuthCtrl from "../controllers/auth.controller.js"


const router = express.Router();
//check router and controller work
router.get("/checkAuth", AuthCtrl.GetAuthCheck);
//creae new user
router.post("/register", AuthCtrl.registerUser);
//login user
router.post("/login", AuthCtrl.loginUser);
//logout
router.post("/logout", AuthCtrl.logout);
export default router;