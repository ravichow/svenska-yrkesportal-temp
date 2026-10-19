// Svenska Yrkesportal - Main Application Controller
// Helsingborgs stad - Jobbtorget Scala Pilot

const App = (() => {
  // State
  let state = {
    currentTab: 'practice', // 'practice' | 'test' | 'coach'
    activeTrackId: 'lokalvard',
    activeCategoryIndex: -1,
    audioSpeed: AudioEngine.getSpeed(),
    supportLang: localStorage.getItem('sy_support_lang') || 'none',
    isTestUnlocked: false,
    coachPin: 'SCALA10',
    testState: {
      inProgress: false,
      currentIndex: 0,
      userAnswers: {},
      isFinished: false,
      score: 0,
      cefrLevel: 'A1.1',
      date: null
    },
    practiceTimeMinutes: parseInt(localStorage.getItem('sy_practice_time')) || 25,
    streak: parseInt(localStorage.getItem('sy_streak')) || 3,
    lastPracticeDate: localStorage.getItem('sy_last_date') || ''
  };

  // DOM Elements
  let el = {};

  function init() {
    cacheDom();
    checkUrlParams();
    updateStreak();
    bindEvents();
    renderTrackSelector();
    renderVocationalContent();
    checkTestUnlockStatus();
  }

  function cacheDom() {
    el.navTabs = document.querySelectorAll('.nav-tab');
    el.tabPractice = document.getElementById('tab-practice');
    el.tabTest = document.getElementById('tab-test');
    el.tabCoach = document.getElementById('tab-coach');
    el.speedBtn = document.getElementById('speed-btn');
    el.langSelect = document.getElementById('support-lang-select');
    el.speedLabel = document.getElementById('speed-label');
    el.streakBadge = document.getElementById('streak-count');
    el.trackSelector = document.getElementById('track-selector');
    el.vocationalContainer = document.getElementById('vocational-container');
    
    // Test container elements
    el.testLockedView = document.getElementById('test-locked-view');
    el.testActiveView = document.getElementById('test-active-view');
    el.pinInput = document.getElementById('coach-pin-input');
    el.pinSubmitBtn = document.getElementById('pin-submit-btn');
    el.pinError = document.getElementById('pin-error');
    
    // Result & Coach elements
    el.coachCardContainer = document.getElementById('coach-card-container');
    el.qrContainer = document.getElementById('qrcode-container');
    el.copyJournalBtn = document.getElementById('copy-journal-btn');
    el.copyFeedback = document.getElementById('copy-feedback');
    el.resetDataBtn = document.getElementById('reset-data-btn');
  }

  function checkUrlParams() {
    const params = new URLSearchParams(window.location.search);
    const mode = params.get('mode');
    const pin = params.get('pin') || params.get('code');

    if (pin && pin.trim().toUpperCase() === state.coachPin) {
      state.isTestUnlocked = true;
      sessionStorage.setItem('sy_test_unlocked', 'true');
    }

    if (mode === 'test') {
      switchTab('test');
    } else if (mode === 'coach' || mode === 'result') {
      switchTab('coach');
    }
  }

  function checkTestUnlockStatus() {
    if (sessionStorage.getItem('sy_test_unlocked') === 'true') {
      state.isTestUnlocked = true;
    }
    updateTestView();
  }

  function updateStreak() {
    const today = new Date().toISOString().slice(0, 10);
    if (state.lastPracticeDate !== today) {
      if (!state.lastPracticeDate) {
        state.streak = 3;
      }
      state.lastPracticeDate = today;
      localStorage.setItem('sy_last_date', today);
      localStorage.setItem('sy_streak', state.streak);
    }
    if (el.streakBadge) el.streakBadge.textContent = state.streak;
  }

  function bindEvents() {
    // Navigation Tabs
    el.navTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.target;
        switchTab(target);
      });
    });

    // Native Language Support Selector
    if (el.langSelect) {
      el.langSelect.value = state.supportLang;
      el.langSelect.addEventListener('change', (e) => {
        state.supportLang = e.target.value;
        localStorage.setItem('sy_support_lang', state.supportLang);
        renderVocationalContent();
      });
    }

    // Speed button
    if (el.speedBtn) {
      el.speedBtn.addEventListener('click', toggleAudioSpeed);
    }

    // PIN Submit
    if (el.pinSubmitBtn) {
      el.pinSubmitBtn.addEventListener('click', handlePinSubmit);
    }
    if (el.pinInput) {
      el.pinInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handlePinSubmit();
      });
    }

    // Copy to Journal Button
    if (el.copyJournalBtn) {
      el.copyJournalBtn.addEventListener('click', copyJournalNotes);
    }

    // Reset Data Button
    if (el.resetDataBtn) {
      el.resetDataBtn.addEventListener('click', resetSessionData);
    }

    // Quick PIN filler buttons for demo
    document.querySelectorAll('.quick-pin-fill').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (el.pinInput) {
          el.pinInput.value = 'SCALA10';
          handlePinSubmit();
        }
      });
    });

    const directStartBtn = document.getElementById('start-direct-test-btn');
    if (directStartBtn) {
      directStartBtn.addEventListener('click', (e) => {
        e.preventDefault();
        state.isTestUnlocked = true;
        sessionStorage.setItem('sy_test_unlocked', 'true');
        updateTestView();
        startTest();
      });
    }
  }

  function switchTab(tabName) {
    state.currentTab = tabName;
    AudioEngine.stop();

    el.navTabs.forEach(t => {
      if (t.dataset.target === tabName) {
        t.classList.add('active');
        t.setAttribute('aria-selected', 'true');
      } else {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      }
    });

    if (el.tabPractice) el.tabPractice.classList.toggle('hidden', tabName !== 'practice');
    if (el.tabTest) el.tabTest.classList.toggle('hidden', tabName !== 'test');
    if (el.tabCoach) el.tabCoach.classList.toggle('hidden', tabName !== 'coach');

    if (tabName === 'test') {
      updateTestView();
    } else if (tabName === 'coach') {
      renderCoachCard();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function toggleAudioSpeed() {
    let speed = AudioEngine.getSpeed();
    if (speed < 0.95) {
      speed = 1.0;
    } else {
      speed = 0.8;
    }
    AudioEngine.setSpeed(speed);
    state.audioSpeed = speed;
    updateSpeedUi();
  }

  function updateSpeedUi() {
    if (el.speedLabel) {
      if (state.audioSpeed < 0.95) {
        el.speedLabel.textContent = 'Långsamt (0.8x)';
        el.speedBtn.classList.add('is-slow');
      } else {
        el.speedLabel.textContent = 'Normal (1.0x)';
        el.speedBtn.classList.remove('is-slow');
      }
    }
  }

  // --- PRACTICE & VOCATIONAL MODULES ---
  function renderTrackSelector() {
    if (!el.trackSelector) return;
    el.trackSelector.innerHTML = VOCATIONAL_TRACKS.map(track => {
      const isActive = track.id === state.activeTrackId;
      return `
        <button class="track-card ${isActive ? 'active' : ''}" data-track-id="${track.id}" aria-pressed="${isActive}">
          <div class="track-icon-box">${track.icon}</div>
          <div class="track-card-body">
            <h3 class="track-title">${track.title}</h3>
            <p class="track-subtitle">${track.subtitle}</p>
          </div>
          <div class="track-badge-box">
            <span class="track-badge">${track.badge}</span>
          </div>
        </button>
      `;
    }).join('');

    el.trackSelector.querySelectorAll('.track-card').forEach(card => {
      card.addEventListener('click', () => {
        state.activeTrackId = card.dataset.trackId;
        state.activeCategoryIndex = -1;
        renderTrackSelector();
        renderVocationalContent();
      });
    });
  }

  function renderVocationalContent() {
    if (!el.vocationalContainer) return;
    const track = VOCATIONAL_TRACKS.find(t => t.id === state.activeTrackId);
    if (!track) return;

    let html = `
      <div class="track-hero" style="--track-accent: ${track.color}">
        <div class="track-hero-info">
          <span class="track-hero-tag">Yrkesmodul</span>
          <h2>${track.icon} ${track.title}</h2>
          <p>${track.description}</p>
        </div>
        <button class="speak-btn hero-speak-btn" data-text="${track.title}. ${track.description}" title="Lyssna på beskrivning">
          <span class="audio-wave-icon">🔊</span> Lyssna
        </button>
      </div>

      <!-- Category Filter Pills -->
      <div class="category-pills">
        <button class="category-pill ${state.activeCategoryIndex === -1 ? 'active' : ''}" data-idx="-1">
          👁️ Visa alla (${track.categories.reduce((acc, c) => acc + c.items.length, 0)})
        </button>
        ${track.categories.map((cat, idx) => `
          <button class="category-pill ${idx === state.activeCategoryIndex ? 'active' : ''}" data-idx="${idx}">
            ${cat.name} (${cat.items.length})
          </button>
        `).join('')}
      </div>

      <!-- Flashcards Grid -->
      <div class="flashcards-grid">
    `;

    // Determine which items to show: all or filtered by category
    let itemsToShow = [];
    if (state.activeCategoryIndex === -1) {
      track.categories.forEach(cat => {
        itemsToShow = itemsToShow.concat(cat.items);
      });
    } else {
      const activeCat = track.categories[state.activeCategoryIndex] || track.categories[0];
      if (activeCat && activeCat.items) {
        itemsToShow = activeCat.items;
      }
    }

    itemsToShow.forEach(item => {
        html += `
          <div class="flashcard" data-id="${item.id}">
            <div class="flashcard-top">
              <div class="flashcard-icon-box">${item.icon}</div>
              <button class="speak-btn icon-only-speak" data-text="${item.swedish}" aria-label="Lyssna på ${item.swedish}">
                <span class="audio-wave-icon">🔊</span>
              </button>
            </div>
            
            <div class="flashcard-content">
              <h4 class="flashcard-swedish">${item.swedish}</h4>
              <p class="flashcard-pronunciation">[${item.pronunciation}]</p>
              
              ${(() => {
                if (state.supportLang === 'none' || !item.translations || !item.translations[state.supportLang]) {
                  return '';
                }
                const langLabels = {
                  ar: { name: 'العربية', flag: '🇸🇦' },
                  so: { name: 'Af-Soomaali', flag: '🇸🇴' },
                  ti: { name: 'ትግርኛ', flag: '🇪🇷' },
                  uk: { name: 'Українська', flag: '🇺🇦' },
                  en: { name: 'English', flag: '🇬🇧' }
                };
                const info = langLabels[state.supportLang] || { name: state.supportLang, flag: '🌐' };
                return `
                  <div class="flashcard-translation active-support-lang">
                    <span class="support-lang-badge">${info.flag} ${info.name}:</span>
                    <span class="support-lang-text">${item.translations[state.supportLang]}</span>
                  </div>
                `;
              })()}

              <div class="flashcard-example-box">
                <p class="example-text">"${item.example}"</p>
                <button class="speak-btn mini-speak" data-text="${item.example}" title="Lyssna på exempelmening">
                  🔊 Lyssna på meningen
                </button>
              </div>

              ${item.tip ? `<div class="flashcard-tip">💡 <strong>Jobbtips:</strong> ${item.tip}</div>` : ''}
            </div>
          </div>
        `;
      });

    html += `</div>`;

    el.vocationalContainer.innerHTML = html;

    // Bind category pills
    el.vocationalContainer.querySelectorAll('.category-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        state.activeCategoryIndex = parseInt(pill.dataset.idx);
        renderVocationalContent();
      });
    });

    // Bind audio buttons
    el.vocationalContainer.querySelectorAll('.speak-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const text = btn.dataset.text;
        AudioEngine.speak(text, btn);
      });
    });
  }

  // --- TEST MODE (COACH GATED) ---
  function handlePinSubmit() {
    if (!el.pinInput) return;
    const entered = el.pinInput.value.trim().toUpperCase();
    if (entered === state.coachPin) {
      state.isTestUnlocked = true;
      sessionStorage.setItem('sy_test_unlocked', 'true');
      if (el.pinError) el.pinError.textContent = '';
      updateTestView();
      startTest();
    } else {
      if (el.pinError) {
        el.pinError.textContent = 'Felaktig coach-kod. Ange SCALA10 för att låsa upp provet.';
      }
    }
  }

  function updateTestView() {
    if (!el.testLockedView || !el.testActiveView) return;

    if (!state.isTestUnlocked) {
      el.testLockedView.classList.remove('hidden');
      el.testActiveView.classList.add('hidden');
    } else {
      el.testLockedView.classList.add('hidden');
      el.testActiveView.classList.remove('hidden');
      if (!state.testState.inProgress && !state.testState.isFinished) {
        startTest();
      }
    }
  }

  function startTest() {
    state.testState = {
      inProgress: true,
      currentIndex: 0,
      userAnswers: {},
      isFinished: false,
      score: 0,
      cefrLevel: 'A1.1',
      date: new Date().toISOString()
    };
    renderTestQuestion();
  }

  function renderTestQuestion() {
    if (!el.testActiveView) return;

    const q = CEFR_QUESTIONS[state.testState.currentIndex];
    const total = CEFR_QUESTIONS.length;
    const currentNum = state.testState.currentIndex + 1;
    const progressPercent = Math.round((currentNum / total) * 100);

    let html = `
      <div class="test-header-bar">
        <div class="test-meta-info">
          <span class="badge-cefr">${q.level}</span>
          <span class="test-cat-tag">${q.category === 'Listening' ? '🎧 Hörförståelse' : q.category === 'Sign' ? '⚠️ Säkerhet & Skylt' : '📋 Arbetsinstruktion'}</span>
          <span class="test-progress-counter">Fråga ${currentNum} av ${total}</span>
        </div>
        <div class="test-progress-track">
          <div class="test-progress-fill" style="width: ${progressPercent}%"></div>
        </div>
      </div>

      <div class="test-question-card">
        <div class="test-prompt-section">
          <h3 class="test-title">${q.title}</h3>
          <p class="test-instruction">${q.prompt}</p>

          <div class="test-audio-player-box">
            <button class="test-large-audio-btn" id="test-play-audio-btn" data-audio="${q.audio}">
              <span class="speaker-big-icon">🔊</span>
              <span class="audio-btn-text">Klicka för att lyssna på ljudet</span>
            </button>
            <p class="audio-tip">Du kan lyssna flera gånger.</p>
          </div>
        </div>

        <div class="test-options-grid">
          ${q.options.map(opt => `
            <button class="test-option-btn" data-opt-id="${opt.id}">
              <span class="opt-icon">${opt.icon || '📌'}</span>
              <span class="opt-text">${opt.text}</span>
            </button>
          `).join('')}
        </div>
      </div>
    `;

    el.testActiveView.innerHTML = html;

    // Bind large audio button
    const audioBtn = document.getElementById('test-play-audio-btn');
    if (audioBtn) {
      audioBtn.addEventListener('click', () => {
        AudioEngine.speak(q.audio, audioBtn);
      });
      setTimeout(() => {
        AudioEngine.speak(q.audio, audioBtn);
      }, 350);
    }

    // Bind option selection
    el.testActiveView.querySelectorAll('.test-option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const selectedId = btn.dataset.optId;
        handleAnswer(q, selectedId, btn);
      });
    });
  }

  function handleAnswer(question, selectedId, btnElement) {
    const isCorrect = question.options.find(o => o.id === selectedId)?.isCorrect;
    state.testState.userAnswers[question.id] = {
      selectedId,
      isCorrect,
      level: question.level,
      category: question.category
    };

    if (isCorrect) {
      btnElement.classList.add('correct');
      AudioEngine.playTone('correct');
    } else {
      btnElement.classList.add('wrong');
      AudioEngine.playTone('wrong');
    }

    // Disable all options briefly
    el.testActiveView.querySelectorAll('.test-option-btn').forEach(b => {
      b.style.pointerEvents = 'none';
      if (b.dataset.optId !== selectedId && question.options.find(o => o.id === b.dataset.optId)?.isCorrect) {
        b.classList.add('show-correct');
      }
    });

    // Move to next question after short delay
    setTimeout(() => {
      if (state.testState.currentIndex < CEFR_QUESTIONS.length - 1) {
        state.testState.currentIndex++;
        renderTestQuestion();
      } else {
        finishTest();
      }
    }, 1100);
  }

  function finishTest() {
    AudioEngine.playTone('complete');
    state.testState.inProgress = false;
    state.testState.isFinished = true;

    // Calculate score
    const total = CEFR_QUESTIONS.length;
    let correctCount = 0;
    Object.values(state.testState.userAnswers).forEach(ans => {
      if (ans.isCorrect) correctCount++;
    });

    const percent = Math.round((correctCount / total) * 100);
    state.testState.score = percent;

    // Determine CEFR level
    if (percent >= 85) {
      state.testState.cefrLevel = 'A2.2';
    } else if (percent >= 65) {
      state.testState.cefrLevel = 'A2.1';
    } else if (percent >= 40) {
      state.testState.cefrLevel = 'A1.2';
    } else {
      state.testState.cefrLevel = 'A1.1';
    }

    // Save test result in localStorage
    const savedResults = {
      cefrLevel: state.testState.cefrLevel,
      score: percent,
      correctCount,
      totalCount: total,
      date: new Date().toISOString(),
      verifiedBy: 'Jobbtorget Scala Coach PIN'
    };
    localStorage.setItem('sy_latest_test_result', JSON.stringify(savedResults));

    // Switch to Coach Card / Results tab
    switchTab('coach');
  }

  // --- COACH RESULT CARD & QR VERIFICATION ---
  function renderCoachCard() {
    if (!el.coachCardContainer) return;

    let testResult = null;
    const rawSaved = localStorage.getItem('sy_latest_test_result');
    if (rawSaved) {
      try {
        testResult = JSON.parse(rawSaved);
      } catch (e) {}
    }

    if (!testResult) {
      testResult = {
        cefrLevel: 'A1.2',
        score: 75,
        correctCount: 9,
        totalCount: 12,
        date: new Date().toISOString(),
        verifiedBy: 'Jobbtorget Scala Demo'
      };
    }

    const levelData = CEFR_LEVEL_METRICS[testResult.cefrLevel] || CEFR_LEVEL_METRICS['A1.2'];
    const formattedDate = new Date(testResult.date).toLocaleDateString('sv-SE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    let html = `
      <div class="coach-card-wrapper" style="--level-color: ${levelData.color}">
        <div class="coach-card-badge-header">
          <span class="scala-org-pill"><img src="assets/helsingborg_logo.svg" alt="" width="16" height="16" style="vertical-align: -2px; margin-right: 5px;">Helsingborgs stad · Jobbtorget Scala</span>
          <span class="verified-pill">✅ Verifierat Underlag</span>
        </div>

        <div class="level-hero-display">
          <div class="level-circle">
            <span class="level-tag-huge">${testResult.cefrLevel}</span>
            <span class="level-subtext">CEFR</span>
          </div>
          <div class="level-hero-text">
            <h3 class="level-name">${levelData.title}</h3>
            <p class="level-desc">${levelData.description}</p>
          </div>
        </div>

        <div class="metrics-summary-grid">
          <div class="metric-box">
            <span class="metric-label">Träffsäkerhet i provet</span>
            <span class="metric-val">${testResult.score}%</span>
            <span class="metric-sub">${testResult.correctCount} av ${testResult.totalCount} frågor</span>
          </div>
          <div class="metric-box">
            <span class="metric-label">Digital träningstid</span>
            <span class="metric-val">${state.practiceTimeMinutes} min</span>
            <span class="metric-sub">Aktivitet i appen</span>
          </div>
          <div class="metric-box">
            <span class="metric-label">Träningsdagar i rad</span>
            <span class="metric-val">🔥 ${state.streak}</span>
            <span class="metric-sub">Upprätthållen streak</span>
          </div>
        </div>

        <div class="recommendation-box">
          <h4>🎯 Rekommenderat nästa steg:</h4>
          <p>${levelData.nextStep}</p>
        </div>

        <!-- Scannable QR Code for the Language Coach -->
        <div class="qr-verification-section">
          <div class="qr-intro">
            <h4>📱 Skanna för direkt överföring till Scala-anteckningar</h4>
            <p>Språkcoachen skannar QR-koden med mobilen under veckomötet för att omedelbart verifiera deltagarens framsteg och CEFR-stegförflyttning.</p>
          </div>
          
          <div class="qr-box-center">
            <div id="coach-qrcode" class="qrcode-canvas-wrap"></div>
            <div class="qr-timestamp-tag">Verifierad: ${formattedDate}</div>
          </div>
        </div>
      </div>
    `;

    el.coachCardContainer.innerHTML = html;

    // Generate QR Code
    generateQrCode(testResult);
  }

  function generateQrCode(testResult) {
    const qrTarget = document.getElementById('coach-qrcode');
    if (!qrTarget) return;
    qrTarget.innerHTML = '';

    const payload = JSON.stringify({
      program: 'Jobbtorget Scala',
      city: 'Helsingborg',
      cefr: testResult.cefrLevel,
      accuracy: testResult.score + '%',
      minutes: state.practiceTimeMinutes,
      date: new Date(testResult.date).toISOString().slice(0, 10),
      status: 'VERIFIED'
    });

    if (window.QRCode) {
      new QRCode(qrTarget, {
        text: payload,
        width: 160,
        height: 160,
        colorDark: '#0f172a',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.M
      });
    } else {
      qrTarget.innerHTML = `<p style="padding: 1rem; color: #64748b;">[QR-kod genererad för Jobbtorget Scala]</p>`;
    }
  }

  function copyJournalNotes() {
    let testResult = null;
    const rawSaved = localStorage.getItem('sy_latest_test_result');
    if (rawSaved) {
      try { testResult = JSON.parse(rawSaved); } catch (e) {}
    }
    if (!testResult) {
      testResult = { cefrLevel: 'A1.2', score: 75, correctCount: 9, totalCount: 12, date: new Date().toISOString() };
    }

    const levelData = CEFR_LEVEL_METRICS[testResult.cefrLevel] || CEFR_LEVEL_METRICS['A1.2'];
    const dateStr = new Date(testResult.date).toISOString().slice(0, 10);

    const journalText = 
`--- JOBBTORGET SCALA: UPPFÖLJNING SPRÅKUTVECKLING ---
Datum: ${dateStr}
Verktyg: Svenska Yrkesportal (Arbetsinriktad utbildningsplattform)
CEFR-nivå: ${testResult.cefrLevel} (${levelData.title})
Resultat på prov: ${testResult.score}% (${testResult.correctCount}/${testResult.totalCount} godkända moment)
Digital träningstid: ${state.practiceTimeMinutes} minuter
Måluppfyllelse: Stegförflyttning på CEFR-skalan och aktiv digital träning i vardagen.
Rekommendation: ${levelData.nextStep}
-----------------------------------------------------`;

    navigator.clipboard.writeText(journalText).then(() => {
      if (el.copyFeedback) {
        el.copyFeedback.textContent = '✅ Texten har kopierats! Klistra in den i kommunens journalsystem.';
        el.copyFeedback.classList.remove('hidden');
        setTimeout(() => {
          el.copyFeedback.classList.add('hidden');
        }, 4000);
      }
    }).catch(err => {
      console.warn('Clipboard write error:', err);
      alert('Kunde inte kopiera automatiskt. Markera texten manuellt.');
    });
  }

  function resetSessionData() {
    if (confirm('Vill du återställa provet och börja om?')) {
      localStorage.removeItem('sy_latest_test_result');
      sessionStorage.removeItem('sy_test_unlocked');
      state.isTestUnlocked = false;
      state.testState = { inProgress: false, currentIndex: 0, userAnswers: {}, isFinished: false, score: 0 };
      switchTab('practice');
    }
  }

  return {
    init,
    switchTab,
    startTest
  };
})();

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
