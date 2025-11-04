const request = require('supertest')
const app = require('../src/app')

describe('Products API', () => {
  it('should list products with total and items', async () => {
    const res = await request(app).get('/products')
    expect(res.status).toBe(200)
    expect(res.body.total).toBeGreaterThan(0)
    expect(Array.isArray(res.body.items)).toBe(true)
    expect(res.body.items[0]).toHaveProperty('id')
    expect(res.body.items[0]).toHaveProperty('name')
  })
})
