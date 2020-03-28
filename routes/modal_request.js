const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs'),
    
path_for_function = path.resolve(path.resolve("public/javascripts/modal_request.js"));
path_for_modal = path.resolve(path.resolve("views/modal.html"));

router.get('/', (req, res) => {
	res.sendFile(path.resolve("public/javascripts/modal_request.js"));
});

router.get('/modal', (req, res) => {
	res.sendFile(path.resolve("public/javascripts/modal_request_all_data.js"));
});

router.get('/full_modal', (req, res) => {
	res.sendFile(path.resolve("views/modal.html"));
});

module.exports = router;