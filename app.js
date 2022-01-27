const app = require('express')();
const bodyParser = require('body-parser');
const router = require('./router');
const mongoose = require('mongoose');

require('dotenv').config();

// Parse all incoming requests to json
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true,
    defer: true
}));

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Database connected!"))
    .catch(err => console.log(err));

// Middleware for router
app.use('/', router);

const PORT_NO = process.env.PORT_NO;

// Starting the server
app.listen(PORT_NO, () => {
    console.log(`app is listening to ${PORT_NO}`)
});