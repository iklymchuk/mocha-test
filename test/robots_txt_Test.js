let request = require("request");
let chai = require('chai');
let should = chai.should();

let base_url = "some_url/robots.txt";

describe('Robots txt Test', () => {

    it('status code should be 200', (done) => {
        request.get(base_url, function(error, response, body) {
            should.not.exist(error);
            response.statusCode.should.equal(200);
            done();
        });
    });

    it('response body should have correct content', (done) => {
        request.get(base_url, function(error, response, body) {
            should.not.exist(error);
            response.body.should.be.a('string');
            response.body.should.contain('some content');
            done();
        });
    });

    it('response body shouldnt have incorrect content', (done) => {
        request.get(base_url, function(error, response, body) {
            response.body.should.not.contain('some incorrect content');
            done();
        });
    });

});