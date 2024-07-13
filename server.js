const http = require('http')
const express = require('express');
const cors = require('cors');
const confCors = require('./config/corsOption')
const app = express();
/*const dotenv = require('dotenv');
dotenv.config();*/
const PORT = process.env.PORT || 8020;
const server = http.createServer(app);
const credentials = require('./middleware/credentials');
const path = require('path');
const errHandler = require('./middleware/errorHandler')


app.use(credentials); 

app.use(cors(confCors));

app.use(express.urlencoded({ extended : false}));

app.use(express.json({limit: '50mb'}));

app.use('/getlocation' , require('./routes/locationR'));

app.use('/gethotel' , require('./routes/hotelR'));

app.use('/getpayments' , require('./routes/paymentR'));

app.use('/booking' , require('./routes/bookingR'));

app.use('/thumbroom', express.static(path.join(__dirname,'public','thumbroom')))

app.use('/room', express.static(path.join(__dirname ,'public','room')))

app.use(errHandler)

app.get('/', (req, res) => {
    res.json({server:"server running"})
})

server.listen(PORT , () => console.log(`Server running on PORT ${PORT}`) )