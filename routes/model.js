const express = require('express');

const modelController = require('./../controllers/model');

const router = express.Router();

router.get('/', modelController.getIndex);
router.get('/model-details', modelController.getModelDetails);

module.exports = router;
