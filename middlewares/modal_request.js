cookieVerificationForReducingReads = (req, res, next) => {
	if (req.cookies && req.cookies.easy_consent_rdr_flag) {
		return res.send();
	}else {
		next();
	}
}

module.exports = {
	cookie_verification_rdr: cookieVerificationForReducingReads
};