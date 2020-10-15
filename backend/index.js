const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 45000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const User = require('./api/User');

app.use('/api/users/', User);

app.listen(PORT, () => console.log(`App running on the port:http://localhost:${PORT}`));
