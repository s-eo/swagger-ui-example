/**
 * Created by Lena on 19/08/10.
 */
const express = require('express');
const http = require('http');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

http.createServer(app).listen('8080', function(){
    console.log('Express server listening on port 8080');
});
