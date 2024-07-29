const express = require("express");
const router = express.Router();

const { login, register } = require("../controllers/auth");

router.post("/register", register);
router.post("/login", login);

// or can be written:
// router.route("/loghin").post(login)
// router.route("/register").post(register)

module.exports = router;
