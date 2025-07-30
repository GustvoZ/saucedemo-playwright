<div align="center">

**[Português 🇧🇷](#-versão-em-português) | [English 🇬🇧](#-english-version)**

</div>

---

## 🇧🇷 Versão em Português

![Playwright](https://img.shields.io/badge/Teste%20com-Playwright-2EAD33?style=for-the-badge&logo=playwright)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

### 📖 Sobre o Projeto

Este projeto é uma suíte de testes de automação End-to-End (E2E) desenvolvida для o site de demonstração [SauceDemo (Swag Labs)](https://www.saucedemo.com/). O objetivo é demonstrar a aplicação de melhores práticas em automação de testes de UI, incluindo o uso do padrão **Page Object Model (POM)**, testes dinâmicos e parametrizados, e uma estrutura de código limpa e de fácil manutenção.

Este repositório serve como um portfólio prático de habilidades em automação de testes com Playwright e JavaScript.

### ✨ Cenários de Teste Cobertos

A suíte de testes cobre os seguintes fluxos e funcionalidades críticas:

* ✅ **Login:**
  * Login com sucesso.
  * Exibição de mensagem de erro para login com falha.
* ✅ **Página de Inventário:**
  * Ordenação de produtos por preço (menor para o maior).
  * Ordenação de produtos por ordem alfabética (A-Z e Z-A).
  * Adição de um item ao carrinho de compras.
* ✅ **Navegação:**
  * Teste dinâmico que clica em cada produto da lista, verifica a página de detalhes e retorna.
* ✅ **Fluxo de Compra E2E:**
  * Fluxo completo desde o login, adição ao carrinho, preenchimento de dados do comprador e finalização da compra.
* ✅ **Validação de Formulário:**
  * Teste parametrizado que verifica as mensagens de erro no formulário de checkout quando os campos estão vazios.

### 🛠️ Tecnologias Utilizadas

* **Framework de Teste:** [Playwright](https://playwright.dev/)
* **Linguagem:** JavaScript
* **Gerenciador de Pacotes:** npm
* **Ambiente de Execução:** Node.js


### ⚙️ Pré-requisitos

Antes de começar, garanta que você tem os seguintes softwares instalados:
* [Node.js](https://nodejs.org/) (versão LTS recomendada)
* [Git](https://git-scm.com/)

### 🚀 Instalação e Execução

Siga os passos abaixo para executar o projeto localmente:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/GustvoZ/saucedemo-playwright.git](https://github.com/GustvoZ/saucedemo-playwright.git)
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd saucedemo-playwright
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Instale os navegadores do Playwright:**
    ```bash
    npx playwright install
    ```

### ▶️ Rodando os Testes

Você pode executar os testes de várias formas:

* **Rodar todos os testes em modo headless (padrão):**
  ```bash
  npx playwright test
  ```

* **Rodar todos os testes em modo visual (com navegador):**
  ```bash
  npx playwright test --headed
  ```

* **Rodar testes com uma tag específica (ex: `@cart`):**
  ```bash
  npx playwright test --grep @cart
  ```

* **Abrir o Modo UI do Playwright para depuração interativa:**
  ```bash
  npx playwright test --ui
  ```

### 📊 Visualizando os Relatórios

Após a execução dos testes, um relatório HTML será gerado na pasta `playwright-report`. Para abri-lo, use o comando:

```bash
npx playwright show-report
```

---

## 🇬🇧 English Version

![Playwright](https://img.shields.io/badge/Test%20with-Playwright-2EAD33?style=for-the-badge&logo=playwright)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

### 📖 About The Project

This project is an End-to-End (E2E) test automation suite developed for the demo website [SauceDemo (Swag Labs)](https://www.saucedemo.com/). Its purpose is to demonstrate the application of best practices in UI test automation, including the use of the **Page Object Model (POM)** pattern, dynamic and parameterized tests, and a clean, maintainable code structure.

This repository serves as a practical portfolio of test automation skills using Playwright and JavaScript.

### ✨ Test Scenarios Covered

The test suite covers the following critical flows and features:

* ✅ **Login:**
  * Successful login.
  * Error message display for a failed login attempt.
* ✅ **Inventory Page:**
  * Sorting products by price (low to high).
  * Sorting products alphabetically (A-Z and Z-A).
  * Adding an item to the shopping cart.
* ✅ **Navigation:**
  * A dynamic test that clicks on each product in the list, verifies the detail page, and navigates back.
* ✅ **E2E Purchase Flow:**
  * A complete flow from login, adding an item to the cart, filling in buyer information, and completing the purchase.
* ✅ **Form Validation:**
  * A parameterized test that verifies error messages on the checkout form for empty fields.

### 🛠️ Technologies Used

* **Test Framework:** [Playwright](https://playwright.dev/)
* **Language:** JavaScript
* **Package Manager:** npm
* **Runtime Environment:** Node.js


### ⚙️ Prerequisites

Before you begin, ensure you have the following software installed:
* [Node.js](https://nodejs.org/) (LTS version recommended)
* [Git](https://git-scm.com/)

### 🚀 Installation and Setup

Follow the steps below to run the project locally:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/GustvoZ/saucedemo-playwright.git](https://github.com/GustvoZ/saucedemo-playwright.git)
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd saucedemo-playwright
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Install Playwright's browsers:**
    ```bash
    npx playwright install
    ```

### ▶️ Running the Tests

You can run the tests in several ways:

* **Run all tests in headless mode (default):**
  ```bash
  npx playwright test
  ```

* **Run all tests in headed mode (with browser UI):**
  ```bash
  npx playwright test --headed
  ```
  
* **Run tests with a specific tag (e.g., `@cart`):**
  ```bash
  npx playwright test --grep @cart
  ```

* **Open Playwright's UI Mode for interactive debugging:**
  ```bash
  npx playwright test --ui
  ```

### 📊 Viewing Reports

After the tests run, an HTML report will be generated in the `playwright-report` folder. To open it, use the following command:

```bash
npx playwright show-report
```