const User = require('../models/User.model');

module.exports.signup = (req, res, next) => {
  res.render('auth/signup');
};

module.exports.doSignup = (req, res, next) => {
  const renderWithErrors = (errors) => {
    res.render('auth/signup', {
      user: {
        email: req.body.email,
        name: req.body.name
      },
      errors
    });
  };

  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        // lo creo y redirijo
        return User.create(req.body)
          .then(user => {
            res.redirect('/');
          });
      } else {
        renderWithErrors('Email already registered');
      }
    })
    .catch(error => {
      renderWithErrors(error);
    });
};
