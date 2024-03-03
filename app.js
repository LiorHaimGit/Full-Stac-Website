// -- app.js --

// Import required modules
const express = require('express');
const path = require('path');
const config = require('./config/config');

// Create an Express application
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Set up middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware to log requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Define routes
app.get('/', (req, res) => {
    res.render('home');
});

const contactRoutes = require('./routes/contactRoutes');
const resumeRoutes = require('./routes/resumeRoutes');

app.get('/about', (req, res) => {
    res.render('about'); // Render the about.ejs template
});

app.get('/blog', (req, res) => {
    res.render('blog'); // Render the about.ejs template
});

app.get('/contact', (req, res) => {
    res.render('contact'); // Render the contact.ejs template
});
app.use(contactRoutes);

app.get('/resume', (req, res) => {
    res.render('resume'); // Render the resume.ejs template
});
app.use(resumeRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Set up database connection using configuration settings
const dbConfig = config.database; // Assuming config is already defined

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
