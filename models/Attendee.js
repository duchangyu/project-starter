var mongoose = require('mongoose');

var attendeeSchema = mongoose.Schema({
    firstname : String,
    lastname : String,
    contact : {
        email: String,
        cellphone : String
    }
});

module.exports = mongoose.model('attendee', attendeeSchema);