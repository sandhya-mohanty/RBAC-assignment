// const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const connectDB = require('./config/db');

// dotenv.config();

// const authRoutes = require("./routes/authRoutes");
// const protectedRoutes = require("./routes/protectedRoutes");

// const app = express();
// app.use(cors());
// app.use(express.json());
// connectDB();
// // Routes
// app.use("/auth", authRoutes);
// app.use("/protected", protectedRoutes);

// // Database connection and server start

//     app.listen(process.env.PORT, () =>
//       console.log(`Server running on port ${process.env.PORT}`)
//     );
  
// 

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database Connection
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
