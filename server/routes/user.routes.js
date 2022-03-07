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
//unfriend a user
router.put("/:id/remove-friend", UserCtrl.removeFriend);
//decline friend invitation
router.put("/:id/decline-invitation", UserCtrl.declineInvitation);
//remove friend request
router.put("/:id/remove-request", UserCtrl.removeRequest);
//block user
router.put("/:id/block", UserCtrl.blockUser);
//unblock user
router.put("/:id/unblock", UserCtrl.unblockUser);

export default router;