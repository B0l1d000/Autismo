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
            { icon: '🛑', text: 'FIN', message: 'YA ESTÁ' },
            { icon: '✅', text: 'SÍ', message: 'SÍ' },
            { icon: '❌', text: 'NO', message: 'NO' },
            { icon: '🤝', text: 'AYUDA', message: 'AYUDA' },
            { icon: '❓', text: 'QUÉ', message: 'QUÉ' }
        ]
    },
    basicos: {
        id: 'basicos', name: 'Básicos', icon: '💧', class: 'cat-basicos',
        items: [
            { icon: '💧', text: 'AGUA', message: 'QUIERO AGUA' },
            { icon: '🍽️', text: 'COMER', message: 'TENGO HAMBRE' },
            { icon: '🚽', text: 'BAÑO', message: 'QUIERO IR AL BAÑO' },
            { icon: '🚿', text: 'DUCHA', message: 'QUIERO DUCHARME' },
            { icon: '😴', text: 'DORMIR', message: 'QUIERO DORMIR' },
            { icon: '👕', text: 'VESTIR', message: 'QUIERO VESTIRME' }
        ]
    },
    emociones: {
        id: 'emociones', name: 'Emociones', icon: '😊', class: 'cat-emociones',
        items: [
            { icon: '😊', text: 'FELIZ', message: 'ESTOY FELIZ' },
            { icon: '😢', text: 'TRISTE', message: 'ESTOY TRISTE' },
            { icon: '😠', text: 'ENFADO', message: 'ESTOY ENFADADO' },
            { icon: '😰', text: 'CANSADO', message: 'ESTOY CANSADO' },
            { icon: '😨', text: 'MIEDO', message: 'TENGO MIEDO' },
            { icon: '🥰', text: 'AMOR', message: 'TE QUIERO' }
        ]
    },
    actividades: {
        id: 'actividades', name: 'Actividades', icon: '🎮', class: 'cat-actividades',
        items: [
            { icon: '🎮', text: 'JUGAR', message: 'QUIERO JUGAR' },
            { icon: '📺', text: 'TELE', message: 'QUIERO VER LA TELE' },
            { icon: '📚', text: 'LIBRO', message: 'QUIERO LEER UN LIBRO' },
            { icon: '⚽', text: 'PELOTA', message: 'QUIERO LA PELOTA' },
            { icon: '🎨', text: 'PINTAR', message: 'QUIERO PINTAR' },
            { icon: '🎵', text: 'MÚSICA', message: 'QUIERO ESCUCHAR MÚSICA' }
        ]
    },
    confort: {
        id: 'confort', name: 'Confort', icon: '🧸', class: 'cat-confort',
        items: [
            { icon: '🤗', text: 'ABRAZO', message: 'QUIERO UN ABRAZO' },
            { icon: '🛏️', text: 'MANTA', message: 'QUIERO LA MANTA' },
            { icon: '🧸', text: 'OSITO', message: 'QUIERO MI PELUCHE' },
            { icon: '🍼', text: 'CHUPETE', message: 'QUIERO EL CHUPETE' },
            { icon: '👪', text: 'FAMILIA', message: 'QUIERO A MI FAMILIA' },
            { icon: '🏠', text: 'CASA', message: 'QUIERO IR A CASA' }
        ]
    },
    dolor: {
        id: 'dolor', name: 'Dolor', icon: '🏥', class: 'cat-dolor',
        items: [
            { icon: '🤕', text: 'CABEZA', message: 'ME DUELE LA CABEZA' },
            { icon: '🤢', text: 'BARRIGA', message: 'ME DUELE LA BARRIGA' },
            { icon: '🦵', text: 'PIERNA', message: 'ME DUELE LA PIERNA' },
            { icon: '💪', text: 'BRAZO', message: 'ME DUELE EL BRAZO' },
            { icon: '👂', text: 'OÍDO', message: 'ME DUELE EL OÍDO' },
            { icon: '⚠️', text: 'MAL', message: 'ME ENCUENTRO MAL' }
        ]
    },
    comida: {
        id: 'comida', name: 'Comida', icon: '🍎', class: 'cat-comida',
        items: [
            { icon: '🍎', text: 'FRUTA', message: 'QUIERO FRUTA' },
            { icon: '🍪', text: 'GALLETA', message: 'QUIERO GALLETAS' },
            { icon: '🧃', text: 'ZUMO', message: 'QUIERO ZUMO' },
            { icon: '🥛', text: 'LECHE', message: 'QUIERO LECHE' },
            { icon: '🍞', text: 'PAN', message: 'QUIERO PAN' },
            { icon: '🍲', text: 'COMIDA', message: 'QUIERO COMIDA CALIENTE' }
        ]
    },
    sensaciones: {
        id: 'sensaciones', name: 'Sensaciones', icon: '❄️', class: 'cat-sensaciones',
        items: [
            { icon: '🥶', text: 'FRÍO', message: 'TENGO MUCHO FRÍO' },
            { icon: '🥵', text: 'CALOR', message: 'TENGO MUCHO CALOR' },
            { icon: '💦', text: 'SUDOR', message: 'ESTOY SUDANDO' },
            { icon: '🤧', text: 'MOCO', message: 'NECESITO SONARME' },
            { icon: '😵', text: 'MAREO', message: 'ESTOY MAREADO' },
            { icon: '🤒', text: 'FIEBRE', message: 'TENGO FIEBRE' }
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
            addToSentence(item.message, item.icon);
            // Optionally, we could speak individual words as they are tapped to help with word finding
            speak(item.message); 
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
