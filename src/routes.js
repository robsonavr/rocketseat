const express = require('express');
const PostController = require('../controllers/PostController');

const routes = new express.Router();

routes.post('/posts', (request, response) => {
    return response.send(`Hello ${request.query.name}! Parabens`);
});



module.exports = routes;