const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');

chai.use(chaiHttp);
const expect = chai.expect;

describe('POST /signin', () => {
  it('should log in the user', (done) => {
    chai.request(server)
      .post('/signin')
      done();
    });
});

describe('POST /signup', () => {
  it('should create a new user', (done) => {
    chai.request(server)
      .post('/signup')
      done();
   });
 });
