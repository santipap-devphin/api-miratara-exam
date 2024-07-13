
const hotels = {
    list:require('../model/hotels.json') , 
    setData:function(data){
        this.list = data
    }
}


const getHotel = (req , res) => {

    const ids = req.params.id;

    const searchHotels = hotels.list.filter((ele) => ele.hotalLocate === parseInt(ids));

    res.json({code:1 , lists:searchHotels}); 

}
const getRoom = (req , res) => {

    const rooms = require('../model/room.json') 

    res.json({code:1 , data:rooms}); 

}
const getRoomByHotel = (req , res) => {

    const pID = req.params.id;
    const rooms = require('../model/room.json');
    const roomtype = require('../model/roomtype.json');
    const filterRoom = rooms.find((ele) => ele.rhotelID === parseInt(pID));
    let roomData = [];
    if(filterRoom  === undefined) return res.json({code:0 , msg:"nodata not found"});

    if(filterRoom.roomDetail.length > 0){

        filterRoom.roomDetail.forEach((itm) => {

            const findRoom = roomtype.find((val) => val.typeID  === parseInt(itm.id));

            findRoom["hprice"] = itm["price"];
            findRoom["rhotelID"] = pID;

            roomData.push(findRoom);

          })

       

    }

    res.json({code:1 , lists:roomData}); 

}


const getRoomTypeDetail = (req , res) => {

    
    const typeID = req.params.id;
    const hotelID = req.headers.api;
    let priceRoom = 0;
  
    const rooms = require('../model/room.json');
    const findRoom = rooms.find((itm) => itm.rhotelID === parseInt(hotelID));
    
    if(findRoom === undefined) return res.json({code:0 , msg:"nodata not found"});

    findRoom.roomDetail.forEach((ele) => {

        if(ele["id"] === parseInt(typeID)){

            return priceRoom = ele["price"];

        }


    })

    const roomtypes = require('../model/roomtype.json');
    const findRoomDetail = roomtypes.find((ele) => ele.typeID === parseInt(typeID));
    if(findRoomDetail  === undefined) return res.json({code:0 , msg:"nodata not found"});

    res.json({code:1 , lists:findRoomDetail , priceroom:priceRoom}); 


}



module.exports = {getHotel , getRoom , getRoomByHotel , getRoomTypeDetail}