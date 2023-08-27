import { Router } from 'express';
const router = Router();
import { register, login, logout } from '../controllers/authController.js';
import { validateRegisterInput, validateLoginInput } from '../middleware/validationMiddleware.js';
import rateLimiter from 'express-rate-limit';

const apiLimiter = rateLimiter({
    windowMs: 1000 * 60 * 15, // 15 minutes
    max: 15,
    message: { msg: 'IP rate limit exceeded, retry in 15 minutes.' },
});

router.post('/register', apiLimiter, validateRegisterInput, register);
router.post('/login', apiLimiter, validateLoginInput, login);
router.get('/logout', logout);

export default router;
