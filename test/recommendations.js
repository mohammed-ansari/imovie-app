//set test configuration
process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const should = chai.should();

chai.use(chaiHttp);

describe('Recommendations', () => {
    //test case for get recommendations service
    describe('/GET recommendations', () => {
        it('successfully get recommendations', (done) => {
            chai.request(app).get('/recommendations').query({ genres: 'COMEDY,ROMANCE', provider: 'netflix' }).end((err, res) => {
                res.should.have.status(200);
                done();
            });
        });

        it('fails to get recommendations', (done) => {
            chai.request(app).get('/recommendations').query({ provider: 'netflix' }).end((err, res) => {
                res.should.have.status(400);
                done();
            });
        });

    });

});