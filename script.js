function formatText(command) {
    document.execCommand(command, false, null);
    updateWordCount();
}

function changeFont(font) {
    document.execCommand('fontName', false, font);
}

function changeColor(color) {
    document.execCommand('foreColor', false, color);
}

function updateWordCount() {
    const text = document.getElementById('editor').innerText;
    const words = text.split(/\s+/).filter(word => word.length > 0);
    document.getElementById('wordCount').textContent = words.length;
}

function searchText() {
    const searchTerm = document.getElementById('searchInput').value;
    const editorText = document.getElementById('editor').innerHTML;
    const highlightedText = editorText.replace(new RegExp(searchTerm, 'gi'), match => `<span style="background-color: yellow;">${match}</span>`);
    document.getElementById('editor').innerHTML = highlightedText;
}

function toUpperCase() {
    const editor = document.getElementById('editor');
    editor.innerText = editor.innerText.toUpperCase();
}

function toLowerCase() {
    const editor = document.getElementById('editor');
    editor.innerText = editor.innerText.toLowerCase();
}

function trimText() {
    const editor = document.getElementById('editor');
    editor.innerText = editor.innerText.trim();
}

function replaceText() {
    const searchTerm = prompt("Introduce el texto a buscar:");
    const replaceTerm = prompt("Introduce el texto de reemplazo:");
    const editor = document.getElementById('editor');
    editor.innerText = editor.innerText.replace(new RegExp(searchTerm, 'g'), replaceTerm);
}

function replaceAllText() {
    const searchTerm = prompt("Introduce el texto a buscar:");
    const replaceTerm = prompt("Introduce el texto de reemplazo:");
    const editor = document.getElementById('editor');
    editor.innerText = editor.innerText.replaceAll(searchTerm, replaceTerm);
}

function sliceText() {
    const start = prompt("Introduce el índice de inicio:");
    const end = prompt("Introduce el índice de fin:");
    const editor = document.getElementById('editor');
    editor.innerText = editor.innerText.slice(start, end);
}

function substringText() {
    const start = prompt("Introduce el índice de inicio:");
    const end = prompt("Introduce el índice de fin:");
    const editor = document.getElementById('editor');
    editor.innerText = editor.innerText.substring(start, end);
}

function substrText() {
    const start = prompt("Introduce el índice de inicio:");
    const length = prompt("Introduce la longitud:");
    const editor = document.getElementById('editor');
    editor.innerText = editor.innerText.substr(start, length);
}

function concatText() {
    const textToAdd = prompt("Introduce el texto a concatenar:");
    const editor = document.getElementById('editor');
    editor.innerText = editor.innerText.concat(textToAdd);
}

function repeatText() {
    const times = prompt("Introduce el número de veces a repetir:");
    const editor = document.getElementById('editor');
    editor.innerText = editor.innerText.repeat(times);
}

function padStartText() {
    const targetLength = prompt("Introduce la longitud objetivo:");
    const padString = prompt("Introduce el texto de relleno:");
    const editor = document.getElementById('editor');
    editor.innerText = editor.innerText.padStart(targetLength, padString);
}

function padEndText() {
    const targetLength = prompt("Introduce la longitud objetivo:");
    const padString = prompt("Introduce el texto de relleno:");
    const editor = document.getElementById('editor');
    editor.innerText = editor.innerText.padEnd(targetLength, padString);
}

function splitText() {
    const separator = prompt("Introduce el separador:");
    const editor = document.getElementById('editor');
    const parts = editor.innerText.split(separator);
    editor.innerText = parts.join("\n");
}

document.getElementById('editor').addEventListener('input', updateWordCount);