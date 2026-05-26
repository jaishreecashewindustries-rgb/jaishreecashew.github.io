
// ── PRODUCTS DATA ──
const PRODUCTS = [
  {
    id:1, name:"W180 Jumbo Whole", grade:"W180", cat:"whole",
    price:1450, origPrice:1800, discount:19,
    weight:"250g", badge:"PREMIUM",
    desc:"The rarest grade — only 180 kernels per pound. Ideal for premium gifts and luxury confectionery.",
    overview:"<h4>About W180 Jumbo Whole Cashews</h4><p>W180 is the crown jewel of cashew grades — only 180 kernels fit in one pound, making each kernel exceptionally large and visually striking. Sourced from the finest farms in West Africa and Vietnam, these kernels are processed at our RIICO facility in Kaladera using steam technology to ensure maximum hygiene and zero breakage.</p><p>Preferred by luxury confectioners, premium gift hamper brands, and 5-star hotels. The generous size makes every bite a statement of quality. Vacuum packed to preserve freshness for 12 months.</p>",
    pros:["Exceptionally large kernel size","Maximum visual appeal for gifting","Rich, buttery flavour profile","Vacuum packed — 12 month shelf life","Zero artificial preservatives","Export-quality grading"],
    cons:["Higher price point than W240/W320","Limited seasonal availability","May be over-specification for cooking use"],
    specs:[["Grade","W180 (180 kernels per pound)"],["Origin","West Africa / Vietnam (RCN source)"],["Processed at","RIICO Industrial Area, Kaladera, Jaipur"],["Packet Size","250g (standard)"],["Available Sizes","100g · 250g · 500g · 1kg · 5kg (bulk)"],["Shell Life","12 months (vacuum packed)"],["Storage","Cool, dry place. Refrigerate after opening."],["Certifications","FSSAI Compliant"],["MOQ (Bulk)","5 kg"]],
    sizes:["100g","250g","500g","1kg"],
    img:"images/product-w180.webp", imgs:["images/hero-w180.webp"]
  },
  {
    id:2, name:"W240 Large Whole", grade:"W240", cat:"whole",
    price:1100, origPrice:1350, discount:19,
    weight:"250g", badge:"BESTSELLER",
    desc:"Generous whole kernels, perfectly uniform. The preferred choice of premium hotels, bakeries, and specialty retailers.",
    overview:"<h4>About W240 Large Whole Cashews</h4><p>W240 strikes the perfect balance between size, flavour, and value. With 240 kernels per pound, these large whole cashews are the most versatile grade — equally at home in premium retail packs, bakery applications, and luxury snacking.</p><p>Our W240 is sourced from top-tier farms and processed at our state-of-the-art facility to deliver consistent colour, size uniformity, and minimal breakage. The benchmark grade for quality-conscious buyers.</p>",
    pros:["Best balance of size and value","High uniformity — consistent appearance","Ideal for baking, snacking, gifting","Widely available all year round","Buttery, mild flavour"],
    cons:["Slightly smaller than W180","More competitive market — check freshness dates"],
    specs:[["Grade","W240 (240 kernels per pound)"],["Origin","West Africa / Vietnam"],["Processed at","RIICO Industrial Area, Kaladera, Jaipur"],["Packet Size","250g (standard)"],["Available Sizes","100g · 250g · 500g · 1kg · 5kg"],["Shell Life","12 months (vacuum packed)"],["MOQ (Bulk)","5 kg"]],
    sizes:["100g","250g","500g","1kg"],
    img:"images/product-w240.webp", imgs:["images/hero-w240.webp"]
  },
  {
    id:3, name:"W320 Classic Whole", grade:"W320", cat:"whole",
    price:850, origPrice:1000, discount:15,
    weight:"250g", badge:null, isNew:false,
    desc:"Our highest volume grade — the industry standard. Consistent quality that satisfies both domestic retailers and export buyers.",
    overview:"<h4>About W320 Classic Whole Cashews</h4><p>W320 is the world's most traded cashew grade — and for good reason. With 320 kernels per pound, these are perfectly sized for everyday premium use: cooking, snacking, mithai-making, and retail. Our W320 kernels are known for exceptional whiteness, uniform size, and low moisture content.</p><p>Jai Shree Cashew's W320 is trusted by 300+ domestic distributors and retail chains across Rajasthan and beyond. Available year-round with reliable supply.</p>",
    pros:["Most economical whole grade","Perfect for cooking and everyday use","Available in bulk quantities","Consistent supply all year","Industry-standard grade — easy to resell"],
    cons:["Not suitable for premium gifting (smaller size)","Lower visual impact than W180/W240"],
    specs:[["Grade","W320 (320 kernels per pound)"],["Origin","West Africa / Vietnam / India"],["Processed at","RIICO Industrial Area, Kaladera, Jaipur"],["Packet Size","250g (standard)"],["Available Sizes","250g · 500g · 1kg · 5kg · 10kg · 25kg"],["Shell Life","12 months (vacuum packed)"],["MOQ (Bulk)","10 kg"]],
    sizes:["250g","500g","1kg","5kg"],
    img:"images/product-w320.webp", imgs:["images/hero-w320.webp"]
  },
  {
    id:4, name:"Roasted & Salted", grade:"ROASTED", cat:"processed",
    price:780, origPrice:920, discount:15,
    weight:"200g", badge:"NEW",
    desc:"Perfectly roasted with a light sea salt finish. Our most popular ready-to-eat variant.",
    overview:"<h4>About Roasted & Salted Cashews</h4><p>Made from our finest W320 whole kernels, roasted to perfection in a controlled-temperature oven and finished with premium sea salt. No oil added — dry roasted for a clean, satisfying crunch.</p><p>The perfect anytime snack and a bestseller in our retail range. Resealable pack ensures freshness after opening.</p>",
    pros:["Ready-to-eat convenience","Dry roasted — no added oil","Light, even salt coating","W320 base kernels — consistent quality","Resealable packaging"],
    cons:["Not suitable for cooking applications","Shorter shelf life than raw (6 months)","Contains salt — not suitable for low-sodium diets"],
    specs:[["Type","Dry Roasted & Salted"],["Base Grade","W320 Whole"],["Salt","Sea Salt (0.8%)"],["Oil","None (Dry Roasted)"],["Packet Size","200g"],["Available Sizes","100g · 200g · 500g"],["Shell Life","6 months"]],
    sizes:["100g","200g","500g"],
    img:"images/product-pieces.webp", imgs:["images/gallery-2.webp"]
  },
  {
    id:5, name:"Cashew Pieces", grade:"PIECES", cat:"processed",
    price:620, origPrice:720, discount:14,
    weight:"250g", badge:null,
    desc:"Broken cashew pieces — perfect for cooking, mithai, ice cream, and bulk baking. Same quality, lower price.",
    overview:"<h4>About Cashew Pieces</h4><p>Cashew pieces are the by-product of whole kernel grading — same premium quality, at a fraction of the cost. Ideal for applications where whole kernel presentation is not required: halwa, kheer, barfi, ice cream toppings, biryanis, and industrial baking.</p><p>Our pieces come in mixed sizes (W320 base) with the same flavour profile as our whole grades. A smart choice for high-volume buyers.</p>",
    pros:["Most economical cashew option","Same flavour as whole grades","Ideal for cooking and mithai","High volume — consistent supply","Zero compromise on taste"],
    cons:["Not suitable for retail gifting","Mixed sizes — not uniform","Lower shelf-life visibility"],
    specs:[["Type","Cashew Pieces (Mixed)"],["Base Grade","W320"],["Origin","Kaladera Processing Unit"],["Packet Size","250g"],["Available Sizes","250g · 500g · 1kg · 10kg · 25kg"],["Shell Life","10 months (vacuum)"],["MOQ (Bulk)","5 kg"]],
    sizes:["250g","500g","1kg"],
    img:"images/product-roasted.webp", imgs:["images/gallery-production.webp"]
  },
  {
    id:6, name:"Raw Cashew Nuts", grade:"RCN", cat:"raw",
    price:480, origPrice:560, discount:14,
    weight:"500g",  badge:null,
    desc:"Unprocessed raw cashew nuts for home roasting or industrial processing. Direct from source.",
    overview:"<h4>About Raw Cashew Nuts (RCN)</h4><p>Raw Cashew Nuts are the unprocessed whole cashew in shell, sourced directly from our supplier network in West Africa and Vietnam. We offer RCN for buyers who prefer home roasting, traditional processing, or industrial use.</p><p>Note: RCN shells contain cashew shell liquid (CNSL) — please handle with care and process before consumption. Not for direct eating.</p>",
    pros:["Unprocessed — maximum freshness potential","Available in bulk at wholesale prices","Suitable for home processing","Long shelf life (18 months unshelled)"],
    cons:["Cannot be eaten directly — requires shelling","Shell contains CNSL — handle with gloves","Processing required before consumption"],
    specs:[["Type","Raw Cashew Nut (In-Shell)"],["KOR","46–50 (depends on origin)"],["Origin","West Africa / Vietnam"],["Packet Size","500g"],["Available Sizes","500g · 1kg · 10kg · 50kg"],["Shell Life","18 months (unshelled)"],["MOQ (Bulk)","10 kg"]],
    sizes:["500g","1kg","10kg"],
    img:"images/product-raw.webp", imgs:["images/gallery-tree.webp"]
  }
];

let cart = JSON.parse(localStorage.getItem('jsc_cart') || '[]');
let currentFilter = 'all';
let modalProduct = null;
const heroImages = ["images/hero-main.webp", "images/hero-export.webp", "images/gallery-1.webp"];
let heroIdx = 0;

// ── HERO SLIDER ──
function setHero(idx, el) {
  heroIdx = idx;
  document.getElementById('heroBg').style.backgroundImage = `url(${heroImages[idx]})`;
  document.querySelectorAll('.hero-dot').forEach((d,i) => d.classList.toggle('active', i===idx));
}
setInterval(() => setHero((heroIdx+1)%3, null), 5000);

// ── RENDER PRODUCTS ──
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  const filtered = currentFilter==='all' ? PRODUCTS : PRODUCTS.filter(p=>p.cat===currentFilter);
  if(document.getElementById('products-count')) document.getElementById('products-count').textContent = filtered.length+' products';
  grid.innerHTML = filtered.map(p => {
    const hasDiscount = p.origPrice && p.origPrice > p.price;
    const discPct = hasDiscount ? Math.round((1-p.price/p.origPrice)*100) : 0;
    return `
    <div class="product-card" data-id="${p.id}" style="cursor:pointer">
      ${p.badge ? `<div class="badge-new">${p.badge}</div>` : ''}
      ${hasDiscount ? `<div class="badge-sale">${discPct}% OFF</div>` : ''}
      <div class="prod-img-wrap" onclick="openProductDetail(${p.id})">
        <img src="${p.img}" alt="${p.name}" loading="lazy">
        <div class="prod-overlay"></div>
        <button class="prod-quick" onclick="event.stopPropagation();openModal(${p.id})">QUICK VIEW</button>
      </div>
      <div class="prod-info">
        <div class="prod-grade">${p.grade}</div>
        <div class="prod-name" onclick="openProductDetail(${p.id})">${p.name}</div>
        <div class="prod-weight">${p.weight} pack</div>
        <div class="prod-price-row">
          <div class="prod-price" style="display:inline">₹${p.price}</div>
          ${hasDiscount ? `<span class="prod-price-original">₹${p.origPrice}</span><span class="prod-discount">−${discPct}%</span>` : ''}
        </div>
        <div class="prod-btns">
          <button class="btn-cart" onclick="addToCart(${p.id})">ADD TO CART</button>
          <button class="btn-wish" onclick="toggleWish(this)">♡</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function filterProducts(cat, el) {
  currentFilter = cat;
  document.querySelectorAll('.filter-tab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
  renderProducts();
}

// ── CART ──
function saveCart() { localStorage.setItem('jsc_cart', JSON.stringify(cart)); updateCartBadge(); }
function updateCartBadge() {
  const total = cart.reduce((a,b)=>a+b.qty,0);
  document.getElementById('cartBadge').textContent = total;
}
function addToCart(id) {
  const p = PRODUCTS.find(x=>x.id===id);
  const ex = cart.find(x=>x.id===id);
  if(ex) ex.qty++; else cart.push({...p, qty:1});
  saveCart(); renderCart(); openCart();
}
function addToCartFromModal() {
  if(modalProduct) { addToCart(modalProduct.id); document.getElementById('modalOverlay').classList.remove('open'); }
}
function removeFromCart(id) {
  cart = cart.filter(x=>x.id!==id);
  saveCart(); renderCart();
}
function updateQty(id, delta) {
  const item = cart.find(x=>x.id===id);
  if(item) { item.qty += delta; if(item.qty<=0) removeFromCart(id); else { saveCart(); renderCart(); } }
}
function renderCart() {
  const el = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');
  if(!cart.length) {
    el.innerHTML = '<div class="cart-empty"><div class="cart-empty-icon">🛒</div><p>Your cart is empty</p></div>';
    footer.style.display='none'; return;
  }
  footer.style.display='block';
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
  const raw = cart.reduce((a,b)=>a+b.price*b.qty,0);
  const subtotalEl = document.getElementById('cartSubtotal');
  if(subtotalEl) subtotalEl.textContent = '₹'+raw.toLocaleString('en-IN');
  if(appliedCoupon && raw > 0) {
    const saving = Math.round(raw * appliedCoupon.pct / 100);
    const final = raw - saving;
    if(document.getElementById('cartSavingsAmt')) document.getElementById('cartSavingsAmt').textContent = '−₹'+saving.toLocaleString('en-IN');
    document.getElementById('cartTotal').textContent = '₹'+final.toLocaleString('en-IN');
    document.getElementById('cartSavings')?.classList.add('show');
  } else {
    document.getElementById('cartTotal').textContent = '₹'+raw.toLocaleString('en-IN');
    document.getElementById('cartSavings')?.classList.remove('show');
  }
}
function openCart() { document.getElementById('cartSidebar').classList.add('open'); document.getElementById('cartOverlay').classList.add('open'); renderCart(); }
function closeCart() { document.getElementById('cartSidebar').classList.remove('open'); document.getElementById('cartOverlay').classList.remove('open'); }
function checkout() {
  if(typeof Razorpay === 'undefined') { alert('Payment gateway loading. Please try again.'); return; }
  const total = cart.reduce((a,b)=>a+b.price*b.qty,0)*100;
  new Razorpay({ key:'rzp_live_StJcfZp5KQLYuY', amount:total, currency:'INR', name:'Jai Shree Cashew Industries', description:'Premium Cashew Order', theme:{color:'#C6A15B'} }).open();
}

// ── QUICK VIEW ──
function openModal(id) {
  const p = PRODUCTS.find(x=>x.id===id);
  modalProduct = p;
  document.getElementById('modalImg').src = p.img;
  document.getElementById('modalGrade').textContent = p.grade;
  document.getElementById('modalName').textContent = p.name;
  document.getElementById('modalPrice').textContent = '₹'+p.price;
  document.getElementById('modalDesc').textContent = p.desc;
  document.getElementById('modalOverlay').classList.add('open');
}
function closeModal(e) { if(e.target===e.currentTarget) document.getElementById('modalOverlay').classList.remove('open'); }

// ── WISHLIST ──
function toggleWish(btn) {
  if(btn.textContent==='♡') { btn.textContent='♥'; btn.style.color='var(--gold)'; btn.style.borderColor='var(--gold)'; }
  else { btn.textContent='♡'; btn.style.color=''; btn.style.borderColor=''; }
}

// ── LIGHTBOX ──
function openLightbox(src) { document.getElementById('lightboxImg').src=src; document.getElementById('lightbox').classList.add('open'); }
function closeLightbox() { document.getElementById('lightbox').classList.remove('open'); }

// ── MOBILE MENU ──
function toggleMobile() { document.getElementById('mobileMenu').classList.toggle('open'); }

// ── SCROLL ANIMATIONS ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
}, {threshold:0.1});
document.querySelectorAll('.fade-up,.fade-in').forEach(el => observer.observe(el));

// ── FIREBASE INQUIRY SUBMIT ──
async function submitInquiry(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type=submit]');
  btn.textContent = 'SENDING...'; btn.disabled = true;
  try {
    if(window._db) {
      await window._addDoc(window._collection(window._db, 'inquiries'), {
        name: document.getElementById('fname').value,
        phone: document.getElementById('fphone').value,
        email: document.getElementById('femail').value,
        type: document.getElementById('ftype').value,
        grade: document.getElementById('fgrade').value,
        qty: document.getElementById('fqty').value,
        message: document.getElementById('fmsg').value,
        timestamp: window._serverTimestamp(),
        source: 'website',
        status: 'new',
        userId: window._currentUser ? window._currentUser.uid : null
      });
    }
    document.getElementById('formSuccess').style.display='block';
    document.getElementById('inquiryForm').reset();
  } catch(err) {
    alert('Error submitting. Please WhatsApp us directly.');
  }
  btn.textContent='SEND ENQUIRY'; btn.disabled=false;
}



// ── CUSTOMER DASHBOARD TABS ──
function switchDashTab(tab, el) {
  document.querySelectorAll('#dashOverlay .auth-tab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
  ['orders','enquiries','wishlist'].forEach(t=>{
    const sec = document.getElementById('dSection-'+t);
    if(sec) sec.style.display = t===tab ? 'block' : 'none';
  });
  if(tab==='enquiries' && window._currentUser) loadCustomerInquiries(window._currentUser.email);
}

// ══════════════════════════════════════════
// PHASE 2 — FIREBASE AUTH + DASHBOARD
// ══════════════════════════════════════════

// Auth state change handler
window.onAuthChange = function(user) {
  const loginBtn = document.getElementById('loginNavBtn');
  const userBtn = document.getElementById('userNavBtn');
  if(!loginBtn || !userBtn) return;
  if(user) {
    loginBtn.style.display = 'none';
    userBtn.style.display = 'flex';
    const initials = (user.displayName || user.email).charAt(0).toUpperCase();
    document.getElementById('userAvatarNav').textContent = initials;
    document.getElementById('userNameNav').textContent = (user.displayName || 'Account').split(' ')[0];
    // If admin, show admin option
    if(user.email === window.ADMIN_EMAIL) {
      userBtn.title = 'Admin Panel';
    }
  } else {
    loginBtn.style.display = 'flex';
    userBtn.style.display = 'none';
  }
};

// ── AUTH MODAL ──
function openAuth() {
  document.getElementById('authOverlay').classList.add('open');
}
function closeAuth() {
  document.getElementById('authOverlay').classList.remove('open');
  clearAuthErrors();
}
document.getElementById('authOverlay').addEventListener('click', function(e){
  if(e.target === this) closeAuth();
});
function switchAuthTab(tab, el) {
  document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('authForm'+tab.charAt(0).toUpperCase()+tab.slice(1)).classList.add('active');
  clearAuthErrors();
}
function clearAuthErrors() {
  document.querySelectorAll('.auth-error').forEach(e => { e.classList.remove('show'); e.textContent = ''; });
}
function showAuthError(id, msg) {
  const el = document.getElementById(id);
  el.textContent = msg;
  el.classList.add('show');
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
  };
  return msgs[code] || 'Something went wrong. Please try again.';
}

async function doLogin() {
  const email = document.getElementById('loginEmail').value.trim();
  const pass = document.getElementById('loginPass').value;
  if(!email || !pass) { showAuthError('loginError','Please fill all fields.'); return; }
  try {
    await window._signInWithEmail(email, pass);
    closeAuth();
    // If admin, open admin panel
    if(email === window.ADMIN_EMAIL) openAdmin();
    else openDashboard();
  } catch(err) {
    showAuthError('loginError', getAuthErrMsg(err.code));
  }
}

async function doSignup() {
  const name = document.getElementById('signupName').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const pass = document.getElementById('signupPass').value;
  if(!name || !email || !pass) { showAuthError('signupError','Please fill all fields.'); return; }
  try {
    const cred = await window._createUser(email, pass);
    await window._updateProfile(cred.user, { displayName: name });
    closeAuth();
    openDashboard();
  } catch(err) {
    showAuthError('signupError', getAuthErrMsg(err.code));
  }
}

async function doGoogleLogin() {
  try {
    const result = await window._signInGoogle();
    closeAuth();
    if(result.user.email === window.ADMIN_EMAIL) openAdmin();
    else openDashboard();
  } catch(err) {
    if(err.code !== 'auth/popup-closed-by-user') {
      showAuthError('loginError', getAuthErrMsg(err.code));
      showAuthError('signupError', getAuthErrMsg(err.code));
    }
  }
}

async function doSignOut() {
  await window._signOut();
  closeDashboard();
  closeAdmin();
}

// ── CUSTOMER DASHBOARD ──
function openDashboard() {
  const user = window._currentUser;
  if(!user) { openAuth(); return; }
  if(user.email === window.ADMIN_EMAIL) { openAdmin(); return; }
  document.getElementById('dashOverlay').classList.add('open');
  document.getElementById('dashTitle').textContent = user.displayName || 'My Account';
  document.getElementById('dashUserInfo').textContent = user.email;
  // Set avatar
  const av = document.getElementById('dashAvatarBig');
  if(av) av.textContent = (user.displayName || user.email).charAt(0).toUpperCase();
  // Reset to orders tab
  switchDashTab('orders', document.getElementById('dtab-orders'));
}
function closeDashboard() {
  document.getElementById('dashOverlay').classList.remove('open');
}
document.getElementById('dashOverlay').addEventListener('click', function(e){
  if(e.target === this) closeDashboard();
});

async function loadCustomerInquiries(email) {
  const container = document.getElementById('dashInquiries');
  container.innerHTML = '<div class="dash-empty"><div class="dash-empty-icon">⏳</div><div class="dash-empty-text">Loading enquiries...</div></div>';
  try {
    if(!window._db) {
      container.innerHTML = '<div class="dash-empty"><div class="dash-empty-text">Database not ready</div><div class="dash-empty-sub">Please refresh the page.</div></div>';
      return;
    }
    const q = window._query(window._collection(window._db, 'inquiries'), window._orderBy('timestamp','desc'));
    const snap = await window._getDocs(q);
    const myDocs = snap.docs.filter(d => d.data().email === email || d.data().email?.toLowerCase() === email.toLowerCase());
    if(myDocs.length === 0) {
      container.innerHTML = '<div class="dash-empty"><div class="dash-empty-icon">📋</div><div class="dash-empty-text">No enquiries yet</div><div class="dash-empty-sub">Submit a bulk or export enquiry from the contact section — it will appear here.</div></div>';
      return;
    }
    container.innerHTML = myDocs.map(d => {
      const data = d.data();
      const date = data.timestamp?.toDate ? data.timestamp.toDate().toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'}) : '—';
      const status = data.status || 'new';
      const statusLabel = {new:'New',contacted:'Contacted',closed:'Closed'}[status] || status;
      return `<div class="dash-inquiry-card">
        <div class="dash-inquiry-top">
          <span class="dash-inquiry-grade">${data.grade || 'General Enquiry'}</span>
          <span class="dash-inquiry-date">${date}</span>
        </div>
        <div class="dash-inquiry-type">${data.type || 'Enquiry'}</div>
        ${data.qty ? `<div class="dash-inquiry-qty">Quantity: ${data.qty}</div>` : ''}
        ${data.message ? `<div class="dash-inquiry-msg">"${data.message.substring(0,100)}${data.message.length>100?'...':''}"</div>` : ''}
        <span class="dash-inquiry-status status-${status}">${statusLabel}</span>
      </div>`;
    }).join('');
  } catch(err) {
    container.innerHTML = '<div class="dash-empty"><div class="dash-empty-text">Could not load enquiries</div><div class="dash-empty-sub">Check your internet connection and try again.</div></div>';
  }
}

// ── ADMIN PANEL ──
function openAdmin() {
  document.getElementById('adminPanel').classList.add('open');
  loadAdminInquiries();
  loadAdminOrders();
  renderAdminProducts();
}
function closeAdmin() {
  document.getElementById('adminPanel').classList.remove('open');
}

async function loadAdminInquiries() {
  const container = document.getElementById('adminTableContainer');
  container.innerHTML = '<div class="admin-loading">Loading enquiries...</div>';
  try {
    if(!window._db) { container.innerHTML = '<div class="admin-loading">Database not ready.</div>'; return; }
    const q = window._query(window._collection(window._db, 'inquiries'), window._orderBy('timestamp','desc'));
    const snap = await window._getDocs(q);
    const docs = snap.docs;
    // Stats
    const total = docs.length;
    const newCount = docs.filter(d => !d.data().status || d.data().status === 'new').length;
    const contacted = docs.filter(d => d.data().status === 'contacted').length;
    document.getElementById('statTotal').textContent = total;
    document.getElementById('statNew').textContent = newCount;
    document.getElementById('statContacted').textContent = contacted;
    if(total === 0) {
      container.innerHTML = '<div class="admin-loading">No enquiries yet.</div>'; return;
    }
    const rows = docs.map(d => {
      const data = d.data();
      const date = data.timestamp?.toDate ? data.timestamp.toDate().toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit'}) : 'Just now';
      const status = data.status || 'new';
      return `<tr>
        <td><strong>${data.name || '—'}</strong><br><span style="font-size:11px;color:var(--text-soft)">${data.email || ''}</span></td>
        <td>${data.phone || '—'}</td>
        <td><span style="font-size:11px;background:var(--cream);padding:2px 8px">${data.grade||'—'}</span></td>
        <td>${data.type||'—'}</td>
        <td>${data.qty||'—'}</td>
        <td style="max-width:180px;font-size:12px;color:var(--text-soft)">${(data.message||'').substring(0,60)}${(data.message||'').length>60?'...':''}</td>
        <td><span style="font-size:11px;color:var(--text-soft)">${date}</span></td>
        <td>
          <select class="admin-status-select" onchange="updateInquiryStatus('${d.id}',this.value)">
            <option value="new" ${status==='new'?'selected':''}>🟡 New</option>
            <option value="contacted" ${status==='contacted'?'selected':''}>🔵 Contacted</option>
            <option value="closed" ${status==='closed'?'selected':''}>🟢 Closed</option>
          </select>
        </td>
      </tr>`;
    }).join('');
    container.innerHTML = `<div style="overflow-x:auto"><table class="admin-table">
      <thead><tr>
        <th>NAME / EMAIL</th><th>PHONE</th><th>GRADE</th><th>TYPE</th><th>QTY</th><th>MESSAGE</th><th>DATE</th><th>STATUS</th>
      </tr></thead>
      <tbody>${rows}</tbody>
    </table></div>`;
  } catch(err) {
    container.innerHTML = '<div class="admin-loading">Error loading. Check Firestore rules.</div>';
    console.error(err);
  }
}

async function updateInquiryStatus(docId, newStatus) {
  try {
    if(!window._db) return;
    await window._updateDoc(window._doc(window._db, 'inquiries', docId), { status: newStatus });
  } catch(err) {
    alert('Could not update status. Check Firestore rules.');
  }
}

// ── USER BUTTON → Admin check ──
document.getElementById('userNavBtn').addEventListener('click', function() {
  const user = window._currentUser;
  if(user && user.email === window.ADMIN_EMAIL) openAdmin();
  else openDashboard();
});

// ── ENTER key on auth forms ──
document.addEventListener('keydown', function(e) {
  if(e.key === 'Enter') {
    if(document.getElementById('authFormLogin').classList.contains('active') &&
       document.getElementById('authOverlay').classList.contains('open')) doLogin();
    if(document.getElementById('authFormSignup').classList.contains('active') &&
       document.getElementById('authOverlay').classList.contains('open')) doSignup();
  }
});

// ── Pre-fill inquiry form if user is logged in ──
document.getElementById('inquiryForm').addEventListener('focusin', function() {
  const user = window._currentUser;
  if(user) {
    if(user.displayName && !document.getElementById('fname').value)
      document.getElementById('fname').value = user.displayName;
    if(user.email && !document.getElementById('femail').value)
      document.getElementById('femail').value = user.email;
  }
});

// ══ MULTI-PAGE SYSTEM ══
let currentPage = 'home';
let prevPage = 'home';

function showPage(page) {
  document.querySelectorAll('.page-section').forEach(p => p.classList.remove('active'));
  currentPage = page;
  const target = document.getElementById('page-'+page);
  if(target) target.classList.add('active');
  if(page === 'home') {
    renderFeaturedProducts(); updateCartBadge();
  } else if(page === 'shop') {
    renderProducts(); updateCartBadge(); renderRecentlyViewed();
  }
  document.querySelectorAll('.nav-page-link').forEach(a => {
    a.classList.toggle('active', a.dataset.page === page);
  });
  window.scrollTo({top:0, behavior:'smooth'});
  updateStickyCartBar();
}

function renderFeaturedProducts() {
  const grid = document.getElementById('featuredProductsGrid');
  if(!grid) return;
  const featured = PRODUCTS.slice(0,3);
  grid.innerHTML = featured.map(p => {
    const discPct = p.origPrice ? Math.round((1-p.price/p.origPrice)*100) : 0;
    return `<div class="product-card" onclick="openProductDetail('${p.id}')">
      ${discPct ? `<div class="product-badge">${discPct}% OFF</div>` : ''}
      <div class="product-img-wrap"><img src="${p.img}" alt="${p.name}" class="product-img" loading="lazy"></div>
      <div class="product-info">
        <div class="product-grade">${p.grade || ''}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-price-row">
          <span class="product-price">₹${p.price}</span>
          ${p.origPrice ? `<span class="product-orig">₹${p.origPrice}</span>` : ''}
        </div>
        <div class="product-stock ${p.stock > 0 ? 'in-stock' : 'out-stock'}">${p.stock > 0 ? '✓ In Stock' : 'Out of Stock'}</div>
        <button class="add-cart-btn" onclick="event.stopPropagation();addToCart('${p.id}')">ADD TO CART</button>
      </div>
    </div>`;
  }).join('');
}

// ══ PRODUCT DETAIL PAGE ══
let currentPDP = null;
let pdpSelectedSize = '';
let pdpSelectedRating = 0;

function openProductDetail(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if(!p) return;
  currentPDP = p;
  pdpSelectedSize = p.sizes ? p.sizes[0] : p.weight;

  // Breadcrumb
  document.getElementById('pdp-breadcrumb-name').textContent = p.name;
  // Grade
  document.getElementById('pdpGradeTag').textContent = 'Grade · '+p.grade;
  // Title
  document.getElementById('pdpTitle').textContent = p.name;
  // Badges
  const bNew = document.getElementById('pdpBadgeNew');
  const bSale = document.getElementById('pdpBadgeSale');
  if(p.badge) { bNew.textContent = p.badge; bNew.style.display=''; } else { bNew.style.display='none'; }
  const hasDiscount = p.origPrice && p.origPrice > p.price;
  const discPct = hasDiscount ? Math.round((1-p.price/p.origPrice)*100) : 0;
  if(hasDiscount) { bSale.textContent = discPct+'% OFF'; bSale.style.display=''; } else { bSale.style.display='none'; }
  // Price
  document.getElementById('pdpPrice').textContent = '₹'+p.price;
  if(hasDiscount) {
    document.getElementById('pdpPriceOriginal').textContent = '₹'+p.origPrice;
    document.getElementById('pdpPriceOriginal').style.display = '';
    document.getElementById('pdpDiscountBadge').textContent = discPct+'% OFF';
    document.getElementById('pdpDiscountBadge').style.display = '';
  } else {
    document.getElementById('pdpPriceOriginal').style.display = 'none';
    document.getElementById('pdpDiscountBadge').style.display = 'none';
  }
  document.getElementById('pdpPerUnit').textContent = 'Per '+pdpSelectedSize+' pack · Inclusive of all taxes';

  // Main image
  const allImgs = p.imgs && p.imgs.length ? p.imgs : [p.img];
  document.getElementById('pdpMainImg').src = allImgs[0];

  // Thumbs
  const thumbsEl = document.getElementById('pdpThumbs');
  thumbsEl.innerHTML = allImgs.map((src,i) =>
    `<img src="${src}" class="pdp-thumb${i===0?' active':''}" alt="${p.name}" onclick="pdpSetMainImg(this,'${src}')">`
  ).join('');

  // Sizes
  const sizesEl = document.getElementById('pdpSizeBtns');
  const sizes = p.sizes || [p.weight];
  sizesEl.innerHTML = sizes.map((s,i) =>
    `<button class="pdp-size-btn${i===0?' active':''}" onclick="pdpSelectSize(this,'${s}')">${s}</button>`
  ).join('');

  // Quantity reset
  document.getElementById('pdpQtyVal').value = 1;

  // Rating (mock or from reviews)
  loadPDPReviews(id);

  // Overview
  document.getElementById('pdpOverviewText').innerHTML = p.overview || '<p>'+p.desc+'</p>';

  // Pros
  const prosList = document.getElementById('pdpProsList');
  prosList.innerHTML = (p.pros||[]).map(x=>`<li>${x}</li>`).join('');

  // Cons
  const consList = document.getElementById('pdpConsList');
  consList.innerHTML = (p.cons||[]).map(x=>`<li>${x}</li>`).join('');

  // Specs
  const specsTable = document.getElementById('pdpSpecsTable');
  specsTable.innerHTML = (p.specs||[]).map(row=>`<tr><td>${row[0]}</td><td>${row[1]}</td></tr>`).join('');

  // Switch to first tab
  pdpSwitchTab('overview', document.getElementById('tab-overview'));

  // Show page
  showPage('product-detail');
  prevPage = currentPage !== 'product-detail' ? currentPage : prevPage;
  trackRecentlyViewed(id);
  updateStickyCartBar();
}

function pdpSetMainImg(thumb, src) {
  document.getElementById('pdpMainImg').src = src;
  document.querySelectorAll('.pdp-thumb').forEach(t => t.classList.remove('active'));
  thumb.classList.add('active');
}

function pdpSelectSize(btn, size) {
  document.querySelectorAll('.pdp-size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  pdpSelectedSize = size;
  if(currentPDP) document.getElementById('pdpPerUnit').textContent = 'Per '+size+' pack · Inclusive of all taxes';
}

function pdpQtyChange(delta) {
  const inp = document.getElementById('pdpQtyVal');
  const val = Math.max(1, parseInt(inp.value||1) + delta);
  inp.value = val;
}

function pdpAddToCart() {
  if(!currentPDP) return;
  const qty = parseInt(document.getElementById('pdpQtyVal').value||1);
  for(let i=0;i<qty;i++) addToCart(currentPDP.id);
  // Show feedback
  const btn = document.querySelector('.pdp-btn-cart');
  btn.textContent = '✓ ADDED TO CART';
  btn.style.background = '#27ae60';
  setTimeout(()=>{ btn.textContent='ADD TO CART'; btn.style.background=''; }, 2000);
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
  const tc = document.getElementById('pdptab-'+tab);
  if(tc) tc.classList.add('active');
}

// ══ REVIEWS ══
let allReviews = JSON.parse(localStorage.getItem('jsc_reviews')||'[]');

const defaultReviews = [
  {id:'r1',productId:1,name:'Ramesh Agarwal',location:'Mumbai',rating:5,title:'Finest cashews I have ever tasted',text:'Ordered W180 for our Diwali gift boxes. The size and quality exceeded expectations. Clients were thoroughly impressed. Will reorder.',date:'12 Nov 2024',verified:true,helpful:8},
  {id:'r2',productId:1,name:'Sunita Mehta',location:'Delhi',rating:5,title:'Premium quality, on-time delivery',text:'Best W180 in Rajasthan. We use it exclusively for our premium gift hampers. The kernel size and whiteness is outstanding.',date:'8 Oct 2024',verified:true,helpful:5},
  {id:'r3',productId:2,name:'Ashok Sharma',location:'Jaipur',rating:4,title:'Good quality, slightly expensive',text:'W240 is excellent — very uniform. Bulk pricing is competitive. The vacuum packing extends shelf life perfectly. Only minor concern is price has gone up this season.',date:'2 Jan 2025',verified:true,helpful:3},
  {id:'r4',productId:3,name:'Priya Verma',location:'Pune',rating:5,title:'Consistent quality every time',text:'W320 is my go-to for cooking. 4 years of ordering and not once has quality disappointed. Best W320 source in Jaipur.',date:'15 Mar 2025',verified:true,helpful:12},
  {id:'r5',productId:4,name:'Vikram Singh',location:'Udaipur',rating:5,title:'Perfect dry roast — no oily aftertaste',text:'Finally a dry roasted cashew that actually tastes like cashew, not oil. The sea salt balance is perfect. Highly addictive.',date:'20 Feb 2025',verified:true,helpful:7},
];

// Merge default with user-submitted
function getAllReviews(productId) {
  const stored = JSON.parse(localStorage.getItem('jsc_reviews')||'[]');
  const all = [...defaultReviews, ...stored].filter(r => !productId || r.productId === productId);
  return all;
}

function loadPDPReviews(productId) {
  const reviews = getAllReviews(productId);
  const count = reviews.length;
  document.getElementById('pdpReviewCount').textContent = count;
  document.getElementById('pdpTabReviewCount').textContent = count;
  document.getElementById('pdpBigCount').textContent = count+' ratings';

  if(!count) {
    document.getElementById('pdpReviewList').innerHTML = '<div class="dash-empty">No reviews yet. Be the first to review!</div>';
    document.getElementById('pdpBigScore').textContent = '—';
    return;
  }

  const avg = (reviews.reduce((a,b)=>a+b.rating,0)/count).toFixed(1);
  document.getElementById('pdpBigScore').textContent = avg;
  document.getElementById('pdpRatingNum').textContent = avg;

  // Stars
  const full = Math.floor(avg); const half = avg - full >= 0.5;
  document.getElementById('pdpStars').textContent = '★'.repeat(full) + (half?'½':'') + '☆'.repeat(5-full-(half?1:0));

  // Bars
  [1,2,3,4,5].forEach(star => {
    const cnt = reviews.filter(r=>r.rating===star).length;
    const pct = count ? (cnt/count*100).toFixed(0) : 0;
    document.getElementById('bar'+star).style.width = pct+'%';
    document.getElementById('cnt'+star).textContent = cnt;
  });

  // Review cards
  document.getElementById('pdpReviewList').innerHTML = reviews.slice().reverse().map(r => {
    const stars = '★'.repeat(r.rating)+'☆'.repeat(5-r.rating);
    return `<div class="pdp-review-card">
      <div class="pdp-review-top">
        <div class="pdp-review-author">
          <div class="pdp-review-avatar">${r.name.charAt(0).toUpperCase()}</div>
          <div>
            <div class="pdp-review-name">${r.name}</div>
            <div class="pdp-review-location">${r.location||''}</div>
          </div>
        </div>
        <div class="pdp-review-date">${r.date||''}</div>
      </div>
      <div class="pdp-review-stars">${stars}</div>
      <div class="pdp-review-title">${r.title||''}</div>
      <div class="pdp-review-text">${r.text}</div>
      ${r.verified?'<div class="pdp-review-verified">✓ Verified Purchase</div>':''}
      <div class="pdp-review-helpful">
        <span>Helpful?</span>
        <button onclick="this.disabled=true;this.textContent='👍 '+(parseInt(this.textContent.replace(/\D/g,''))||${r.helpful||0})+1">👍 ${r.helpful||0}</button>
        <button>👎</button>
      </div>
    </div>`;
  }).join('');
}

function pdpSelectStar(val) {
  pdpSelectedRating = val;
  document.querySelectorAll('.pdp-star-select span').forEach((s,i) => {
    s.classList.toggle('active', i < val);
  });
}

function submitReview() {
  const name = document.getElementById('rv-name').value.trim();
  const loc = document.getElementById('rv-loc').value.trim();
  const title = document.getElementById('rv-title').value.trim();
  const text = document.getElementById('rv-text').value.trim();
  if(!pdpSelectedRating) { alert('Please select a star rating.'); return; }
  if(!name || !text) { alert('Please enter your name and review.'); return; }
  const review = {
    id: 'u'+Date.now(),
    productId: currentPDP ? currentPDP.id : 0,
    name, location:loc, rating:pdpSelectedRating,
    title, text, date: new Date().toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'}),
    verified: !!window._currentUser, helpful:0, pending:true
  };
  const stored = JSON.parse(localStorage.getItem('jsc_reviews')||'[]');
  stored.push(review);
  localStorage.setItem('jsc_reviews', JSON.stringify(stored));
  document.getElementById('rv-success').style.display = 'block';
  document.getElementById('rv-name').value=''; document.getElementById('rv-loc').value='';
  document.getElementById('rv-title').value=''; document.getElementById('rv-text').value='';
  pdpSelectedRating = 0;
  document.querySelectorAll('.pdp-star-select span').forEach(s=>s.classList.remove('active'));
  setTimeout(()=>document.getElementById('rv-success').style.display='none', 5000);
}

// ══ SORT PRODUCTS ══
function sortProducts(val) {
  if(val==='price-asc') PRODUCTS.sort((a,b)=>a.price-b.price);
  else if(val==='price-desc') PRODUCTS.sort((a,b)=>b.price-a.price);
  else if(val==='discount') PRODUCTS.sort((a,b)=>{ const da=(a.origPrice?Math.round((1-a.price/a.origPrice)*100):0); const db=(b.origPrice?Math.round((1-b.price/b.origPrice)*100):0); return db-da; });
  else PRODUCTS.sort((a,b)=>a.id-b.id);
  renderProducts();
}

// ══ ADMIN TAB SWITCHING ══
function adminSwitchTab(tab, el) {
  document.querySelectorAll('.admin-tab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.admin-tab-content').forEach(c=>c.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('admintab-'+tab).classList.add('active');
  // Load tab data
  if(tab==='orders') loadAdminOrders();
  if(tab==='products') renderAdminProducts();
  if(tab==='payments') loadAdminPayments();
  if(tab==='reviews') loadAdminReviews();
}

// ══ ADMIN PRODUCTS ══
function renderAdminProducts() {
  const grid = document.getElementById('adminProductsGrid');
  document.getElementById('statProducts').textContent = PRODUCTS.length;
  grid.innerHTML = PRODUCTS.map(p => `
    <div class="admin-product-card">
      <img src="${p.img}" alt="${p.name}" class="admin-product-img">
      <div class="admin-product-body">
        <div class="admin-product-name">${p.name}</div>
        <div class="admin-product-price">₹${p.price} ${p.origPrice?`<span style="text-decoration:line-through;color:var(--text-soft);font-size:11px">₹${p.origPrice}</span>`:''}</div>
        <div class="admin-product-actions">
          <button class="btn-edit" onclick="openProductModal(${p.id})">✏ EDIT</button>
          <button class="btn-delete" onclick="deleteProduct(${p.id})">✕ DELETE</button>
        </div>
      </div>
    </div>
  `).join('');
}

function openProductModal(id) {
  const modal = document.getElementById('adminProductModal');
  modal.classList.add('open');
  if(!id) {
    document.getElementById('adminProductModalTitle').textContent = 'Add New Product';
    document.getElementById('editProductId').value = '';
    ['ap-name','ap-grade','ap-weight','ap-desc','ap-overview','ap-pros','ap-cons','ap-sizes','ap-badge'].forEach(f=>{ const el=document.getElementById(f); if(el) el.value=''; });
    document.getElementById('ap-price').value=''; document.getElementById('ap-origprice').value='';
    document.getElementById('adminPhotoPreview').innerHTML='';
  } else {
    const p = PRODUCTS.find(x=>x.id===id);
    if(!p) return;
    document.getElementById('adminProductModalTitle').textContent = 'Edit Product: '+p.name;
    document.getElementById('editProductId').value = id;
    document.getElementById('ap-name').value = p.name||'';
    document.getElementById('ap-grade').value = p.grade||'';
    document.getElementById('ap-cat').value = p.cat||'whole';
    document.getElementById('ap-weight').value = p.weight||'';
    document.getElementById('ap-price').value = p.price||'';
    document.getElementById('ap-origprice').value = p.origPrice||'';
    document.getElementById('ap-desc').value = p.desc||'';
    document.getElementById('ap-overview').value = (p.overview||'').replace(/<[^>]+>/g,'');
    document.getElementById('ap-pros').value = (p.pros||[]).join('\n');
    document.getElementById('ap-cons').value = (p.cons||[]).join('\n');
    document.getElementById('ap-sizes').value = (p.sizes||[]).join(', ');
    document.getElementById('ap-badge').value = p.badge||'';
    // Show current images
    const preview = document.getElementById('adminPhotoPreview');
    const imgs = p.imgs||[p.img];
    preview.innerHTML = imgs.map((src,i)=>`<div class="admin-photo-preview-item"><img src="${src}"><button class="admin-photo-remove" onclick="this.parentElement.remove()">✕</button></div>`).join('');
  }
}

function closeProductModal() {
  document.getElementById('adminProductModal').classList.remove('open');
}

async function previewProductPhotos(input) {
  const preview = document.getElementById('adminPhotoPreview');
  const files = Array.from(input.files);
  
  for(const file of files) {
    // Create preview div with progress
    const div = document.createElement('div');
    div.className = 'admin-photo-preview-item';
    div.innerHTML = `
      <div class="upload-progress-wrap">
        <div class="upload-progress-bar"></div>
        <span class="upload-progress-pct">0%</span>
      </div>
      <button class="admin-photo-remove" onclick="this.parentElement.remove()" style="display:none">✕</button>`;
    preview.appendChild(div);
    
    const progressBar = div.querySelector('.upload-progress-bar');
    const progressPct = div.querySelector('.upload-progress-pct');
    
    try {
      if(window._uploadProductImage) {
        // Upload to Firebase Storage
        const productId = document.getElementById('editProductId').value || 'new';
        const url = await window._uploadProductImage(file, productId, (pct) => {
          progressBar.style.width = pct + '%';
          progressPct.textContent = pct + '%';
        });
        div.innerHTML = `
          <img src="${url}" data-firebase-url="${url}">
          <button class="admin-photo-remove" onclick="this.parentElement.remove()">✕</button>`;
      } else {
        // Fallback: local base64 preview
        const reader = new FileReader();
        reader.onload = e => {
          div.innerHTML = `<img src="${e.target.result}"><button class="admin-photo-remove" onclick="this.parentElement.remove()">✕</button>`;
        };
        reader.readAsDataURL(file);
      }
    } catch(err) {
      div.innerHTML = `<div style="color:red;padding:8px;font-size:11px">Upload failed: ${err.message}</div>`;
    }
  }
  input.value = '';
}

function saveProduct() {
  const id = parseInt(document.getElementById('editProductId').value)||null;
  const name = document.getElementById('ap-name').value.trim();
  const price = parseInt(document.getElementById('ap-price').value);
  if(!name || !price) { alert('Product name and price are required.'); return; }

  // Collect photos (Firebase Storage URLs preferred over base64)
  const previewItems = document.querySelectorAll('#adminPhotoPreview .admin-photo-preview-item img');
  const newImgs = previewItems.length 
    ? Array.from(previewItems).map(i => i.dataset.firebaseUrl || i.src)
    : null;

  const productData = {
    name, grade: document.getElementById('ap-grade').value,
    cat: document.getElementById('ap-cat').value,
    weight: document.getElementById('ap-weight').value,
    price, origPrice: parseInt(document.getElementById('ap-origprice').value)||null,
    desc: document.getElementById('ap-desc').value,
    overview: '<p>'+document.getElementById('ap-overview').value.replace(/\n/g,'</p><p>')+'</p>',
    pros: document.getElementById('ap-pros').value.split('\n').filter(x=>x.trim()),
    cons: document.getElementById('ap-cons').value.split('\n').filter(x=>x.trim()),
    sizes: document.getElementById('ap-sizes').value.split(',').map(s=>s.trim()).filter(Boolean),
    badge: document.getElementById('ap-badge').value||null,
  };

  if(id) {
    const idx = PRODUCTS.findIndex(p=>p.id===id);
    if(idx>=0) {
      Object.assign(PRODUCTS[idx], productData);
      if(newImgs && newImgs.length) { PRODUCTS[idx].imgs=newImgs; PRODUCTS[idx].img=newImgs[0]; }
    }
  } else {
    const newId = Math.max(...PRODUCTS.map(p=>p.id))+1;
    productData.id = newId;
    if(newImgs && newImgs.length) { productData.img=newImgs[0]; productData.imgs=newImgs; }
    else { productData.img=''; productData.imgs=[]; }
    PRODUCTS.push(productData);
  }

  closeProductModal();
  renderAdminProducts();
  document.getElementById('statProducts').textContent = PRODUCTS.length;
  alert('✓ Product saved successfully!');
}

function deleteProduct(id) {
  if(!confirm('Delete this product? This cannot be undone.')) return;
  const idx = PRODUCTS.findIndex(p=>p.id===id);
  if(idx>=0) PRODUCTS.splice(idx,1);
  renderAdminProducts();
}

// ══ ADMIN ORDERS ══
let adminAllOrders = JSON.parse(localStorage.getItem('jsc_orders')||'[]');
let adminOrderFilter = 'all';

// Generate some sample orders for demo
if(!adminAllOrders.length) {
  adminAllOrders = [
    {id:'ORD-2501',customer:'Ramesh Agarwal',email:'ramesh@abc.com',phone:'9876543210',items:[{name:'W180 Jumbo Whole',qty:2,size:'250g',price:1450}],total:2900,status:'delivered',date:'12 Apr 2025',payment:'Razorpay',payStatus:'paid'},
    {id:'ORD-2502',customer:'Sunita Mehta',email:'sunita@xyz.com',phone:'9876500001',items:[{name:'W240 Large Whole',qty:4,size:'500g',price:2100}],total:8400,status:'shipped',date:'18 Apr 2025',payment:'Razorpay',payStatus:'paid'},
    {id:'ORD-2503',customer:'Ashok Sharma',email:'ashok@pqr.com',phone:'9876511111',items:[{name:'W320 Classic Whole',qty:10,size:'1kg',price:3200}],total:32000,status:'processing',date:'22 Apr 2025',payment:'Bank Transfer',payStatus:'paid'},
    {id:'ORD-2504',customer:'Priya Verma',email:'priya@email.com',phone:'9872211234',items:[{name:'Roasted & Salted',qty:3,size:'200g',price:780}],total:2340,status:'pending',date:'24 Apr 2025',payment:'Razorpay',payStatus:'pending'},
  ];
  localStorage.setItem('jsc_orders', JSON.stringify(adminAllOrders));
}

function loadAdminOrders() {
  renderAdminOrders();
  // Update stats
  document.getElementById('statOrders').textContent = adminAllOrders.length;
  const revenue = adminAllOrders.filter(o=>o.payStatus==='paid').reduce((a,b)=>a+b.total,0);
  document.getElementById('statRevenue').textContent = '₹'+revenue.toLocaleString('en-IN');
}

function filterAdminOrders(status, el) {
  adminOrderFilter = status;
  document.querySelectorAll('.admin-orders-filter button').forEach(b=>b.classList.remove('active'));
  el.classList.add('active');
  renderAdminOrders();
}

function renderAdminOrders() {
  const filtered = adminOrderFilter==='all' ? adminAllOrders : adminAllOrders.filter(o=>o.status===adminOrderFilter);
  const container = document.getElementById('adminOrdersContainer');
  if(!filtered.length) { container.innerHTML='<div class="admin-loading">No orders found.</div>'; return; }
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
      <td>
        <select onchange="updateOrderStatus('${o.id}',this.value)" style="border:1px solid var(--border);padding:5px;font-size:12px;font-family:'DM Sans',sans-serif">
          <option value="pending" ${o.status==='pending'?'selected':''}>Pending</option>
          <option value="processing" ${o.status==='processing'?'selected':''}>Processing</option>
          <option value="shipped" ${o.status==='shipped'?'selected':''}>Shipped</option>
          <option value="delivered" ${o.status==='delivered'?'selected':''}>Delivered</option>
          <option value="cancelled" ${o.status==='cancelled'?'selected':''}>Cancelled</option>
        </select>
      </td>
    </tr>`).join('')}</tbody>
  </table></div>`;
}

function updateOrderStatus(id, status) {
  const order = adminAllOrders.find(o=>o.id===id);
  if(order) { order.status=status; localStorage.setItem('jsc_orders',JSON.stringify(adminAllOrders)); renderAdminOrders(); }
}

// ══ ADMIN PAYMENTS ══
function loadAdminPayments() {
  const paidOrders = adminAllOrders.filter(o=>o.payStatus==='paid');
  const pendingOrders = adminAllOrders.filter(o=>o.payStatus==='pending');
  const total = paidOrders.reduce((a,b)=>a+b.total,0);
  const pending = pendingOrders.reduce((a,b)=>a+b.total,0);
  const now = new Date(); const thisMonth = now.getMonth(); const thisYear = now.getFullYear();
  const monthPaid = paidOrders.filter(o=>{ const d=new Date(o.date); return d.getMonth()===thisMonth && d.getFullYear()===thisYear; });
  const monthTotal = monthPaid.reduce((a,b)=>a+b.total,0);
  document.getElementById('payTotal').textContent = '₹'+total.toLocaleString('en-IN');
  document.getElementById('payMonth').textContent = '₹'+monthTotal.toLocaleString('en-IN');
  document.getElementById('payPending').textContent = '₹'+pending.toLocaleString('en-IN');
  document.getElementById('payCount').textContent = adminAllOrders.length;
  const container = document.getElementById('adminPaymentsContainer');
  if(!adminAllOrders.length) { container.innerHTML='<div class="admin-loading">No payments yet.</div>'; return; }
  container.innerHTML = `<div style="overflow-x:auto"><table class="admin-table">
    <thead><tr><th>ORDER ID</th><th>CUSTOMER</th><th>AMOUNT</th><th>DATE</th><th>METHOD</th><th>STATUS</th></tr></thead>
    <tbody>${adminAllOrders.map(o=>`<tr>
      <td>${o.id}</td>
      <td>${o.customer}</td>
      <td><strong>₹${o.total.toLocaleString('en-IN')}</strong></td>
      <td>${o.date}</td>
      <td>${o.payment}</td>
      <td><span style="font-size:11px;padding:3px 10px;background:${o.payStatus==='paid'?'#d4edda':'#fff3cd'};color:${o.payStatus==='paid'?'#155724':'#856404'}">${o.payStatus.toUpperCase()}</span></td>
    </tr>`).join('')}</tbody>
  </table></div>`;
}

// ══ ADMIN REVIEWS ══
function loadAdminReviews() {
  const filter = document.getElementById('adminReviewFilter').value;
  const stored = JSON.parse(localStorage.getItem('jsc_reviews')||'[]');
  const all = [...defaultReviews.map(r=>({...r,pending:false})), ...stored];
  const filtered = filter==='all' ? all : filter==='pending' ? all.filter(r=>r.pending) : all.filter(r=>!r.pending);
  const container = document.getElementById('adminReviewsContainer');
  if(!filtered.length) { container.innerHTML='<div class="admin-loading">No reviews found.</div>'; return; }
  container.innerHTML = `<div style="overflow-x:auto"><table class="admin-table">
    <thead><tr><th>PRODUCT</th><th>REVIEWER</th><th>RATING</th><th>TITLE</th><th>DATE</th><th>STATUS</th><th>ACTION</th></tr></thead>
    <tbody>${filtered.map(r=>`<tr>
      <td style="font-size:12px">${PRODUCTS.find(p=>p.id===r.productId)?.name||'General'}</td>
      <td><strong>${r.name}</strong><br><span style="font-size:11px;color:var(--text-soft)">${r.location||''}</span></td>
      <td style="color:#f5a623">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</td>
      <td style="font-size:12px">${r.title||r.text.substring(0,40)+'...'}</td>
      <td style="font-size:11px">${r.date||''}</td>
      <td><span style="font-size:10px;padding:3px 8px;background:${r.pending?'#fff3cd':'#d4edda'};color:${r.pending?'#856404':'#155724'}">${r.pending?'PENDING':'APPROVED'}</span></td>
      <td>
        ${r.pending?`<button onclick="approveReview('${r.id}')" style="border:1px solid #27ae60;background:none;padding:4px 10px;font-size:11px;cursor:pointer;color:#27ae60;font-family:'DM Sans',sans-serif">Approve</button>`:''}
        <button onclick="deleteReview('${r.id}')" style="border:1px solid #e74c3c;background:none;padding:4px 10px;font-size:11px;cursor:pointer;color:#e74c3c;font-family:'DM Sans',sans-serif;margin-left:4px">Delete</button>
      </td>
    </tr>`).join('')}</tbody>
  </table></div>`;
}

function approveReview(id) {
  const stored = JSON.parse(localStorage.getItem('jsc_reviews')||'[]');
  const r = stored.find(x=>x.id===id);
  if(r) { r.pending=false; localStorage.setItem('jsc_reviews',JSON.stringify(stored)); loadAdminReviews(); }
}

function deleteReview(id) {
  if(!confirm('Delete this review?')) return;
  const stored = JSON.parse(localStorage.getItem('jsc_reviews')||'[]');
  const filtered = stored.filter(x=>x.id!==id);
  localStorage.setItem('jsc_reviews',JSON.stringify(filtered));
  loadAdminReviews();
}




// ══ SEARCH ══
function navSearch(val) {
  const drop = document.getElementById('searchDropdown');
  val = val.trim().toLowerCase();
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
      <div class="search-result-item" onclick="openProductDetail(${p.id});closeNavSearch()">
        <img src="${p.img}" class="search-result-img" alt="${p.name}">
        <div>
          <div class="search-result-name">${p.name}</div>
          <div class="search-result-price">₹${p.price} / ${p.weight}</div>
        </div>
      </div>
    `).join('');
  }
  drop.classList.add('open');
}
function closeNavSearch() {
  const drop = document.getElementById('searchDropdown');
  if(drop) drop.classList.remove('open');
  const inp = document.getElementById('navSearchInput');
  if(inp) inp.value = '';
}

// ══ COUPON ══
const COUPONS = { 'CASHEW10': 10, 'JAIPUR15': 15, 'BULK20': 20 };
let appliedCoupon = null;

function applyCoupon() {
  const code = document.getElementById('couponInput').value.trim().toUpperCase();
  const msg = document.getElementById('couponMsg');
  const savingsEl = document.getElementById('cartSavings');
  if(!code) { msg.className='cart-coupon-msg error'; msg.textContent='Please enter a promo code.'; return; }
  if(COUPONS[code]) {
    appliedCoupon = {code, pct: COUPONS[code]};
    msg.className='cart-coupon-msg success'; msg.textContent='✓ '+code+' applied — '+COUPONS[code]+'% off!';
    savingsEl.classList.add('show');
    renderCart();
  } else {
    appliedCoupon = null;
    msg.className='cart-coupon-msg error'; msg.textContent='Invalid code. Try: CASHEW10, JAIPUR15, or BULK20';
    savingsEl.classList.remove('show');
    renderCart();
  }
}

// ══ UPDATE renderCart to include coupon savings ══


// ══ RECENTLY VIEWED ══
let recentlyViewed = JSON.parse(localStorage.getItem('jsc_recent')||'[]');

function trackRecentlyViewed(id) {
  recentlyViewed = recentlyViewed.filter(x=>x!==id);
  recentlyViewed.unshift(id);
  recentlyViewed = recentlyViewed.slice(0,6);
  localStorage.setItem('jsc_recent', JSON.stringify(recentlyViewed));
}

function renderRecentlyViewed() {
  const wrap = document.getElementById('recentlyViewedWrap');
  if(!wrap) return;
  const ids = recentlyViewed.filter(id => PRODUCTS.find(p=>p.id===id));
  if(!ids.length) { wrap.style.display='none'; return; }
  wrap.style.display = 'block';
  document.getElementById('recentlyViewedGrid').innerHTML = ids.map(id => {
    const p = PRODUCTS.find(x=>x.id===id);
    if(!p) return '';
    return `<div class="recently-viewed-item" onclick="openProductDetail(${p.id})">
      <img src="${p.img}" class="recently-viewed-img" alt="${p.name}">
      <div class="recently-viewed-name">${p.name}</div>
      <div class="recently-viewed-price">₹${p.price}</div>
    </div>`;
  }).join('');
}

// ══ SHARE ══
function pdpShareWA() {
  if(!currentPDP) return;
  const msg = `Check out *${currentPDP.name}* from Jai Shree Cashew Industries — ₹${currentPDP.price}/${currentPDP.weight}. Visit: https://jaishreecashewindustries-rgb.github.io/cashewpro/`;
  window.open('https://wa.me/?text='+encodeURIComponent(msg),'_blank');
}
function pdpCopyLink() {
  const url = window.location.href.split('#')[0] + '#product-' + (currentPDP?.id||'');
  navigator.clipboard.writeText(url).then(()=>{
    const el = document.getElementById('pdpCopyConfirm');
    if(el) { el.style.display='inline'; setTimeout(()=>el.style.display='none',2500); }
  }).catch(()=>{ alert('Link: '+url); });
}

// ══ STICKY CART BAR ══
function updateStickyCartBar() {
  const bar = document.getElementById('stickyCartBar');
  if(!bar) return;
  if(currentPage === 'product-detail' && currentPDP) {
    document.getElementById('stickyCartPrice').textContent = '₹'+currentPDP.price;
    document.getElementById('stickyCartSize').textContent = pdpSelectedSize || currentPDP.weight;
    bar.style.display = 'flex';
  } else {
    bar.style.display = 'none';
  }
}

// ══ OVERRIDE openProductDetail to also track + sticky ══




// ══ INIT ══
updateCartBadge();
showPage('home');
