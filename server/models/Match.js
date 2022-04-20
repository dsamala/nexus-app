const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const matchSchema = new Schema({
   participants: [
       {
       type: Schema.Types.ObjectId, ref:"User",
       required: true, 
        }],
    timestamps: {
        timestamps: true
    },
   
});

module.exports = mongoose.model("Match", matchSchema);

