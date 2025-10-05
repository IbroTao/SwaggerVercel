    // app.js
    const express = require('express');
    const swaggerUi = require('swagger-ui-express');
    const YAML = require('yamljs');
    const path = require('path');

    const app = express();
    const port = process.env.PORT || 3000;

    // Load Swagger document
    const swaggerDocument = YAML.load(path.join(__dirname, 'swagger.yaml'));

    // Serve Swagger UI
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

    // Define your API routes (example)
    app.get('/users', (req, res) => {
        res.json([{ id: 1, name: 'Alice', age: 45 }, { id: 2, name: 'Bob', age: 30 }]);
    });

    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });