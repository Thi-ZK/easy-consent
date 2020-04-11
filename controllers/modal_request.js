const express = require('express');
const router = express.Router();
const path = require('path');
const db_model = require("../models/modal_request.js");
const fs = require('fs');


router.get('/', (req, res) => {
	res.send("E A TERRA TODA TREMER QUE EU JAMAIS VOU DEIXAR DE TE AMAR TE QUERER");
});

router.get('/modal', (req, res) => {
	var domain = req.query.domain;

	db_model.get_doc("clients", domain).then((data) => {
		fs.readFile(path.resolve("public/javascripts/modal_request_all_data.js"), 'utf-8', (err, js_data) => {
		  	if (err) res.send("Error reading file");

		  	final_script = 'window.__modal_domain_flag="' + req.query.domain + '";' + js_data;
		  	res.send(final_script);
		});
	}).catch(() => {
		res.send("Internal Error");
	});
});

router.get('/TEST_MODAL', (req, res) => {
	if (req.headers.host == "127.0.0.1:9999") {
		res.render('modal');
	}else{
		res.send("Not Allowed");
	}
});

module.exports = router;