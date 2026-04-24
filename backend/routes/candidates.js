import express from 'express';
import {
  createCandidate,
  deleteCandidate,
  getCandidateById,
  getCandidates,
  updateCandidate
} from '../controllers/candidateController.js';
import { protect } from '../middleware/authMiddleware.js';
import { authorizeRoles } from '../middleware/roleMiddleware.js';

const router = express.Router();

router.use(protect);
router.get('/', getCandidates);
router.get('/:id', getCandidateById);
router.post('/', authorizeRoles('HR', 'CEO'), createCandidate);
router.put('/:id', authorizeRoles('HR', 'Team', 'CEO'), updateCandidate);
router.delete('/:id', authorizeRoles('HR', 'CEO'), deleteCandidate);

export default router;
