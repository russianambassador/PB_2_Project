import express from "express";
import PostCtrl from "../controllers/post.controller.js"


const router = express.Router();

router.get("/checkPost", PostCtrl.GetPostCheck)

export default router;