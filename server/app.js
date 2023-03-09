// imports --------------
require('dotenv').config()
const { request } = require('express')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')


const app = express();
const port = process.env.PORT || 5000;


// milddle wares - the methods calle between processing req and res in the application
app.use(cors()); //npm package that allows servers to permit certain requests
app.use(express.json()); //inbuilt method to recognise incoming req objects as a JSON object
app.use(express.urlencoded({extended: true})); //express inbuilt method to recognise req's as strings or arrays



// databse connection
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
}).then(() => console.log('Database connection succesful'))
.catch((err) => console.log(err))


// routes prefix
app.use('/api/posts', require("./routes/routes"))

// Start server
app.listen(port, () => console.log(`Server running at http://localhost:${port}`))