const payments = {
    list:require('../model/payment.json') , 
    setData:function(data){
        this.list = data
    }
}


const getPayments = (req , res) => {

    res.json({code:1 , lists:payments.list}); 

}

module.exports = {getPayments}