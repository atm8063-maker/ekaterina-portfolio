<span class="case-eyebrow">Кейс · Веб-разработка & Инфраструктура</span>

<h1 class="case-h1">
  Astro + Directus: сайт недвижимости с мгновенной фильтрацией и управлением <em>через Telegram</em>.
</h1>

<p class="case-hero-sub">
  Заказчик пришёл с базой объектов в Google Таблицах и фотками на Google Drive. Мы выкупили сервер, развернули Docker + Traefik, подняли Headless CMS (Directus) и собрали сверхбыстрый фронт на Astro. Главная фишка: собственник не заходит в админку сайта вообще — вся загрузка объектов идёт через Telegram-бота.
</p>

<div class="case-meta-row">
  <span>Проект<strong>Сайт агентства недвижимости</strong></span>
  <span>Стек<strong>Astro, Directus, Docker, Traefik</strong></span>
  <span>Роль<strong>Архитектура · Backend · Frontend · DevOps</strong></span>
</div>

<!-- Главные цифры -->
<div class="results-grid">
  <div class="result-stat">
    <span class="num accent">98/100</span>
    <span class="label">Lighthouse<br />Performance</span>
  </div>
  <div class="result-stat">
    <span class="num accent">0</span>
    <span class="label">кликов для поиска<br />(фильтрация на лету)</span>
  </div>
  <div class="result-stat">
    <span class="num">100%</span>
    <span class="label">управление<br />через Telegram</span>
  </div>
</div>

<!-- ===== 01 Контекст ===== -->
<section class="section" id="context">
  <span class="section-number">01 / Контекст</span>
  <h2 class="section-h2">Зачем понадобилась <em>новая архитектура</em></h2>

  <p class="lead">До начала проекта у заказчика фактически не было ни сайта, ни нормальной базы данных. Весь «учёт» недвижимости — это раскиданные папки на Google Drive и бесконечные строчки в Google Таблицах.</p>

  <p>С таким «колхозным» подходом идти к серьёзным клиентам и агентствам было нельзя. Вторая боль — конечные покупатели могли посмотреть объекты, только листая ленту Telegram-канала. Найти нужную квартиру с конкретным фильтром было невозможно.</p>

  <blockquote class="pull">
    С серьёзным продакшном в недвижимости не работают через Google Drive. Нужна была взрослая инфраструктура, но при этом <em>максимально простая</em> для самого владельца.
  </blockquote>

  <h3 class="section-h3">Без Astro / С новой архитектурой</h3>

  <div class="compare-grid">
    <div class="compare-col col-without">
      <span class="col-label">— Как было</span>
      <ul>
        <li>База данных в Google Таблицах</li>
        <li>Фотографии в хаотичных папках Google Drive</li>
        <li>Витрина объектов — только лента Telegram-канала</li>
        <li>Поиск нужной квартиры занимает часы</li>
        <li>Несолидный имидж для B2B-партнёров</li>
      </ul>
    </div>
    <div class="compare-col col-with">
      <span class="col-label">+ Как стало</span>
      <ul>
        <li>Выделенный сервер (VPS) с Docker и Traefik</li>
        <li>Взрослая Headless CMS (Directus) под капотом</li>
        <li>Молниеносный фронтенд на Astro</li>
        <li>Мгновенная фильтрация галереи на сайте</li>
        <li>SEO-оптимизация и 98/100 в Lighthouse</li>
      </ul>
    </div>
  </div>
</section>

<!-- ===== 02 Киллер-фича ===== -->
<section class="section" id="killer-feature">
  <span class="section-number">02 / Механика</span>
  <h2 class="section-h2">Киллер-фича: <em>CMS без интерфейса</em></h2>

  <p>Сайт работает на фреймворке Astro. Выбор пал именно на него, потому что Astro отдаёт чистый HTML без лишнего JavaScript. В итоге галерея объектов работает <strong>настолько быстро</strong>, что нажимать кнопку «Найти» больше не нужно — фильтр сортирует объекты на лету прямо во время ввода.</p>

  <p>Но самое интересное скрыто в админке. В качестве базы данных мы развернули Directus — мощную Headless CMS. Мы настроили её полностью: прописали все правильные поля, связи, зависимости категорий.</p>

  <p><strong>Но собственник практически не взаимодействует с Directus.</strong></p>
  
  <p>Люди ненавидят разбираться в новых админках. Поэтому мы сделали так, что объекты в CMS (которые потом улетают на сайт) не грузятся через веб-интерфейс напрямую. Весь флоу завязан на Telegram. Клиент просто скидывает фотки и данные в привычного Telegram-бота, бот сам раскидывает всё по нужным таблицам в Directus, а Astro мгновенно пересобирает витрину на сайте.</p>

  <blockquote class="pull">
    Вся мощь реляционной базы данных спрятана под капотом. Для клиента интерфейсом управления сайтом остался привычный мессенджер.
  </blockquote>
</section>
