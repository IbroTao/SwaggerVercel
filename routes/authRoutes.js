// routes/authRoutes.js
const express = require('express');

const router = express.Router();

// Your API endpoint
/**
 * @swagger
 * /api/auth/message:
 *   get:
 *     summary: Returns a greeting.
 *     responses:
 *       200:
 *         description: A successful response with a welcome message.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Welcome to the API!"
 */
router.get('/message', (req, res) => {
    res.json({ message: 'Welcome to the API!' });
});

module.exports = router;