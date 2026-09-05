<span class="case-eyebrow">Case study · Management & Mobile-first</span>

<h1 class="case-h1">
  Telegram Admin Panel: manage your entire real estate database on the fly.
</h1>

<p class="case-hero-sub">
  Why train realtors on complex desktop CMSs? We migrated the database control panel right into Telegram. Adjust prices, update photos, set featured images, or flag properties as 'Sold' in a couple of clicks. The site updates instantly, and the realtor doesn't even need to open a laptop.
</p>

<div class="case-meta-row">
  <span>Project<strong>Mobile-first Real Estate Ops</strong></span>
  <span>Stack<strong>Python, aiogram, Directus CMS</strong></span>
  <span>Role<strong>Architecture · Backend Development</strong></span>
  <span>Key Feature<strong>Directus API + Telegram Native UI</strong></span>
</div>

<!-- Key stats -->
<div class="results-grid">
  <div class="result-stat">
    <span class="num accent">100%</span>
    <span class="label">management via<br />messenger UI</span>
  </div>
  <div class="result-stat">
    <span class="num accent">0</span>
    <span class="label">hours of employee<br />onboarding time</span>
  </div>
  <div class="result-stat">
    <span class="num">Real-time</span>
    <span class="label">sync with<br />Headless CMS</span>
  </div>
</div>

<!-- ===== 01 Context ===== -->
<section class="section" id="context">
  <span class="section-number">01 / Context</span>
  <h2 class="section-h2">A site is a living thing, not a <em>static archive</em></h2>

  <p class="lead">You can't just publish a property page and forget it. Real estate listings are dynamic: landlords lower prices, cleaning crew updates photos, properties get reserved or sold.</p>

  <p>Normally, editing a listing requires opening a heavy web CMS dashboard on a PC. This means typing in passwords, searching through complex database filters, and hoping you don't accidentally break something while editing. Realtors hate new software interfaces, especially when they spend the entire day on site visits.</p>

  <h3 class="section-h3">No Telegram Admin / With Bot Admin</h3>

  <div class="compare-grid">
    <div class="compare-col col-without">
      <span class="col-label">— Before</span>
      <ul>
        <li>Database editing locked to desktop PCs</li>
        <li>Steep learning curve for onboarding staff on complex CMS</li>
        <li>Price updates delayed until agents get back to office</li>
        <li>Human errors while editing nested database values</li>
      </ul>
    </div>
    <div class="compare-col col-with">
      <span class="col-label">+ After</span>
      <ul>
        <li>Update price or status in two taps on your phone</li>
        <li>Zero entry barrier: everyone knows how to use Telegram</li>
        <li>Instant sync with the Astro-based frontend catalog</li>
        <li>Full control over property photos and highlight badges</li>
      </ul>
    </div>
  </div>
</section>

<!-- ===== 02 Killer Feature ===== -->
<section class="section" id="killer-feature">
  <span class="section-number">02 / Under the hood</span>
  <h2 class="section-h2">Zero Desktop Needed: <em>full media control</em></h2>

  <p>The admin bot hooks up directly to our Headless CMS (Directus) via secure API tokens. When an agent needs to update a listing, they search for it in the bot and receive an interactive control card with inline buttons.</p>

  <ul class="schedule-list">
    <li>
      <span class="when">Statuses</span>
      <span class="what"><strong>Badges and Price Tags.</strong> Property sold? Tap "Sold". Price lowered? Just text the new number. Changes write instantly to the database and reflect live on the website.</span>
    </li>
    <li>
      <span class="when">Media</span>
      <span class="what"><strong>Photo Management.</strong> Realtors can delete a bad photo directly in the chat, swap the thumbnail cover image, or upload fresh photos straight from their phone gallery.</span>
    </li>
    <li>
      <span class="when">UI/UX</span>
      <span class="what"><strong>Utter Simplicity.</strong> No complex hierarchies, nested menus, or cryptic configs. The interface is boiled down to a clean set of intuitive buttons underneath the property photo.</span>
    </li>
  </ul>

  <blockquote class="pull">
    We detached the database from its default web dashboard. Directus securely hosts the data on the server, while realtors work comfortably in their favorite messenger.
  </blockquote>
</section>
