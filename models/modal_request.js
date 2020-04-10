const admin = require("firebase-admin");
const collection_name = "clients";

admin.initializeApp({
	credential: admin.credential.cert({
	  "type": process.env.FB_TYPE,
	  "project_id": process.env.FB_PROJECT_ID,
	  "private_key_id": process.env.FB_PK_ID,
	  "private_key": process.env.FB_PK.replace(/\\n/g, '\n'),
	  "client_email": process.env.FB_CLIENT_EMAIL,
	  "client_id": process.env.FB_CLIENT_ID,
	  "auth_uri": process.env.FB_AUTH_URI,
	  "token_uri": process.env.FB_TOKEN_URI,
	  "auth_provider_x509_cert_url": process.env.FB_AUTH_CERT_URL,
	  "client_x509_cert_url": process.env.FB_CLIENT_CERT_URL
	}),
	databaseURL: "https://easy-consent.firebaseio.com"
});

const db = admin.firestore();

async function getFirebaseDoc(collection_name, doc_name) {
    let res = {
        id: doc_name
    };

    let snapshot = await db.collection(collection_name).get();

    snapshot.forEach( doc => {
        if(doc.id == doc_name) {
            res.data = doc.data();
        }
    });

    return res;
};

module.exports = {
	get_doc: getFirebaseDoc
}