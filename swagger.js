// swagger.config.js
const swaggerJsdoc = require('swagger-jsdoc');

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
        title: 'New Swagger API Endpoints Documentation',
        version: '1.0.0',
        description: 'User auth and verification endpoints for Personal and Business users',
        },
        servers: [
            { url: "http://localhost:3000" },            // local dev
            { url: "https://swaggervercel.pxxl.click" }     // production on Pxxl
        ],
        components: {
        securitySchemes: {
            bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
            },
        },
        schemas: {
            UserSignup: {
            type: 'object',
            required: ['email', 'password', 'username', 'phoneNumber',],
            properties: {
                email: { type: 'string', format: 'email', example: 'markzuck@gmail.com' },
                password: { type: 'string', minLength: 8, example: 'password123' },
                username: { type: 'string', example: 'markzuck' },
                phoneNumber: { type: 'string', example: '09133333333' },
            },
            },
            LoginRequest: {
            type: 'object',
            required: ['email', 'password'],
            properties: {
                email: { type: 'string', format: 'email', example: 'markzuck@gmail.com' },
                password: { type: 'string', example: 'password123' },
            },
            },
            VerifyEmailRequest: {
            type: 'object',
            required: ['email', 'code'],
            properties: {
                email: { type: 'string', format: 'email', example: 'markzuck@gmail.com' },
                code: { type: 'string', pattern: '^[0-9]{6}$', example: '123456' },
            },
            },
            ForgotPasswordRequest: {
            type: 'object',
            required: ['email'],
            properties: {
                email: { type: 'string', format: 'email', example: 'markzuck@gmail.com' },
            },
            },
            VerifyForgotPasswordRequest: {
            type: 'object',
            required: ['email', 'code'],
            properties: {
                email: { type: 'string', format: 'email', example: 'markzuck@gmail.com' },
                code: { type: 'string', pattern: '^[0-9]{6}$', example: '123456' },
            },
            },
            ResetPasswordRequest: {
            type: 'object',
            required: ['email', 'code', 'newPassword'],
            properties: {
                email: { type: 'string', format: 'email', example: 'markzuck@gmail.com' },
                code: { type: 'string', pattern: '^[0-9]{6}$', example: '123456' },
                newPassword: { type: 'string', minLength: 8, example: 'newpassword123' },
            },
            },
            UpdatePasswordRequest: {
                type: 'object',
                required: ['oldPassword', 'newPassword'],
                properties: {
                    oldPassword: { type: 'string', example: 'password123' },
                    newPassword: { type: 'string', minLength: 8, example: 'newpassword123' },
                },
            },
            BusinessUpdateRequest: {
                type: 'object',
                properties: {
                    businessName: {type: 'string', example: 'Lovers Plaza Hotel'},
                    address: { type: 'string', example: 'No 55 Ikoyi Street Off, Lagos' },
                    description: { type: 'string', example: 'Home away from home' },
                    openHours: { type: 'string', example: '8:00am - 12:00pm' },
                    profilePicture: { type: 'string', example: 'https://example.com/profile.jpg' },
                },
            },
            PostCreateRequest: {
                type: 'object',
                required: ['content'],
                properties: {
                    content: { type: 'string', example: 'New post content' },
                    images: { type: 'array', items: { type: 'string' }, example: ['https://example.com/image1.jpg'] },
                },
            },
            ReviewCreateRequest: {
                type: 'object',
                required: ['businessId', 'rating', 'comment'],
                properties: {
                    businessId: { type: 'string', example: '68cbdec46e90e4ff6b76f60d' },
                    rating: { type: 'number', example: 4.5 },
                    comment: { type: 'string', example: 'Great service!' },
                },
            },
            AnalyticsResponse: {
                type: 'object',
                properties: {
                    success: { type: 'boolean', example: true },
                    views: { type: 'number', example: 10000 },
                    visitors: { type: 'number', example: 5000 },
                    followers: { type: 'number', example: 7000 },
                    likes: { type: 'number', example: 2000 },
                    reviewsCount: { type: 'number', example: 322 },
                    rating: { type: 'number', example: 4.5 },
                    graphData: { type: 'array', items: { type: 'object' }, example: [{ date: '2024-01-01', value: 100 }] },
                },
            },
            CategoriesResponse: {
            type: 'object',
            properties: {
                success: { type: 'boolean', example: true },
                categories: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                    category: { type: 'string', example: 'Nightlife & Hotspots' },
                    tags: { type: 'string', example: 'Lounge, Club, Bar, Franchise consulting, DJ Nights' }
                    }
                },
                example: [
                        { category: 'Nightlife & Hotspots', tags: 'Lounge, Club, Bar, Franchise consulting, DJ Nights' },
                        { category: 'Food & Dining', tags: 'Restaurant, Quick Bites, Fine Dining, Local Dishes' }
                        ]
                    },
                },
            },
            PersonalTagsResponse: {
                type: 'object',
                properties: {
                    success: { type: 'boolean' },
                    tags: {
                    type: 'array',
                    items: { type: 'string' },
                    example: ['Trending Food Spots', 'Drinks & Nightlife'],
                    },
                },
            },
            SetAccountTypeRequest: {
                type: 'object',
                required: ['id', 'accountType'],
                properties: {
                    id: { type: 'string', example: '68d949c837dd1eed2d12fdcd' },
                    accountType: { type: 'string', example: 'Business' },
                },
            },
            AuthResponse: {
                type: 'object',
                properties: {
                    success: { type: 'boolean', example: true },
                    message: { type: 'string', example: 'Success' },
                    user: {
                    type: 'object',
                    properties: {
                        id: { type: 'string', example: '68cbdec46e90e4ff6b76f60d' },
                        email: { type: 'string', example: 'markzuck@gmail.com' },
                        username: { type: 'string', example: 'markzuck' },
                        phoneNumber: { type: 'string', example: '09147697253' },
                        accountType: { type: 'string', example: 'Business' },
                        categories: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                            category: { type: 'string', example: 'food & Dining' },
                            tags: { type: 'array', items: { type: 'string' }, example: ['Local Dishes', 'Restaurant', 'Buffet', 'Bukka', 'Quick Bites'] },
                            },
                        },
                        },
                        // tags: { type: 'array', items: { type: 'string' }, example: ['Trending Food Spots'] },
                        isEmailVerified: { type: 'boolean', example: true },
                        isActive: { type: 'boolean', example: true },
                        lastLoginAt: { type: 'string', format: 'date-time' },
                        profileCompleteness: { type: 'number', example: 100 },
                        address: { type: 'string', example: '50 Siaka Stevens Street, Freetown, Sierra Leone' },
                        description: { type: 'string', example: 'We now offer premium champagne and unique cocktails' },
                        rating: { type: 'number', example: 4.5 },
                        reviewsCount: { type: 'number', example: 322 },
                        openHours: { type: 'string', example: '' },
                        profilePicture: { type: 'string', example: 'https://example.com/profile.jpg' },
                        followers: { type: 'number', example: 7000 },
                        likes: { type: 'number', example: 2000 },
                    },
                    },
                    token: { type: 'string', example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' },
                },
            },
            BusinessResponse: {
                type: 'object',
                properties: {
                    success: { type: 'boolean', example: true },
                    message: { type: 'string', example: 'Success' },
                    user: {
                    type: 'object',
                    properties: {
                        id: { type: 'string', example: '68cbdec46e90e4ff6b76f60d' },
                        businessName: { type: 'string', description: 'The name of the business', example: 'Grand Hotel' },
                        description: { type: 'string', description: 'Description of the business', example: 'A luxurious hotel experience' },
                        location: { type: 'string', description: 'Business location or address', example: 'Lagos, Nigeria' },
                        accountType: { type: 'string', example: 'Business' },
                        category: {
                        type: 'string',
                        example: 'Hotels & Stays',
                        },
                        tags: {
                            type: 'array',
                            items: {
                                type: 'string',
                                example: ['Hotel', 'Luxury Stay']
                            }
                        },
                        // tags: { type: 'array', items: { type: 'string' }, example: ['Trending Food Spots'] },
                        profilePicture: { type: 'boolean', example: true },
                        isActive: { type: 'boolean', example: true },
                        lastLoginAt: { type: 'string', format: 'date-time' },
                        profileCompleteness: { type: 'number', example: 100 },
                        rating: { type: 'number', example: 4.5 },
                        reviewsCount: { type: 'number', example: 322 },
                        openHours: { type: 'string', example: '' },
                        profilePicture: { type: 'string', example: 'https://example.com/profile.jpg' },
                        followers: { type: 'number', example: 7000 },
                        likes: { type: 'number', example: 2000 },
                    },
                    },
                },
            },
            SuccessResponse: {
            type: 'object',
            properties: {
                success: { type: 'boolean', example: true },
                message: { type: 'string', example: 'Succesful' },
                },
            },
            ErrorResponse: {
            type: 'object',
            properties: {
                    success: { type: 'boolean', example: false },
                    message: { type: 'string', example: 'Invalid credentials' },
                },
                },
            },
        },
    },
    apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

module.exports = swaggerSpec;
