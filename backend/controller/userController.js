const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { User } = require('../Models');

const checkId = (req, res, next, val) => {
  if (req.params.id * 1 > id.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid id',
    });
  }
};

// Regsiter
const createUser = async (req, res) => {
  try {
    let user = User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      userType: req.body.userType,
      phone: req.body.phone,
      gender: req.body.gender,
      address: req.body.address,
    });
    if (user) {
      res.status(200).send({ message: 'NewUser added successfully' });
      console.log(user);
    } else {
      res.status(500).send({ message: 'Failed' });
    }
  } catch (err) {
    res.send({ message: `Error: ${err}` });
  }
};

module.exports = {
  createUser,
  checkId,
};
