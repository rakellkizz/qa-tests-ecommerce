const request = require('supertest')
const app = require('../src/app')

describe('Auth API', () => {
  it('should 400 when missing fields', async () => {
    const res = await request(app).post('/auth/login').send({})
    expect(res.status).toBe(400)
    expect(res.body.error).toMatch(/required/i)
  })

  it('should 401 when invalid credentials', async () => {
    const res = await request(app).post('/auth/login').send({
      email: 'wrong@exemplo.com',
      password: 'nope'
    })
    expect(res.status).toBe(401)
  })

  it('should 200 and return token when valid credentials', async () => {
    const res = await request(app).post('/auth/login').send({
      email: 'user@exemplo.com',
      password: '123456'
    })
    expect(res.status).toBe(200)
    expect(res.body).toHaveProperty('token')
  })
})
