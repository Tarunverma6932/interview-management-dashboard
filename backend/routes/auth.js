import express from 'express';
import { authUser, registerUser, getProfile } from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/signin', authUser);
router.post('/signup', registerUser);
router.get('/profile', protect, getProfile);

export default router;
