const express = require('express');
const app = express();

const modal_req_router = require('./routes/modal_request.js');
const test_router2 = require('./routes/test_2.js');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

app.use('/modal_request', modal_req_router);
app.use('/test2', test_router2);

app.listen(process.env.PORT || 9999);