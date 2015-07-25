var chai = require('chai');
var should = chai.should();
var User = require('../models/User');
var Attendee = require('../models/Attendee');

describe('User Model', function() {
  it('should create a new user', function(done) {
    var user = new User({
      email: 'test@gmail.com',
      password: 'password'
    });
    user.save(function(err) {
      if (err) return done(err);
      done();
    })
  });

  it('should not create a user with the unique email', function(done) {
    var user = new User({
      email: 'test@gmail.com',
      password: 'password'
    });
    user.save(function(err) {
      if (err) err.code.should.equal(11000);
      done();
    });
  });

  it('should find user by email', function(done) {
    User.findOne({ email: 'test@gmail.com' }, function(err, user) {
      if (err) return done(err);
      user.email.should.equal('test@gmail.com');
      done();
    });
  });

  it('should delete a user', function(done) {
    User.remove({ email: 'test@gmail.com' }, function(err) {
      if (err) return done(err);
      done();
    });
  });
});




describe('Attendee Model', function () {

  it('should create a new attendee', function(done){

    var atten = new Attendee({
      firstname : 'daniel',
      lastname : 'du',
      contact : {
        email : 'daniel.du@autodeks.com',
        cellphone : '18600503761'
      }
    });

    atten.save(function(err){
      if(err) return done(err);

      done();
    })

  })

  it('should not create attendee with same name', function(done){
    var atten = new Attendee({
      firstname : 'daniel',
      lastname : 'du',
      contact : {
        email : 'daniel.du@autodeks.com',
        cellphone : '18600503761'
      }
    });

    atten.save(function(err){
      if (err) err.code.should.equal(11000);
      done();
    })

  })

  it('should remove an attendee with same name', function(done){

    done();

  })
  
});
