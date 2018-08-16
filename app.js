const express = require('express');
let session = require('express-session');
const app = express();
const bodyParser = require('body-parser');
let mongoose = require('mongoose');

require('./server/config/mongoose.js')();

app.use(bodyParser.json());
app.set('trust proxy', 1);
app.use(session({
    secret: 'supaSecretz',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
app.use(express.static( __dirname + '/public/dist/public' ));

require('./server/config/routes.js')(app);


app.listen(8000, function () {
    console.log("listening on port 8000");
})
