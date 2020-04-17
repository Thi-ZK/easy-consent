const express = require('express');
const router = express.Router();
const path = require('path');
const db_model = require("../models/modal_request.js");
const middws = require("../middlewares/modal_request.js");

router.get('/', (req, res) => {
	res.send("E A TERRA TODA TREMER QUE EU JAMAIS VOU DEIXAR DE TE AMAR TE QUERER");
});

// For Production Handling  ---- Complete Modal With Cookie Scanning
router.get('/modal', middws.cookie_verification_rdr, (req, res) => { // later on identify which type user wants the modal, with or without cookies descrp and if only warn modal
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
});

// For Implementation & Testing ---- Complete Modal With Cookie Scanning
router.get('/TEST_MODAL', (req, res) => {
	if (req.headers.host == "127.0.0.1:9999") {
		db_model.get_sub_collection_all_docs('clients', 'zkitens.herokuapp', 'cookie_scan_results').then(all_docs => {
			let all_data = {
				scan_data: all_docs,
			};

			// console.log(all_docs);
			res.render('modals_with_cookie_scan_TEST/modal_' + (req.query.lang || 'br'), all_data);
		}).catch(error => { console.log(error);
			// console.log("hallo");
			res.send(error);
		});
	}else{
		res.send("Not Allowed");
	}
});

// sets cookie to prevent readings from db, returning nothing since user don't need the modal
router.get('/modal_closed', (req, res) => {console.log("HAPPENED!!!!! 1");
	res.cookie('easy_consent_rdr_flag', '1', {maxAge: 63113804000});
	res.send("");
});

// deletes cookie to enable readings from db again, user may have expired the config cookie
router.get('/modal_restore', (req, res) => {console.log("HAPPENED!!!!! 2");
	res.clearCookie('easy_consent_rdr_flag');
	res.send("");
});

module.exports = router;