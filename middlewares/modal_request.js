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

module.exports = {
	cookie_verification_rdr: cookieVerificationForReducingReads,
	cookie_set_rdr: cookieSetForReducingReads,
	cookie_clear_rdr: cookieClearForReducingReads,
	check_if_host_is_local_host: checkIfHostIsLocalHost
};