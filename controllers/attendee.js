var attendee = require('../models/Attendee');

exports.getNewAttendee = function(req, res){

  res.render('attendee-register',{title : 'Attendee register'});

}


exports.postNewAttendee = function(req, res){

  var newAttendee = new attendee({
    firstname : req.body.firstname,
    lastname : req.body.lastname,
    contact : {
      email : req.body.email,
      cellphone : req.body.cellphone
    }
  });

  newAttendee.save(function(err){
    if (err) return next(err);
     
    res.redirect('/');
      
  });

}


