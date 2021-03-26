const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const { sequelize } = require('./models');

const PORT = 3000;

// Routers
const { userRouter, teacherRouter } = require('./routes');
// Helper functions
const authJwt = require('./helpers/jwt');
const errorHandler = require('./helpers/errors');

// API Version
const api = process.env.API_URL;

// Middlewares
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(cors());
app.options('*', cors());

app.use('/public/uploads', express.static(__dirname + '/public/uploads'));
app.use(express.json());

// API Routes
app.use(`${api}/users`, userRouter);
app.use(`${api}/teachers`, teacherRouter);

// old routes
// app.use('/api/users', userRouter);
// app.use('/api/teachers', teacherRouter);

// Server
app.listen(PORT, async () => {
  console.log(`Server running at http://localhost:${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
