var mongoose = require("mongoose");

var userSchema = mongoose.Schema(
  {
    // กำหนด ชื่อและชนิดของ document เรา
    userId: {
        type: Number
    },
    fullName: {
        type: String
    },
    userEmail:{
        type: String
    },
    verifyId:{
        type: String
    },
    status:{
        type: String
    },
    role:{
        type: String
    }
  },
  {
    // กำหนด collection ของ MongoDB หรือจะไม่กำหนดก็ได้
    collection: "USER"
  }
);

// ถ้าไม่ได้กำหนด collection ข้างบน default จะเป็น "foods"
var User = mongoose.model("User", userSchema);
module.exports = User;