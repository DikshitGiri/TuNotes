const express = require('express');
const router = express.Router();
// exports.router;
const { createUser } = require('../controllers/user/Register');
// const { validateUserSignup  } = require('../middleware/validation/user');






// router.post('/', (req, res)=> {
//     createUser;
// });
// router.route("/").post(validateUserSignup, createUser);
router.route("/").post(createUser);
module.exports = router;