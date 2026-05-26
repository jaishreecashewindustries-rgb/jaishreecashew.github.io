
// ── PRODUCTS DATA (live — populated from Firestore) ──
// This array is kept in sync with Firestore via onSnapshot.
// Do NOT hardcode products here; add/edit/delete via the Admin Panel.
let PRODUCTS = [];

// ── SEED PRODUCTS — written to Firestore once if collection is empty ──
const SEED_PRODUCTS = [
  {
    name:"W180 Jumbo Whole", grade:"W180", cat:"whole",
    price:1450, origPrice:1800,
    weight:"250g", badge:"PREMIUM", featured:true,
    desc:"The rarest grade — only 180 kernels per pound. Ideal for premium gifts and luxury confectionery.",
    overview:"<h4>About W180 Jumbo Whole Cashews</h4><p>W180 is the crown jewel of cashew grades — only 180 kernels fit in one pound, making each kernel exceptionally large and visually striking. Sourced from the finest farms in West Africa and Vietnam, these kernels are processed at our RIICO facility in Kaladera using steam technology to ensure maximum hygiene and zero breakage.</p><p>Preferred by luxury confectioners, premium gift hamper brands, and 5-star hotels. The generous size makes every bite a statement of quality. Vacuum packed to preserve freshness for 12 months.</p>",
    pros:["Exceptionally large kernel size","Maximum visual appeal for gifting","Rich, buttery flavour profile","Vacuum packed — 12 month shelf life","Zero artificial preservatives","Export-quality grading"],
    cons:["Higher price point than W240/W320","Limited seasonal availability","May be over-specification for cooking use"],
    specs:[["Grade","W180 (180 kernels per pound)"],["Origin","West Africa / Vietnam (RCN source)"],["Processed at","RIICO Industrial Area, Kaladera, Jaipur"],["Packet Size","250g (standard)"],["Available Sizes","100g · 250g · 500g · 1kg · 5kg (bulk)"],["Shell Life","12 months (vacuum packed)"],["Storage","Cool, dry place. Refrigerate after opening."],["Certifications","FSSAI Compliant"],["MOQ (Bulk)","5 kg"]],
    sizes:["100g","250g","500g","1kg"],
    img:"images/product-w180.webp", imgs:["images/hero-w180.webp"],
    sortOrder:1
  },
  {
    name:"W240 Large Whole", grade:"W240", cat:"whole",
    price:1100, origPrice:1350,
    weight:"250g", badge:"BESTSELLER", featured:true,
    desc:"Generous whole kernels, perfectly uniform. The preferred choice of premium hotels, bakeries, and specialty retailers.",
    overview:"<h4>About W240 Large Whole Cashews</h4><p>W240 strikes the perfect balance between size, flavour, and value. With 240 kernels per pound, these large whole cashews are the most versatile grade — equally at home in premium retail packs, bakery applications, and luxury snacking.</p><p>Our W240 is sourced from top-tier farms and processed at our state-of-the-art facility to deliver consistent colour, size uniformity, and minimal breakage. The benchmark grade for quality-conscious buyers.</p>",
    pros:["Best balance of size and value","High uniformity — consistent appearance","Ideal for baking, snacking, gifting","Widely available all year round","Buttery, mild flavour"],
    cons:["Slightly smaller than W180","More competitive market — check freshness dates"],
    specs:[["Grade","W240 (240 kernels per pound)"],["Origin","West Africa / Vietnam"],["Processed at","RIICO Industrial Area, Kaladera, Jaipur"],["Packet Size","250g (standard)"],["Available Sizes","100g · 250g · 500g · 1kg · 5kg"],["Shell Life","12 months (vacuum packed)"],["MOQ (Bulk)","5 kg"]],
    sizes:["100g","250g","500g","1kg"],
    img:"images/product-w240.webp", imgs:["images/hero-w240.webp"],
    sortOrder:2
  },
  {
    name:"W320 Classic Whole", grade:"W320", cat:"whole",
    price:850, origPrice:1000,
    weight:"250g", badge:null, featured:true,
    desc:"Our highest volume grade — the industry standard. Consistent quality that satisfies both domestic retailers and export buyers.",
    overview:"<h4>About W320 Classic Whole Cashews</h4><p>W320 is the world's most traded cashew grade — and for good reason. With 320 kernels per pound, these are perfectly sized for everyday premium use: cooking, snacking, mithai-making, and retail. Our W320 kernels are known for exceptional whiteness, uniform size, and low moisture content.</p><p>Jai Shree Cashew's W320 is trusted by 300+ domestic distributors and retail chains across Rajasthan and beyond. Available year-round with reliable supply.</p>",
    pros:["Most economical whole grade","Perfect for cooking and everyday use","Available in bulk quantities","Consistent supply all year","Industry-standard grade — easy to resell"],
    cons:["Not suitable for premium gifting (smaller size)","Lower visual impact than W180/W240"],
    specs:[["Grade","W320 (320 kernels per pound)"],["Origin","West Africa / Vietnam / India"],["Processed at","RIICO Industrial Area, Kaladera, Jaipur"],["Packet Size","250g (standard)"],["Available Sizes","250g · 500g · 1kg · 5kg · 10kg · 25kg"],["Shell Life","12 months (vacuum packed)"],["MOQ (Bulk)","10 kg"]],
    sizes:["250g","500g","1kg","5kg"],
    img:"images/product-w320.webp", imgs:["images/hero-w320.webp"],
    sortOrder:3
  },
  {
    name:"Roasted & Salted", grade:"ROASTED", cat:"processed",
    price:780, origPrice:920,
    weight:"200g", badge:"NEW", featured:false,
    desc:"Perfectly roasted with a light sea salt finish. Our most popular ready-to-eat variant.",
    overview:"<h4>About Roasted & Salted Cashews</h4><p>Made from our finest W320 whole kernels, roasted to perfection in a controlled-temperature oven and finished with premium sea salt. No oil added — dry roasted for a clean, satisfying crunch.</p><p>The perfect anytime snack and a bestseller in our retail range. Resealable pack ensures freshness after opening.</p>",
    pros:["Ready-to-eat convenience","Dry roasted — no added oil","Light, even salt coating","W320 base kernels — consistent quality","Resealable packaging"],
    cons:["Not suitable for cooking applications","Shorter shelf life than raw (6 months)","Contains salt — not suitable for low-sodium diets"],
    specs:[["Type","Dry Roasted & Salted"],["Base Grade","W320 Whole"],["Salt","Sea Salt (0.8%)"],["Oil","None (Dry Roasted)"],["Packet Size","200g"],["Available Sizes","100g · 200g · 500g"],["Shell Life","6 months"]],
    sizes:["100g","200g","500g"],
    img:"images/product-pieces.webp", imgs:["images/gallery-2.webp"],
    sortOrder:4
  },
  {
    name:"Cashew Pieces", grade:"PIECES", cat:"processed",
    price:620, origPrice:720,
    weight:"250g", badge:null, featured:false,
    desc:"Broken cashew pieces — perfect for cooking, mithai, ice cream, and bulk baking. Same quality, lower price.",
    overview:"<h4>About Cashew Pieces</h4><p>Cashew pieces are the by-product of whole kernel grading — same premium quality, at a fraction of the cost. Ideal for applications where whole kernel presentation is not required: halwa, kheer, barfi, ice cream toppings, biryanis, and industrial baking.</p><p>Our pieces come in mixed sizes (W320 base) with the same flavour profile as our whole grades. A smart choice for high-volume buyers.</p>",
    pros:["Most economical cashew option","Same flavour as whole grades","Ideal for cooking and mithai","High volume — consistent supply","Zero compromise on taste"],
    cons:["Not suitable for retail gifting","Mixed sizes — not uniform","Lower shelf-life visibility"],
    specs:[["Type","Cashew Pieces (Mixed)"],["Base Grade","W320"],["Origin","Kaladera Processing Unit"],["Packet Size","250g"],["Available Sizes","250g · 500g · 1kg · 10kg · 25kg"],["Shell Life","10 months (vacuum)"],["MOQ (Bulk)","5 kg"]],
    sizes:["250g","500g","1kg"],
    img:"images/product-roasted.webp", imgs:["images/gallery-production.webp"],
    sortOrder:5
  },
  {
    name:"Raw Cashew Nuts", grade:"RCN", cat:"raw",
    price:480, origPrice:560,
    weight:"500g", badge:null, featured:false,
    desc:"Unprocessed raw cashew nuts for home roasting or industrial processing. Direct from source.",
    overview:"<h4>About Raw Cashew Nuts (RCN)</h4><p>Raw Cashew Nuts are the unprocessed whole cashew in shell, sourced directly from our supplier network in West Africa and Vietnam. We offer RCN for buyers who prefer home roasting, traditional processing, or industrial use.</p><p>Note: RCN shells contain cashew shell liquid (CNSL) — please handle with care and process before consumption. Not for direct eating.</p>",
    pros:["Unprocessed — maximum freshness potential","Available in bulk at wholesale prices","Suitable for home processing","Long shelf life (18 months unshelled)"],
    cons:["Cannot be eaten directly — requires shelling","Shell contains CNSL — handle with gloves","Processing required before consumption"],
    specs:[["Type","Raw Cashew Nut (In-Shell)"],["KOR","46–50 (depends on origin)"],["Origin","West Africa / Vietnam"],["Packet Size","500g"],["Available Sizes","500g · 1kg · 10kg · 50kg"],["Shell Life","18 months (unshelled)"],["MOQ (Bulk)","10 kg"]],
    sizes:["500g","1kg","10kg"],
    img:"images/product-raw.webp", imgs:["images/gallery-tree.webp"],
    sortOrder:6
  }
];

// ── FIRESTORE PRODUCT HELPERS ──

// Convert a Firestore doc snapshot to the local product shape
function _docToProduct(docSnap) {
  const d = docSnap.data();
  return {
    // Use the Firestore doc ID as our product id (string is fine everywhere we do find/filter)
    id: docSnap.id,
    name: d.name || '',
    grade: d.grade || '',
    cat: d.cat || 'whole',
    price: Number(d.price) || 0,
    origPrice: d.origPrice ? Number(d.origPrice) : null,
    weight: d.weight || '',
    badge: d.badge || null,
    featured: d.featured !== false,
    desc: d.desc || '',
    overview: d.overview || '',
    pros: Array.isArray(d.pros) ? d.pros : [],
    cons: Array.isArray(d.cons) ? d.cons : [],
    specs: Array.isArray(d.specs) ? d.specs : [],
    sizes: Array.isArray(d.sizes) ? d.sizes : [],
    img: d.img || '',
    imgs: Array.isArray(d.imgs) ? d.imgs : (d.img ? [d.img] : []),
    sortOrder: Number(d.sortOrder) || 999,
  };
}

// Start real-time Firestore listener — keeps PRODUCTS in sync automatically
function _startProductsListener() {
  if(!window._db || !window._collection || !window._query || !window._orderBy) return;
  // Dynamically import onSnapshot (not exposed yet in index.html)
  import("https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js").then(({ onSnapshot, query, collection, orderBy, getDocs, addDoc }) => {
    const q = query(collection(window._db, 'products'), orderBy('sortOrder', 'asc'));
    onSnapshot(q, async (snap) => {
      if(snap.empty) {
        // First run — seed default products
        try {
          for(let i = 0; i < SEED_PRODUCTS.length; i++) {
            await addDoc(collection(window._db, 'products'), { ...SEED_PRODUCTS[i], sortOrder: i+1 });
          }
        } catch(e) { console.warn('Seed failed:', e); }
        return; // onSnapshot will fire again after seed
      }
      // Rebuild PRODUCTS from Firestore
      PRODUCTS.length = 0;
      snap.docs.forEach(d => PRODUCTS.push(_docToProduct(d)));
      // Refresh any visible grids
      if(currentPage === 'shop') { renderProducts(); renderRecentlyViewed(); }
      if(currentPage === 'home') renderFeaturedProducts();
      renderAdminProducts();
      safeSet('statProducts', PRODUCTS.length);
      updateCartBadge();
    }, (err) => {
      console.warn('Products listener error:', err);
    });
  }).catch(e => console.warn('onSnapshot import failed:', e));
}

// ── SAFE DOM HELPER ──
function $(id) { return document.getElementById(id); }
function safeSet(id, val) { const el = $(id); if(el) el.textContent = val; }
function safeHTML(id, html) { const el = $(id); if(el) el.innerHTML = html; }
function safeStyle(id, prop, val) { const el = $(id); if(el) el.style[prop] = val; }

// ── CART STATE ──
let cart = [];
try { cart = JSON.parse(localStorage.getItem('jsc_cart') || '[]'); } catch(e) { cart = []; }
let currentFilter = 'all';
let modalProduct = null;
const heroImages = [
  "images/hero-main.webp",
  "images/hero-w320-new.webp",
  "images/hero-w240-new.webp"
];
let heroIdx = 0;

// ── HERO SLIDER ──
function setHero(idx) {
  heroIdx = idx;
  const bg = $('heroBg');
  if(bg) bg.style.backgroundImage = 'url('+heroImages[idx]+')';
  document.querySelectorAll('.hero-dot').forEach((d,i) => d.classList.toggle('active', i===idx));
}
setInterval(() => setHero((heroIdx+1) % heroImages.length), 5000);

// ── RENDER PRODUCTS ──
function renderProducts() {
  const grid = $('productsGrid');
  if(!grid) return;
  if(!PRODUCTS.length) {
    grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:var(--text-soft)"><div style="font-size:32px;margin-bottom:12px">☕</div><div style="font-size:14px;letter-spacing:1px">Loading products...</div></div>';
    const countEl = $('products-count'); if(countEl) countEl.textContent = '—';
    return;
  }
  const filtered = currentFilter==='all' ? PRODUCTS : PRODUCTS.filter(p => p.cat===currentFilter);
  const countEl = $('products-count');
  if(countEl) countEl.textContent = filtered.length + ' products';
  grid.innerHTML = filtered.map(p => {
    const hasDiscount = p.origPrice && p.origPrice > p.price;
    const discPct = hasDiscount ? Math.round((1-p.price/p.origPrice)*100) : 0;
    return `
    <div class="product-card" style="cursor:pointer">
      ${p.badge ? `<div class="badge-new">${p.badge}</div>` : ''}
      ${hasDiscount ? `<div class="badge-sale">${discPct}% OFF</div>` : ''}
      <div class="prod-img-wrap" onclick="openProductDetail('${p.id}')">
        <img src="${p.img}" alt="${p.name}" loading="lazy">
        <div class="prod-overlay"></div>
        <button class="prod-quick" onclick="event.stopPropagation();openModal('${p.id}')">QUICK VIEW</button>
      </div>
      <div class="prod-info">
        <div class="prod-grade">${p.grade}</div>
        <div class="prod-name" onclick="openProductDetail('${p.id}')" style="cursor:pointer">${p.name}</div>
        <div class="prod-weight">${p.weight} pack</div>
        <div class="prod-price-row">
          <div class="prod-price" style="display:inline">₹${p.price}</div>
          ${hasDiscount ? `<span class="prod-price-original">₹${p.origPrice}</span><span class="prod-discount">−${discPct}%</span>` : ''}
        </div>
        <div class="prod-btns">
          <button class="btn-cart" onclick="addToCart('${p.id}')">ADD TO CART</button>
          <button class="btn-wish" onclick="toggleWish(this)">♡</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function filterProducts(cat, el) {
  currentFilter = cat;
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  if(el) el.classList.add('active');
  renderProducts();
}

// ── CART ──
function saveCart() { try { localStorage.setItem('jsc_cart', JSON.stringify(cart)); } catch(e){} updateCartBadge(); }
function updateCartBadge() {
  const total = cart.reduce((a,b) => a+b.qty, 0);
  const badge = $('cartBadge');
  if(badge) badge.textContent = total;
}
function addToCart(id) {
  id = String(id);
  const p = PRODUCTS.find(x => String(x.id)===id);
  if(!p) return;
  const ex = cart.find(x => String(x.id)===id);
  if(ex) ex.qty++; else cart.push({...p, qty:1});
  saveCart(); renderCart(); openCart();
}
function addToCartFromModal() {
  if(modalProduct) { addToCart(modalProduct.id); const mo = $('modalOverlay'); if(mo) mo.classList.remove('open'); }
}
function removeFromCart(id) {
  id = String(id);
  cart = cart.filter(x => String(x.id)!==id);
  saveCart(); renderCart();
}
function updateQty(id, delta) {
  id = String(id);
  const item = cart.find(x => String(x.id)===id);
  if(item) { item.qty += delta; if(item.qty<=0) removeFromCart(id); else { saveCart(); renderCart(); } }
}
function renderCart() {
  const el = $('cartItems');
  const footer = $('cartFooter');
  if(!el) return;
  if(!cart.length) {
    el.innerHTML = '<div class="cart-empty"><div class="cart-empty-icon">🛒</div><p>Your cart is empty</p></div>';
    if(footer) footer.style.display='none'; return;
  }
  if(footer) footer.style.display='block';
  el.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.img}" class="cart-item-img" alt="${item.name}">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">₹${item.price} × ${item.weight}</div>
        <div class="cart-qty">
          <button class="qty-btn" onclick="updateQty(${item.id},-1)">−</button>
          <span>${item.qty}</span>
          <button class="qty-btn" onclick="updateQty(${item.id},1)">+</button>
        </div>
      </div>
      <div class="cart-item-total">₹${item.price*item.qty}</div>
      <button class="cart-remove" onclick="removeFromCart(${item.id})">✕</button>
    </div>
  `).join('');
  const raw = cart.reduce((a,b) => a+b.price*b.qty, 0);
  const subtotalEl = $('cartSubtotal');
  if(subtotalEl) subtotalEl.textContent = '₹'+raw.toLocaleString('en-IN');
  if(appliedCoupon && raw > 0) {
    const saving = Math.round(raw * appliedCoupon.pct / 100);
    const final = raw - saving;
    const savingsAmt = $('cartSavingsAmt');
    if(savingsAmt) savingsAmt.textContent = '−₹'+saving.toLocaleString('en-IN');
    const cartTotal = $('cartTotal');
    if(cartTotal) cartTotal.textContent = '₹'+final.toLocaleString('en-IN');
    const cartSavings = $('cartSavings');
    if(cartSavings) cartSavings.classList.add('show');
  } else {
    const cartTotal = $('cartTotal');
    if(cartTotal) cartTotal.textContent = '₹'+raw.toLocaleString('en-IN');
    const cartSavings = $('cartSavings');
    if(cartSavings) cartSavings.classList.remove('show');
  }
}
function openCart() { const cs=$('cartSidebar'),co=$('cartOverlay'); if(cs) cs.classList.add('open'); if(co) co.classList.add('open'); renderCart(); }
function closeCart() { const cs=$('cartSidebar'),co=$('cartOverlay'); if(cs) cs.classList.remove('open'); if(co) co.classList.remove('open'); }
function checkout() {
  if(typeof Razorpay === 'undefined') { alert('Payment gateway loading. Please try again.'); return; }
  const total = cart.reduce((a,b) => a+b.price*b.qty, 0)*100;
  const options = {
    key:'rzp_live_StJcfZp5KQLYuY',
    amount:total,
    currency:'INR',
    name:'Jai Shree Cashew Industries',
    description:'Premium Cashew Order',
    theme:{color:'#C6A15B'},
    handler: async function(response) {
      // Save order to Firestore (primary) + localStorage (fallback)
      const user = window._currentUser;
      const orderId = 'ORD-'+Date.now().toString().slice(-6);
      const cartSnapshot = cart.slice(); // snapshot before clearing
      const orderTotal = cartSnapshot.reduce((a,b)=>a+b.price*b.qty,0);
      const order = {
        id: orderId,
        customer: user ? (user.displayName||user.email) : 'Guest',
        email: user ? user.email : '',
        userId: user ? user.uid : null,
        phone: '',
        items: cartSnapshot.map(i=>({name:i.name, qty:i.qty, size:i.weight, price:i.price})),
        total: orderTotal,
        status:'processing',
        date: new Date().toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'}),
        createdAt: window._serverTimestamp ? window._serverTimestamp() : new Date(),
        payment:'Razorpay',
        payStatus:'paid',
        razorpay_payment_id: response.razorpay_payment_id||''
      };
      // Save to Firestore
      try {
        if(window._db && window._addDoc && window._collection) {
          await window._addDoc(window._collection(window._db,'orders'), order);
        }
      } catch(err) { console.warn('Firestore order save failed:', err); }
      // Also save to localStorage as backup
      let orders = [];
      try { orders = JSON.parse(localStorage.getItem('jsc_orders')||'[]'); } catch(e){}
      orders.unshift(order);
      try { localStorage.setItem('jsc_orders', JSON.stringify(orders)); } catch(e){}
      // Clear cart
      cart = [];
      saveCart();
      renderCart();
      closeCart();
      alert('✓ Order placed successfully! Order ID: '+orderId);
    }
  };
  new Razorpay(options).open();
}

// ── QUICK VIEW ──
function openModal(id) {
  id = String(id);
  const p = PRODUCTS.find(x => String(x.id)===id);
  if(!p) return;
  modalProduct = p;
  const mi=$('modalImg'), mg=$('modalGrade'), mn=$('modalName'), mp=$('modalPrice'), md=$('modalDesc'), mo=$('modalOverlay');
  if(mi) mi.src = p.img;
  if(mg) mg.textContent = p.grade;
  if(mn) mn.textContent = p.name;
  if(mp) mp.textContent = '₹'+p.price;
  if(md) md.textContent = p.desc;
  if(mo) mo.classList.add('open');
}
function closeModal(e) { if(e.target===e.currentTarget) { const mo=$('modalOverlay'); if(mo) mo.classList.remove('open'); } }

// ── WISHLIST ──
function toggleWish(btn) {
  if(btn.textContent==='♡') { btn.textContent='♥'; btn.style.color='var(--gold)'; btn.style.borderColor='var(--gold)'; }
  else { btn.textContent='♡'; btn.style.color=''; btn.style.borderColor=''; }
}

// ── LIGHTBOX ──
function openLightbox(src) { const li=$('lightboxImg'),lb=$('lightbox'); if(li) li.src=src; if(lb) lb.classList.add('open'); }
function closeLightbox() { const lb=$('lightbox'); if(lb) lb.classList.remove('open'); }

// ── MOBILE MENU ──
function toggleMobile() { const mm=$('mobileMenu'); if(mm) mm.classList.toggle('open'); }

// ── SCROLL ANIMATIONS ──
try {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
  }, {threshold:0.1});
  document.querySelectorAll('.fade-up,.fade-in').forEach(el => observer.observe(el));
} catch(e) {}

// ── FIREBASE INQUIRY SUBMIT ──
async function submitInquiry(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type=submit]');
  if(!btn) return;
  btn.textContent = 'SENDING...'; btn.disabled = true;
  try {
    if(window._db) {
      await window._addDoc(window._collection(window._db, 'inquiries'), {
        name: ($('fname')||{}).value||'',
        phone: ($('fphone')||{}).value||'',
        email: ($('femail')||{}).value||'',
        type: ($('ftype')||{}).value||'',
        grade: ($('fgrade')||{}).value||'',
        qty: ($('fqty')||{}).value||'',
        message: ($('fmsg')||{}).value||'',
        timestamp: window._serverTimestamp ? window._serverTimestamp() : new Date(),
        source: 'website',
        status: 'new',
        userId: window._currentUser ? window._currentUser.uid : null
      });
    }
    const fs = $('formSuccess');
    if(fs) fs.style.display='block';
    const form = $('inquiryForm');
    if(form) form.reset();
  } catch(err) {
    alert('Error submitting. Please WhatsApp us directly.');
  }
  btn.textContent='SEND ENQUIRY'; btn.disabled=false;
}

// ── CUSTOMER DASHBOARD TABS ──
function switchDashTab(tab, el) {
  document.querySelectorAll('#dashOverlay .auth-tab').forEach(t => t.classList.remove('active'));
  if(el) el.classList.add('active');
  ['orders','enquiries','wishlist'].forEach(t => {
    const sec = $('dSection-'+t);
    if(sec) sec.style.display = t===tab ? 'block' : 'none';
  });
  if(tab==='enquiries' && window._currentUser) loadCustomerInquiries(window._currentUser.email);
}

// ── FIREBASE AUTH + DASHBOARD ──
window.onAuthChange = function(user) {
  const loginBtn = $('loginNavBtn');
  const userBtn = $('userNavBtn');
  if(!loginBtn || !userBtn) return;
  if(user) {
    loginBtn.style.display = 'none';
    userBtn.style.display = 'flex';
    const initials = (user.displayName || user.email).charAt(0).toUpperCase();
    safeSet('userAvatarNav', initials);
    safeSet('userNameNav', (user.displayName || 'Account').split(' ')[0]);
    // If coming from redirect, auto-open dashboard
    const wasRedirect = sessionStorage.getItem('jsc_google_redirect');
    if(wasRedirect) {
      sessionStorage.removeItem('jsc_google_redirect');
      if(user.email === window.ADMIN_EMAIL) openAdmin(); else openDashboard();
    }
  } else {
    loginBtn.style.display = 'flex';
    userBtn.style.display = 'none';
  }
};

// ── AUTH MODAL ──
function openAuth() { const ao=$('authOverlay'); if(ao) ao.classList.add('open'); }
function closeAuth() { const ao=$('authOverlay'); if(ao) ao.classList.remove('open'); clearAuthErrors(); }

function switchAuthTab(tab, el) {
  document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
  if(el) el.classList.add('active');
  const formId = 'authForm'+tab.charAt(0).toUpperCase()+tab.slice(1);
  const form = $(formId);
  if(form) form.classList.add('active');
  clearAuthErrors();
}
function clearAuthErrors() {
  document.querySelectorAll('.auth-error').forEach(e => { e.classList.remove('show'); e.textContent = ''; });
}
function showAuthError(id, msg) {
  const el = $(id);
  if(el) { el.textContent = msg; el.classList.add('show'); }
}
function getAuthErrMsg(code) {
  const msgs = {
    'auth/user-not-found': 'No account found with this email.',
    'auth/wrong-password': 'Incorrect password.',
    'auth/email-already-in-use': 'Email already registered. Please sign in.',
    'auth/weak-password': 'Password must be at least 6 characters.',
    'auth/invalid-email': 'Invalid email address.',
    'auth/too-many-requests': 'Too many attempts. Please try again later.',
    'auth/popup-closed-by-user': 'Login cancelled.',
    'auth/invalid-credential': 'Invalid email or password.',
  };
  return msgs[code] || 'Something went wrong. Please try again.';
}

async function doLogin() {
  const emailEl = $('loginEmail'), passEl = $('loginPass');
  const email = emailEl ? emailEl.value.trim() : '';
  const pass = passEl ? passEl.value : '';
  if(!email || !pass) { showAuthError('loginError','Please fill all fields.'); return; }
  try {
    await window._signInWithEmail(email, pass);
    closeAuth();
    if(email === window.ADMIN_EMAIL) openAdmin(); else openDashboard();
  } catch(err) { showAuthError('loginError', getAuthErrMsg(err.code)); }
}

async function doSignup() {
  const nameEl=$('signupName'), emailEl=$('signupEmail'), passEl=$('signupPass');
  const name = nameEl ? nameEl.value.trim() : '';
  const email = emailEl ? emailEl.value.trim() : '';
  const pass = passEl ? passEl.value : '';
  if(!name || !email || !pass) { showAuthError('signupError','Please fill all fields.'); return; }
  try {
    const cred = await window._createUser(email, pass);
    await window._updateProfile(cred.user, { displayName: name });
    closeAuth(); openDashboard();
  } catch(err) { showAuthError('signupError', getAuthErrMsg(err.code)); }
}

async function doGoogleLogin() {
  try {
    const result = await window._signInGoogle();
    if(!result) {
      // Redirect flow initiated - page will reload, handled by getRedirectResult
      return;
    }
    closeAuth();
    if(result.user.email === window.ADMIN_EMAIL) openAdmin(); else openDashboard();
  } catch(err) {
    const code = err.code || '';
    if(code === 'auth/popup-closed-by-user') return;
    // If popup blocked, try redirect
    if(code === 'auth/popup-blocked') {
      if(window._signInGoogleRedirect) {
        await window._signInGoogleRedirect();
        return;
      }
    }
    const msg = getAuthErrMsg(code);
    showAuthError('loginError', msg);
    showAuthError('signupError', msg);
  }
}

async function doSignOut() {
  if(window._signOut) await window._signOut();
  closeDashboard(); closeAdmin();
}

// ── CUSTOMER DASHBOARD ──
function openDashboard() {
  const user = window._currentUser;
  if(!user) { openAuth(); return; }
  if(user.email === window.ADMIN_EMAIL) { openAdmin(); return; }
  const overlay = $('dashOverlay');
  if(overlay) overlay.classList.add('open');
  safeSet('dashTitle', user.displayName || 'My Account');
  safeSet('dashUserInfo', user.email);
  const av = $('dashAvatarBig');
  if(av) av.textContent = (user.displayName || user.email).charAt(0).toUpperCase();
  // Show cart summary in dashboard
  renderDashCartSummary();
  switchDashTab('orders', $('dtab-orders'));
}

function renderDashCartSummary() {
  const el = $('dashCartSummary');
  const cartCountEl = $('dashCartCount');
  const enqCountEl = $('dashEnqCount');
  // Update stat cards
  const cartTotal = cart.reduce((a,b)=>a+b.qty,0);
  if(cartCountEl) cartCountEl.textContent = cartTotal;
  // Count enquiries from localStorage
  if(enqCountEl) {
    const user = window._currentUser;
    if(user && window._db) {
      // Show loading then fetch
      enqCountEl.textContent = '...';
      window._getDocs(window._query(window._collection(window._db,'inquiries'),window._orderBy('timestamp','desc')))
        .then(snap => {
          const mine = snap.docs.filter(d=>(d.data().email||'').toLowerCase()===user.email.toLowerCase()).length;
          enqCountEl.textContent = mine;
        }).catch(()=>{ enqCountEl.textContent = '0'; });
    } else { enqCountEl.textContent = '0'; }
  }
  if(!el) return;
  if(!cart.length) { el.style.display='none'; return; }
  el.style.display='block';
  const total = cart.reduce((a,b)=>a+b.price*b.qty,0);
  const count = cart.reduce((a,b)=>a+b.qty,0);
  el.innerHTML = `
    <div style="background:var(--cream);border:1px solid var(--gold);padding:16px 20px;margin-bottom:20px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px">
      <div>
        <div style="font-size:11px;letter-spacing:2px;color:var(--text-soft);text-transform:uppercase;margin-bottom:4px">Items in Cart</div>
        <div style="font-size:20px;font-weight:600;color:var(--walnut)">${count} item${count>1?'s':''} · ₹${total.toLocaleString('en-IN')}</div>
      </div>
      <button onclick="closeDashboard();openCart()" style="background:var(--walnut);color:var(--gold2);border:none;padding:10px 20px;font-size:11px;letter-spacing:2px;cursor:pointer;font-family:'DM Sans',sans-serif">VIEW CART</button>
    </div>
  `;
}
function closeDashboard() { const d=$('dashOverlay'); if(d) d.classList.remove('open'); }

async function loadCustomerInquiries(email) {
  const container = $('dashInquiries');
  if(!container) return;
  container.innerHTML = '<div class="dash-empty"><div class="dash-empty-icon">⏳</div><div class="dash-empty-text">Loading enquiries...</div></div>';
  try {
    if(!window._db) { container.innerHTML = '<div class="dash-empty"><div class="dash-empty-text">Database not ready</div></div>'; return; }
    const q = window._query(window._collection(window._db, 'inquiries'), window._orderBy('timestamp','desc'));
    const snap = await window._getDocs(q);
    const myDocs = snap.docs.filter(d => (d.data().email||'').toLowerCase() === email.toLowerCase());
    if(!myDocs.length) {
      container.innerHTML = '<div class="dash-empty"><div class="dash-empty-icon">📋</div><div class="dash-empty-text">No enquiries yet</div><div class="dash-empty-sub">Submit a bulk or export enquiry from the contact section.</div></div>';
      return;
    }
    container.innerHTML = myDocs.map(d => {
      const data = d.data();
      const date = data.timestamp?.toDate ? data.timestamp.toDate().toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'}) : '—';
      const status = data.status || 'new';
      const statusLabel = {new:'New',contacted:'Contacted',closed:'Closed'}[status] || status;
      return `<div class="dash-inquiry-card">
        <div class="dash-inquiry-top"><span class="dash-inquiry-grade">${data.grade||'General'}</span><span class="dash-inquiry-date">${date}</span></div>
        <div class="dash-inquiry-type">${data.type||'Enquiry'}</div>
        ${data.qty ? `<div class="dash-inquiry-qty">Quantity: ${data.qty}</div>` : ''}
        ${data.message ? `<div class="dash-inquiry-msg">"${data.message.substring(0,100)}${data.message.length>100?'...':''}"</div>` : ''}
        <span class="dash-inquiry-status status-${status}">${statusLabel}</span>
      </div>`;
    }).join('');
  } catch(err) {
    container.innerHTML = '<div class="dash-empty"><div class="dash-empty-text">Could not load enquiries</div></div>';
  }
}

// ── ADMIN PANEL ──
function openAdmin() {
  const ap = $('adminPanel');
  if(ap) ap.classList.add('open');
  loadAdminInquiries();
  loadAdminOrders();
  renderAdminProducts();
}
function closeAdmin() { const ap=$('adminPanel'); if(ap) ap.classList.remove('open'); }

// Real-time enquiries listener — unsubscribe handle
let _enquiriesUnsub = null;

function loadAdminInquiries() {
  const container = $('adminTableContainer');
  if(!container) return;
  container.innerHTML = '<div class="admin-loading">Loading enquiries...</div>';
  if(!window._db) { container.innerHTML = '<div class="admin-loading">Database not ready.</div>'; return; }
  // Tear down any existing listener
  if(_enquiriesUnsub) { _enquiriesUnsub(); _enquiriesUnsub = null; }
  import("https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js").then(({ onSnapshot, query, collection, orderBy }) => {
    const q = query(collection(window._db, 'inquiries'), orderBy('timestamp','desc'));
    _enquiriesUnsub = onSnapshot(q, (snap) => {
      const docs = snap.docs;
      const total = docs.length;
      const newCount = docs.filter(d => !d.data().status || d.data().status === 'new').length;
      const contacted = docs.filter(d => d.data().status === 'contacted').length;
      safeSet('statTotal', total);
      safeSet('statNew', newCount);
      safeSet('statContacted', contacted);
      if(!total) { container.innerHTML = '<div class="admin-loading">No enquiries yet.</div>'; return; }
      const filterVal = ($('adminEnqFilter')||{}).value || 'all';
      const filtered = filterVal === 'all' ? docs : docs.filter(d => (d.data().status||'new') === filterVal);
      const rows = filtered.map(d => {
        const data = d.data();
        const date = data.timestamp?.toDate ? data.timestamp.toDate().toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit'}) : 'Just now';
        const status = data.status || 'new';
        return `<tr>
          <td><strong>${data.name||'—'}</strong><br><span style="font-size:11px;color:var(--text-soft)">${data.email||''}</span></td>
          <td>${data.phone||'—'}</td>
          <td><span style="font-size:11px;background:var(--cream);padding:2px 8px">${data.grade||'—'}</span></td>
          <td>${data.type||'—'}</td><td>${data.qty||'—'}</td>
          <td style="max-width:180px;font-size:12px;color:var(--text-soft)">${(data.message||'').substring(0,60)}${(data.message||'').length>60?'...':''}</td>
          <td><span style="font-size:11px;color:var(--text-soft)">${date}</span></td>
          <td><select class="admin-status-select" onchange="updateInquiryStatus('${d.id}',this.value)">
            <option value="new" ${status==='new'?'selected':''}>🟡 New</option>
            <option value="contacted" ${status==='contacted'?'selected':''}>🔵 Contacted</option>
            <option value="closed" ${status==='closed'?'selected':''}>🟢 Closed</option>
          </select></td>
        </tr>`;
      }).join('');
      container.innerHTML = `<div style="overflow-x:auto"><table class="admin-table">
        <thead><tr><th>NAME / EMAIL</th><th>PHONE</th><th>GRADE</th><th>TYPE</th><th>QTY</th><th>MESSAGE</th><th>DATE</th><th>STATUS</th></tr></thead>
        <tbody>${rows||'<tr><td colspan="8" style="text-align:center;padding:20px;color:var(--text-soft)">No enquiries match the selected filter.</td></tr>'}</tbody></table></div>`;
    }, (err) => {
      container.innerHTML = '<div class="admin-loading">Error loading. Check Firestore rules.</div>';
      console.error('Enquiries listener error:', err);
    });
  });
}

async function updateInquiryStatus(docId, newStatus) {
  try {
    if(!window._db) return;
    await window._updateDoc(window._doc(window._db, 'inquiries', docId), { status: newStatus });
  } catch(err) { alert('Could not update status.'); }
}

// ── SEARCH ──
function navSearch(val) {
  const drop = $('searchDropdown');
  if(!drop) return;
  val = (val||'').trim().toLowerCase();
  if(!val) { drop.classList.remove('open'); return; }
  const results = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(val) ||
    p.grade.toLowerCase().includes(val) ||
    p.cat.toLowerCase().includes(val) ||
    p.desc.toLowerCase().includes(val)
  );
  if(!results.length) {
    drop.innerHTML = '<div class="search-no-results">No products found for "'+val+'"</div>';
  } else {
    drop.innerHTML = results.map(p => `
      <div class="search-result-item" onclick="openProductDetail('${p.id}');closeNavSearch()">
        <img src="${p.img}" class="search-result-img" alt="${p.name}">
        <div><div class="search-result-name">${p.name}</div><div class="search-result-price">₹${p.price} / ${p.weight}</div></div>
      </div>
    `).join('');
  }
  drop.classList.add('open');
}
function closeNavSearch() {
  const drop = $('searchDropdown');
  if(drop) drop.classList.remove('open');
  const inp = $('navSearchInput');
  if(inp) inp.value = '';
}

// ── COUPON ──
const COUPONS = { 'CASHEW10': 10, 'JAIPUR15': 15, 'BULK20': 20 };
let appliedCoupon = null;
function applyCoupon() {
  const ci=$('couponInput'), msg=$('couponMsg'), savingsEl=$('cartSavings');
  if(!ci || !msg) return;
  const code = ci.value.trim().toUpperCase();
  if(!code) { msg.className='cart-coupon-msg error'; msg.textContent='Please enter a promo code.'; return; }
  if(COUPONS[code]) {
    appliedCoupon = {code, pct: COUPONS[code]};
    msg.className='cart-coupon-msg success'; msg.textContent='✓ '+code+' applied — '+COUPONS[code]+'% off!';
    if(savingsEl) savingsEl.classList.add('show');
    renderCart();
  } else {
    appliedCoupon = null;
    msg.className='cart-coupon-msg error'; msg.textContent='Invalid code. Try: CASHEW10, JAIPUR15, or BULK20';
    if(savingsEl) savingsEl.classList.remove('show');
    renderCart();
  }
}

// ── RECENTLY VIEWED ──
let recentlyViewed = [];
try { recentlyViewed = JSON.parse(localStorage.getItem('jsc_recent')||'[]'); } catch(e) {}

function trackRecentlyViewed(id) {
  id = String(id);
  recentlyViewed = recentlyViewed.filter(x => String(x)!==id);
  recentlyViewed.unshift(id);
  recentlyViewed = recentlyViewed.slice(0,6);
  try { localStorage.setItem('jsc_recent', JSON.stringify(recentlyViewed)); } catch(e){}
}

function renderRecentlyViewed() {
  const wrap = $('recentlyViewedWrap');
  if(!wrap) return;
  const ids = recentlyViewed.filter(id => PRODUCTS.find(p => String(p.id)===String(id)));
  if(!ids.length) { wrap.style.display='none'; return; }
  wrap.style.display = 'block';
  const grid = $('recentlyViewedGrid');
  if(!grid) return;
  grid.innerHTML = ids.map(id => {
    const p = PRODUCTS.find(x => String(x.id)===String(id));
    if(!p) return '';
    return `<div class="recently-viewed-item" onclick="openProductDetail('${p.id}')">
      <img src="${p.img}" class="recently-viewed-img" alt="${p.name}">
      <div class="recently-viewed-name">${p.name}</div>
      <div class="recently-viewed-price">₹${p.price}</div>
    </div>`;
  }).join('');
}

// ══ MULTI-PAGE SYSTEM ══
let currentPage = 'home';
let prevPage = 'home';

function showPage(page) {
  try {
    // Hide all pages
    document.querySelectorAll('.page-section').forEach(p => p.classList.remove('active'));
    prevPage = currentPage !== page ? currentPage : prevPage;
    currentPage = page;
    // Show target page
    const target = $('page-'+page);
    if(target) {
      target.classList.add('active');
    } else {
      // fallback: show home
      const home = $('page-home');
      if(home) home.classList.add('active');
      currentPage = 'home';
    }
    // Page-specific init
    if(page === 'home') {
      renderFeaturedProducts();
      updateCartBadge();
    } else if(page === 'shop') {
      renderProducts();
      updateCartBadge();
      renderRecentlyViewed();
    }
    // Nav active state
    document.querySelectorAll('.nav-page-link').forEach(a => {
      a.classList.toggle('active', a.dataset.page === currentPage);
    });
    // Scroll top
    window.scrollTo({top:0, behavior:'smooth'});
    updateStickyCartBar();
  } catch(err) {
    console.error('showPage error:', err);
  }
}

function renderFeaturedProducts() {
  const grid = $('featuredProductsGrid');
  if(!grid) return;
  // Always use live PRODUCTS array (reflects admin edits)
  const featured = PRODUCTS.filter(p => p.img).slice(0,3);
  grid.innerHTML = featured.map(p => {
    const hasDiscount = p.origPrice && p.origPrice > p.price;
    const discPct = hasDiscount ? Math.round((1-p.price/p.origPrice)*100) : 0;
    return `<div class="product-card" style="cursor:pointer">
      ${p.badge ? `<div class="badge-new">${p.badge}</div>` : ''}
      ${hasDiscount ? `<div class="badge-sale">${discPct}% OFF</div>` : ''}
      <div class="prod-img-wrap" onclick="openProductDetail('${p.id}')">
        <img src="${p.img}" alt="${p.name}" loading="lazy">
        <div class="prod-overlay"></div>
        <button class="prod-quick" onclick="event.stopPropagation();openModal('${p.id}')">QUICK VIEW</button>
      </div>
      <div class="prod-info">
        <div class="prod-grade">${p.grade||''}</div>
        <div class="prod-name" onclick="openProductDetail('${p.id}')">${p.name}</div>
        <div class="prod-weight">${p.weight} pack</div>
        <div class="prod-price-row">
          <span class="prod-price">₹${p.price}</span>
          ${hasDiscount ? `<span class="prod-price-original">₹${p.origPrice}</span><span class="prod-discount">−${discPct}%</span>` : ''}
        </div>
        <div class="prod-btns">
          <button class="btn-cart" onclick="addToCart('${p.id}')">ADD TO CART</button>
          <button class="btn-wish" onclick="toggleWish(this)">♡</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

// ══ PRODUCT DETAIL PAGE ══
let currentPDP = null;
let pdpSelectedSize = '';
let pdpSelectedRating = 0;

function openProductDetail(id) {
  id = String(id);
  const p = PRODUCTS.find(x => String(x.id) === id);
  if(!p) return;
  currentPDP = p;
  pdpSelectedSize = p.sizes ? p.sizes[0] : p.weight;

  try {
    safeSet('pdp-breadcrumb-name', p.name);
    safeSet('pdpGradeTag', 'Grade · '+p.grade);
    safeSet('pdpTitle', p.name);

    const bNew = $('pdpBadgeNew'), bSale = $('pdpBadgeSale');
    if(bNew) { bNew.textContent = p.badge||''; bNew.style.display = p.badge ? '' : 'none'; }
    const hasDiscount = p.origPrice && p.origPrice > p.price;
    const discPct = hasDiscount ? Math.round((1-p.price/p.origPrice)*100) : 0;
    if(bSale) { bSale.textContent = discPct+'% OFF'; bSale.style.display = hasDiscount ? '' : 'none'; }

    safeSet('pdpPrice', '₹'+p.price);
    const origEl = $('pdpPriceOriginal');
    if(origEl) { origEl.textContent = hasDiscount ? '₹'+p.origPrice : ''; origEl.style.display = hasDiscount ? '' : 'none'; }
    const discBadge = $('pdpDiscountBadge');
    if(discBadge) { discBadge.textContent = discPct+'% OFF'; discBadge.style.display = hasDiscount ? '' : 'none'; }
    safeSet('pdpPerUnit', 'Per '+pdpSelectedSize+' pack · Inclusive of all taxes');

    const allImgs = p.imgs && p.imgs.length ? p.imgs : [p.img];
    const mainImg = $('pdpMainImg');
    if(mainImg) mainImg.src = allImgs[0];

    const thumbsEl = $('pdpThumbs');
    if(thumbsEl) thumbsEl.innerHTML = allImgs.map((src,i) =>
      `<img src="${src}" class="pdp-thumb${i===0?' active':''}" alt="${p.name}" onclick="pdpSetMainImg(this,'${src}')">`
    ).join('');

    const sizesEl = $('pdpSizeBtns');
    const sizes = p.sizes || [p.weight];
    if(sizesEl) sizesEl.innerHTML = sizes.map((s,i) =>
      `<button class="pdp-size-btn${i===0?' active':''}" onclick="pdpSelectSize(this,'${s}')">${s}</button>`
    ).join('');

    const qtyVal = $('pdpQtyVal');
    if(qtyVal) qtyVal.value = 1;

    loadPDPReviews(id);

    const overviewEl = $('pdpOverviewText');
    if(overviewEl) overviewEl.innerHTML = p.overview || '<p>'+p.desc+'</p>';
    safeHTML('pdpProsList', (p.pros||[]).map(x=>`<li>${x}</li>`).join(''));
    safeHTML('pdpConsList', (p.cons||[]).map(x=>`<li>${x}</li>`).join(''));
    safeHTML('pdpSpecsTable', (p.specs||[]).map(row=>`<tr><td>${row[0]}</td><td>${row[1]}</td></tr>`).join(''));

    pdpSwitchTab('overview', $('tab-overview'));
  } catch(err) {
    console.error('openProductDetail error:', err);
  }

  showPage('product-detail');
  trackRecentlyViewed(id);
  updateStickyCartBar();
}

function pdpSetMainImg(thumb, src) {
  const main = $('pdpMainImg');
  if(main) main.src = src;
  document.querySelectorAll('.pdp-thumb').forEach(t => t.classList.remove('active'));
  if(thumb) thumb.classList.add('active');
}

function pdpSelectSize(btn, size) {
  document.querySelectorAll('.pdp-size-btn').forEach(b => b.classList.remove('active'));
  if(btn) btn.classList.add('active');
  pdpSelectedSize = size;
  if(currentPDP) safeSet('pdpPerUnit', 'Per '+size+' pack · Inclusive of all taxes');
}

function pdpQtyChange(delta) {
  const inp = $('pdpQtyVal');
  if(!inp) return;
  const val = Math.max(1, parseInt(inp.value||1) + delta);
  inp.value = val;
}

function pdpAddToCart() {
  if(!currentPDP) return;
  const qtyEl = $('pdpQtyVal');
  const qty = qtyEl ? parseInt(qtyEl.value||1) : 1;
  for(let i=0;i<qty;i++) addToCart(currentPDP.id);
  const btn = document.querySelector('.pdp-btn-cart');
  if(btn) {
    btn.textContent = '✓ ADDED TO CART';
    btn.style.background = '#27ae60';
    setTimeout(()=>{ btn.textContent='ADD TO CART'; btn.style.background=''; }, 2000);
  }
}

function pdpToggleWish(btn) {
  if(btn.textContent==='♡') { btn.textContent='♥'; btn.style.color='var(--gold)'; btn.style.borderColor='var(--gold)'; }
  else { btn.textContent='♡'; btn.style.color=''; btn.style.borderColor=''; }
}

function pdpWhatsApp() {
  if(!currentPDP) return;
  const msg = `Hello, I am interested in *${currentPDP.name}* (${pdpSelectedSize}) at ₹${currentPDP.price}. Please confirm availability.`;
  window.open('https://wa.me/917568577968?text='+encodeURIComponent(msg), '_blank');
}

function pdpSwitchTab(tab, el) {
  document.querySelectorAll('.pdp-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.pdp-tab-content').forEach(c => c.classList.remove('active'));
  if(el) el.classList.add('active');
  const tc = $('pdptab-'+tab);
  if(tc) tc.classList.add('active');
}

// ══ REVIEWS ══
let allReviews = [];
try { allReviews = JSON.parse(localStorage.getItem('jsc_reviews')||'[]'); } catch(e){}

const defaultReviews = [
  {id:'r1',productId:1,name:'Ramesh Agarwal',location:'Mumbai',rating:5,title:'Finest cashews I have ever tasted',text:'Ordered W180 for our Diwali gift boxes. The size and quality exceeded expectations. Clients were thoroughly impressed.',date:'12 Nov 2024',verified:true,helpful:8},
  {id:'r2',productId:1,name:'Sunita Mehta',location:'Delhi',rating:5,title:'Premium quality, on-time delivery',text:'Best W180 in Rajasthan. We use it exclusively for our premium gift hampers. Kernel size and whiteness is outstanding.',date:'8 Oct 2024',verified:true,helpful:5},
  {id:'r3',productId:2,name:'Ashok Sharma',location:'Jaipur',rating:4,title:'Good quality, slightly expensive',text:'W240 is excellent — very uniform. Bulk pricing is competitive. The vacuum packing extends shelf life perfectly.',date:'2 Jan 2025',verified:true,helpful:3},
  {id:'r4',productId:3,name:'Priya Verma',location:'Pune',rating:5,title:'Consistent quality every time',text:'W320 is my go-to for cooking. 4 years of ordering and not once has quality disappointed.',date:'15 Mar 2025',verified:true,helpful:12},
  {id:'r5',productId:4,name:'Vikram Singh',location:'Udaipur',rating:5,title:'Perfect dry roast — no oily aftertaste',text:'Finally a dry roasted cashew that actually tastes like cashew, not oil. The sea salt balance is perfect.',date:'20 Feb 2025',verified:true,helpful:7},
];

function getAllReviews(productId) {
  let stored = [];
  try { stored = JSON.parse(localStorage.getItem('jsc_reviews')||'[]'); } catch(e){}
  // Only show approved reviews on the website
  const all = [...defaultReviews, ...stored.filter(r=>!r.pending||r.approved)]
    .filter(r => !productId || String(r.productId) === String(productId));
  return all;
}

function _renderPDPReviews(reviews) {
  const count = reviews.length;
  safeSet('pdpReviewCount', count);
  safeSet('pdpTabReviewCount', count);
  safeSet('pdpBigCount', count+' ratings');
  if(!count) {
    safeHTML('pdpReviewList', '<div class="dash-empty">No reviews yet. Be the first to review!</div>');
    safeSet('pdpBigScore', '—');
    return;
  }
  const avg = (reviews.reduce((a,b) => a+(b.rating||0),0)/count).toFixed(1);
  safeSet('pdpBigScore', avg);
  safeSet('pdpRatingNum', avg);
  const full = Math.floor(avg); const half = avg - full >= 0.5;
  safeSet('pdpStars', '★'.repeat(full)+(half?'½':'')+'☆'.repeat(5-full-(half?1:0)));
  [1,2,3,4,5].forEach(star => {
    const cnt = reviews.filter(r => r.rating===star).length;
    const pct = count ? (cnt/count*100).toFixed(0) : 0;
    const bar = $('bar'+star); if(bar) bar.style.width = pct+'%';
    const cntEl = $('cnt'+star); if(cntEl) cntEl.textContent = cnt;
  });
  const rvList = $('pdpReviewList');
  if(rvList) rvList.innerHTML = reviews.slice().reverse().map(r => {
    const stars = '★'.repeat(r.rating||0)+'☆'.repeat(5-(r.rating||0));
    return `<div class="pdp-review-card">
      <div class="pdp-review-top">
        <div class="pdp-review-author">
          <div class="pdp-review-avatar">${(r.name||'?').charAt(0).toUpperCase()}</div>
          <div><div class="pdp-review-name">${r.name}</div><div class="pdp-review-location">${r.location||''}</div></div>
        </div>
        <div class="pdp-review-date">${r.date||''}</div>
      </div>
      <div class="pdp-review-stars">${stars}</div>
      <div class="pdp-review-title">${r.title||''}</div>
      <div class="pdp-review-text">${r.text||''}</div>
      ${r.verified?'<div class="pdp-review-verified">✓ Verified Purchase</div>':''}
      <div class="pdp-review-helpful"><span>Helpful?</span>
        <button onclick="var n=parseInt(this.dataset.count||'${r.helpful||0}');n++;this.dataset.count=n;this.textContent='👍 '+n;this.disabled=true" data-count="${r.helpful||0}">👍 ${r.helpful||0}</button>
        <button>👎</button>
      </div>
    </div>`;
  }).join('');
}

function loadPDPReviews(productId) {
  // Start with local/default reviews immediately for fast render
  const localReviews = getAllReviews(productId);
  _renderPDPReviews(localReviews);
  // Then fetch from Firestore for live approved reviews
  if(!window._db) return;
  import("https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js").then(({ getDocs, query, collection, where, orderBy }) => {
    // Query approved reviews for this product
    const q = query(
      collection(window._db, 'reviews'),
      where('productId', '==', productId),
      where('approved', '==', true),
      orderBy('createdAt', 'desc')
    );
    getDocs(q).then(snap => {
      const firestoreReviews = snap.docs.map(d => ({ firestoreId:d.id, ...d.data() }));
      // Merge with defaults, deduplicate by id
      const combined = [...defaultReviews, ...firestoreReviews];
      const seen = new Set();
      const deduped = combined.filter(r => { const k = r.firestoreId||r.id; if(seen.has(k)) return false; seen.add(k); return true; });
      _renderPDPReviews(deduped.filter(r => !productId || String(r.productId)===String(productId)));
    }).catch(() => { /* keep local reviews shown */ });
  }).catch(() => {});
}

function pdpSelectStar(val) {
  pdpSelectedRating = val;
  document.querySelectorAll('.pdp-star-select span').forEach((s,i) => {
    s.classList.toggle('active', i < val);
  });
}

async function submitReview() {
  const nameEl=$('rv-name'), locEl=$('rv-loc'), titleEl=$('rv-title'), textEl=$('rv-text');
  const name = nameEl ? nameEl.value.trim() : '';
  const loc = locEl ? locEl.value.trim() : '';
  const title = titleEl ? titleEl.value.trim() : '';
  const text = textEl ? textEl.value.trim() : '';
  if(!pdpSelectedRating) { alert('Please select a star rating.'); return; }
  if(!name || !text) { alert('Please enter your name and review.'); return; }
  const review = {
    id: 'u'+Date.now(),
    productId: currentPDP ? currentPDP.id : 0,
    productName: currentPDP ? currentPDP.name : '',
    name, location:loc, rating:pdpSelectedRating,
    title, text,
    date: new Date().toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'}),
    createdAt: window._serverTimestamp ? window._serverTimestamp() : new Date(),
    verified: !!window._currentUser,
    userId: window._currentUser ? window._currentUser.uid : null,
    userEmail: window._currentUser ? window._currentUser.email : null,
    helpful: 0,
    pending: true,
    approved: false
  };
  // Save to Firestore
  try {
    if(window._db && window._addDoc && window._collection) {
      await window._addDoc(window._collection(window._db,'reviews'), review);
    }
  } catch(e) { console.warn('Firestore review save failed:', e); }
  // Also keep localStorage backup
  let stored = [];
  try { stored = JSON.parse(localStorage.getItem('jsc_reviews')||'[]'); } catch(e){}
  stored.push(review);
  try { localStorage.setItem('jsc_reviews', JSON.stringify(stored)); } catch(e){}
  const success = $('rv-success');
  if(success) success.style.display = 'block';
  if(nameEl) nameEl.value=''; if(locEl) locEl.value='';
  if(titleEl) titleEl.value=''; if(textEl) textEl.value='';
  pdpSelectedRating = 0;
  document.querySelectorAll('.pdp-star-select span').forEach(s => s.classList.remove('active'));
  setTimeout(()=>{ if(success) success.style.display='none'; }, 5000);
}

// ══ SORT PRODUCTS ══
function sortProducts(val) {
  if(val==='price-asc') PRODUCTS.sort((a,b) => a.price-b.price);
  else if(val==='price-desc') PRODUCTS.sort((a,b) => b.price-a.price);
  else if(val==='discount') PRODUCTS.sort((a,b) => {
    const da=a.origPrice?Math.round((1-a.price/a.origPrice)*100):0;
    const db=b.origPrice?Math.round((1-b.price/b.origPrice)*100):0;
    return db-da;
  });
  else PRODUCTS.sort((a,b) => (a.sortOrder||0)-(b.sortOrder||0));
  renderProducts();
}

// ══ ADMIN TAB SWITCHING ══
function adminSwitchTab(tab, el) {
  document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.admin-tab-content').forEach(c => c.classList.remove('active'));
  if(el) el.classList.add('active');
  const tc = $('admintab-'+tab);
  if(tc) tc.classList.add('active');
  if(tab==='enquiries') loadAdminInquiries();
  if(tab==='orders') loadAdminOrders();
  if(tab==='products') renderAdminProducts();
  if(tab==='payments') loadAdminPayments();
  if(tab==='reviews') loadAdminReviews();
}

// ══ ADMIN PRODUCTS ══
function renderAdminProducts() {
  const grid = $('adminProductsGrid');
  if(!grid) return;
  safeSet('statProducts', PRODUCTS.length);
  if(!PRODUCTS.length) {
    grid.innerHTML = '<div class="admin-loading" style="padding:40px;text-align:center"><div style="font-size:28px;margin-bottom:12px">🛍️</div><div>Loading products from database...</div></div>';
    return;
  }
  grid.innerHTML = PRODUCTS.map(p => `
    <div class="admin-product-card">
      <img src="${p.img || 'images/product-w320.webp'}" alt="${p.name}" class="admin-product-img" onerror="this.src='images/product-w320.webp'">
      <div class="admin-product-body">
        <div class="admin-product-name">${p.name}</div>
        <div class="admin-product-price">₹${p.price} ${p.origPrice?`<span style="text-decoration:line-through;color:var(--text-soft);font-size:11px">₹${p.origPrice}</span>`:''}</div>
        <div class="admin-product-actions">
          <button class="btn-edit" onclick="openProductModal('${p.id}')">✏ EDIT</button>
          <button class="btn-delete" onclick="deleteProduct('${p.id}')">✕ DELETE</button>
        </div>
      </div>
    </div>
  `).join('');
}

function openProductModal(id) {
  const modal = $('adminProductModal');
  if(!modal) return;
  modal.classList.add('open');
  if(!id) {
    safeSet('adminProductModalTitle', 'Add New Product');
    const eid=$('editProductId'); if(eid) eid.value='';
    ['ap-name','ap-grade','ap-weight','ap-desc','ap-overview','ap-pros','ap-cons','ap-sizes','ap-badge'].forEach(f=>{ const el=$(f); if(el) el.value=''; });
    const ap=$('ap-price'); if(ap) ap.value='';
    const aop=$('ap-origprice'); if(aop) aop.value='';
    safeHTML('adminPhotoPreview','');
  } else {
    const p = PRODUCTS.find(x => String(x.id)===String(id));
    if(!p) return;
    safeSet('adminProductModalTitle', 'Edit Product: '+p.name);
    const eid=$('editProductId'); if(eid) eid.value=String(p.id);  // Firestore doc ID
    const setVal=(fid,val)=>{ const el=$(fid); if(el) el.value=val||''; };
    setVal('ap-name',p.name); setVal('ap-grade',p.grade); setVal('ap-cat',p.cat);
    setVal('ap-weight',p.weight); setVal('ap-price',p.price); setVal('ap-origprice',p.origPrice||'');
    setVal('ap-desc',p.desc);
    setVal('ap-overview',(p.overview||'').replace(/<[^>]+>/g,''));
    setVal('ap-pros',(p.pros||[]).join('\n'));
    setVal('ap-cons',(p.cons||[]).join('\n'));
    setVal('ap-sizes',(p.sizes||[]).join(', '));
    setVal('ap-badge',p.badge||'');
    const preview = $('adminPhotoPreview');
    const imgs = p.imgs||[p.img];
    if(preview) preview.innerHTML = imgs.map((src,i)=>`<div class="admin-photo-preview-item"><img src="${src}"><button class="admin-photo-remove" onclick="this.parentElement.remove()">✕</button></div>`).join('');
  }
}

function closeProductModal() { const m=$('adminProductModal'); if(m) m.classList.remove('open'); }

function previewProductPhotos(input) {
  const preview = $('adminPhotoPreview');
  if(!preview || !input.files) return;
  Array.from(input.files).forEach(file => {
    const reader = new FileReader();
    reader.onload = e => {
      const div = document.createElement('div');
      div.className = 'admin-photo-preview-item';
      div.innerHTML = `<img src="${e.target.result}"><button class="admin-photo-remove" onclick="this.parentElement.remove()">✕</button>`;
      preview.appendChild(div);
    };
    reader.readAsDataURL(file);
  });
}

// ── ADMIN PRODUCTS — Firestore-backed save & delete ──

async function saveProduct() {
  const idEl = $('editProductId');
  const firestoreId = idEl ? idEl.value.trim() : '';
  const nameEl=$('ap-name'), priceEl=$('ap-price');
  const name = nameEl ? nameEl.value.trim() : '';
  const price = priceEl ? parseInt(priceEl.value) : 0;
  if(!name || !price) { alert('Product name and price are required.'); return; }

  const saveBtn = document.querySelector('#adminProductModal .admin-form-save-btn');
  if(saveBtn) { saveBtn.textContent = 'SAVING...'; saveBtn.disabled = true; }

  const getVal = (fid) => { const el=$(fid); return el ? el.value : ''; };

  // Upload any new files to Firebase Storage
  const fileInput = $('ap-photos');
  let uploadedImgs = [];
  if(fileInput && fileInput.files && fileInput.files.length && window._uploadProductImage) {
    const tmpId = firestoreId || ('new_'+Date.now());
    const progressDiv = document.createElement('div');
    progressDiv.style.cssText='padding:8px;font-size:12px;color:var(--text-soft)';
    progressDiv.textContent='Uploading images...';
    const preview = $('adminPhotoPreview');
    if(preview) preview.appendChild(progressDiv);
    try {
      for(const file of Array.from(fileInput.files)) {
        const url = await window._uploadProductImage(file, tmpId, pct => {
          progressDiv.textContent = 'Uploading... '+pct+'%';
        });
        uploadedImgs.push(url);
      }
    } catch(e) { console.warn('Image upload failed:', e); }
    if(preview && preview.contains(progressDiv)) preview.removeChild(progressDiv);
    fileInput.value = '';
  }

  // Existing preview images (already-uploaded Firebase URLs)
  const previewItems = document.querySelectorAll('#adminPhotoPreview .admin-photo-preview-item img');
  const existingImgs = Array.from(previewItems).map(i => i.src).filter(src => src && !src.startsWith('data:'));
  const dataImgs = Array.from(previewItems).map(i => i.src).filter(src => src && src.startsWith('data:'));
  const allImgs = [...existingImgs, ...uploadedImgs, ...dataImgs].filter(Boolean);
  const mainImg = allImgs[0] || '';

  const productData = {
    name,
    grade: getVal('ap-grade'),
    cat: getVal('ap-cat'),
    weight: getVal('ap-weight'),
    price,
    origPrice: parseInt(getVal('ap-origprice')) || null,
    desc: getVal('ap-desc'),
    overview: '<p>' + getVal('ap-overview').replace(/\n/g,'</p><p>') + '</p>',
    pros: getVal('ap-pros').split('\n').filter(x=>x.trim()),
    cons: getVal('ap-cons').split('\n').filter(x=>x.trim()),
    sizes: getVal('ap-sizes').split(',').map(s=>s.trim()).filter(Boolean),
    badge: getVal('ap-badge') || null,
    featured: getVal('ap-featured') !== 'false',
  };
  if(allImgs.length) { productData.img = mainImg; productData.imgs = allImgs; }

  try {
    if(!window._db) throw new Error('Firestore not ready');
    if(firestoreId) {
      await window._updateDoc(window._doc(window._db, 'products', firestoreId), productData);
    } else {
      const maxOrder = PRODUCTS.length ? Math.max(...PRODUCTS.map(p => p.sortOrder||0)) : 0;
      productData.sortOrder = maxOrder + 1;
      if(!productData.img) { productData.img = ''; productData.imgs = []; }
      await window._addDoc(window._collection(window._db, 'products'), productData);
    }
    closeProductModal();
    alert('\u2713 Product saved! Live on website instantly.');
  } catch(err) {
    console.error('Save product error:', err);
    alert('Error saving product: ' + (err.message || err));
  } finally {
    if(saveBtn) { saveBtn.textContent = 'SAVE PRODUCT'; saveBtn.disabled = false; }
  }
}

async function deleteProduct(id) {
  if(!confirm('Delete this product? This cannot be undone.')) return;
  id = String(id);
  try {
    if(!window._db) throw new Error('Firestore not ready');
    const { deleteDoc, doc } = await import("https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js");
    await deleteDoc(doc(window._db, 'products', id));
    alert('\u2713 Product deleted.');
  } catch(err) {
    console.error('Delete product error:', err);
    alert('Error deleting product: ' + (err.message || err));
  }
}


// ══ ADMIN ORDERS — Firestore real-time ══
let adminAllOrders = [];
let adminOrderFilter = 'all';
let _ordersUnsub = null;

function loadAdminOrders() {
  const container = $('adminOrdersContainer');
  if(!container) return;
  container.innerHTML = '<div class="admin-loading">Loading orders...</div>';
  if(!window._db) {
    // Fallback to localStorage only
    try { adminAllOrders = JSON.parse(localStorage.getItem('jsc_orders')||'[]'); } catch(e){ adminAllOrders=[]; }
    renderAdminOrders();
    _updateOrderStats();
    return;
  }
  // Tear down existing listener
  if(_ordersUnsub) { _ordersUnsub(); _ordersUnsub = null; }
  import("https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js").then(({ onSnapshot, query, collection, orderBy }) => {
    const q = query(collection(window._db, 'orders'), orderBy('createdAt','desc'));
    _ordersUnsub = onSnapshot(q, (snap) => {
      // Merge Firestore docs + any localStorage orders not yet in Firestore (migration safety)
      const firestoreOrders = snap.docs.map(d => ({ firestoreId: d.id, ...d.data() }));
      let localOrders = [];
      try { localOrders = JSON.parse(localStorage.getItem('jsc_orders')||'[]'); } catch(e){}
      // Deduplicate: prefer Firestore, fallback to local orders not yet saved
      const firestoreIds = new Set(firestoreOrders.map(o => o.id));
      const localOnly = localOrders.filter(o => !firestoreIds.has(o.id));
      adminAllOrders = [...firestoreOrders, ...localOnly];
      renderAdminOrders();
      _updateOrderStats();
    }, (err) => {
      console.warn('Orders listener error:', err);
      // Fallback to localStorage
      try { adminAllOrders = JSON.parse(localStorage.getItem('jsc_orders')||'[]'); } catch(e){ adminAllOrders=[]; }
      renderAdminOrders();
      _updateOrderStats();
    });
  });
}

function _updateOrderStats() {
  safeSet('statOrders', adminAllOrders.length);
  const revenue = adminAllOrders.filter(o=>o.payStatus==='paid').reduce((a,b)=>a+(Number(b.total)||0),0);
  safeSet('statRevenue', revenue > 0 ? '₹'+revenue.toLocaleString('en-IN') : '₹0');
}

function filterAdminOrders(status, el) {
  adminOrderFilter = status;
  document.querySelectorAll('.admin-orders-filter button').forEach(b => b.classList.remove('active'));
  if(el) el.classList.add('active');
  renderAdminOrders();
}

function renderAdminOrders() {
  const container = $('adminOrdersContainer');
  if(!container) return;
  const filtered = adminOrderFilter==='all' ? adminAllOrders : adminAllOrders.filter(o=>o.status===adminOrderFilter);
  if(!filtered.length) { 
    container.innerHTML='<div class="admin-loading" style="padding:40px;text-align:center"><div style="font-size:32px;margin-bottom:12px">📦</div><div style="color:var(--text-soft)">No orders yet.<br><small>Orders appear here after customers complete Razorpay checkout.</small></div></div>'; 
    return; 
  }
  const statusColors = {pending:'#FFF3CD',processing:'#CCE5FF',shipped:'#D4EDDA',delivered:'#D4EDDA',cancelled:'#F8D7DA'};
  const statusText = {pending:'🟡 Pending',processing:'🔵 Processing',shipped:'🚚 Shipped',delivered:'✅ Delivered',cancelled:'❌ Cancelled'};
  container.innerHTML = `<div class="admin-orders-table-wrap"><table class="admin-orders-table">
    <thead><tr><th>ORDER ID</th><th>CUSTOMER</th><th>ITEMS</th><th>TOTAL</th><th>DATE</th><th>PAYMENT</th><th>STATUS</th><th>ACTION</th></tr></thead>
    <tbody>${filtered.map(o=>`<tr>
      <td><strong>${o.id}</strong></td>
      <td><strong>${o.customer}</strong><br><span style="font-size:11px;color:var(--text-soft)">${o.phone}</span></td>
      <td style="font-size:12px">${o.items.map(i=>`${i.name} ×${i.qty} (${i.size})`).join('<br>')}</td>
      <td><strong>₹${o.total.toLocaleString('en-IN')}</strong><br><span style="font-size:11px;color:${o.payStatus==='paid'?'#27ae60':'#e74c3c'}">${o.payStatus}</span></td>
      <td style="font-size:12px">${o.date}</td>
      <td style="font-size:12px">${o.payment}</td>
      <td><span class="admin-status-badge" style="background:${statusColors[o.status]||'#eee'}">${statusText[o.status]||o.status}</span></td>
      <td><select onchange="updateOrderStatus('${o.id}',this.value)" style="border:1px solid var(--border);padding:5px;font-size:12px;font-family:'DM Sans',sans-serif">
        <option value="pending" ${o.status==='pending'?'selected':''}>Pending</option>
        <option value="processing" ${o.status==='processing'?'selected':''}>Processing</option>
        <option value="shipped" ${o.status==='shipped'?'selected':''}>Shipped</option>
        <option value="delivered" ${o.status==='delivered'?'selected':''}>Delivered</option>
        <option value="cancelled" ${o.status==='cancelled'?'selected':''}>Cancelled</option>
      </select></td>
    </tr>`).join('')}</tbody>
  </table></div>`;
}

async function updateOrderStatus(orderId, status) {
  const order = adminAllOrders.find(o=>o.id===orderId);
  if(!order) return;
  order.status = status;
  // Update in Firestore if we have the firestoreId
  if(order.firestoreId && window._db && window._updateDoc && window._doc) {
    try {
      await window._updateDoc(window._doc(window._db,'orders',order.firestoreId), { status });
    } catch(e) { console.warn('Order status update failed:', e); }
  }
  // Also update localStorage backup
  let local = [];
  try { local = JSON.parse(localStorage.getItem('jsc_orders')||'[]'); } catch(e){}
  const li = local.find(o=>o.id===orderId);
  if(li) { li.status = status; try{localStorage.setItem('jsc_orders',JSON.stringify(local));}catch(e){} }
  renderAdminOrders();
}

// ══ ADMIN PAYMENTS — driven from Firestore orders collection ══
let _paymentsUnsub = null;

function loadAdminPayments() {
  const container = $('adminPaymentsContainer');
  if(!container) return;
  container.innerHTML = '<div class="admin-loading">Loading payments...</div>';
  if(!window._db) {
    _renderPaymentsFromOrders(adminAllOrders);
    return;
  }
  if(_paymentsUnsub) { _paymentsUnsub(); _paymentsUnsub = null; }
  import("https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js").then(({ onSnapshot, query, collection, orderBy }) => {
    const q = query(collection(window._db, 'orders'), orderBy('createdAt','desc'));
    _paymentsUnsub = onSnapshot(q, (snap) => {
      const firestoreOrders = snap.docs.map(d => ({ firestoreId: d.id, ...d.data() }));
      let localOrders = [];
      try { localOrders = JSON.parse(localStorage.getItem('jsc_orders')||'[]'); } catch(e){}
      const ids = new Set(firestoreOrders.map(o=>o.id));
      const allPay = [...firestoreOrders, ...localOrders.filter(o=>!ids.has(o.id))];
      _renderPaymentsFromOrders(allPay);
    }, () => {
      _renderPaymentsFromOrders(adminAllOrders);
    });
  });
}

function _renderPaymentsFromOrders(orders) {
  const paidOrders = orders.filter(o=>o.payStatus==='paid');
  const pendingOrders = orders.filter(o=>o.payStatus!=='paid');
  const total = paidOrders.reduce((a,b)=>a+(Number(b.total)||0),0);
  const pending = pendingOrders.reduce((a,b)=>a+(Number(b.total)||0),0);
  const now = new Date(); const thisMonth = now.getMonth(); const thisYear = now.getFullYear();
  const monthPaid = paidOrders.filter(o=>{
    try {
      // createdAt may be a Firestore Timestamp or a date string
      const d = o.createdAt?.toDate ? o.createdAt.toDate() : new Date(o.date);
      return d.getMonth()===thisMonth && d.getFullYear()===thisYear;
    } catch(e){ return false; }
  });
  const monthTotal = monthPaid.reduce((a,b)=>a+(Number(b.total)||0),0);
  safeSet('payTotal','₹'+total.toLocaleString('en-IN'));
  safeSet('payMonth','₹'+monthTotal.toLocaleString('en-IN'));
  safeSet('payPending','₹'+pending.toLocaleString('en-IN'));
  safeSet('payCount', orders.length);
  // Also update dashboard revenue stat
  safeSet('statRevenue', total > 0 ? '₹'+total.toLocaleString('en-IN') : '₹0');
  const container = $('adminPaymentsContainer');
  if(!container) return;
  if(!orders.length) {
    container.innerHTML='<div class="admin-loading" style="padding:40px;text-align:center"><div style="font-size:32px;margin-bottom:12px">💳</div><div style="color:var(--text-soft)">No payments yet.<br><small>Payment records appear after customers checkout via Razorpay.</small></div></div>';
    return;
  }
  container.innerHTML = `<div style="overflow-x:auto"><table class="admin-table">
    <thead><tr><th>ORDER ID</th><th>CUSTOMER</th><th>AMOUNT</th><th>DATE</th><th>METHOD</th><th>RAZORPAY ID</th><th>STATUS</th></tr></thead>
    <tbody>${orders.map(o=>`<tr>
      <td><strong>${o.id||'—'}</strong></td>
      <td>${o.customer||'Guest'}<br><span style="font-size:11px;color:var(--text-soft)">${o.email||''}</span></td>
      <td><strong>₹${(Number(o.total)||0).toLocaleString('en-IN')}</strong></td>
      <td>${o.date||'—'}</td>
      <td>${o.payment||'—'}</td>
      <td style="font-size:11px;color:var(--text-soft)">${o.razorpay_payment_id||'—'}</td>
      <td><span style="font-size:11px;padding:3px 10px;background:${o.payStatus==='paid'?'#d4edda':'#fff3cd'};color:${o.payStatus==='paid'?'#155724':'#856404'}">${(o.payStatus||'pending').toUpperCase()}</span></td>
    </tr>`).join('')}</tbody>
  </table></div>`;
}

// ══ ADMIN REVIEWS ══
// ══ ADMIN REVIEWS — Firestore real-time ══
let _reviewsUnsub = null;
let _allAdminReviews = []; // cached for approve/delete by local id

function loadAdminReviews() {
  const container = $('adminReviewsContainer');
  if(!container) return;
  container.innerHTML = '<div class="admin-loading">Loading reviews...</div>';
  if(!window._db) {
    _renderAdminReviewsLocal();
    return;
  }
  if(_reviewsUnsub) { _reviewsUnsub(); _reviewsUnsub = null; }
  import("https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js").then(({ onSnapshot, query, collection, orderBy }) => {
    const q = query(collection(window._db, 'reviews'), orderBy('createdAt','desc'));
    _reviewsUnsub = onSnapshot(q, (snap) => {
      const firestoreReviews = snap.docs.map(d => ({ firestoreId: d.id, ...d.data() }));
      // Merge with defaults (hardcoded approved reviews shown too)
      const defaults = defaultReviews.map(r=>({...r, pending:false, approved:true}));
      _allAdminReviews = [...firestoreReviews, ...defaults];
      _renderAdminReviewsData(_allAdminReviews);
    }, () => { _renderAdminReviewsLocal(); });
  });
}

function _renderAdminReviewsLocal() {
  let stored = [];
  try { stored = JSON.parse(localStorage.getItem('jsc_reviews')||'[]'); } catch(e){}
  _allAdminReviews = [...defaultReviews.map(r=>({...r,pending:false,approved:true})), ...stored];
  _renderAdminReviewsData(_allAdminReviews);
}

function _renderAdminReviewsData(all) {
  const filterEl = $('adminReviewFilter');
  const filter = filterEl ? filterEl.value : 'all';
  const filtered = filter==='all' ? all : filter==='pending' ? all.filter(r=>r.pending&&!r.approved) : all.filter(r=>r.approved||(!r.pending));
  const container = $('adminReviewsContainer');
  if(!container) return;
  if(!filtered.length) { container.innerHTML='<div class="admin-loading">No reviews found.</div>'; return; }
  container.innerHTML = `<div style="overflow-x:auto"><table class="admin-table">
    <thead><tr><th>PRODUCT</th><th>REVIEWER</th><th>RATING</th><th>TITLE</th><th>DATE</th><th>STATUS</th><th>ACTION</th></tr></thead>
    <tbody>${filtered.map(r=>`<tr>
      <td style="font-size:12px">${r.productName || PRODUCTS.find(p=>String(p.id)===String(r.productId))?.name||'General'}</td>
      <td><strong>${r.name}</strong><br><span style="font-size:11px;color:var(--text-soft)">${r.location||''}</span></td>
      <td style="color:#f5a623">${'★'.repeat(r.rating||0)}${'☆'.repeat(5-(r.rating||0))}</td>
      <td style="font-size:12px">${r.title||(r.text||'').substring(0,40)+'...'}</td>
      <td style="font-size:11px">${r.date||''}</td>
      <td><span style="font-size:10px;padding:3px 8px;background:${r.pending&&!r.approved?'#fff3cd':'#d4edda'};color:${r.pending&&!r.approved?'#856404':'#155724'}">${r.pending&&!r.approved?'PENDING':'APPROVED'}</span></td>
      <td>
        ${r.pending&&!r.approved?`<button onclick="approveReview('${r.firestoreId||r.id}')" style="border:1px solid #27ae60;background:none;padding:4px 10px;font-size:11px;cursor:pointer;color:#27ae60;font-family:'DM Sans',sans-serif">Approve</button>`:''}
        <button onclick="deleteReview('${r.firestoreId||r.id}')" style="border:1px solid #e74c3c;background:none;padding:4px 10px;font-size:11px;cursor:pointer;color:#e74c3c;font-family:'DM Sans',sans-serif;margin-left:4px">Delete</button>
      </td>
    </tr>`).join('')}</tbody>
  </table></div>`;
}

async function approveReview(id) {
  // Try Firestore first (id is firestoreId if from Firestore)
  if(window._db && window._updateDoc && window._doc) {
    try {
      await window._updateDoc(window._doc(window._db,'reviews',id), { pending:false, approved:true });
      return; // onSnapshot will re-render
    } catch(e) { /* might be local id, fall through */ }
  }
  // Fallback: localStorage
  let stored = [];
  try { stored = JSON.parse(localStorage.getItem('jsc_reviews')||'[]'); } catch(e){}
  const r = stored.find(x=>x.id===id||x.firestoreId===id);
  if(r) { r.pending=false; r.approved=true; try{localStorage.setItem('jsc_reviews',JSON.stringify(stored));}catch(e){} }
  loadAdminReviews();
}

async function deleteReview(id) {
  if(!confirm('Delete this review?')) return;
  // Try Firestore first
  if(window._db) {
    try {
      const { deleteDoc, doc } = await import("https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js");
      await deleteDoc(doc(window._db,'reviews',id));
      return; // onSnapshot will re-render
    } catch(e) { /* might be local id, fall through */ }
  }
  // Fallback: localStorage
  let stored = [];
  try { stored = JSON.parse(localStorage.getItem('jsc_reviews')||'[]'); } catch(e){}
  stored = stored.filter(x=>x.id!==id&&x.firestoreId!==id);
  try { localStorage.setItem('jsc_reviews',JSON.stringify(stored)); } catch(e){}
  loadAdminReviews();
}

// ══ SHARE ══
function pdpShareWA() {
  if(!currentPDP) return;
  const msg = `Check out *${currentPDP.name}* from Jai Shree Cashew Industries — ₹${currentPDP.price}/${currentPDP.weight}. Visit: https://jaishreecashewindustries-rgb.github.io/cashewpro/`;
  window.open('https://wa.me/?text='+encodeURIComponent(msg),'_blank');
}
function pdpCopyLink() {
  const url = window.location.href.split('#')[0]+'#product-'+(currentPDP?.id||'');
  navigator.clipboard.writeText(url).then(()=>{
    const el=$('pdpCopyConfirm');
    if(el) { el.style.display='inline'; setTimeout(()=>el.style.display='none',2500); }
  }).catch(()=>{ alert('Link: '+url); });
}

// ══ STICKY CART BAR ══
function updateStickyCartBar() {
  const bar = $('stickyCartBar');
  if(!bar) return;
  if(currentPage === 'product-detail' && currentPDP) {
    safeSet('stickyCartPrice','₹'+currentPDP.price);
    safeSet('stickyCartSize', pdpSelectedSize || currentPDP.weight);
    bar.style.display = 'flex';
  } else {
    bar.style.display = 'none';
  }
}

// ══ INIT — runs after DOM is ready ══
function init() {
  // Cart badge
  updateCartBadge();

  // Auth overlay click-outside
  const authOverlay = $('authOverlay');
  if(authOverlay) authOverlay.addEventListener('click', function(e){ if(e.target===this) closeAuth(); });

  // Dashboard overlay click-outside
  const dashOverlay = $('dashOverlay');
  if(dashOverlay) dashOverlay.addEventListener('click', function(e){ if(e.target===this) closeDashboard(); });

  // User nav button
  const userNavBtn = $('userNavBtn');
  if(userNavBtn) userNavBtn.addEventListener('click', function(){
    const user = window._currentUser;
    if(user && user.email === window.ADMIN_EMAIL) openAdmin(); else openDashboard();
  });

  // Enter key on auth forms
  document.addEventListener('keydown', function(e){
    if(e.key !== 'Enter') return;
    const ao = $('authOverlay');
    if(!ao || !ao.classList.contains('open')) return;
    const loginForm = $('authFormLogin');
    const signupForm = $('authFormSignup');
    if(loginForm && loginForm.classList.contains('active')) doLogin();
    else if(signupForm && signupForm.classList.contains('active')) doSignup();
  });

  // Pre-fill inquiry form if logged in
  const inquiryForm = $('inquiryForm');
  if(inquiryForm) {
    inquiryForm.addEventListener('focusin', function(){
      const user = window._currentUser;
      if(user) {
        const fname=$('fname'), femail=$('femail');
        if(user.displayName && fname && !fname.value) fname.value = user.displayName;
        if(user.email && femail && !femail.value) femail.value = user.email;
      }
    });
  }

  // Show home page to start
  showPage('home');

  // ── Start Firestore products real-time listener ──
  // Waits for Firebase to be ready (it's loaded as a module before app.js)
  function tryStartListener(retries) {
    if(window._db && window._collection) {
      _startProductsListener();
    } else if(retries > 0) {
      setTimeout(() => tryStartListener(retries - 1), 300);
    } else {
      console.warn('Firestore not available — products will not load from database.');
    }
  }
  tryStartListener(15);  // retry up to 15×300ms = 4.5s
}

// Run init when DOM is ready
if(document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
