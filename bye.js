// NekoNext — kaldırma sayfası: tek tıkla anonim geri bildirim (neden, dil, sürüm; isteğe bağlı site ve not).
// Ad, e-posta ya da izleme geçmişi gönderilmez. Kayıtlar yalnız yöneticinin anahtarıyla görülebilir.
(() => {
  'use strict';
  const SRV_PROD = 'https://nekonext-party.bakbinick.workers.dev';
  const REASONS = ['site', 'timing', 'ads', 'perm', 'bug', 'unused', 'other'];
  // [başlık, açıklama, nedenler(7), teşekkür, site sorusu, not sorusu, gönder, gönderildi, yanlışlıkla mı, yeniden yükle, anonim, gizlilik, hata]
  const L = {
    tr: ['Gitmene üzüldük', 'Neden kaldırdığını tek tıkla söyler misin? NekoNext\'i senin gibi kullanıcıların söyledikleriyle geliştiriyoruz.',
      ['Sitemde çalışmadı', 'Yanlış anda atladı ya da geçti', 'Reklamları engellemedi', 'İzinler / gizlilik', 'Hata verdi ya da yavaşlattı', 'Artık ihtiyacım yok', 'Başka bir sebep'],
      'Teşekkürler 💜 Kaydettik.', 'Hangi sitede? (isteğe bağlı)', 'Eklemek istediğin bir şey var mı? (isteğe bağlı)', 'Gönder', 'Notunu aldık, teşekkürler!',
      'Yanlışlıkla mı kaldırdın?', '⭐ Yeniden yükle', 'Anonimdir: adın, e-postan ya da izlediklerin gönderilmez.', 'Gizlilik', 'Gönderilemedi, birazdan tekrar dene.'],
    en: ['Sorry to see you go', 'Would you tell us why with one click? We improve NekoNext based on what users like you tell us.',
      ['It didn\'t work on my site', 'It skipped or jumped at the wrong time', 'It didn\'t block ads', 'Permissions / privacy', 'It had bugs or slowed things down', 'I don\'t need it anymore', 'Something else'],
      'Thank you 💜 Saved.', 'Which site? (optional)', 'Anything you\'d like to add? (optional)', 'Send', 'Got your note, thank you!',
      'Uninstalled by mistake?', '⭐ Reinstall', 'Anonymous: your name, email or what you watch is never sent.', 'Privacy', 'Couldn\'t send, please try again in a moment.'],
    ru: ['Жаль, что вы уходите', 'Расскажете одним кликом, почему? Мы улучшаем NekoNext по отзывам пользователей.',
      ['Не работал на моём сайте', 'Перематывал или переключал не вовремя', 'Не блокировал рекламу', 'Разрешения / приватность', 'Были ошибки или тормозил', 'Больше не нужен', 'Другое'],
      'Спасибо 💜 Сохранили.', 'На каком сайте? (необязательно)', 'Хотите что-то добавить? (необязательно)', 'Отправить', 'Получили, спасибо!',
      'Удалили случайно?', '⭐ Установить снова', 'Анонимно: имя, почта и то, что вы смотрите, не отправляются.', 'Конфиденциальность', 'Не удалось отправить, попробуйте чуть позже.'],
    uk: ['Шкода, що ви йдете', 'Розкажете одним кліком, чому? Ми покращуємо NekoNext за відгуками користувачів.',
      ['Не працював на моєму сайті', 'Перемотував чи перемикав не вчасно', 'Не блокував рекламу', 'Дозволи / приватність', 'Були помилки або гальмував', 'Більше не потрібен', 'Інше'],
      'Дякуємо 💜 Збережено.', 'На якому сайті? (необовʼязково)', 'Бажаєте щось додати? (необовʼязково)', 'Надіслати', 'Отримали, дякуємо!',
      'Видалили випадково?', '⭐ Встановити знову', 'Анонімно: імʼя, пошта й те, що ви дивитеся, не надсилаються.', 'Конфіденційність', 'Не вдалося надіслати, спробуйте трохи згодом.'],
    ro: ['Ne pare rău că pleci', 'Ne spui dintr-un clic de ce? Îmbunătățim NekoNext după ce ne spun utilizatorii.',
      ['Nu a mers pe site-ul meu', 'A sărit sau a trecut la momentul greșit', 'Nu a blocat reclamele', 'Permisiuni / confidențialitate', 'A avut erori sau a încetinit', 'Nu mai am nevoie', 'Altceva'],
      'Mulțumim 💜 Am salvat.', 'Pe ce site? (opțional)', 'Vrei să adaugi ceva? (opțional)', 'Trimite', 'Am primit, mulțumim!',
      'L-ai dezinstalat din greșeală?', '⭐ Reinstalează', 'Anonim: numele, e-mailul sau ce urmărești nu se trimit.', 'Confidențialitate', 'Nu s-a putut trimite, încearcă din nou puțin mai târziu.'],
    es: ['Sentimos que te vayas', '¿Nos dices con un clic por qué? Mejoramos NekoNext con lo que nos cuentan los usuarios.',
      ['No funcionó en mi sitio', 'Saltó o cambió en el momento equivocado', 'No bloqueó los anuncios', 'Permisos / privacidad', 'Tenía errores o iba lento', 'Ya no lo necesito', 'Otra cosa'],
      'Gracias 💜 Guardado.', '¿En qué sitio? (opcional)', '¿Quieres añadir algo? (opcional)', 'Enviar', '¡Recibido, gracias!',
      '¿Lo desinstalaste por error?', '⭐ Reinstalar', 'Anónimo: no se envía tu nombre, correo ni lo que ves.', 'Privacidad', 'No se pudo enviar, inténtalo de nuevo en un momento.'],
    pt: ['Que pena que você vai embora', 'Pode contar com um clique por quê? Melhoramos o NekoNext com o que os usuários nos dizem.',
      ['Não funcionou no meu site', 'Pulou ou trocou na hora errada', 'Não bloqueou anúncios', 'Permissões / privacidade', 'Teve erros ou deixou lento', 'Não preciso mais', 'Outro motivo'],
      'Obrigado 💜 Salvo.', 'Em qual site? (opcional)', 'Quer acrescentar algo? (opcional)', 'Enviar', 'Recebemos, obrigado!',
      'Removeu sem querer?', '⭐ Reinstalar', 'Anônimo: seu nome, e-mail ou o que você assiste não são enviados.', 'Privacidade', 'Não foi possível enviar, tente de novo em instantes.'],
    fr: ['Dommage que tu partes', 'Tu nous dis pourquoi en un clic ? On améliore NekoNext grâce aux retours des utilisateurs.',
      ['Ça ne marchait pas sur mon site', 'Ça sautait au mauvais moment', 'Ça ne bloquait pas les pubs', 'Permissions / confidentialité', 'Bugs ou ralentissements', 'Je n’en ai plus besoin', 'Autre chose'],
      'Merci 💜 C’est noté.', 'Sur quel site ? (facultatif)', 'Tu veux ajouter quelque chose ? (facultatif)', 'Envoyer', 'Bien reçu, merci !',
      'Désinstallé par erreur ?', '⭐ Réinstaller', 'Anonyme : ton nom, ton e-mail et ce que tu regardes ne sont jamais envoyés.', 'Confidentialité', 'Envoi impossible, réessaie dans un instant.'],
    de: ['Schade, dass du gehst', 'Verrätst du uns mit einem Klick warum? Wir verbessern NekoNext anhand des Feedbacks unserer Nutzer.',
      ['Hat auf meiner Seite nicht funktioniert', 'Hat im falschen Moment gesprungen', 'Hat Werbung nicht blockiert', 'Berechtigungen / Datenschutz', 'Fehler oder hat gebremst', 'Brauche ich nicht mehr', 'Etwas anderes'],
      'Danke 💜 Gespeichert.', 'Auf welcher Seite? (optional)', 'Möchtest du noch etwas ergänzen? (optional)', 'Senden', 'Angekommen, danke!',
      'Aus Versehen entfernt?', '⭐ Neu installieren', 'Anonym: Name, E-Mail oder was du schaust werden nie gesendet.', 'Datenschutz', 'Senden fehlgeschlagen, bitte gleich nochmal versuchen.'],
    it: ['Ci dispiace vederti andare', 'Ci dici perché con un clic? Miglioriamo NekoNext grazie a ciò che ci dicono gli utenti.',
      ['Non funzionava sul mio sito', 'Saltava nel momento sbagliato', 'Non bloccava la pubblicità', 'Permessi / privacy', 'Errori o rallentamenti', 'Non mi serve più', 'Altro'],
      'Grazie 💜 Salvato.', 'Su quale sito? (facoltativo)', 'Vuoi aggiungere qualcosa? (facoltativo)', 'Invia', 'Ricevuto, grazie!',
      'Disinstallato per sbaglio?', '⭐ Reinstalla', 'Anonimo: nome, email e ciò che guardi non vengono mai inviati.', 'Privacy', 'Invio non riuscito, riprova tra un attimo.'],
    pl: ['Szkoda, że odchodzisz', 'Powiesz jednym kliknięciem dlaczego? Ulepszamy NekoNext dzięki opiniom użytkowników.',
      ['Nie działał na mojej stronie', 'Przeskakiwał w złym momencie', 'Nie blokował reklam', 'Uprawnienia / prywatność', 'Błędy lub spowolnienie', 'Już go nie potrzebuję', 'Coś innego'],
      'Dziękujemy 💜 Zapisane.', 'Na jakiej stronie? (opcjonalnie)', 'Chcesz coś dodać? (opcjonalnie)', 'Wyślij', 'Otrzymaliśmy, dziękujemy!',
      'Odinstalowane przez pomyłkę?', '⭐ Zainstaluj ponownie', 'Anonimowo: imię, e-mail ani to, co oglądasz, nie są wysyłane.', 'Prywatność', 'Nie udało się wysłać, spróbuj za chwilę.'],
    ja: ['ご利用ありがとうございました', 'よければワンクリックで理由を教えてください。皆さんの声をもとにNekoNextを改善しています。',
      ['自分のサイトで動かなかった', 'おかしなタイミングでスキップした', '広告をブロックしなかった', '権限・プライバシー', '不具合があった・重くなった', 'もう必要なくなった', 'その他'],
      'ありがとうございます 💜 保存しました。', 'どのサイトですか？（任意）', '他に伝えたいことはありますか？（任意）', '送信', '受け取りました。ありがとうございます！',
      '間違えて削除しましたか？', '⭐ 再インストール', '匿名です：名前・メール・視聴内容は送信されません。', 'プライバシー', '送信できませんでした。少ししてからもう一度お試しください。'],
  };
  const q = new URLSearchParams(location.search);
  const lang = (q.get('l') || navigator.language || 'en').slice(0, 2).toLowerCase(), x = L[lang] || L.en, v = q.get('v') || '';
  // test için yerel sunucu (yalnız localhost); normalde gerçek sunucu
  const srv = /^http:\/\/(127\.0\.0\.1|localhost):\d+$/.test(q.get('srv') || '') ? q.get('srv') : SRV_PROD;
  document.documentElement.lang = L[lang] ? lang : 'en';
  const $ = (id) => document.getElementById(id);
  [['t', 0], ['s', 1], ['ok', 3], ['siteQ', 4], ['noteQ', 5], ['send', 6], ['sent', 7], ['re', 8], ['reBtn', 9], ['anon', 10], ['priv', 11], ['err', 12]].forEach(([id, i]) => { $(id).textContent = x[i]; });

  const id = Math.random().toString(36).slice(2, 12) + Date.now().toString(36);
  let reason = '';
  const post = (extra) => fetch(srv + '/bye', { method: 'POST', headers: { 'content-type': 'text/plain' }, body: JSON.stringify(Object.assign({ id, r: reason, l: lang, v }, extra)) })
    .then((r) => { if (!r.ok) throw new Error(r.status); $('err').style.display = 'none'; return true; })
    .catch(() => { $('err').style.display = 'block'; return false; });

  const rs = $('rs');
  REASONS.forEach((r, i) => {
    const b = document.createElement('button'); b.type = 'button'; b.textContent = x[2][i]; b.dataset.r = r;
    b.onclick = () => {
      reason = r; rs.classList.add('done');
      rs.querySelectorAll('button').forEach((o) => o.classList.toggle('on', o === b));
      $('siteBox').style.display = r === 'site' || r === 'ads' || r === 'timing' ? 'block' : 'none';
      $('sent').style.display = 'none'; $('send').style.display = '';
      post({}).then((ok) => { if (ok) $('more').classList.add('show'); });
      nekoNext();
    };
    rs.appendChild(b);
  });
  $('send').onclick = () => {
    const note = $('note').value.trim(), site = $('site').value.trim();
    if (!note && !site) return;
    post({ note, site }).then((ok) => { if (ok) { $('send').style.display = 'none'; $('sent').style.display = 'inline'; } });
  };

  // Neko: her açılışta rastgele üzgün poz; tıklayınca (ya da neden seçince) diğer poza geçer
  const POSES = ['img/neko-uzgun-1.webp', 'img/neko-uzgun-2.webp', 'img/neko-uzgun-3.webp'];
  const neko = $('neko');
  POSES.forEach((p) => { const i = new Image(); i.src = p; });
  let pose = Math.floor(Math.random() * POSES.length); neko.src = POSES[pose];
  function nekoNext() {
    if (POSES.length > 1) pose = (pose + 1 + Math.floor(Math.random() * (POSES.length - 1))) % POSES.length;
    neko.classList.remove('sw'); void neko.offsetWidth; neko.classList.add('sw');
    setTimeout(() => { neko.src = POSES[pose]; }, 110);
  }
  neko.addEventListener('click', nekoNext);
})();
