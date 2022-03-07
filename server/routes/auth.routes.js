import express from "express";
import AuthCtrl from "../controllers/auth.controller.js"


const router = express.Router();

router.get("/checkAuth", AuthCtrl.GetAuthCheck);

router.post("/register", AuthCtrl.registerUser);

router.post("/login", AuthCtrl.loginUser);

export default router;