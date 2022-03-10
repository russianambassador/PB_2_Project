import express from "express";
import UserCtrl from "../controllers/user.controller.js";
import loginRequired from "../middleware/authJwt.js";
//import verifyToken from "../middleware/authJwt.js";

const router = express.Router();
//check router and controller work
router.get("/checkUser",loginRequired, UserCtrl.GetUserCheck);
//update
router.put("/:id", loginRequired, UserCtrl.updateUser)
//delete
router.delete("/:id", loginRequired,UserCtrl.deleteUser);
//get a user
router.get("/:id", loginRequired,UserCtrl.getUser);
//friend a user
router.put("/:id/add-friend", loginRequired,UserCtrl.addFriend);
//unfriend a user
router.put("/:id/remove-friend",loginRequired, UserCtrl.removeFriend);
//decline friend invitation
router.put("/:id/decline-invitation", loginRequired,UserCtrl.declineInvitation);
//remove friend request
router.put("/:id/remove-request",loginRequired, UserCtrl.removeRequest);
//block user
router.put("/:id/block", loginRequired,UserCtrl.blockUser);
//unblock user
router.put("/:id/unblock",loginRequired, UserCtrl.unblockUser);

export default router;