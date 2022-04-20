const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
   content: {
       type: String,
       required: true, 
},
    timestamps: { 
        timestamps: true 
},

user: {
      type: Schema.Types.ObjectId, ref:"User"
    },   
});

module.exports = mongoose.model("Message", messageSchema);

