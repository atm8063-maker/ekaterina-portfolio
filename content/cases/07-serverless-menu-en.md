<span class="case-eyebrow">Case study · FoodTech & Serverless</span>

<h1 class="case-h1">
  Serverless Menu: digital restaurant cart powered by Telegram admin.
</h1>

<p class="case-hero-sub">
  Ditched boring PDF menus for an interactive Serverless App (Netlify + Supabase) wrapped inside a Telegram Mini App. Guests place orders from their phones, while the owner manages the menu via an admin bot: scheduling discounts, disabling sold-out items, and automatically hiding the 'Breakfasts' category after 1:00 PM.
</p>

<div class="case-meta-row">
  <span>Project<strong>Restaurant Digitization</strong></span>
  <span>Role<strong>Fullstack Development</strong></span>
  <span>Key Feature<strong>Serverless + Telegram Mini App</strong></span>
</div>

<!-- Key stats -->
<div class="results-grid">
  <div class="result-stat">
    <span class="num accent">$0</span>
    <span class="label">frontend hosting cost<br />(Netlify Serverless)</span>
  </div>
  <div class="result-stat">
    <span class="num accent">1:00 PM</span>
    <span class="label">auto-hiding<br />breakfast category</span>
  </div>
  <div class="result-stat">
    <span class="num">100%</span>
    <span class="label">controlled via<br />smartphone (Bot)</span>
  </div>
</div>

<!-- ===== 01 Context ===== -->
<section class="section" id="context">
  <span class="section-number">01 / Context</span>
  <h2 class="section-h2">Why PDF and paper are <em>ancient history</em></h2>

  <p class="lead">Printed menus are expensive and rigid. They get dirty, tear, and changing a price on a single cocktail requires re-layout and reprinting. Many restaurants shifted to scanning QR codes for PDF menus, but that's a hassle for guests: scrolling through tiny text on a phone is annoying, and you still can't place an order without waving down a waiter.</p>

  <p>The restaurateur needed a flexible solution to update prices, toggle stop-lists, and build a guest database without calling developers or designers.</p>

  <h3 class="section-h3">No Digital Menu / With Serverless Menu</h3>

  <div class="compare-grid">
    <div class="compare-col col-without">
      <span class="col-label">— Before</span>
      <ul>
        <li>Price updates require a graphic designer and printing shop</li>
        <li>When a dish runs out, the waiter apologizes at the table</li>
        <li>Unclickable PDF file linked to a QR code</li>
        <li>Zero data collection on guest preferences</li>
      </ul>
    </div>
    <div class="compare-col col-with">
      <span class="col-label">+ After</span>
      <ul>
        <li>Full-featured interactive catalog with shopping cart</li>
        <li>Price updates and stop-lists controlled from a smartphone</li>
        <li>Application runs directly inside Telegram (Mini App)</li>
        <li>Micro-CRM that tracks and collects guest birthdays</li>
      </ul>
    </div>
  </div>
</section>

<!-- ===== 02 Killer Feature ===== -->
<section class="section" id="killer-feature">
  <span class="section-number">02 / Under the hood</span>
  <h2 class="section-h2">Modern architecture and a <em>mobile dashboard</em></h2>

  <p>Technically, the project is split into two layers. The first is a <strong>Serverless frontend</strong> hosted on Netlify, which ensures instant loading speeds and zero hosting bills. The database and backend logic run on <strong>Supabase</strong> (a modern PostgreSQL-based Firebase alternative).</p>

  <p>The second layer is the <strong>Telegram infrastructure</strong>. Guests browse the menu inside Telegram via Mini App, select grid styles, add items to their cart, and place orders.</p>

  <p>For the restaurant owner, we built a dedicated <strong>Admin Bot</strong> with the following features:</p>

  <ul class="schedule-list">
    <li>
      <span class="when">Stop-list</span>
      <span class="what"><strong>Item Hiding.</strong> If a steak runs out, the manager toggles it off in the bot. The item vanishes from guests' menus instantly.</span>
    </li>
    <li>
      <span class="when">Scheduler</span>
      <span class="what"><strong>Category Timers.</strong> Set schedules: e.g., the 'Breakfast' category automatically hides from the storefront after 1:00 PM. No manual intervention required.</span>
    </li>
    <li>
      <span class="when">Marketing</span>
      <span class="what"><strong>Promotional Features.</strong> Pin items to the top, toggle "Promo" badges, or display crossed-out original prices (hot prices) to stimulate sales.</span>
    </li>
    <li>
      <span class="when">Orders</span>
      <span class="what"><strong>Order Management.</strong> New orders (dine-in, takeout, or delivery) drop into the bot, where managers can view order histories and sales graphs.</span>
    </li>
  </ul>

  <blockquote class="pull">
    We built a pocket remote control for the restaurant. No clunky CRM web screens on a PC — everything from price editing to order routing and birthday congratulations is handled inside the messenger.
  </blockquote>
</section>
