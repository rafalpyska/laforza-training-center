const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = express();

app.use(morgan('combine'));
app.use(bodyParser.json());
app.use(cors());

const classes = JSON.parse(
    fs.readFileSync(`${__dirname}/dev-data/classes.json`)
);

app.listen(process.env.PORT || 8081);

app.get('/api/classes', (req, res) => {
    res.status(200).send({
        status: 'success',
        data: {
            classes
        }
    })
});