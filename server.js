const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());


// routes
app.get('/', (req, res) => {
  res.send('hello');
});
app.use('/api', require('./routes/contactRoute'));

app.listen(PORT, () => { console.log(`The app is running on port ${PORT}`); });
