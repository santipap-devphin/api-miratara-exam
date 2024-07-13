

const getLocation = (req , res) => {

    const province = require('../model/thai_province.json');

    res.json({code:1 , list:province}); 

}


module.exports = {getLocation}

