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