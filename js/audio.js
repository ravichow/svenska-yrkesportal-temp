// Svenska Yrkesportal - Audio Engine
// Web Speech API (sv-SE) + Web Audio Synthesizer for feedback chimes

const AudioEngine = (() => {
  let synth = window.speechSynthesis;
  let swedishVoice = null;
  let audioContext = null;
  let currentSpeed = parseFloat(localStorage.getItem('sy_audio_speed')) || 0.85; // Default slightly slower for clarity
  let isSpeaking = false;
  let activeSpeakerBtn = null;

  function init() {
    if ('speechSynthesis' in window) {
      loadVoices();
      if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = loadVoices;
      }
    }
  }

  function loadVoices() {
    if (!synth) return;
    const voices = synth.getVoices();
    // Prefer natural / Swedish voices
    swedishVoice = voices.find(v => v.lang === 'sv-SE' || v.lang === 'sv_SE' || v.lang.startsWith('sv')) || null;
  }

  function getAudioContext() {
    if (!audioContext) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) audioContext = new AudioCtx();
    }
    if (audioContext && audioContext.state === 'suspended') {
      audioContext.resume();
    }
    return audioContext;
  }

  // Speak a Swedish phrase
  function speak(text, buttonElement = null, onFinish = null) {
    if (!synth) {
      console.warn('Speech synthesis not supported');
      if (onFinish) onFinish();
      return;
    }

    // Cancel ongoing speech
    stop();

    const cleanText = text.replace(/[\/\[\]\(\)]/g, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'sv-SE';
    utterance.rate = currentSpeed;
    utterance.pitch = 1.0;

    if (!swedishVoice) {
      loadVoices();
    }
    if (swedishVoice) {
      utterance.voice = swedishVoice;
    }

    // Visual button state
    if (buttonElement) {
      activeSpeakerBtn = buttonElement;
      activeSpeakerBtn.classList.add('is-speaking');
    }

    utterance.onstart = () => {
      isSpeaking = true;
    };

    utterance.onend = () => {
      isSpeaking = false;
      if (activeSpeakerBtn) {
        activeSpeakerBtn.classList.remove('is-speaking');
        activeSpeakerBtn = null;
      }
      if (onFinish) onFinish();
    };

    utterance.onerror = (e) => {
      console.warn('Speech error:', e);
      isSpeaking = false;
      if (activeSpeakerBtn) {
        activeSpeakerBtn.classList.remove('is-speaking');
        activeSpeakerBtn = null;
      }
      if (onFinish) onFinish();
    };

    synth.speak(utterance);
  }

  function stop() {
    if (synth) {
      synth.cancel();
      isSpeaking = false;
      if (activeSpeakerBtn) {
        activeSpeakerBtn.classList.remove('is-speaking');
        activeSpeakerBtn = null;
      }
    }
  }

  function setSpeed(rate) {
    currentSpeed = rate;
    localStorage.setItem('sy_audio_speed', rate);
  }

  function getSpeed() {
    return currentSpeed;
  }

  // Synthesized feedback chimes using Web Audio API
  function playTone(type) {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;

      if (type === 'correct') {
        // Cheerful ascending major chord
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.setValueAtTime(659.25, now + 0.1); // E5
        osc.frequency.setValueAtTime(783.99, now + 0.2); // G5
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
        osc.start(now);
        osc.stop(now + 0.5);
      } else if (type === 'wrong') {
        // Low gentle reminder buzz
        osc.type = 'sine';
        osc.frequency.setValueAtTime(260, now);
        osc.frequency.setValueAtTime(220, now + 0.15);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.start(now);
        osc.stop(now + 0.4);
      } else if (type === 'complete') {
        // Fanfare chord
        const notes = [440, 554.37, 659.25, 880];
        notes.forEach((freq, idx) => {
          const o = ctx.createOscillator();
          const g = ctx.createGain();
          o.type = 'sine';
          o.frequency.value = freq;
          o.connect(g);
          g.connect(ctx.destination);
          g.gain.setValueAtTime(0.15, now + idx * 0.08);
          g.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.6);
          o.start(now + idx * 0.08);
          o.stop(now + idx * 0.08 + 0.65);
        });
      }
    } catch (e) {
      console.warn('Audio tone error:', e);
    }
  }

  // Initialize on script load
  init();

  return {
    speak,
    stop,
    setSpeed,
    getSpeed,
    playTone,
    init
  };
})();
