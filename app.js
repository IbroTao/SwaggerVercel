    // app.js
    const express = require('express');
    const swaggerUi = require('swagger-ui-express');
    const swaggerDocument = require('./swagger.js');
    const messageRoutes = require('./routes/authRoutes.js');
    const YAML = require('yamljs');
    const path = require('path');

    const app = express();
    const port = process.env.PORT || 3000;

    // Load Swagger document
    // const swaggerDocument = YAML.load(path.join(__dirname, 'swagger.yaml'));

    app.use('/api/auth', messageRoutes);


    // Serve Swagger UI
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

    // Define your API routes (example)
    app.get('/', (req, res) => {
        res.json([{  message: 'Welcome to the API!' }]);
    });

    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });