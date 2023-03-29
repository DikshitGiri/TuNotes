const express = require('express');
const {login} = require("../controllers/user/login");
const router = express.Router();
router.route("/").post(login);
module.exports = router;
