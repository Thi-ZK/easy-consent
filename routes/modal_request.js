const express = require('express');
const router = express.Router();
const path = require('path');
const admin = require("firebase-admin");

router.get('/', (req, res) => {
	res.send("E A TERRA TODA TREMER QUE EU JAMAIS VOU DEIXAR DE TE AMAR TE QUERER");
});

router.get('/modal', (req, res) => {
	const db = admin.firestore(); console.log(req);
	var host = req.headers.host;

	let client = db.collection('clients').doc(host);
	let get_doc = client.get().then(doc => {
	    if (!doc.exists) {
	      res.send("Domain Not Allowed");
	    } else {
	      console.log('Document data:', doc.data());
	      res.sendFile(path.resolve("public/javascripts/modal_request_all_data.js"));
	    }
	  }).catch(err => {
	    console.log('Error getting document in database', err);
	    res.send("Error Within Database, Please Contact Me");
	  });
});

module.exports = router;