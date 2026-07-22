<span class="case-eyebrow">Case study · Web Development & Infrastructure</span>

<h1 class="case-h1">
  Astro + Directus: Real estate site with instant filtering and Telegram-based <em>admin ops</em>.
</h1>

<p class="case-hero-sub">
  Client came with a messy database in Google Sheets and images scattered across Google Drive. We set up a dedicated server, spun up Docker + Traefik, added a Headless CMS (Directus), and coded a lightning-fast Astro frontend. The killer feature: the owner doesn’t touch the CMS admin dashboard at all — all listings are uploaded right from their Telegram bot.
</p>

<div class="case-meta-row">
  <span>Project<strong>Agency Real Estate Website</strong></span>
  <span>Stack<strong>Astro, Directus, Docker, Traefik</strong></span>
  <span>Role<strong>Architecture · Backend · Frontend · DevOps</strong></span>
</div>

<!-- Key stats -->
<div class="results-grid">
  <div class="result-stat">
    <span class="num accent">98/100</span>
    <span class="label">Lighthouse<br />Performance</span>
  </div>
  <div class="result-stat">
    <span class="num accent">0</span>
    <span class="label">clicks to search<br />(instant filtering)</span>
  </div>
  <div class="result-stat">
    <span class="num">100%</span>
    <span class="label">management<br />via Telegram</span>
  </div>
</div>

<!-- ===== 01 Context ===== -->
<section class="section" id="context">
  <span class="section-number">01 / Context</span>
  <h2 class="section-h2">Why we needed a <em>new architecture</em></h2>

  <p class="lead">Before the project started, the client had no website and no proper database. The entire real estate "ledger" consisted of messy Google Drive folders and endless lines in Google Sheets.</p>

  <p>Going to serious B2B partners and agencies with this "DIY spreadsheet" setup was out of the question. The second bottleneck was that buyers could only browse properties by scrolling through a Telegram channel. Finding a specific apartment with certain filters was impossible.</p>

  <blockquote class="pull">
    In high-ticket real estate, you don't run production on Google Drive. We needed a robust, production-grade infrastructure, yet it had to be <em>friction-free and simple</em> for the owner.
  </blockquote>

  <h3 class="section-h3">Before Astro / With New Architecture</h3>

  <div class="compare-grid">
    <div class="compare-col col-without">
      <span class="col-label">— Before</span>
      <ul>
        <li>Database stored in Google Sheets</li>
        <li>Photos scattered in Google Drive</li>
        <li>Property showcase limited to Telegram channel feed</li>
        <li>Finding a specific apartment took hours</li>
        <li>Amateur brand image for B2B partners</li>
      </ul>
    </div>
    <div class="compare-col col-with">
      <span class="col-label">+ After</span>
      <ul>
        <li>Dedicated VPS server with Docker and Traefik</li>
        <li>Professional Headless CMS (Directus) under the hood</li>
        <li>Blazing-fast Astro frontend</li>
        <li>Instant gallery filtering on the fly</li>
        <li>SEO optimization and 98/100 Lighthouse score</li>
      </ul>
    </div>
  </div>
</section>

<!-- ===== 02 Killer Feature ===== -->
<section class="section" id="killer-feature">
  <span class="section-number">02 / Mechanics</span>
  <h2 class="section-h2">The Killer Feature: <em>CMS without UI</em></h2>

  <p>The site runs on the Astro framework. We chose it because Astro outputs pure HTML without bloated client-side JavaScript. As a result, the property gallery works <strong>so fast</strong> that you don't even need to click the "Search" button — filters sort objects on the fly as you type.</p>

  <p>But the real magic happens in the admin panel. We deployed Directus as a Headless CMS database. We fully configured it, setting up schemas, relations, and category dependencies.</p>

  <p><strong>Yet the owner practically never touches Directus.</strong></p>
  
  <p>People hate learning new admin panels. So, we made it so that properties in the CMS (which then fly onto the website) aren't uploaded via the web interface. The entire workflow is tied to Telegram. The client simply drops photos and specs into a familiar Telegram bot, the bot automatically maps everything to the right tables in Directus, and Astro rebuilds the showcase page instantly.</p>

  <blockquote class="pull">
    The full power of a relational database is tucked under the hood. For the client, the familiar messenger remained the only website control panel.
  </blockquote>
</section>
