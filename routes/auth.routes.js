// routes/authRoutes.js
const express = require('express');
const authController = require('../controllers/auth.controller.js');


const router = express.Router();

// Public routes (no authentication needed)
/**
 * @swagger
 * tags:
 * name: Authentication
 * description: User authentication and management
 */

/**
 * @swagger
 * /api/auth/signup:
 *   post:
 *     summary: Register a new user (Personal or Business)
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserSignup'
 *     responses:
 *       201:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthResponse'
 *       400:
 *         description: Bad request or validation error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       409:
 *         description: Email or username already exists
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.post('/signup', authController.signup);