const bookings = {
    list:require('../model/booking.json') , 
    setData:function(data){
        this.list = data
    }
}
const fsPromise = require('fs').promises;
const path = require('path');
const {format} = require('date-fns');

const addBooking = async(req , res) => {

    const id = bookings.list.length > 0 ? bookings.list[bookings.list.length-1].id +1 : 1;
    let newobj = {};
    newobj["id"] = id;
    for (const [key, value] of Object.entries(req.body)) {
        
         newobj[key] = value;
            
    }

    const createdate =  `${format(new Date() , 'yyyyMMdd_HH:mm:ss')}`;

    newobj["createdate"] = createdate;

    bookings.setData([...bookings.list , newobj]);

    await fsPromise.writeFile(
        path.join(__dirname , ".." , "model" , "booking.json"),
        JSON.stringify(bookings.list)
    )

    res.json({code:1})

}

module.exports = {addBooking}