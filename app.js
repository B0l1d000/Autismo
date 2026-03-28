/**
 * Application Data
 */
const categories = {
    nucleo: {
        id: 'nucleo', name: 'Núcleo', icon: '⭐', class: 'cat-nucleo',
        items: [
            { icon: '🧍', text: 'YO', message: 'YO' },
            { icon: '👈', text: 'TÚ', message: 'TÚ' },
            { icon: '👍', text: 'QUIERO', message: 'QUIERO' },
            { icon: '👎', text: 'NO QUIERO', message: 'NO QUIERO' },
            { icon: '➕', text: 'MÁS', message: 'MÁS' },
            { icon: '🛑', text: 'FIN', message: 'FIN' },
            { icon: '✅', text: 'SÍ', message: 'SÍ' },
            { icon: '❌', text: 'NO', message: 'NO' },
            { icon: '🤝', text: 'AYUDA', message: 'AYUDA' },
            { icon: '❓', text: 'QUÉ', message: 'QUÉ' },
            { icon: '📍', text: 'DÓNDE', message: 'DÓNDE' },
            { icon: '👤', text: 'QUIÉN', message: 'QUIÉN' },
            { icon: '🏃', text: 'VAMOS', message: 'VAMOS' },
            { icon: '😋', text: 'GUSTA', message: 'GUSTA' },
            { icon: '🤢', text: 'NO GUSTA', message: 'NO GUSTA' }
        ]
    },
    basicos: {
        id: 'basicos', name: 'Básicos', icon: '💧', class: 'cat-basicos',
        items: [
            { icon: '💧', text: 'AGUA', message: 'AGUA' },
            { icon: '🍽️', text: 'COMER', message: 'COMER' },
            { icon: '🚽', text: 'BAÑO', message: 'BAÑO' },
            { icon: '🚿', text: 'DUCHA', message: 'DUCHA' },
            { icon: '😴', text: 'DORMIR', message: 'DORMIR' },
            { icon: '👕', text: 'VESTIR', message: 'VESTIR' },
            { icon: '🚶', text: 'PASEO', message: 'PASEO' },
            { icon: '🚗', text: 'COCHE', message: 'COCHE' },
            { icon: '🏫', text: 'COLEGIO', message: 'COLEGIO' },
            { icon: '🧩', text: 'TERAPIA', message: 'TERAPIA' },
            { icon: '⏳', text: 'ESPERAR', message: 'ESPERAR' },
            { icon: '🧼', text: 'LAVAR MANOS', message: 'LAVAR MANOS' }
        ]
    },
    emociones: {
        id: 'emociones', name: 'Emociones', icon: '😊', class: 'cat-emociones',
        items: [
            { icon: '😊', text: 'FELIZ', message: 'FELIZ' },
            { icon: '😢', text: 'TRISTE', message: 'TRISTE' },
            { icon: '😠', text: 'ENFADO', message: 'ENFADO' },
            { icon: '😰', text: 'CANSADO', message: 'CANSADO' },
            { icon: '😨', text: 'MIEDO', message: 'MIEDO' },
            { icon: '🥰', text: 'AMOR', message: 'AMOR' },
            { icon: '😌', text: 'TRANQUILO', message: 'TRANQUILO' },
            { icon: '😬', text: 'NERVIOSO', message: 'NERVIOSO' },
            { icon: '😤', text: 'FRUSTRADO', message: 'FRUSTRADO' },
            { icon: '🥱', text: 'ABURRIDO', message: 'ABURRIDO' },
            { icon: '😲', text: 'SORPRENDIDO', message: 'SORPRENDIDO' },
            { icon: '😳', text: 'VERGÜENZA', message: 'VERGÜENZA' }
        ]
    },
    actividades: {
        id: 'actividades', name: 'Actividades', icon: '🎮', class: 'cat-actividades',
        items: [
            { icon: '🎮', text: 'JUGAR', message: 'JUGAR' },
            { icon: '📺', text: 'TELE', message: 'TELE' },
            { icon: '📚', text: 'LIBRO', message: 'LIBRO' },
            { icon: '⚽', text: 'PELOTA', message: 'PELOTA' },
            { icon: '🎨', text: 'PINTAR', message: 'PINTAR' },
            { icon: '🎵', text: 'MÚSICA', message: 'MÚSICA' },
            { icon: '📱', text: 'TABLET', message: 'TABLET' },
            { icon: '🧩', text: 'PUZLE', message: 'PUZLE' },
            { icon: '🏞️', text: 'PARQUE', message: 'PARQUE' },
            { icon: '🏃', text: 'CORRER', message: 'CORRER' },
            { icon: '🏗️', text: 'BLOQUES', message: 'BLOQUES' }
        ]
    },
    confort: {
        id: 'confort', name: 'Confort', icon: '🧸', class: 'cat-confort',
        items: [
            { icon: '🤗', text: 'ABRAZO', message: 'ABRAZO' },
            { icon: '🛏️', text: 'MANTA', message: 'MANTA' },
            { icon: '🧸', text: 'PELUCHE', message: 'PELUCHE' },
            { icon: '🍼', text: 'CHUPETE', message: 'CHUPETE' },
            { icon: '👪', text: 'FAMILIA', message: 'FAMILIA' },
            { icon: '🏠', text: 'CASA', message: 'CASA' },
            { icon: '🛋️', text: 'SOFÁ', message: 'SOFÁ' },
            { icon: '🎧', text: 'CASCOS', message: 'CASCOS' },
            { icon: '🦷', text: 'MORDEDOR', message: 'MORDEDOR' },
            { icon: '🧘', text: 'TRANQUILIDAD', message: 'TRANQUILIDAD' },
            { icon: '🫧', text: 'BURBUJAS', message: 'BURBUJAS' },
            { icon: '🪀', text: 'BALANCEO', message: 'BALANCEO' }
        ]
    },
    dolor: {
        id: 'dolor', name: 'Dolor', icon: '🏥', class: 'cat-dolor',
        items: [
            { icon: '🤕', text: 'CABEZA', message: 'CABEZA' },
            { icon: '🤢', text: 'BARRIGA', message: 'BARRIGA' },
            { icon: '🦵', text: 'PIERNA', message: 'PIERNA' },
            { icon: '💪', text: 'BRAZO', message: 'BRAZO' },
            { icon: '👂', text: 'OÍDO', message: 'OÍDO' },
            { icon: '⚠️', text: 'MAL', message: 'MAL' },
            { icon: '🦷', text: 'DIENTE', message: 'DIENTE' },
            { icon: '🧣', text: 'GARGANTA', message: 'GARGANTA' },
            { icon: '🩹', text: 'HERIDA', message: 'HERIDA' },
            { icon: '🐜', text: 'PICOR', message: 'PICOR' },
            { icon: '💥', text: 'GOLPE', message: 'GOLPE' }
        ]
    },
    comida: {
        id: 'comida', name: 'Comida', icon: '🍎', class: 'cat-comida',
        items: [
            { icon: '🍎', text: 'FRUTA', message: 'FRUTA' },
            { icon: '🍪', text: 'GALLETA', message: 'GALLETA' },
            { icon: '🧃', text: 'ZUMO', message: 'ZUMO' },
            { icon: '🥛', text: 'LECHE', message: 'LECHE' },
            { icon: '🍞', text: 'PAN', message: 'PAN' },
            { icon: '🍲', text: 'CALIENTE', message: 'CALIENTE' },
            { icon: '🍝', text: 'PASTA', message: 'PASTA' },
            { icon: '🍗', text: 'CARNE', message: 'CARNE' },
            { icon: '🍟', text: 'PATATAS', message: 'PATATAS' },
            { icon: '🥣', text: 'YOGUR', message: 'YOGUR' },
            { icon: '🍫', text: 'CHOCOLATE', message: 'CHOCOLATE' }
        ]
    },
    sensaciones: {
        id: 'sensaciones', name: 'Sensaciones', icon: '❄️', class: 'cat-sensaciones',
        items: [
            { icon: '🥶', text: 'FRÍO', message: 'FRÍO' },
            { icon: '🥵', text: 'CALOR', message: 'CALOR' },
            { icon: '💦', text: 'SUDOR', message: 'SUDOR' },
            { icon: '🤧', text: 'MOCO', message: 'MOCO' },
            { icon: '😵', text: 'MAREO', message: 'MAREO' },
            { icon: '🤒', text: 'FIEBRE', message: 'FIEBRE' },
            { icon: '🔊', text: 'RUIDO', message: 'RUIDO' },
            { icon: '💡', text: 'LUZ FUERTE', message: 'LUZ FUERTE' },
            { icon: '👕', text: 'APRIETA', message: 'APRIETA' },
            { icon: '💩', text: 'SUCIO', message: 'SUCIO' },
            { icon: '💧', text: 'MOJADO', message: 'MOJADO' }
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
        card.className = `card ${categoryContent.class}`;
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
        } catch(e) {}
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
