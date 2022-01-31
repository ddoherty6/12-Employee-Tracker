const express = require('express');
const db = require('./db/connection.js');
const routes = require('./routes');

//const PORT = process.env.PORT || 3001;
const PORT = 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use apiRoutes
app.use(routes);

  // Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  });