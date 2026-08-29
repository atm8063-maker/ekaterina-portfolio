<span class="case-eyebrow">Case study · LLM Automation & Content Factory</span>

<h1 class="case-h1">
  Copy Pipeline Bot: outputting 13 format versions in 6 languages from one raw text.
</h1>

<p class="case-hero-sub">
  Why pay translators and copywriters for simple localization? We built a bot powered by Gemini that takes a raw text note and expands it into 13 unique, tone-perfect formats: 6 languages for the multilingual site, dedicated posts for socials, and targeted copy for aggregates.
</p>

<div class="case-meta-row">
  <span>Project<strong>Multilingual Content Factory</strong></span>
  <span>Role<strong>AI Engineer · Prompt Engineering</strong></span>
  <span>Key Feature<strong>Gemini LLM + Directus Integration</strong></span>
</div>

<!-- Key stats -->
<div class="results-grid">
  <div class="result-stat">
    <span class="num accent">13</span>
    <span class="label">text versions from<br />a single prompt</span>
  </div>
  <div class="result-stat">
    <span class="num accent">6</span>
    <span class="label">languages for<br />multilingual SEO</span>
  </div>
  <div class="result-stat">
    <span class="num">Sec</span>
    <span class="label">instant direct<br />CMS imports</span>
  </div>
</div>

<!-- ===== 01 Context ===== -->
<section class="section" id="context">
  <span class="section-number">01 / Context</span>
  <h2 class="section-h2">The hidden overhead of <em>content adaptation</em></h2>

  <p class="lead">The real estate market is global. You can't just publish listings in Russian and expect million-dollar deals. You need versions in English, German, and local languages (like Montenegrin). Plus, site descriptions don't work for Instagram, which requires emojis and tags, while Instagram copy gets flagged on professional property boards.</p>

  <p>Normally, agencies hire copywriters and translators who spend days manual-writing versions of one property description. It is expensive, slow, and the original "sales hooks" get diluted in translation.</p>

  <h3 class="section-h3">No Pipeline / With AI Content Factory</h3>

  <div class="compare-grid">
    <div class="compare-col col-without">
      <span class="col-label">— Before</span>
      <ul>
        <li>Manual translation to English and German</li>
        <li>SMM managers drafting posts for Instagram and Facebook by hand</li>
        <li>Losing original sales hooks and tone in translation</li>
        <li>Hours of delay before listings are ready for distribution</li>
      </ul>
    </div>
    <div class="compare-col col-with">
      <span class="col-label">+ After</span>
      <ul>
        <li>Instant generation of 13 versions via Telegram</li>
        <li>Gemini maintains Tone of Voice across all languages</li>
        <li>Automated formatting adjustments (emojis, markdown, tags)</li>
        <li>Direct integration: outputs write straight into Directus database</li>
      </ul>
    </div>
  </div>
</section>

<!-- ===== 02 Killer Feature ===== -->
<section class="section" id="killer-feature">
  <span class="section-number">02 / Under the hood</span>
  <h2 class="section-h2">One source draft expands to <em>13 distinct formats</em></h2>

  <p>We built this logic into a dedicated module — the Translator Bot. The bot takes a raw text draft (or translated voice note) and pushes it through tailored Gemini prompts. Out comes a content matrix ready for distribution:</p>

  <ul class="schedule-list">
    <li>
      <span class="when">6 Versions</span>
      <span class="what"><strong>For the Multilingual Site.</strong> Localized SEO descriptions in 6 languages. Gemini handles real estate terminology cleanly (e.g., studio, penthouse, sea-view penthouse).</span>
    </li>
    <li>
      <span class="when">3 Versions</span>
      <span class="what"><strong>For Social Channels.</strong> Custom-written posts matching platform styles for Instagram (emojis, tags), Facebook, and native Telegram channels.</span>
    </li>
    <li>
      <span class="when">1 Version</span>
      <span class="what"><strong>Sanitized Telegram Copy.</strong> Clean version without external links or bold markdown formatting to broadcast in external competitor groups without triggering spam blocks.</span>
    </li>
    <li>
      <span class="when">4 Versions</span>
      <span class="what"><strong>For Classified Ad Boards.</strong> German, English, Montenegrin, and Russian copy tailored for regional ad board formats.</span>
    </li>
  </ul>

  <h3 class="section-h3">Automation Pipelined Directly</h3>

  <p>The best part: administrators don't have to copy-paste these 13 versions from Telegram to the database. The bot is fully integrated with Directus Headless CMS via API. Generated texts are automatically mapped to language-specific columns in the listing's database record, making it ready for instant broadcasting via the Autoposter bot.</p>

  <blockquote class="pull">
    The agent dictates property details, and the system outputs a fully packaged catalog item in 6 languages ready for global publishing.
  </blockquote>
</section>
