const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const path = require('path');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/userRegistrationDB')
.then(() => console.log('MongoDB connected...'))
.catch((err) => console.log(err));

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); 

app.use('/', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
