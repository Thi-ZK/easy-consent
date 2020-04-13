const express = require('express');
const router = express.Router();
const path = require('path');
const db_model = require("../models/modal_request.js");
const fs = require('fs');


router.get('/', (req, res) => {
	res.send("E A TERRA TODA TREMER QUE EU JAMAIS VOU DEIXAR DE TE AMAR TE QUERER");
});

router.get('/modal', (req, res) => { // later on identify which type user wants the modal, with or without cookies descrp and if only warn modal
	var domain = req.query.domain;
	var lang = req.query.lang;

	//get cookies from domain and already verify if domain is registered. cookies are documents
	db_model.get_sub_collection_all_docs('clients', domain, 'cookie_scan_results').then(all_docs => {
		console.log(all_docs);
		res.render('modals_with_cookie_scan/modal_js_' + lang, {scan_data: all_docs, modal_domain_flag: domain});
	}).catch(error => {console.log("hallo");
		res.send(error);
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