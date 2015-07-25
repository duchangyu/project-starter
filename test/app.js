var request = require('supertest');
var app = require('../app.js');

describe('GET /', function() {
  it('should return 200 OK', function(done) {
    request(app)
      .get('/')
      .expect(200, done);
  });
});

describe('GET /login', function() {
  it('should return 200 OK', function(done) {
    request(app)
      .get('/login')
      .expect(200, done);
  });
});

describe('GET /signup', function() {
  it('should return 200 OK', function(done) {
    request(app)
      .get('/signup')
      .expect(200, done);
  });
});

describe('GET /api', function() {
  it('should return 200 OK', function(done) {
    request(app)
      .get('/api')
      .expect(200, done);
  });
});

describe('GET /contact', function() {
  it('should return 200 OK', function(done) {
    request(app)
      .get('/contact')
      .expect(200, done);
  });
});

describe('GET /random-url', function() {
  it('should return 404', function(done) {
    request(app)
      .get('/reset')
      .expect(404, done);
  });
});


//Attendees rest API
describe('Rest Attendees API', function () {

  describe('GET /rest/attendees', function () {
    it('should return 200 OK', function(done){
      request(app)
        .get('/rest/attendees')
        .expect(200,done);
    });
  });

  // describe('POST /rest/attendees', function () {
  //   it('should return 200 OK', function(done){
  //     request(app)
  //       .post('/rest/attendees')
  //       .expect(200,done);
  //   });
  // });

  // describe('PUT /rest/attendees', function () {
  //   it('should return 200 OK', function(done){
  //     request(app)
  //       .put('/rest/attendees')
  //       .expect(200,done);
  //   });
  // });

  // describe('DELETE /rest/attendees', function () {
  //   it('should return 200 OK', function(done){
  //     request(app)
  //       .delete('/rest/attendees')
  //       .expect(200,done);
  //   });
  // });

    

  
});
