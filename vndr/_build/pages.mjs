// Contact, venues and "Build your machine" pages.
import { MACHINES, INCLUDED, ENQUIRY_EMAIL, PHOTOS, esc, writePage, crumbs, includedGrid } from './lib.mjs';

const check = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"/></svg>';

/* ---------------- Contact ---------------- */
function contactPage() {
  const crumb = crumbs('../', [['Home', 'index.html'], ['Contact']]);
  writePage({
    pagePath: 'contact/',
    active: 'contact',
    title: 'Contact VNDR for Pricing | Vending Machines Shipped Worldwide',
    description: 'Contact VNDR for pricing on ramen, snack, drink and combo vending machines. Shipping to your nearest port is included, worldwide.',
    jsonld: [crumb.ld],
    body: root => `
<section class="article-hero" style="padding-bottom:24px">
  <div class="wrap">
    <div class="inner">
      ${crumb.html}
      <div class="eyebrow reveal">Contact</div>
      <h1 class="reveal">Contact us for pricing.</h1>
      <p class="lede reveal">Tell us what you're looking for and where you are. We'll come back with pricing, shipping to your nearest port, and next steps.</p>
    </div>
  </div>
</section>
<section class="sec" style="padding-top:24px">
  <div class="wrap">
    <div class="enq-grid">
      <div>
        <h2 class="reveal" style="font-size:clamp(26px,3vw,36px)">What happens next</h2>
        <ol class="next-steps reveal">
          <li><b>We reply with pricing</b><span>For the machine and options you're interested in.</span></li>
          <li><b>We confirm shipping</b><span>Included to your nearest port, or we can deliver straight to your door.</span></li>
          <li><b>We help you set up</b><span>Your machine arrives with a step-by-step operating booklet, and we're here for warranty and maintenance support.</span></li>
        </ol>
        <div class="side-card reveal">
          <b>Prefer email?</b>
          <span class="mail">${esc(ENQUIRY_EMAIL)}</span>
        </div>
        <a class="side-card link reveal" href="${root}venues/">
          <b>Got a venue instead?</b>
          <span>If you'd like a vending machine at your premises, use the venue form →</span>
        </a>
      </div>
      <form id="contactForm" class="reveal" novalidate>
        <div class="f"><label for="cName">Name</label><input id="cName" name="name" autocomplete="name" required data-label="Name"></div>
        <div class="f"><label for="cEmail">Email</label><input id="cEmail" name="email" type="email" autocomplete="email" required data-label="Email"></div>
        <div class="f"><label for="cPhone">Phone <span class="muted">(optional)</span></label><input id="cPhone" name="phone" type="tel" autocomplete="tel" data-label="Phone"></div>
        <div class="f"><label for="cWhere">Country and city</label><input id="cWhere" name="where" autocomplete="country-name" placeholder="e.g. Brisbane, Australia" data-label="Location"></div>
        <div class="f"><label for="cMachine">Interested in</label>
          <select id="cMachine" name="machine" data-label="Interested in">
            <option>Not sure yet</option>
            ${MACHINES.map(m => `<option value="${esc(m.name)}" data-id="${m.id}">${esc(m.name)}</option>`).join('')}
            <option value="Snack and drink combo machine" data-id="combo">Snack and drink combo machine</option>
            <option value="A custom build" data-id="build">A custom build (from the builder)</option>
          </select>
        </div>
        <div class="f"><label for="cQty">How many machines?</label>
          <select id="cQty" name="qty" data-label="How many"><option>1</option><option>2 to 5</option><option>6 to 10</option><option>More than 10</option></select>
        </div>
        <fieldset class="f full" data-label="Where they're at">
          <legend>Where are you at?</legend>
          <div class="stage">
            <label><input type="radio" name="stage" value="Brand new to vending" checked><span>Brand new</span></label>
            <label><input type="radio" name="stage" value="Side hustle"><span>Side hustle</span></label>
            <label><input type="radio" name="stage" value="Investor"><span>Investor</span></label>
            <label><input type="radio" name="stage" value="Existing operator"><span>Existing operator</span></label>
          </div>
        </fieldset>
        <div class="f full"><label for="cMsg">Anything else? <span class="muted">(location ideas, questions, timeline)</span></label><textarea id="cMsg" name="message" data-label="Message"></textarea></div>
        <button type="submit" class="btn btn-primary">Send enquiry <span class="arrow">→</span></button>
        <p class="form-note" id="contactNote">Opens your email app with your details filled in.</p>
      </form>
    </div>
  </div>
</section>`,
    scripts: `<script>
const form = document.getElementById('contactForm');
mountEnquiryForm(form, { subject: fd => 'VNDR pricing enquiry: ' + fd.get('machine'), note: document.getElementById('contactNote') });
// Pre-fill from the machine or builder the visitor came from
const pre = takeEnquiry(), sel = document.getElementById('cMachine');
if (pre.machine) { const o = [...sel.options].find(o => o.dataset.id === pre.machine); if (o) sel.value = o.value; }
if (pre.message) { document.getElementById('cMsg').value = pre.message; if (/^My build/.test(pre.message)) sel.value = 'A custom build'; }
</script>`
  });
}

/* ---------------- Venues ---------------- */
const VENUE_TYPES = ['Office or workplace', 'University or college', 'School', 'Student accommodation', 'Apartment building', 'Gym or sports centre', 'Hospital or healthcare', 'Warehouse, factory or distribution centre', 'Hotel', 'Shopping centre or retail', 'Transport hub', 'Entertainment venue', 'Other'];
const FOOTFALL = ['Fewer than 50', '50 to 200', '200 to 500', '500 to 1,000', '1,000 to 5,000', 'More than 5,000'];
const VENUE_MACHINES = ['Ramen', 'Snack', 'Refrigerated snack', 'Drinks', 'Snack and drink combo', 'Not sure yet'];

function venuesPage() {
  const crumb = crumbs('../', [['Home', 'index.html'], ['For venues']]);
  writePage({
    pagePath: 'venues/',
    active: 'venues',
    title: 'Get a Vending Machine for Your Venue | VNDR',
    description: 'Want a ramen, snack or drinks vending machine at your venue? Tell VNDR about your location, how many people visit and where in the world you are.',
    jsonld: [crumb.ld],
    body: root => `
<section class="article-hero" style="padding-bottom:24px">
  <div class="wrap">
    <div class="inner">
      ${crumb.html}
      <div class="eyebrow reveal">For venues</div>
      <h1 class="reveal">Want a vending machine at your venue?</h1>
      <p class="lede reveal">Tell us about your space and the people in it. We'll come back to you about the right machine and the next steps, wherever you are in the world.</p>
    </div>
  </div>
</section>
<section class="sec" style="padding-top:24px">
  <div class="wrap">
    <div class="bcards" style="margin-bottom:48px">
      <div class="bcard reveal"><h3>Food and drinks on site</h3><p>Give staff, students, guests or members something to eat and drink without leaving, at any hour.</p></div>
      <div class="bcard reveal"><h3>A machine that fits</h3><p>Hot ramen, snacks, chilled food, drinks or a combo. We'll match it to your space and your people.</p></div>
      <div class="bcard reveal"><h3>Anywhere in the world</h3><p>We ship worldwide, and every machine is set up for local power and takes card payments through Nayax.</p></div>
    </div>
    <div class="enq-grid">
      <div>
        <h2 class="reveal" style="font-size:clamp(26px,3vw,36px)">Tell us about your venue</h2>
        <p class="muted reveal" style="margin-top:12px;max-width:40ch">The more we know about your space, the better we can match the machine. It takes about a minute.</p>
        <div class="side-card reveal" style="margin-top:28px">
          <b>Prefer email?</b>
          <span class="mail">${esc(ENQUIRY_EMAIL)}</span>
        </div>
      </div>
      <form id="venueForm" class="reveal" novalidate>
        <div class="f"><label for="vVenue">Venue or business name</label><input id="vVenue" name="venue" autocomplete="organization" data-label="Venue"></div>
        <div class="f"><label for="vName">Your name</label><input id="vName" name="name" autocomplete="name" required data-label="Name"></div>
        <div class="f"><label for="vEmail">Email</label><input id="vEmail" name="email" type="email" autocomplete="email" required data-label="Email"></div>
        <div class="f"><label for="vPhone">Phone <span class="muted">(optional)</span></label><input id="vPhone" name="phone" type="tel" autocomplete="tel" data-label="Phone"></div>
        <div class="f"><label for="vType">Type of location</label>
          <select id="vType" name="type" data-label="Type of location"><option value="">Choose one</option>${VENUE_TYPES.map(t => `<option>${esc(t)}</option>`).join('')}</select>
        </div>
        <div class="f"><label for="vPeople">People there on an average day</label>
          <select id="vPeople" name="people" data-label="People per day"><option value="">Choose one</option>${FOOTFALL.map(t => `<option>${esc(t)}</option>`).join('')}</select>
        </div>
        <fieldset class="f full" data-label="Machine type">
          <legend>What type of machine would you like? <span class="muted">(choose any)</span></legend>
          <div class="stage">${VENUE_MACHINES.map(t => `<label><input type="checkbox" name="machines" value="${esc(t)}"><span>${esc(t)}</span></label>`).join('')}</div>
        </fieldset>
        <div class="f"><label for="vCountry">Country</label><input id="vCountry" name="country" autocomplete="country-name" data-label="Country"></div>
        <div class="f"><label for="vCity">City</label><input id="vCity" name="city" autocomplete="address-level2" data-label="City"></div>
        <div class="f full"><label for="vMsg">Anything else? <span class="muted">(opening hours, where the machine would go)</span></label><textarea id="vMsg" name="message" data-label="Message"></textarea></div>
        <button type="submit" class="btn btn-primary">Send venue enquiry <span class="arrow">→</span></button>
        <p class="form-note" id="venueNote">Opens your email app with your details filled in.</p>
      </form>
    </div>
  </div>
</section>`,
    scripts: `<script>
mountEnquiryForm(document.getElementById('venueForm'), { subject: fd => 'Venue enquiry: ' + (fd.get('venue') || fd.get('name')), note: document.getElementById('venueNote') });
</script>`
  });
}

/* ---------------- Build your machine ---------------- */
const TYPES = [
  { id: 'ramen', name: 'Ramen', sub: 'Hot noodles with a built-in hot-water station', photo: 'ramenBlack' },
  { id: 'snack', name: 'Snack', sub: 'Chips, chocolate, bars and more', photo: 'snackHall' },
  { id: 'drinks', name: 'Drinks', sub: 'Water, soft drinks, energy drinks', photo: 'studioFront2' },
  { id: 'combo', name: 'Snack + drink combo', sub: 'Snacks and drinks in one machine', photo: 'snackFront' }
];

function opt(name, value, title, sub, checked, extra = '') {
  return `<label class="opt"><input type="radio" name="${name}" value="${esc(value)}" ${checked ? 'checked' : ''}><span class="opt-body">${extra}<b>${esc(title)}</b>${sub ? `<small>${sub}</small>` : ''}</span></label>`;
}

function buildPage() {
  const crumb = crumbs('../', [['Home', 'index.html'], ['Build your machine']]);
  writePage({
    pagePath: 'build/',
    active: 'build',
    title: 'Build Your Vending Machine | VNDR',
    description: 'Build your own vending machine: ramen, snack, drinks or combo, refrigerated or ambient, touchscreen or keypad. Custom wrap, Nayax card reader and worldwide shipping included.',
    jsonld: [crumb.ld],
    body: root => `
<section class="article-hero" style="padding-bottom:16px">
  <div class="wrap">
    <div class="inner">
      ${crumb.html}
      <div class="eyebrow reveal">Build your machine</div>
      <h1 class="reveal">Build your vending machine.</h1>
      <p class="lede reveal">Choose the type and options, and how you'd like it delivered. We'll come back with pricing.</p>
    </div>
  </div>
</section>
<section class="sec" style="padding-top:24px">
  <div class="wrap">
    <form class="cfg" id="cfg" novalidate>
      <div class="cfg-steps">
        <fieldset class="cfg-step">
          <legend><span class="n">01</span>Machine type</legend>
          <div class="opts opts-4">${TYPES.map((t, i) => opt('type', t.id, t.name, esc(t.sub), i === 0, `<img src="${root}${PHOTOS[t.photo].file}-sm.jpg" alt="" loading="lazy" width="320" height="400">`)).join('')}</div>
        </fieldset>
        <fieldset class="cfg-step" id="stepTemp">
          <legend><span class="n">02</span>Temperature</legend>
          <div class="opts">${opt('temp', 'Ambient', 'Ambient', 'No refrigeration. For shelf-stable snacks.', false)}${opt('temp', 'Refrigerated', 'Refrigerated', 'Chilled food and cold drinks.', true)}</div>
          <p class="cfg-note" id="tempNote" hidden>${check}Hot water is temperature controlled, and you can adjust it on the machine.</p>
        </fieldset>
        <fieldset class="cfg-step">
          <legend><span class="n">03</span>Ordering</legend>
          <div class="opts">${opt('ui', 'Touchscreen', 'Touchscreen', 'Large interactive ordering screen.', true)}${opt('ui', 'Keypad', 'Keypad', 'Simple, familiar selection.', false)}</div>
          <p class="cfg-note" id="uiNote" hidden>The ramen machine comes with a touchscreen.</p>
        </fieldset>
        <fieldset class="cfg-step">
          <legend><span class="n">04</span>Payments</legend>
          <div class="opts">
            <label class="opt"><input type="checkbox" checked disabled><span class="opt-body"><b>Nayax card reader</b><small>Card, tap and phone payments.</small><em class="inc">Included</em></span></label>
            <label class="opt"><input type="checkbox" name="cash" value="yes"><span class="opt-body"><b>Add a cash slot</b><small>Accept notes and coins too.</small><em class="inc">No extra cost</em></span></label>
          </div>
        </fieldset>
        <fieldset class="cfg-step">
          <legend><span class="n">05</span>Wrap</legend>
          <div class="opts">${opt('wrap', 'VNDR design', 'VNDR design', 'Our clean black VNDR look.<em class="inc">Included</em>', true)}${opt('wrap', 'My own branding', 'My own branding', 'Your logo, colours and artwork.<em class="inc">Included</em>', false)}</div>
        </fieldset>
        <fieldset class="cfg-step">
          <legend><span class="n">06</span>Delivery</legend>
          <div class="opts">${opt('ship', 'To my nearest port', 'To my nearest port', 'Worldwide.<em class="inc">Included</em>', true)}${opt('ship', 'Straight to my door', 'Straight to my door', 'Door-to-door delivery, worldwide.', false)}</div>
        </fieldset>
        <fieldset class="cfg-step">
          <legend><span class="n">07</span>How many, and where?</legend>
          <div class="cfg-row">
            <div class="f"><label for="qty">Number of machines</label>
              <div class="qty"><button type="button" data-q="-1" aria-label="One fewer">−</button><input id="qty" name="qty" type="number" min="1" max="500" value="1" inputmode="numeric"><button type="button" data-q="1" aria-label="One more">+</button></div>
            </div>
            <div class="f"><label for="country">Country</label><input id="country" name="country" autocomplete="country-name" placeholder="e.g. Australia"></div>
          </div>
          <p class="cfg-note">${check}Every machine is set up for the power supply in your country.</p>
        </fieldset>
      </div>

      <aside class="cfg-sum" aria-live="polite">
        <figure class="cfg-photo"><img id="sumImg" src="${root}${PHOTOS.ramenBlack.file}-sm.jpg" alt="" width="640" height="800"></figure>
        <div class="eyebrow" style="margin:20px 0 6px">Your machine</div>
        <h2 id="sumTitle">Ramen machine</h2>
        <dl class="sum-list" id="sumList"></dl>
        <details class="sum-inc"><summary>Included with every machine</summary><ul>${INCLUDED.map(([h]) => `<li>${check}${esc(h)}</li>`).join('')}</ul></details>
        <button type="submit" class="btn btn-primary" style="width:100%;margin-top:20px">Contact us for pricing <span class="arrow">→</span></button>
        <p class="form-note" style="margin-top:10px">Takes your build to the contact form.</p>
      </aside>
    </form>
  </div>
</section>
<section class="sec">
  <div class="wrap">
    <div class="sec-head"><div class="eyebrow reveal">Included</div><h2 class="reveal">Included with every machine.</h2></div>
    ${includedGrid()}
  </div>
</section>`,
    scripts: root => `<script>
const PH = ${JSON.stringify(Object.fromEntries(['ramenBlack', 'snackHall', 'snackFront', 'studioFront2'].map(k => [k, PHOTOS[k].file])))};
const TYPES = ${JSON.stringify(Object.fromEntries(TYPES.map(t => [t.id, t.name])))};
const form = document.getElementById('cfg');
const val = n => (form.querySelector('[name="' + n + '"]:checked') || {}).value;
function setDisabled(name, value, disabled) {
  const i = form.querySelector('[name="' + name + '"][value="' + value + '"]');
  i.disabled = disabled;
  if (disabled && i.checked) form.querySelector('[name="' + name + '"]:not([value="' + value + '"])').checked = true;
}
function summary() {
  const type = val('type'), ramen = type === 'ramen';
  // Rules: ramen is hot water + touchscreen; drinks are refrigerated
  document.querySelectorAll('#stepTemp .opts').forEach(o => o.hidden = ramen);
  document.getElementById('tempNote').hidden = !ramen;
  setDisabled('temp', 'Ambient', type === 'drinks');
  setDisabled('ui', 'Keypad', ramen);
  document.getElementById('uiNote').hidden = !ramen;
  const temp = ramen ? 'Hot water (adjustable)' : val('temp');
  const photo = ramen ? 'ramenBlack' : type === 'drinks' ? 'studioFront2' : temp === 'Ambient' ? 'snackHall' : 'snackFront';
  document.getElementById('sumImg').src = '${root}' + PH[photo] + '-sm.jpg';
  const title = (ramen ? '' : temp + ' ') + TYPES[type].toLowerCase() + ' machine';
  document.getElementById('sumTitle').textContent = title.charAt(0).toUpperCase() + title.slice(1);
  const qty = Math.max(1, Math.min(500, parseInt(form.qty.value, 10) || 1));
  const rows = [
    ['Type', TYPES[type]], ['Temperature', temp], ['Ordering', val('ui')],
    ['Payments', 'Nayax card reader' + (form.cash.checked ? ' + cash slot' : '')],
    ['Wrap', val('wrap')], ['Delivery', val('ship')], ['Quantity', String(qty)], ['Country', form.country.value.trim() || 'Not set']
  ];
  document.getElementById('sumList').innerHTML = '';
  rows.forEach(([k, v]) => { const d = document.createElement('div'), dt = document.createElement('dt'), dd = document.createElement('dd'); dt.textContent = k; dd.textContent = v; d.append(dt, dd); document.getElementById('sumList').append(d); });
  return 'My build:\\n' + rows.map(([k, v]) => '- ' + k + ': ' + v).join('\\n');
}
form.addEventListener('change', summary);
form.addEventListener('input', summary);
form.addEventListener('click', e => {
  const b = e.target.closest('[data-q]'); if (!b) return;
  form.qty.value = Math.max(1, Math.min(500, (parseInt(form.qty.value, 10) || 1) + +b.dataset.q)); summary();
});
form.addEventListener('submit', e => {
  e.preventDefault();
  const text = summary();
  saveEnquiry({ machine: 'build', message: text });
  location.href = '${root}contact/?config=' + encodeURIComponent(text);
});
summary();
</script>`
  });
}

export function buildPages() {
  contactPage();
  venuesPage();
  buildPage();
}
