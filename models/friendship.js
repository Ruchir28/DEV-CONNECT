const mongoose=require('mongoose');

const FriendShipSchema=new mongoose.Schema({
    from_user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    to_user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
},{
    timestamps:true
});

const FriendShip=mongoose.model('FriendShip',FriendShipSchema);
module.exports=FriendShip;