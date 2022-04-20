const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
   name: {
       type: String,
       required: true, 
},
   avatar: {
       type: String,
       required: false,
},
   email: {
     type: String,
     required: true, 
     unique: true,
},
   password: {
       type: String, 
       required: true,
       select: false,
},
   languages: {
     type: String,
 },
    bio: {
     type: String,

 },
    gitHub: {
     type: String,
     
 },
 
matches: [{
      type: Schema.Types.ObjectId, ref:"Match"
    }],   
});

module.exports = mongoose.model("User", userSchema);

