const { check, validationResult } = require('express-validator');
const User = require("../../models/user");

//arrays of the validation are atonce checked before registering to system.
exports.validateUserSignup =
    [check('username').trim().not().isEmpty().isLength({min: 3,max: 20 }).withMessage("name must be within 3 to 20 character long"),
    check('email').normalizeEmail().isEmail().not().isEmpty().withMessage('invalid email').custom(async (email) => {
    const existinguser = await User.findOne({ email });
    if (existinguser) {
      return Promise.reject('E-mail already in use');
    }
  
    }),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long').isStrongPassword().withMessage('Password must be strong (e.g. contain a mix of uppercase and lowercase letters, numbers, and symbols)'),
    check('address').trim().not().isEmpty().withMessage('you cannot leave it blank'),
  //this one is a method created to check errors during validation and sending message to respective place.
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
      const errorMessages = errors.array().map(error => ({ message: error.msg }));
    return res.status(422).json({ errors: errorMessages });
  }
  next();
}
    

 
    ];
    

