const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../app");
require("dotenv").config();

chai.use(chaiHttp);
const expect = chai.expect;


describe("HTTP gorest Post", function () {
  it("POST", async function () {
    let res = await chai.request(process.env.API_BASE_URL)
      .post('/')
      .set('Content-Type', 'application/json')
      .set('Accept','application/json')
      .set('Authorization', process.env.API_KEY_VALUE)
// note:please change the email below before testing
      .send({"name":"Anna","email":"arrhg@gil.com","gender":"Female","status":"active"})

      expect(res).to.have.status(201);
      console.log(res.body)
  });
});

describe("POST /signin", () => {
  it("should log in the user", (done) => {
    chai.request(server).post("/signin");
    done();
  });
});

describe("POST /signup", () => {
  it("should create a new user", (done) => {
    chai.request(server).post("/signup");
    done();
  });
});
