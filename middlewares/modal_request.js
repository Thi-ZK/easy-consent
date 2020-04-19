const db_model = require("../models/modal_request.js");

cookieVerificationForReducingReads = (req, res, next) => {
	if (req.cookies && req.cookies.easy_consent_rdr_flag) {
		return res.send();
	}else {
		next();
	}
}

cookieSetForReducingReads = (req, res, next) => {
	res.cookie('easy_consent_rdr_flag', '1', {maxAge: 63113804000});
	next();
}

cookieClearForReducingReads = (req, res, next) => {
	res.clearCookie('easy_consent_rdr_flag');
	next();
}

checkIfHostIsLocalHost = (req, res, next) => {
	if (req.headers.host == "127.0.0.1:9999") {
		next();
	}else {
		res.send("Not Allowed / C3");
	}
}

// also verifies already if domain is registered or not
getAllScannedCookiesFromDomain = (req, res, next) => {
	let domain = req.query.domain || '127.0.0.1:9999';

	db_model.get_sub_collection_all_docs('clients', domain, 'cookie_scan_results').then(all_docs => {
		res.locals.to_be_passed_data = {
			scan_data: all_docs,
			modal_domain_flag: domain
		};

		// console.log(all_docs);
		next();
	}).catch(error => {
		// console.log("hallo");
		res.send(error);
	});
}

checkIfDomainIsRegistered = (req, res, next) => {
	let domain = req.query.domain || '127.0.0.1:9999';

	db_model.does_doc_exists('clients', domain).then(status => {
		res.locals.to_be_passed_data = {modal_domain_flag: domain};

		next();
	}).catch(error => {
		res.send("Error / E1");
	});
}

module.exports = {
	cookie_verification_rdr: cookieVerificationForReducingReads,
	cookie_set_rdr: cookieSetForReducingReads,
	cookie_clear_rdr: cookieClearForReducingReads,
	check_if_host_is_local_host: checkIfHostIsLocalHost,
	get_scanned_cookies_from_domain: getAllScannedCookiesFromDomain,
	check_if_domain_is_registered: checkIfDomainIsRegistered
};