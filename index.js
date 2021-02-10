const express = require('express');
const app = express();


app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json('To do home route');
});



const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server is running on port:${PORT}`));