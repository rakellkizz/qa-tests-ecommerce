const app = require('./app')
const PORT = process.env.PORT || 3333
app.listen(PORT, () => {
  console.log(`[integration] API listening on http://localhost:${PORT}`)
})
