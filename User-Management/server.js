const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
    secret: 'usermanagementsecret',
    resave: true,
    saveUninitialized: true,
    cookie: { 
        secure: false,
        maxAge: 24 * 60 * 60 * 1000 
    }
}));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use("/api/users", require('./routes/userRoutes'));
app.use("/api/auth", require('./routes/authRoutes'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

mongoose.connect('mongodb://127.0.0.1:27017/usermanagement')
.then(() => console.log('Connected to MongoDB!'))
.catch(err => console.log('Connection error:', err));

app.listen(3000, () => {
    console.log("Server started on port 3000");
});