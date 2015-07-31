var attendee = require('../models/Attendee');
var _ = require('lodash');

exports.getNewAttendee = function(req, res){

  res.render('attendee/attendee-register',{title : 'Attendee register'});

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
     
     //sucess
    res.redirect('/attendees');
      
  });

}

exports.getAllAttendees = function(req,res){

  attendee.find({},function(err, attendees){
    if(err) {
      console.log('get all attendees error : ' + err);
      next(err);

      res.redirect('/');
    }

     res.render('attendee/attendees-list',{title : 'All Attendees', attendees : attendees});

  })
}

exports.getEditAttendee = function(req, res){

  var attendeeId = req.query.id;
  console.log(attendeeId);
  attendee.findOne({_id : attendeeId}, function(err, atte){
      if(err){
        next(err);

        res.redirect('/');
      }

      res.render('attendee/edit',{title : 'Edit attendee', attendee : atte})



  })
}


exports.postEditAttendee = function(req, res) {

  var attendeeId = req.body.attendeeId;
  console.log(attendeeId);
  attendee.findOne({_id : attendeeId}, function(err, atte){
      if(err){
        next(new Error('could not find the attendee'));

        res.redirect('/');
      }

      atte.firstname = req.body.firstname;
      atte.lastname = req.body.lastname;
      atte.contact.email = req.body.email;
      atte.contact.cellphone = req.body.cellphone;

      atte.save(function(err){
        if (err) {
          next(new Error('error when updating attendee' + err));
        }

        //sucess 
         res.redirect('/attendees');

      })

     

     



  })

}

exports.deleteAttendee = function(req, res){

  var attendeeId = req.query.id;

  attendee.remove({_id : attendeeId}, function(err){

      if(err) {
        next(new Error('error when tring to delete attendee.'))
      }

      res.redirect('/attendees');

  })

}

