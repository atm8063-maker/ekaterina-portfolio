<span class="case-eyebrow">Case study · GameDev & Telegram</span>

<h1 class="case-h1">
  Digital Mafia Assistant: offline game master tools, ratings, and stats tracker.
</h1>

<p class="case-hero-sub">
  Replaced pen and paper with a smart Telegram assistant. The bot helps the host manage offline Mafia games with 16+ players and complex custom roles. It controls phase logic, prevents illegal moves, logs night histories, and automatically updates the club leaderboards in Google Sheets.
</p>

<div class="case-meta-row">
  <span>Project<strong>Offline Gaming Club Automation</strong></span>
  <span>Role<strong>Fullstack Development (Python)</strong></span>
  <span>Key Feature<strong>Game Logic Engine + Google Sheets API</strong></span>
</div>

<!-- Key stats -->
<div class="results-grid">
  <div class="result-stat">
    <span class="num accent">3000+</span>
    <span class="label">lines of code<br />under the hood</span>
  </div>
  <div class="result-stat">
    <span class="num accent">10+</span>
    <span class="label">complex roles<br />with custom logic</span>
  </div>
  <div class="result-stat">
    <span class="num">0</span>
    <span class="label">logic errors at<br />the gaming table</span>
  </div>
</div>

<!-- ===== 01 Context ===== -->
<section class="section" id="context">
  <span class="section-number">01 / Context</span>
  <h2 class="section-h2">Why the host's notepad <em>doesn't cut it anymore</em></h2>

  <p class="lead">When 10 to 16 players sit at a Mafia table, and the roster includes not just standard mafiosi but also a Boss, a Courtesan, a Sheriff, a Doctor, and a Serial Killer — hosting the game becomes an absolute stress fest. You have to memorize all night actions, keep track of waking orders, and remember whose actions were blocked.</p>

  <p>Originally we used Google Apps Script for simple automation, but it lagged heavily and couldn't process complex game states. So, we leased a solid VPS server and coded a fully-fledged game engine from scratch inside Telegram with over 3,000 lines of code.</p>

  <h3 class="section-h3">No Digital Assistant / With Host Bot</h3>

  <div class="compare-grid">
    <div class="compare-col col-without">
      <span class="col-label">— Before</span>
      <ul>
        <li>Host notes down all moves by hand on paper</li>
        <li>Human error: forgetting whom the sheriff checked</li>
        <li>Post-game arguments over incorrect night logic resolution</li>
        <li>Manual calculations of club leaderboards after every game</li>
      </ul>
    </div>
    <div class="compare-col col-with">
      <span class="col-label">+ After</span>
      <ul>
        <li>Host simply clicks inline buttons in Telegram</li>
        <li>Bot automatically resolves action conflicts (kills vs heals vs blocks)</li>
        <li>System warns the host about illegal moves</li>
        <li>Ratings and game stats sync immediately with Google Sheets</li>
      </ul>
    </div>
  </div>
</section>

<!-- ===== 02 Killer Feature ===== -->
<section class="section" id="killer-feature">
  <span class="section-number">02 / Under the hood</span>
  <h2 class="section-h2">An objective referee and <em>statistical engine</em></h2>

  <p>The bot doesn't replace the live banter at the table — it simply takes care of the boring ledger work. Before starting a match, the host pulls the player roster (loading the previous game's players in one click) and assigns roles. Then, the game engine takes over.</p>

  <ul class="schedule-list">
    <li>
      <span class="when">Validator</span>
      <span class="what"><strong>Error Prevention.</strong> If the host tries to make an illegal move — like picking an action for a dead player, or targeting someone who was blocked by the Courtesan — the bot alerts the host and locks the input.</span>
    </li>
    <li>
      <span class="when">Protocol Log</span>
      <span class="what"><strong>Action Logging.</strong> The bot records a detailed log of every check, shoot, and block. This eliminates post-match disputes in the style of "you forgot to heal me".</span>
    </li>
    <li>
      <span class="when">Big Data</span>
      <span class="what"><strong>Leaderboards.</strong> All statistics export directly into Google Sheets dashboards. The club gets transparent access to win rates, role survival stats, and a dynamic leaderboard.</span>
    </li>
  </ul>

  <blockquote class="pull">
    This began as a hobby project but grew into a serious Game Logic Engine. The bot accelerated match speeds, removed human error from game mathematics, and let the host focus on creating the table atmosphere rather than drafting journals.
  </blockquote>
</section>
