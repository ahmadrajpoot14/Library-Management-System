//1) npm install

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const userRoute = require('./routes/user.route'); // Import user route


const cors = require('cors');

// Middleware (Used to parse data)
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
//2) Change origin
app.use(cors({ origin: 'http://127.0.0.1:5500', credentials: true }));

app.use(express.json());

// Connect to MongoDB

//3) Put connection string in bracket:
mongoose.connect('mongodb+srv://f219268:8BqaThMim4dMdI09@cluster0.eejbwl8.mongodb.net/', {
   dbName:"BookNest", 
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

// Routes
app.use('/users', userRoute); // Use user route

// Error handling middleware
app.use((req, res, next) => {
    res.status(404).send({ error: "Not found" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
