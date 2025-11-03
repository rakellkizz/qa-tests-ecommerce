# 📊 Entendendo o Allure Report

## 💡 O que é o Allure
O **Allure Framework** é uma ferramenta de **relatórios e visualização de testes automatizados**.  
Ele transforma os resultados brutos das execuções (como logs, vídeos, screenshots e status dos testes) em relatórios **gráficos, dinâmicos e interativos**, ideais para análise de qualidade, auditoria e comunicação com times de desenvolvimento.

---

## 🎯 Objetivo dentro do projeto
No contexto do projeto **QA Tests E-commerce**, o Allure tem como função principal **centralizar e visualizar os resultados das execuções E2E**, permitindo que os stakeholders (analistas, QA, desenvolvedores e gestores) compreendam rapidamente:

- Quantos testes foram executados ✅  
- Quais passaram e quais falharam ❌  
- Quais áreas do sistema estão mais estáveis 🧩  
- Tendências de qualidade por release 📈  

O Allure foi integrado ao **Cypress** e à **pipeline do GitHub Actions** para garantir rastreabilidade contínua da qualidade (um dos pilares do modelo **TMMi Nível 4 — Medido**).

---

## ⚙️ Como funciona tecnicamente
1. **O Cypress executa os testes automatizados**
   - Gera resultados em formato JSON (via plugin `@shelex/cypress-allure-plugin`);
2. **O Allure coleta e estrutura esses dados**
   - Salva os metadados em `/allure-results`;
3. **O Allure CLI gera o relatório HTML**
   - Comando:  
     ```bash
     npx allure generate allure-results --clean -o allure-report
     ```
4. **O relatório pode ser aberto localmente ou publicado**
   - Comando:  
     ```bash
     npx allure open allure-report
     ```
   - No GitHub Actions, ele é disponibilizado como artefato de build.

---

## 🧠 Benefícios no contexto TMMi
| Nível TMMi | Como o Allure contribui |
|-------------|------------------------|
| **Nível 2 — Gerenciado** | Permite rastrear execuções e evidências de teste |
| **Nível 3 — Definido** | Padroniza a coleta e comunicação de resultados |
| **Nível 4 — Medido** | Fornece métricas quantitativas sobre qualidade |
| **Nível 5 — Otimizado** | Identifica áreas de melhoria contínua no processo de QA |

---

## 🧩 Estrutura criada no projeto
```plaintext
qa-tests-ecommerce/
│
├── docs/
│   ├── tmmi-history/
│   │   └── Historico_TMMi.md
│   └── allure/
│       └── Entendendo_o_Allure.md
│
├── allure-results/
├── allure-report/
├── cypress/
│   ├── e2e/
│   ├── support/
│   └── fixtures/
└── package.json

🪄 Autor

Raquel G. de Souza (Kell)
Analista de QA / Analista de TI
Repositório: rakellkizz/qa-tests-ecommerce