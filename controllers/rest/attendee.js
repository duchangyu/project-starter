var attendee = require('../../models/Attendee.js');

//
//add a new attndeee
//
exports.newAttendee = function(req,res){



  var newAttendee = new attendee(
  {
    firstname : req.body.firstname,
    lastname : req.body.lastname,
    contact : {
      email : req.body.email,
      cellphone : req.body.cellphone
    }
  });

  attendee.find({ firstname : req.body.firstname, lastname : req.body.lastname},
    function(err, existAttendee){
      if(existAttendee){

        res.status(201);
        res.type('json');
        res.json({code: 201, message : 'attendee exists already'});


      }

      newAttendee.save(function(err){

          res.satus(200);
          res.type('json'),
          res.json(newAttendee);

      })


  });

}


//
//get all attendees
//
exports.getAttendees = function(req,res){

  attendee.find(function(err,attendees){

    res.status(200);
    res.type('json');
    res.json(attendees);

  })

}


//
//update an attendee
//
exports.updateAttendees = function(req,res){


}

//
//delete an attendee
//
exports.deleteAttendees = function(req,res){


}




