import http from 'k6/http'
import { check, sleep } from 'k6'
import { Trend, Rate } from 'k6/metrics'

// alvo padrão = sua API de integração (porta 3333)
// troque com: K6_BASE_URL=http://127.0.0.1:8080
const BASE_URL = __ENV.K6_BASE_URL || 'http://localhost:3333'
const HEALTH = `${BASE_URL}/health`
const PRODUCTS = `${BASE_URL}/products`

export const options = {
  stages: [
    { duration: '10s', target: 10 }, // rampa
    { duration: '20s', target: 10 }, // platô
    { duration: '10s', target: 0 }   // saída
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95% < 500ms
    http_req_failed: ['rate<0.01']    // <1% erro
  },
  tags: {
    project: 'qa-tests-ecommerce',
    suite: 'k6-load'
  }
}

// métricas customizadas
const t_health = new Trend('health_duration')
const t_products = new Trend('products_duration')
const r_errors = new Rate('errors')

export default function () {
  const r1 = http.get(HEALTH)
  t_health.add(r1.timings.duration)
  const ok1 = check(r1, {
    'health 200': (r) => r.status === 200,
    'status ok': (r) => (r.json('status') || '').toLowerCase() === 'ok',
  })
  if (!ok1) r_errors.add(1)

  const r2 = http.get(PRODUCTS)
  t_products.add(r2.timings.duration)
  const ok2 = check(r2, {
    'products 200': (r) => r.status === 200,
    'items array': (r) => Array.isArray(r.json('items')),
  })
  if (!ok2) r_errors.add(1)

  sleep(1)
}

export function handleSummary(data) {
  return { 'k6-summary.json': JSON.stringify(data, null, 2) }
}
