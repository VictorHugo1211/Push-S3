const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');


routes.post('/posts', multer(multerConfig).single('file'), (req, res) => {
    
    return res.json({ok: true});
});

module.exports = routes;