const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const PORT = 8080;
const app = express();


app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(cors());

app.get('/', (req, res) => {
  res.send({
    message: 'Hello world!',
  });
});

app.listen(process.env.PORT || PORT, () => {
  console.log('');
});
