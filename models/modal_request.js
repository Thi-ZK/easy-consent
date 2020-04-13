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

async function getFirebaseSubCollectionDoc(collection_name, doc_name, sub_collection_name, sub_doc_name) {
    try{
        let final_data = {};
        let upper_document = db.collection(collection_name).doc(doc_name);

        let doc_content = await upper_document.get();
        if (!doc_content.exists) {throw "Not Allowed";} // verify if the domain is registered

        let sub_collection = upper_document.collection(sub_collection_name, sub_doc_name);
        
        let data = await sub_collection.get();

        data.forEach( doc => {
            if(doc.id == sub_doc_name) {
                final_data.data = doc.data();
            }
        });

        return final_data;
    }catch(error){
        throw error;
    }
}

async function getFirebaseAllDocsFromSubCollection(collection_name, doc_name, sub_collection_name) {
    try{
        let final_data = {};
        let upper_document = db.collection(collection_name).doc(doc_name);

        let doc_content = await upper_document.get();
        if (!doc_content.exists) {throw "Not Allowed";} // verify if the domain is registered

        let sub_collection = upper_document.collection(sub_collection_name);
        
        let data = await sub_collection.get();

        data.forEach( doc => {
            final_data[doc.id] = doc.data();
        });

        return final_data;
    }catch(error){
        throw error;
    }
}

async function doesFirebaseDocExists(collection_name, doc_name) {
    let doc = db.collection(collection_name).doc(doc_name);
    let doc_snapshot = await doc.get();

    return doc_snapshot.exists ? true : false;
}

module.exports = {
	get_doc: getFirebaseDoc,
    get_sub_collection_doc: getFirebaseSubCollectionDoc,
    get_sub_collection_all_docs: getFirebaseAllDocsFromSubCollection,
    does_doc_exists: doesFirebaseDocExists
}