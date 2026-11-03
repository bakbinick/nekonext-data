// NekoNext — bağış teşekkür sayfası: rastgele poz, tarayıcı dilinde harf harf düşen teşekkür, kalp patlaması
(() => {
  'use strict';
  const THANKS = {
    tr: ['Teşekkür', 'ederim'], en: ['Thank', 'you'], ja: ['ありがとう', 'ございます'], ro: ['Mulțumesc', 'frumos'],
    ru: ['Большое', 'спасибо'], uk: ['Щиро', 'дякую'], de: ['Vielen', 'Dank'], fr: ['Merci', 'beaucoup'],
    es: ['Muchas', 'gracias'], it: ['Grazie', 'mille'], pt: ['Muito', 'obrigado'], pl: ['Dziękuję', 'bardzo'],
    nl: ['Hartelijk', 'dank'], az: ['Çox', 'sağ ol'], ko: ['정말', '감사합니다'], zh: ['非常', '感谢'], ar: ['شكرًا', 'جزيلًا']
  };
  const NOTE = {
    tr: 'Desteğin için teşekkürler! NekoNext seni hatırladı, bu sayfayı kapatabilirsin.',
    en: 'Thanks for your support! NekoNext remembers you; you can close this page.',
    ru: 'Спасибо за поддержку! NekoNext вас запомнил, страницу можно закрыть.',
    ro: 'Mulțumim pentru sprijin! NekoNext te-a reținut, poți închide pagina.',
    uk: 'Дякуємо за підтримку! NekoNext вас запам’ятав, сторінку можна закрити.',
    es: '¡Gracias por tu apoyo! NekoNext te recuerda; ya puedes cerrar esta página.',
    pt: 'Obrigado pelo apoio! O NekoNext lembrou de você; pode fechar esta página.',
    fr: 'Merci pour ton soutien ! NekoNext s’en souviendra, tu peux fermer cette page.',
    de: 'Danke für deine Unterstützung! NekoNext merkt sich das, du kannst diese Seite schließen.',
    it: 'Grazie per il supporto! NekoNext si ricorda di te, puoi chiudere questa pagina.',
    pl: 'Dziękujemy za wsparcie! NekoNext cię zapamiętał, możesz zamknąć tę stronę.',
    ja: '応援ありがとうございます！NekoNextが覚えました。このページは閉じて大丈夫です。'
  };
  let code = 'en';
  for (const l of navigator.languages || [navigator.language || 'en']) { const c = String(l).slice(0, 2).toLowerCase(); if (THANKS[c]) { code = c; break; } }
  const t = THANKS[code];
  document.documentElement.lang = code;
  document.getElementById('note').textContent = NOTE[code] || NOTE.en;
  // Eklentinin kendi sayfası olarak açıldıysa destekçi işaretini doğrudan kaydet
  try { if (chrome && chrome.runtime && chrome.runtime.id) chrome.runtime.sendMessage({ type: 'supporter' }).catch(() => {}); } catch (e) {}

  const stage = document.getElementById('stage'), box = document.getElementById('hearts');
  const wl = document.querySelector('.word.l'), wr = document.querySelector('.word.r');
  document.body.dataset.pose = Math.random() < 0.5 ? 'a' : 'b';
  const rtl = code === 'ar';
  const [first, second] = rtl ? [wr, wl] : [wl, wr];
  let k = 0;
  for (const [w, text] of [[first, t[0]], [second, t[1]]]) {
    w.dir = rtl ? 'rtl' : 'ltr';
    for (const ch of (rtl ? [text] : Array.from(text))) {
      const b = document.createElement('b');
      b.textContent = ch === ' ' ? ' ' : ch;
      b.style.setProperty('--d', (1.0 + k * 0.08).toFixed(2) + 's');
      b.style.setProperty('--r', Math.round((Math.random() * 2 - 1) * 35) + 'deg');
      w.appendChild(b); k++;
    }
  }
  function fit(w) {
    w.style.fontSize = '';
    const room = stage.clientWidth - parseFloat(getComputedStyle(w)[w === wl ? 'right' : 'left']) - 8;
    let fs = parseFloat(getComputedStyle(w).fontSize);
    while (w.scrollWidth > room && fs > 11) { fs -= 1; w.style.fontSize = fs + 'px'; }
  }
  fit(wl); fit(wr);
  const heart = (c) => `<svg viewBox="0 0 24 24"><path fill="${c}" d="M12 21C7 16.5 2 13 2 8.5 2 5.4 4.4 3 7.3 3c1.9 0 3.6 1 4.7 2.6C13.1 4 14.8 3 16.7 3 19.6 3 22 5.4 22 8.5 22 13 17 16.5 12 21z"/></svg>`;
  const colors = ['#ff5c8a', '#ff8fb0', '#ffc2d4', '#b79bff', '#ff5c8a'];
  function play() {
    box.innerHTML = '';
    for (let i = 0; i < 34; i++) {
      const s = document.createElement('span');
      s.innerHTML = heart(colors[i % colors.length]);
      const a = (i / 34) * Math.PI * 2 + Math.random() * 0.4, dist = 130 + Math.random() * 120;
      s.style.setProperty('--x', Math.round(Math.cos(a) * dist) + 'px');
      s.style.setProperty('--y', Math.round(Math.sin(a) * dist * 0.8 - 20) + 'px');
      s.style.setProperty('--r', Math.round((Math.random() * 2 - 1) * 50) + 'deg');
      s.style.setProperty('--t', (1.6 + Math.random() * 0.9).toFixed(2) + 's');
      s.style.setProperty('--d', (0.55 + (i % 3) * 0.18 + Math.random() * 0.25).toFixed(2) + 's');
      const size = 12 + Math.round(Math.random() * 18);
      s.style.width = s.style.height = size + 'px';
      box.appendChild(s);
    }
    stage.classList.remove('play'); void stage.offsetWidth; stage.classList.add('play');
  }
  stage.addEventListener('click', () => { document.body.dataset.pose = Math.random() < 0.5 ? 'a' : 'b'; play(); });
  setTimeout(play, 250);
})();
