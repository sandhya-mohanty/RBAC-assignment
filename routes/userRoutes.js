const express = require('express');
const { getAllUsers } = require('../controllers/userController');
const { protect } = require('../middlewares/authMiddleware');
const { authorize } = require('../middlewares/roleMiddleware');

const router = express.Router();

router.get('/', protect, authorize('Admin'), getAllUsers);

module.exports = router;
