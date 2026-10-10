/* ============ E3GENHA — Menu & Offers Script ============ */

const menuData = [
 {id:'manakeesh',title:{ar:'المناقيش',en:'Manakeesh'},items:[
  ['منقوشة زعتر','Zaatar Manakeesh',70],['منقوشة زعتر مع بصل وبندورة','Zaatar with Onion & Tomato Manakeesh',null],['منقوشة زعتر مع جبنة','Zaatar with Cheese Manakeesh',null],['منقوشة زعتر مع عسل ونعناع','Zaatar with Honey & Mint Manakeesh',85],['منقوشة ميكس جبنة','Mixed Cheese Manakeesh',100],['منقوشة جبنة حارة','Spicy Cheese Manakeesh',95],['منقوشة جبنة ولبنة','Cheese & Labneh Manakeesh',155],['منقوشة لحم بالعجين','Lahm Bi Ajeen Manakeesh',165],['منقوشة كفتة سبيشيال','Special Kofta Manakeesh',165],['منقوشة سجق','Oriental Sausage Manakeesh',155],['منقوشة سجق مع جبنة','Oriental Sausage & Cheese Manakeesh',165]]},
 {id:'pizza-medium',title:{ar:'البيتزا الإيطالي وسط',en:'Italian Pizza — Medium'},items:[
  ['بيتزا مارغريتا وسط','Margherita Pizza — Medium',145],['بيتزا ميكس جبنة وسط','Mixed Cheese Pizza — Medium',180],['بيتزا خضروات وسط','Vegetable Pizza — Medium',170],['بيتزا بيبروني وسط','Pepperoni Pizza — Medium',190],['بيتزا سلامي وسط','Salami Pizza — Medium',190],['بيتزا تشيكن باربيكيو وسط','BBQ Chicken Pizza — Medium',210]]},
 {id:'pizza-large',title:{ar:'البيتزا الإيطالي كبير',en:'Italian Pizza — Large'},items:[
  ['بيتزا مارغريتا كبير','Margherita Pizza — Large',210],['بيتزا ميكس جبنة كبير','Mixed Cheese Pizza — Large',250],['بيتزا خضروات كبير','Vegetable Pizza — Large',235],['بيتزا بيبروني كبير','Pepperoni Pizza — Large',245],['بيتزا سلامي كبير','Salami Pizza — Large',260],['بيتزا تشيكن باربيكيو كبير','BBQ Chicken Pizza — Large',275]]},
 {id:'pies-medium',title:{ar:'الفطير الشرقي الحادق وسط',en:'Savory Oriental Pies — Medium'},items:[
  ['فطير بسترمة وسط','Pastrami Pie — Medium',205],['فطير بسترمة وكيري وسط','Pastrami & Kiri Pie — Medium',230],['فطير سجق وسط','Oriental Sausage Pie — Medium',null],['فطير سجق وكيري وسط','Oriental Sausage & Kiri Pie — Medium',210],['فطير لحم مفروم وسط','Minced Meat Pie — Medium',220],['فطير شاورما دجاج وسط','Chicken Shawarma Pie — Medium',215],['فطير سوسيس وسط','Hot Dog Pie — Medium',185],['فطير بيبروني وسط','Pepperoni Pie — Medium',205],['فطير تونة وسط','Tuna Pie — Medium',210],['فطير جبنة رومي وسط','Roumy Cheese Pie — Medium',185],['فطير جبنة ومشروم وسط','Cheese & Mushroom Pie — Medium',195],['فطير ميكس أعجنها وسط','Eenenha Mix Pie — Medium',265],['فطير سوبر سوبريم وسط','Super Supreme Pie — Medium',295]]},
 {id:'pies-large',title:{ar:'الفطير الشرقي الحادق كبير',en:'Savory Oriental Pies — Large'},items:[
  ['فطير بسترمة كبير','Pastrami Pie — Large',275],['فطير بسترمة وكيري كبير','Pastrami & Kiri Pie — Large',null],['فطير سجق كبير','Oriental Sausage Pie — Large',280],['فطير سجق وكيري كبير','Oriental Sausage & Kiri Pie — Large',285],['فطير لحم مفروم كبير','Minced Meat Pie — Large',285],['فطير شاورما دجاج كبير','Chicken Shawarma Pie — Large',285],['فطير سوسيس كبير','Hot Dog Pie — Large',245],['فطير بيبروني كبير','Pepperoni Pie — Large',270],['فطير تونة كبير','Tuna Pie — Large',285],['فطير جبنة رومي كبير','Roumy Cheese Pie — Large',230],['فطير جبنة ومشروم كبير','Cheese & Mushroom Pie — Large',250],['فطير ميكس أعجنها كبير','Eenenha Mix Pie — Large',245],['فطير سوبر سوبريم كبير','Super Supreme Pie — Large',380]]},
 {id:'desserts',title:{ar:'الحلويات',en:'Desserts'},items:[
  ['أرز باللبن','Rice Pudding',55],['أرز باللبن مع نوتيلا ومكسرات','Rice Pudding with Nutella & Nuts',null],['فطيرة نوتيلا وفستق وسط','Nutella & Pistachio Pie — Medium',null],['فطيرة نوتيلا وفستق كبير','Nutella & Pistachio Pie — Large',null],['فطيرة نوتيلا وموز وسط','Nutella & Banana Pie — Medium',215],['فطيرة نوتيلا وموز كبير','Nutella & Banana Pie — Large',280],['فطيرة نوتيلا وفراولة وسط','Nutella & Strawberry Pie — Medium',215],['فطيرة نوتيلا وفراولة كبير','Nutella & Strawberry Pie — Large',280],['فطيرة ميكس أعجنها وسط','Eenenha Mix Dessert Pie — Medium',230],['فطيرة ميكس أعجنها كبير','Eenenha Mix Dessert Pie — Large',295]]},
 {id:'addons',title:{ar:'الإضافات',en:'Extra Add-ons'},items:[
  ['إضافة حشو أطراف','Stuffed Crust Add-on',80],['إضافة سجق','Oriental Sausage Add-on',95],['إضافة كيري','Kiri Cheese Add-on',65],['إضافة بسترمة','Pastrami Add-on',75],['إضافة باربيكيو','BBQ Sauce Add-on',50],['إضافة رانش','Ranch Add-on',50],['إضافة فلفل','Pepper Add-on',50],['إضافة مشروم','Mushroom Add-on',55],['إضافة زيتون','Olives Add-on',50],['إضافة ميكس جبنة','Mixed Cheese Add-on',75]]}
];

/* العرض المستقل — لا يغيّر أسعار الأصناف الأصلية */
const specialOffer = {
  id: 'offers',
  name: { ar: 'عرض ٣ بيتزا', en: '3-Pizza Combo' },
  description: { ar: 'مارجريتا + خضار + سوسيس', en: 'Margherita + Vegetable + Sausage' },
  price: { ar: '460 ج', en: 'EGP 460' }
};

const translations = {
  ar: {
    navMenu:'المنيو', navAbout:'عن E3GENHA',
    heroEyebrow:'طازة من الفرن، معمولة بحب', heroTitle:'كل قضمة<br><em>لها حكاية.</em>',
    heroCopy:'اكتشف عالم من المناقيش، البيتزا الإيطالي والفطير الشرقي — اختيارات ترضي كل مزاج.',
    exploreMenu:'استكشف المنيو', heroCaption:'صناعة طعم مايتنسيش',
    ourMenu:'منيو E3GENHA', introTitle:'اختار اللي<br><em>على مزاجك.</em>',
    introCopy:'من أول المناقيش بالزعتر لحد الفطير الحلو، جمعنالك اختياراتنا في مكان واحد. اتصفح الأقسام واكتشف تفاصيل المنيو.',
    theSelection:'اختياراتنا', vatNote:'الأسعار لا تشمل ضريبة القيمة المضافة.',
    priceWarning:'بعض الأسعار في نسخة المنيو الأصلية غير واضحة؛ الأصناف المتأثرة موضّحة بدون سعر لحين التأكيد.',
    closingEyebrow:'من الفرن على طول', closingTitle:'الطعم الحلو<br><em>يستاهل وقتك.</em>',
    closingCopy:'خد وقتك في الاختيار، والمنيو كله قدامك.', backToMenu:'ارجع للمنيو',
    footerNote:'الأسعار بالجنيه المصري ما لم يُذكر غير ذلك.', backTop:'العودة للأعلى ↑',
    price:'جنيه', confirmPrice:'السعر قيد التأكيد',
    offersEyebrow:'عروض اعجنها', offersTitle:'اللمة تحلى مع البيتزا 🍕',
    offersDescription:'٣ بيتزا: مارجريتا + خضار + سوسيس بسعر مميز.', offersButton:'شوف العرض',
    offerCategory:'العروض', offerBadge:'عرض مميز',
    offerNote:'العرض يشمل ٣ بيتزا: مارجريتا وخضار وسوسيس.',
    allCategory:'الكل', languageButton:'EN'
  },
  en: {
    navMenu:'Menu', navAbout:'Our Story',
    heroEyebrow:'Fresh from the oven, made with love', heroTitle:'Every bite<br><em>has a story.</em>',
    heroCopy:'Explore manakeesh, Italian pizza and oriental pies — something for every mood.',
    exploreMenu:'Explore the menu', heroCaption:'A taste worth remembering',
    ourMenu:'The E3GENHA menu', introTitle:'Find your<br><em>kind of craving.</em>',
    introCopy:'From zaatar manakeesh to sweet pies, explore our selection in one place. Browse the categories and discover the menu.',
    theSelection:'Our selection', vatNote:'Prices do not include VAT.',
    priceWarning:'Some prices in the original menu file are unclear; affected items are shown without a price until confirmed.',
    closingEyebrow:'Straight from the oven', closingTitle:'Good taste<br><em>is worth your time.</em>',
    closingCopy:'Take your time exploring — the full menu is right here.', backToMenu:'Back to menu',
    footerNote:'Prices are in EGP unless stated otherwise.', backTop:'Back to top ↑',
    price:'EGP', confirmPrice:'Price to be confirmed',
    offersEyebrow:'E3GENHA OFFERS', offersTitle:'Pizza tastes better together 🍕',
    offersDescription:'3 pizzas: Margherita + Vegetable + Sausage at a special price.', offersButton:'View Offer',
    offerCategory:'Offers', offerBadge:'SPECIAL OFFER',
    offerNote:'Includes 3 pizzas: Margherita, Vegetable, and Sausage.',
    allCategory:'All', languageButton:'عربي'
  }
};

let language = 'ar';
let currentCategory = 'all';
let sectionSpy = null;
const $ = s => document.querySelector(s);
const t = key => translations[language]?.[key] ?? key;

/* ---------- category bar (offers + all + sections) ---------- */
function renderCategories() {
  const strip = $('#categoryStrip');
  const tabs = [
    `<a class="category-link offers-tab" href="#offers" data-category="offers"><span class="cat-num">★</span><b>${t('offerCategory')}</b></a>`,
    `<a class="category-link all-category" href="#menu" data-category="all"><span class="cat-num">✦</span><b>${t('allCategory')}</b></a>`,
    ...menuData.map((cat, i) =>
      `<a class="category-link" href="#${cat.id}" data-category="${cat.id}"><span class="cat-num">${String(i + 1).padStart(2, '0')}</span><b>${cat.title[language]}</b></a>`
    )
  ];
  strip.innerHTML = tabs.join('');
}

/* ---------- menu sections (Menu Simple style markup) ---------- */
function renderMenu() {
  const content = $('#menuContent');
  content.innerHTML = menuData.map((cat, i) => {
    const sub = language === 'ar' ? cat.title.en : cat.title.ar;
    const subDir = language === 'ar' ? 'ltr' : 'rtl';
    const items = cat.items.map(item => {
      const name = language === 'ar' ? item[0] : item[1];
      const subText = language === 'ar' ? item[1] : item[0];
      const subTextDir = language === 'ar' ? 'ltr' : 'rtl';
      const price = item[2] === null
        ? `<span class="item-price unknown">${t('confirmPrice')}</span>`
        : `<span class="item-price">${item[2]} <small>${t('price')}</small></span>`;
      return `<div class="menu-item"><span class="item-name">${name}</span><span class="item-dots" aria-hidden="true"></span>${price}<span class="item-sub" dir="${subTextDir}">${subText}</span></div>`;
    }).join('');
    return `<article class="menu-category" id="${cat.id}"><header class="category-title"><span class="cat-num">${String(i + 1).padStart(2, '0')}</span><div class="cat-heading"><h3>${cat.title[language]}</h3><small dir="${subDir}">${sub}</small></div></header><div class="items-list">${items}</div></article>`;
  }).join('');
}

/* ---------- offer card (independent — original data untouched) ---------- */
function renderOffer() {
  const menuContent = $('#menuContent');
  if (!menuContent) return;

  let offerCard = $('#specialOfferCard');
  if (!offerCard) {
    offerCard = document.createElement('article');
    offerCard.id = 'specialOfferCard';
    offerCard.className = 'menu-category offer-card';
    offerCard.hidden = true;
    offerCard.innerHTML =
      `<header class="category-title"><span class="cat-num">★</span>` +
      `<div class="cat-heading"><h3 class="offer-heading"></h3><small class="offer-badge"></small></div></header>` +
      `<div class="items-list offer-items"><div class="menu-item">` +
      `<span class="item-name offer-name"></span><span class="item-dots" aria-hidden="true"></span>` +
      `<span class="item-price offer-price"></span><span class="item-sub offer-description"></span>` +
      `</div></div><p class="offer-note"></p>`;
    menuContent.prepend(offerCard);
  }

  offerCard.querySelector('.offer-heading').textContent = specialOffer.name[language];
  offerCard.querySelector('.offer-badge').textContent = t('offerBadge');
  offerCard.querySelector('.offer-name').textContent = specialOffer.name[language];
  offerCard.querySelector('.offer-price').textContent = specialOffer.price[language];
  offerCard.querySelector('.offer-description').textContent = specialOffer.description[language];
  offerCard.querySelector('.offer-note').textContent = t('offerNote');
}

/* ---------- view switching ---------- */
function updateActiveCategory(categoryId) {
  document.querySelectorAll('.category-link').forEach(link => {
    const isActive = (link.dataset.category || '') === categoryId;
    link.classList.toggle('active', isActive);
    link.setAttribute('aria-current', isActive ? 'true' : 'false');
  });
}

function showOffersOnly() {
  currentCategory = 'offers';
  document.querySelectorAll('.menu-category').forEach(cat => { cat.hidden = true; });
  const offerCard = $('#specialOfferCard');
  if (offerCard) offerCard.hidden = false;
  updateActiveCategory('offers');
}

function showFullMenu() {
  currentCategory = 'all';
  document.querySelectorAll('.menu-category').forEach(cat => {
    cat.hidden = cat.id === 'specialOfferCard';
  });
  updateActiveCategory('all');
}

/* ---------- navigation ---------- */
function setupCategoryNavigation() {
  const strip = $('#categoryStrip');
  if (!strip) return;

  strip.addEventListener('click', event => {
    const link = event.target.closest('.category-link');
    if (!link) return;
    const categoryId = link.dataset.category || '';

    if (categoryId === 'offers') {
      event.preventDefault();
      showOffersOnly();
      $('#specialOfferCard')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    if (categoryId === 'all') {
      event.preventDefault();
      showFullMenu();
      $('#menu')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    // normal section tab: make sure full menu is visible, then jump to the section
    showFullMenu();
    updateActiveCategory(categoryId);
  });
}

function setupOffersBanner() {
  const button = $('#offersBannerButton');
  if (!button) return;
  button.addEventListener('click', event => {
    event.preventDefault();
    showOffersOnly();
    $('#specialOfferCard')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

/* ---------- scroll spy ---------- */
function activate(id) {
  document.querySelectorAll('.category-link').forEach(link => {
    link.classList.toggle('active', (link.dataset.category || '') === id);
  });
}

function initSectionSpy() {
  if (sectionSpy) sectionSpy.disconnect();
  const sections = [...document.querySelectorAll('.menu-category')].filter(s => s.id !== 'specialOfferCard');
  if (!sections.length || !('IntersectionObserver' in window)) return;

  sectionSpy = new IntersectionObserver(entries => {
    if (currentCategory !== 'all') return;
    const visible = entries.filter(e => e.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
    if (visible.length) activate(visible[0].target.id);
  }, { rootMargin: '-30% 0px -60% 0px', threshold: [0, 0.1, 0.25, 0.5] });

  sections.forEach(sec => sectionSpy.observe(sec));
}

/* ---------- language ---------- */
function updateTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[language]?.[key]) el.innerHTML = translations[language][key]; // innerHTML: titles contain <br><em>
  });
  document.documentElement.lang = language;
  document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  const btn = $('#languageToggle');
  if (btn) btn.textContent = t('languageButton');
}

function setLanguage(lang) {
  if (lang !== 'ar' && lang !== 'en') return;
  language = lang;
  updateTranslations();
  renderCategories();
  renderMenu();
  renderOffer();          // re-attach offer card after menu re-render
  initSectionSpy();       // re-observe the new section elements
  if (currentCategory === 'offers') showOffersOnly(); else showFullMenu();
}

function setupLanguageToggle() {
  const btn = $('#languageToggle');
  if (!btn) return;
  btn.addEventListener('click', () => setLanguage(language === 'ar' ? 'en' : 'ar'));
}

/* ---------- init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  updateTranslations();
  renderCategories();
  renderMenu();
  renderOffer();
  setupCategoryNavigation();
  setupOffersBanner();
  setupLanguageToggle();
  initSectionSpy();
  showFullMenu();
});
