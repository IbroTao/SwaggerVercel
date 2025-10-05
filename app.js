    // app.js
    const express = require('express');
    const swaggerUi = require('swagger-ui-express');
    const messageRoutes = require('./routes/authRoutes.js');   

    // const YAML = require('yamljs');
    // const path = require('path');
    const swaggerSpec = require('./swagger.js');

    const app = express();
    const port = process.env.PORT || 3000;

    // Load Swagger document
    // const swaggerDocument = YAML.load(path.join(__dirname, 'swagger.yaml'));

    // Serve Swagger UI
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    app.use('/api/auth', messageRoutes);

    // Define your API routes (example)
    app.get('/users', (req, res) => {
        res.json([{ id: 1, name: 'Alice', age: 45 }, { id: 2, name: 'Bob', age: 30 }]);
    });

    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });