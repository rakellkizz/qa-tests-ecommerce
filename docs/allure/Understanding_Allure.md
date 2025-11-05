# 📊 Understanding Allure Report

## 💡 What is Allure
**Allure Framework** is a powerful test reporting and visualization tool.  
It transforms raw automated test results (logs, screenshots, videos, and statuses) into **interactive, graphical dashboards**, making it easier to analyze quality metrics, share insights, and communicate test outcomes across teams.

---

## 🎯 Purpose in this Project
In the **QA Tests E-commerce** project, Allure serves as the **central reporting system** for all automated E2E executions.  
It helps QA analysts, developers, and managers quickly understand:

- How many tests were executed ✅  
- Which tests passed or failed ❌  
- Which areas of the system are more stable 🧩  
- How test results evolve over time 📈  

Allure is integrated with **Cypress** and the **GitHub Actions pipeline** to ensure continuous quality tracking — aligned with **TMMi Level 4 (Measured)** practices.

---

## ⚙️ How it Works
1. **Cypress executes the automated tests**  
   - Generates raw JSON results (via `@shelex/cypress-allure-plugin`);
2. **Allure collects and structures the test metadata**  
   - Stores files in `/allure-results`;
3. **Allure Command-Line Interface (CLI) builds the HTML report**  
   - Command:
     ```bash
     npx allure generate allure-results --clean -o allure-report
     ```
4. **Report can be opened locally or published in CI/CD**
   - Command:
     ```bash
     npx allure open allure-report
     ```
   - In GitHub Actions, the generated report is uploaded as a build artifact.

---

## 🧠 How Allure Contributes to TMMi Maturity

| TMMi Level | Allure's Contribution |
|-------------|-----------------------|
| **Level 2 – Managed** | Tracks executions and testing evidence |
| **Level 3 – Defined** | Standardizes test reporting and communication |
| **Level 4 – Measured** | Provides quantitative quality metrics |
| **Level 5 – Optimized** | Enables continuous improvement in QA processes |

---

## 🧩 Project Structure Integration
```plaintext
qa-tests-ecommerce/
│
├── docs/
│   ├── tmmi-history/
│   │   └── Historico_TMMi.md
│   └── allure/
│       ├── Entendendo_o_Allure.md
│       └── Understanding_Allure.md
│
├── allure-results/
├── allure-report/
├── cypress/
│   ├── e2e/
│   ├── support/
│   └── fixtures/
└── package.json
🪄 Author

Raquel G. de Souza (Kell)
QA Analyst / IT Analyst
Repository: rakellkizz/qa-tests-ecommerce