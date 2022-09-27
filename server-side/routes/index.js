const express = require('express');
const router = express.Router();
//const {body, validationResult} = require('express-validator');

const usersController = require('../controllers/users_controller');
router.get('/', (req, res) => {return res.status(200).json({"message": "It is working"})});
router.post('/api/data', usersController.formdata);

module.exports = router;
