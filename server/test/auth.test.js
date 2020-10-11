const server = require('../server.js').listen()
const request = require('supertest').agent(server)
const expect = require('chai').expect


describe('# Auth API', () => {
    let user = {

        name: 'jack'
    }
    // describe('Add two number', () => {
    //     it('should return 5', () => {
    //         function add(a, b) {
    //             return a + b
    //         }
    //         expect(user.name).to.be.equal('xing')
    //         console.log(user)
    //     })
    // })
    describe('POST api/auth/signup', () => {
        it('should create user', (done) => {
            request.post('/api/auth/signup')
                .send({
                    email: user.email,
                    name: user.name,
                    password: user.password
                })
                .end((err, res) => {
                    if (err) return done(err)

                    expect(res.status).to.be.equal(201)
                    done()
                })
        })
    })
    describe('POST api/auth/login', () => {
        it('should login with the right email and password', (done) => {
            request.post('api/auth/login')
                .send({ email: user.email, password: user.password })
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err)
                    done()
                })
        })
    })
})