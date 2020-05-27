//set test configuration
process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const should = chai.should();
const users = require('../model/users');

chai.use(chaiHttp);

describe('Users', () => {
    //empty the database before each test
    beforeEach((done) => {
        users.remove({}, (err) => {
            done();
        });
    });
    //test case which fails to save a user
    it('fails to create a user in database', (done) => {
        chai.request(app)
            .post('/users')
            .send({
                moviePreferences: [
                    "COMEDY",
                    "ACTION"
                ]
            })
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    });

    // test case for save user service
    describe('/POST users', () => {
        it('successfully creates a user in database', (done) => {
            chai.request(app)
                .post('/users')
                .send({
                    firstName: "Mohammed",
                    lastName: "Ansari",
                    genrePreferences: [
                        "COMEDY",
                        "ACTION"
                    ]
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });

    });

});
