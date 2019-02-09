var mongoose = require("mongoose");
var TagSchema=new mongoose.Schema({
	name:String
});
module.exports = mongoose.model("Tags", TagSchema);
