const express = require('express')
const app = express()

app.use(express.json())

// Healthcheck
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', service: 'tests-integration' })
})

// Catálogo fake (integração simples)
const PRODUCTS = [
  { id: 1, name: 'Camisa', price: 79.9 },
  { id: 2, name: 'Calça', price: 149.9 },
  { id: 3, name: 'Tênis', price: 299.9 }
]

app.get('/products', (req, res) => {
  res.status(200).json({ total: PRODUCTS.length, items: PRODUCTS })
})

// Auth fake (POST + validação)
app.post('/auth/login', (req, res) => {
  const { email, password } = req.body || {}
  if (!email || !password) {
    return res.status(400).json({ error: 'email and password are required' })
  }
  if (email === 'user@exemplo.com' && password === '123456') {
    return res.status(200).json({ token: 'fake-jwt-token', role: 'user' })
  }
  return res.status(401).json({ error: 'invalid credentials' })
})

module.exports = app
