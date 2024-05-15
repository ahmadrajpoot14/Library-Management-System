const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user.model');

// For creating a new user
router.post('/', async (req, res) => {
    try {
        console.log(req.body);
        const { username, displayName, email, password } = req.body;

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            username,
            displayName,
            email,
            password: hashedPassword // Save the hashed password
        });

        const savedUser = await user.save();
        res.status(201).send(savedUser);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Server Error");
    }
});

// For user sign-in
router.post('/signin', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) {
            console.log('Invalid username');
            return res.status(400).json({ error: "Invalid username or password" });
        }
        
        // Compare provided password with hashed password from the database
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.log('Invalid password');
            return res.status(400).json({ error: "Invalid username or password" });
        }
        
        console.log('Signin successful');
        res.status(200).json({ message: "Signin successful", user });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: "Server Error" });
    }
});

// For getting a single user
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findById(id);
        res.send(user);
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server Error");
    }
});

// For deleting a single user
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const result = await User.findByIdAndDelete(id);
        res.send(result);
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server Error");
    }
});

// For updating a single user
router.patch('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const updates = req.body;
        const options = { new: true };
        const result = await User.findByIdAndUpdate(id, updates, options);
        res.send(result);
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;
