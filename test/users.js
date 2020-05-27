//set test configuration
process.env.NODE_ENV = 'test';

const mongoose = require('mongoose');

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

    // test case for save user service
    describe('/POST users', () => {
        it('successfully creates a user in test database', (done) => {
            chai.request(app)
                .post('/users')
                .send({
                    firstName: "Mohammed",
                    lastName: "Ansari",
                    moviePreferences: [
                        "COMEDY",
                        "ACTION"
                    ]
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });

        it('fails to create a user in test database', (done) => {
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
    });

    describe('/GET recommendations', () => {
        it('successfully get recommendations', (done) => {
        chai.request(app).get('/recommendations').query({genres: 'COMEDY,ROMANCE', provider: 'netflix'}).end((err,res)=>{
            res.should.have.status(200);
            done();
        });
        });

        it('fails to get recommendations', (done) => {
            chai.request(app).get('/recommendations').query({provider: 'netflix'}).end((err,res)=>{
                res.should.have.status(400);
                done();
            });
            });

    });



});
