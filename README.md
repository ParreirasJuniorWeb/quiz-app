# React Quiz App

![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?style=flat-square&logo=javascript) ![Vite](https://img.shields.io/badge/Vite-5-orange?style=flat-square&logo=vite)

**Aplicação de perguntas e respostas sobre HTML5, CSS3 e JavaScript.** Um sistema de React Quiz que busca os dados de um arquivo `.json` (perguntas e respostas) e através de **APIContext**, **custom hooks** e outros mecanismos do **React Nativo**, as perguntas e respostas aparecem automaticamente para o usuário. As perguntas são geradas **aleatoriamente**.

## ✨ **Demo**

[🔗 Teste o Quiz ao vivo](https://seu-react-quiz.netlify.app) *(substitua pelo link do seu deploy)*

## 📱 **Funcionalidades**

- ✅ **Quiz interativo** com perguntas aleatórias
- ✅ **Base de dados local** (JSON com perguntas HTML5, CSS3, JS)
- ✅ **React Context API** para gerenciamento global de estado
- ✅ **Custom Hooks** para lógica reutilizável
- ✅ **Sistema de pontuação** em tempo real
- ✅ **Navegação fluida** entre perguntas
- ✅ **Design responsivo** e moderno
- ✅ **Feedback visual** para respostas corretas/erradas

## 🎯 **Tecnologias Utilizadas**

```javascript
Frontend:
├── React 18+
├── Vite (Build Tool)
├── React Context API
├── Custom Hooks
├── JSON Local Database
├── Tailwind CSS / CSS Modules
└── React Router (opcional)
```

## 📂 Estrutura do Projeto

```
react-quiz-app/
│
├── public/
│   └── questions.json     # Base de dados local
│
├── src/
│   ├── components/
│   │   ├── QuizCard.jsx
│   │   ├── ProgressBar.jsx
│   │   └── Results.jsx
│   ├── context/
│   │   └── QuizContext.jsx
│   ├── hooks/
│   │   ├── useQuiz.js
│   │   └── useLocalData.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── vite.config.js
└── README.md
```

## 🚀 Como executar localmente

### Pré-requisitos
 - **Node.js* 18+ instalado

## Instalação
```bash
# Clone o projeto
git clone https://github.com/seuusuario/react-quiz-app.git

# Entre no diretório
cd react-quiz-app

# Instale as dependências
npm install

# Execute o projeto
npm run dev
```

A aplicação estará disponível em **`http://localhost:5173`**.

## 🎮 Como usar
1. **Inicie** o quiz clicando em "Começar"
2. **Responda** as perguntas (uma por vez)
3. **Acompanhe** sua pontuação em tempo real
4. **Veja** o resultado final com estatísticas
5. **Reinicie** quando quiser!

## 📊 Exemplo de Dados JSON

```
export const Questions = [
    {
        class: "html",
        question: "What does HTML stand for?",  
        options: [
        "Hyper Text Markup Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Language",
        "Hyperlinking Text Marking Language"
        ],      
        answer: "Hyper Text Markup Language",
        tip: "HTML is used to create web pages and define their structure with markup elements."
    },
    {
        class: "html",
        question: "Who is making the Web standards?",
        options: [
        "Mozilla",
        "Microsoft",
        "The World Wide Web Consortium",
        "Google"
        ],  
        answer: "The World Wide Web Consortium",
        tip: "This is an international organization that creates web standards, commonly known as W3C."
    },
    {
        class: "html",
        question: "Choose the correct HTML element for the largest heading:",
        options: [
        "<heading>",
        "<h6>",
        "<head>",
        "<h1>"
        ],  
        answer: "<h1>",
        tip: "Heading tags range from h1 (largest) to h6 (smallest)."
    },
    {
        class: "css",
        question: "What does CSS stand for?",  
        options: [
        "Creative Style Sheets",
        "Cascading Style Sheets",
        "Computer Style Sheets",
        "Colorful Style Sheets"
        ],      
        answer: "Cascading Style Sheets",
        tip: "CSS is used to style HTML elements, and styles cascade down from parent to child elements."
    },  
    {
        class: "css",
        question: "Which HTML tag is used to define an internal style sheet?",
        options: [
        "<style>",
        "<css>",
        "<script>",
        "<link>"
        ],  
        answer: "<style>",
        tip: "This tag is placed inside the <head> section to write CSS rules for the page."
    },
    {
        class: "css",
        question: "Which is the correct CSS syntax?",
        options: [
        "body:color=black;",
        "{body;color:black;}",
        "body {color: black;}",
        "{body:color=black;}"
        ],  
        answer: "body {color: black;}",
        tip: "CSS syntax uses a selector, followed by curly braces containing properties and values separated by colons."
    },
    {
        class: "js",
        question: "Inside which HTML element do we put the JavaScript?",  
        options: [
        "<js>",
        "<scripting>",
        "<script>",
        "<javascript>"
        ],      
        answer: "<script>",
        tip: "The <script> tag is used to embed JavaScript code in HTML documents."
    },
    {
        class: "js",
        question: "How do you create a function in JavaScript?",
        options: [
        "function = myFunction()",
        "function:myFunction()",
        "function myFunction()",
        "create myFunction()"
        ],  
        answer: "function myFunction()",
        tip: "Use the 'function' keyword followed by the function name and parentheses."
    },
    {
        class: "js",
        question: "How do you call a function named 'myFunction'?",
        options: [
        "call myFunction()",    
        "myFunction()",
        "Call.myFunction()",
        "call function myFunction()"
        ],  
        answer: "myFunction()",
        tip: "To execute a function, simply write its name followed by parentheses."
    }
    
];

export default Questions;
```

## 🎨 Capturas de tela

| Tela Inicial | Durante o Quiz | Resultado Final |
| ------------- | ------ | ----------------- |
| ![Lar](capturas de tela/casa | ![Quiz]() | ![Resultados]() |

## 🧪 Implementados de Ganchos Personalizados
```
// useQuiz.js - Gerencia estado do quiz
// useLocalData.js - Carrega dados do JSON
// useRandomQuestion.js - Seleciona pergunta aleatória
```

## 🔧 Customizações
1. **Adicionar mais perguntas**: Edite **`public/questions.json`**
2. **Temas mudar**: HTML5, CSS3, React, etc.
3. **Temporizador**: Implemente hook de timer
4. **Persistência**: Salve melhores pontuações no localStorage

## 🤝 Contribuições

1. Fork o projeto
2. Crie uma branch **`feat/nova-funcionalidade`**
3. Commit suas mudanças
4. Empurrar para um ramo
5. Abra um Pull Request

## 📄 Licença
Este projeto está sob a licença **[MIT](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)**.

## 🙋 ♂️ Autor

**`Desenvolvedor Fullstack`**

[ParreirasJuniorWeb](https://github.com/ParreirasJuniorWeb)
✉️ [joaoparreiras2020@gmail.com](mailto:joaoparreiras20202gmail.com)
💼 [jvparreiras](https://www.linkedin.com/in/jvparreiras)

<div align="center"> 
  <strong>Desafio seu conhecimento em HTML5, CSS3 e JavaScript! 🎯 </forte><br><br> 
  <img src="https://img.shields.io/github/stars/seuusuario/react-quiz-app?style=social" alt="estrelas"> 
</div> 
