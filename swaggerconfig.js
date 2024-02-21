const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'RESTful API Documentation',
      version: '1.0.0',
      description: 'API documentation for the RESTful API',
    },
    servers: [
      {
        url: 'http://localhost:3000', // Sesuaikan dengan URL server Anda
      },
    ],
  },
  apis: ['server.js'], // Sesuaikan dengan berkas yang berisi endpoint API
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
