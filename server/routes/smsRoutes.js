import express from 'express';
const router = express.Router();

import {
    sendMessage
} from '../controllers/smsController.js';

router.route('/').post(sendMessage);

export default router;