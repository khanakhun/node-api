const express = require('express');
const router = express.Router();

const { createUser, checkId } = require('../controller/userController');

router.param('id', checkId);
router.route('/register').post(createUser);

module.exports = router;
