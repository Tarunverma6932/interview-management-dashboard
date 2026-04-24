import express from 'express';
import {
  createInterview,
  getInterviewById,
  getInterviews,
  getInterviewsByCandidate,
  updateInterview
} from '../controllers/interviewController.js';
import { protect } from '../middleware/authMiddleware.js';
import { authorizeRoles } from '../middleware/roleMiddleware.js';

const router = express.Router();

router.use(protect);
router.get('/', getInterviews);
router.get('/:id', getInterviewById);
router.get('/candidate/:candidateId', getInterviewsByCandidate);
router.post('/', authorizeRoles('HR', 'Team'), createInterview);
router.put('/:id', authorizeRoles('HR', 'Team', 'CEO'), updateInterview);

export default router;
