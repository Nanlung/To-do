const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const db = require('./Models');

db.sequelize.sync();

app.get('/', (req, res) => {
  res.status(200).json('To do home route');
});



const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server is running on port:${PORT}`));