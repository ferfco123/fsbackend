const { Checkout } = require(`../models/models.js`);
const { check, validationResult, body } = require("express-validator");

const validarId = async (req, res, next) => {
  const usuario = await Checkout.findById(req.params.id);
  if (usuario !== null) {
    next();
  } else {
    res.json({ msg: " el id es invalido" });
  }
};

const chequeos = [
  check("name").exists().not().isEmpty().withMessage("debe introducir un nombre"),
  check("surname").exists().not().isEmpty().withMessage("debe introducir un apellido"),
  check("adress").exists().not().isEmpty().withMessage("debe introducir una direccion"),
  check("city").exists().not().isEmpty().withMessage("debe introducir una ciudad"),
  check("province").exists().not().isEmpty().withMessage("debe introducir una provincia"),
  check("postalCode").exists().not().isEmpty().withMessage("debe introducir un codigo postal"),
  check("country").exists().not().isEmpty().withMessage("debe introducir un pais"),
  check("age")
    .exists()
    .isNumeric()
    .not()
    .isEmpty()
    .withMessage("debe introducir una edad")
    .custom((value, { req }) => {
      if (value < 18) {
        throw new error(" debe ser mayor de 18 años");
      }
      return true;
    }),

  check("email").exists().not().isEmpty().isEmail().normalizeEmail().withMessage("debe introducir un email"),
  check("password")
    .exists()
    .not()
    .isEmpty()
    .isLength({ max: 15, min: 8 })
    .withMessage("debe introducir un password entre 8 y 15 caracteres"),
  check("confirmPassword")
    .exists()
    .custom((value, { req }) => {
      value === req.body.password;
    }),
];

exports.moduls = { validarId, chequeos };
