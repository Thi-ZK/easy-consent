const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
	res.send("E A TERRA TODA TREMER QUE EU JAMAIS VOU DEIXAR DE TE AMAR TE QUERER");
});

router.get('/modal', (req, res) => {
	res.sendFile(path.resolve("public/javascripts/modal_request_all_data.js"));
});

module.exports = router;