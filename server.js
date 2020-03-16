const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: '.env' });
const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(cors());


// routes
app.use('/api', require('./routes/contactRoute'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => { console.log(`The app is running on port ${PORT}`); });
