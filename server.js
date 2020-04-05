const express = require('express');
const admin = require("firebase-admin");
const app = express();

const modal_req_router = require('./routes/modal_request.js');
const test_router2 = require('./routes/test_2.js');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

admin.initializeApp({
	credential: admin.credential.cert({
	  "type": process.env.FB_TYPE,
	  "project_id": process.env.FB_PROJECT_ID,
	  "private_key_id": process.env.FB_PK_ID,
	  "private_key": process.env.FB_PK,
	  "client_email": process.env.FB_CLIENT_EMAIL,
	  "client_id": process.env.FB_CLIENT_ID,
	  "auth_uri": process.env.FB_AUTH_URI,
	  "token_uri": process.env.FB_TOKEN_URI,
	  "auth_provider_x509_cert_url": process.env.FB_AUTH_CERT_URL,
	  "client_x509_cert_url": process.env.FB_CLIENT_CERT_URL
	}),
	databaseURL: "https://easy-consent.firebaseio.com"
});

app.use('/modal_request', modal_req_router);
app.use('/test2', test_router2);

app.listen(process.env.PORT || 9999);