const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the src directory
app.use('/src', express.static(path.join(__dirname, 'src')));

// Serve the index.html file as the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'login.html'));
});

app.get('/signup.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'signup.html'));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});