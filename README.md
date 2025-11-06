# qa-tests-ecommerce
Projeto prático de automação de qualidade para um e-commerce, com foco em testes E2E, API e integração contínua via GitHub Actions.

## 📊 Quality Dashboard powered by Allure & TMMi
✨ Continuous Quality. Real Evidence. Professional Metrics.
...

## 📊 Painel de Qualidade — Allure & TMMi
✨ Qualidade Contínua. Evidência Real. Métricas Profissionais.
...



## 📊 Painel de Qualidade — Allure & TMMi

✨ **Qualidade Contínua. Evidência Real. Métricas Profissionais.**

Este projeto implementa um **ecossistema completo de testes automatizados**,  
integrando **Cypress + Allure + GitHub Actions**, totalmente alinhado à abordagem do **TMMi (Test Maturity Model Integration)**.

| 📁 Componente | ⚙️ Função | 📈 Saída |
|---------------|-----------|----------|
| **Cypress** | Executa fluxos de testes E2E e API | Resultados e logs |
| **Mocha + JUnit** | Estrutura os dados para métricas | Relatórios XML |
| **Allure Framework** | Gera relatórios visuais e interativos | Dashboards HTML |
| **GitHub Actions CI** | Automatiza a execução a cada commit | Relatórios contínuos |
| **Metodologia TMMi** | Garante maturidade e melhoria de QA | Evolução da qualidade |

🧾 **Relatórios mais recentes:**  
- [📊 Allure Report – Visualização e Métricas](docs/allure/Entendendo_o_Allure.md)  
- [📘 Histórico de Maturidade de Testes (TMMi)](docs/tmmi-history/Historico_TMMi.md)

---

# qa-tests-ecommerce
Projeto prático de automação de qualidade para um e-commerce, com foco em testes E2E, API e integração contínua via GitHub Actions.


# 🧪 Cypress – Automação de Testes de Qualidade

Este projeto tem como objetivo demonstrar o uso do **Cypress**, uma das ferramentas mais modernas e eficientes para automação de testes de aplicações web, aplicada aqui em um cenário de **e-commerce**.  
Através dele, garantimos **qualidade contínua**, **rapidez nas validações** e **confiança nas entregas de software**.

---

## 🧭 O que é o Cypress?

O **Cypress** é uma ferramenta de **automação de testes front-end** voltada para aplicações web modernas.  
Diferente de frameworks tradicionais (como Selenium), ele foi construído com base em **JavaScript** e executa os testes diretamente no navegador, proporcionando:

- **Testes E2E (End-to-End)** — simulando a navegação real de um usuário;
- **Testes de Integração e Componentes** — garantindo que diferentes partes da aplicação funcionem juntas;
- **Velocidade e Reprodutibilidade** — execução rápida, feedback imediato e resultados detalhados;
- **Facilidade de configuração** — em poucos minutos é possível iniciar e visualizar os testes.

---

## 🏢 Como o Cypress ajuda as empresas

Nas empresas, o Cypress é amplamente utilizado em **departamentos de Qualidade de Software (QA)** e **DevOps** para:

1. **Evitar falhas em produção**  
   Detectando erros de interface, lógica ou integração antes que o usuário final os encontre.

2. **Aumentar a produtividade do time**  
   Automatizando tarefas de validação repetitivas que antes eram manuais.

3. **Melhorar a comunicação entre QA, Dev e Produto**  
   Com relatórios visuais e vídeos de execução, o Cypress ajuda a entender rapidamente o que deu errado.

4. **Garantir entregas ágeis com segurança**  
   É muito usado em pipelines de **CI/CD (Integração Contínua e Entrega Contínua)** para testar o sistema automaticamente a cada atualização do código.

---

## 🛍️ Aplicação no projeto *qa-tests-ecommerce*

Neste projeto, o Cypress foi utilizado para automatizar fluxos de um **e-commerce fictício**, como:

- Abertura do site e validação de elementos da página;  
- Busca de produtos e conferência de resultados;  
- Adição e remoção de itens do carrinho;  
- Validação de respostas de API e status HTTP;  
- Simulação de login e fluxo de compra.

---

## ⚙️ Tecnologias utilizadas

- **Node.js** – ambiente de execução JavaScript;  
- **Cypress 13+** – framework principal de testes;  
- **GitHub Actions** – automação de pipeline para execução contínua dos testes;  
- **HTML/CSS/JavaScript** – base do ambiente de simulação local;  
- **VS Code** – IDE para desenvolvimento e execução dos scripts de teste.

---

## 🚀 Como executar os testes localmente

```bash
# Instalar dependências
npm install

# Iniciar o servidor local (porta 8080)
npm run serve

# Abrir o Cypress em modo interativo
npm run cy:open

# Executar os testes em modo headless (sem interface)
npm run cy:run
Benefícios práticos do uso do Cypress

✅ Redução de retrabalho e erros manuais
✅ Feedback instantâneo para desenvolvedores
✅ Execução paralela e gravação em vídeo das execuções
✅ Relatórios visuais e detalhados para auditoria e acompanhamento de bugs
✅ Integração simples com GitHub Actions, Slack, Jira e outras ferramentas corporativas

## 📊 Histórico de Maturidade de Testes (TMMi)
Veja como o modelo TMMi foi aplicado neste projeto:  
➡️ [docs/tmmi-history/Historico_TMMi.md](docs/tmmi-history/Historico_TMMi.md)

## 🧬 Mutation Testing (Stryker) — WIP controlado

Implementei a base de Mutation Testing com **Stryker** no subprojeto `projetos/tests-integration`.  
Por padrão, **não quebro a pipeline** em Windows devido a nuances de sandbox/paths do Jest dentro do Stryker no SO (ex.: conflitos de `.stryker-tmp` e detecção de config).  
Isso é **intencional**: priorizei estabilidade de CI/CD e valor de negócio (E2E + Integração + Carga + Allure).

**Como rodar:**
```bash
cd projetos/tests-integration
npm run test:mutation           # modo seguro (não falha no Windows; imprime orientação)
npm run test:mutation:strict    # roda “pra valer” (recomendado em WSL2/Ubuntu ou runner Linux)


💡 Conclusão

O uso do Cypress representa um avanço na cultura de qualidade contínua dentro das empresas.
Ao automatizar cenários críticos de negócio, ele garante que as aplicações web mantenham sua performance, usabilidade e confiabilidade, mesmo com ciclos de deploy cada vez mais rápidos.

📫 Contato
Desenvolvido por Raquel G. de Souza (rakellkizz)
💼 GitHub: @rakellkizz

📧 Email: raquel.souza.analista.ti@gmail.com
