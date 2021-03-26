const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Teachers Model
const { Teacher } = require('../Models');

const checkId = (req, res, next, val) => {
  if (req.params.id * 1 > id.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid id',
    });
  }
};

const createTeacher = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    university,
    major,
    degree,
    language,
    bio,
    experience,
    description,
    address,
    zip,
    country,
  } = req.body;
  try {
    const newTeacher = await Teacher.create({
      firstName,
      lastName,
      email,
      password,
      university,
      major,
      degree,
      language,
      bio,
      experience,
      description,
      address,
      zip,
      country,
    });

    if (newTeacher) {
      res.status(200).send({ message: 'Teacher added successfully' });
      console.log(newTeacher);
    } else {
      res.status(500).send({ message: 'Failed' });
    }
  } catch (err) {
    res.send({ message: `Error: ${err}` });
  }
};

module.exports = {
  createTeacher,
  checkId,
};
