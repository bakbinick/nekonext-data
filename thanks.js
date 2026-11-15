// NekoNext — destek teşekkür sayfası: tarayıcı dilinde metin, harf harf beliren başlık, süzülen kalpler, her açılışta rastgele Neko pozu; tıklayınca poz değişir ve kalpler patlar.
// Eklenti bu sayfayı <meta name="nekonext-thanks"> ile tanır ve kişiyi destekçi olarak hatırlar.
(() => {
  'use strict';
  const S = {
    tr: { noteNo: 'Desteğin bize ulaştı, çok teşekkürler! NekoNext bu tarayıcıda yüklüyse seni destekçi olarak hatırlayacak.', chip: 'NekoNext destekçisi', title: 'Teşekkürler', lead: "Desteğin sayesinde NekoNext ücretsiz kalıyor ve yeni özellikler gelmeye devam ediyor.", note: 'NekoNext seni hatırladı. Eklenti menüsünde artık destekçi teşekkürünü göreceksin.', dl: "Supporter Pack'i indir", back: 'Mağazada puan ver', tag: "Neko'ya tıkla!", nh: 'Desteğin neye dönüşüyor?', n1t: 'AI çeviri', n1d: 'Yapay zekâ ile çok daha doğru altyazı çevirisi.', n2t: 'Daha büyük odalar', n2d: 'Kalabalık izleme geceleri için daha fazla kişi.', n3t: 'Yeni temalar', n3d: 'Yeni temalar, çıkartmalar ve sürprizler.', priv: 'Gizlilik politikası' },
    en: { noteNo: 'Your support reached us, thank you so much! If NekoNext is installed in this browser, it will remember you as a supporter.', chip: 'NekoNext supporter', title: 'Thank you', lead: 'Your support keeps NekoNext free and keeps new features coming.', note: "NekoNext remembers you. You'll now see a supporter thank-you in the extension menu.", dl: 'Download your Supporter Pack', back: 'Rate us on the store', tag: 'Click Neko!', nh: 'What your support makes possible', n1t: 'AI translation', n1d: 'Much more accurate subtitle translation with AI.', n2t: 'Bigger rooms', n2d: 'Room for more friends on crowded watch nights.', n3t: 'New themes', n3d: 'New themes, stickers and surprises.', priv: 'Privacy policy' },
    ru: { noteNo: 'Ваша поддержка дошла до нас, большое спасибо! Если NekoNext установлен в этом браузере, он запомнит вас.', chip: 'Поддержка NekoNext', title: 'Спасибо', lead: 'Благодаря вашей поддержке NekoNext остаётся бесплатным, а новые функции продолжают появляться.', note: 'NekoNext вас запомнил. Теперь в меню расширения вы увидите благодарность.', dl: 'Скачать Supporter Pack', back: 'Оценить в магазине', tag: 'Нажми на Неко!', nh: 'Во что превращается ваша поддержка', n1t: 'AI-перевод', n1d: 'Гораздо более точный перевод субтитров с ИИ.', n2t: 'Большие комнаты', n2d: 'Больше места для друзей.', n3t: 'Новые темы', n3d: 'Новые темы, стикеры и сюрпризы.', priv: 'Конфиденциальность' },
    uk: { noteNo: 'Ваша підтримка дійшла до нас, щиро дякуємо! Якщо NekoNext встановлено в цьому браузері, він вас запам’ятає.', chip: 'Підтримка NekoNext', title: 'Дякуємо', lead: 'Завдяки вашій підтримці NekoNext залишається безкоштовним, а нові функції продовжують з’являтися.', note: 'NekoNext вас запам’ятав. Тепер у меню розширення ви побачите подяку.', dl: 'Завантажити Supporter Pack', back: 'Оцінити в магазині', tag: 'Натисни на Неко!', nh: 'На що перетворюється ваша підтримка', n1t: 'AI-переклад', n1d: 'Набагато точніший переклад субтитрів з ШІ.', n2t: 'Великі кімнати', n2d: 'Більше місця для друзів.', n3t: 'Нові теми', n3d: 'Нові теми, стікери й сюрпризи.', priv: 'Конфіденційність' },
    ro: { noteNo: 'Sprijinul tău a ajuns la noi, mulțumim mult! Dacă NekoNext e instalat în acest browser, te va reține ca susținător.', chip: 'Susținător NekoNext', title: 'Mulțumim', lead: 'Datorită sprijinului tău, NekoNext rămâne gratuit și apar în continuare funcții noi.', note: 'NekoNext te-a reținut. În meniul extensiei vei vedea acum mulțumirea pentru susținători.', dl: 'Descarcă Supporter Pack', back: 'Dă o notă în magazin', tag: 'Apasă pe Neko!', nh: 'Ce devine sprijinul tău', n1t: 'Traducere AI', n1d: 'Traducere de subtitrări mult mai exactă cu AI.', n2t: 'Camere mai mari', n2d: 'Loc pentru mai mulți prieteni.', n3t: 'Teme noi', n3d: 'Teme noi, stickere și surprize.', priv: 'Confidențialitate' },
    es: { noteNo: '¡Tu apoyo nos llegó, muchas gracias! Si NekoNext está instalado en este navegador, te recordará como apoyo.', chip: 'Apoyo a NekoNext', title: 'Gracias', lead: 'Gracias a tu apoyo, NekoNext sigue siendo gratis y siguen llegando funciones nuevas.', note: 'NekoNext te recuerda. Ahora verás un agradecimiento en el menú de la extensión.', dl: 'Descargar Supporter Pack', back: 'Valóranos en la tienda', tag: '¡Haz clic en Neko!', nh: 'En qué se convierte tu apoyo', n1t: 'Traducción con IA', n1d: 'Traducción de subtítulos mucho más precisa con IA.', n2t: 'Salas más grandes', n2d: 'Sitio para más amigos.', n3t: 'Temas nuevos', n3d: 'Temas, stickers y sorpresas nuevas.', priv: 'Privacidad' },
    pt: { noteNo: 'Seu apoio chegou até nós, muito obrigado! Se o NekoNext estiver instalado neste navegador, ele vai lembrar de você.', chip: 'Apoio ao NekoNext', title: 'Obrigado', lead: 'Graças ao seu apoio, o NekoNext continua grátis e novos recursos continuam chegando.', note: 'O NekoNext lembrou de você. Agora você verá um agradecimento no menu da extensão.', dl: 'Baixar o Supporter Pack', back: 'Avalie na loja', tag: 'Clique na Neko!', nh: 'No que seu apoio se transforma', n1t: 'Tradução com IA', n1d: 'Tradução de legendas muito mais precisa com IA.', n2t: 'Salas maiores', n2d: 'Espaço para mais amigos.', n3t: 'Temas novos', n3d: 'Temas, figurinhas e surpresas novas.', priv: 'Privacidade' },
    fr: { noteNo: 'Ton soutien nous est parvenu, merci beaucoup ! Si NekoNext est installé dans ce navigateur, il se souviendra de toi.', chip: 'Soutien NekoNext', title: 'Merci', lead: 'Grâce à ton soutien, NekoNext reste gratuit et de nouvelles fonctions continuent d’arriver.', note: 'NekoNext se souvient de toi. Tu verras maintenant un remerciement dans le menu de l’extension.', dl: 'Télécharger le Supporter Pack', back: 'Noter sur la boutique', tag: 'Clique sur Neko !', nh: 'Ce que ton soutien rend possible', n1t: 'Traduction IA', n1d: 'Une traduction des sous-titres bien plus juste grâce à l’IA.', n2t: 'Salons plus grands', n2d: 'De la place pour plus d’amis.', n3t: 'Nouveaux thèmes', n3d: 'Nouveaux thèmes, stickers et surprises.', priv: 'Confidentialité' },
    de: { noteNo: 'Deine Unterstützung ist angekommen, vielen Dank! Ist NekoNext in diesem Browser installiert, merkt es sich das.', chip: 'NekoNext-Unterstützer', title: 'Danke', lead: 'Dank deiner Unterstützung bleibt NekoNext kostenlos und neue Funktionen kommen weiter.', note: 'NekoNext merkt sich das. Im Erweiterungsmenü siehst du jetzt ein Dankeschön.', dl: 'Supporter Pack herunterladen', back: 'Im Store bewerten', tag: 'Klick auf Neko!', nh: 'Was deine Unterstützung möglich macht', n1t: 'KI-Übersetzung', n1d: 'Viel genauere Untertitel-Übersetzung mit KI.', n2t: 'Größere Räume', n2d: 'Platz für mehr Freunde.', n3t: 'Neue Themes', n3d: 'Neue Themes, Sticker und Überraschungen.', priv: 'Datenschutz' },
    it: { noteNo: 'Il tuo supporto ci è arrivato, grazie mille! Se NekoNext è installato in questo browser, si ricorderà di te.', chip: 'Sostenitore NekoNext', title: 'Grazie', lead: 'Grazie al tuo supporto NekoNext resta gratuito e continuano ad arrivare nuove funzioni.', note: 'NekoNext si ricorda di te. Ora nel menu dell’estensione vedrai un ringraziamento.', dl: 'Scarica il Supporter Pack', back: 'Valutaci sullo store', tag: 'Clicca su Neko!', nh: 'In cosa si trasforma il tuo supporto', n1t: 'Traduzione IA', n1d: 'Traduzione dei sottotitoli molto più precisa con l’IA.', n2t: 'Stanze più grandi', n2d: 'Spazio per più amici.', n3t: 'Nuovi temi', n3d: 'Nuovi temi, sticker e sorprese.', priv: 'Privacy' },
    pl: { noteNo: 'Twoje wsparcie do nas dotarło, bardzo dziękujemy! Jeśli NekoNext jest zainstalowany w tej przeglądarce, zapamięta cię.', chip: 'Wsparcie NekoNext', title: 'Dziękujemy', lead: 'Dzięki twojemu wsparciu NekoNext pozostaje darmowy, a nowe funkcje wciąż się pojawiają.', note: 'NekoNext cię zapamiętał. W menu rozszerzenia zobaczysz teraz podziękowanie.', dl: 'Pobierz Supporter Pack', back: 'Oceń w sklepie', tag: 'Kliknij Neko!', nh: 'Na co zamienia się twoje wsparcie', n1t: 'Tłumaczenie AI', n1d: 'Dużo dokładniejsze tłumaczenie napisów dzięki AI.', n2t: 'Większe pokoje', n2d: 'Miejsce dla większej liczby znajomych.', n3t: 'Nowe motywy', n3d: 'Nowe motywy, naklejki i niespodzianki.', priv: 'Prywatność' },
    ja: { noteNo: '応援が届きました。本当にありがとう！このブラウザにNekoNextが入っていれば、サポーターとして覚えます。', chip: 'NekoNextサポーター', title: 'ありがとう', lead: 'あなたの応援のおかげで、NekoNextは無料のまま、新しい機能を届け続けられます。', note: 'NekoNextがあなたを覚えました。拡張機能のメニューにサポーターへのお礼が表示されます。', dl: 'Supporter Packをダウンロード', back: 'ストアで評価する', tag: 'ネコをクリック！', nh: 'あなたの応援でできること', n1t: 'AI翻訳', n1d: 'AIによるずっと正確な字幕翻訳。', n2t: '大きなルーム', n2d: 'もっと多くの友だちと。', n3t: '新しいテーマ', n3d: '新しいテーマ、ステッカー、サプライズ。', priv: 'プライバシー' },
  };
  let code = 'en';
  for (const l of navigator.languages || [navigator.language || 'en']) { const c = String(l).slice(0, 2).toLowerCase(); if (S[c]) { code = c; break; } }
  const t = S[code];
  document.documentElement.lang = code;
  document.title = 'NekoNext · ' + t.title + ' 💜';
  for (const k of ['chip', 'lead', 'tag', 'nh', 'n1t', 'n1d', 'n2t', 'n2d', 'n3t', 'n3d', 'priv']) { const el = document.getElementById(k); if (el) el.textContent = t[k]; }
  document.querySelector('#dl span').textContent = t.dl;
  document.querySelector('#back span').textContent = t.back;
  // başlık: harf harf beliren, sonunda atan kalp
  const h1 = document.getElementById('title');
  Array.from(t.title).forEach((ch, i) => { const s = document.createElement('span'); s.textContent = ch === ' ' ? ' ' : ch; s.style.animationDelay = (0.35 + i * 0.045) + 's'; h1.appendChild(s); });
  const hh = document.createElement('span'); hh.className = 'h'; hh.textContent = '💜'; hh.style.animationDelay = (0.4 + t.title.length * 0.045) + 's'; h1.appendChild(hh);
  // Eklentiye doğrudan haber ver (NekoNext 1.26.2+): başarılıysa "seni hatırladı", değilse nötr teşekkür göster.
  // Eski sürümlerde eklentinin içerik betiği bu sayfadaki <meta name="nekonext-thanks"> etiketini görüp aynı işi yapar.
  const EXT = 'pggapfaakjffefgmdlioapcllechjbhl';
  const ok = document.querySelector('.ok'), note = document.getElementById('note');
  note.textContent = t.noteNo; ok.querySelector('i').textContent = '💜'; ok.querySelector('i').style.background = '#fdeef4';
  try {
    if (window.chrome && chrome.runtime && chrome.runtime.sendMessage) {
      chrome.runtime.sendMessage(EXT, { type: 'supporter' }, (r) => {
        void chrome.runtime.lastError;
        if (r && r.ok) { note.textContent = t.note; const i = ok.querySelector('i'); i.textContent = '✓'; i.style.background = ''; }
      });
    }
  } catch (e) {}

  const heart = (c) => `<svg viewBox="0 0 24 24"><path fill="${c}" d="M12 21C7 16.5 2 13 2 8.5 2 5.4 4.4 3 7.3 3c1.9 0 3.6 1 4.7 2.6C13.1 4 14.8 3 16.7 3 19.6 3 22 5.4 22 8.5 22 13 17 16.5 12 21z"/></svg>`;
  const colors = ['#ff5c8a', '#ff8fb0', '#ffc2d4', '#b79bff', '#8a6bff'];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  // arka planda süzülen kalpler
  const box = document.getElementById('hearts');
  if (!reduce) for (let i = 0; i < 12; i++) {
    const s = document.createElement('span'); s.innerHTML = heart(colors[i % colors.length]);
    s.style.left = (6 + Math.random() * 88) + '%';
    s.style.setProperty('--x', Math.round((Math.random() * 2 - 1) * 60) + 'px');
    s.style.setProperty('--r', Math.round((Math.random() * 2 - 1) * 40) + 'deg');
    s.style.setProperty('--t', (5 + Math.random() * 4).toFixed(1) + 's');
    s.style.setProperty('--d', (Math.random() * 6).toFixed(1) + 's');
    const z = 12 + Math.round(Math.random() * 14); s.style.width = s.style.height = z + 'px';
    box.appendChild(s);
  }
  // Neko'ya tıklayınca kalp patlaması
  const frame = document.getElementById('frame');
  function burst() {
    if (reduce) return;
    const b = document.createElement('div'); b.className = 'hearts burst';
    for (let i = 0; i < 26; i++) {
      const s = document.createElement('span'); s.innerHTML = heart(colors[i % colors.length]);
      const a = (i / 26) * Math.PI * 2 + Math.random() * 0.3, d = 120 + Math.random() * 140;
      s.style.setProperty('--x', Math.round(Math.cos(a) * d) + 'px'); s.style.setProperty('--y', Math.round(Math.sin(a) * d * .85) + 'px');
      s.style.setProperty('--r', Math.round((Math.random() * 2 - 1) * 60) + 'deg'); s.style.animationDelay = (Math.random() * .15).toFixed(2) + 's';
      b.appendChild(s);
    }
    frame.parentNode.appendChild(b); setTimeout(() => b.remove(), 1800);
  }
  // her açılışta rastgele poz; tıklayınca diğer poza geçer
  const POSES = ['img/neko-heart.webp', 'img/neko-peace.webp'];
  POSES.forEach((p) => { const i = new Image(); i.src = p; });
  let pose = Math.floor(Math.random() * POSES.length);
  frame.src = POSES[pose];
  frame.addEventListener('click', () => {
    pose = (pose + 1) % POSES.length;
    frame.classList.remove('sw'); void frame.offsetWidth; frame.classList.add('sw');
    setTimeout(() => { frame.src = POSES[pose]; }, 110);
    burst();
  });
  setTimeout(burst, 1300);
})();
