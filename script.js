/* ============ E3GENHA — Menu Script ============ */

const translations = {
ar: {
offersEyebrow: "عروض اعجنها",
offersTitle: "اللمة تحلى مع البيتزا 🍕",
offersDescription: "٣ بيتزا: مارجريتا + خضار + سوسيس بسعر مميز.",
offersButton: "شوف العرض",
offerCategory: "العروض",
offerName: "عرض ٣ بيتزا",
offerDescription: "مارجريتا + خضار + سوسيس",
offerPrice: "460 ج",
offerBadge: "عرض مميز",
offerNote: "العرض يشمل ٣ بيتزا: مارجريتا وخضار وسوسيس.",
backToMenu: "المنيو بالكامل",
languageButton: "EN"
},
en: {
offersEyebrow: "E3GENHA OFFERS",
offersTitle: "Pizza tastes better together 🍕",
offersDescription: "3 pizzas: Margherita + Vegetable + Sausage at a special price.",
offersButton: "View Offer",
offerCategory: "Offers",
offerName: "3-Pizza Combo",
offerDescription: "Margherita + Vegetable + Sausage",
offerPrice: "EGP 460",
offerBadge: "SPECIAL OFFER",
offerNote: "Includes 3 pizzas: Margherita, Vegetable, and Sausage.",
backToMenu: "Full Menu",
languageButton: "عربي"
}
};

let currentLanguage = "ar";
let currentCategory = "all";

/*

* مهم:
* احتفظ ببيانات menuData الأصلية وأسعارها كما هي.
* أضف العرض الجديد بصورة مستقلة، ولا تغيّر أسعار الأصناف الموجودة.
  */

const specialOffer = {
id: "offers",
name: {
ar: "عرض ٣ بيتزا",
en: "3-Pizza Combo"
},
description: {
ar: "مارجريتا + خضار + سوسيس",
en: "Margherita + Vegetable + Sausage"
},
price: {
ar: "460 ج",
en: "EGP 460"
}
};

function t(key) {
return translations[currentLanguage]?.[key] ?? key;
}

/* تحديث النصوص المترجمة داخل الصفحة */
function updateTranslations() {
document.querySelectorAll("[data-i18n]").forEach((element) => {
const key = element.dataset.i18n;
if (translations[currentLanguage]?.[key]) {
element.textContent = translations[currentLanguage][key];
}
});

document.documentElement.lang = currentLanguage;
document.documentElement.dir = currentLanguage === "ar" ? "rtl" : "ltr";

const languageButton = document.querySelector(
"#languageToggle, .language-toggle"
);

if (languageButton) {
languageButton.textContent = t("languageButton");
}

renderOffer();
}

/* إنشاء كارت العرض */
function renderOffer() {
const menuContent = document.getElementById("menuContent");
if (!menuContent) return;

let offerCard = document.getElementById("specialOfferCard");

if (!offerCard) {
offerCard = document.createElement("article");
offerCard.id = "specialOfferCard";
offerCard.className = "menu-category offer-card";
offerCard.hidden = true;
offerCard.innerHTML = "<div class="category-title"> <span class="cat-num">★</span> <div class="cat-heading"> <h3 class="offer-heading"></h3> <small class="offer-badge"></small> </div> </div> <div class="items-list offer-items"> <div class="menu-item"> <span class="item-name offer-name"></span> <span class="item-dots"></span> <span class="item-price offer-price"></span> <span class="item-sub offer-description"></span> </div> </div> <p class="offer-note"></p>";
menuContent.prepend(offerCard);
}

offerCard.querySelector(".offer-heading").textContent =
specialOffer.name[currentLanguage];

offerCard.querySelector(".offer-badge").textContent = t("offerBadge");
offerCard.querySelector(".offer-name").textContent =
specialOffer.name[currentLanguage];

offerCard.querySelector(".offer-price").textContent =
specialOffer.price[currentLanguage];

offerCard.querySelector(".offer-description").textContent =
specialOffer.description[currentLanguage];

offerCard.querySelector(".offer-note").textContent = t("offerNote");
}

/*

* إظهار العرض وحده عند اختيار تبويب العروض.
* لا نغيّر بيانات الأصناف الأصلية ولا أسعارها.
  */
  function showOffersOnly() {
  currentCategory = "offers";

document.querySelectorAll(".menu-category").forEach((category) => {
category.hidden = true;
});

const offerCard = document.getElementById("specialOfferCard");
if (offerCard) {
offerCard.hidden = false;
}

updateActiveCategory("offers");
}

/* إظهار المنيو الطبيعي */
function showFullMenu() {
currentCategory = "all";

document.querySelectorAll(".menu-category").forEach((category) => {
if (category.id === "specialOfferCard") {
category.hidden = true;
} else {
category.hidden = false;
}
});

updateActiveCategory("all");
}

/* تحديث شكل التبويب النشط فقط — من غير تحريك الصفحة */
function updateActiveCategory(categoryId) {
document.querySelectorAll(".category-link").forEach((link) => {
const linkCategory =
link.dataset.category || link.dataset.target || link.getAttribute("href");

const isActive =
  categoryId === "all"
    ? linkCategory === "all" ||
      linkCategory === "#menuContent" ||
      link.classList.contains("all-category")
    : linkCategory === categoryId ||
      linkCategory === `#${categoryId}`;

link.classList.toggle("active", isActive);
link.setAttribute("aria-current", isActive ? "true" : "false");

});
}

/* الضغط على بانر العرض */
function setupOffersBanner() {
const button = document.getElementById("offersBannerButton");
if (!button) return;

button.addEventListener("click", (event) => {
event.preventDefault();

showOffersOnly();

const offerCard = document.getElementById("specialOfferCard");
if (offerCard) {
  offerCard.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

});
}

/* تفعيل تبويبات التصنيفات الموجودة */
function setupCategoryNavigation() {
const categoryStrip = document.getElementById("categoryStrip");
if (!categoryStrip) return;

categoryStrip.addEventListener("click", (event) => {
const link = event.target.closest(".category-link");
if (!link) return;

const categoryId =
  link.dataset.category ||
  link.dataset.target ||
  link.getAttribute("href")?.replace("#", "");

if (!categoryId) return;

if (
  categoryId === "offers" ||
  categoryId === "offer" ||
  categoryId === "specialOfferCard"
) {
  event.preventDefault();
  showOffersOnly();
  document.getElementById("specialOfferCard")?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
  return;
}

if (
  categoryId === "all" ||
  categoryId === "menuContent" ||
  link.classList.contains("all-category")
) {
  event.preventDefault();
  showFullMenu();
  return;
}

/*
 * للتصنيفات العادية:
 * اترك التنقل الأصلي كما هو إن كان الكود الأصلي يربطها بالأقسام.
 * لا تستخدم scrollIntoView لتحريك شريط التصنيفات نفسه.
 */

});
}

/* تغيير اللغة */
function setLanguage(language) {
if (language !== "ar" && language !== "en") return;

currentLanguage = language;
updateTranslations();

if (typeof renderCategories === "function") {
renderCategories();
}

if (typeof renderMenu === "function") {
renderMenu();
}

renderOffer();

if (currentCategory === "offers") {
showOffersOnly();
} else {
showFullMenu();
}
}

/* تجهيز زر اللغة */
function setupLanguageToggle() {
const languageButton = document.querySelector(
"#languageToggle, .language-toggle"
);

if (!languageButton) return;

languageButton.addEventListener("click", () => {
setLanguage(currentLanguage === "ar" ? "en" : "ar");
});
}

/* تفعيل الأقسام عند التمرير دون تحريك شريط التصنيفات */
function activate(id) {
document.querySelectorAll(".category-link").forEach((link) => {
const target =
link.dataset.category ||
link.dataset.target ||
link.getAttribute("href")?.replace("#", "");

link.classList.toggle("active", target === id);

});
}

function initSectionSpy() {
const sections = document.querySelectorAll(".menu-category");

if (!sections.length || !("IntersectionObserver" in window)) return;

const observer = new IntersectionObserver(
(entries) => {
if (currentCategory === "offers") return;

  const visibleEntries = entries
    .filter((entry) => entry.isIntersecting)
    .sort(
      (a, b) =>
        b.intersectionRatio - a.intersectionRatio
    );

  if (visibleEntries.length) {
    const id = visibleEntries[0].id;
    if (id && id !== "specialOfferCard") {
      activate(id);
    }
  }
},
{
  root: null,
  rootMargin: "-30% 0px -60% 0px",
  threshold: [0, 0.1, 0.25, 0.5]
}

);

sections.forEach((section) => {
if (section.id !== "specialOfferCard") {
observer.observe(section);
}
});
}

/* تشغيل الوظائف عند تحميل الصفحة */
document.addEventListener("DOMContentLoaded", () => {
updateTranslations();
renderOffer();
setupOffersBanner();
setupCategoryNavigation();
setupLanguageToggle();
initSectionSpy();
});