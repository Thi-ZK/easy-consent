const express = require('express');
const router = express.Router();
const path = require('path');
const middws = require("../middlewares/modal_request.js");

// For Production Handling  ---- Complete Modal With Cookie Scanning
router.get('/modal', middws.cookie_verification_rdr, middws.get_scanned_cookies_from_domain, (req, res) => {
	let lang = req.query.lang;
	const modal_to_render = 'modals_with_cookie_scan/modal_js_' + (lang || 'br');

	res.render(modal_to_render, res.locals.to_be_passed_data);
});

//For Production Handling ---- Complete Modal Without Cookie Scanning
router.get('/modal_ns', middws.cookie_verification_rdr, middws.check_if_domain_is_registered, (req, res) => {
	let lang = req.query.lang;
	const modal_to_render = 'modals_without_cookie_scan/modal_js_' + (lang || 'br');

	res.render(modal_to_render, res.locals.to_be_passed_data);
});

//For Production Handling ---- Complete Modal Only Warn
router.get('/modal_warn', middws.cookie_verification_rdr, middws.check_if_domain_is_registered, (req, res) => {
	let lang = req.query.lang;
	const modal_to_render = 'modals_warn/modal_js_' + (lang || 'br');

	res.render(modal_to_render, res.locals.to_be_passed_data);
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
	res.render('modals_warn_TEST/modal_' + (req.query.lang || 'br'));
});

module.exports = router;