const request = require('supertest')
const app = require('../src/app')

describe('Healthcheck', () => {
  it('should return 200 and service status', async () => {
    const res = await request(app).get('/health')
    expect(res.status).toBe(200)
    expect(res.body).toEqual({ status: 'ok', service: 'tests-integration' })
  })
})
