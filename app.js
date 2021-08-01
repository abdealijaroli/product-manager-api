const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const dbConnect = require('./db/connect')
const { urlencoded } = require('express');

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();

// database connection
dbConnect();

// cors 
app.use(cors());

// global request payload middleware
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use('/api/v1/product', require('./routes/productRoutes'));
app.use('/api/v1/user', require('./routes/userRoutes'));

app.get('/', (req, res, next) => {
    res.send('Test');
});

// error handler middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({
        status: 500,
        message: err.message,
        body: {}
    });
});

// listen
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})