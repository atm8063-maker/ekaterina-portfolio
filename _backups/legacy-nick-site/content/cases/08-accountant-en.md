<span class="case-eyebrow">Case study · AI & Data Pipeline</span>

<h1 class="case-h1">
  Accountant Bot: paper invoice parsing and intelligent data routing.
</h1>

<p class="case-hero-sub">
  Replaced manual invoice logging with an intelligent AI pipeline. The manager simply drops a photo of a crumpled invoice in Telegram — Gemini parses the table data, normalizes measurement units (e.g., milliliters to liters), and automatically routes the records and scans into Google Drive and Google Sheets.
</p>

<div class="case-meta-row">
  <span>Project<strong>Document Workflow Automation</strong></span>
  <span>Role<strong>AI Engineer · Backend Development</strong></span>
  <span>Key Feature<strong>Vision API (OCR) + Supabase + Google API</strong></span>
</div>

<!-- Key stats -->
<div class="results-grid">
  <div class="result-stat">
    <span class="num accent">99%</span>
    <span class="label">paper invoices<br />digitized automatically</span>
  </div>
  <div class="result-stat">
    <span class="num accent">0</span>
    <span class="label">manual inputs to<br />spreadsheets</span>
  </div>
  <div class="result-stat">
    <span class="num">Auto</span>
    <span class="label">automatic unit<br />normalization</span>
  </div>
</div>

<!-- ===== 01 Context ===== -->
<section class="section" id="context">
  <span class="section-number">01 / Context</span>
  <h2 class="section-h2">The headache of <em>paper invoices</em></h2>

  <p class="lead">In Montenegro, less than 1% of vendors use electronic document exchanges (EDI). Nearly all stock delivery to restaurants and stores arrives with printed paper invoices.</p>

  <p>To log a product delivery into the system, an accountant or manager must sit at a PC and copy-paste each item name, quantity, and price into endless Google Sheets. It is a grueling, repetitive chore that eats up hours and inevitably leads to typos, inventory mismatches, and discrepancies.</p>

  <h3 class="section-h3">No Bot / With Accountant Bot</h3>

  <div class="compare-grid">
    <div class="compare-col col-without">
      <span class="col-label">— Before</span>
      <ul>
        <li>Hours of manual data entry from physical invoices</li>
        <li>High human-error risk (price typos)</li>
        <li>Document photos lost in messy group chats</li>
        <li>Unit mismatches: vendor bills 750ml, but database requires liters</li>
      </ul>
    </div>
    <div class="compare-col col-with">
      <span class="col-label">+ After</span>
      <ul>
        <li>Snap an invoice photo and drop it to a Telegram bot</li>
        <li>AI parses table text and returns a clean PDF draft for review</li>
        <li>Bot automatically converts 750ml to 0.75l for clean inventory metrics</li>
        <li>Archiving: scans upload straight to target Google Drive folders</li>
      </ul>
    </div>
  </div>
</section>

<!-- ===== 02 Killer Feature ===== -->
<section class="section" id="killer-feature">
  <span class="section-number">02 / Under the hood</span>
  <h2 class="section-h2">Parsing, validation, and <em>routing</em></h2>

  <p>We built a Serverless architecture powered by Supabase and Gemini Vision API. The entire document ingestion pipeline finishes in seconds and is guarded against LLM hallucinations with human-in-the-loop validation.</p>

  <ul class="schedule-list">
    <li>
      <span class="when">Step 1: Parsing</span>
      <span class="what"><strong>Vision API.</strong> The user snaps and sends an invoice photo to the bot. Gemini processes the image, reads the table structure, and extracts raw data.</span>
    </li>
    <li>
      <span class="when">Step 2: Validation</span>
      <span class="what"><strong>Review.</strong> The bot compiles the parsed rows into a clean PDF preview and sends it back to the user. The manager compares the PDF with the physical paper and taps "Confirm" if it matches.</span>
    </li>
    <li>
      <span class="when">Step 3: Routing</span>
      <span class="what"><strong>Google Drive.</strong> The bot automatically creates a dedicated archive folder on Google Drive and uploads both the original photo and the generated PDF.</span>
    </li>
    <li>
      <span class="when">Step 4: Normalization</span>
      <span class="what"><strong>Data Pipeline.</strong> The records are pushed into shared Google Sheets. Simultaneously, the bot normalizes metrics: if a vendor lists 750ml, the bot converts it to 0.75 liters so warehouse tracking balances correctly. Sheets are compiled in both Russian and Montenegrin.</span>
    </li>
  </ul>

  <blockquote class="pull">
    We turned a crumpled piece of paper into a structured, normalized database record, saving the client dozens of hours of manual labor every month.
  </blockquote>
</section>
