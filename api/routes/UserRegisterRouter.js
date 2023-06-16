const express = require('express');
const app = express();
const router = express.Router();

const { createUser } = require('../controllers/user/RegisterController');
// const { validateUserSignup  } = require('../middleware/validation/user');





// router.post('/', (req, res)=> {
//     createUser;
// });
// router.route("/").post(validateUserSignup, createUser);
router.route("/").post(createUser);
module.exports = router;