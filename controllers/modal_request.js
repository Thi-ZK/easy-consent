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
	var lang = req.query.lang;

	db_model.get_doc("clients", domain).then((data) => {
		fs.readFile(path.resolve("public/javascripts/modal_request_all_data_" + lang + ".js"), 'utf-8', (err, js_data) => {
		  	if (err) {
		  		return res.send("Error reading file or You Requested Something Unexisting");
		  	}

		  	final_script = 'window.__modal_domain_flag="' + req.query.domain + '";' + js_data;
		  	res.send(final_script);
		});
	}).catch(() => {
		res.send("Internal Error or You Requested Something Unexisting");
	});
});

router.get('/TEST_MODAL', (req, res) => {
	if (req.headers.host == "127.0.0.1:9999") {
		res.render('modal_br');
	}else{
		res.send("Not Allowed");
	}
});

module.exports = router;