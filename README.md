

# 🌿 ONG Esperança Viva - Plataforma Web (SPA)

> Aplicação web desenvolvida para a **ONG Esperança Viva**, focada no engajamento de voluntários, captação de doadores e divulgação de projetos sociais. O projeto foi estruturado como uma **Single Page Application (SPA)** nativa, com foco em acessibilidade (WCAG 2.1 AA), validação em tempo real e persistência local de dados.

![Version](https://img.shields.io/badge/version-1.0.0-green.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![WCAG](https://img.shields.io/badge/WCAG-2.1%20AA-success.svg)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B%20Modules-yellow.svg)

---

## 📖 Sobre o Projeto

A **ONG Esperança Viva** é uma instituição fictícia voltada ao apoio de comunidades em situação de vulnerabilidade social. Esta plataforma tem como objetivo oferecer uma experiência fluida e acessível tanto em dispositivos móveis quanto em computadores, permitindo que potenciais voluntários e doadores conheçam as iniciativas e realizem seus cadastros com segurança.

A aplicação evoluiu de uma estrutura estática tradicional para uma **SPA (Single Page Application)** construída em **Vanilla JavaScript**, utilizando navegabilidade baseada em *hash routing* sem a necessidade de recarregamento de página.

---

## 🚀 Tecnologias Utilizadas

A arquitetura do projeto prioriza o uso de tecnologias web nativas para garantir alta performance, baixo acoplamento e independência de *frameworks* pesados:

* **HTML5 Semântico:** Estruturação acessível com uso adequado de tags (`<header>`, `<main>`, `<nav>`, `<article>`, `<fieldset>`, etc.).
* **CSS3 moderno:** Estilização responsiva com Flexbox, CSS Grid, Media Queries e uso de **Design Tokens** (Variáveis CSS).
* **JavaScript ES6+ (Modules):** Modularização nativa usando `import` e `export` para separação clara de responsabilidades.
* **Web Storage API (`localStorage`):** Persistência dos cadastros no navegador com serialização e desserialização via `JSON.stringify` e `JSON.parse`.
* **SweetAlert2:** Biblioteca externa integrada via CDN (ES6 Module) para emissão de modais e alertas interativos de confirmação.
* **Expressões Regulares (RegEx):** Aplicação de máscaras dinâmicas e validação estrutural de CPF, CEP, Telefone e E-mail.

---

## 📂 Arquitetura e Estrutura de Ficheiros

A aplicação segue o **Princípio da Responsabilidade Única (SRP)**, onde o `index.html` atua como o *Application Shell* e a pasta `js/modules/` armazena a inteligência e as regras de negócio:

```text
├── css/
│   └── style.css            # Folha de estilos unificada (Tokens, Layout, Acessibilidade)
├── imagens/
│   └── institucional-ong.webp # Recursos visuais otimizados
├── js/
│   ├── modules/
│   │   ├── router.js        # Gerenciador de rotas SPA por hash (#inicio, #projetos, #cadastro)
│   │   ├── storage.js       # Abstração de operações com o localStorage
│   │   ├── templates.js     # Geradores de marcação HTML dinâmicos via Template Literals
│   │   ├── ui.js            # Interações do DOM, menu mobile, eventos do formulário e SweetAlert2
│   │   └── validation.js    # Máscaras de entrada, validação com RegEx e classes de erro/sucesso
│   └── main.js              # Ponto de entrada (Entry Point) da aplicação
├── index.html               # Application Shell (Cabeçalho e Rodapé fixos + container <main id="app">)
└── README.md                # Documentação técnica do projeto

```

---

## ♿ Acessibilidade Web (WCAG 2.1 - Nível AA)

A interface foi projetada para garantir acesso universal e conformidade com as diretrizes da **WCAG 2.1**:

1. **Navegação por Teclado:** Foco visível configurado para todos os elementos interativos (`<a>`, `<button>`, `<input>`, `<select>`).
2. **Semântica e Leitores de Ecrã:** Atributos ARIA (`aria-label`, `aria-live`, `aria-expanded`) e regiões semânticas bem delimitadas.
3. **Contraste de Cores:** Combinações de texto e fundo testadas para atingir o rácio mínimo de contraste exigido (4.5:1).
4. **Formulários Acessíveis:** Todos os campos possuem rótulos `<label>` explicitamente associados via atributo `for`, além de `<small>` com mensagens dinâmicas de apoio/erro.

---

## 🛠️ Funcionalidades Principais

* **Roteamento SPA Dinâmico:** Alternância instantânea de telas sem recarregar a página.
* **Formulário de Voluntariado:**
* Máscaras em tempo real para **CPF**, **CEP** e **Telefone**.
* Validação preventiva durante a digitação (`input`) e na perda do foco (`blur`).
* Sinalização visual dinâmica através das classes `.is-valid` (verde) e `.is-invalid` (vermelho).
* Envio seguro com bloqueio preventivo de dados inconsistentes.


* **Persistência de Dados:** Gravação automática das inscrições no `localStorage`, permitindo recuperação do histórico após o fecho da aba.
* **Design Responsivo:** Menu hambúrguer funcional e adaptação fluida para dispositivos *mobile*, *tablets* e *desktops*.

---

## 💻 Como Executar o Projeto Localmente

Como a aplicação utiliza **ES6 Modules** nativos (`import`/`export`), ela deve ser executada através de um servidor local HTTP.

### Pré-requisitos

* Git instalado na máquina.
* Um servidor local simples (ex: extensão **Live Server** do VS Code, Python, Node.js ou PHP).

### Passo a passo

1. **Clonar o repositório:**
```bash
git clone (https://github.com/cristiermc/CruzeiroDoSul.git)

```


2. **Aceder à pasta do projeto:**
```bash
cd CruzeiroDoSul

```


3. **Iniciar um servidor local:**
* **Via VS Code:** Abra a pasta no VS Code, clique com o botão direito no `index.html` e selecione **Open with Live Server**.
* **Via Python:**
```bash
python -m http.server 8000

```


* **Via Node.js (`npx serve`):**
```bash
npx serve

```




4. **Aceder no navegador:**
Abra a URL indicada pelo servidor (ex: `http://localhost:8000` ou `http://127.0.0.1:5500`).

---

## 🌿 Estrutura de Branches e Versionamento (GitFlow & SemVer)

O repositório utiliza a estratégia **GitFlow** acompanhada do padrão **Conventional Commits** e **Versionamento Semântico (SemVer)**:

* `main`: Código estável e validado, pronto para ambiente de produção.
* `develop`: Branch de integração contínua das novas funcionalidades.
* `feature/*`: Ramificações temporárias criadas para o desenvolvimento de módulos específicos.

### Releases e Marcos do Projeto

* `v1.0.0` — **Major Release:** Conversão integral para Single Page Application (SPA), modularização ES6, validações dinâmicas e persistência no `localStorage`.
* `v0.2.0` — **Minor Release:** Implementação do layout responsivo e menu hambúrguer móvel.
* `v0.1.0` — **Minor Release:** Estruturação semântica em HTML5 e sistema de estilos CSS com Design Tokens.

---

## 📄 Licença

Este projeto é de uso acadêmico e social, distribuído sob a licença **MIT**. Sinta-se à vontade para estudar, modificar e reutilizar o código.

---

Desenvolvido como parte integrante da **Experiência Prática IV - Desenvolvimento Front-End** (2026).

```

```
