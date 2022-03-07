import express from "express";
import UserCtrl from "../controllers/user.controller.js"


const router = express.Router();

router.get("/checkUser", UserCtrl.GetUserCheck);
//update
router.put("/:id", UserCtrl.updateUser)
//delete
router.delete("/:id", UserCtrl.deleteUser);
//get a user
router.get("/:id", UserCtrl.getUser);
//follow a user
router.put("/:id/follow", UserCtrl.followUser);
//unfollow a user
router.put("/:id/unfollow", UserCtrl.unfollowUser);

export default router;