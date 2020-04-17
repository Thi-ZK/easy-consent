const express = require('express');
const router = express.Router();
const path = require('path');
const db_model = require("../models/modal_request.js");

router.get('/', (req, res) => {
	res.send("E A TERRA TODA TREMER QUE EU JAMAIS VOU DEIXAR DE TE AMAR TE QUERER");
});

// For Production Handling
router.get('/modal', (req, res) => { // later on identify which type user wants the modal, with or without cookies descrp and if only warn modal
	console.log("\n\n\n");
	console.log(req.cookies);
	console.log("\n\n\n");

	res.cookie('easy_consent_presence_flag', '0', {maxAge: 9000000, domain: 'zkitens.herokuapp.com'});
	// check if user has already chosen an option and therefore has the cookie before reading the DB // reduce the number of reads
	// if (!req.cookies.easy_consent_presence_flag) {
		let domain = req.query.domain || "127.0.0.1:9999";
		let lang = req.query.lang;
		const modal_to_render = 'modals_with_cookie_scan/modal_js_' + (lang || 'br');

		//get cookies from domain and already verify if domain is registered. cookies are documents
		db_model.get_sub_collection_all_docs('clients', domain, 'cookie_scan_results').then(all_docs => {
			let all_data = {
				scan_data: all_docs,
				modal_domain_flag: domain
			};

			// console.log(all_docs);
			res.render(modal_to_render, all_data);
		}).catch(error => {
			// console.log("hallo");
			res.send(error);
		});
	// }else{
	// 	res.send("");
	// }
});

// For Implementation & Testing
router.get('/TEST_MODAL', (req, res) => {
	if (req.headers.host == "127.0.0.1:9999") {
		db_model.get_sub_collection_all_docs('clients', 'zkitens.herokuapp', 'cookie_scan_results').then(all_docs => {
			let all_data = {
				scan_data: all_docs,
			};

			// console.log(all_docs);
			res.render('modal_br', all_data);
		}).catch(error => { console.log(error);
			// console.log("hallo");
			res.send(error);
		});
	}else{
		res.send("Not Allowed");
	}
});

module.exports = router;