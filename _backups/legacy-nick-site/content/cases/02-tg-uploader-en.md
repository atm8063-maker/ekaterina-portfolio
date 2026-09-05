<span class="case-eyebrow">Case study · AI & Telegram Bots</span>

<h1 class="case-h1">
  Voice-powered Bot: listens to realtor voice notes and fills CRM cards automatically.
</h1>

<p class="case-hero-sub">
  Real estate agents waste hours copy-pasting listing details. We built a Telegram bot (Collector) where realtors drop photos and record brief voice notes right from the property. AI under the hood parses details, writes a high-converting description, and creates a draft record. Bonus: agents don't need CRM access, protecting your database.
</p>

<div class="case-meta-row">
  <span>Project<strong>Real Estate Agency Automation</strong></span>
  <span>Stack<strong>Python, aiogram, Gemini API</strong></span>
  <span>Role<strong>AI Engineer · Backend Developer</strong></span>
  <span>Key Feature<strong>Voice Recognition + Entity Extraction</strong></span>
</div>

<!-- Key stats -->
<div class="results-grid">
  <div class="result-stat">
    <span class="num accent">Voice</span>
    <span class="label">instead of typing<br />20+ distinct fields</span>
  </div>
  <div class="result-stat">
    <span class="num accent">0</span>
    <span class="label">database leak risks<br />(no DB access given)</span>
  </div>
  <div class="result-stat">
    <span class="num">100%</span>
    <span class="label">compatibility with<br />complex legacy ID rules</span>
  </div>
</div>

<!-- ===== 01 Context ===== -->
<section class="section" id="context">
  <span class="section-number">01 / Context</span>
  <h2 class="section-h2">Why classic CRMs <em>kill sales speed</em></h2>

  <p class="lead">The core problem of every real estate agency: realtors hate working with CRMs. Their job is doing showing tours and negotiations, not sitting in an office copy-pasting square footage, floor numbers, and pricing into 20 inputs.</p>

  <p>To post a single listing to the website, the agent had to snap photos, head back to the office/home, copy photos to a PC, write SEO-friendly text, and manually fill the database. If a property was sent by a third-party agent, they had to re-type everything. It was a massive time sink.</p>
  
  <p>The second pain point was <strong>security</strong>. Giving database (CMS) access to all freelance agents created a high risk of someone scraping the entire database right before resigning.</p>

  <h3 class="section-h3">No Bot / With Collector Bot</h3>

  <div class="compare-grid">
    <div class="compare-col col-without">
      <span class="col-label">— Before</span>
      <ul>
        <li>Manual typing from keyboard</li>
        <li>Agents waste hours formatting data sheets</li>
        <li>Security leak risk (everyone has CMS access)</li>
        <li>Agent writes copy & SEO keywords from scratch</li>
        <li>Human errors when typing complex legacy listing IDs</li>
      </ul>
    </div>
    <div class="compare-col col-with">
      <span class="col-label">+ After</span>
      <ul>
        <li>Realtor sends voice notes and photos on the spot</li>
        <li>AI extracts entities and fills database fields</li>
        <li>Write-only access: data leaks are structurally impossible</li>
        <li>AI generates engaging property descriptions</li>
        <li>Bot handles complex legacy ID rules automatically</li>
      </ul>
    </div>
  </div>
</section>

<!-- ===== 02 Killer Feature ===== -->
<section class="section" id="killer-feature">
  <span class="section-number">02 / Under the hood</span>
  <h2 class="section-h2">AI working as a <em>virtual assistant</em></h2>

  <p>The bot workflow matches natural human chatting. The agent drops photos and records a brief voice message (or forwards a text listing from another realtor). Then the automation takes over:</p>

  <ul class="schedule-list">
    <li>
      <span class="when">Transcription</span>
      <span class="what"><strong>Voice Recognition.</strong> The bot converts the voice message into clean text. The raw audio transcription is also saved to the database "for history" to track original listing parameters.</span>
    </li>
    <li>
      <span class="when">AI Parsing</span>
      <span class="what"><strong>Entity Extraction.</strong> An LLM analyzes the text and pulls exact metrics: price, area, floor, rooms, and district. These values are automatically mapped to the correct columns in Directus CMS.</span>
    </li>
    <li>
      <span class="when">Copywriting</span>
      <span class="what"><strong>Description Generation.</strong> Based on raw metrics, the AI drafts a polished, engaging description for the public website catalog.</span>
    </li>
    <li>
      <span class="when">Legacy ID</span>
      <span class="what"><strong>Format Formatting.</strong> The agency used a custom non-sequential ID system (e.g., an "X" at the end denotes "direct deal"). The bot handles these rules and maps IDs cleanly.</span>
    </li>
  </ul>

  <h3 class="section-h3">Zero Trust: Smart Security</h3>

  <p>Since the bot acts strictly as a **collector**, we can securely share its link with all freelance agents. They have no login credentials for Directus. They *cannot* view listings of other realtors or export any database tables.</p>

  <blockquote class="pull">
    Realtors simply feed the funnel. The bot builds a Draft, and the admin approves publication to the site in one click. Property processing time was cut from hours to seconds.
  </blockquote>
</section>
