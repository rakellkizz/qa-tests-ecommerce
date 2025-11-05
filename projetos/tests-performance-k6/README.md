# Performance Tests (k6)

Load & performance tests for **qa-tests-ecommerce** using [k6](https://k6.io/).  
Scripts cover the **API de integração** (`/health`, `/products`) com **stages** e **thresholds** (SLO gates).

## 🎯 Alvos
- API integração: `http://localhost:3333` (subir com `node src/server.js` no módulo de integração)
- Site estático (opcional): `http://127.0.0.1:8080` (via `npm run serve` na raiz)

## 🧪 Executando (via Docker)
Na pasta `tests-performance-k6`:
```powershell
# Contra a API (porta 3333)
docker run --rm -i -v "$((Get-Location).Path):/scripts" -w /scripts -e K6_BASE_URL="http://host.docker.internal:3333" grafana/k6 run load_test.js

# (Opcional) Contra o site (porta 8080) — requer load_site.js
docker run --rm -i -v "$((Get-Location).Path):/scripts" -w /scripts -e K6_BASE_URL="http://host.docker.internal:8080" grafana/k6 run load_site.js
🧩 Thresholds (gates)

http_req_failed: rate<0.01 → menos de 1% de erros

http_req_duration: p(95)<500 → 95% das requisições abaixo de 500 ms

Se algum threshold falhar, o teste retorna não aprovado (ideal para CI).

📦 Artefatos

O script gera k6-summary.json com as métricas consolidadas:
export function handleSummary(data) {
  return { 'k6-summary.json': JSON.stringify(data, null, 2) }
}
🧰 Scripts úteis
npm run load:api   # Docker contra API
npm run load:site  # Docker contra site (se tiver load_site.js)


## 2) `package.json` do módulo (ajuste os scripts p/ Windows)
Abra `projetos/tests-performance-k6/package.json` e deixe assim:
```json
{
  "name": "tests-performance-k6",
  "version": "1.0.0",
  "private": true,
  "description": "Load & performance tests using k6 (stages + thresholds + summary).",
  "scripts": {
    "load:api": "powershell -NoProfile -Command \"$p=(Get-Location).Path; docker run --rm -i -v \\\"$p:/scripts\\\" -w /scripts -e K6_BASE_URL='http://host.docker.internal:3333' grafana/k6 run load_test.js\"",
    "load:site": "powershell -NoProfile -Command \"$p=(Get-Location).Path; docker run --rm -i -v \\\"$p:/scripts\\\" -w /scripts -e K6_BASE_URL='http://host.docker.internal:8080' grafana/k6 run load_site.js\""
  }
}

