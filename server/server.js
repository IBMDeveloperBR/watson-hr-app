const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const dotenv = require('dotenv');
const fileUpload = require('express-fileupload');

const PORT = process.env.PORT || 8000;

const app = express();

dotenv.config();
app.use(morgan(process.env.NODE_ENV || 'dev'));
app.use(cors());

//helmet config
app.use(helmet());
app.use(helmet.hidePoweredBy({ setTo: 'PHP 5.5.14' }));
app.use(helmet.xssFilter());
app.disable('x-powered-by');

//body-parser config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(fileUpload());

//API Routes
require('./Routes')(app, express);

//Error handler
app.use((err, req, res, next) => {
    if(err.err) {
        console.error('\x1b[31m', '[SERVER] ' + err.err);
        res.status(err.status || 500).json({result: err.msg});
    }
    next();
});

app.listen(PORT, (err) => {
    if(err) {
        throw err;
    } else {
        console.log('[SERVER] Listen on localhost:' + PORT);
    }
});