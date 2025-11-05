# 📘 Histórico TMMi aplicado ao Projeto QA Tests E-commerce

> **Objetivo:** evidenciar como utilizei o modelo **TMMi (Test Maturity Model Integration)** para estruturar, medir e otimizar a qualidade no projeto **QA Tests E-commerce**, demonstrando maturidade e método para recrutadores.

---

## 🧱 Nível 1 – Inicial
- Situação inicial: testes **ad-hoc**, pouca rastreabilidade, ausência de métricas.
- Ação: mapeei riscos principais e criei trilha mínima de documentação (`README`, `test_plan.md`).

## ⚙️ Nível 2 – Gerenciado
- **Planejamento de testes**: `docs/test_plan.md` com escopo, riscos, ambientes e critérios de entrada/saída.
- **Casos de teste**: padronizados em `tests/` (nomenclatura, tags, dados, pré e pós-condições).
- **Defeito & Evidência**: template de bug (passos, esperado x obtido, anexos).
- **CI/CD**: pipeline executando testes a cada PR (ex.: GitHub Actions/Jenkins).

## 🧮 Nível 3 – Definido
- **Padrões institucionais**: convenções para estrutura de testes e page objects.
- **Test Data Management**: massa controlada (fixtures/mocks/seeds).
- **Revisões**: checklist de qualidade em code review (testabilidade, cobertura, flakiness).
- **Trechos reutilizáveis**: utilitários/commands compartilhados.

## 📊 Nível 4 – Medido
- **KPIs** (exemplos):
  - Cobertura de testes automatizados (%).
  - Falhas por módulo/sprint.
  - MTTR (tempo médio de correção).
  - Taxa de builds verdes x vermelhos.
- **Dash**: publicação automática de relatórios (ex.: Allure, HTML Report, cobertura).

## 🚀 Nível 5 – Otimizado
- **Análise de causa raiz** para reduzir flakiness.
- **Testes exploratórios guiados por risco**.
- **Melhorias contínuas** em estabilidade/tempo de execução.
- **Reuso entre projetos** (libs internas de teste).

---

## 🔧 Implementação prática (tecnologias)

### Se estiver usando **Playwright**
- Estrutura: `tests/`, `playwright.config.ts`, `tests/**/*.spec.ts`.
- Comandos:
  - `npx playwright test` (e2e)
  - `npx playwright test --reporter=html` (relatório)
- Integração CI: rodar `npx playwright install --with-deps` e depois `npx playwright test`.
- Métricas: tempo por spec, falhas por tag/área, histórico de builds.

### Se estiver usando **Cypress**
- Estrutura: `cypress/e2e/**`, `cypress/fixtures`, `cypress/support`.
- Comandos:
  - `npx cypress run` (headless)
  - `npx cypress run --reporter mocha-junit-reporter` (para CI)
- Relatórios: Mochawesome/Allure (publicar como artefato no CI).
- Métricas: cenários por release, tendências de falhas, retrys.

> **Backlog de melhorias contínuas (exemplos):**
- [ ] Aumentar cobertura de smoke em checkout/pagamento.  
- [ ] Padronizar IDs testáveis nos componentes críticos.  
- [ ] Habilitar Allure + histórico no CI.  
- [ ] Reduzir flakiness em testes dependentes de rede (mock/stub).  

---

## 🧩 Artefatos principais deste projeto
- `docs/test_plan.md` – plano de testes e estratégia.
- `docs/tmmi-history/Historico_TMMi.md` – este documento.
- `tests/` ou `cypress/e2e` – suíte automatizada.
- `playwright.config.ts` ou `cypress.config.js/ts` – configuração.
- Pipeline CI – execução automática a cada PR com relatório.

### Relatórios e Métricas
- **JUnit (XML)**: armazenado em `results/` e anexado como artefato no CI.
- **Allure (HTML)**: gerado em `allure-report/` e anexado como artefato; opcionalmente publicado no GitHub Pages.
- **Indicadores**: taxa de sucesso por suíte, tempo médio por spec, cenários instáveis (flaky), histórico por build.

---

## 🏁 Conclusão
Aplicar TMMi elevou a previsibilidade, reduziu retrabalho e **comprovou** maturidade em QA: do planejamento à otimização contínua, com KPIs e integração ao ciclo de desenvolvimento.

**Autor:** Raquel G. de Souza  
**Projeto:** QA Tests E-commerce  
**Referência:** TMMi Foundation
---

## 📈 Allure Report – Test Evidence and Quality Metrics

The **Allure Framework** was integrated into this project to transform raw Cypress test results into **interactive visual reports**.  
It allows for a clear and professional view of all executions, highlighting success rates, performance, and testing coverage.

### 🎯 Purpose within the Project
Allure centralizes the evidence of automated executions (E2E and API), helping QA, Dev, and management teams visualize:

- ✅ Total number of executed and passed tests  
- 📊 Suites and categories covered (e.g., Login, Cart, API)  
- ⏱️ Execution time and trend tracking per release  
- 💡 Areas with higher stability and potential improvement  

The Allure report also strengthens the **TMMi maturity model**, especially in Levels 3 and 4, where metrics and process measurements are fundamental for continuous improvement.

### 🧩 Technical Integration
Allure is connected through the plugin `@shelex/cypress-allure-plugin`, automatically collecting test metadata from each Cypress run and generating dynamic dashboards.

**Main Commands:**
```bash
# Generate report
npm run allure:generate

# Open report locally
npm run allure:open
