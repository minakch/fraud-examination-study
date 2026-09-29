/**
 * Fraud Examination Study Platform — Core Application Logic
 * Interactive Forensic Intelligence Lab & CFE Study Suite
 * Fully hardened, scalable typography, tactile interactions, and offline audio briefing
 */

class FraudApp {
  constructor() {
    this.currentView = 'schemes';
    this.activeSchemeId = 1;         // number (1..27)
    this.schemeFilter = 'ALL';       // 'ALL' | 'case' | 'tutorial'
    this.schemeGroupFilter = 'ALL';  // 'ALL' | 'AM' | 'FR' | 'IAC' | 'NF'
    this.schemeSearch = '';

    this.activeCaseId = 'cs1';       // string ('cs1'..'cs6')
    this.caseSearch = '';
    this.caseCategory = 'ALL';

    this.activeLawId = 'law1';       // string ('law1'..'law12')
    this.lawSearch = '';
    this.lawCategory = 'ALL';

    this.activeInvId = 'inv1';       // string ('inv1'..'inv30')
    this.invCategory = 'ALL';

    this.activePrevId = 'prev1';     // string ('prev1'..'prev10')

    // Flashcards state
    this.flashcards = [];
    this.flashcardIndex = 0;
    this.flashcardFlipped = false;

    // Quiz state
    this.quizSection = null;
    this.quizQuestions = [];
    this.quizIndex = 0;
    this.quizScore = 0;
    this.quizSelected = null;
    this.quizAnswered = false;
    this.quizMissed = [];

    // Bookmarks, studied sets, and checklist (localStorage)
    this.bookmarks = new Set(JSON.parse(localStorage.getItem('cfe_bookmarks') || '[]'));
    this.studiedSchemes = new Set(JSON.parse(localStorage.getItem('cfe_studied') || '[]'));
    this.masteredCards = new Set(JSON.parse(localStorage.getItem('cfe_mastered_cards') || '[]'));

    // Audio SFX state (Offline Web Audio API)
    this.sfxEnabled = localStorage.getItem('cfe_sfx') !== 'false';
    this.audioCtx = null;

    // Interactive Case Investigation Simulator ("The Ghost Vendor Incident")
    this.caseSim = {
      stage: 1,
      score: 100,
      examinedEvidence: new Set(),
      choices: {},
      completed: false
    };

    // High-Yield Cheatsheet Active Tab
    this.activeCheatsheetTab = 'schemes';

    // Font scaling (Default comfortable 105%)
    this.fontScale = parseFloat(localStorage.getItem('cfe_font_scale') || '1.05');

    // Ambient floating constellation engine
    this.motionEnabled = localStorage.getItem('cfe_motion') !== 'false';
    this.ambientAnimId = null;
    this.particles = [];

    // Speech state (Audio reader)
    this.isSpeaking = false;

    // Benford diagnostic state
    this.benfordActual = [31.2, 16.8, 12.1, 10.4, 7.5, 6.9, 5.5, 5.0, 4.6];
    this.benfordExpected = [30.1, 17.6, 12.5, 9.7, 7.9, 6.7, 5.8, 5.1, 4.6];
    this.benfordVerdict = { status: 'NORMAL DISTRIBUTION', msg: 'Matches natural logarithmic distribution (Standard AP journal transactions)' };
  }

  init() {
    this.initTheme();
    this.initFontScale();
    this.initAudioState();
    this.initAmbientMotion();
    this.initGlobalEvents();
    this.initFlashcards();
    this.renderHeaderStats();
    this.switchView('schemes');
    this.setupBenford('natural');
  }

  // -------------------------------------------------------------
  // Dynamic Font Scale Management
  // -------------------------------------------------------------
  initFontScale() {
    this.applyFontScale(this.fontScale);
  }

  adjustFontScale(delta) {
    let newScale = Math.round((this.fontScale + delta) * 100) / 100;
    if (newScale < 0.85) newScale = 0.85;
    if (newScale > 1.45) newScale = 1.45;
    this.fontScale = newScale;
    localStorage.setItem('cfe_font_scale', newScale.toString());
    this.applyFontScale(newScale);
  }

  applyFontScale(scale) {
    document.documentElement.style.setProperty('--font-scale', scale);
    const ind = document.getElementById('font-scale-indicator');
    if (ind) {
      ind.textContent = `${Math.round(scale * 100)}%`;
    }
  }

  // -------------------------------------------------------------
  // Offline Web Audio API Synthesizer (Zero Latency, Pure JS Oscillators)
  // -------------------------------------------------------------
  initAudioState() {
    this.updateSfxButtonUI();
  }

  getAudioContext() {
    if (!this.audioCtx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.audioCtx = new AudioCtx();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  }

  toggleSfx() {
    this.sfxEnabled = !this.sfxEnabled;
    localStorage.setItem('cfe_sfx', this.sfxEnabled.toString());
    this.updateSfxButtonUI();
    if (this.sfxEnabled) {
      this.playSfx('success');
    }
  }

  updateSfxButtonUI() {
    const icon = document.getElementById('sfx-icon');
    const text = document.getElementById('sfx-text');
    const btn = document.getElementById('sfx-toggle-btn');
    if (icon) icon.textContent = this.sfxEnabled ? '🔊' : '🔇';
    if (text) text.textContent = this.sfxEnabled ? 'SFX: ON' : 'SFX: OFF';
    if (btn) {
      btn.classList.toggle('text-text-muted', !this.sfxEnabled);
      btn.classList.toggle('text-emerald-400', this.sfxEnabled);
    }
  }

  playSfx(type = 'click') {
    if (!this.sfxEnabled) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      if (type === 'click') {
        // High-tech snappy mechanical tick
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(900, now);
        osc.frequency.exponentialRampToValueAtTime(320, now + 0.035);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.035);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.04);
      } else if (type === 'flip') {
        // 3D card flip swoosh
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(260, now);
        osc.frequency.exponentialRampToValueAtTime(540, now + 0.08);
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.09);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.1);
      } else if (type === 'success') {
        // Major chord arpeggio (C5 -> E5 -> G5)
        const notes = [523.25, 659.25, 783.99];
        notes.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          const startTime = now + (idx * 0.055);
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, startTime);
          gain.gain.setValueAtTime(0.07, startTime);
          gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.28);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(startTime);
          osc.stop(startTime + 0.3);
        });
      } else if (type === 'error') {
        // Gentle double low thump
        [0, 0.09].forEach(delay => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          const startTime = now + delay;
          osc.type = 'sine';
          osc.frequency.setValueAtTime(140, startTime);
          osc.frequency.exponentialRampToValueAtTime(75, startTime + 0.07);
          gain.gain.setValueAtTime(0.12, startTime);
          gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.07);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(startTime);
          osc.stop(startTime + 0.08);
        });
      } else if (type === 'clue') {
        // High-tech discovery chime
        [880, 1174.66, 1760].forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          const startTime = now + (idx * 0.05);
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, startTime);
          gain.gain.setValueAtTime(0.06, startTime);
          gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.22);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(startTime);
          osc.stop(startTime + 0.25);
        });
      } else if (type === 'briefing') {
        // Radar ping sound
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, now);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.15);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.16);
      }
    } catch (e) {
      // AudioContext policy or unsupported
    }
  }

  // -------------------------------------------------------------
  // Ambient Floating Constellation Engine (Featherlight < 1KB, GPU 60fps)
  // -------------------------------------------------------------
  initAmbientMotion() {
    if (typeof window === 'undefined') return;
    const canvas = document.getElementById('ambient-canvas');
    if (!canvas || !canvas.getContext) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    // Mouse coordinates for interactive reaction
    const mouse = { x: -1000, y: -1000 };
    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });
    window.addEventListener('mouseleave', () => {
      mouse.x = -1000;
      mouse.y = -1000;
    });

    // Color palette matching forensic ACFE themes (cyan, emerald, blue, purple)
    const colors = [
      'rgba(59, 130, 246, ',   // blue
      'rgba(16, 185, 129, ',   // emerald
      'rgba(168, 85, 247, ',   // purple
      'rgba(56, 189, 248, '    // cyan
    ];

    // Create 42 featherweight particles
    const count = Math.min(45, Math.floor((width * height) / 26000));
    this.particles = [];
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 1.2,
        colorBase: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.45 + 0.25,
        phase: Math.random() * Math.PI * 2
      });
    }

    const render = () => {
      if (!this.motionEnabled || document.hidden) {
        this.ambientAnimId = window.requestAnimationFrame ? window.requestAnimationFrame(render) : null;
        return;
      }

      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
      const maxDistance = 125;
      const mouseDistance = 145;

      for (let i = 0; i < this.particles.length; i++) {
        const p = this.particles[i];

        p.x += p.vx;
        p.y += p.vy;
        p.phase += 0.02;

        if (p.x < 0) { p.x = 0; p.vx *= -1; }
        else if (p.x > width) { p.x = width; p.vx *= -1; }
        if (p.y < 0) { p.y = 0; p.vy *= -1; }
        else if (p.y > height) { p.y = height; p.vy *= -1; }

        // Subtle interactive mouse reaction
        const dxM = p.x - mouse.x;
        const dyM = p.y - mouse.y;
        const distM = Math.sqrt(dxM * dxM + dyM * dyM);
        if (distM < mouseDistance && distM > 0) {
          const force = (mouseDistance - distM) / mouseDistance;
          p.x += (dxM / distM) * force * 1.4;
          p.y += (dyM / distM) * force * 1.4;
        }

        // Draw particle node
        const dynamicAlpha = p.alpha + Math.sin(p.phase) * 0.15;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.colorBase + Math.max(0.05, Math.min(0.85, dynamicAlpha)) + ')';
        ctx.fill();

        // Connect close particles with faint glowing lines
        for (let j = i + 1; j < this.particles.length; j++) {
          const p2 = this.particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * (isDark ? 0.2 : 0.12);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Connect to mouse with gentle tracer beam
        if (distM < mouseDistance) {
          const lineAlpha = (1 - distM / mouseDistance) * 0.28;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(16, 185, 129, ${lineAlpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      this.ambientAnimId = window.requestAnimationFrame ? window.requestAnimationFrame(render) : null;
    };

    render();
    this.updateMotionButtonUI();
  }

  toggleMotion() {
    this.motionEnabled = !this.motionEnabled;
    localStorage.setItem('cfe_motion', this.motionEnabled.toString());
    const canvas = document.getElementById('ambient-canvas');
    if (canvas) {
      canvas.classList.toggle('motion-disabled', !this.motionEnabled);
    }
    this.updateMotionButtonUI();
  }

  updateMotionButtonUI() {
    const btn = document.getElementById('motion-toggle-btn');
    if (btn) {
      btn.innerHTML = this.motionEnabled 
        ? `<span>✨ Orbit FX</span>` 
        : `<span class="text-text-subtle">✨ FX Off</span>`;
      btn.classList.toggle('border-primary/50', this.motionEnabled);
      btn.classList.toggle('text-primary', this.motionEnabled);
    }
  }

  // -------------------------------------------------------------
  // Theme Management
  // -------------------------------------------------------------
  initTheme() {
    const saved = localStorage.getItem('cfe-theme') || 'dark';
    this.setTheme(saved);
  }

  setTheme(mode) {
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem('cfe-theme', mode);
    const btn = document.getElementById('theme-toggle-btn');
    if (btn) {
      btn.innerHTML = mode === 'light' 
        ? `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg> <span>Night</span>`
        : `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg> <span>Day</span>`;
    }
  }

  toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    this.setTheme(current === 'light' ? 'dark' : 'light');
  }

  // -------------------------------------------------------------
  // Audio Speech Synthesis (Offline Briefing)
  // -------------------------------------------------------------
  toggleSpeech(text, btnId) {
    if (!window.speechSynthesis) {
      alert('Speech synthesis is not supported in this browser.');
      return;
    }

    if (this.isSpeaking) {
      window.speechSynthesis.cancel();
      this.isSpeaking = false;
      const btn = document.getElementById(btnId);
      if (btn) btn.innerHTML = `<span>🔊 Listen Briefing</span>`;
      return;
    }

    window.speechSynthesis.cancel();
    const cleanText = text.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;

    utterance.onend = () => {
      this.isSpeaking = false;
      const btn = document.getElementById(btnId);
      if (btn) btn.innerHTML = `<span>🔊 Listen Briefing</span>`;
    };

    utterance.onerror = () => {
      this.isSpeaking = false;
      const btn = document.getElementById(btnId);
      if (btn) btn.innerHTML = `<span>🔊 Listen Briefing</span>`;
    };

    this.isSpeaking = true;
    window.speechSynthesis.speak(utterance);
    const btn = document.getElementById(btnId);
    if (btn) btn.innerHTML = `<span>⏹ Stop Audio</span>`;
  }

  // -------------------------------------------------------------
  // Global Event Listeners & Keyboard Shortcuts
  // -------------------------------------------------------------
  initGlobalEvents() {
    window.addEventListener('keydown', (e) => {
      // Command palette trigger
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        this.toggleCommandPalette();
      } else if (e.key === 'Escape') {
        if (this.commandPaletteOpen) this.toggleCommandPalette(false);
        this.closeEvidenceModal();
        this.closeCheatsheet();
        this.closeModal();
      } else if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        if (e.key === 't' || e.key === 'T') {
          this.toggleTheme();
        } else if (e.key === 'c' || e.key === 'C') {
          this.openCheatsheet();
        } else if (e.key === '1') this.switchView('schemes');
        else if (e.key === '2') this.switchView('fraudtree');
        else if (e.key === '3') this.switchView('cases');
        else if (e.key === '4') this.switchView('law');
        else if (e.key === '5') this.switchView('investigation');
        else if (e.key === '6') this.switchView('prevention');
        else if (e.key === '7') this.switchView('tools');
        else if (e.key === '8') this.switchView('quiz');
        else if (e.key === '9') this.switchView('glossary');
        else if (e.key === '+' || e.key === '=') this.adjustFontScale(0.1);
        else if (e.key === '-' || e.key === '_') this.adjustFontScale(-0.1);
        // Flashcard flip on space
        else if (e.code === 'Space' && this.currentView === 'quiz' && document.getElementById('quiz-tab-flashcards')?.classList.contains('active')) {
          e.preventDefault();
          this.flipFlashcard();
        }
      }
    });

    // Delegated click sounds for all buttons & interactive tabs
    document.addEventListener('click', (e) => {
      const target = e.target.closest('button, .btn-tactile, .nav-tab, [data-sfx]');
      if (target && this.sfxEnabled) {
        if (!target.dataset.noSfx) {
          this.playSfx(target.dataset.sfx || 'click');
        }
      }
    });
  }

  // -------------------------------------------------------------
  // View Switcher
  // -------------------------------------------------------------
  switchView(viewName) {
    if (this.isSpeaking && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      this.isSpeaking = false;
    }

    if (viewName === 'fraudtree') {
      this.switchView('schemes');
      this.setSchemesMode('tree');
      return;
    }

    this.currentView = viewName;
    document.querySelectorAll('[data-view-btn]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.viewBtn === viewName);
    });

    const sections = ['schemes', 'cases', 'law', 'investigation', 'prevention', 'tools', 'quiz', 'glossary', 'bookmarks'];
    sections.forEach(s => {
      const el = document.getElementById(`view-${s}`);
      if (el) el.classList.toggle('hidden', s !== viewName);
    });

    // Render corresponding view
    switch (viewName) {
      case 'schemes': 
        if (this.schemesMode === 'tree') {
          this.setSchemesMode('tree');
        } else {
          this.setSchemesMode('grid');
        }
        break;
      case 'cases': this.renderCases(); break;
      case 'law': this.renderLaw(); break;
      case 'investigation': this.renderInvestigation(); break;
      case 'prevention': this.renderPrevention(); break;
      case 'tools': this.renderTools(); break;
      case 'quiz': this.renderQuiz(); break;
      case 'glossary': this.renderGlossary(); break;
      case 'bookmarks': this.renderBookmarks(); break;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  setSchemesMode(mode) {
    this.schemesMode = mode;
    this.playSfx('click');
    const isGrid = mode === 'grid';
    const gridEl = document.getElementById('schemes-grid-view');
    const treeEl = document.getElementById('schemes-tree-view');
    const btnGrid = document.getElementById('schemes-mode-grid-btn');
    const btnTree = document.getElementById('schemes-mode-tree-btn');

    if (gridEl) gridEl.classList.toggle('hidden', !isGrid);
    if (treeEl) treeEl.classList.toggle('hidden', isGrid);
    if (btnGrid) btnGrid.classList.toggle('active', isGrid);
    if (btnTree) btnTree.classList.toggle('active', !isGrid);

    if (isGrid) {
      this.renderSchemes();
    } else {
      this.renderFraudTree();
    }
  }

  // -------------------------------------------------------------
  // Header Stats
  // -------------------------------------------------------------
  renderHeaderStats() {
    const studiedCount = this.studiedSchemes.size;
    const totalSchemes = typeof portfolioData !== 'undefined' ? portfolioData.length : 27;
    const pct = Math.round((studiedCount / totalSchemes) * 100);

    const el = document.getElementById('header-progress-pill');
    if (el) {
      el.innerHTML = `
        <div class="w-2.5 h-2.5 rounded-full ${pct > 70 ? 'bg-emerald-500 animate-pulse' : 'bg-primary'}"></div>
        <span class="font-mono text-xs font-semibold">${studiedCount}/${totalSchemes} Schemes</span>
        <span class="text-xs text-text-muted">(${pct}%)</span>
      `;
    }

    const bmBadge = document.getElementById('bookmarks-count-badge');
    if (bmBadge) {
      bmBadge.textContent = this.bookmarks.size;
      bmBadge.classList.toggle('hidden', this.bookmarks.size === 0);
    }
  }

  toggleStudied(schemeId) {
    if (this.studiedSchemes.has(schemeId)) {
      this.studiedSchemes.delete(schemeId);
    } else {
      this.studiedSchemes.add(schemeId);
    }
    localStorage.setItem('cfe_studied', JSON.stringify([...this.studiedSchemes]));
    this.renderHeaderStats();
    this.renderSchemesSidebar();
    this.renderSchemeDetail();
  }

  toggleBookmark(itemType, itemId) {
    const key = `${itemType}:${itemId}`;
    if (this.bookmarks.has(key)) {
      this.bookmarks.delete(key);
    } else {
      this.bookmarks.add(key);
    }
    localStorage.setItem('cfe_bookmarks', JSON.stringify([...this.bookmarks]));
    this.renderHeaderStats();
    if (this.currentView === 'schemes') this.renderSchemeDetail();
    if (this.currentView === 'cases') this.renderCaseDetail();
    if (this.currentView === 'bookmarks') this.renderBookmarks();
  }

  isBookmarked(itemType, itemId) {
    return this.bookmarks.has(`${itemType}:${itemId}`);
  }

  // -------------------------------------------------------------
  // 1. Schemes View (Master-Detail 27 ACFE Schemes)
  // -------------------------------------------------------------
  renderSchemes() {
    this.renderSchemesSidebar();
    this.renderSchemeDetail();
  }

  filterSchemes() {
    if (typeof portfolioData === 'undefined') return [];
    return portfolioData.filter(s => {
      const matchType = this.schemeFilter === 'ALL' || s.type === this.schemeFilter;
      const matchGroup = this.schemeGroupFilter === 'ALL' || s.schemeGroup === this.schemeGroupFilter;
      const matchSearch = !this.schemeSearch || 
        s.title.toLowerCase().includes(this.schemeSearch.toLowerCase()) ||
        s.code.toLowerCase().includes(this.schemeSearch.toLowerCase()) ||
        s.description.toLowerCase().includes(this.schemeSearch.toLowerCase());
      return matchType && matchGroup && matchSearch;
    });
  }

  renderSchemesSidebar() {
    const sidebar = document.getElementById('schemes-sidebar-list');
    if (!sidebar) return;

    const schemes = this.filterSchemes();
    if (schemes.length === 0) {
      sidebar.innerHTML = `
        <div class="p-6 text-center text-text-muted text-sm font-mono">
          No schemes match your filter criteria.
        </div>
      `;
      return;
    }

    // Group schemes by category
    const groups = {};
    schemes.forEach(s => {
      const g = s.category || s.schemeGroup;
      if (!groups[g]) groups[g] = [];
      groups[g].push(s);
    });

    let html = '';
    for (const [groupName, items] of Object.entries(groups)) {
      const sample = items[0];
      const badgeCls = `badge-${sample.schemeGroup.toLowerCase()}`;

      html += `
        <div class="mb-5">
          <div class="text-xs font-mono uppercase tracking-wider font-bold text-text-muted mb-2 px-1 flex items-center justify-between">
            <span>${groupName}</span>
            <span class="px-2 py-0.5 rounded text-xs font-mono ${badgeCls}">${items.length}</span>
          </div>
          <div class="space-y-1">
            ${items.map(item => {
              const active = item.id === this.activeSchemeId;
              const isStudied = this.studiedSchemes.has(item.id);
              const isMarked = this.isBookmarked('scheme', item.id);
              const groupBorder = `border-${item.schemeGroup.toLowerCase()}`;

              return `
                <div class="scheme-row ${groupBorder} ${active ? 'active' : ''}" 
                     onclick="app.selectScheme(${item.id})">
                  <div class="flex items-center gap-3 min-w-0 pr-2">
                    <span class="font-mono text-sm font-bold ${active ? 'text-primary' : 'text-text-muted'}">${item.code}</span>
                    <span class="truncate text-sm ${active ? 'text-white font-semibold' : 'text-text'}">${item.title}</span>
                  </div>
                  <div class="flex items-center gap-2 flex-shrink-0">
                    ${isStudied ? '<span class="text-emerald-500 text-sm font-bold" title="Studied">✓</span>' : ''}
                    ${isMarked ? '<span class="text-amber-400 text-sm" title="Bookmarked">★</span>' : ''}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }

    sidebar.innerHTML = html;
  }

  selectScheme(id) {
    this.activeSchemeId = id;
    this.renderSchemesSidebar();
    this.renderSchemeDetail();
    if (window.innerWidth < 1024) {
      document.getElementById('schemes-detail-panel')?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  renderSchemeDetail() {
    const panel = document.getElementById('schemes-detail-panel');
    if (!panel || typeof portfolioData === 'undefined') return;

    const scheme = portfolioData.find(s => s.id === this.activeSchemeId) || portfolioData[0];
    if (!scheme) return;

    const isStudied = this.studiedSchemes.has(scheme.id);
    const isMarked = this.isBookmarked('scheme', scheme.id);
    const badgeCls = `badge-${scheme.schemeGroup.toLowerCase()}`;

    // ACFE heuristic metrics
    const duration = scheme.schemeGroup === 'FR' ? '24 Months' : scheme.schemeGroup === 'IAC' ? '18 Months' : '14 Months';
    const medianLoss = scheme.schemeGroup === 'FR' ? '$593,000' : scheme.schemeGroup === 'IAC' ? '$150,000' : '$100,000';
    const primaryTip = scheme.schemeGroup === 'FR' ? 'Internal Audit / Executive' : scheme.schemeGroup === 'IAC' ? 'Whistleblower Hotline' : 'Account Reconciliations';

    // Enhance raw body with styled callouts
    let styledContent = scheme.content;
    styledContent = styledContent.replace(/<h4>RED FLAGS(.*?)<\/h4>/gi, '<div class="dossier-callout dossier-callout-red"><h4 class="text-rose-500 font-bold mb-2 flex items-center gap-2"><span>🚨</span> RED FLAGS & WARNING SIGNS</h4>');
    styledContent = styledContent.replace(/<h4>DETECTION(.*?)<\/h4>/gi, '<div class="dossier-callout dossier-callout-detect"><h4 class="text-emerald-500 font-bold mb-2 flex items-center gap-2"><span>🔎</span> FORENSIC DETECTION & AUDIT PROCEDURES</h4>');
    styledContent = styledContent.replace(/<h4>CFE EXAM TIP(.*?)<\/h4>/gi, '<div class="dossier-callout dossier-callout-tip"><h4 class="text-amber-500 font-bold mb-2 flex items-center gap-2"><span>💡</span> CFE EXAM TIP & HIGH-YIELD RULE</h4>');

    panel.innerHTML = `
      <div class="card-surface rounded-2xl p-4 sm:p-8 animate-slide-down">
        
        <!-- Mobile Quick Return Anchor -->
        <div class="lg:hidden mb-4 pb-3 border-b border-line flex items-center justify-between">
          <button onclick="document.getElementById('schemes-sidebar-list')?.scrollIntoView({behavior:'smooth'})" 
                  class="btn-tactile px-3 py-1.5 rounded-lg bg-surface hover:bg-surface-hover border border-line text-xs font-semibold text-primary flex items-center gap-1.5">
            <span>↑</span> <span>Back to Schemes</span>
          </button>
          <span class="text-xs font-mono text-text-muted">Dossier ${scheme.code}</span>
        </div>

        <!-- Top Meta Bar -->
        <div class="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-line mb-6">
          <div class="flex items-center gap-3 flex-wrap">
            <span class="font-mono text-sm font-bold px-3 py-1 rounded-lg ${badgeCls}">${scheme.code}</span>
            <span class="text-sm font-mono text-text-muted">${scheme.category}</span>
            <span class="text-sm text-text-subtle">•</span>
            <span class="text-sm font-mono text-text-muted">${scheme.date || 'ACFE Standards 2026'}</span>
          </div>

          <div class="flex items-center gap-2.5 flex-wrap">
            <!-- Audio Briefing TTS Button -->
            <button id="tts-scheme-btn" onclick="app.toggleSpeech('${scheme.title}. ${scheme.description.replace(/'/g, "\\'")}', 'tts-scheme-btn')" 
                    class="btn-tactile px-3.5 py-1.5 rounded-lg border border-line bg-surface hover:bg-surface-hover text-sm font-semibold text-text transition">
              <span>🔊 Listen Briefing</span>
            </button>

            <!-- Bookmark Button -->
            <button onclick="app.toggleBookmark('scheme', ${scheme.id})" 
                    class="btn-tactile px-3.5 py-1.5 rounded-lg border border-line hover:border-amber-500/50 text-sm font-semibold flex items-center gap-1.5 transition ${isMarked ? 'bg-amber-500/15 text-amber-400 border-amber-500/40' : 'text-text-muted hover:text-white'}">
              <span>${isMarked ? '★ Bookmarked' : '☆ Bookmark'}</span>
            </button>

            <!-- Studied Button -->
            <button onclick="app.toggleStudied(${scheme.id})" 
                    class="btn-tactile px-3.5 py-1.5 rounded-lg border text-sm font-semibold flex items-center gap-1.5 transition ${isStudied ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40' : 'bg-surface hover:bg-surface-hover border-line text-text hover:text-white'}">
              <span>${isStudied ? '✓ Studied' : 'Mark as Studied'}</span>
            </button>
          </div>
        </div>

        <!-- Title & High-level Summary -->
        <h2 class="text-3xl sm:text-4xl font-serif font-bold text-white mb-4 tracking-tight">${scheme.title}</h2>
        
        <p class="text-base text-text-muted leading-relaxed mb-8 bg-surface-hover/50 p-5 rounded-xl border border-line/70">
          ${scheme.description}
        </p>

        <!-- ACFE Report to the Nations Metrics Matrix -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          <div class="p-4 rounded-xl bg-surface-hover/40 border border-line">
            <div class="text-xs font-mono uppercase text-text-muted">Median Duration</div>
            <div class="text-base font-bold text-white font-mono mt-1">${duration}</div>
          </div>
          <div class="p-4 rounded-xl bg-surface-hover/40 border border-line">
            <div class="text-xs font-mono uppercase text-text-muted">Median Loss</div>
            <div class="text-base font-bold text-rose-400 font-mono mt-1">${medianLoss}</div>
          </div>
          <div class="p-4 rounded-xl bg-surface-hover/40 border border-line">
            <div class="text-xs font-mono uppercase text-text-muted">Primary Detection</div>
            <div class="text-base font-bold text-emerald-400 font-mono mt-1 truncate" title="${primaryTip}">${primaryTip}</div>
          </div>
          <div class="p-4 rounded-xl bg-surface-hover/40 border border-line">
            <div class="text-xs font-mono uppercase text-text-muted">Taxonomy Pillar</div>
            <div class="text-base font-bold text-primary font-mono mt-1">${scheme.schemeGroup}</div>
          </div>
        </div>

        <!-- Rich Body Content (Definition, Red Flags, Detection, Tips) -->
        <div class="content-prose">
          ${styledContent}
        </div>

        <!-- Bottom Quick Navigator -->
        <div class="mt-12 pt-6 border-t border-line flex items-center justify-between text-sm font-mono text-text-muted">
          <button onclick="app.navigateSchemeRelative(-1)" class="btn-tactile hover:text-white flex items-center gap-1.5">
            <span>← Previous Scheme</span>
          </button>
          <button onclick="app.switchView('fraudtree')" class="btn-tactile hover:text-primary flex items-center gap-1.5">
            <span>View in ACFE Tree ↗</span>
          </button>
          <button onclick="app.navigateSchemeRelative(1)" class="btn-tactile hover:text-white flex items-center gap-1.5">
            <span>Next Scheme →</span>
          </button>
        </div>
      </div>
    `;
  }

  navigateSchemeRelative(offset) {
    if (typeof portfolioData === 'undefined') return;
    const currentIdx = portfolioData.findIndex(s => s.id === this.activeSchemeId);
    if (currentIdx === -1) return;
    const newIdx = (currentIdx + offset + portfolioData.length) % portfolioData.length;
    this.selectScheme(portfolioData[newIdx].id);
  }

  jumpToSchemeByCode(code) {
    if (typeof portfolioData === 'undefined') return;
    const cleanTarget = code.replace(/[^a-z0-9]/gi, '').toLowerCase();
    const s = portfolioData.find(x => x.code.replace(/[^a-z0-9]/gi, '').toLowerCase() === cleanTarget);
    if (s) {
      this.schemeGroupFilter = 'ALL';
      this.schemeSearch = '';
      this.switchView('schemes');
      this.selectScheme(s.id);
    }
  }

  // -------------------------------------------------------------
  // 2. Interactive Fraud Tree Visualization
  // -------------------------------------------------------------
  renderFraudTree() {
    const container = document.getElementById('fraudtree-container');
    if (!container || typeof fraudTree === 'undefined') return;

    container.innerHTML = `
      <div class="mb-8">
        <div class="flex flex-wrap items-center justify-between gap-4 mb-2">
          <h2 class="text-2xl sm:text-3xl font-serif font-bold text-white">ACFE Occupational Fraud Classification Tree</h2>
          <span class="px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-mono font-semibold">Official 3-Pillar Taxonomy</span>
        </div>
        <p class="text-sm text-text-muted max-w-3xl leading-relaxed">
          The definitive taxonomy created by Dr. Joseph T. Wells. Click any category branch to expand its sub-schemes. Leaf nodes with a code link directly to our complete investigative dossier.
        </p>
      </div>

      <div class="space-y-6">
        ${fraudTree.map((branch, bi) => {
          const accentColor = branch.color || '#3b82f6';
          return `
            <div class="card-surface rounded-2xl p-6 sm:p-8 overflow-hidden">
              <div class="flex items-center justify-between cursor-pointer select-none pb-4 border-b border-line"
                   onclick="app.toggleTreeBranch(${bi})">
                <div class="flex items-center gap-3">
                  <div class="w-4 h-4 rounded-full" style="background-color: ${accentColor}; box-shadow: 0 0 14px ${accentColor}80"></div>
                  <h3 class="text-xl sm:text-2xl font-serif font-bold text-white">${branch.branch}</h3>
                </div>
                <div class="flex items-center gap-3">
                  <span class="text-xs font-mono text-text-muted">${branch.groups ? branch.groups.length : 0} Categories</span>
                  <span id="tree-chevron-${bi}" class="text-text-muted transition-transform duration-200">▼</span>
                </div>
              </div>

              <div id="tree-body-${bi}" class="pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                ${branch.groups.map(group => `
                  <div class="bg-surface-hover/30 rounded-xl p-5 border border-line/60 flex flex-col justify-between">
                    <div>
                      <div class="text-xs font-mono font-bold uppercase tracking-wider text-text-muted mb-3">${group.name}</div>
                      <div class="space-y-3">
                        ${group.leaves.map(leaf => `
                          <div class="tree-leaf-item p-3 rounded-lg border border-line/50 hover:border-primary/40 bg-surface flex items-start justify-between gap-3">
                            <div>
                              <div class="text-sm font-semibold text-white">${leaf.name}</div>
                              <div class="text-xs text-text-muted mt-1 leading-snug">${leaf.def}</div>
                            </div>
                            ${leaf.code ? `
                              <button onclick="app.jumpToSchemeByCode('${leaf.code}')" 
                                      class="btn-tactile text-xs font-mono font-bold px-2.5 py-1 rounded bg-primary/10 text-primary hover:bg-primary hover:text-white transition flex-shrink-0">
                                ${leaf.code} ↗
                              </button>
                            ` : ''}
                          </div>
                        `).join('')}
                      </div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  toggleTreeBranch(bi) {
    const body = document.getElementById(`tree-body-${bi}`);
    const chevron = document.getElementById(`tree-chevron-${bi}`);
    if (!body) return;
    const isHidden = body.classList.contains('hidden');
    body.classList.toggle('hidden', !isHidden);
    if (chevron) chevron.style.transform = isHidden ? 'rotate(0deg)' : 'rotate(-90deg)';
  }

  // -------------------------------------------------------------
  // 3. Real Cases Gallery (Wall of Infamy)
  // -------------------------------------------------------------
  renderCases() {
    this.renderCasesSidebar();
    this.renderCaseDetail();
  }

  filterCases() {
    if (typeof caseStudies === 'undefined') return [];
    return caseStudies.filter(c => {
      const matchSearch = !this.caseSearch || 
        (c.company && c.company.toLowerCase().includes(this.caseSearch.toLowerCase())) ||
        (c.perpetrators && c.perpetrators.toLowerCase().includes(this.caseSearch.toLowerCase())) ||
        (c.summary && c.summary.toLowerCase().includes(this.caseSearch.toLowerCase())) ||
        (c.year && c.year.toLowerCase().includes(this.caseSearch.toLowerCase()));
      const matchCat = this.caseCategory === 'ALL' || (c.schemeGroup && c.schemeGroup.toUpperCase() === this.caseCategory);
      return matchSearch && matchCat;
    });
  }

  renderCasesSidebar() {
    const sidebar = document.getElementById('cases-sidebar-list');
    if (!sidebar) return;

    const cases = this.filterCases();
    if (cases.length === 0) {
      sidebar.innerHTML = `
        <div class="p-6 text-center text-text-muted text-sm font-mono">
          No case studies match your search.
        </div>
      `;
      return;
    }

    sidebar.innerHTML = cases.map(c => {
      const active = c.id === this.activeCaseId;
      const isMarked = this.isBookmarked('case', c.id);

      return `
        <div class="scheme-row border-l-4 border-fr ${active ? 'active' : ''}" 
             onclick="app.selectCase('${c.id}')">
          <div class="min-w-0 pr-2">
            <div class="flex items-center gap-2">
              <span class="text-sm font-bold truncate ${active ? 'text-primary' : 'text-white'}">${c.company}</span>
              ${c.year ? `<span class="text-xs font-mono text-text-subtle">(${c.year})</span>` : ''}
            </div>
            <div class="text-xs text-text-muted truncate mt-0.5">${c.country || 'Corporate Case'}</div>
          </div>
          <div class="flex items-center gap-2 flex-shrink-0">
            ${c.loss ? `<span class="text-xs font-mono px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 font-bold border border-rose-500/20">${c.loss.split(' ')[0]}</span>` : ''}
            ${isMarked ? '<span class="text-amber-400 text-sm">★</span>' : ''}
          </div>
        </div>
      `;
    }).join('');
  }

  selectCase(id) {
    this.activeCaseId = id;
    this.renderCasesSidebar();
    this.renderCaseDetail();
    if (window.innerWidth < 1024) {
      document.getElementById('cases-detail-panel')?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  renderCaseDetail() {
    const panel = document.getElementById('cases-detail-panel');
    if (!panel || typeof caseStudies === 'undefined') return;

    const c = caseStudies.find(item => item.id === this.activeCaseId) || caseStudies[0];
    if (!c) return;

    const isMarked = this.isBookmarked('case', c.id);

    panel.innerHTML = `
      <div class="card-surface rounded-2xl p-4 sm:p-8 animate-slide-down">
        <!-- Mobile Quick Return Anchor -->
        <div class="lg:hidden mb-4 pb-3 border-b border-line flex items-center justify-between">
          <button onclick="document.getElementById('cases-sidebar-list')?.scrollIntoView({behavior:'smooth'})" 
                  class="btn-tactile px-3 py-1.5 rounded-lg bg-surface hover:bg-surface-hover border border-line text-xs font-semibold text-rose-400 flex items-center gap-1.5">
            <span>↑</span> <span>Back to Cases</span>
          </button>
          <span class="text-xs font-mono text-text-muted">${c.company}</span>
        </div>

        <!-- Top Case Metadata Bar -->
        <div class="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-line mb-6">
          <div class="flex items-center gap-3 flex-wrap">
            <span class="text-sm font-mono font-bold px-3 py-1 rounded-lg bg-primary/10 text-primary border border-primary/20">${c.company}</span>
            ${c.year ? `<span class="text-sm font-mono text-text-muted">Year: ${c.year}</span>` : ''}
            ${c.country ? `<span class="text-sm font-mono text-text-muted">• ${c.country}</span>` : ''}
          </div>

          <div class="flex items-center gap-2.5">
            <button onclick="app.toggleSpeech('${c.company}. ${c.summary ? c.summary.replace(/'/g, "\\'") : ''}', 'tts-case-btn')" 
                    id="tts-case-btn" class="btn-tactile px-3.5 py-1.5 rounded-lg border border-line bg-surface hover:bg-surface-hover text-sm font-semibold text-text transition">
              <span>🔊 Listen Case</span>
            </button>
            <button onclick="app.toggleBookmark('case', '${c.id}')" 
                    class="btn-tactile px-3.5 py-1.5 rounded-lg border border-line hover:border-amber-500/50 text-sm font-semibold flex items-center gap-1.5 transition ${isMarked ? 'bg-amber-500/15 text-amber-400 border-amber-500/40' : 'text-text-muted hover:text-white'}">
              <span>${isMarked ? '★ Bookmarked' : '☆ Bookmark'}</span>
            </button>
          </div>
        </div>

        <!-- Case Title -->
        <h2 class="text-3xl sm:text-4xl font-serif font-bold text-white mb-4 tracking-tight">${c.company} (${c.year})</h2>
        <p class="text-base text-text-muted leading-relaxed mb-6 bg-surface-hover/40 p-4 rounded-xl border border-line/60">
          ${c.summary}
        </p>

        <!-- Key Metrics Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div class="p-4 rounded-xl bg-surface-hover/50 border border-line">
            <div class="text-xs font-mono uppercase text-text-muted">Total Loss / Fraud Sum</div>
            <div class="text-base font-bold text-rose-400 font-mono mt-1">${c.loss || 'Undisclosed'}</div>
          </div>
          <div class="p-4 rounded-xl bg-surface-hover/50 border border-line">
            <div class="text-xs font-mono uppercase text-text-muted">Perpetrators</div>
            <div class="text-sm font-bold text-text truncate mt-1" title="${c.perpetrators || 'Executive Leadership'}">${c.perpetrators || 'Management'}</div>
          </div>
          <div class="p-4 rounded-xl bg-surface-hover/50 border border-line">
            <div class="text-xs font-mono uppercase text-text-muted">Associated Schemes</div>
            <div class="text-sm font-bold text-primary font-mono mt-1">${c.codes ? c.codes.join(', ') : 'ACFE FR'}</div>
          </div>
        </div>

        <!-- Detailed Sections -->
        <div class="space-y-6">
          <div class="dossier-callout dossier-callout-red">
            <h4 class="text-rose-500 font-bold mb-2 flex items-center gap-2"><span>💥</span> WHAT HAPPENED</h4>
            <div class="content-prose">${c.what_happened}</div>
          </div>

          <div class="dossier-callout dossier-callout-detect">
            <h4 class="text-emerald-500 font-bold mb-2 flex items-center gap-2"><span>🔎</span> HOW THE FRAUD WAS UNCOVERED</h4>
            <div class="content-prose">${c.how_caught}</div>
          </div>

          <div class="card-surface p-5 rounded-xl border border-line">
            <h4 class="text-primary font-bold mb-2 flex items-center gap-2"><span>🛠️</span> INVESTIGATIVE TECHNIQUES USED</h4>
            <div class="content-prose">${c.techniques}</div>
          </div>

          <div class="dossier-callout dossier-callout-tip">
            <h4 class="text-amber-500 font-bold mb-2 flex items-center gap-2"><span>💡</span> CFE KEY LESSONS & REGULATORY FALLOUT</h4>
            <div class="content-prose">${c.cfe_takeaway}</div>
          </div>
        </div>
      </div>
    `;
  }

  // -------------------------------------------------------------
  // 3.5. Law, Statutes & Ethics (CFE Pillar 2)
  // -------------------------------------------------------------
  renderLaw() {
    this.renderLawSidebar();
    this.renderLawDetail();
  }

  filterLaw() {
    if (typeof lawTopics === 'undefined') return [];
    return lawTopics.filter(t => {
      const matchCat = !this.lawCategory || this.lawCategory === 'ALL' || t.cat === this.lawCategory;
      const matchSearch = !this.lawSearch ||
        t.title.toLowerCase().includes(this.lawSearch.toLowerCase()) ||
        t.code.toLowerCase().includes(this.lawSearch.toLowerCase()) ||
        (t.description && t.description.toLowerCase().includes(this.lawSearch.toLowerCase()));
      return matchCat && matchSearch;
    });
  }

  renderLawSidebar() {
    const sidebar = document.getElementById('law-sidebar-list');
    if (!sidebar) return;

    const list = this.filterLaw();
    if (list.length === 0) {
      sidebar.innerHTML = `<div class="p-6 text-center text-text-muted text-sm font-mono">No legal modules match filter.</div>`;
      return;
    }

    sidebar.innerHTML = list.map(t => {
      const active = t.id === this.activeLawId;
      return `
        <div class="scheme-row border-l-4 border-primary ${active ? 'active' : ''}" 
             onclick="app.selectLaw('${t.id}')">
          <div class="flex items-center gap-2.5 min-w-0 pr-1">
            <span class="font-mono text-xs font-bold ${active ? 'text-primary' : 'text-text-muted'}">${t.code}</span>
            <span class="truncate text-sm ${active ? 'text-primary font-semibold' : 'text-text'}">${t.title}</span>
          </div>
        </div>
      `;
    }).join('');
  }

  renderLawDetail() {
    const panel = document.getElementById('law-detail-panel');
    if (!panel || typeof lawTopics === 'undefined') return;

    const item = lawTopics.find(t => t.id === this.activeLawId) || lawTopics[0];
    if (!item) return;

    panel.innerHTML = `
      <div class="card-surface rounded-2xl p-4 sm:p-8 animate-slide-down">
        <!-- Mobile Quick Return Anchor -->
        <div class="lg:hidden mb-4 pb-3 border-b border-line flex items-center justify-between">
          <button onclick="document.getElementById('law-sidebar-list')?.scrollIntoView({behavior:'smooth'})" 
                  class="btn-tactile px-3 py-1.5 rounded-lg bg-surface hover:bg-surface-hover border border-line text-xs font-semibold text-primary flex items-center gap-1.5">
            <span>↑</span> <span>Back to Law</span>
          </button>
          <span class="text-xs font-mono text-text-muted">${item.code}</span>
        </div>

        <div class="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-line mb-6">
          <div class="flex items-center gap-2.5">
            <span class="text-xs font-mono font-bold px-3 py-1 rounded bg-primary/10 text-primary border border-primary/20">${item.code}</span>
            <span class="text-xs font-mono text-text-muted uppercase">${item.cat}</span>
            <span class="text-xs text-text-subtle">• Legal & Regulatory Framework</span>
          </div>
          <button id="tts-law-btn" onclick="app.toggleSpeech('${item.title}. ${item.description ? item.description.replace(/'/g, "\\'") : ''}', 'tts-law-btn')" 
                  class="btn-tactile px-3.5 py-1.5 rounded-lg border border-line bg-surface hover:bg-surface-hover text-sm font-semibold text-text transition">
            <span>🔊 Listen Briefing</span>
          </button>
        </div>

        <h2 class="text-2xl sm:text-4xl font-serif font-bold text-white mb-4">${item.title}</h2>
        
        ${item.description ? `
          <p class="text-sm sm:text-base text-text-muted leading-relaxed mb-8 bg-surface-hover/50 p-4 rounded-xl border border-line/70">
            ${item.description}
          </p>
        ` : ''}

        <div class="content-prose">
          ${item.content}
        </div>
      </div>
    `;
  }

  selectLaw(id) {
    this.activeLawId = id;
    this.renderLawSidebar();
    this.renderLawDetail();
    if (window.innerWidth < 1024) {
      document.getElementById('law-detail-panel')?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // -------------------------------------------------------------
  // 4. Investigation & Forensics Lab
  // -------------------------------------------------------------
  renderInvestigation() {
    this.renderInvestigationSidebar();
    this.renderInvestigationDetail();
  }

  filterInvestigation() {
    if (typeof investigationTopics === 'undefined') return [];
    return investigationTopics.filter(t => {
      const matchCat = !this.invCategory || this.invCategory === 'ALL' || t.cat === this.invCategory;
      const matchSearch = !this.invSearch ||
        t.title.toLowerCase().includes(this.invSearch.toLowerCase()) ||
        t.code.toLowerCase().includes(this.invSearch.toLowerCase()) ||
        (t.description && t.description.toLowerCase().includes(this.invSearch.toLowerCase()));
      return matchCat && matchSearch;
    });
  }

  renderInvestigationSidebar() {
    const sidebar = document.getElementById('inv-sidebar-list');
    if (!sidebar) return;

    const list = this.filterInvestigation();
    if (list.length === 0) {
      sidebar.innerHTML = `<div class="p-6 text-center text-text-muted text-sm font-mono">No investigative modules match filter.</div>`;
      return;
    }

    sidebar.innerHTML = list.map(t => {
      const active = t.id === this.activeInvId;
      return `
        <div class="scheme-row border-l-4 border-emerald-500 ${active ? 'active' : ''}" 
             onclick="app.selectInvestigation('${t.id}')">
          <div class="flex items-center gap-2.5 min-w-0 pr-1">
            <span class="font-mono text-xs font-bold ${active ? 'text-emerald-400' : 'text-text-muted'}">${t.code}</span>
            <span class="truncate text-sm ${active ? 'text-emerald-400 font-semibold' : 'text-text'}">${t.title}</span>
          </div>
        </div>
      `;
    }).join('');
  }

  renderInvestigationDetail() {
    const panel = document.getElementById('inv-detail-panel');
    if (!panel || typeof investigationTopics === 'undefined') return;

    const item = investigationTopics.find(t => t.id === this.activeInvId) || investigationTopics[0];
    if (!item) return;

    panel.innerHTML = `
      <div class="card-surface rounded-2xl p-4 sm:p-8 animate-slide-down">
        <!-- Mobile Quick Return Anchor -->
        <div class="lg:hidden mb-4 pb-3 border-b border-line flex items-center justify-between">
          <button onclick="document.getElementById('inv-sidebar-list')?.scrollIntoView({behavior:'smooth'})" 
                  class="btn-tactile px-3 py-1.5 rounded-lg bg-surface hover:bg-surface-hover border border-line text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
            <span>↑</span> <span>Back to Investigation</span>
          </button>
          <span class="text-xs font-mono text-text-muted">${item.code}</span>
        </div>

        <div class="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-line mb-6">
          <div class="flex items-center gap-2.5">
            <span class="text-xs font-mono font-bold px-3 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">${item.code}</span>
            <span class="text-xs font-mono text-text-muted uppercase">${item.cat}</span>
            <span class="text-xs text-text-subtle">• Legal & Admissibility Framework</span>
          </div>
          <button id="tts-inv-btn" onclick="app.toggleSpeech('${item.title}. ${item.description ? item.description.replace(/'/g, "\\'") : ''}', 'tts-inv-btn')" 
                  class="btn-tactile px-3.5 py-1.5 rounded-lg border border-line bg-surface hover:bg-surface-hover text-sm font-semibold text-text transition">
            <span>🔊 Listen Briefing</span>
          </button>
        </div>

        <h2 class="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">${item.title}</h2>
        
        ${item.description ? `
          <p class="text-base text-text-muted leading-relaxed mb-8 bg-surface-hover/50 p-4 rounded-xl border border-line/70">
            ${item.description}
          </p>
        ` : ''}

        <div class="content-prose">
          ${item.content}
        </div>
      </div>
    `;
  }

  selectInvestigation(id) {
    this.activeInvId = id;
    this.renderInvestigationSidebar();
    this.renderInvestigationDetail();
    if (window.innerWidth < 1024) {
      document.getElementById('inv-detail-panel')?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // -------------------------------------------------------------
  // 5. Prevention & Deterrence Framework
  // -------------------------------------------------------------
  renderPrevention() {
    this.renderPreventionSidebar();
    this.renderPreventionDetail();
  }

  filterPrevention() {
    if (typeof preventionTopics === 'undefined') return [];
    return preventionTopics.filter(t => {
      const matchCat = !this.prevCategory || this.prevCategory === 'ALL' || t.cat === this.prevCategory;
      const matchSearch = !this.prevSearch ||
        t.title.toLowerCase().includes(this.prevSearch.toLowerCase()) ||
        t.code.toLowerCase().includes(this.prevSearch.toLowerCase()) ||
        (t.description && t.description.toLowerCase().includes(this.prevSearch.toLowerCase()));
      return matchCat && matchSearch;
    });
  }

  renderPreventionSidebar() {
    const sidebar = document.getElementById('prev-sidebar-list');
    if (!sidebar) return;

    const list = this.filterPrevention();
    if (list.length === 0) {
      sidebar.innerHTML = `<div class="p-6 text-center text-text-muted text-sm font-mono">No controls match filter.</div>`;
      return;
    }

    sidebar.innerHTML = list.map(t => {
      const active = t.id === this.activePrevId;
      return `
        <div class="scheme-row border-l-4 border-amber-500 ${active ? 'active' : ''}" 
             onclick="app.selectPrevention('${t.id}')">
          <div class="flex items-center gap-2.5 min-w-0 pr-1">
            <span class="font-mono text-xs font-bold ${active ? 'text-amber-400' : 'text-text-muted'}">${t.code}</span>
            <span class="truncate text-sm ${active ? 'text-amber-400 font-semibold' : 'text-text'}">${t.title}</span>
          </div>
        </div>
      `;
    }).join('');
  }

  renderPreventionDetail() {
    const panel = document.getElementById('prev-detail-panel');
    if (!panel || typeof preventionTopics === 'undefined') return;

    const item = preventionTopics.find(t => t.id === this.activePrevId) || preventionTopics[0];
    if (!item) return;

    panel.innerHTML = `
      <div class="card-surface rounded-2xl p-4 sm:p-8 animate-slide-down">
        <!-- Mobile Quick Return Anchor -->
        <div class="lg:hidden mb-4 pb-3 border-b border-line flex items-center justify-between">
          <button onclick="document.getElementById('prev-sidebar-list')?.scrollIntoView({behavior:'smooth'})" 
                  class="btn-tactile px-3 py-1.5 rounded-lg bg-surface hover:bg-surface-hover border border-line text-xs font-semibold text-amber-400 flex items-center gap-1.5">
            <span>↑</span> <span>Back to Prevention</span>
          </button>
          <span class="text-xs font-mono text-text-muted">${item.code}</span>
        </div>

        <div class="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-line mb-6">
          <div class="flex items-center gap-2.5">
            <span class="text-xs font-mono font-bold px-3 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">${item.code}</span>
            <span class="text-xs font-mono text-text-muted uppercase">${item.cat}</span>
            <span class="text-xs text-text-subtle">• COSO & Anti-Fraud Architecture</span>
          </div>
          <button id="tts-prev-btn" onclick="app.toggleSpeech('${item.title}. ${item.description ? item.description.replace(/'/g, "\\'") : ''}', 'tts-prev-btn')" 
                  class="btn-tactile px-3.5 py-1.5 rounded-lg border border-line bg-surface hover:bg-surface-hover text-sm font-semibold text-text transition">
            <span>🔊 Listen Briefing</span>
          </button>
        </div>

        <h2 class="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">${item.title}</h2>
        
        ${item.description ? `
          <p class="text-base text-text-muted leading-relaxed mb-8 bg-surface-hover/50 p-4 rounded-xl border border-line/70">
            ${item.description}
          </p>
        ` : ''}

        <div class="content-prose">
          ${item.content}
        </div>
      </div>
    `;
  }

  selectPrevention(id) {
    this.activePrevId = id;
    this.renderPreventionSidebar();
    this.renderPreventionDetail();
    if (window.innerWidth < 1024) {
      document.getElementById('prev-detail-panel')?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // -------------------------------------------------------------
  // 6. Interactive Tools: Benford, Risk Score, Chain of Custody
  // -------------------------------------------------------------
  renderTools() {
    this.renderBenfordChart();
    this.calcFraudRisk();
    this.renderCaseSimulator();
  }

  setupBenford(preset) {
    if (preset === 'natural') {
      this.benfordActual = [31.2, 16.8, 12.1, 10.4, 7.5, 6.9, 5.5, 5.0, 4.6];
      this.benfordVerdict = { status: 'NORMAL DISTRIBUTION', msg: 'Close alignment with logarithmic expectations. Low likelihood of human fabrication or threshold manipulation.' };
    } else if (preset === 'fraudulent') {
      this.benfordActual = [12.0, 8.5, 9.1, 7.4, 8.2, 11.0, 24.5, 15.3, 4.0];
      this.benfordVerdict = { status: '🚨 CRITICAL ANOMALY: THRESHOLD EVASION', msg: 'Abnormal statistical surge on leading digits 7 and 8! Strongly indicates structured split invoices between $7,000 and $8,999 to bypass $10,000 approval limits.' };
    } else if (preset === 'round_numbers') {
      this.benfordActual = [11.1, 11.2, 10.9, 11.5, 11.0, 11.3, 11.0, 11.0, 11.0];
      this.benfordVerdict = { status: '⚠️ SUSPICIOUS UNIFORM DISTRIBUTION', msg: 'Uniform flat distribution across all digits. Natural financial datasets almost never exhibit equal frequencies.' };
    }
    this.renderBenfordChart();
  }

  analyzeCustomBenford() {
    const input = document.getElementById('benford-custom-input');
    if (!input || !input.value.trim()) return;

    // Parse all positive numbers
    const tokens = input.value.split(/[\s,;|]+/);
    const counts = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    let validTotal = 0;

    tokens.forEach(tok => {
      const num = parseFloat(tok.replace(/[^0-9.]/g, ''));
      if (!isNaN(num) && num > 0) {
        const str = num.toString().replace(/[^1-9]/, '');
        if (str.length > 0) {
          const firstDigit = parseInt(str.charAt(0));
          if (firstDigit >= 1 && firstDigit <= 9) {
            counts[firstDigit - 1]++;
            validTotal++;
          }
        }
      }
    });

    if (validTotal < 5) {
      alert('Please enter at least 5 valid numbers to calculate a Benford distribution.');
      return;
    }

    this.benfordActual = counts.map(c => Math.round((c / validTotal) * 1000) / 10);

    // Compute chi-square divergence
    let chiSquare = 0;
    for (let i = 0; i < 9; i++) {
      const diff = this.benfordActual[i] - this.benfordExpected[i];
      chiSquare += (diff * diff) / this.benfordExpected[i];
    }

    if (chiSquare > 20) {
      this.benfordVerdict = {
        status: '🚨 STATISTICAL ANOMALY DETECTED',
        msg: `High chi-square divergence (${chiSquare.toFixed(1)}). Custom dataset departs significantly from expected Benford curve. Review highlighted digit spikes.`
      };
    } else {
      this.benfordVerdict = {
        status: '✅ NORMAL LOGARITHMIC CONFORMANCE',
        msg: `Low chi-square divergence (${chiSquare.toFixed(1)}). Custom data distribution conforms to natural Benford logarithmic behavior.`
      };
    }

    this.renderBenfordChart();
  }

  renderBenfordChart() {
    const container = document.getElementById('benford-chart-container');
    if (!container) return;

    const maxVal = 38;
    const barsHtml = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((digit, i) => {
      const actual = this.benfordActual[i];
      const expected = this.benfordExpected[i];
      const actualHeight = Math.min(100, (actual / maxVal) * 100);
      const expectedBottom = Math.min(100, (expected / maxVal) * 100);
      const isAnomaly = Math.abs(actual - expected) > 5.5;

      return `
        <div class="flex-1 flex flex-col items-center gap-2 group relative">
          <!-- Tooltip -->
          <div class="opacity-0 group-hover:opacity-100 transition absolute -top-12 bg-surface border border-line text-xs font-mono px-3 py-1.5 rounded-lg shadow-lg pointer-events-none z-20 whitespace-nowrap">
            Digit ${digit}: Actual ${actual}% | Expected ${expected}%
          </div>

          <!-- Value Pill above Bar -->
          <span class="text-xs font-mono font-bold ${isAnomaly ? 'text-rose-400' : 'text-text-muted'}">${actual}%</span>

          <!-- Bar Column -->
          <div class="w-full h-48 bg-surface-hover/40 rounded-t-lg relative flex items-end justify-center px-1 overflow-visible">
            <!-- Expected guideline marker -->
            <div class="absolute w-full border-t-2 border-primary border-dashed z-10" style="bottom: ${expectedBottom}%" title="Expected: ${expected}%"></div>
            
            <!-- Actual bar -->
            <div class="w-full ${isAnomaly ? 'bg-rose-500' : 'bg-emerald-500'} rounded-t benford-bar" 
                 style="height: ${actualHeight}%; box-shadow: 0 0 16px ${isAnomaly ? 'rgba(244,63,94,0.35)' : 'rgba(16,185,129,0.25)'}"></div>
          </div>

          <!-- Digit Label -->
          <span class="text-sm font-mono font-bold ${isAnomaly ? 'text-rose-400' : 'text-text'}">${digit}</span>
        </div>
      `;
    }).join('');

    container.innerHTML = `
      <div class="flex items-end gap-2 sm:gap-4 h-64 pt-6 pb-2 border-b border-line px-2">
        ${barsHtml}
      </div>
      <div class="flex flex-wrap items-center justify-between text-xs font-mono mt-4 px-2 text-text-muted gap-4">
        <div class="flex items-center gap-4 flex-wrap">
          <span class="flex items-center gap-2"><span class="w-3 h-3 rounded bg-emerald-500"></span> Actual Dataset</span>
          <span class="flex items-center gap-2"><span class="w-5 h-0.5 border-t-2 border-primary border-dashed"></span> Expected Benford Curve</span>
        </div>
        <div class="font-bold text-sm ${this.benfordVerdict?.status.includes('ANOMALY') ? 'text-rose-400 animate-pulse' : 'text-emerald-400'}">
          ${this.benfordVerdict?.status || 'NORMAL'}
        </div>
      </div>
      <div class="mt-4 p-4 rounded-xl bg-surface border border-line text-sm text-text-muted leading-relaxed">
        <strong class="text-white">Forensic Interpretation:</strong> ${this.benfordVerdict?.msg || ''}
      </div>
    `;
  }

  calcFraudRisk() {
    const press = parseInt(document.getElementById('slider-pressure')?.value || '30');
    const opp = parseInt(document.getElementById('slider-opportunity')?.value || '20');
    const rat = parseInt(document.getElementById('slider-rationalization')?.value || '15');

    const pVal = document.getElementById('slider-val-pressure');
    const oVal = document.getElementById('slider-val-opportunity');
    const rVal = document.getElementById('slider-val-rationalization');
    if (pVal) pVal.textContent = `${press}%`;
    if (oVal) oVal.textContent = `${opp}%`;
    if (rVal) rVal.textContent = `${rat}%`;

    const checkboxes = document.querySelectorAll('.risk-calc-checkbox:checked');
    let checkboxScore = 0;
    checkboxes.forEach(cb => {
      checkboxScore += parseInt(cb.dataset.weight || '10');
    });

    const compositeScore = Math.min(100, Math.round(
      (press * 0.25) + (opp * 0.35) + (rat * 0.15) + (checkboxScore * 0.45)
    ));

    const scoreMeter = document.getElementById('risk-score-value');
    const scoreText = document.getElementById('risk-score-badge');
    const checklistOut = document.getElementById('risk-procedures-list');

    if (scoreMeter) scoreMeter.textContent = `${compositeScore}%`;

    let level = 'LOW FRAUD RISK';
    let levelCls = 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10';
    let procedures = [
      'Conduct regular periodic control walkthroughs and segregation of duties audits',
      'Automated 3-way matching in AP (Purchase Order, Receiving Slip, Vendor Invoice)',
      'Quarterly review of active vendor master files for duplicate Tax IDs'
    ];

    if (compositeScore >= 60) {
      level = 'CRITICAL FRAUD RISK (RED FLAGS)';
      levelCls = 'text-rose-400 border-rose-500/30 bg-rose-500/10';
      procedures = [
        'PRIORITY 1: Secure and freeze electronic records & email archives (Chain of Custody)',
        'Deploy Benford\'s Law and round-dollar anomaly scripts across all AP disbursements',
        'Cross-match employee addresses and bank routing info with vendor master database',
        'Direct external circularization/confirmation of accounts receivable with customers',
        'Initiate surprise physical inventory count at remote distribution hubs'
      ];
    } else if (compositeScore >= 35) {
      level = 'MODERATE SUSPICION (AUDIT REQUIRED)';
      levelCls = 'text-amber-400 border-amber-500/30 bg-amber-500/10';
      procedures = [
        'Sample 100% of manual journal entries posted on weekends or after 8 PM',
        'Review executive corporate credit cards and entertainment expenses exceeding $1,000',
        'Perform background check and corporate registry lookup on high-volume vendors'
      ];
    }

    if (scoreText) {
      scoreText.textContent = level;
      scoreText.className = `px-3.5 py-1.5 rounded-full text-xs font-mono font-bold border ${levelCls}`;
    }

    if (checklistOut) {
      checklistOut.innerHTML = procedures.map(p => `
        <li class="flex items-start gap-2.5 text-sm text-text">
          <span class="text-primary font-mono font-bold">→</span>
          <span>${p}</span>
        </li>
      `).join('');
    }
  }

  generateCustodyForm() {
    const desc = document.getElementById('custody-desc')?.value || 'HP EliteBook Laptop';
    const serial = document.getElementById('custody-serial')?.value || 'SN-84920491-A';
    const seizedFrom = document.getElementById('custody-from')?.value || 'John Doe, Chief Financial Officer';
    const investigator = document.getElementById('custody-investigator')?.value || 'Agent M. Kravchuk, CFE';
    const date = new Date().toLocaleString();
    const hash = 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855';

    const out = document.getElementById('custody-receipt-output');
    if (out) {
      out.classList.remove('hidden');
      out.innerHTML = `
        <div class="border-2 border-dashed border-line p-6 rounded-xl bg-surface font-mono text-sm text-text space-y-4">
          <div class="text-center pb-3 border-b border-line font-bold text-base text-primary uppercase tracking-widest">
            OFFICIAL EVIDENCE CHAIN OF CUSTODY RECEIPT
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div><strong>Case File:</strong> CF-2026-0926</div>
            <div><strong>Timestamp:</strong> ${date}</div>
            <div><strong>Item Description:</strong> ${desc}</div>
            <div><strong>Serial / Barcode:</strong> ${serial}</div>
            <div><strong>Seized From:</strong> ${seizedFrom}</div>
            <div><strong>Lead CFE Investigator:</strong> ${investigator}</div>
          </div>
          <div class="pt-3 border-t border-line text-xs break-all">
            <strong>Forensic SHA-256 Bitstream Hash:</strong><br>
            <span class="text-amber-400 font-bold">${hash}</span>
          </div>
          <div class="pt-2 text-xs text-text-muted text-center italic">
            Tamper-evident seal applied. Evidence Secure Storage Locker #4B.
          </div>
          <button onclick="window.print()" class="btn-tactile w-full py-2.5 bg-surface-hover hover:bg-surface-active text-white font-bold rounded-lg text-sm mt-3 transition">
            🖨️ Print / Export Admissible Evidence Receipt
          </button>
        </div>
      `;
    }
  }

  // -------------------------------------------------------------
  // Forensic Investigation Simulator ("The Ghost Vendor Incident")
  // -------------------------------------------------------------
  getCaseEvidenceData() {
    return [
      {
        id: 'ev1',
        tag: 'EXHIBIT A',
        title: 'Vendor Invoice #APX-4081 ($9,850.00)',
        category: 'Documentary Accounting Evidence',
        icon: '📄',
        summary: 'Apex Logistics LLC billing for "Emergency cross-dock expedite surcharge" approved solely by Arthur Vance.',
        htmlContent: `
          <div class="border border-line rounded-xl p-5 bg-surface font-mono text-xs space-y-4">
            <div class="flex justify-between items-start border-b border-line pb-4">
              <div>
                <h4 class="text-base font-bold text-white tracking-wider">APEX LOGISTICS LLC</h4>
                <div class="text-text-muted mt-0.5">Suite 4B, 1209 Orange St, Wilmington, DE 19801</div>
                <div class="text-text-muted">Tax ID / EIN: 88-4920194</div>
              </div>
              <div class="text-right">
                <div class="text-amber-400 font-bold text-sm">INVOICE #APX-4081</div>
                <div class="text-text-muted">Date: Dec 12, 2025</div>
                <div class="text-text-muted">Terms: Net 10 (Immediate ACH)</div>
              </div>
            </div>

            <div class="py-2 border-b border-line space-y-2">
              <div class="flex justify-between">
                <span class="text-text-muted">Bill To: OmniTrans Logistics Global, Accounts Payable</span>
                <span class="text-text-muted">Approver: Arthur Vance (VP Procurement)</span>
              </div>
              <div class="p-3 rounded bg-surface-hover/50 space-y-1">
                <div class="flex justify-between font-bold text-white">
                  <span>Description of Services</span>
                  <span>Total Amount</span>
                </div>
                <div class="flex justify-between text-text">
                  <span>Q4 Intangible Logistics Expedite Consulting & Cross-Dock Surcharge</span>
                  <span class="text-rose-400 font-bold">$9,850.00</span>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-between pt-2">
              <div class="forensic-stamp forensic-stamp-red">
                APPROVED FOR PAYMENT: A. VANCE
              </div>
              <div class="text-right text-text-subtle text-[11px]">
                ERP Category: EXP-SV-09 (Intangible Services)<br>
                Dock Slip: [BYPASSED / EXEMPT]
              </div>
            </div>
          </div>

          <div class="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300 space-y-1.5">
            <div class="font-bold flex items-center gap-1.5 text-amber-400">
              <span>⚠️</span> <span>CFE Forensic Audit Red Flags:</span>
            </div>
            <ul class="list-disc list-inside space-y-1 leading-relaxed text-text">
              <li><strong>Threshold Evasion:</strong> $9,850.00 is deliberately $150 below the $10,000 dual-authorization approval limit.</li>
              <li><strong>Shell Company Address:</strong> 1209 Orange St, Wilmington, DE is a notorious registered agent mail drop building hosting 300,000+ entities with no physical freight facilities.</li>
              <li><strong>Vague Intangible Billing:</strong> "Expedite surcharge" lacks any quantifiable metrics (hours, weight, origin, destination).</li>
              <li><strong>Bypassed 3-Way Match:</strong> ERP receiving dock report was flagged as "exempt".</li>
            </ul>
          </div>
        `
      },
      {
        id: 'ev2',
        tag: 'EXHIBIT B',
        title: 'Delaware Corporate Registry Filing',
        category: 'Public Records & Legal Formation',
        icon: '🏛️',
        summary: 'Articles of Formation filed 3 weeks before the first OmniTrans disbursement.',
        htmlContent: `
          <div class="border border-line rounded-xl p-5 bg-surface font-mono text-xs space-y-4">
            <div class="text-center pb-3 border-b border-line">
              <div class="text-text-muted uppercase tracking-widest text-[10px]">State of Delaware • Division of Corporations</div>
              <h4 class="text-base font-bold text-white mt-1">CERTIFICATE OF FORMATION: APEX LOGISTICS LLC</h4>
              <div class="text-text-subtle text-[11px]">State File ID: 7491024 • Formed: Nov 14, 2024</div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-text">
              <div><strong>Registered Agent:</strong> First Delaware Agent Services</div>
              <div><strong>Status:</strong> Active / Good Standing</div>
              <div><strong>Initial Filing Fee:</strong> $90.00 (Paid via Credit Card)</div>
              <div><strong>Managing Member:</strong> Arthur Vance</div>
              <div class="sm:col-span-2"><strong>Principal Physical Address:</strong> 1422 Highland Crest Blvd, Newark, DE (Residential subdivision)</div>
            </div>
            <div class="text-center pt-2">
              <div class="forensic-stamp forensic-stamp-amber">STATE SEAL VERIFIED</div>
            </div>
          </div>

          <div class="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300 space-y-1.5">
            <div class="font-bold flex items-center gap-1.5 text-amber-400">
              <span>⚠️</span> <span>CFE Forensic Audit Red Flags:</span>
            </div>
            <ul class="list-disc list-inside space-y-1 leading-relaxed text-text">
              <li><strong>Temporal Proximity:</strong> Entity formed in Nov 2024; first invoice issued Dec 2024 (brand-new entity with no prior track record).</li>
              <li><strong>Direct Managing Member Match:</strong> Arthur Vance failed to disclose this outside business interest or related-party affiliation.</li>
              <li><strong>Residential Location:</strong> Principal address is a residential private home, completely incompatible with a nationwide freight logistics fleet.</li>
            </ul>
          </div>
        `
      },
      {
        id: 'ev3',
        tag: 'EXHIBIT C',
        title: 'Bank ACH & Wire Sweep Forensic Trace',
        category: 'Financial Banking Forensics',
        icon: '💳',
        summary: 'Subpoenaed records tracing OmniTrans corporate payments directly into personal luxury assets.',
        htmlContent: `
          <div class="border border-line rounded-xl p-5 bg-surface font-mono text-xs space-y-4">
            <div class="flex justify-between items-start border-b border-line pb-3">
              <div>
                <h4 class="text-base font-bold text-white">FIRST REGIONAL BANK OF DELAWARE</h4>
                <div class="text-text-muted">Commercial Wire & ACH Ledger • Account: #4092-8819-01</div>
              </div>
              <div class="text-right text-emerald-400 font-bold">DISBURSEMENTS RECONCILIATION</div>
            </div>
            <table class="w-full text-left text-xs">
              <thead class="border-b border-line text-text-muted">
                <tr><th>Date</th><th>Inflow (OmniTrans)</th><th>Outflow / Sweep</th><th>Beneficiary / Counterparty</th></tr>
              </thead>
              <tbody class="divide-y divide-line text-text">
                <tr><td>12/14/25</td><td class="text-emerald-400">+$9,850.00</td><td class="text-rose-400">-$9,800.00</td><td>Arthur Vance (Personal Checking)</td></tr>
                <tr><td>12/15/25</td><td>—</td><td class="text-rose-400">-$3,450.00</td><td>Chesapeake Yacht Basin (Slip & Storage)</td></tr>
                <tr><td>12/16/25</td><td>—</td><td class="text-rose-400">-$4,200.00</td><td>Coinbase Prime (Digital Asset Deposit)</td></tr>
                <tr><td>12/18/25</td><td>—</td><td class="text-rose-400">-$2,150.00</td><td>Porsche Financial Services (Auto Lease)</td></tr>
              </tbody>
            </table>
            <div class="pt-2 text-right">
              <span class="text-text-muted">14-Month Cumulative Apex Inflows:</span> <strong class="text-rose-400 text-sm">$482,500.00 (52 Wires)</strong>
            </div>
          </div>

          <div class="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300 space-y-1.5">
            <div class="font-bold flex items-center gap-1.5 text-amber-400">
              <span>⚠️</span> <span>CFE Forensic Audit Red Flags:</span>
            </div>
            <ul class="list-disc list-inside space-y-1 leading-relaxed text-text">
              <li><strong>Zero Retained Commercial Balance:</strong> 99% of corporate funds are immediately swept to personal checking within 24 hours of receipt.</li>
              <li><strong>Living Beyond Means (Cressey's Triangle):</strong> Suspect salary is $135,000/year, but annual outflows exceed $500,000 on luxury watercraft and exotic vehicles.</li>
              <li><strong>Asset Recovery Target Identified:</strong> 38-foot yacht and cryptocurrency accounts represent prime targets for civil freeze orders and restitution.</li>
            </ul>
          </div>
        `
      },
      {
        id: 'ev4',
        tag: 'EXHIBIT D',
        title: 'ERP 3-Way Match Exception Audit & Dock Logs',
        category: 'Internal Controls & Inventory Walkthrough',
        icon: '📦',
        summary: 'Warehouse supervisor confirmation and ERP exception logs proving 0 deliveries ever occurred.',
        htmlContent: `
          <div class="border border-line rounded-xl p-5 bg-surface font-mono text-xs space-y-4">
            <div class="flex justify-between items-start border-b border-line pb-3">
              <div>
                <h4 class="text-base font-bold text-white">OMNITRANS ERP CENTRAL AUDIT LOG</h4>
                <div class="text-text-muted">Module: Procurement & Dock Inventory Verification</div>
              </div>
              <div class="forensic-stamp forensic-stamp-red">MATCH FAILED: 0 SLIPS</div>
            </div>
            <div class="space-y-2 text-text">
              <div class="p-2.5 rounded bg-surface-hover/60 border border-line">
                <strong>Warehouse Dock Supervisor Sworn Memo:</strong><br>
                <em>"I have reviewed our electronic dock gate logs and physical bill-of-lading archives for the past 24 months. OmniTrans has never received, unloaded, or signed for an Apex Logistics truck, container, or courier parcel across any of our 12 bays."</em>
                <div class="text-text-muted text-right mt-1">— T. Henderson, Dock Logistics Manager</div>
              </div>
              <div class="p-2.5 rounded bg-surface-hover/60 border border-line">
                <strong>ERP Configuration Exploit Found:</strong><br>
                User ID <code class="text-primary font-bold">AVANCE-902</code> modified system parameters for vendor class <code class="text-primary font-bold">EXP-SV-09</code> on Nov 28, 2024 to auto-populate "Services Rendered - Satisfactory" and bypass mandatory receiving reports.
              </div>
            </div>
          </div>

          <div class="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300 space-y-1.5">
            <div class="font-bold flex items-center gap-1.5 text-amber-400">
              <span>⚠️</span> <span>CFE Forensic Audit Red Flags:</span>
            </div>
            <ul class="list-disc list-inside space-y-1 leading-relaxed text-text">
              <li><strong>Ghost Delivery:</strong> Complete absence of physical merchandise or service deliverables.</li>
              <li><strong>Internal Control Override:</strong> Single manager possessed both vendor authorization and receiving approval override (Segregation of Duties breakdown).</li>
            </ul>
          </div>
        `
      },
      {
        id: 'ev5',
        tag: 'EXHIBIT E',
        title: 'Forensic Bitstream Image Analysis of Workstation',
        category: 'Digital Forensics & Metadata',
        icon: '💻',
        summary: 'Deleted Word templates and incriminating web searches recovered from Arthur Vance\'s corporate laptop.',
        htmlContent: `
          <div class="border border-line rounded-xl p-5 bg-surface font-mono text-xs space-y-4">
            <div class="flex justify-between items-start border-b border-line pb-3">
              <div>
                <h4 class="text-base font-bold text-white">DIGITAL FORENSIC AUTOPSY REPORT</h4>
                <div class="text-text-muted">Target: Lenovo ThinkPad X1 • Custodian: Arthur Vance</div>
              </div>
              <div class="text-emerald-400 font-bold">SHA-256 MATCHED</div>
            </div>
            <div class="space-y-2 text-text">
              <div class="p-2.5 rounded bg-surface-hover/60 border border-line">
                <strong>Carved Deleted File (Cluster #89104):</strong><br>
                File Name: <code class="text-amber-400 font-bold">Apex_Freight_Invoice_Blank.docx</code><br>
                Embedded Metadata Author: <span class="text-white font-bold">Arthur Vance</span><br>
                Last Modified: Dec 11, 2025 21:14:02 (from home IP address)
              </div>
              <div class="p-2.5 rounded bg-surface-hover/60 border border-line">
                <strong>Recovered Browser History & Bookmarks:</strong>
                <ul class="list-disc list-inside text-text-muted mt-1 space-y-0.5">
                  <li>"How to form anonymous Delaware LLC online fast"</li>
                  <li>"Free invoice generator docx template freight courier"</li>
                  <li>"IRS Form 1099-MISC thresholds and audit triggers"</li>
                  <li>"Non-extradition countries luxury real estate purchase"</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300 space-y-1.5">
            <div class="font-bold flex items-center gap-1.5 text-amber-400">
              <span>⚠️</span> <span>CFE Forensic Audit Red Flags:</span>
            </div>
            <ul class="list-disc list-inside space-y-1 leading-relaxed text-text">
              <li><strong>Smoking Gun Evidence:</strong> The suspect created the fictitious invoices on his company workstation; document author metadata matches his user profile.</li>
              <li><strong>Evidence of Scienter (Intent):</strong> Searches for audit thresholds and non-extradition jurisdictions defeat any defense of "accidental mistake" or "good faith consulting".</li>
            </ul>
          </div>
        `
      }
    ];
  }

  getCaseStages() {
    return [
      {
        stage: 1,
        title: 'Stage 1: Initial Discovery & Evidence Preservation',
        badge: 'Predication & Custody',
        scenario: 'You have just received an anonymous whistleblower report through the ACFE hotline alleging that Senior Procurement Manager Arthur Vance is funneling money to Apex Logistics LLC with no physical freight delivered. What is your immediate next investigative action?',
        options: [
          {
            text: 'Immediately call Arthur Vance into the conference room and demand he explain why Apex Logistics has no warehouse delivery records.',
            correct: false,
            penalty: -25,
            feedback: 'INCORRECT (-25 pts). Violates the ACFE Order of Investigation! Confronting the target first alerts the perpetrator, risks immediate spoliation of electronic evidence, triggers defensive cover-ups, and exposes the company to defamation claims if the tip proves unsubstantiated.'
          },
          {
            text: 'Quietly secure and image Vance\'s corporate laptop and email box after hours under strict chain of custody, verify Apex Logistics on Delaware corporate registries, and pull all AP payment logs without tipping off the suspect.',
            correct: true,
            reward: 25,
            feedback: 'CORRECT! (+25 pts). Flawless CFE procedure! ACFE Standards require establishing predication through documentary and electronic evidence first before any confrontation. Securing volatile digital artifacts prevents spoliation while maintaining complete confidentiality.'
          },
          {
            text: 'Immediately contact local police dispatch and ask them to send squad cars to arrest Vance at his desk during office hours.',
            correct: false,
            penalty: -20,
            feedback: 'INCORRECT (-20 pts). Premature police involvement! Law enforcement requires substantiated probable cause and an organized evidentiary dossier before accepting a commercial fraud case. Unsubstantiated arrests cause catastrophic civil liability for false arrest and wrongful termination.'
          }
        ]
      },
      {
        stage: 2,
        title: 'Stage 2: Forensic Data Analytics & Scheme Quantification',
        badge: 'Forensic Accounting',
        scenario: 'With Vance\'s workstation imaged and the general ledger extracted, how do you determine the full financial scope and classify the fraud scheme according to the ACFE Fraud Tree?',
        options: [
          {
            text: 'Only audit the single $9,850 invoice cited in the anonymous tip, calculate damages as $9,850, and stop further ledger analysis.',
            correct: false,
            penalty: -25,
            feedback: 'INCORRECT (-25 pts). Grossly underestimates the scheme! Occupational fraud schemes almost never involve a single isolated transaction. CFE methodology requires expanding the audit window to the perpetrator\'s entire tenure to uncover cumulative damages.'
          },
          {
            text: 'Run Benford\'s Law first-digit diagnostic on all AP disbursements, filter for transactions clustering just below the $10,000 threshold ($9,000–$9,999), and perform fuzzy cross-matching between vendor addresses and employee payroll files.',
            correct: true,
            reward: 25,
            feedback: 'CORRECT! (+25 pts). Textbook forensic data analytics! This reveals 52 split invoices totaling $482,500 over 14 months, all carefully kept between $9,200 and $9,950 to avoid executive countersignatures. Scheme accurately classified as: Asset Misappropriation > Cash Disbursements > Billing Schemes > Shell Company.'
          },
          {
            text: 'Log into the ERP administration console and permanently delete Apex Logistics from the active vendor database right away.',
            correct: false,
            penalty: -15,
            feedback: 'INCORRECT (-15 pts). Corrupts the evidence trail! Deleting database entities destroys historical foreign keys and audit logs needed for court admissibility under FRE 803(6). Proper procedure is placing a silent administrative hold on pending check runs.'
          }
        ]
      },
      {
        stage: 3,
        title: 'Stage 3: Witness Interview Sequencing',
        badge: 'Interview Methodology',
        scenario: 'You have quantified the $482,500 loss, confirmed Arthur Vance formed Apex Logistics, and found the invoice template on his laptop. Who do you interview first?',
        options: [
          {
            text: 'Go straight to Arthur Vance. With this much overwhelming evidence, there is no reason to speak to anyone else.',
            correct: false,
            penalty: -20,
            feedback: 'INCORRECT (-20 pts). Violates the CFE Interview Sequence! The ACFE standard sequence dictates interviewing from the outside in (least implicated to most implicated). Interviewing the target first leaves open escape routes and unverified operational alibis.'
          },
          {
            text: 'Interview neutral peripheral third parties first (the AP clerk who entered the vouchers, the warehouse dock manager who receives freight), then interview Vance\'s immediate supervisor, and interview Arthur Vance last.',
            correct: true,
            reward: 25,
            feedback: 'CORRECT! (+25 pts). Perfect CFE sequencing! The AP clerk reveals Vance pressured her to expedite the payments without dock receipts; the dock manager confirms zero Apex trucks ever arrived. When you finally sit with Vance, every single potential alibi has already been closed.'
          },
          {
            text: 'Send private investigators to Arthur Vance\'s private residence to interrogate his spouse and neighbors regarding his luxury boat purchase.',
            correct: false,
            penalty: -25,
            feedback: 'INCORRECT (-25 pts). Ethically and legally hazardous! Interrogating family members without subpoenas risks civil harassment lawsuits, intentional infliction of emotional distress claims, and inevitably tips off the suspect before you can secure company assets.'
          }
        ]
      },
      {
        stage: 4,
        title: 'Stage 4: Admission-Seeking Interview & Confession',
        badge: 'Legal Confession Protocol',
        scenario: 'You are seated with Arthur Vance in a private, neutral conference room. You have established rapport and baseline behavior. How do you execute the admission-seeking interview to secure a legally admissible confession?',
        options: [
          {
            text: 'Scream at Vance, bang on the table, tell him he is facing 20 years in federal prison, and threaten that his family will be ruined unless he signs a confession right now.',
            correct: false,
            penalty: -25,
            feedback: 'INCORRECT (-25 pts). Coercion and Duress! Under the Federal Rules of Evidence and constitutional jurisprudence, confessions obtained through threats, duress, or psychological coercion are completely inadmissible in both criminal and civil court, and subject the CFE to tort liability for false imprisonment.'
          },
          {
            text: 'Make a direct, confident accusation; defuse alibis using documented wire traces; introduce a transition statement minimizing moral stigma by providing a face-saving rationalization (financial strain/family medical bills); present an alternative question; and secure a voluntary signed written statement.',
            correct: true,
            reward: 25,
            feedback: 'CORRECT! (+25 pts). Masterful CFE Admission-Seeking technique! Vance breaks down emotionally, rationalizes his actions due to heavy stock market losses and family medical expenses, signs a detailed 4-page handwritten confession, and agrees to surrender his yacht and crypto assets for corporate restitution.'
          },
          {
            text: 'Promise Vance complete immunity from criminal prosecution and guarantee that the company will not notify the authorities if he agrees to resign quietly.',
            correct: false,
            penalty: -25,
            feedback: 'INCORRECT (-25 pts). Ultra Vires Immunity Promise! A private fraud examiner or corporate employer has zero legal authority to grant criminal immunity from government prosecution. Making unauthorized immunity promises invalidates the confession and damages prosecution prospects.'
          }
        ]
      }
    ];
  }

  renderCaseSimulator() {
    const container = document.getElementById('case-simulator-section');
    if (!container) return;

    const evidence = this.getCaseEvidenceData();
    const stages = this.getCaseStages();
    const currentStage = stages.find(s => s.stage === this.caseSim.stage) || stages[0];
    const isCompleted = this.caseSim.completed;

    let rating = 'CFE MASTER INVESTIGATOR';
    let ratingCls = 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10';
    if (this.caseSim.score < 60) {
      rating = 'REMEDIAL INVESTIGATION REQUIRED';
      ratingCls = 'text-rose-400 border-rose-500/30 bg-rose-500/10';
    } else if (this.caseSim.score < 90) {
      rating = 'PROFICIENT FRAUD EXAMINER';
      ratingCls = 'text-amber-400 border-amber-500/30 bg-amber-500/10';
    }

    container.innerHTML = `
      <!-- Dossier Header -->
      <div class="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-line mb-6">
        <div>
          <div class="flex items-center gap-2 mb-1">
            <span class="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-primary/20 text-primary border border-primary/30">
              CFE SIMULATION WORKBENCH
            </span>
            <span class="text-xs font-mono text-text-muted">Case File: CF-2026-APX</span>
          </div>
          <h3 class="text-2xl font-serif font-bold text-white">The Ghost Vendor Incident (Apex Logistics LLC)</h3>
          <p class="text-sm text-text-muted mt-1">
            Suspect: <strong>Arthur Vance</strong> (VP Procurement, 9 yrs) • Target Scheme: <strong>Shell Company / Cash Disbursements</strong>
          </p>
        </div>

        <div class="flex items-center gap-3">
          <div class="px-3.5 py-1.5 rounded-xl border ${ratingCls} font-mono text-xs font-bold flex items-center gap-2">
            <span>Score:</span> <span class="text-sm font-extrabold">${this.caseSim.score}/100</span>
          </div>
          <button onclick="app.resetCaseSimulator()" class="btn-tactile px-3.5 py-1.5 rounded-xl bg-surface hover:bg-surface-hover border border-line text-xs font-mono text-text-muted hover:text-white transition">
            ↺ Reset Drill
          </button>
        </div>
      </div>

      <!-- Predication Whistleblower Brief -->
      <div class="mb-6 p-4 rounded-xl bg-surface-hover/30 border border-line font-mono text-xs leading-relaxed space-y-2">
        <div class="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-[11px]">
          <span>📢</span> <span>Predication Established • Confidential ACFE Hotline Intake #8402</span>
        </div>
        <div class="text-text">
          <em>"Arthur Vance is running checks to Apex Logistics LLC for freight expedite consulting. Our warehouse dock logs show zero shipments ever arrived from Apex in 14 months, yet AP has disbursed nearly half a million dollars. Vance personally signs off on every voucher under $10,000."</em>
        </div>
      </div>

      <!-- Interactive Evidence Board -->
      <div class="mb-8">
        <div class="flex items-center justify-between mb-3">
          <h4 class="text-sm font-bold font-mono uppercase tracking-wider text-text-muted flex items-center gap-2">
            <span>📁</span> <span>Interactive Evidence Locker (Click to Inspect Exhibits):</span>
          </h4>
          <span class="text-xs font-mono text-text-subtle">
            ${this.caseSim.examinedEvidence.size} / ${evidence.length} Exhibits Examined
          </span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          ${evidence.map(ev => {
            const isExamined = this.caseSim.examinedEvidence.has(ev.id);
            return `
              <div onclick="app.inspectEvidence('${ev.id}')" 
                   class="evidence-card ${isExamined ? 'examined' : ''} text-left">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-lg">${ev.icon}</span>
                  <span class="font-mono text-[10px] font-bold text-primary">${ev.tag}</span>
                </div>
                <div class="font-bold text-xs text-white line-clamp-1">${ev.title}</div>
                <div class="text-[11px] text-text-muted mt-1 line-clamp-2 leading-tight">${ev.summary}</div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Main Stage Execution OR Final Forensic Report -->
      ${!isCompleted ? `
        <div class="card-surface p-6 rounded-xl border border-line space-y-6 bg-surface/60">
          <!-- Stage Progress Stepper -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 pb-4 border-b border-line text-xs font-mono">
            ${stages.map(s => {
              const active = s.stage === this.caseSim.stage;
              const passed = s.stage < this.caseSim.stage;
              return `
                <div class="p-2 rounded-lg border text-center transition ${active ? 'border-primary bg-primary/10 text-primary font-bold' : passed ? 'border-emerald-500/30 text-emerald-400 bg-emerald-500/5' : 'border-line text-text-subtle'}">
                  <div>Stage ${s.stage}</div>
                  <div class="text-[10px] truncate">${s.badge}</div>
                </div>
              `;
            }).join('')}
          </div>

          <!-- Stage Scenario & Question -->
          <div class="space-y-3">
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                ACTIVE INVESTIGATION STAGE
              </span>
              <h4 class="text-lg font-bold text-white font-serif">${currentStage.title}</h4>
            </div>
            <p class="text-sm text-text leading-relaxed bg-surface-hover/20 p-3.5 rounded-xl border border-line">
              ${currentStage.scenario}
            </p>
          </div>

          <!-- Tactical Choices -->
          <div class="space-y-3">
            <div class="text-xs font-mono font-bold uppercase tracking-wider text-text-muted">
              Select Your Tactical Investigation Decision:
            </div>
            <div class="space-y-2.5">
              ${currentStage.options.map((opt, idx) => {
                const choiceMade = this.caseSim.choices[currentStage.stage] !== undefined;
                const isSelected = this.caseSim.choices[currentStage.stage] === idx;
                let optBorder = 'border-line hover:border-primary/40 bg-surface';
                if (choiceMade) {
                  if (isSelected) {
                    optBorder = opt.correct ? 'border-emerald-500 bg-emerald-500/15 text-emerald-300' : 'border-rose-500 bg-rose-500/15 text-rose-300';
                  } else {
                    optBorder = 'opacity-50 border-line bg-surface';
                  }
                }
                return `
                  <button onclick="app.submitCaseChoice(${currentStage.stage}, ${idx})" 
                          ${choiceMade ? 'disabled' : ''}
                          class="tactical-choice w-full text-left p-4 rounded-xl border ${optBorder} text-sm transition flex items-start gap-3">
                    <span class="w-6 h-6 rounded-full border border-line text-xs font-mono font-bold flex items-center justify-center flex-shrink-0 mt-0.5 text-text-muted">
                      ${['A', 'B', 'C'][idx]}
                    </span>
                    <span class="leading-relaxed text-text font-medium">${opt.text}</span>
                  </button>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Feedback & Advance Button -->
          ${this.caseSim.choices[currentStage.stage] !== undefined ? `
            <div class="p-4 rounded-xl border animate-slide-down ${currentStage.options[this.caseSim.choices[currentStage.stage]].correct ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-200' : 'bg-rose-500/10 border-rose-500/30 text-rose-200'} text-xs leading-relaxed space-y-2">
              <div class="font-bold font-mono text-sm flex items-center gap-2">
                <span>${currentStage.options[this.caseSim.choices[currentStage.stage]].correct ? '✓ ACFE PROTOCOL ADHERED' : '✗ PROCEDURAL ERROR'}</span>
              </div>
              <div class="text-text">${currentStage.options[this.caseSim.choices[currentStage.stage]].feedback}</div>
            </div>

            <div class="flex justify-end pt-2">
              <button onclick="app.nextCaseStage()" class="btn-tactile px-6 py-2.5 rounded-xl bg-primary hover:bg-blue-600 text-white font-bold text-xs transition flex items-center gap-2 shadow-lg shadow-primary/20">
                <span>${currentStage.stage === 4 ? 'Finalize Investigation & View Report' : 'Proceed to Next Stage →'}</span>
              </button>
            </div>
          ` : ''}

        </div>
      ` : `
        <!-- Completed Case Audit Dossier & Remediation Report -->
        <div class="card-surface p-6 sm:p-8 rounded-xl border border-line space-y-6 bg-surface/70 animate-slide-down">
          <div class="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-line">
            <div>
              <span class="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                INVESTIGATION CONCLUDED • ADMISSIBLE IN COURT
              </span>
              <h4 class="text-2xl font-serif font-bold text-white mt-1">Official CFE Forensic Autopsy & Restitution Report</h4>
            </div>
            <div class="px-4 py-2 rounded-xl border ${ratingCls} text-sm font-mono font-bold">
              ${rating} (${this.caseSim.score}%)
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
            <div class="p-4 rounded-xl bg-surface-hover/30 border border-line space-y-1">
              <div class="text-text-muted">Total Documented Loss</div>
              <div class="text-xl font-bold text-rose-400">$482,500.00</div>
              <div class="text-text-subtle">52 Invoices (Nov 2024 - Dec 2025)</div>
            </div>
            <div class="p-4 rounded-xl bg-surface-hover/30 border border-line space-y-1">
              <div class="text-text-muted">Recoverable Seized Assets</div>
              <div class="text-xl font-bold text-emerald-400">$310,000.00</div>
              <div class="text-text-subtle">Yacht Lien + Crypto + Frozen Checking</div>
            </div>
            <div class="p-4 rounded-xl bg-surface-hover/30 border border-line space-y-1">
              <div class="text-text-muted">Evidentiary Admissibility</div>
              <div class="text-xl font-bold text-primary">100% FRE 803(6)</div>
              <div class="text-text-subtle">Bitstream Verified & Signed Confession</div>
            </div>
          </div>

          <!-- Internal Control Remediation Plan -->
          <div class="p-5 rounded-xl bg-surface border border-line space-y-3">
            <h5 class="text-sm font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <span>🛡️</span> <span>Mandatory Internal Control Remediation (COSO Framework):</span>
            </h5>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-text">
              <div class="p-3 rounded-lg bg-surface-hover/40 border border-line">
                <strong class="text-primary block mb-1">1. Segregation of Duties</strong>
                Revoke procurement manager ability to authorize both vendor approval and delivery exception overrides in the ERP.
              </div>
              <div class="p-3 rounded-lg bg-surface-hover/40 border border-line">
                <strong class="text-primary block mb-1">2. Mandatory 3-Way Match</strong>
                Eliminate the "intangible service exempt" loophole; all disbursements above $1,000 require independent receiving confirmations.
              </div>
              <div class="p-3 rounded-lg bg-surface-hover/40 border border-line">
                <strong class="text-primary block mb-1">3. Automated Fuzzy Matching</strong>
                Implement quarterly automated cross-matching between vendor master files (TIN, address, bank routing) and employee HR payroll data.
              </div>
            </div>
          </div>

          <div class="flex items-center justify-between pt-2">
            <button onclick="window.print()" class="btn-tactile px-5 py-2.5 rounded-xl bg-surface-hover hover:bg-surface-active text-white text-xs font-mono font-bold border border-line flex items-center gap-2">
              <span>🖨️ Print Final Case Audit Dossier</span>
            </button>
            <button onclick="app.resetCaseSimulator()" class="btn-tactile px-6 py-2.5 rounded-xl bg-primary hover:bg-blue-600 text-white text-xs font-bold transition shadow-lg shadow-primary/20">
              ↺ Play Another Drill
            </button>
          </div>
        </div>
      `}
    `;
  }

  inspectEvidence(evidenceId) {
    const evidence = this.getCaseEvidenceData().find(e => e.id === evidenceId);
    if (!evidence) return;

    this.caseSim.examinedEvidence.add(evidenceId);
    this.playSfx('clue');

    const modal = document.getElementById('evidence-modal');
    const titleEl = document.getElementById('evidence-modal-title');
    const bodyEl = document.getElementById('evidence-modal-body');

    if (titleEl) titleEl.textContent = `${evidence.tag}: ${evidence.title}`;
    if (bodyEl) bodyEl.innerHTML = evidence.htmlContent;
    if (modal) modal.classList.remove('hidden');

    this.renderCaseSimulator();
  }

  closeEvidenceModal() {
    const modal = document.getElementById('evidence-modal');
    if (modal) modal.classList.add('hidden');
  }

  submitCaseChoice(stageId, optionIndex) {
    if (this.caseSim.choices[stageId] !== undefined) return;

    const stages = this.getCaseStages();
    const stage = stages.find(s => s.stage === stageId);
    if (!stage) return;

    const opt = stage.options[optionIndex];
    this.caseSim.choices[stageId] = optionIndex;

    if (opt.correct) {
      this.playSfx('success');
    } else {
      this.caseSim.score = Math.max(0, this.caseSim.score + (opt.penalty || -25));
      this.playSfx('error');
    }

    this.renderCaseSimulator();
  }

  nextCaseStage() {
    this.playSfx('click');
    if (this.caseSim.stage < 4) {
      this.caseSim.stage++;
      this.renderCaseSimulator();
    } else {
      this.caseSim.completed = true;
      this.playSfx('success');
      this.renderCaseSimulator();
    }
  }

  resetCaseSimulator() {
    this.caseSim = {
      stage: 1,
      score: 100,
      examinedEvidence: new Set(),
      choices: {},
      completed: false
    };
    this.playSfx('click');
    this.renderCaseSimulator();
  }

  // -------------------------------------------------------------
  // High-Yield CFE Reference Cheatsheet Modal Engine
  // -------------------------------------------------------------
  openCheatsheet() {
    this.playSfx('click');
    const modal = document.getElementById('cheatsheet-modal');
    if (modal) {
      modal.classList.remove('hidden');
      this.renderCheatsheetContent();
    }
  }

  closeCheatsheet() {
    const modal = document.getElementById('cheatsheet-modal');
    if (modal) modal.classList.add('hidden');
  }

  switchCheatsheetTab(tabName) {
    this.activeCheatsheetTab = tabName;
    this.playSfx('click');
    ['schemes', 'investigations', 'prevention'].forEach(t => {
      const btn = document.getElementById(`cs-tab-btn-${t}`);
      if (btn) btn.classList.toggle('active', t === tabName);
    });
    this.renderCheatsheetContent();
  }

  renderCheatsheetContent() {
    const container = document.getElementById('cheatsheet-content-container');
    if (!container) return;

    const tab = this.activeCheatsheetTab;

    if (tab === 'schemes') {
      container.innerHTML = `
        <div class="space-y-6">
          <div class="cheatsheet-section">
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-base font-bold font-mono text-primary uppercase tracking-wider">1. ACFE Occupational Fraud Tree — Core Hierarchy & Median Loss</h3>
              <span class="text-xs font-mono font-bold px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">Section 1: 120 Qs</span>
            </div>
            <table class="cheatsheet-table">
              <thead>
                <tr>
                  <th>Major Branch</th>
                  <th>Frequency (% of Cases)</th>
                  <th>Median Loss ($)</th>
                  <th>Core Subcategories & Forensic Mechanisms</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Asset Misappropriation</strong></td>
                  <td>~86% (Most Common)</td>
                  <td>~$100,000 (Lowest Loss)</td>
                  <td>Theft of Cash (Skimming, Cash Larceny, Fraudulent Disbursements: Billing, Payroll, Expense Reimbursement, Check Tampering) & Non-Cash Theft (Misuse, Larceny).</td>
                </tr>
                <tr>
                  <td><strong>Corruption & Bribery</strong></td>
                  <td>~50% (Mid Frequency)</td>
                  <td>~$200,000 (Substantial)</td>
                  <td>Bribery (Kickbacks, Bid Rigging), Conflicts of Interest (Purchasing/Sales schemes), Illegal Gratuities, Economic Extortion. Governed by FCPA & UK Bribery Act.</td>
                </tr>
                <tr>
                  <td><strong>Financial Statement Fraud</strong></td>
                  <td>~9% (Least Common)</td>
                  <td>~$900,000+ (Catastrophic)</td>
                  <td>Fictitious Revenues, Timing Differences (Channel Stuffing), Concealed Liabilities & Expenses, Improper Disclosures, Improper Asset Valuation. High executive override frequency.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="cheatsheet-section">
            <h3 class="text-base font-bold font-mono text-primary uppercase tracking-wider mb-2">2. Cash Misappropriation Triad: Skimming vs. Larceny vs. Fraudulent Disbursements</h3>
            <table class="cheatsheet-table">
              <thead>
                <tr>
                  <th>Scheme Type</th>
                  <th>Point of Theft</th>
                  <th>Audit Trail in Accounting Records</th>
                  <th>Primary Detective & Preventive Controls</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Skimming</strong></td>
                  <td><strong>Before entry into books (Off-Book)</strong></td>
                  <td>Zero ledger trace; unrecorded sales or accounts receivable shrinkage (lapping).</td>
                  <td>Surprise cash counts, mandatory customer receipts, point-of-sale video surveillance, AR confirmation letters.</td>
                </tr>
                <tr>
                  <td><strong>Cash Larceny</strong></td>
                  <td><strong>After entry into books (On-Book)</strong></td>
                  <td>Imbalances between cash register tape/log and actual cash drawer; falsified reversing entries.</td>
                  <td>Daily bank reconciliation by independent party, dual custody of bank deposit bags, perpetual cash drawer limits.</td>
                </tr>
                <tr>
                  <td><strong>Fraudulent Disbursements</strong></td>
                  <td><strong>Disbursement cycle (Check, ACH, Wire)</strong></td>
                  <td>Bogus invoices, shell vendor payments, altered check payees, phantom employees on payroll.</td>
                  <td>Strict Segregation of Duties (SOD), 3-way matching (PO + Receiving Slip + Vendor Invoice), Positive Pay bank service.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="cheatsheet-section">
            <h3 class="text-base font-bold font-mono text-primary uppercase tracking-wider mb-2">3. Financial Statement Fraud: The 5 Major Classification Schemes</h3>
            <table class="cheatsheet-table">
              <thead>
                <tr>
                  <th>Classification Method</th>
                  <th>Forensic Mechanics</th>
                  <th>Key Red Flags & Analytical Ratios</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1. Fictitious Revenues</strong></td>
                  <td>Recording fabricated sales to phantom customers or booking legitimate customers with side agreements permitting return without penalty.</td>
                  <td>Sudden surge in Accounts Receivable without corresponding cash collections; DSO (Days Sales Outstanding) spikes drastically.</td>
                </tr>
                <tr>
                  <td><strong>2. Timing Differences</strong></td>
                  <td>Premature revenue recognition (recognizing revenue prior to delivery under ASC 606/IFRS 15) or "Channel Stuffing" (forcing excess distributor inventory before quarter-end).</td>
                  <td>Large volume of reversing entries or massive sales returns in the first weeks of the subsequent accounting period.</td>
                </tr>
                <tr>
                  <td><strong>3. Concealed Liabilities</strong></td>
                  <td>Omitting accrued liabilities, unrecorded warranties, improper capitalization of routine operating expenses (WorldCom technique), off-balance-sheet SPEs (Enron).</td>
                  <td>Unusually low ratio of expenses to revenue; sudden decrease in vendor payables with constant or growing operations.</td>
                </tr>
                <tr>
                  <td><strong>4. Improper Disclosures</strong></td>
                  <td>Concealing related-party transactions, pending regulatory litigation, material contingent liabilities, or loan covenant defaults.</td>
                  <td>Vague footnote phrasing, sudden changes in accounting estimates without technical justification, executive loans not disclosed.</td>
                </tr>
                <tr>
                  <td><strong>5. Improper Asset Valuation</strong></td>
                  <td>Overstating inventory (fictitious physical counts), failing to write down impaired goodwill or obsolete inventory, inflating AR net realizable value (understating allowance for doubtful accounts).</td>
                  <td>Inventory turnover declines steadily; widening gap between book value of assets and fair market enterprise value.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="cheatsheet-section">
            <h3 class="text-base font-bold font-mono text-primary uppercase tracking-wider mb-2">4. Specialized Financial Crimes & Scheme Topologies</h3>
            <table class="cheatsheet-table">
              <thead>
                <tr>
                  <th>Domain</th>
                  <th>Scheme Classification</th>
                  <th>Key Modus Operandi & Audit Signatures</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Procurement & Bidding</strong></td>
                  <td><strong>Bid Rigging & Kickbacks</strong></td>
                  <td>Phases: Need Recognition (unnecessary procurement), Specification (tailoring specs to one vendor), Bidding (complementary bids, bid rotation), Submission (opening bids early). Red flags: sequential vendor invoice numbers, PO Box addresses.</td>
                </tr>
                <tr>
                  <td><strong>Cybercrime & Wire Fraud</strong></td>
                  <td><strong>Business Email Compromise (BEC)</strong></td>
                  <td>Targeting AP staff via executive impersonation (CEO Fraud) or compromised vendor email credentials to redirect legitimate electronic fund transfers (ACH/Wire) to offshore mule accounts.</td>
                </tr>
                <tr>
                  <td><strong>Banking & Real Estate</strong></td>
                  <td><strong>Air Loans & Straw Buyers</strong></td>
                  <td>Air Loans: originating mortgage loans for non-existent collateral properties and borrowers using collusive appraisers and title agents. Straw Buyers: using nominee identities with prime credit to acquire over-leveraged properties.</td>
                </tr>
                <tr>
                  <td><strong>Healthcare & Insurance</strong></td>
                  <td><strong>Upcoding & Unbundling</strong></td>
                  <td>Upcoding: billing medical services at a higher diagnostic reimbursement code than actually performed. Unbundling: billing comprehensive medical procedures separately under multiple codes to maximize insurance payouts.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="cheatsheet-section">
            <h3 class="text-base font-bold font-mono text-primary uppercase tracking-wider mb-2">5. Benford's Law First-Digit Mathematical Distribution</h3>
            <p class="text-xs text-text-muted mb-2">Formula: <code>P(d) = log10(1 + 1/d)</code>. Natural, non-constrained numerical datasets follow logarithmic digit distributions:</p>
            <table class="cheatsheet-table">
              <thead>
                <tr><th>Digit</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th></tr>
              </thead>
              <tbody>
                <tr class="font-mono text-center">
                  <td><strong>Expected %</strong></td>
                  <td class="text-primary font-bold">30.1%</td>
                  <td>17.6%</td>
                  <td>12.5%</td>
                  <td>9.7%</td>
                  <td>7.9%</td>
                  <td>6.7%</td>
                  <td>5.8%</td>
                  <td>5.1%</td>
                  <td class="text-rose-400 font-bold">4.6%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `;
    } else if (tab === 'investigations') {
      container.innerHTML = `
        <div class="space-y-6">
          <div class="cheatsheet-section">
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-base font-bold font-mono text-primary uppercase tracking-wider">1. The Four Essential Legal Elements of Fraud & Proof Burdens</h3>
              <span class="text-xs font-mono font-bold px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">Section 2: 120 Qs</span>
            </div>
            <table class="cheatsheet-table">
              <thead>
                <tr><th>Universal Element</th><th>Legal Threshold Definition</th><th>Investigative Evidentiary Requirement</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>1. Material False Statement</strong></td><td>A representation of existing factual reality (not mere puffery or speculative opinion) that substantially affects commercial decisions.</td><td>Documentary record of the falsity (falsified invoice, altered ledger, forged receiving report).</td></tr>
                <tr><td><strong>2. Knowledge / Scienter</strong></td><td>The perpetrator knew the statement was false when making it, or acted with reckless disregard for truth.</td><td>Circumstantial indicators: deleted emails, anti-forensic software, intentional circumvention of dual authorization controls.</td></tr>
                <tr><td><strong>3. Victim Reliance</strong></td><td>The victim reasonably relied upon the misrepresentation when executing transactions or parting with money/assets.</td><td>Executed disbursement vouchers, authorized wire orders, agreements executed based on bogus financial assertions.</td></tr>
                <tr><td><strong>4. Financial Damages</strong></td><td>The victim suffered actual quantifiable economic harm directly caused by reliance.</td><td>Disbursed corporate funds, unrecoverable vendor write-offs, liquidation shortfalls. Without damages, civil fraud fails.</td></tr>
              </tbody>
            </table>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3 text-xs">
              <div class="p-3 bg-surface-hover/30 rounded-xl border border-line">
                <div class="font-bold text-rose-400 mb-1 font-mono uppercase">Criminal Prosecution</div>
                <p class="text-text-muted">Burden: <strong>Beyond a Reasonable Doubt (~99%)</strong>. Brought by state/federal prosecutor. Outcome: Incarceration, fines, mandatory restitution. Requires unanimous jury.</p>
              </div>
              <div class="p-3 bg-surface-hover/30 rounded-xl border border-line">
                <div class="font-bold text-emerald-400 mb-1 font-mono uppercase">Civil Litigation</div>
                <p class="text-text-muted">Burden: <strong>Preponderance of the Evidence (>50%)</strong> or Clear & Convincing (~75%). Brought by victim/corporation. Outcome: Monetary damages, asset recovery, punitive awards.</p>
              </div>
            </div>
          </div>

          <div class="cheatsheet-section">
            <h3 class="text-base font-bold font-mono text-primary uppercase tracking-wider mb-2">2. ACFE Standard Order of Investigation & Predication</h3>
            <div class="p-3 bg-surface-hover/30 rounded-lg text-xs leading-relaxed mb-3">
              Investigations must be founded on <strong>Predication</strong> (totality of circumstances leading a prudent examiner to believe fraud has occurred or is occurring). The process must proceed strictly <strong>from the outside in</strong>:
            </div>
            <table class="cheatsheet-table">
              <thead>
                <tr><th>Sequence</th><th>Interviewee Category</th><th>Investigative Objective & Precautions</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>1st Stage</strong></td><td>Neutral Third-Party Witnesses</td><td>Gather foundational operational documents, establish normal business routines, corroborate facts without tipping off targets.</td></tr>
                <tr><td><strong>2nd Stage</strong></td><td>Corroborative Witnesses</td><td>Verify questioned invoices/receipts, establish custody of suspect vouchers, eliminate innocent explanations or system glitches.</td></tr>
                <tr><td><strong>3rd Stage</strong></td><td>Co-conspirators / Accomplices</td><td>Secure cooperation, lock in testimony against primary target, identify asset concealment locations.</td></tr>
                <tr><td><strong>4th Stage</strong></td><td>Primary Suspect / Target (Last)</td><td>Confront with overwhelming documented evidence, diffuse rationalizations, obtain admission of culpability and signed written confession.</td></tr>
              </tbody>
            </table>
          </div>

          <div class="cheatsheet-section">
            <h3 class="text-base font-bold font-mono text-primary uppercase tracking-wider mb-2">3. The 5 Categories of Interview Questions & The Admission-Seeking Protocol</h3>
            <table class="cheatsheet-table">
              <thead>
                <tr><th>Question Type</th><th>Core Objective & Application</th><th>Example Formulation</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>1. Introductory</strong></td><td>Establish rapport, state neutral inquiry purpose, establish verbal/non-verbal behavioral baseline.</td><td>"Thank you for meeting. We are reviewing accounts payable turnaround workflows."</td></tr>
                <tr><td><strong>2. Informational</strong></td><td>Fact-gathering using open-ended questions (who, what, where, when, why, how).</td><td>"Could you walk me through the approval chain when an expedited invoice arrives?"</td></tr>
                <tr><td><strong>3. Assessment</strong></td><td>Evaluate credibility and observe physical/verbal deception cues on sensitive topics.</td><td>"Why do you think an employee might route vendor checks to an unverified PO Box?"</td></tr>
                <tr><td><strong>4. Closing</strong></td><td>Verify accurate understanding, document additional leads, re-confirm voluntariness.</td><td>"Is there anything else regarding these disbursements that we should examine?"</td></tr>
                <tr><td><strong>5. Admission-Seeking</strong></td><td>Confront suspect, defeat alibis, secure verbal admission and execute signed statement.</td><td>"Arthur, the bank wire records confirm the funds entered your LLC. We need to clarify how this occurred."</td></tr>
              </tbody>
            </table>
            <div class="p-3 bg-surface-hover/30 rounded-xl border border-line mt-3 text-xs space-y-1">
              <div class="font-bold text-primary font-mono uppercase">The 5-Step Admission-Seeking Protocol:</div>
              <ol class="list-decimal list-inside space-y-0.5 text-text-muted">
                <li><strong>Direct Accusation:</strong> State clearly that the investigation resolved the inquiry and the subject is involved.</li>
                <li><strong>Observe Reaction:</strong> Truthful subjects offer immediate, vehement, spontaneous denials; guilty subjects hesitate or offer qualified silence.</li>
                <li><strong>Establish Rationalization:</strong> Offer face-saving themes (financial stress, unfair promotion, family emergency) to lower psychological resistance.</li>
                <li><strong>Alternative Question:</strong> Frame a choice between two actions: one reprehensible (pure greed/drugs) and one morally understandable (family need). Any affirmative answer is an admission!</li>
                <li><strong>Signed Written Statement:</strong> Immediately convert oral confession into a written statement written or dictated by the subject containing intent and voluntariness.</li>
              </ol>
            </div>
          </div>

          <div class="cheatsheet-section">
            <h3 class="text-base font-bold font-mono text-primary uppercase tracking-wider mb-2">4. Constitutional Protections & Corporate Interview Warnings</h3>
            <table class="cheatsheet-table">
              <thead>
                <tr><th>Legal Doctrine / Warning</th><th>Jurisdiction / Setting</th><th>Core Rule & Evidentiary Impact</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>Upjohn Warning ("Corporate Miranda")</strong></td><td>Internal corporate investigation by counsel</td><td>Counsel represents the <strong>company</strong>, not the employee individually. Privilege belongs solely to the entity, which may waive it and hand disclosures to prosecutors.</td></tr>
                <tr><td><strong>Miranda Warnings</strong></td><td>Custodial police interrogation</td><td>Required ONLY during custodial police interrogation. Does not apply to private corporate fraud interviews.</td></tr>
                <tr><td><strong>Garrity Rights</strong></td><td>Public / government sector employee inquiry</td><td>Coerced statements obtained under threat of termination cannot be used in criminal proceedings against the public worker.</td></tr>
                <tr><td><strong>Weingarten Rights</strong></td><td>Unionized workforce representation</td><td>Union employee has the legal right to union representation during an investigatory interview that could result in disciplinary action.</td></tr>
                <tr><td><strong>Kalkines Warning</strong></td><td>Public inquiries with criminal immunity</td><td>When granted use immunity, the public employee is legally compelled to answer all work-related questions or face dismissal.</td></tr>
              </tbody>
            </table>
          </div>

          <div class="cheatsheet-section">
            <h3 class="text-base font-bold font-mono text-primary uppercase tracking-wider mb-2">5. Expert Evidence, FRE 704 & The Daubert Gatekeeper Standard</h3>
            <table class="cheatsheet-table">
              <thead>
                <tr><th>Evidentiary Rule</th><th>Court Application & Mandate</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>Daubert 4-Factor Standard (Rule 702)</strong></td><td>Trial judge acts as gatekeeper: expert methodology must be (1) testable/falsifiable, (2) peer-reviewed & published, (3) subject to known error rates & standards, (4) generally accepted in relevant field. (Kumho Tire applies this to CFEs).</td></tr>
                <tr><td><strong>FRE 704(b) Ultimate Issue Guilt Ban</strong></td><td>Expert witnesses are <strong>strictly prohibited from offering opinions on the guilt or mental state</strong> of criminal defendants. CFE Ethics Canon 6 strictly enforces this.</td></tr>
                <tr><td><strong>FRE 803(6) Business Records Exception</strong></td><td>Accounting ledgers, invoices, and bank records are admissible hearsay if kept in the ordinary, regular course of business activity and authenticated by custodian.</td></tr>
                <tr><td><strong>FRE 1002 Best Evidence Rule</strong></td><td>Original writings/recordings are required to prove content. Forensic bitstream mirror images with matching hashes satisfy this standard.</td></tr>
              </tbody>
            </table>
          </div>

          <div class="cheatsheet-section">
            <h3 class="text-base font-bold font-mono text-primary uppercase tracking-wider mb-2">6. Indirect Proof Methods: Net Worth Method Formula</h3>
            <div class="p-3 bg-surface-hover/30 rounded-xl border border-line text-xs font-mono space-y-1">
              <div class="text-emerald-400 font-bold">Official ACFE Net Worth Formula:</div>
              <div>Current Year Net Worth (Assets - Liabilities) - Prior Year Net Worth = <strong>Net Worth Increase</strong></div>
              <div>Net Worth Increase + Documented Living Expenses = <strong>Total Funds Required</strong></div>
              <div>Total Funds Required - Total Legitimate Income = <strong>Unexplained (Illicit) Funds</strong></div>
            </div>
          </div>

          <div class="cheatsheet-section">
            <h3 class="text-base font-bold font-mono text-primary uppercase tracking-wider mb-2">7. Digital Forensics Integrity & RFC 3227 Volatility Hierarchy</h3>
            <table class="cheatsheet-table">
              <thead>
                <tr><th>Volatility Rank</th><th>Storage Layer (Most Volatile to Least Volatile)</th><th>Forensic Seizure Protocol</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>1st (Most Volatile)</strong></td><td>CPU Registers & L1/L2/L3 Cache</td><td>Destroyed in nanoseconds upon power interruption. Captured live via specialized hardware debuggers.</td></tr>
                <tr><td><strong>2nd</strong></td><td>Physical Memory (RAM)</td><td>Contains unencrypted cryptographic keys, running malware, active network sessions. Captured live via memory dump tools.</td></tr>
                <tr><td><strong>3rd</strong></td><td>Network State & Routing Tables</td><td>Active sockets, open TCP/UDP ports, ARP cache, active VPN tunnels.</td></tr>
                <tr><td><strong>4th</strong></td><td>Temporary File Systems & Swap/Pagefile</td><td>Virtual memory pages and unallocated swap files.</td></tr>
                <tr><td><strong>5th (Least Volatile)</strong></td><td>Non-Volatile Hard Disks (SSD, NVMe, HDD)</td><td>Seized after shutdown (or live bitstream imaging). Hardware write-blockers mandatory.</td></tr>
                <tr><td><strong>6th</strong></td><td>Archival Backups & Remote Logs</td><td>Off-site cloud snapshots, magnetic backup tapes, optical discs.</td></tr>
              </tbody>
            </table>
          </div>

          <div class="cheatsheet-section">
            <h3 class="text-base font-bold font-mono text-primary uppercase tracking-wider mb-2">8. Civil Asset Recovery & Emergency Pre-Judgment Injunctions</h3>
            <table class="cheatsheet-table">
              <thead>
                <tr><th>Emergency Remedy</th><th>Legal Mechanism & Purpose</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>Mareva Injunction</strong></td><td>Worldwide asset freezing order issued ex parte to prevent a fraudster from dissipating, transferring, or offshore-routing stolen funds.</td></tr>
                <tr><td><strong>Anton Piller Order</strong></td><td>Civil search order permitting plaintiff's legal/forensic team to enter premises unannounced to seize and preserve incriminating documents and electronic devices.</td></tr>
                <tr><td><strong>Letters Rogatory</strong></td><td>Formal request under the Hague Evidence Convention to foreign courts to compel bank records or testimony in overseas havens.</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      `;
    } else if (tab === 'prevention') {
      container.innerHTML = `
        <div class="space-y-6">
          <div class="cheatsheet-section">
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-base font-bold font-mono text-primary uppercase tracking-wider">1. Criminology Foundations: Fraud Triangle vs. Fraud Diamond</h3>
              <span class="text-xs font-mono font-bold px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">Section 3: 70 Qs</span>
            </div>
            <table class="cheatsheet-table">
              <thead>
                <tr><th>Dimension</th><th>Cressey (Triangle) / Wolfe-Hermanson (Diamond)</th><th>Organizational Countermeasure</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>Perceived Pressure</strong></td><td>Financial crises, addictions, lifestyle inflation, unshareable burden.</td><td>Employee Assistance Programs (EAP), fair compensation, transparent communication.</td></tr>
                <tr><td><strong>Perceived Opportunity</strong></td><td>Weak internal controls, absence of segregation of duties, management override.</td><td><strong>Directly Controlled:</strong> Segregation of Duties (SOD), mandatory vacations, independent reconciliations.</td></tr>
                <tr><td><strong>Rationalization</strong></td><td>"They owe me", "I am just borrowing it", "Everyone cheats on taxes".</td><td>Tone at the top, enforceable code of conduct, robust whistleblower hotline.</td></tr>
                <tr><td><strong>Capability (Diamond)</strong></td><td>Technical skill, corporate position, ego, stress resilience, deceit competence.</td><td>Background screenings, dual authorization, strict privilege access limits.</td></tr>
              </tbody>
            </table>
          </div>

          <div class="cheatsheet-section">
            <h3 class="text-base font-bold font-mono text-primary uppercase tracking-wider mb-2">2. COSO 2013 Internal Control Integrated Framework (CRIME & 17 Principles)</h3>
            <table class="cheatsheet-table">
              <thead>
                <tr><th>Component (C-R-I-M-E)</th><th>Focus Area</th><th>17 Codified Principles (High-Yield: Principle 8)</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>C — Control Environment</strong></td><td>Tone at the top, ethical values, board oversight, organizational structure.</td><td>1. Commitment to integrity; 2. Board oversight; 3. Management structures; 4. Competent personnel; 5. Accountability enforcement.</td></tr>
                <tr><td><strong>R — Risk Assessment</strong></td><td>Identifying and analyzing operational, financial, and compliance risks.</td><td>6. Clear objectives; 7. Identify and analyze risks; <strong>8. Explicitly assess fraud risk</strong>; 9. Identify and analyze significant changes.</td></tr>
                <tr><td><strong>I — Information & Comm.</strong></td><td>Internal & external dissemination of timely, accurate operational data.</td><td>13. Use relevant information; 14. Communicate internally; 15. Communicate with external parties (regulators/investors).</td></tr>
                <tr><td><strong>M — Monitoring Activities</strong></td><td>Ongoing evaluations verifying control performance and reporting gaps.</td><td>16. Conduct ongoing and separate evaluations; 17. Evaluate and communicate deficiencies to board.</td></tr>
                <tr><td><strong>E — Existing Control Act.</strong></td><td>Policies and procedures mitigating risks to acceptable tolerances.</td><td>10. Select control activities; 11. Select general IT controls; 12. Deploy controls through policies.</td></tr>
              </tbody>
            </table>
          </div>

          <div class="cheatsheet-section">
            <h3 class="text-base font-bold font-mono text-primary uppercase tracking-wider mb-2">3. AU-C 240 / PCAOB AS 2401 / SAS 99: Mandatory Management Override Testing</h3>
            <table class="cheatsheet-table">
              <thead>
                <tr><th>Mandatory Procedure</th><th>Audit Testing Technique</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>1. Examine Journal Entries</strong></td><td>Test journal entries and adjustments made at the end of financial reporting periods, entries made by unauthorized personnel, and entries with round numbers or unusual accounts.</td></tr>
                <tr><td><strong>2. Review Accounting Estimates</strong></td><td>Perform retrospective reviews of significant management estimates (allowance for credit losses, warranty reserves, asset impairment) to detect bias.</td></tr>
                <tr><td><strong>3. Evaluate Unusual Transactions</strong></td><td>Examine the business rationale for significant, complex, or unusual transactions occurring outside the normal course of business.</td></tr>
              </tbody>
            </table>
          </div>

          <div class="cheatsheet-section">
            <h3 class="text-base font-bold font-mono text-primary uppercase tracking-wider mb-2">4. The 5-Step Fraud Risk Assessment (FRA) Framework</h3>
            <div class="p-3 bg-surface-hover/30 rounded-xl border border-line text-xs space-y-1.5">
              <div class="font-bold text-primary font-mono uppercase">Standard 5-Step Assessment Workflow:</div>
              <ol class="list-decimal list-inside space-y-1 text-text-muted">
                <li><strong>Establish Governance:</strong> Appoint assessment team, define scope, and secure board sponsorship.</li>
                <li><strong>Identify Inherent Fraud Risks:</strong> Brainstorm potential schemes across all business units (Misappropriation, Corruption, Financial Reporting).</li>
                <li><strong>Assess Likelihood and Significance:</strong> Rank inherent risks on a 3x3 or 5x5 matrix based on probability and financial/reputational impact.</li>
                <li><strong>Evaluate Mitigating Controls:</strong> Map existing preventive/detective controls against identified risks to determine <strong>Residual Risk</strong>.</li>
                <li><strong>Formulate Action Plan:</strong> Implement corrective measures or enhanced monitoring for unmitigated residual exposures.</li>
              </ol>
            </div>
          </div>

          <div class="cheatsheet-section">
            <h3 class="text-base font-bold font-mono text-primary uppercase tracking-wider mb-2">5. The 8 Mandatory Articles of the ACFE Code of Professional Ethics</h3>
            <table class="cheatsheet-table">
              <thead>
                <tr><th>Article</th><th>Ethical Canon</th><th>Mandatory CFE Rule</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>Article 1</strong></td><td>Professionalism & Diligence</td><td>Demonstrate commitment to professionalism, thoroughness, and due professional care in all engagements.</td></tr>
                <tr><td><strong>Article 2</strong></td><td>Illegal or Unethical Conduct</td><td>Never engage in illegal or unethical conduct, or any activity constituting a conflict of interest. Contingency fees tied to findings of guilt or recovery are strictly prohibited.</td></tr>
                <tr><td><strong>Article 3</strong></td><td>Integrity & Objectivity</td><td>Maintain absolute integrity and objectivity; follow the factual evidence wherever it leads without client bias.</td></tr>
                <tr><td><strong>Article 4</strong></td><td>Truthfulness in Legal Process</td><td>Comply with lawful orders of courts and testify truthfully without bias or selective withholding.</td></tr>
                <tr><td><strong>Article 5</strong></td><td>Competent Evidential Foundation</td><td>Obtain sufficient, competent, and reliable evidence to establish a reasonable basis for all opinions rendered.</td></tr>
                <tr><td><strong>ARTICLE 6 (CRITICAL)</strong></td><td><strong>ABSOLUTE GUILT OPINION BAN</strong></td><td><strong>An examiner shall NOT express an opinion on the guilt or innocence of any suspect!</strong> Guilt is an ultimate legal question reserved solely for the judge or jury.</td></tr>
                <tr><td><strong>Article 7</strong></td><td>Client Confidentiality</td><td>Maintain strict confidentiality regarding client/employer information, except when disclosure is mandated by valid legal process or court order.</td></tr>
                <tr><td><strong>Article 8</strong></td><td>Professional Competence & CPE</td><td>Continually improve professional competence through lifelong learning and mandatory annual CPE compliance.</td></tr>
              </tbody>
            </table>
          </div>

          <div class="cheatsheet-section">
            <h3 class="text-base font-bold font-mono text-primary uppercase tracking-wider mb-2">6. Detection Benchmarks & Hotline Governance (Report to the Nations)</h3>
            <table class="cheatsheet-table">
              <thead>
                <tr><th>Metric</th><th>Empirical Benchmark</th><th>Governance Takeaway</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>Top Detection Method</strong></td><td><strong>Whistleblower Tips (43%)</strong> — over 3x more than internal audit (15%)</td><td>Anonymous hotlines (SOX Section 301) are the single most vital anti-fraud control.</td></tr>
                <tr><td><strong>Typical Scheme Duration</strong></td><td><strong>12 to 14 months</strong> before detection</td><td>Early detective controls dramatically minimize cumulative corporate losses.</td></tr>
                <tr><td><strong>Top Behavioral Red Flag</strong></td><td><strong>Living Beyond Means (39%)</strong> & Financial Difficulties (25%)</td><td>Personal lifestyle audits and behavioral monitoring are critical warning signs.</td></tr>
                <tr><td><strong>Loss by Authority Level</strong></td><td>Executive median loss ($337,000+) vs. Line Employee ($50,000)</td><td>Executive override capability generates by far the highest catastrophic financial destruction.</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      `;
    }
  }

  // -------------------------------------------------------------
  // 7. CFE Exam Cockpit & 3D Flashcard Trainer
  // -------------------------------------------------------------
  initFlashcards() {
    this.flashcards = [];
    if (typeof glossaryData !== 'undefined') {
      glossaryData.forEach(g => {
        this.flashcards.push({
          type: 'Glossary Concept',
          category: g.cat,
          front: g.term,
          backTitle: g.full,
          backBody: g.def,
          source: 'ACFE Standards'
        });
      });
    }
    if (typeof portfolioData !== 'undefined') {
      portfolioData.filter(s => s.type === 'case').forEach(s => {
        this.flashcards.push({
          type: 'Fraud Scheme',
          category: s.schemeGroup,
          front: `${s.code}: ${s.title}`,
          backTitle: s.category,
          backBody: s.description,
          source: 'ACFE Risk Management Tool'
        });
      });
    }
    this.flashcardIndex = 0;
  }

  renderQuiz() {
    this.renderFlashcard();
    this.renderQuizMenu();
  }

  renderFlashcard() {
    const cardEl = document.getElementById('flashcard-card-inner');
    const counterEl = document.getElementById('flashcard-counter');
    const catBadge = document.getElementById('flashcard-cat-badge');
    const frontTerm = document.getElementById('flashcard-front-term');
    const backTitle = document.getElementById('flashcard-back-title');
    const backBody = document.getElementById('flashcard-back-body');
    const backCat = document.getElementById('flashcard-back-cat');

    if (!cardEl || this.flashcards.length === 0) return;

    const card = this.flashcards[this.flashcardIndex];
    this.flashcardFlipped = false;
    cardEl.classList.remove('flipped');

    if (counterEl) counterEl.textContent = `${this.flashcardIndex + 1} / ${this.flashcards.length}`;
    if (catBadge) catBadge.textContent = card.type;
    if (frontTerm) frontTerm.textContent = card.front;
    if (backTitle) backTitle.textContent = card.backTitle;
    if (backBody) backBody.textContent = card.backBody;
    if (backCat) backCat.textContent = `${card.category} • ${card.source}`;
  }

  flipFlashcard() {
    const cardEl = document.getElementById('flashcard-card-inner');
    if (cardEl) {
      this.flashcardFlipped = !this.flashcardFlipped;
      cardEl.classList.toggle('flipped', this.flashcardFlipped);
      this.playSfx('flip');
    }
  }

  nextFlashcard(confidence) {
    if (confidence === 'mastered') {
      this.masteredCards.add(this.flashcardIndex);
      localStorage.setItem('cfe_mastered_cards', JSON.stringify([...this.masteredCards]));
    }
    this.flashcardIndex = (this.flashcardIndex + 1) % this.flashcards.length;
    this.renderFlashcard();
  }

  prevFlashcard() {
    this.flashcardIndex = (this.flashcardIndex - 1 + this.flashcards.length) % this.flashcards.length;
    this.renderFlashcard();
  }

  renderQuizMenu() {
    const box = document.getElementById('exam-menu-container');
    if (!box) return;

    const scores = JSON.parse(localStorage.getItem('cfe-quiz-scores') || '{}');
    const sections = {
      'Section 1: Fraud Schemes and Financial Crimes': { 
        code: 'SCHEMES', 
        questions: 120, 
        time: '2.5h', 
        icon: '💰', 
        badge: 'Official Section 1',
        desc: 'Asset Misappropriation, Corruption & Bribery, Financial Statement Fraud, Procurement/Bid Rigging, Cybercrime & Specialized Schemes.' 
      },
      'Section 2: Fraud Investigations and Legal Issues': { 
        code: 'INVESTIGATION_LEGAL', 
        questions: 120, 
        time: '2.5h', 
        icon: '⚖️', 
        badge: 'Official Section 2 (Unified)',
        desc: 'Evidence Gathering, Digital Forensics (RFC 3227), Interview Protocol & Confessions, Net Worth Method, Daubert Standards & Trial Testimony.' 
      },
      'Section 3: Fraud Prevention and Deterrence': { 
        code: 'PREVENTION', 
        questions: 70, 
        time: '1.5h', 
        icon: '🛡️', 
        badge: 'Official Section 3',
        desc: 'Criminological Theories, COSO 2013 (17 Principles), AU-C 240 / SAS 99 Management Override Testing, FRA 5 Steps, and the 8 ACFE Ethics Articles.' 
      },
      'Comprehensive CFE Simulation (Mixed 310 Q Pool)': { 
        code: 'FULL_SIM', 
        questions: 310, 
        time: '6.5h', 
        icon: '🎓', 
        badge: 'Full CFE Simulation',
        desc: 'Authentic cross-domain practice round pulling situational scenarios and technical standards across all 3 official examination sections.' 
      }
    };

    box.innerHTML = Object.entries(sections).map(([name, cfg]) => {
      const best = scores[name] || 0;
      return `
        <div class="card-surface p-6 rounded-2xl flex flex-col justify-between hover:border-primary/50 transition">
          <div>
            <div class="flex items-center justify-between mb-3">
              <span class="text-3xl">${cfg.icon}</span>
              <div class="flex items-center gap-2">
                <span class="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">${cfg.badge}</span>
                <span class="text-xs font-mono font-bold px-2 py-0.5 rounded ${best >= 75 ? 'bg-emerald-500/15 text-emerald-400' : 'bg-surface-hover text-text-muted'}">
                  Best: ${best}%
                </span>
              </div>
            </div>
            <h4 class="text-lg font-bold text-white font-serif mb-1">${name}</h4>
            <p class="text-xs text-text-muted mb-3 leading-relaxed">${cfg.desc}</p>
            <div class="text-xs font-mono text-emerald-400 font-semibold mb-6">Format: ${cfg.questions} questions · ${cfg.time} · 75% pass mark</div>
          </div>
          <button onclick="app.startQuizRound('${name}')" 
                  class="btn-tactile w-full py-3 rounded-xl bg-primary hover:bg-blue-600 text-white font-bold text-sm shadow-md shadow-primary/20 transition">
            Start 10-Question Scenario Practice
          </button>
        </div>
      `;
    }).join('');
  }

  startQuizRound(sectionKey) {
    this.quizSection = sectionKey;
    this.quizIndex = 0;
    this.quizScore = 0;
    this.quizMissed = [];
    this.quizAnswered = false;

    const pool = [];
    const isSection1 = sectionKey && (sectionKey.includes('Section 1') || sectionKey.includes('Schemes') || sectionKey.includes('Financial'));
    const isSection2 = sectionKey && (sectionKey.includes('Section 2') || sectionKey.includes('Investigations') || sectionKey.includes('Legal') || sectionKey.includes('Law'));
    const isSection3 = sectionKey && (sectionKey.includes('Section 3') || sectionKey.includes('Prevention'));
    const isMixed = !sectionKey || sectionKey.includes('Simulation') || sectionKey.includes('Mixed') || sectionKey === 'ALL';

    // 1. Priority: Authentic Situational Case Scenarios (30 high-yield questions)
    if (typeof cfeScenarioQuestions !== 'undefined') {
      cfeScenarioQuestions.forEach(sq => {
        let matchesSection = false;
        if (isMixed) matchesSection = true;
        else if (isSection1 && (sq.domain.includes('Schemes') || sq.domain.includes('Financial'))) matchesSection = true;
        else if (isSection2 && (sq.domain.includes('Investigations') || sq.domain.includes('Legal') || sq.domain.includes('Law'))) matchesSection = true;
        else if (isSection3 && sq.domain.includes('Prevention')) matchesSection = true;

        if (matchesSection) {
          pool.push({
            q: sq.q,
            correct: sq.correct,
            options: [...sq.options].sort(() => 0.5 - Math.random()),
            explain: sq.explain,
            source: `CFE Scenario: ${sq.domain}`
          });
        }
      });
    }

    // 2. Section 2 Unified: Law & Legal Elements
    if (typeof lawTopics !== 'undefined' && (isMixed || isSection2)) {
      lawTopics.forEach(l => {
        pool.push({
          q: `Under ACFE standards, what is the core legal principle of "${l.title}" (${l.code})?`,
          correct: l.description,
          distractors: this.getRandomLawDefs(l.description, 3),
          explain: `${l.code}: ${l.title} — ${l.description}`,
          source: `Section 2 (Legal Issues): ${l.cat}`
        });
      });
    }

    // 3. Section 2 Unified: Investigation Techniques & Forensics
    if (typeof investigationTopics !== 'undefined' && (isMixed || isSection2)) {
      investigationTopics.forEach(inv => {
        pool.push({
          q: `In CFE investigative methodology, what is the key procedure of "${inv.title}" (${inv.code})?`,
          correct: inv.description,
          distractors: this.getRandomInvDefs(inv.description, 3),
          explain: `${inv.code}: ${inv.title} — ${inv.description}`,
          source: `Section 2 (Investigations): ${inv.cat}`
        });
      });
    }

    // 4. Section 3: Prevention & Deterrence
    if (typeof preventionTopics !== 'undefined' && (isMixed || isSection3)) {
      preventionTopics.forEach(p => {
        pool.push({
          q: `According to fraud deterrence frameworks, what does "${p.title}" (${p.code}) mandate?`,
          correct: p.description,
          distractors: this.getRandomPrevDefs(p.description, 3),
          explain: `${p.code}: ${p.title} — ${p.description}`,
          source: `Section 3 (Prevention): ${p.cat}`
        });
      });
    }

    // 5. Section 1: Fraud Schemes & Financial Crimes
    if (typeof portfolioData !== 'undefined' && (isMixed || isSection1)) {
      portfolioData.filter(s => s.type === 'case').forEach(s => {
        pool.push({
          q: `Which major fraud category does the scheme "${s.title}" belong to?`,
          correct: s.category,
          distractors: ['Asset Misappropriation', 'Financial Statement Fraud', 'Corruption & Bribery', 'Specialized Financial Crime'].filter(c => c !== s.category).slice(0, 3),
          explain: `${s.code} is classified under ${s.category}. ACFE defines it as: ${s.description}`,
          source: `Section 1 (Schemes): ${s.schemeGroup}`
        });
      });
    }

    // Fallback if pool is small
    if (pool.length === 0 && typeof glossaryData !== 'undefined') {
      glossaryData.forEach(g => {
        pool.push({
          q: `In CFE terminology, what is the definition of "${g.term}" (${g.full})?`,
          correct: g.def,
          distractors: this.getRandomGlossaryDefs(g.def, 3),
          explain: `${g.term} (${g.full}): ${g.def}`,
          source: g.cat
        });
      });
    }

    // Shuffle and pick 10
    const shuffled = pool.sort(() => 0.5 - Math.random());
    this.quizQuestions = shuffled.slice(0, 10).map(q => {
      if (q.options) return q;
      const allOpts = [q.correct, ...q.distractors].sort(() => 0.5 - Math.random());
      return { ...q, options: allOpts };
    });

    document.getElementById('exam-active-panel')?.classList.remove('hidden');
    document.getElementById('exam-menu-container')?.classList.add('hidden');
    this.renderQuizQuestion();
  }

  getRandomLawDefs(excludeDef, count) {
    if (typeof lawTopics === 'undefined') return ['Criminal sanction under SOX', 'Evidentiary suppression under FRE', 'Civil tort liability'];
    const candidates = lawTopics.map(l => l.description).filter(d => d !== excludeDef);
    return candidates.sort(() => 0.5 - Math.random()).slice(0, count);
  }

  getRandomInvDefs(excludeDef, count) {
    if (typeof investigationTopics === 'undefined') return ['Digital forensic acquisition', 'Admission-seeking transition', 'Document authenticity verification'];
    const candidates = investigationTopics.map(t => t.description).filter(d => d !== excludeDef);
    return candidates.sort(() => 0.5 - Math.random()).slice(0, count);
  }

  getRandomPrevDefs(excludeDef, count) {
    if (typeof preventionTopics === 'undefined') return ['COSO control environment', 'Segregation of duties mandate', 'Whistleblower hotline protocol'];
    const candidates = preventionTopics.map(p => p.description).filter(d => d !== excludeDef);
    return candidates.sort(() => 0.5 - Math.random()).slice(0, count);
  }

  getRandomGlossaryDefs(excludeDef, count) {
    if (typeof glossaryData === 'undefined') return ['False representation of fact', 'Material concealment', 'Breach of fiduciary duty'];
    const candidates = glossaryData.filter(g => g.def !== excludeDef).map(g => g.def);
    return candidates.sort(() => 0.5 - Math.random()).slice(0, count);
  }

  renderQuizQuestion() {
    const container = document.getElementById('exam-question-body');
    if (!container || this.quizQuestions.length === 0) return;

    if (this.quizIndex >= this.quizQuestions.length) {
      this.finishQuizRound();
      return;
    }

    const q = this.quizQuestions[this.quizIndex];
    this.quizAnswered = false;

    container.innerHTML = `
      <div class="animate-slide-down">
        <div class="flex items-center justify-between text-xs font-mono text-text-muted mb-4 pb-3 border-b border-line">
          <span>Question ${this.quizIndex + 1} of ${this.quizQuestions.length}</span>
          <span class="text-sm font-bold text-primary">Score: ${this.quizScore} / ${this.quizIndex}</span>
        </div>

        <h3 class="text-xl sm:text-2xl font-bold text-white mb-6 leading-relaxed font-serif">${q.q}</h3>

        <div class="space-y-3 mb-6" id="quiz-options-list">
          ${q.options.map((opt, i) => `
            <button onclick="app.selectQuizOption(${i})" 
                    id="quiz-opt-${i}"
                    class="btn-tactile w-full text-left p-4 rounded-xl border border-line hover:border-primary/50 bg-surface text-base text-text transition flex items-start gap-4">
              <span class="w-7 h-7 rounded-full border border-line text-xs font-mono font-bold flex items-center justify-center flex-shrink-0 text-text-muted">
                ${['A', 'B', 'C', 'D'][i]}
              </span>
              <span class="leading-relaxed">${opt}</span>
            </button>
          `).join('')}
        </div>

        <div id="quiz-feedback-box" class="hidden p-4 rounded-xl mb-6 text-sm"></div>

        <div class="flex justify-end">
          <button id="quiz-next-btn" onclick="app.nextQuizQuestion()" 
                  class="hidden btn-tactile px-6 py-3 rounded-xl bg-primary hover:bg-blue-600 text-white font-bold text-sm transition">
            Continue →
          </button>
        </div>
      </div>
    `;
  }

  selectQuizOption(optIndex) {
    if (this.quizAnswered) return;
    this.quizAnswered = true;

    const q = this.quizQuestions[this.quizIndex];
    const selectedText = q.options[optIndex];
    const isCorrect = selectedText === q.correct;

    if (isCorrect) {
      this.quizScore++;
      this.playSfx('success');
    } else {
      this.quizMissed.push({ q: q.q, your: selectedText, correct: q.correct });
      this.playSfx('error');
    }

    // Highlight options
    q.options.forEach((opt, idx) => {
      const btn = document.getElementById(`quiz-opt-${idx}`);
      if (!btn) return;
      if (opt === q.correct) {
        btn.classList.add('border-emerald-500', 'bg-emerald-500/15', 'text-emerald-400');
      } else if (idx === optIndex && !isCorrect) {
        btn.classList.add('border-rose-500', 'bg-rose-500/15', 'text-rose-400');
      }
    });

    const feedBox = document.getElementById('quiz-feedback-box');
    if (feedBox) {
      feedBox.classList.remove('hidden');
      feedBox.className = `p-4 rounded-xl mb-6 text-sm ${isCorrect ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300' : 'bg-rose-500/10 border border-rose-500/30 text-rose-300'}`;
      feedBox.innerHTML = `
        <div class="font-bold mb-1">${isCorrect ? '✓ Correct Answer!' : '✗ Incorrect'}</div>
        <div>${q.explain}</div>
      `;
    }

    document.getElementById('quiz-next-btn')?.classList.remove('hidden');
  }

  nextQuizQuestion() {
    this.quizIndex++;
    this.renderQuizQuestion();
  }

  finishQuizRound() {
    const container = document.getElementById('exam-question-body');
    if (!container) return;

    const total = this.quizQuestions.length;
    const pct = Math.round((this.quizScore / total) * 100);
    const passed = pct >= 75;

    // Save score
    if (this.quizSection) {
      const scores = JSON.parse(localStorage.getItem('cfe-quiz-scores') || '{}');
      if (pct > (scores[this.quizSection] || 0)) {
        scores[this.quizSection] = pct;
        localStorage.setItem('cfe-quiz-scores', JSON.stringify(scores));
      }
    }

    container.innerHTML = `
      <div class="text-center py-8 animate-slide-down">
        <div class="text-5xl mb-4">${passed ? '🏆' : '📚'}</div>
        <h3 class="text-3xl font-serif font-bold text-white mb-2">Practice Session Finished!</h3>
        <p class="text-base text-text-muted mb-6">${passed ? 'Outstanding! You met the 75% CFE Examination passing threshold.' : 'Keep revising! CFE standards require a minimum score of 75%.'}</p>
        
        <div class="inline-flex items-center gap-3 p-4 px-8 rounded-2xl bg-surface border border-line mb-8">
          <span class="text-4xl font-mono font-bold ${passed ? 'text-emerald-400' : 'text-amber-400'}">${pct}%</span>
          <span class="text-sm font-mono text-text-muted text-left">Score:<br>${this.quizScore} of ${total} correct</span>
        </div>

        ${this.quizMissed.length > 0 ? `
          <div class="text-left max-w-xl mx-auto mb-8 bg-surface-hover/30 p-5 rounded-xl border border-line">
            <h4 class="text-xs font-mono font-bold uppercase text-rose-400 mb-3">Review Missed Questions (${this.quizMissed.length})</h4>
            <div class="space-y-3 text-sm">
              ${this.quizMissed.map(m => `
                <div class="p-3 bg-surface rounded-lg border border-line">
                  <div class="font-semibold text-white mb-1">${m.q}</div>
                  <div class="text-xs text-rose-400">Your Answer: ${m.your}</div>
                  <div class="text-xs text-emerald-400 mt-0.5">Correct: ${m.correct}</div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <div class="flex items-center justify-center gap-4">
          <button onclick="document.getElementById('exam-active-panel').classList.add('hidden'); document.getElementById('exam-menu-container').classList.remove('hidden'); app.renderQuizMenu();" 
                  class="btn-tactile px-6 py-2.5 rounded-xl bg-surface hover:bg-surface-hover border border-line text-sm font-bold text-white transition">
            Back to Domains
          </button>
          <button onclick="app.startQuizRound('${this.quizSection}')" 
                  class="btn-tactile px-6 py-2.5 rounded-xl bg-primary hover:bg-blue-600 text-sm font-bold text-white transition">
            Retry Round
          </button>
        </div>
      </div>
    `;
  }

  // -------------------------------------------------------------
  // 8. Glossary View
  // -------------------------------------------------------------
  renderGlossary() {
    const container = document.getElementById('glossary-list-container');
    const searchInput = document.getElementById('glossary-search-input');
    if (!container || typeof glossaryData === 'undefined') return;

    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const filtered = glossaryData.filter(g => 
      !query || 
      g.term.toLowerCase().includes(query) || 
      g.full.toLowerCase().includes(query) || 
      g.def.toLowerCase().includes(query)
    );

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="p-8 text-center text-text-muted text-sm font-mono">
          No glossary terms match "${query}".
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(g => `
      <div class="card-surface p-5 rounded-xl border border-line hover:border-primary/40 transition">
        <div class="flex items-start justify-between gap-4">
          <div>
            <div class="flex items-center gap-2.5 mb-1.5">
              <span class="font-mono text-base font-bold text-white">${g.term}</span>
              <span class="text-sm font-serif text-text-muted">(${g.full})</span>
            </div>
            <p class="text-sm text-text leading-relaxed">${g.def}</p>
          </div>
          <span class="text-xs font-mono font-bold px-2.5 py-1 rounded bg-primary/10 text-primary border border-primary/20 flex-shrink-0">
            ${g.cat}
          </span>
        </div>
      </div>
    `).join('');
  }

  // -------------------------------------------------------------
  // 9. Bookmarks View
  // -------------------------------------------------------------
  renderBookmarks() {
    const container = document.getElementById('bookmarks-list-container');
    if (!container) return;

    if (this.bookmarks.size === 0) {
      container.innerHTML = `
        <div class="card-surface p-12 text-center rounded-2xl">
          <div class="text-4xl mb-3">⭐</div>
          <h3 class="text-xl font-bold font-serif text-white mb-2">No Bookmarks Saved Yet</h3>
          <p class="text-sm text-text-muted max-w-md mx-auto">
            Click the star button on any scheme, case study, or term to build your personal high-priority revision deck for the CFE examination.
          </p>
        </div>
      `;
      return;
    }

    const items = [];
    this.bookmarks.forEach(bm => {
      const [type, id] = bm.split(':');
      if (type === 'scheme' && typeof portfolioData !== 'undefined') {
        const s = portfolioData.find(x => x.id === parseInt(id));
        if (s) items.push({ type: 'Scheme', id: s.id, code: s.code, title: s.title, desc: s.description, action: () => this.selectScheme(s.id) });
      } else if (type === 'case' && typeof caseStudies !== 'undefined') {
        const c = caseStudies.find(x => x.id === id);
        if (c) items.push({ type: 'Case', id: c.id, code: c.loss ? c.loss.split(' ')[0] : 'Case', title: c.company, desc: c.summary, action: () => this.selectCase(c.id) });
      }
    });

    container.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        ${items.map(it => `
          <div class="card-surface p-5 rounded-xl flex items-start justify-between gap-4">
            <div class="cursor-pointer flex-1" onclick="(${it.action})(); app.switchView('${it.type === 'Scheme' ? 'schemes' : 'cases'}')">
              <div class="flex items-center gap-2.5 mb-1.5">
                <span class="text-xs font-mono font-bold px-2 py-0.5 rounded bg-primary/10 text-primary">${it.code}</span>
                <span class="text-xs font-mono text-text-muted">${it.type}</span>
              </div>
              <h4 class="text-base font-bold text-white hover:text-primary transition">${it.title}</h4>
              <p class="text-sm text-text-muted line-clamp-2 mt-1">${it.desc}</p>
            </div>
            <button onclick="app.toggleBookmark('${it.type.toLowerCase()}', '${it.id}')" class="text-amber-400 hover:text-text-muted transition text-lg">★</button>
          </div>
        `).join('')}
      </div>
    `;
  }

  // -------------------------------------------------------------
  // Command Palette (Ctrl+K)
  // -------------------------------------------------------------
  toggleCommandPalette(forceState) {
    this.commandPaletteOpen = forceState !== undefined ? forceState : !this.commandPaletteOpen;
    const modal = document.getElementById('command-palette-modal');
    const input = document.getElementById('command-palette-input');

    if (modal) {
      modal.classList.toggle('hidden', !this.commandPaletteOpen);
      if (this.commandPaletteOpen && input) {
        input.value = '';
        input.focus();
        this.renderCommandResults('');
      }
    }
  }

  renderCommandResults(query) {
    const list = document.getElementById('command-palette-results');
    if (!list) return;

    const q = query.toLowerCase().trim();
    const results = [];

    // Quick Navigation & Tools
    const quickActions = [
      {
        keys: ['cheat', 'cram', 'sheet', 'print', 'exam', 'summary', 'manual'],
        type: 'Exam Tool',
        title: '📋 CFE High-Yield Reference Cheatsheet & Print Guide',
        subtitle: 'Official 3-Section ACFE 2026 Cram Guide (Schemes, Investigations & Law, Prevention)',
        action: () => app.openCheatsheet()
      },
      {
        keys: ['apex', 'sim', 'ghost', 'vendor', 'drill', 'investigation'],
        type: 'Interactive Drill',
        title: '🔍 Case Investigation Simulator: "The Ghost Vendor Incident"',
        subtitle: 'Apex Logistics LLC shell company investigation workbench',
        action: () => { app.switchView('tools'); setTimeout(() => document.getElementById('case-simulator-section')?.scrollIntoView({ behavior: 'smooth' }), 100); }
      },
      {
        keys: ['benford', 'digit', 'anomaly', 'first'],
        type: 'Forensic Lab',
        title: '🧪 Benford\'s Law First-Digit Analyzer',
        subtitle: 'Mathematical forensic distribution diagnostic',
        action: () => { app.switchView('tools'); setTimeout(() => document.getElementById('benford-chart-container')?.scrollIntoView({ behavior: 'smooth' }), 100); }
      },
      {
        keys: ['sound', 'sfx', 'audio', 'mute'],
        type: 'Preference',
        title: '🔊 Toggle Haptic Audio Sound Effects',
        subtitle: 'Enable or disable offline synthesized sound effects',
        action: () => app.toggleSfx()
      }
    ];

    quickActions.forEach(qa => {
      if (!q || qa.keys.some(k => k.includes(q)) || qa.title.toLowerCase().includes(q) || qa.subtitle.toLowerCase().includes(q)) {
        results.push(qa);
      }
    });

    // Search Schemes
    if (typeof portfolioData !== 'undefined') {
      portfolioData.forEach(s => {
        if (!q || s.title.toLowerCase().includes(q) || s.code.toLowerCase().includes(q)) {
          results.push({
            type: 'Scheme',
            title: `${s.code}: ${s.title}`,
            subtitle: s.category,
            action: () => { app.selectScheme(s.id); app.switchView('schemes'); }
          });
        }
      });
    }

    // Search Cases
    if (typeof caseStudies !== 'undefined') {
      caseStudies.forEach(c => {
        if (!q || (c.company && c.company.toLowerCase().includes(q)) || (c.summary && c.summary.toLowerCase().includes(q))) {
          results.push({
            type: 'Real Case',
            title: `${c.company} (${c.year || 'Case'})`,
            subtitle: `Loss: ${c.loss || 'Undisclosed'}`,
            action: () => { app.selectCase(c.id); app.switchView('cases'); }
          });
        }
      });
    }

    // Search Law, Statutes & Ethics
    if (typeof lawTopics !== 'undefined') {
      lawTopics.forEach(l => {
        if (!q || l.title.toLowerCase().includes(q) || l.code.toLowerCase().includes(q) || (l.description && l.description.toLowerCase().includes(q))) {
          results.push({
            type: 'Law & Ethics',
            title: `${l.code}: ${l.title}`,
            subtitle: l.cat,
            action: () => { app.selectLaw(l.id); app.switchView('law'); }
          });
        }
      });
    }

    // Search Investigation Topics
    if (typeof investigationTopics !== 'undefined') {
      investigationTopics.forEach(t => {
        if (!q || t.title.toLowerCase().includes(q) || t.code.toLowerCase().includes(q)) {
          results.push({
            type: 'Investigation',
            title: `${t.code}: ${t.title}`,
            subtitle: t.cat,
            action: () => { app.selectInvestigation(t.id); app.switchView('investigation'); }
          });
        }
      });
    }

    // Search Glossary
    if (typeof glossaryData !== 'undefined') {
      glossaryData.forEach(g => {
        if (!q || g.term.toLowerCase().includes(q) || g.full.toLowerCase().includes(q)) {
          results.push({
            type: 'Glossary',
            title: `${g.term}: ${g.full}`,
            subtitle: g.def,
            action: () => {
              app.switchView('glossary');
              const gInput = document.getElementById('glossary-search-input');
              if (gInput) { gInput.value = g.term; app.renderGlossary(); }
            }
          });
        }
      });
    }

    const limited = results.slice(0, 8);
    if (limited.length === 0) {
      list.innerHTML = `<div class="p-4 text-center text-sm text-text-muted font-mono">No matches found for "${query}"</div>`;
      return;
    }

    list.innerHTML = limited.map((res, i) => `
      <div onclick="(${res.action})(); app.toggleCommandPalette(false);" 
           class="p-3.5 rounded-lg hover:bg-surface-hover cursor-pointer transition flex items-center justify-between gap-3 text-sm">
        <div class="min-w-0">
          <div class="font-bold text-white truncate">${res.title}</div>
          <div class="text-xs text-text-muted truncate mt-0.5">${res.subtitle}</div>
        </div>
        <span class="text-xs font-mono px-2 py-0.5 rounded bg-surface border border-line text-text-subtle flex-shrink-0">${res.type}</span>
      </div>
    `).join('');
  }

  closeModal() {
    this.toggleCommandPalette(false);
  }
}

// Global Application Instance
const app = new FraudApp();
window.addEventListener('DOMContentLoaded', () => {
  app.init();
});
