const express = require('express');
const router = express.Router();
const path = require('path');
const db_model = require("../models/modal_request.js");
const middws = require("../middlewares/modal_request.js");

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

//For Production Handling ---- Complete Modal Without Cookie Scanning
router.get('/modal_ns', middws.cookie_verification_rdr, (req, res) => {
	let domain = req.query.domain || "127.0.0.1:9999";
	let lang = req.query.lang;
	const modal_to_render = 'modals_without_cookie_scan/modal_js_' + (lang || 'br');

	db_model.does_doc_exists('clients', domain).then(status => {
		res.render(modal_to_render, {modal_domain_flag: domain});
	}).catch(error => {
		res.send("Error / E1");
	});
});

// sets cookie to prevent readings from db, returning nothing since user don't need the modal
router.get('/modal_closed', middws.cookie_set_rdr, (req, res) => {
	res.send("");
});

// deletes cookie to enable readings from db again, user may have expired the config cookie
router.get('/modal_restore', middws.cookie_clear_rdr, (req, res) => {
	res.send("");
});





// For Implementation & Testing ---- Complete Modal With Cookie Scanning
router.get('/TEST_MODAL', middws.check_if_host_is_local_host, (req, res) => {
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
});

module.exports = router;