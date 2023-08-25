import { Router } from 'express';
const router = Router();
import {
    getJob,
    getAllJobs,
    createJob,
    updateJob,
    deleteJob,
    showStats,
} from '../controllers/jobController.js';
import { validateJobInput, validateIdParam } from '../middleware/validationMiddleware.js';
import { checkForTestUser } from '../middleware/authMiddleware.js';

router.route('/').get(getAllJobs);
router.route('/').post(checkForTestUser, validateJobInput, createJob);
router.route('/stats').get(showStats);
router.route('/:id').get(validateIdParam, getJob);
router.route('/:id').patch(checkForTestUser, validateJobInput, validateIdParam, updateJob);
router.route('/:id').delete(checkForTestUser, validateIdParam, deleteJob);

export default router;