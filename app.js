/**
 * Application Data
 */
const categories = {
    nucleo: {
        id: 'nucleo', name: 'Núcleo', icon: '⭐',
        items: [
            { icon: '🧍', text: 'Yo', type: 'fitz-yellow' },
            { icon: '👉', text: 'Tú', type: 'fitz-yellow' },
            { icon: '👤', text: 'Él / Ella', type: 'fitz-yellow' },
            { icon: '🫂', text: 'Nosotros', type: 'fitz-yellow' },
            { icon: '🤲', text: 'Quiero', type: 'fitz-green' },
            { icon: '🙅', text: 'No quiero', type: 'fitz-green' },
            { icon: '➕', text: 'Más', type: 'fitz-white' },
            { icon: '🛑', text: 'Se acabó / Fin', type: 'fitz-white' },
            { icon: '🤝', text: 'Ayuda', type: 'fitz-green' },
            { icon: '➡️', text: 'Ir', type: 'fitz-green' },
            { icon: '✋', text: 'Parar', type: 'fitz-green' },
            { icon: '👍', text: 'Gustar', type: 'fitz-green' },
            { icon: '👎', text: 'No gustar', type: 'fitz-green' },
            { icon: '📥', text: 'Poner', type: 'fitz-green' },
            { icon: '📤', text: 'Quitar', type: 'fitz-green' },
            { icon: '🫴', text: 'Dar', type: 'fitz-green' },
            { icon: '✊', text: 'Tomar / Coger', type: 'fitz-green' },
            { icon: '👐', text: 'Abrir', type: 'fitz-green' },
            { icon: '🤏', text: 'Cerrar', type: 'fitz-green' },
            { icon: '👇', text: 'Aquí', type: 'fitz-white' },
            { icon: '👆', text: 'Allí', type: 'fitz-white' },
            { icon: '⏱️', text: 'Ahora', type: 'fitz-white' },
            { icon: '⏳', text: 'Después', type: 'fitz-white' },
            { icon: '❓', text: 'Qué', type: 'fitz-white' }
        ]
    },
    basicos: {
        id: 'basicos', name: 'Básicos', icon: '💧',
        items: [
            { icon: '✅', text: 'Sí', type: 'fitz-white' },
            { icon: '❌', text: 'No', type: 'fitz-white' },
            { icon: '👋', text: 'Hola', type: 'fitz-pink' },
            { icon: '👋', text: 'Adiós', type: 'fitz-pink' },
            { icon: '🙏', text: 'Por favor', type: 'fitz-pink' },
            { icon: '🫂', text: 'Gracias', type: 'fitz-pink' },
            { icon: '🙇', text: 'Perdón', type: 'fitz-pink' },
            { icon: '💬', text: '¿Cómo estás?', type: 'fitz-green' },
            { icon: '👍', text: 'Bien', type: 'fitz-blue' },
            { icon: '👎', text: 'Mal', type: 'fitz-blue' },
            { icon: '🚽', text: 'Baño / Retrete', type: 'fitz-orange' },
            { icon: '🛌', text: 'Dormir', type: 'fitz-orange' },
            { icon: '🧼', text: 'Lavarse', type: 'fitz-green' },
            { icon: '👕', text: 'Vestirse', type: 'fitz-green' },
            { icon: '✋', text: 'Esperar', type: 'fitz-green' },
            { icon: '🎲', text: 'Mi turno', type: 'fitz-green' },
            { icon: '🤷', text: 'No sé', type: 'fitz-white' }
        ]
    },
    emociones: {
        id: 'emociones', name: 'Emociones', icon: '😊',
        items: [
            { icon: '😀', text: 'Feliz', type: 'fitz-blue' },
            { icon: '😢', text: 'Triste', type: 'fitz-blue' },
            { icon: '😠', text: 'Enfadado', type: 'fitz-blue' },
            { icon: '😨', text: 'Asustado', type: 'fitz-blue' },
            { icon: '🥱', text: 'Cansado', type: 'fitz-blue' },
            { icon: '😐', text: 'Aburrido', type: 'fitz-blue' },
            { icon: '🤩', text: 'Emocionado', type: 'fitz-blue' },
            { icon: '😖', text: 'Frustrado', type: 'fitz-blue' },
            { icon: '😌', text: 'Tranquilo', type: 'fitz-blue' },
            { icon: '😬', text: 'Nervioso', type: 'fitz-blue' },
            { icon: '😲', text: 'Sorprendido', type: 'fitz-blue' },
            { icon: '🤒', text: 'Enfermo', type: 'fitz-blue' },
            { icon: '😎', text: 'Orgulloso', type: 'fitz-blue' },
            { icon: '😕', text: 'Confundido', type: 'fitz-blue' }
        ]
    },
    actividades: {
        id: 'actividades', name: 'Actividades', icon: '🎮',
        items: [
            { icon: '🧩', text: 'Jugar', type: 'fitz-green' },
            { icon: '📺', text: 'Ver la tele', type: 'fitz-green' },
            { icon: '🎧', text: 'Música', type: 'fitz-green' },
            { icon: '🖍️', text: 'Dibujar', type: 'fitz-green' },
            { icon: '🎨', text: 'Pintar', type: 'fitz-green' },
            { icon: '🚶', text: 'Pasear', type: 'fitz-green' },
            { icon: '📱', text: 'Tablet / Móvil', type: 'fitz-green' },
            { icon: '📖', text: 'Leer', type: 'fitz-green' },
            { icon: '🛝', text: 'Parque', type: 'fitz-orange' },
            { icon: '🧩', text: 'Puzle', type: 'fitz-green' },
            { icon: '💃', text: 'Bailar', type: 'fitz-green' },
            { icon: '🎤', text: 'Cantar', type: 'fitz-green' },
            { icon: '🏃', text: 'Correr', type: 'fitz-green' },
            { icon: '🦘', text: 'Saltar', type: 'fitz-green' },
            { icon: '🏊', text: 'Nadar', type: 'fitz-green' },
            { icon: '💻', text: 'Ordenador', type: 'fitz-green' },
            { icon: '⚽', text: 'Pelota', type: 'fitz-orange' },
            { icon: '🚗', text: 'Coches', type: 'fitz-orange' },
            { icon: '🧱', text: 'Bloques', type: 'fitz-orange' }
        ]
    },
    confort: {
        id: 'confort', name: 'Confort', icon: '🧸',
        items: [
            { icon: '🫂', text: 'Abrazo', type: 'fitz-blue' },
            { icon: '🪔', text: 'Manta', type: 'fitz-blue' },
            { icon: '🧸', text: 'Mi juguete', type: 'fitz-blue' },
            { icon: '🤫', text: 'Silencio', type: 'fitz-blue' },
            { icon: '🚪', text: 'Estar solo', type: 'fitz-blue' },
            { icon: '🪑', text: 'Mecerse', type: 'fitz-blue' },
            { icon: '💡', text: 'Luz suave', type: 'fitz-blue' },
            { icon: '🌑', text: 'Oscuridad', type: 'fitz-blue' },
            { icon: '🦷', text: 'Mordedor', type: 'fitz-blue' },
            { icon: '🎧', text: 'Cascos antirruido', type: 'fitz-blue' },
            { icon: '😮‍💨', text: 'Respirar', type: 'fitz-blue' },
            { icon: '💆', text: 'Masaje', type: 'fitz-blue' },
            { icon: '🏋️', text: 'Presión / Peso', type: 'fitz-blue' },
            { icon: '🎶', text: 'Música relajante', type: 'fitz-blue' }
        ]
    },
    dolor: {
        id: 'dolor', name: 'Dolor', icon: '🏥',
        items: [
            { icon: '🩹', text: 'Me duele', type: 'fitz-white' },
            { icon: '🤕', text: 'Cabeza', type: 'fitz-orange' },
            { icon: '🤢', text: 'Barriga', type: 'fitz-orange' },
            { icon: '🦷', text: 'Dientes / Muelas', type: 'fitz-orange' },
            { icon: '🧣', text: 'Garganta', type: 'fitz-orange' },
            { icon: '👂', text: 'Oído', type: 'fitz-orange' },
            { icon: '💪', text: 'Brazo', type: 'fitz-orange' },
            { icon: '🦵', text: 'Pierna', type: 'fitz-orange' },
            { icon: '🖐️', text: 'Mano', type: 'fitz-orange' },
            { icon: '🦶', text: 'Pie', type: 'fitz-orange' },
            { icon: '👁️', text: 'Ojo', type: 'fitz-orange' },
            { icon: '🧍', text: 'Espalda', type: 'fitz-orange' },
            { icon: '😵‍💫', text: 'Mareado', type: 'fitz-blue' },
            { icon: '🩸', text: 'Corte / Herida', type: 'fitz-orange' },
            { icon: '💥', text: 'Golpe', type: 'fitz-orange' },
            { icon: '💊', text: 'Medicina', type: 'fitz-orange' }
        ]
    },
    comida: {
        id: 'comida', name: 'Comida', icon: '🍎',
        items: [
            { icon: '🍽️', text: 'Tengo hambre', type: 'fitz-white' },
            { icon: '🚰', text: 'Tengo sed', type: 'fitz-white' },
            { icon: '💧', text: 'Agua', type: 'fitz-orange' },
            { icon: '🧃', text: 'Zumo', type: 'fitz-orange' },
            { icon: '🥛', text: 'Leche', type: 'fitz-orange' },
            { icon: '🥖', text: 'Pan', type: 'fitz-orange' },
            { icon: '🍎', text: 'Fruta', type: 'fitz-orange' },
            { icon: '🍏', text: 'Manzana', type: 'fitz-orange' },
            { icon: '🍌', text: 'Plátano', type: 'fitz-orange' },
            { icon: '🍪', text: 'Galletas', type: 'fitz-orange' },
            { icon: '🥣', text: 'Desayuno', type: 'fitz-orange' },
            { icon: '🍛', text: 'Comer / Almuerzo', type: 'fitz-orange' },
            { icon: '🍲', text: 'Cenar', type: 'fitz-orange' },
            { icon: '🥩', text: 'Carne', type: 'fitz-orange' },
            { icon: '🐟', text: 'Pescado', type: 'fitz-orange' },
            { icon: '🍝', text: 'Pasta', type: 'fitz-orange' },
            { icon: '🍚', text: 'Arroz', type: 'fitz-orange' },
            { icon: '🥦', text: 'Verdura', type: 'fitz-orange' },
            { icon: '🍟', text: 'Patatas', type: 'fitz-orange' },
            { icon: '🧀', text: 'Queso', type: 'fitz-orange' },
            { icon: '🥄', text: 'Yogur', type: 'fitz-orange' },
            { icon: '🍦', text: 'Helado', type: 'fitz-orange' },
            { icon: '🥪', text: 'Bocadillo', type: 'fitz-orange' }
        ]
    },
    sensaciones: {
        id: 'sensaciones', name: 'Sensaciones', icon: '❄️',
        items: [
            { icon: '🥶', text: 'Tengo frío', type: 'fitz-blue' },
            { icon: '🥵', text: 'Tengo calor', type: 'fitz-blue' },
            { icon: '🔊', text: 'Ruido fuerte', type: 'fitz-blue' },
            { icon: '☀️', text: 'Mucha luz', type: 'fitz-blue' },
            { icon: '🦟', text: 'Pica', type: 'fitz-blue' },
            { icon: '🗜️', text: 'Me aprieta', type: 'fitz-blue' },
            { icon: '💦', text: 'Mojado', type: 'fitz-blue' },
            { icon: '🦨', text: 'Huele mal', type: 'fitz-blue' },
            { icon: '🌸', text: 'Huele bien', type: 'fitz-blue' },
            { icon: '🪶', text: 'Suave', type: 'fitz-blue' },
            { icon: '🌵', text: 'Áspero', type: 'fitz-blue' },
            { icon: '🪨', text: 'Duro', type: 'fitz-blue' },
            { icon: '🍯', text: 'Pegajoso', type: 'fitz-blue' },
            { icon: '👅', text: 'Sabe mal', type: 'fitz-blue' },
            { icon: '😋', text: 'Sabe bien', type: 'fitz-blue' },
            { icon: '💩', text: 'Sucio', type: 'fitz-blue' },
            { icon: '✨', text: 'Limpio', type: 'fitz-blue' }
        ]
    }
};

/**
 * State and Config
 */
const state = {
    activeCategory: 'nucleo',
    sentence: [], // Array of objects {text, icon}
    emergencyTaps: 0,
    emergencyTimer: null,
    lastEmergencyTap: 0,
    theme: 'light'
};

const CONFIG = {
    emergencyWindow: 1200, // ms to complete 3 taps
    vibLow: 30, // Gentle vibration (ms)
    vibHigh: [300, 100, 300, 100, 300] // Emergency vibration pattern
};

/**
 * DOM Elements referenced frequently
 */
const DOM = {
    tabsContainer: document.getElementById('tabs-container'),
    gridContainer: document.getElementById('grid-container'),
    themeToggleBtn: document.getElementById('theme-toggle'),
    sentenceStrip: document.getElementById('sentence-strip'),
    deleteBtn: document.getElementById('delete-btn'),
    clearBtn: document.getElementById('clear-btn'),
    speakSentenceBtn: document.getElementById('speak-sentence-btn'),
    emergencyBtn: document.getElementById('emergency-btn'),
    zoomModal: document.getElementById('zoom-modal'),
    zoomIcon: document.getElementById('zoom-icon'),
    zoomText: document.getElementById('zoom-text'),
    toast: document.getElementById('toast'),
    htmlElement: document.documentElement
};

/**
 * Initialization
 */
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderTabs();
    renderGrid(state.activeCategory);
    initVoices();
    setupEventListeners();
});

/**
 * Setup Listeners
 */
function setupEventListeners() {
    DOM.themeToggleBtn.addEventListener('click', toggleTheme);
    DOM.emergencyBtn.addEventListener('click', handleEmergencyTap);
    DOM.deleteBtn.addEventListener('click', removeLastWord);
    DOM.clearBtn.addEventListener('click', clearSentence);
    DOM.speakSentenceBtn.addEventListener('click', speakSentence);
    DOM.zoomModal.addEventListener('click', closeZoom);

    // Accessibility for keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeZoom();
    });

    setupSwipeListeners();
}

/**
 * Swipe Navigation
 */
let touchStartX = 0;
let touchEndX = 0;
let touchStartY = 0;
let touchEndY = 0;
let isMouseDown = false;

function setupSwipeListeners() {
    const swipeArea = DOM.gridContainer.parentElement || DOM.gridContainer;

    // ----- EVENTOS TÁCTILES (MÓVILES) -----
    swipeArea.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].clientX;
        touchStartY = e.changedTouches[0].clientY;
    }, { passive: true });

    swipeArea.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].clientX;
        touchEndY = e.changedTouches[0].clientY;
        handleSwipe();
    }, { passive: true });

    swipeArea.addEventListener('touchcancel', e => {
        touchEndX = e.changedTouches[0].clientX;
        touchEndY = e.changedTouches[0].clientY;
        handleSwipe();
    }, { passive: true });

    // ----- EVENTOS DE RATÓN (PC: BRAVE, CHROME, FIREFOX, EDGE, OPERA) -----
    swipeArea.addEventListener('mousedown', e => {
        isMouseDown = true;
        touchStartX = e.clientX;
        touchStartY = e.clientY;
    });

    swipeArea.addEventListener('mouseup', e => {
        if (!isMouseDown) return;
        isMouseDown = false;
        touchEndX = e.clientX;
        touchEndY = e.clientY;
        handleSwipe();
    });

    swipeArea.addEventListener('mouseleave', e => {
        if (!isMouseDown) return;
        isMouseDown = false;
        touchEndX = e.clientX;
        touchEndY = e.clientY;
        handleSwipe();
    });
}

function handleSwipe() {
    const swipeThreshold = 50;
    const swipeDistanceX = touchStartX - touchEndX;
    const swipeDistanceY = touchStartY - touchEndY;
    
    // Evitar que un clic o toque al azar sin distancias genere errores
    if (touchStartX === 0 && touchEndX === 0) return;

    // Si el usuario intentaba hacer scroll vertical (hacia abajo o hacia arriba), 
    // ignoramos el evento de swipe horizontal para no cambiar de pestaña accidentalmente.
    if (Math.abs(swipeDistanceY) > Math.abs(swipeDistanceX)) {
        resetSwipeCoords();
        return;
    }

    // Ignorar pequeños desplazamientos
    if (Math.abs(swipeDistanceX) > swipeThreshold) {
        const categoryKeys = Object.keys(categories);
        const currentIndex = categoryKeys.indexOf(state.activeCategory);

        if (swipeDistanceX > 0) {
            // Swiped left -> next category
            if (currentIndex < categoryKeys.length - 1) {
                changeCategory(categoryKeys[currentIndex + 1]);
                triggerVibration(CONFIG.vibLow);
            }
        } else {
            // Swiped right -> previous category
            if (currentIndex > 0) {
                changeCategory(categoryKeys[currentIndex - 1]);
                triggerVibration(CONFIG.vibLow);
            }
        }
    }
    
    resetSwipeCoords();
}

function resetSwipeCoords() {
    touchStartX = 0;
    touchEndX = 0;
    touchStartY = 0;
    touchEndY = 0;
}

/**
 * Voice Initialization
 */
let synth = window.speechSynthesis;
let voiceEs = null;

function initVoices() {
    if (!synth) return;

    // Load voices
    const loadVoices = () => {
        const voices = synth.getVoices();
        // Priority to neutral, local Spanish voices
        voiceEs = voices.find(v => v.lang === 'es-ES' && (v.name.includes('Google') || v.name.includes('Microsoft'))) ||
            voices.find(v => v.lang.startsWith('es'));
    };

    loadVoices();
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = loadVoices;
    }
}

/**
 * Theme Management
 */
function initTheme() {
    const savedTheme = localStorage.getItem('aac-theme');
    // Default to 'light' per user preference
    const initialTheme = savedTheme || 'light';
    setTheme(initialTheme);
}

function toggleTheme() {
    const newTheme = state.theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    triggerVibration(CONFIG.vibLow);
}

function setTheme(themeName) {
    state.theme = themeName;
    DOM.htmlElement.setAttribute('data-theme', themeName);
    localStorage.setItem('aac-theme', themeName);

    // Update button icon
    const themeIcon = themeName === 'light' ? '🌙' : '☀️';
    DOM.themeToggleBtn.innerHTML = `<span class="icon">${themeIcon}</span>`;

    // Update meta tag for mobile headers
    const metaThemeColor = document.getElementById('meta-theme-color');
    metaThemeColor.setAttribute('content', themeName === 'light' ? '#F9F9F4' : '#121212');
}

/**
 * Render Functions
 */
function renderTabs() {
    DOM.tabsContainer.innerHTML = '';

    Object.values(categories).forEach(cat => {
        const btn = document.createElement('button');
        btn.className = `tab ${cat.id === state.activeCategory ? 'active' : ''}`;
        btn.innerHTML = `${cat.icon} ${cat.name}`;
        btn.setAttribute('aria-label', `Categoría: ${cat.name}`);
        btn.setAttribute('aria-pressed', cat.id === state.activeCategory);

        btn.addEventListener('click', (e) => {
            triggerVibration(CONFIG.vibLow);
            changeCategory(cat.id, e.target);
        });

        DOM.tabsContainer.appendChild(btn);
    });
}

function changeCategory(categoryId) {
    if (state.activeCategory === categoryId) return;
    state.activeCategory = categoryId;

    // Update UI tabs
    const allTabs = DOM.tabsContainer.querySelectorAll('.tab');
    allTabs.forEach((tab, index) => {
        const isMatch = Object.keys(categories)[index] === categoryId;
        if (isMatch) {
            tab.classList.add('active');
            tab.setAttribute('aria-pressed', 'true');
            // Ensure tab is visible on mobile sideways scroll
            tab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } else {
            tab.classList.remove('active');
            tab.setAttribute('aria-pressed', 'false');
        }
    });

    // Render Grid
    renderGrid(categoryId);
}

function renderGrid(categoryId) {
    const categoryContent = categories[categoryId];
    DOM.gridContainer.innerHTML = '';

    categoryContent.items.forEach(item => {
        const card = document.createElement('button');
        card.className = `card ${item.type}`;
        card.setAttribute('aria-label', `Decir: ${item.message}`);

        card.innerHTML = `
            <span class="card-icon" aria-hidden="true">${item.icon}</span>
            <span class="card-text">${item.text}</span>
        `;

        card.addEventListener('click', () => {
            triggerVibration(CONFIG.vibLow);
            // Usamos item.text para construir la frase correctamente sin duplicar verbos
            addToSentence(item.text, item.icon);
            speak(item.text);
        });

        DOM.gridContainer.appendChild(card);
    });
}

/**
 * Sentence Builder Functions
 */
function addToSentence(text, icon) {
    state.sentence.push({ text, icon });
    renderSentenceStrip();
    // Scroll to end of strip
    DOM.sentenceStrip.scrollLeft = DOM.sentenceStrip.scrollWidth;
}

function removeLastWord() {
    if (state.sentence.length > 0) {
        triggerVibration(CONFIG.vibLow);
        state.sentence.pop();
        renderSentenceStrip();
    }
}

function clearSentence() {
    if (state.sentence.length > 0) {
        triggerVibration(CONFIG.vibLow);
        state.sentence = [];
        renderSentenceStrip();
    }
}

function renderSentenceStrip() {
    DOM.sentenceStrip.innerHTML = '';

    if (state.sentence.length === 0) {
        DOM.sentenceStrip.innerHTML = '<span style="color: #999; font-style: italic; font-size: 1.2rem; padding-left: 10px;">Toca las tarjetas para crear una frase...</span>';
        return;
    }

    state.sentence.forEach(word => {
        const el = document.createElement('div');
        el.className = 'sentence-word';
        el.innerHTML = `
            <span class="word-icon" aria-hidden="true">${word.icon}</span>
            <span class="word-text">${word.text}</span>
        `;
        DOM.sentenceStrip.appendChild(el);
    });
}

function speakSentence() {
    if (state.sentence.length === 0) return;

    // Combine text
    const fullMessage = state.sentence.map(w => w.text).join(' ');
    const icons = state.sentence.map(w => w.icon).join(' ');

    speakAndZoom(fullMessage, icons || '🗣️');
}

/**
 * Action Functions
 */
function speakAndZoom(message, icon) {
    triggerVibration(CONFIG.vibLow);

    // Visual feedback
    DOM.zoomIcon.innerText = icon;
    DOM.zoomText.innerText = message;
    DOM.zoomModal.classList.remove('hidden');

    // Auditory feedback
    speak(message);

    // Toast backup
    showToast(`${icon} ${message}`);
}

function speak(text) {
    if (!synth) return;

    synth.cancel(); // Stop talking current phrase

    const utterance = new SpeechSynthesisUtterance(text);
    if (voiceEs) {
        utterance.voice = voiceEs;
    } else {
        utterance.lang = 'es-ES';
    }

    // Setting up a clear, calm voice profile
    utterance.rate = 0.85; // Slightly slower for clarity
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    synth.speak(utterance);
}

function closeZoom() {
    DOM.zoomModal.classList.add('hidden');
    // Optionally stop speaking if they close it, but it might be better to let it finish.
    // synth.cancel(); 
}

/**
 * Emergency Routine
 */
function handleEmergencyTap() {
    const now = Date.now();

    // Reset if it's been too long since last tap
    if (state.emergencyTimer && (now - state.lastEmergencyTap > CONFIG.emergencyWindow)) {
        state.emergencyTaps = 0;
    }

    state.emergencyTaps++;
    state.lastEmergencyTap = now;

    // Short increasing vibration per tap
    triggerVibration(state.emergencyTaps * 40);

    clearTimeout(state.emergencyTimer);
    state.emergencyTimer = setTimeout(() => {
        state.emergencyTaps = 0;
    }, CONFIG.emergencyWindow);

    // Threshold reached
    if (state.emergencyTaps >= 3) {
        state.emergencyTaps = 0;
        triggerEmergency();
    }
}

function triggerEmergency() {
    triggerVibration(CONFIG.vibHigh);

    // Emit tone if supported (try-catch because browsers block audio context without interaction)
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const freq = [440, 523, 659, 880];
        let t = ctx.currentTime;
        freq.forEach(f => {
            const o = ctx.createOscillator(), g = ctx.createGain();
            o.type = 'triangle'; // Calmer than sine/square for autistics, yet alarming enough
            o.frequency.setValueAtTime(f, t);

            g.gain.setValueAtTime(0.0, t);
            g.gain.linearRampToValueAtTime(0.3, t + 0.1);
            g.gain.exponentialRampToValueAtTime(0.01, t + 0.5);

            o.connect(g);
            g.connect(ctx.destination);

            o.start(t);
            o.stop(t + 0.5);
            t += 0.5;
        });
    } catch (e) {
        console.warn('Audio Context not allowed without interaction');
    }

    speakAndZoom('MAMÁ VIENE EN CAMINO', '🚨');
}

/**
 * Utilities
 */
function triggerVibration(pattern) {
    if (navigator.vibrate) {
        try {
            navigator.vibrate(pattern);
        } catch (e) { }
    }
}

let toastTimeout;
function showToast(msg) {
    DOM.toast.innerText = msg;
    DOM.toast.classList.add('visible');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        DOM.toast.classList.remove('visible');
    }, 3000);
}
