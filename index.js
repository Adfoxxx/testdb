const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test').then(() => console.log('Privet base')).catch((e) => console.log(e));
