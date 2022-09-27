const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const fs = require('fs');
const path = require('path');
const express = require('express');
const { animals } = require('./data/animals');

const PORT = process.env.PORT || 3001;
const app = express();

// parse incoming string or array data (tells server how to use incoming data) (needs to be up here and just below app on line 5)
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
//This line invokes the public files sent by client
app.use(express.static('public'));





app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
