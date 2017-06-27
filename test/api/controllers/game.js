var should = require('should');
var request = require('supertest');
var server = require('../../../app');

describe('controllers', function() {

  describe('game', function() {

    describe('GET /game', function() {

      it('should loadGame', function(done) {

        request(server)
          .get('/game')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            res.body.level.should.eql(1);

            done();
          });
      });

      it('should saveGame', function(done) {

        request(server)
          .post('/game')
          .send({
            level: 2
          })
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            res.body.level.should.eql(2);

            done();
          });
      });

    });

  });

});
