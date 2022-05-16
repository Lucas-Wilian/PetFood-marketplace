const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

require('./database');

app.set('port', process.env.PORT || 8000);
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/', require('./routes/main.routes'));

app.listen(app.get('port'), () => {
  console.log('O servidor está online 🔥💯🚀');
});
