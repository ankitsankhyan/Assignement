const { check, validationResult } = require("express-validator");
module.exports.validbook = [
    check("title").trim().not().isEmpty().withMessage("Title is required"),
    check("author").trim().not().isEmpty().withMessage("Author is required"),
    check("description").trim().not().isEmpty().withMessage("Description is required"),
]


module.exports.validate = (req, res, next) => {
   const errors = validationResult(req).array();
    if (errors.length) {
         return res.status(400).json({
              errors: errors[0].msg,
         });
    }
    next();
}