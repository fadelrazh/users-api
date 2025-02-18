const express = require("express");
const router = express.Router();
const {
  getUsers,
  getUser,
  createNewUser,
  updateUserDetails,
  removeUser,
} = require("../controllers/userController");

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", createNewUser);
router.put("/:id", updateUserDetails);
router.delete("/:id", removeUser);

module.exports = router;
console.log("User routes loaded!");
