const fs = require('fs');

const appJsPath = './app.js';
const vocabPath = './vocabulario.txt';

const lines = fs.readFileSync(vocabPath, 'utf8').split('\n').map(l => l.trim()).filter(l => l);
lines.shift(); // remove header

function getFitzClass(tipo) {
    tipo = tipo.toLowerCase();
    
    // Yellow: Personas y Pronombres
    if (tipo.includes('pronombre')) return 'fitz-yellow';
    
    // Green: Verbos / Acciones
    if (tipo.includes('verbo') || tipo.includes('acción') || tipo.includes('rutina')) return 'fitz-green';
    
    // Pink/Purple: Palabras sociales
    if (tipo.includes('social') || tipo.includes('saludo') || tipo.includes('despedida') || tipo.includes('cortesía') || tipo.includes('interacción')) return 'fitz-pink';
    
    // Blue: Adjetivos / Descripciones / Emociones
    if (tipo.includes('adjetivo') || tipo.includes('emoción') || tipo.includes('estado') || tipo.includes('sensación') || tipo.includes('regulación')) return 'fitz-blue';
    
    // Orange: Sustantivos
    if (tipo.includes('sustantivo') || tipo.includes('lugar') || tipo.includes('objeto') || tipo.includes('alimento') || tipo.includes('bebida') || tipo.includes('necesidad') || tipo.includes('comida') || tipo.includes('parte del cuerpo') || tipo.includes('lesión') || tipo.includes('tratamiento')) return 'fitz-orange';
    
    // White: Misceláneas
    if (tipo.includes('adverbio') || tipo.includes('ubicación') || tipo.includes('tiempo') || tipo.includes('pregunta') || tipo.includes('afirmación') || tipo.includes('negación') || tipo.includes('expresión')) return 'fitz-white';
    
    return 'fitz-white';
}

const iconsCategory = {
    'Núcleo': '⭐', 'Básicos': '💧', 'Emociones': '😊', 
    'Actividades': '🎮', 'Confort': '🧸', 'Dolor': '🏥', 
    'Comida': '🍎', 'Sensaciones': '❄️'
};

const categories = {};

for (const line of lines) {
    const parts = line.split(',');
    if (parts.length < 5) continue;
    const cat = parts[0];
    const text = parts[1];
    const tipo = parts[2];
    const icon = parts[3];
    
    let catId = cat.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // remove accents
    
    if (!categories[catId]) {
        categories[catId] = {
            id: catId,
            name: cat,
            icon: iconsCategory[cat] || '📁',
            items: []
        };
    }
    
    categories[catId].items.push({
        icon: icon,
        text: text,
        type: getFitzClass(tipo)
    });
}

// Generate the javascript string
let categoriesStr = 'const categories = {\n';
for (const key in categories) {
    const c = categories[key];
    categoriesStr += `    ${key}: {\n`;
    categoriesStr += `        id: '${c.id}', name: '${c.name}', icon: '${c.icon}',\n`;
    categoriesStr += `        items: [\n`;
    
    const itemStrs = c.items.map(item => `            { icon: '${item.icon}', text: '${item.text}', type: '${item.type}' }`);
    categoriesStr += itemStrs.join(',\n') + '\n';
    
    categoriesStr += `        ]\n    },\n`;
}
// Remove last trailing comma
categoriesStr = categoriesStr.slice(0, categoriesStr.lastIndexOf(',\n')) + '\n    }\n};';

// Update app.js
let appJs = fs.readFileSync(appJsPath, 'utf8');

const startStr = 'const categories = {';
const startIdx = appJs.indexOf(startStr);
const endIdx = appJs.indexOf('};\n\n/**', startIdx) + 2;

if (startIdx !== -1 && endIdx !== -1) {
    appJs = appJs.substring(0, startIdx) + categoriesStr + appJs.substring(endIdx);
    
    // Also update renderGrid to use item.type
    // Find: card.className = `card \${categoryContent.class}`;
    appJs = appJs.replace(/card\.className = `card \$\{categoryContent\.class\}`;/g, 'card.className = `card \${item.type}`;');
    
    fs.writeFileSync(appJsPath, appJs);
    console.log("Success");
} else {
    console.log("Could not find bounds");
}
