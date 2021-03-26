const express = require('express');
const router = express.Router();

const { createTeacher, checkId } = require('../controller/teacherController');

router.param('id', checkId);
router.route('/register').post(createTeacher);

module.exports = router;
