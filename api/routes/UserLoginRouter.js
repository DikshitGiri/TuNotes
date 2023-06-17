const express = require('express');
const {login} = require("../controllers/user/LoginController");
const router = express.Router();
router.route("/").post(login);
module.exports = router;