const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// server ok!!
app.get('/', (req, res) => {
  res.send('Server is running!!');
});

// start server
const port = process.env.NODE_ENV === 'production' ? 80 : 4000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
