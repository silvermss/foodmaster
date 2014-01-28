var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/scratch');
var db = mongoose.connection;
exports.connect = connect;

var Schema = mongoose.Schema;

var User = mongoose.model({
	"username" : String, 
	"password" : String
});
var User = mongoose.model('User', userSchema);
exports.User = User;