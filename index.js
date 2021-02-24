const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const todoRoutes = require('./Routes/todo.routes');
const app = express();


app.use(cors())

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const db = require('./Config/db.config');

db.authenticate()
.then(() => console.log('Database Connection has been established successfully.'))
.catch(error => console.error('Unable to connect to the database:', error));
db.sync();




app.get('/', (req, res) => {
  res.status(200).json('To do home route');
});

app.use('/todo', todoRoutes);

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server is running on port:${PORT}`));