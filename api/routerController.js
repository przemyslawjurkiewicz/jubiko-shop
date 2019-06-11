const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

// Load User model
const User = require('../models/User');
const Product = require('../models/Product');

// Load input validation
const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login');

const routerController = {
  home: (req, res) => {
    Product.find().exec((err, products) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json({ products });
    });
  },

  product: (req, res) => {
    if (!req.params.id) {
      res.status(500).send('ID field is required.');
    }

    Product.findOne({ _id: req.params.id }).exec((err, product) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json({ product });
    });
  },

  postRegister: (req, res) => {
    // Form validation
    const { errors, isValid } = validateRegisterInput(req.body);
    // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    // If the user already exists
    User.findOne({ email: req.body.email }).then(user => {
      if (user) {
        return res.status(400).json({ email: 'Ten Email już istnieje' });
      }
      // If user is a new user, fill in the fields
      const newUser = new User({
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        city: req.body.city,
        street: req.body.street,
        zip: req.body.zip
      });

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    });
  },

  postLogin: (req, res) => {
    // Form validation
    const { errors, isValid } = validateLoginInput(req.body);
    // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const email = req.body.email;
    const password = req.body.password;
    //const city = req.body.city;
    //const street= req.body.street;
    //const zip = req.body.zip;
    // Find user by email
    User.findOne({ email }).then(user => {
      // Check if user exists
      if (!user) {
        return res.status(404).json({ emailnotfound: 'Email nie znaleziony' });
      }
      // Check password (bsryptjs)
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          // User matched
          // Create JWT Payload for passport.js
          const payload = {
            id: user.id,
            name: user.name,
            city: user.city,
            street: user.street,
            zip: user.zip
          };
          // Sign token
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 31556926 // 1 year in seconds
            },
            (err, token) => {
              res.json({
                success: true,
                token: 'Bearer ' + token
              });
            }
          );
        } else {
          return res
            .status(400)
            .json({ passwordincorrect: 'Nieprawidłowe hasło' });
        }
      });
    });
  }
};
module.exports = routerController;
