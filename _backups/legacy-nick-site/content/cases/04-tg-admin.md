<span class="case-eyebrow">Кейс · Управление & Mobile-first</span>

<h1 class="case-h1">
  Telegram-Админка: полноценное управление базой недвижимости прямо со смартфона.
</h1>

<p class="case-hero-sub">
  Зачем учить агентов сложным интерфейсам веб-CMS? Мы перенесли всё управление объектами в Telegram. В пару кликов можно поменять цену, обновить фотки, выбрать заглавное изображение или повесить плашку «Продано». Сайт и база обновляются мгновенно, а риелтор даже не открывает ноутбук.
</p>

<div class="case-meta-row">
  <span>Проект<strong>Mobile-first управление недвижимостью</strong></span>
  <span>Стек<strong>Python, aiogram, Directus CMS</strong></span>
  <span>Роль<strong>Архитектура · Backend-разработка</strong></span>
  <span>Фишка<strong>Directus API + Telegram UI</strong></span>
</div>

<!-- Главные цифры -->
<div class="results-grid">
  <div class="result-stat">
    <span class="num accent">100%</span>
    <span class="label">управление<br />через мессенджер</span>
  </div>
  <div class="result-stat">
    <span class="num accent">0</span>
    <span class="label">часов на обучение<br />сотрудников</span>
  </div>
  <div class="result-stat">
    <span class="num">Real-time</span>
    <span class="label">синхронизация с<br />Headless CMS</span>
  </div>
</div>

<!-- ===== 01 Контекст ===== -->
<section class="section" id="context">
  <span class="section-number">01 / Контекст</span>
  <h2 class="section-h2">Сайт — это живой организм, а не <em>архив</em></h2>

  <p class="lead">Нельзя просто загрузить квартиру на сайт и забыть про неё. Объекты в недвижимости "живые": собственник скинул цену, добавились новые фотографии после клининга, квартира ушла в резерв или продалась.</p>

  <p>Обычно для обновления карточки нужно открывать тяжелую веб-админку CMS с ноутбука. Это значит: вспомнить пароль, найти нужный объект через фильтры, не сломать ничего при редактировании. Риелторы ненавидят новые интерфейсы, это перегружает их workflow, особенно когда они весь день на показах.</p>

  <h3 class="section-h3">Без Telegram-админки / С ботом-админом</h3>

  <div class="compare-grid">
    <div class="compare-col col-without">
      <span class="col-label">— Как было</span>
      <ul>
        <li>Редактирование базы только с ноутбука</li>
        <li>Долгое обучение сотрудников интерфейсу CMS</li>
        <li>Обновление цены откладывается до вечера</li>
        <li>Ошибки при редактировании полей в базе</li>
      </ul>
    </div>
    <div class="compare-col col-with">
      <span class="col-label">+ Как стало</span>
      <ul>
        <li>Смена цены или статуса в два тапа с телефона</li>
        <li>Нулевой порог входа: все умеют пользоваться Телегой</li>
        <li>Мгновенная синхронизация с сайтом на Astro</li>
        <li>Полный контроль над фото и плашками объектов</li>
      </ul>
    </div>
  </div>
</section>

<!-- ===== 02 Киллер-фича ===== -->
<section class="section" id="killer-feature">
  <span class="section-number">02 / Магия под капотом</span>
  <h2 class="section-h2">Никакого десктопа: <em>полный контроль медиа</em></h2>

  <p>Бот-администратор подключается напрямую к нашей Headless CMS (Directus) по API. Когда агенту нужно обновить объект, он просто вызывает его в боте и получает карточку управления с inline-кнопками.</p>

  <ul class="schedule-list">
    <li>
      <span class="when">Статусы</span>
      <span class="what"><strong>Плашки и ценники.</strong> Объект продан? Нажимаем кнопку "Sold". Скинули цену? Вводим новую цифру. Изменения моментально записываются в базу данных и отображаются на сайте.</span>
    </li>
    <li>
      <span class="when">Медиа</span>
      <span class="what"><strong>Управление фотографиями.</strong> Риелтор прямо в чате может удалить неудачное фото, назначить новую заглавную картинку (титульное фото) или догрузить свежие кадры с телефона.</span>
    </li>
    <li>
      <span class="when">UI/UX</span>
      <span class="what"><strong>Простота.</strong> Никаких сложных иерархий, меню и настроек. Интерфейс сведён к набору интуитивных кнопок прямо под фотографией объекта.</span>
    </li>
  </ul>

  <blockquote class="pull">
    Мы полностью оторвали интерфейс управления от базы данных. Directus надёжно хранит данные на сервере, а риелторы комфортно работают в мессенджере.
  </blockquote>
</section>
