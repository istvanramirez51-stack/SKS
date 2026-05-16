/* ════════════════════════════════════════════
   SKS — Santapan Kilat Semester | script.js
   Updated: Nav user, Resi, Notif riwayat pesanan, Hero media
════════════════════════════════════════════ */

// ═── DATA PRODUK DENGAN GAMBAR ─══
const products = [
  {
    id: 1, name: "SKS Box Classic", cat: "nasi-box", price: 18000, oldPrice: 22000,
    img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop",
    badge: "hot", badgeText: "BESTSELLER",
    rating: 4.9, reviews: 328,
    desc: "Nasi putih hangat + ayam goreng krispi + sambal bawang + lalapan + tahu tempe. Porsi mahasiswa yang nggak pelit.",
    tags: ["Halal","Pedas","Bergizi"], stock: true
  },
  {
    id: 2, name: "Nasi Rendang Spesial", cat: "nasi-box", price: 25000, oldPrice: 30000,
    img: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=400&h=300&fit=crop",
    badge: "sale", badgeText: "DISKON",
    rating: 4.8, reviews: 215,
    desc: "Rendang daging sapi asli Padang, bumbu meresap 8 jam. Nasi pulen + kuah kentang + sambal ijo.",
    tags: ["Premium","Halal","Pedas"], stock: true
  },
  {
    id: 3, name: "Nasi Ayam Kremes", cat: "nasi-box", price: 20000, oldPrice: null,
    img: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?w=400&h=300&fit=crop",
    badge: "new", badgeText: "BARU",
    rating: 4.7, reviews: 89,
    desc: "Ayam goreng kremes super renyah, kremesan melimpah. Sambal terasi + sayur asem + nasi hangat.",
    tags: ["Renyah","Halal","Pedas"], stock: true
  },
  {
    id: 4, name: "Nasi Ikan Bakar", cat: "nasi-box", price: 22000, oldPrice: null,
    img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop",
    badge: null, badgeText: null,
    rating: 4.6, reviews: 156,
    desc: "Ikan nila bakar bumbu kecap + sambal colo-colo + nasi + plecing kangkung. Segar dari arang.",
    tags: ["Bakar","Halal","Segar"], stock: true
  },
  {
    id: 5, name: "Mie Goreng Deadline", cat: "mie-pasta", price: 15000, oldPrice: 18000,
    img: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=400&h=300&fit=crop",
    badge: "hot", badgeText: "FAVORIT",
    rating: 4.9, reviews: 412,
    desc: "Mie goreng Jawa dengan topping bakso, sayuran, dan telur mata sapi. Level pedas bisa request.",
    tags: ["Pedas","Vegetarian","Cepat"], stock: true
  },
  {
    id: 6, name: "Spaghetti Bolognese", cat: "mie-pasta", price: 24000, oldPrice: null,
    img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&h=300&fit=crop",
    badge: "new", badgeText: "BARU",
    rating: 4.5, reviews: 67,
    desc: "Spaghetti al dente dengan saus bolognese daging cincang, taburan keju parmesan. Rasa restoran, harga mahasiswa.",
    tags: ["Keju","Halal","Premium"], stock: true
  },
  {
    id: 7, name: "Kwetiau Goreng", cat: "mie-pasta", price: 16000, oldPrice: null,
    img: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&h=300&fit=crop",
    badge: null, badgeText: null,
    rating: 4.6, reviews: 134,
    desc: "Kwetiau lebar goreng dengan seafood dan sayur sawi. Rasa gurih nikmat, cocok buat makan malam.",
    tags: ["Seafood","Gurih","Hangat"], stock: true
  },
  {
    id: 8, name: "Es Teh Manis Jumbo", cat: "minuman", price: 5000, oldPrice: 7000,
    img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop",
    badge: "sale", badgeText: "PROMO",
    rating: 4.8, reviews: 892,
    desc: "Es teh manis 1 liter, pakai teh asli + gula aren. Segarnya bikin melek saat begadang tugas.",
    tags: ["Segar","Manis","Jumbo"], stock: true
  },
  {
    id: 9, name: "Kopi Susu SKS", cat: "minuman", price: 12000, oldPrice: null,
    img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&h=300&fit=crop",
    badge: "hot", badgeText: "BESTSELLER",
    rating: 4.9, reviews: 567,
    desc: "Kopi robusta lokal + susu segar + gula aren. Kafein cukup buat nemenin skripsian semalaman.",
    tags: ["Kafein","Hangat","Segar"], stock: true
  },
  {
    id: 10, name: "Jus Alpukat", cat: "minuman", price: 14000, oldPrice: null,
    img: "https://images.unsplash.com/photo-1601039641847-7857b994d704?w=400&h=300&fit=crop",
    badge: "vegan", badgeText: "VEGAN",
    rating: 4.7, reviews: 234,
    desc: "Alpukat matang sempurna + susu kental manis + es batu. Creamy, sehat, dan mengenyangkan.",
    tags: ["Sehat","Creamy","Dingin"], stock: true
  },
  {
    id: 11, name: "Pisang Goreng Crispy", cat: "snack", price: 10000, oldPrice: null,
    img: "https://images.unsplash.com/photo-1600492515588-6f0b9c9c0b1e?w=400&h=300&fit=crop",
    badge: "new", badgeText: "BARU",
    rating: 4.6, reviews: 178,
    desc: "Pisang tanduk goreng tepung renyah, tabur keju + coklat meses. Camilan sempurna saat break.",
    tags: ["Manis","Renyah","Hangat"], stock: true
  },
  {
    id: 12, name: "Martabak Mini 5pcs", cat: "snack", price: 15000, oldPrice: null,
    img: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?w=400&h=300&fit=crop",
    badge: null, badgeText: null,
    rating: 4.5, reviews: 145,
    desc: "Martabak manis mini isi coklat keju. 5 pcs cukup buat sharing bareng teman kos.",
    tags: ["Sharing","Manis","Hangat"], stock: true
  },
  {
    id: 13, name: "Paket UAS Survival", cat: "paket", price: 40000, oldPrice: 50000,
    img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=300&fit=crop",
    badge: "sale", badgeText: "HEMAT 25%",
    rating: 4.9, reviews: 312,
    desc: "Nasi box + jus + pisang goreng. Paket lengkap buat nemenin hari-hari UAS. Hemat 25%!",
    tags: ["Paket","Hemat","Lengkap"], stock: true
  },
  {
    id: 14, name: "Paket Skripsi Marathon", cat: "paket", price: 35000, oldPrice: 42000,
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop",
    badge: "hot", badgeText: "BEST DEAL",
    rating: 4.8, reviews: 198,
    desc: "Mie goreng + kopi susu + snack. Kombinasi sempurna buat begadang ngerjain bab 1-5.",
    tags: ["Paket","Kafein","Gurih"], stock: true
  }
];

// ═── STATE ─══
let cart = JSON.parse(localStorage.getItem('sks_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('sks_wishlist')) || [];
let currentFilter = 'all';
let currentSearch = '';
let modalProduct = null;
let modalQty = 1;
let appliedVoucher = null;
let orderHistory = JSON.parse(localStorage.getItem('sks_orders')) || [];
let currentOrder = null;
let resiSaved = false; // Track if resi has been saved
let pendingViewOrderIdx = -1; // For WA gate flow from notif

const vouchers = {
  'SKS10': { type:'percent', value:10, label:'Diskon 10%' },
  'UJIAN': { type:'fixed', value:5000, label:'Diskon Rp 5.000' },
  'MAHASISWA': { type:'ongkir', value:3000, label:'Gratis Ongkir' },
  'MALAMLMH': { type:'percent', value:15, label:'Diskon 15%' }
};

// ═── INIT ─══
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartUI();
  updateWishlistUI();
  initScrollAnim();
  initScrollTop();
  initTheme();
  updateFilterCounts();
  startHeroAnimations();
  initUser();
  updateNotifBadge();
  initHeroMedia();
});

// ═── HERO MEDIA (Gambar / Video) ─══
function initHeroMedia() {
  const imgEl = document.getElementById('heroMediaImg');
  const vidEl = document.getElementById('heroMediaVideo');
  const toggleBtn = document.getElementById('heroMediaToggle');
  if (!imgEl || !vidEl) return;

  // Default: tampilkan gambar
  imgEl.classList.add('active');
  vidEl.classList.remove('active');

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const isImg = imgEl.classList.contains('active');
      if (isImg) {
        imgEl.classList.remove('active');
        vidEl.classList.add('active');
        vidEl.play().catch(()=>{});
        toggleBtn.innerHTML = '<i class="bi bi-image"></i> GAMBAR';
      } else {
        vidEl.classList.remove('active');
        vidEl.pause();
        imgEl.classList.add('active');
        toggleBtn.innerHTML = '<i class="bi bi-play-circle"></i> VIDEO';
      }
    });
  }
}

// ═── USER / LOGIN ─══
function initUser() {
  const user = JSON.parse(localStorage.getItem('sks_user'));
  if (user) {
    // Desktop nav
    const navLoginBtn = document.getElementById('navLoginBtn');
    const navUser = document.getElementById('navUser');
    const userName = document.getElementById('userName');
    if (navLoginBtn) navLoginBtn.style.display = 'none';
    if (navUser) navUser.style.display = 'flex';
    if (userName) userName.textContent = user.name;

    // Mobile nav
    const mobLoginLink = document.getElementById('mobLoginLink');
    const mobUserInfo = document.getElementById('mobUserInfo');
    const mobUserName = document.getElementById('mobUserName');
    if (mobLoginLink) mobLoginLink.style.display = 'none';
    if (mobUserInfo) mobUserInfo.style.display = 'flex';
    if (mobUserName) mobUserName.textContent = user.name;
  }
}

function logout() {
  localStorage.removeItem('sks_user');
  showToast('Logout berhasil', 'success');
  setTimeout(() => location.reload(), 800);
}

// ═── RENDER PRODUK ─══
function renderProducts() {
  const grid = document.getElementById('productGrid');
  const noRes = document.getElementById('noResults');
  if (!grid) return;

  let filtered = products.filter(p => {
    const matchCat = currentFilter === 'all' || p.cat === currentFilter;
    const matchSearch = !currentSearch || p.name.toLowerCase().includes(currentSearch.toLowerCase());
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    noRes.style.display = 'flex';
    grid.querySelectorAll('.product-card').forEach(c => c.remove());
    return;
  }
  noRes.style.display = 'none';

  grid.querySelectorAll('.product-card').forEach(c => c.remove());

  filtered.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'product-card anim';
    card.style.animationDelay = `${i * 0.06}s`;
    card.onclick = (e) => { if (!e.target.closest('.card-fav') && !e.target.closest('.card-qty-ctrl')) openModal(p.id); };

    const inCart = cart.find(c => c.id === p.id);
    const inWl = wishlist.includes(p.id);

    let badgeHTML = '';
    if (p.badge) badgeHTML = `<div class="card-badge badge-${p.badge}"><i class="bi bi-${getBadgeIcon(p.badge)}"></i> ${p.badgeText}</div>`;

    card.innerHTML = `
      <div class="card-img">
        <img src="${p.img}" alt="${p.name}" loading="lazy">
        <div class="card-img-gradient"></div>
        ${badgeHTML}
        <button class="card-fav ${inWl ? 'active' : ''}" onclick="toggleWishlist(${p.id}, this)" aria-label="Wishlist">
          <i class="bi bi-heart${inWl ? '-fill' : ''}"></i>
        </button>
        <div class="card-rating"><i class="bi bi-star-fill"></i> ${p.rating}</div>
        <div class="card-in-cart ${inCart ? 'show' : ''}" id="inCart-${p.id}"><i class="bi bi-cart-check-fill"></i> ${inCart ? inCart.qty : 0}</div>
      </div>
      <div class="card-body">
        <div class="card-cat">${getCatLabel(p.cat)}</div>
        <div class="card-name">${p.name}</div>
        <div class="card-desc">${p.desc}</div>
        <div class="card-footer">
          <div class="price-wrap">
            <div class="card-price">${fmt(p.price)}</div>
            ${p.oldPrice ? `<div class="card-old-price">${fmt(p.oldPrice)}</div>` : ''}
          </div>
          <div class="card-qty-ctrl" id="ctrl-${p.id}">
            ${renderCtrl(p.id)}
          </div>
        </div>
      </div>
    `;
    grid.insertBefore(card, noRes);
  });

  requestAnimationFrame(() => {
    grid.querySelectorAll('.product-card').forEach(c => c.classList.add('in'));
  });
}

function getBadgeIcon(badge) {
  const map = { hot: 'fire', new: 'stars', sale: 'tag', vegan: 'flower1' };
  return map[badge] || 'circle';
}

function getCatLabel(cat) {
  const map = { 'nasi-box':'Nasi Box', 'mie-pasta':'Mie & Pasta', 'minuman':'Minuman', 'snack':'Snack', 'paket':'Paket Hemat' };
  return map[cat] || cat;
}

function renderCtrl(id) {
  const item = cart.find(c => c.id === id);
  if (!item) return `<button class="cq-btn add-new" onclick="addToCart(${id}, 1, event)" aria-label="Tambah"><i class="bi bi-plus-lg"></i></button>`;
  return `
    <button class="cq-btn" onclick="addToCart(${id}, -1, event)" aria-label="Kurangi"><i class="bi bi-dash-lg"></i></button>
    <span class="cq-num" id="cq-num-${id}">${item.qty}</span>
    <button class="cq-btn add-new" onclick="addToCart(${id}, 1, event)" aria-label="Tambah"><i class="bi bi-plus-lg"></i></button>
  `;
}

// ═── FILTER ─══
function setFilter(cat, btn) {
  currentFilter = cat;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  else {
    const target = document.querySelector(`.filter-btn[onclick*="'${cat}'"]`);
    if (target) target.classList.add('active');
  }
  renderProducts();
}

function updateFilterCounts() {
  const counts = { all: products.length };
  products.forEach(p => { counts[p.cat] = (counts[p.cat] || 0) + 1; });
  Object.entries(counts).forEach(([k, v]) => {
    const el = document.getElementById(`fc-${k}`);
    if (el) el.textContent = v;
  });
}

// ═── SEARCH ─══
function handleSearch(val) {
  currentSearch = val.trim();
  renderProducts();
}
function openSearchDrop() {
  const dd = document.getElementById('searchDropdown');
  if (!dd || !currentSearch) return;
  dd.classList.add('open');
  renderSearchResults(currentSearch);
}
function closeSearchDrop() {
  setTimeout(() => {
    const dd = document.getElementById('searchDropdown');
    if (dd) dd.classList.remove('open');
  }, 180);
}
function renderSearchResults(q) {
  const dd = document.getElementById('searchDropdown');
  if (!dd) return;
  const filtered = products.filter(p => p.name.toLowerCase().includes(q.toLowerCase())).slice(0, 6);
  if (filtered.length === 0) { dd.innerHTML = '<div class="search-result"><span style="color:var(--muted);font-size:11px;padding:10px 14px;">Tidak ditemukan</span></div>'; return; }
  dd.innerHTML = filtered.map(p => `
    <div class="search-result" onclick="openModal(${p.id}); document.getElementById('searchDropdown').classList.remove('open');">
      <div class="sr-img"><img src="${p.img}" alt="${p.name}"></div>
      <div><div class="sr-name">${p.name}</div><div class="sr-price">${fmt(p.price)}</div></div>
    </div>
  `).join('');
}

// ═── CART ─══
function addToCart(id, delta, ev) {
  if (ev) ev.stopPropagation();
  const idx = cart.findIndex(c => c.id === id);
  if (idx >= 0) {
    cart[idx].qty += delta;
    if (cart[idx].qty <= 0) cart.splice(idx, 1);
  } else if (delta > 0) {
    const p = products.find(x => x.id === id);
    if (p) cart.push({ id, qty: delta, price: p.price, name: p.name, img: p.img });
  }
  saveCart();
  updateCartUI();
  renderProducts();
  showToast(delta > 0 ? 'Ditambahkan ke keranjang' : 'Dikurangi dari keranjang', 'success');
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  saveCart();
  updateCartUI();
  renderProducts();
  showToast('Dihapus dari keranjang', 'error');
}

function saveCart() { localStorage.setItem('sks_cart', JSON.stringify(cart)); }

function updateCartUI() {
  const totalQty = cart.reduce((s, c) => s + c.qty, 0);
  const totalPrice = cart.reduce((s, c) => s + c.qty * c.price, 0);

  const cb = document.getElementById('cartBadge');
  const bcb = document.getElementById('bnavCartBadge');
  if (cb) { cb.textContent = totalQty; cb.style.display = totalQty ? 'flex' : 'none'; if (totalQty) cb.classList.add('pop'); setTimeout(() => cb.classList.remove('pop'), 300); }
  if (bcb) { bcb.textContent = totalQty; bcb.style.display = totalQty ? 'flex' : 'none'; }

  const chc = document.getElementById('cartHdrCount');
  if (chc) chc.textContent = `${totalQty} item dipilih`;

  const cItems = document.getElementById('cartItems');
  const cEmpty = document.getElementById('cartEmpty');
  const cFtr = document.getElementById('cartFtr');
  const cTotal = document.getElementById('cartTotal');

  if (cart.length === 0) {
    if (cItems) { cItems.innerHTML = ''; cItems.appendChild(cEmpty); }
    if (cFtr) cFtr.style.display = 'none';
  } else {
    if (cEmpty && cEmpty.parentElement === cItems) cItems.removeChild(cEmpty);
    if (cItems) cItems.innerHTML = cart.map(c => `
      <div class="cart-item">
        <div class="ci-img"><img src="${c.img}" alt="${c.name}"></div>
        <div class="ci-info">
          <div class="ci-name">${c.name}</div>
          <div class="ci-price">${fmt(c.price)} x ${c.qty}</div>
        </div>
        <div class="ci-qty">
          <button class="ci-btn" onclick="addToCart(${c.id}, -1)"><i class="bi bi-dash-lg"></i></button>
          <span class="ci-num">${c.qty}</span>
          <button class="ci-btn" onclick="addToCart(${c.id}, 1)"><i class="bi bi-plus-lg"></i></button>
        </div>
      </div>
    `).join('');
    if (cFtr) cFtr.style.display = 'flex';
  }
  if (cTotal) cTotal.textContent = fmt(totalPrice);

  const cdt = document.getElementById('cartDelTime');
  if (cdt) cdt.textContent = cart.length ? '12–18 menit' : '—';

  updateShipBar(totalPrice);
}

function updateShipBar(total) {
  const bar = document.getElementById('cartShipBar');
  const fill = document.getElementById('cspFill');
  const txt = document.getElementById('cspText');
  if (!bar) return;
  const target = 30000;
  const pct = Math.min((total / target) * 100, 100);
  if (fill) fill.style.width = pct + '%';
  if (txt) {
    if (total >= target) txt.innerHTML = '<i class="bi bi-check-circle-fill"></i> Gratis ongkir aktif!';
    else txt.textContent = `Tambah ${fmt(target - total)} lagi untuk gratis ongkir`;
  }
  bar.style.display = cart.length ? 'block' : 'none';
}

function openCart() {
  document.getElementById('cartOverlay').classList.add('open');
  document.getElementById('cartDrawer').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  document.getElementById('cartOverlay').classList.remove('open');
  document.getElementById('cartDrawer').classList.remove('open');
  document.body.style.overflow = '';
}

// ═── WISHLIST ─══
function toggleWishlist(id, btn) {
  if (event) event.stopPropagation();
  const idx = wishlist.indexOf(id);
  if (idx >= 0) { wishlist.splice(idx, 1); showToast('Dihapus dari wishlist', 'error'); }
  else { wishlist.push(id); showToast('Ditambahkan ke wishlist', 'success'); }
  localStorage.setItem('sks_wishlist', JSON.stringify(wishlist));
  updateWishlistUI();
  if (btn) {
    const icon = btn.querySelector('i');
    if (idx >= 0) { btn.classList.remove('active'); icon.className = 'bi bi-heart'; }
    else { btn.classList.add('active'); icon.className = 'bi bi-heart-fill'; }
  } else { renderProducts(); }
}

function updateWishlistUI() {
  const wl = document.getElementById('wlItems');
  const wlEmpty = document.getElementById('wlEmpty');
  const wlBadge = document.getElementById('wlBadge');
  const bwl = document.getElementById('bnavWlBadge');

  if (wlBadge) { wlBadge.textContent = wishlist.length; wlBadge.style.display = wishlist.length ? 'flex' : 'none'; }
  if (bwl) { bwl.textContent = wishlist.length; bwl.style.display = wishlist.length ? 'flex' : 'none'; }

  if (wishlist.length === 0) {
    if (wl) { wl.innerHTML = ''; wl.appendChild(wlEmpty); }
  } else {
    if (wlEmpty && wlEmpty.parentElement === wl) wl.removeChild(wlEmpty);
    if (wl) wl.innerHTML = wishlist.map(id => {
      const p = products.find(x => x.id === id);
      if (!p) return '';
      return `
        <div class="wl-item">
          <div class="wl-img"><img src="${p.img}" alt="${p.name}"></div>
          <div class="wl-info">
            <div class="wl-name">${p.name}</div>
            <div class="wl-price">${fmt(p.price)}</div>
          </div>
          <div class="wl-actions">
            <button class="wl-add-btn" onclick="addToCart(${p.id}, 1); closeWishlist();"><i class="bi bi-cart-plus"></i></button>
            <button class="wl-rem-btn" onclick="toggleWishlist(${p.id})"><i class="bi bi-trash"></i></button>
          </div>
        </div>
      `;
    }).join('');
  }
}

function openWishlist() {
  document.getElementById('wlOverlay').classList.add('open');
  document.getElementById('wlDrawer').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeWishlist() {
  document.getElementById('wlOverlay').classList.remove('open');
  document.getElementById('wlDrawer').classList.remove('open');
  document.body.style.overflow = '';
}

// ═── MODAL ─══
function openModal(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  modalProduct = p;
  modalQty = 1;

  document.getElementById('modalImgEl').src = p.img;
  document.getElementById('modalImgEl').alt = p.name;
  const badge = document.getElementById('modalImgBadge');
  if (p.badge) { badge.className = `modal-img-badge badge-${p.badge}`; badge.innerHTML = `<i class="bi bi-${getBadgeIcon(p.badge)}"></i> ${p.badgeText}`; badge.style.display = 'flex'; }
  else badge.style.display = 'none';

  document.getElementById('modalCat').textContent = getCatLabel(p.cat);
  document.getElementById('modalName').textContent = p.name;
  document.getElementById('modalStars').innerHTML = renderStars(p.rating);
  document.getElementById('modalRatingCount').textContent = `(${p.reviews} review)`;
  document.getElementById('modalDesc').textContent = p.desc;
  document.getElementById('modalTags').innerHTML = p.tags.map(t => `<span class="modal-tag">${t}</span>`).join('');
  document.getElementById('modalStockText').textContent = p.stock ? 'Tersedia' : 'Stok habis';
  document.getElementById('modalPrice').textContent = fmt(p.price);
  document.getElementById('modalOldPrice').textContent = p.oldPrice ? fmt(p.oldPrice) : '';
  document.getElementById('modalQtyNum').textContent = modalQty;

  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
function closeModalOut(e) { if (e.target.id === 'modalOverlay') closeModal(); }

function modalQtyChange(d) {
  modalQty = Math.max(1, modalQty + d);
  document.getElementById('modalQtyNum').textContent = modalQty;
}
function addFromModal() {
  if (!modalProduct) return;
  const idx = cart.findIndex(c => c.id === modalProduct.id);
  if (idx >= 0) cart[idx].qty += modalQty;
  else cart.push({ id: modalProduct.id, qty: modalQty, price: modalProduct.price, name: modalProduct.name, img: modalProduct.img });
  saveCart();
  updateCartUI();
  renderProducts();
  closeModal();
  showToast(`${modalQty} ${modalProduct.name} ditambahkan`, 'success');
}

function renderStars(r) {
  let s = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(r)) s += '<i class="bi bi-star-fill"></i>';
    else if (i - 0.5 <= r) s += '<i class="bi bi-star-half"></i>';
    else s += '<i class="bi bi-star"></i>';
  }
  return s;
}

// ═── CHECKOUT ─══
function goCheckout() {
  if (cart.length === 0) { showToast('Keranjang masih kosong!', 'error'); return; }
  closeCart();
  document.getElementById('mainPage').classList.add('hidden');
  document.getElementById('checkoutPage').classList.add('active');
  window.scrollTo(0, 0);
  renderCheckoutSummary();
  updateSteps(2);
}

function backToMain() {
  document.getElementById('checkoutPage').classList.remove('active');
  document.getElementById('mainPage').classList.remove('hidden');
  window.scrollTo(0, 0);
}

function renderCheckoutSummary() {
  const items = document.getElementById('coSumItems');
  const subtotal = cart.reduce((s, c) => s + c.qty * c.price, 0);
  const ongkir = subtotal >= 30000 ? 0 : 3000;
  let diskon = 0;
  if (appliedVoucher) {
    const v = vouchers[appliedVoucher];
    if (v.type === 'percent') diskon = Math.floor(subtotal * v.value / 100);
    else if (v.type === 'fixed') diskon = v.value;
    else if (v.type === 'ongkir') diskon = ongkir;
  }
  const total = subtotal + ongkir - diskon;

  if (items) items.innerHTML = cart.map(c => `
    <div class="co-sum-item">
      <div class="co-sum-img"><img src="${c.img}" alt="${c.name}"></div>
      <div class="co-sum-name">${c.name} x${c.qty}</div>
      <div class="co-sum-price">${fmt(c.qty * c.price)}</div>
    </div>
  `).join('');

  document.getElementById('coItemCount').textContent = `${cart.reduce((s,c)=>s+c.qty,0)} item`;
  document.getElementById('coSubtotal').textContent = fmt(subtotal);
  document.getElementById('coOngkir').textContent = ongkir === 0 ? 'GRATIS' : fmt(ongkir);
  document.getElementById('coDiskon').textContent = diskon > 0 ? `- ${fmt(diskon)}` : 'Rp 0';
  document.getElementById('coTotal').textContent = fmt(total);
}

function applyVoucher() {
  const inp = document.getElementById('voucherInput');
  const msg = document.getElementById('voucherMsg');
  const code = inp.value.trim().toUpperCase();
  if (!code) { msg.className = 'voucher-msg error'; msg.textContent = 'Masukkan kode voucher'; msg.style.display = 'block'; return; }
  if (vouchers[code]) {
    appliedVoucher = code;
    msg.className = 'voucher-msg success';
    msg.innerHTML = `<i class="bi bi-check-circle-fill"></i> ${vouchers[code].label} diterapkan!`;
    msg.style.display = 'block';
    renderCheckoutSummary();
  } else {
    appliedVoucher = null;
    msg.className = 'voucher-msg error';
    msg.innerHTML = `<i class="bi bi-x-circle-fill"></i> Kode tidak valid`;
    msg.style.display = 'block';
    renderCheckoutSummary();
  }
}

function selPayment(el) {
  document.querySelectorAll('.pay-opt').forEach(p => p.classList.remove('selected'));
  el.classList.add('selected');
  el.querySelector('input[type=radio]').checked = true;
}

function updateSteps(n) {
  for (let i = 1; i <= 4; i++) {
    const s = document.getElementById(`step${i}`);
    if (!s) continue;
    s.classList.remove('active', 'done');
    if (i < n) s.classList.add('done');
    else if (i === n) s.classList.add('active');
  }
}

// ═── PLACE ORDER + RESI ─══
function placeOrder() {
  const name = document.getElementById('co-name').value.trim();
  const phone = document.getElementById('co-phone').value.trim();
  const addr = document.getElementById('co-address').value.trim();
  if (!name || !phone || !addr) { showToast('Lengkapi data pengiriman!', 'error'); return; }

  // Generate order data
  const oid = '#SKS-' + Math.floor(1000 + Math.random() * 9000);
  const barcode = 'SKS' + Math.floor(100000000000 + Math.random() * 900000000000);
  const now = new Date();
  const timeStr = now.toLocaleTimeString('id-ID', {hour:'2-digit', minute:'2-digit'});
  const dateStr = now.toLocaleDateString('id-ID', {day:'2-digit', month:'short', year:'numeric'});

  const subtotal = cart.reduce((s, c) => s + c.qty * c.price, 0);
  const ongkir = subtotal >= 30000 ? 0 : 3000;
  let diskon = 0;
  if (appliedVoucher) {
    const v = vouchers[appliedVoucher];
    if (v.type === 'percent') diskon = Math.floor(subtotal * v.value / 100);
    else if (v.type === 'fixed') diskon = v.value;
    else if (v.type === 'ongkir') diskon = ongkir;
  }
  const total = subtotal + ongkir - diskon;

  currentOrder = {
    id: oid,
    barcode: barcode,
    date: dateStr + ' ' + timeStr,
    items: [...cart],
    name: name,
    phone: phone,
    address: addr,
    subtotal: subtotal,
    ongkir: ongkir,
    diskon: diskon,
    total: total,
    voucher: appliedVoucher,
    status: 'Diterima',
    statusSteps: ['Diterima', 'Dimasak', 'Dikirim', 'Selesai']
  };

  // Save to history
  orderHistory.unshift(currentOrder);
  localStorage.setItem('sks_orders', JSON.stringify(orderHistory));

  // Update UI
  document.getElementById('orderIdNum').textContent = oid;
  document.getElementById('barcodeNum').textContent = barcode;
  document.getElementById('t1time').textContent = timeStr;
  document.getElementById('resiDate').textContent = dateStr;

  // Build resi items detail
  const resiItems = document.getElementById('resiItems');
  if (resiItems) {
    resiItems.innerHTML = cart.map(c => `
      <div class="resi-item-row">
        <div class="resi-item-img"><img src="${c.img}" alt="${c.name}"></div>
        <div class="resi-item-info">
          <div class="resi-item-name">${c.name}</div>
          <div class="resi-item-qty">${c.qty} x ${fmt(c.price)}</div>
        </div>
        <div class="resi-item-price">${fmt(c.qty * c.price)}</div>
      </div>
    `).join('');
  }

  // Build resi detail
  const resiDetail = document.getElementById('resiDetail');
  if (resiDetail) {
    resiDetail.innerHTML = `
      <div class="resi-row"><span>Penerima</span><strong>${name}</strong></div>
      <div class="resi-row"><span>Telepon</span><strong>${phone}</strong></div>
      <div class="resi-row"><span>Alamat</span><strong>${addr}</strong></div>
      <div class="resi-row"><span>Subtotal</span><strong>${fmt(subtotal)}</strong></div>
      <div class="resi-row"><span>Ongkir</span><strong>${ongkir === 0 ? 'GRATIS' : fmt(ongkir)}</strong></div>
      ${diskon > 0 ? `<div class="resi-row"><span>Diskon</span><strong>-${fmt(diskon)}</strong></div>` : ''}
      <div class="resi-row resi-total"><span>TOTAL</span><strong>${fmt(total)}</strong></div>
    `;
  }

  // Show tracking
  document.getElementById('checkoutPage').classList.remove('active');
  document.getElementById('trackingOverlay').classList.add('show');

  // Reset resi saved state for new order
  resiSaved = false;
  const backBtn = document.getElementById('trackingBackBtn');
  if (backBtn) backBtn.classList.add('disabled');
  const waBtn = document.getElementById('trackingWaBtn');
  if (waBtn) waBtn.style.display = 'none';

  // Simulate progress
  setTimeout(() => { 
    const t2 = document.getElementById('tStep2'); 
    if (t2) { t2.classList.remove('active'); t2.classList.add('done'); } 
    if (currentOrder) currentOrder.status = 'Dimasak';
  }, 4000);
  setTimeout(() => { 
    const t3 = document.getElementById('tStep3'); 
    if (t3) { t3.classList.add('active'); } 
    if (currentOrder) currentOrder.status = 'Dikirim';
  }, 6000);
  setTimeout(() => { 
    const t3 = document.getElementById('tStep3'); 
    if (t3) { t3.classList.remove('active'); t3.classList.add('done'); } 
    const t4 = document.getElementById('tStep4'); 
    if (t4) t4.classList.add('active'); 
    if (currentOrder) currentOrder.status = 'Selesai';
    // Update history with final status
    orderHistory[0] = currentOrder;
    localStorage.setItem('sks_orders', JSON.stringify(orderHistory));
    updateNotifBadge();
  }, 10000);
}

function copyResi() {
  const oid = document.getElementById('orderIdNum').textContent;
  const barcode = document.getElementById('barcodeNum').textContent;
  const text = `RESI SKS\nOrder: ${oid}\nBarcode: ${barcode}`;
  navigator.clipboard.writeText(text).then(() => showToast('Resi disalin!', 'success'));
}

function downloadResi() {
  resiSaved = true;
  // Mark order as saved
  if (orderHistory.length > 0) {
    orderHistory[0].resiSaved = true;
    localStorage.setItem('sks_orders', JSON.stringify(orderHistory));
  }
  // ✅ FIX: Enable back button — remove disabled class AND override inline styles
  const backBtn = document.getElementById('trackingBackBtn');
  if (backBtn) {
    backBtn.classList.remove('disabled');
    backBtn.style.opacity = '1';
    backBtn.style.pointerEvents = 'auto';
    backBtn.style.cursor = 'pointer';
  }
  // Disable the save button so user knows it's done
  const saveBtn = document.getElementById('simpanResiBtn');
  if (saveBtn) {
    saveBtn.innerHTML = '<i class="bi bi-check-lg"></i> RESI TERSIMPAN';
    saveBtn.style.opacity = '.6';
    saveBtn.style.pointerEvents = 'none';
  }
  // Show WA button after saving resi
  const waBtn = document.getElementById('trackingWaBtn');
  if (waBtn) waBtn.style.display = 'flex';
  showToast('Resi berhasil disimpan! Tombol kembali aktif.', 'success');
}

// ═── NOTIF / RIWAYAT PESANAN ─══
function updateNotifBadge() {
  const badge = document.getElementById('notifBadge');
  const bnavBadge = document.getElementById('bnavNotifBadge');
  const hdrCount = document.getElementById('notifHdrCount');
  const count = orderHistory.length;
  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
    if (count) badge.classList.add('pop');
    setTimeout(() => badge.classList.remove('pop'), 300);
  }
  if (bnavBadge) {
    bnavBadge.textContent = count;
    bnavBadge.style.display = count > 0 ? 'flex' : 'none';
  }
  if (hdrCount) hdrCount.textContent = `${count} pesanan`;
  renderNotifList();
}

function renderNotifList() {
  const list = document.getElementById('notifList');
  const empty = document.getElementById('notifEmpty');
  if (!list) return;

  if (orderHistory.length === 0) {
    list.innerHTML = '';
    if (empty) list.appendChild(empty);
    return;
  }

  if (empty && empty.parentElement === list) list.removeChild(empty);

  list.innerHTML = orderHistory.map((o, i) => {
    const statusIcon = o.status === 'Selesai' ? 'bi-check-circle-fill' : 
                       o.status === 'Dikirim' ? 'bi-bicycle' :
                       o.status === 'Dimasak' ? 'bi-fire' : 'bi-receipt';
    const statusColor = o.status === 'Selesai' ? 'var(--neon3)' : 
                        o.status === 'Dikirim' ? 'var(--neon)' : 'var(--neon2)';
    const statusClass = o.status === 'Selesai' ? 'odm-status-selesai' : 
                        o.status === 'Dikirim' ? 'odm-status-dikirim' : 
                        o.status === 'Dimasak' ? 'odm-status-dimasak' : 'odm-status-diterima';
    // Build item summary
    const itemSummary = o.items.slice(0, 3).map(c => 
      `<div style="display:flex;align-items:center;gap:6px;padding:4px 0;">
        <img src="${c.img}" style="width:28px;height:28px;border-radius:2px;object-fit:cover;border:1px solid var(--border);" alt="">
        <span style="font-family:var(--font-m);font-size:10px;color:var(--text);flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${c.name}</span>
        <span style="font-family:var(--font-m);font-size:9px;color:var(--muted);white-space:nowrap;">x${c.qty}</span>
      </div>`
    ).join('');
    const moreItems = o.items.length > 3 ? `<div style="font-family:var(--font-m);font-size:9px;color:var(--muted);padding:2px 0;">+${o.items.length - 3} item lainnya</div>` : '';

    return `
      <div class="notif-order" onclick="viewOrderDetail(${i})">
        <div class="notif-order-icon" style="color:${statusColor}"><i class="bi ${statusIcon}"></i></div>
        <div class="notif-order-info">
          <div class="notif-order-id">${o.id}</div>
          <div class="notif-order-meta">${o.date} · ${o.items.reduce((s,c)=>s+c.qty,0)} item</div>
          <div class="notif-order-status ${statusClass}" style="color:${statusColor};border-color:${statusColor};background:transparent">${o.status}</div>
          <div style="margin-top:8px;border-top:1px solid var(--border);padding-top:6px;">
            ${itemSummary}
            ${moreItems}
          </div>
        </div>
        <div class="notif-order-total">${fmt(o.total)}</div>
      </div>
    `;
  }).join('');
}

function viewOrderDetail(idx) {
  const o = orderHistory[idx];
  if (!o) return;

  // Close notif drawer first
  closeNotif();

  // Store which order we're viewing
  pendingViewOrderIdx = idx;

  // Build order detail modal content
  const statusClass = o.status === 'Selesai' ? 'odm-status-selesai' : 
                      o.status === 'Dikirim' ? 'odm-status-dikirim' : 
                      o.status === 'Dimasak' ? 'odm-status-dimasak' : 'odm-status-diterima';
  const statusIcon = o.status === 'Selesai' ? 'bi-check-circle-fill' : 
                     o.status === 'Dikirim' ? 'bi-bicycle' :
                     o.status === 'Dimasak' ? 'bi-fire' : 'bi-receipt';

  const title = document.getElementById('odmTitle');
  if (title) title.textContent = o.id;
  const date = document.getElementById('odmDate');
  if (date) date.textContent = o.date;

  const body = document.getElementById('odmBody');
  if (body) {
    body.innerHTML = `
      <div class="odm-section">
        <div class="odm-section-title"><i class="bi bi-signpost-split"></i> STATUS PESANAN</div>
        <div class="odm-status-badge ${statusClass}"><i class="bi ${statusIcon}"></i> ${o.status}</div>
      </div>

      <div class="odm-section">
        <div class="odm-section-title"><i class="bi bi-bag-fill"></i> ITEM YANG DIBELI</div>
        ${o.items.map(c => `
          <div class="odm-item">
            <div class="odm-item-img"><img src="${c.img}" alt="${c.name}"></div>
            <div class="odm-item-info">
              <div class="odm-item-name">${c.name}</div>
              <div class="odm-item-qty">${c.qty} x ${fmt(c.price)}</div>
            </div>
            <div class="odm-item-price">${fmt(c.qty * c.price)}</div>
          </div>
        `).join('')}
      </div>

      <div class="odm-section">
        <div class="odm-section-title"><i class="bi bi-geo-alt-fill"></i> PENGIRIMAN</div>
        <div class="odm-row"><span class="odm-row-label">Penerima</span><span class="odm-row-value">${o.name}</span></div>
        <div class="odm-row"><span class="odm-row-label">Telepon</span><span class="odm-row-value">${o.phone}</span></div>
        <div class="odm-row"><span class="odm-row-label">Alamat</span><span class="odm-row-value">${o.address}</span></div>
      </div>

      <div class="odm-section">
        <div class="odm-section-title"><i class="bi bi-credit-card-fill"></i> PEMBAYARAN</div>
        <div class="odm-row"><span class="odm-row-label">Subtotal</span><span class="odm-row-value">${fmt(o.subtotal)}</span></div>
        <div class="odm-row"><span class="odm-row-label">Ongkir</span><span class="odm-row-value">${o.ongkir === 0 ? 'GRATIS' : fmt(o.ongkir)}</span></div>
        ${o.diskon > 0 ? `<div class="odm-row"><span class="odm-row-label">Diskon</span><span class="odm-row-value" style="color:var(--neon3)">-${fmt(o.diskon)}</span></div>` : ''}
        <div class="odm-row total"><span class="odm-row-label">TOTAL</span><span class="odm-row-value">${fmt(o.total)}</span></div>
      </div>
    `;
  }

  // Open the order detail modal
  setTimeout(() => {
    document.getElementById('orderDetailOverlay').classList.add('open');
    document.getElementById('orderDetailModal').classList.add('open');
    document.body.style.overflow = 'hidden';
  }, 300);
}

function closeOrderDetail() {
  document.getElementById('orderDetailOverlay').classList.remove('open');
  document.getElementById('orderDetailModal').classList.remove('open');
  document.body.style.overflow = '';
}

// ═── WHATSAPP GATE ─══
// WA number (ganti dengan nomor WA bisnis yang benar)
const WA_NUMBER = '6283840420234'; // Ganti dengan nomor WA asli

function openWaChat() {
  // Show WA gate modal
  const gate = document.getElementById('waGateModal');
  if (gate) gate.style.display = 'flex';
}

function confirmWaChat() {
  // Close gate
  const gate = document.getElementById('waGateModal');
  if (gate) gate.style.display = 'none';

  // Build WA message
  const oid = document.getElementById('orderIdNum')?.textContent || '';
  const msg = `Halo Admin👋! Saya ingin mengecek status pesanan saya.\n\nOrder ID: ${oid}\n\nMohon info status pesanan saya👀. Terima kasih🙏!`;
  const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  
  // Open WA in new tab
  window.open(waUrl, '_blank');

  // After opening WA, automatically redirect to tracking/status page
  // (The tracking page is already showing, so we just show a toast)
  showToast('Chat WA terbuka! Status pesanan akan diperbarui.', 'success');
}

function cancelWaGate() {
  const gate = document.getElementById('waGateModal');
  if (gate) gate.style.display = 'none';
}

// WA Chat from order detail modal (notif)
function openOrderWaChat() {
  if (pendingViewOrderIdx < 0 || !orderHistory[pendingViewOrderIdx]) return;
  const o = orderHistory[pendingViewOrderIdx];
  
  // Close detail modal first
  closeOrderDetail();
  
  // Show WA gate on tracking page
  // But since we're not on tracking page, open WA directly
  const msg = `Halo SKS! Saya ingin mengecek status pesanan saya.\n\nOrder ID: ${o.id}\nStatus: ${o.status}\n\nMohon info lebih lanjut. Terima kasih!`;
  const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(waUrl, '_blank');

  // Then show the tracking page with the order
  setTimeout(() => {
    showTrackingForOrder(pendingViewOrderIdx);
  }, 1000);
}

// Show tracking page for a specific order from history
function showTrackingForOrder(idx) {
  const o = orderHistory[idx];
  if (!o) return;

  // Update tracking UI with this order's data
  document.getElementById('orderIdNum').textContent = o.id;
  document.getElementById('barcodeNum').textContent = o.barcode || '';
  document.getElementById('t1time').textContent = o.date.split(' ').pop() || '';
  document.getElementById('resiDate').textContent = o.date;

  // Build resi items
  const resiItems = document.getElementById('resiItems');
  if (resiItems) {
    resiItems.innerHTML = o.items.map(c => `
      <div class="resi-item-row">
        <div class="resi-item-img"><img src="${c.img}" alt="${c.name}"></div>
        <div class="resi-item-info">
          <div class="resi-item-name">${c.name}</div>
          <div class="resi-item-qty">${c.qty} x ${fmt(c.price)}</div>
        </div>
        <div class="resi-item-price">${fmt(c.qty * c.price)}</div>
      </div>
    `).join('');
  }

  // Build resi detail
  const resiDetail = document.getElementById('resiDetail');
  if (resiDetail) {
    resiDetail.innerHTML = `
      <div class="resi-row"><span>Penerima</span><strong>${o.name}</strong></div>
      <div class="resi-row"><span>Telepon</span><strong>${o.phone}</strong></div>
      <div class="resi-row"><span>Alamat</span><strong>${o.address}</strong></div>
      <div class="resi-row"><span>Subtotal</span><strong>${fmt(o.subtotal)}</strong></div>
      <div class="resi-row"><span>Ongkir</span><strong>${o.ongkir === 0 ? 'GRATIS' : fmt(o.ongkir)}</strong></div>
      ${o.diskon > 0 ? `<div class="resi-row"><span>Diskon</span><strong>-${fmt(o.diskon)}</strong></div>` : ''}
      <div class="resi-row resi-total"><span>TOTAL</span><strong>${fmt(o.total)}</strong></div>
    `;
  }

  // Update tracking steps based on status
  const statusMap = { 'Diterima': 1, 'Dimasak': 2, 'Dikirim': 3, 'Selesai': 4 };
  const currentStep = statusMap[o.status] || 1;
  for (let i = 1; i <= 4; i++) {
    const step = document.getElementById(`tStep${i}`);
    if (!step) continue;
    step.classList.remove('done', 'active');
    if (i < currentStep) step.classList.add('done');
    else if (i === currentStep) step.classList.add('active');
  }

  // Enable back button (already saved from history)
  resiSaved = true;
  const backBtn = document.getElementById('trackingBackBtn');
  if (backBtn) {
    backBtn.classList.remove('disabled');
    backBtn.style.opacity = '1';
    backBtn.style.pointerEvents = 'auto';
    backBtn.style.cursor = 'pointer';
  }
  const waBtn = document.getElementById('trackingWaBtn');
  if (waBtn) waBtn.style.display = 'flex';

  // Show tracking overlay
  document.getElementById('mainPage').classList.add('hidden');
  document.getElementById('trackingOverlay').classList.add('show');
  window.scrollTo(0, 0);
}

// ═── TRY GO BACK (must save resi first) ─══
function tryGoBack() {
  if (!resiSaved) {
    showToast('Simpan resi terlebih dahulu!', 'error');
    // Visual shake hint on SIMPAN RESI button
    const saveBtn = document.getElementById('simpanResiBtn');
    if (saveBtn) {
      saveBtn.style.transition = 'transform .08s ease';
      let i = 0;
      const shakes = [6, -6, 5, -5, 3, -3, 0];
      const doShake = () => {
        if (i >= shakes.length) { saveBtn.style.transform = ''; return; }
        saveBtn.style.transform = `translateX(${shakes[i]}px)`;
        i++;
        setTimeout(doShake, 60);
      };
      doShake();
    }
    return;
  }
  // ✅ FIX: resetAll then navigate back to beranda
  resetAll();
}

function openNotif() {
  document.getElementById('notifOverlay').classList.add('open');
  document.getElementById('notifDrawer').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeNotif() {
  document.getElementById('notifOverlay').classList.remove('open');
  document.getElementById('notifDrawer').classList.remove('open');
  document.body.style.overflow = '';
}

function resetAll() {
  cart = [];
  saveCart();
  appliedVoucher = null;
  resiSaved = false;
  updateCartUI();
  renderProducts();
  document.getElementById('trackingOverlay').classList.remove('show');
  document.getElementById('mainPage').classList.remove('hidden');
  document.getElementById('checkoutPage').classList.remove('active');
  // Reset tracking button states
  const backBtn = document.getElementById('trackingBackBtn');
  if (backBtn) {
    backBtn.classList.add('disabled');
    backBtn.style.opacity = '';
    backBtn.style.pointerEvents = '';
    backBtn.style.cursor = '';
  }
  const saveBtn = document.getElementById('simpanResiBtn');
  if (saveBtn) {
    saveBtn.innerHTML = '<i class="bi bi-download"></i> SIMPAN RESI';
    saveBtn.style.opacity = '';
    saveBtn.style.pointerEvents = '';
  }
  const waBtn = document.getElementById('trackingWaBtn');
  if (waBtn) waBtn.style.display = 'none';
  // Close WA gate if open
  const gate = document.getElementById('waGateModal');
  if (gate) gate.style.display = 'none';
  // ✅ FIX: scroll to top / beranda
  window.scrollTo({ top: 0, behavior: 'smooth' });
  const homeSection = document.querySelector('#home');
  if (homeSection) setTimeout(() => homeSection.scrollIntoView({ behavior: 'smooth' }), 100);
  showToast('Pesanan selesai! Selamat menikmati.', 'success');
}

// ═── TOAST ─══
function showToast(msg, type = 'default') {
  const tc = document.getElementById('toastContainer');
  if (!tc) return;
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  const icon = type === 'success' ? 'bi-check-circle-fill' : type === 'error' ? 'bi-x-circle-fill' : 'bi-info-circle-fill';
  t.innerHTML = `<i class="bi ${icon}"></i> ${msg}`;
  tc.appendChild(t);
  setTimeout(() => t.remove(), 2600);
}

// ═── THEME ─══
function toggleTheme() {
  const html = document.documentElement;
  const icon = document.getElementById('themeIcon');
  const isDark = html.getAttribute('data-theme') === 'dark';
  if (isDark) { html.setAttribute('data-theme', 'light'); if (icon) icon.className = 'bi bi-sun-fill'; }
  else { html.setAttribute('data-theme', 'dark'); if (icon) icon.className = 'bi bi-moon-stars'; }
  localStorage.setItem('sks_theme', isDark ? 'light' : 'dark');
}
function initTheme() {
  const saved = localStorage.getItem('sks_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  const icon = document.getElementById('themeIcon');
  if (icon) icon.className = saved === 'dark' ? 'bi bi-moon-stars' : 'bi bi-sun-fill';
}

// ═── MOBILE MENU ─══
function toggleMobMenu() {
  const menu = document.getElementById('mobNavMenu');
  const icon = document.getElementById('hambIcon');
  if (menu) {
    menu.classList.toggle('open');
    if (icon) icon.className = menu.classList.contains('open') ? 'bi bi-x-lg' : 'bi bi-list';
  }
}
function navTo(sel) {
  toggleMobMenu();
  smoothTo(sel);
}

// ═── SCROLL ─══
function smoothTo(sel) { const el = document.querySelector(sel); if (el) el.scrollIntoView({ behavior:'smooth' }); }
function scrollToTop() { window.scrollTo({ top:0, behavior:'smooth' }); }
function initScrollTop() {
  const btn = document.getElementById('scrollTopBtn');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) btn.classList.add('show');
    else btn.classList.remove('show');
  }, { passive: true });
}

// ═── BOTTOM NAV ─══
function bnav(section, btn) {
  document.querySelectorAll('.bnav-item').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  if (section === 'home') smoothTo('#home');
  if (section === 'menu') smoothTo('#menu');
}

// ═── SCROLL ANIMATIONS ─══
function initScrollAnim() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.anim').forEach(el => obs.observe(el));
}

// ═── HERO ANIMATIONS ─══
function startHeroAnimations() {
  const els = document.querySelectorAll('.hero-left > *');
  els.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    setTimeout(() => {
      el.style.transition = 'opacity .6s ease, transform .6s cubic-bezier(.34,1.4,.64,1)';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 100 + i * 120);
  });
}

// ═── INIT AOS & GSAP ─══
function initAnimations() {
  AOS.init({ duration: 800, easing: 'ease-out-cubic', once: true, offset: 60 });
  
  // GSAP Hover & Micro-interactions
  const gsapEls = {
    buttons: '.btn-primary, .btn-outline, .btn-dark',
    cards: '.product-card',
    navBtns: '.nav-btn',
    formInputs: '.feedback-form input, .feedback-form textarea'
  };

  // Buttons spring hover
  gsap.utils.toArray(gsapEls.buttons).forEach(btn => {
    btn.addEventListener('mouseenter', () => gsap.to(btn, { y: -4, scale: 1.02, boxShadow: "var(--shadow-n)", duration: 0.2, ease: "power2.out" }));
    btn.addEventListener('mouseleave', () => gsap.to(btn, { y: 0, scale: 1, boxShadow: "none", duration: 0.2, ease: "power2.out" }));
    btn.addEventListener('mousedown', () => gsap.to(btn, { scale: 0.95, duration: 0.1 }));
    btn.addEventListener('mouseup', () => gsap.to(btn, { scale: 1.03, duration: 0.2, ease: "elastic.out(1, 0.5)" }));
  });

  // Product card lift
  gsap.utils.toArray(gsapEls.cards).forEach(card => {
    card.addEventListener('mouseenter', () => gsap.to(card, { y: -6, boxShadow: "var(--shadow-n)", duration: 0.25, ease: "back.out(1.5)" }));
    card.addEventListener('mouseleave', () => gsap.to(card, { y: 0, boxShadow: "none", duration: 0.25, ease: "power2.out" }));
  });

  // Input focus glow
  gsap.utils.toArray(gsapEls.formInputs).forEach(inp => {
    inp.addEventListener('focus', () => gsap.to(inp, { y: -2, boxShadow: "4px 4px 0 rgba(200,255,0,.15)", duration: 0.2 }));
    inp.addEventListener('blur', () => gsap.to(inp, { y: 0, boxShadow: "none", duration: 0.2 }));
  });
}

// ═── FEEDBACK FORM LOGIC ─══
function initFeedbackForm() {
  const form = document.getElementById('feedbackForm');
  const fileInput = document.getElementById('fb-file');
  const fileWrap = document.getElementById('fbFileWrap');
  const imgPreview = document.getElementById('fbImgPreview');
  const removeBtn = document.getElementById('fbRemoveFile');
  const previewPlaceholder = document.getElementById('fbFilePreview');

  if (!form) return;

  // Drag & Drop
  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(evt => fileWrap.addEventListener(evt, e => { e.preventDefault(); e.stopPropagation(); }));
  fileWrap.addEventListener('dragenter', () => fileWrap.classList.add('dragover'));
  fileWrap.addEventListener('dragover', () => fileWrap.classList.add('dragover'));
  fileWrap.addEventListener('dragleave', () => fileWrap.classList.remove('dragover'));
  fileWrap.addEventListener('drop', e => {
    fileWrap.classList.remove('dragover');
    if (e.dataTransfer.files.length) { fileInput.files = e.dataTransfer.files; handleFile(e.dataTransfer.files[0]); }
  });
  fileInput.addEventListener('change', e => { if (e.target.files.length) handleFile(e.target.files[0]); });

  function handleFile(file) {
    if (!file.type.startsWith('image/')) return showToast('Hanya format gambar yang diterima!', 'error');
    const reader = new FileReader();
    reader.onload = e => {
      imgPreview.src = e.target.result;
      imgPreview.style.display = 'block';
      previewPlaceholder.style.display = 'none';
      removeBtn.style.display = 'flex';
      gsap.fromTo(imgPreview, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.7)" });
    };
    reader.readAsDataURL(file);
  }

  removeBtn.addEventListener('click', () => {
    fileInput.value = ''; imgPreview.style.display = 'none'; imgPreview.src = '';
    previewPlaceholder.style.display = 'flex'; removeBtn.style.display = 'none';
    gsap.to(removeBtn, { scale: 1.3, opacity: 0, duration: 0.15, onComplete: () => removeBtn.style.display = 'none' });
  });

  // Submit
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('fb-name').value.trim();
    const email = document.getElementById('fb-email').value.trim();
    const cat = document.querySelector('input[name="fb-cat"]:checked').value;
    const msg = document.getElementById('fb-msg').value.trim();
    const file = fileInput.files[0];

    if (!name || !email || !msg) return showToast('Lengkapi semua field wajib!', 'error');

    const btn = form.querySelector('.fb-submit-btn');
    const original = btn.innerHTML;
    btn.innerHTML = '<i class="bi bi-arrow-repeat spin"></i> MENGIRIM...';
    btn.disabled = true;

    // Simulasi kirim & buka email client
    const subject = `[SKS Feedback] ${cat === 'bug' ? '🐛 Bug Report' : '💡 Saran'} dari ${name}`;
    const body = `Nama: ${name}\nEmail: ${email}\nKategori: ${cat}\nPesan:\n${msg}\n\n📎 *Silakan lampirkan screenshot secara manual di email yang terbuka.*`;
    const mailto = `mailto:sks@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setTimeout(() => {
      window.location.href = mailto;
      showToast('Form berhasil diproses! Email client akan terbuka.', 'success');
      form.reset(); removeBtn.click();
      btn.innerHTML = original; btn.disabled = false;
      gsap.fromTo(btn, { y: 5, scale: 0.95 }, { y: 0, scale: 1, duration: 0.3, ease: "elastic.out(1, 0.3)" });
    }, 1200);
  });
}

// 🔁 PASTIKAN KEDUA FUNGSI DI INVOKE DI DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  // ... kode existing Anda ...
  initAnimations();
  initFeedbackForm();
});

// ═── UTILS ─══
function fmt(n) { return 'Rp ' + n.toLocaleString('id-ID'); }