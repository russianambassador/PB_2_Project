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
//friend a user
router.put("/:id/add-friend", UserCtrl.addFriend);
//unfollow a user
router.put("/:id/remove-friend", UserCtrl.removeFriend);


export default router;