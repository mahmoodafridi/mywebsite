const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector(".primary-nav");
const bookingForm = document.querySelector(".booking-form");
const yearNode = document.querySelector("#year");
const langButtons = document.querySelectorAll(".lang-button");
const filterButtons = document.querySelectorAll(".filter-button");

const translations = {
  ur: {
    title: "آفریدی ریسٹورنٹ | ذائقہ جو یاد رہ جائے",
    metaDescription: "آفریدی ریسٹورنٹ — ذائقہ، روایت اور مہمان نوازی کا خوبصورت امتزاج۔",
    brandName: "آفریدی",
    brandType: "ریسٹورنٹ",
    restaurantName: "ریسٹورنٹ",
    nav: {
      home: "ہوم",
      story: "ہمارا تعارف",
      menu: "مینو",
      ambience: "ماحول",
      contact: "رابطہ",
      bookTable: "میز بک کریں"
    },
    hero: {
      eyebrow: "ذائقہ، روایت اور محبت",
      subtitle: "ہر لقمے میں اپنائیت کا ذائقہ — خالص ذائقوں اور دل سے کی گئی مہمان نوازی کے ساتھ۔",
      menuButton: "مینو دیکھیے",
      storyLink: "ہماری کہانی",
      tagline: "ذائقہ جو\nیاد رہ جائے",
      scroll: "نیچے دیکھیے",
      imageAlt: "آفریدی ریسٹورنٹ کا خوبصورت اندرونی ماحول",
      noteAlt: "آفریدی ریسٹورنٹ کا اندرونی منظر"
    },
    story: {
      kicker: "آفریدی ریسٹورنٹ میں خوش آمدید",
      headingPart1: "اچھا کھانا،",
      headingPart2: "اچھی محفل",
      text: "ہم سمجھتے ہیں کہ کھانا صرف ذائقہ نہیں، بلکہ اپنوں کے ساتھ گزارا ہوا ایک خوبصورت لمحہ ہے۔ آفریدی ریسٹورنٹ میں روایتی پسندیدہ کھانوں کو تازہ اجزا اور محبت سے تیار کیا جاتا ہے۔",
      link: "ہمارا مینو دیکھیے",
      signatureName: "آفریدی",
      signatureTag: "— آپ کے اپنے ذائقے",
      stampTop: "خوش ذائقہ",
      stampBottom: "لمحات"
    },
    menu: {
      kicker: "دل سے تیار کردہ",
      headingPrefix: "آج کا",
      headingSuffix: "مینو",
      subtitle: "روایتی پسند، تازہ اجزا اور ہر پلیٹ میں بھرپور ذائقہ۔",
      disclaimer: "مینو اور قیمتیں نمونہ ہیں — اپنی اصل تفصیلات شامل کریں۔",
      filters: {
        all: "سبھی",
        main: "خاص کھانے",
        grill: "باربی کیو",
        dessert: "میٹھا"
      },
      filterLabel: "مینو کی قسم منتخب کریں"
    },
    ambience: {
      kicker: "خوبصورت ماحول، بہترین ذائقہ",
      headingPart1: "ہر لمحہ",
      headingPart2: "خاص بنائیے",
      text: "خاندان کے ساتھ کھانا ہو یا دوستوں کی محفل، آرام دہ ماحول میں اپنے پسندیدہ ذائقوں سے لطف اٹھائیے۔",
      buttonText: "آئیے، مل بیٹھتے ہیں",
      imageAlt: "گرم روشنیوں اور خوبصورت نشستوں والا ریسٹورنٹ"
    },
    contact: {
      kicker: "ہم آپ کے منتظر ہیں",
      headingPart1: "اپنی اگلی محفل",
      headingPart2: "یہیں سجائیے",
      text: "میز کی بکنگ یا مزید معلومات کے لیے ہمیں پیغام بھیجیے۔",
      whatsapp: "واٹس ایپ پر رابطہ کریں"
    },
    form: {
      nameLabel: "آپ کا نام",
      namePlaceholder: "اپنا نام لکھیے",
      phoneLabel: "فون نمبر",
      phonePlaceholder: "03XX XXXXXXX",
      guestsLabel: "مہمانوں کی تعداد",
      selectPlaceholder: "تعداد منتخب کریں",
      option1: "1 تا 2 افراد",
      option2: "3 تا 5 افراد",
      option3: "6 یا زیادہ",
      submit: "بکنگ کی درخواست بھیجیں",
      note: "درخواست واٹس ایپ میں کھلے گی؛ بھیجنے کے لیے وہاں Send دبائیں۔"
    },
    footer: {
      tagline: "ذائقہ جو یاد رہ جائے۔",
      backTop: "اوپر جائیں ↑"
    },
    menuToggle: {
      open: "مینو کھولیں",
      close: "مینو بند کریں"
    },
    navLabel: "مرکزی نیویگیشن",
    ariaBrand: "آفریدی ریسٹورنٹ، ہوم",
    brandAlt: "آفریدی ریسٹورنٹ کا خوبصورت اندرونی ماحول",
    greeting: "السلام علیکم! میں آفریدی ریسٹورنٹ میں میز بک کروانا چاہتا/چاہتی ہوں۔",
    bookingSuccess: "آپ کی بکنگ کی تفصیل واٹس ایپ میں کھل گئی ہے۔ بھیجنے کے لیے Send دبائیں۔"
  },
  en: {
    title: "Afaridi Restaurant | Flavor you won't forget",
    metaDescription: "Afaridi Restaurant — a beautiful blend of flavor, tradition, and warm hospitality.",
    brandName: "Afaridi",
    brandType: "Restaurant",
    restaurantName: "Restaurant",
    nav: {
      home: "Home",
      story: "Our Story",
      menu: "Menu",
      ambience: "Ambience",
      contact: "Contact",
      bookTable: "Book a table"
    },
    hero: {
      eyebrow: "Flavour, tradition and love",
      subtitle: "Every bite is a story of authentic taste and heartfelt hospitality.",
      menuButton: "View Menu",
      storyLink: "Our Story",
      tagline: "Flavor that\nstays with you",
      scroll: "Scroll down",
      imageAlt: "The elegant interior of Afaridi Restaurant",
      noteAlt: "Interior of Afaridi Restaurant"
    },
    story: {
      kicker: "Welcome to Afaridi Restaurant",
      headingPart1: "Good food,",
      headingPart2: "great gatherings",
      text: "We believe food is more than taste — it is a beautiful moment shared with loved ones. At Afaridi Restaurant, heritage favorites are prepared with fresh ingredients and genuine care.",
      link: "Explore our menu",
      signatureName: "Afaridi",
      signatureTag: "— your taste, your story",
      stampTop: "Good taste",
      stampBottom: "Moments"
    },
    menu: {
      kicker: "Prepared with heart",
      headingPrefix: "Today’s",
      headingSuffix: "Menu",
      subtitle: "Traditional favorites, fresh ingredients, and rich flavor in every plate.",
      disclaimer: "Menu items and prices are sample details — please confirm the final details at the restaurant.",
      filters: {
        all: "All",
        main: "Signature plates",
        grill: "Barbecue",
        dessert: "Desserts"
      },
      filterLabel: "Choose menu category"
    },
    ambience: {
      kicker: "Beautiful atmosphere, perfect taste",
      headingPart1: "Make every moment",
      headingPart2: "memorable",
      text: "Whether it is a family meal or a gathering of friends, enjoy your favorite flavors in a warm and relaxed setting.",
      buttonText: "Let’s meet",
      imageAlt: "A cozy restaurant with warm lights and elegant seating"
    },
    contact: {
      kicker: "We are waiting for you",
      headingPart1: "Plan your next gathering",
      headingPart2: "with us",
      text: "Send us a message for table reservations or more information.",
      whatsapp: "Contact on WhatsApp"
    },
    form: {
      nameLabel: "Your name",
      namePlaceholder: "Enter your name",
      phoneLabel: "Phone number",
      phonePlaceholder: "03XX XXXXXXX",
      guestsLabel: "Number of guests",
      selectPlaceholder: "Select count",
      option1: "1 to 2 guests",
      option2: "3 to 5 guests",
      option3: "6 or more",
      submit: "Send booking request",
      note: "The request will open in WhatsApp; tap Send there to continue."
    },
    footer: {
      tagline: "Flavor worth remembering.",
      backTop: "Back to top ↑"
    },
    menuToggle: {
      open: "Open menu",
      close: "Close menu"
    },
    navLabel: "Main navigation",
    ariaBrand: "Afaridi Restaurant, home",
    brandAlt: "The elegant interior of Afaridi Restaurant",
    greeting: "Assalamu Alaikum! I would like to book a table at Afaridi Restaurant.",
    bookingSuccess: "Your booking details have been opened in WhatsApp. Tap Send to continue."
  },
  ar: {
    title: "مطعم أفريدي | نكهة لا تُنسى",
    metaDescription: "مطعم أفريدي — مزيج جميل من النكهة والتقاليد والضيافة الدافئة.",
    brandName: "أفريدي",
    brandType: "مطعم",
    restaurantName: "مطعم",
    nav: {
      home: "الرئيسية",
      story: "قصتنا",
      menu: "القائمة",
      ambience: "الجو",
      contact: "تواصل",
      bookTable: "احجز طاولة"
    },
    hero: {
      eyebrow: "النكهة، التراث والحب",
      subtitle: "كل قضمة تحمل مذاقًا أصيلًا وضيافة صادقة من القلب.",
      menuButton: "عرض القائمة",
      storyLink: "قصتنا",
      tagline: "نكهة تظل\nمعك",
      scroll: "المزيد",
      imageAlt: "الداخلية الأنيقة لمطعم أفريدي",
      noteAlt: "داخل مطعم أفريدي"
    },
    story: {
      kicker: "مرحبًا بكم في مطعم أفريدي",
      headingPart1: "طعام جيد،",
      headingPart2: "مناسبات رائعة",
      text: "نؤمن أن الطعام ليس مجرد نكهة، بل هو لحظة جميلة تُقضى مع الأحباء. في مطعم أفريدي، تُحضّر الأطباق المفضلة من تراثنا بمكونات طازجة وعناية حقيقية.",
      link: "استكشف قائمتنا",
      signatureName: "أفريدي",
      signatureTag: "— مذاقك، وقصتك",
      stampTop: "نكهة جيدة",
      stampBottom: "لحظات"
    },
    menu: {
      kicker: "معد بعناية",
      headingPrefix: "قائمة",
      headingSuffix: "اليوم",
      subtitle: "مفضلات تقليدية، مكونات طازجة، ونكهات غنية في كل طبق.",
      disclaimer: "العناصر والأسعار نموذجية — يرجى التحقق من التفاصيل النهائية في المطعم.",
      filters: {
        all: "الكل",
        main: "الأطباق المميزة",
        grill: "الشواية",
        dessert: "الحلويات"
      },
      filterLabel: "اختر فئة القائمة"
    },
    ambience: {
      kicker: "جو جميل، مذاق مثالي",
      headingPart1: "اجعل كل لحظة",
      headingPart2: "لا تنسى",
      text: "سواء كان عشاءً عائليًا أو تجمعًا مع الأصدقاء، استمتع بمذاقك المفضل في أجواء دافئة ومريحة.",
      buttonText: "دعنا نجتمع",
      imageAlt: "مطعم دافئ الإضاءة ومريح الجلسات"
    },
    contact: {
      kicker: "نحن في انتظارك",
      headingPart1: "خطط لمناسبتك القادمة",
      headingPart2: "معنا",
      text: "أرسل لنا رسالة لحجز الطاولة أو لمزيد من المعلومات.",
      whatsapp: "تواصل عبر واتساب"
    },
    form: {
      nameLabel: "اسمك",
      namePlaceholder: "اكتب اسمك",
      phoneLabel: "رقم الهاتف",
      phonePlaceholder: "03XX XXXXXXX",
      guestsLabel: "عدد الضيوف",
      selectPlaceholder: "اختر العدد",
      option1: "1 إلى 2 ضيوف",
      option2: "3 إلى 5 ضيوف",
      option3: "6 أو أكثر",
      submit: "إرسال طلب الحجز",
      note: "سيتم فتح الطلب في واتساب؛ اضغط إرسال هناك للمتابعة."
    },
    footer: {
      tagline: "نكهة تذكرها إلى الأبد.",
      backTop: "العودة للأعلى ↑"
    },
    menuToggle: {
      open: "فتح القائمة",
      close: "إغلاق القائمة"
    },
    navLabel: "التنقل الرئيسي",
    ariaBrand: "مطعم أفريدي، الصفحة الرئيسية",
    brandAlt: "الداخلية الأنيقة لمطعم أفريدي",
    greeting: "السلام عليكم! أرغب في حجز طاولة في مطعم أفريدي.",
    bookingSuccess: "تم فتح تفاصيل الحجز في واتساب. اضغط إرسال للمتابعة."
  }
};

const getFieldValue = (dict, path) => path.split(".").reduce((obj, key) => (obj && obj[key] !== undefined ? obj[key] : undefined), dict);

const menuData = {
  ur: [
    { name: "دم پخت کڑاہی", description: "روایتی مصالحوں میں تیار، نرم اور خوشبودار" },
    { name: "چپلی کباب", description: "خاص ترکیب اور تازہ جڑی بوٹیوں کے ساتھ" },
    { name: "مٹن نمکین", description: "سادہ، لذیذ اور روایتی ذائقے سے بھرپور" },
    { name: "سیخ کباب", description: "کوئلے کی آنچ پر کمال مہارت سے تیار" },
    { name: "کابلی پلاؤ", description: "خوشبودار چاول، کشمش اور نرم گوشت" },
    { name: "شاہی کھیر", description: "دودھ، الائچی اور خشک میوہ جات کا میٹھا" }
  ],
  en: [
    { name: "Dum Pukht Karahi", description: "Cooked with classic spices, tender and aromatic" },
    { name: "Chappli Kebab", description: "Prepared with a signature blend and fresh herbs" },
    { name: "Mutton Namkeen", description: "Simple, flavorful and deeply rooted in tradition" },
    { name: "Seekh Kebab", description: "Expertly grilled to perfection over charcoal" },
    { name: "Kabuli Pulao", description: "Fragrant rice, raisins, and tender meat" },
    { name: "Royal Kheer", description: "Milk, cardamom and dried fruits in a sweet finish" }
  ],
  ar: [
    { name: "كاري ديم بوخت", description: "معدّ مع بهارات تقليدية، طريّ ونفّاح" },
    { name: "كباب تشبلي", description: "مقدم بنكهة مميزة مع أعشاب طازجة" },
    { name: "لحم مملح", description: "بسيط، لذيذ، ومليء بالنكهة التقليدية" },
    { name: "كباب سيخ", description: "محضر بدقة على نار الفحم" },
    { name: "كبلي پلاؤ", description: "أرز معطر، زبيب، ولحم طري" },
    { name: "كهير ملكي", description: "حليب، هيل، وفواكه مجففة بنكهة حلوة" }
  ]
};

function setLanguage(lang) {
  const dictionary = translations[lang] || translations.ur;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "en" ? "ltr" : "rtl";

  document.title = dictionary.title;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) metaDescription.setAttribute("content", dictionary.metaDescription);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = getFieldValue(dictionary, element.dataset.i18n);
    if (typeof value === "string") {
      element.textContent = value;
    }
  });

  document.querySelector(".brand").setAttribute("aria-label", dictionary.ariaBrand);
  document.querySelector(".hero-image").setAttribute("aria-label", dictionary.hero.imageAlt);
  const introImage = document.querySelector(".intro-image");
  if (introImage) introImage.setAttribute("alt", dictionary.hero.noteAlt);
  const ambienceImage = document.querySelector(".ambience-photo img");
  if (ambienceImage) ambienceImage.setAttribute("alt", dictionary.ambience.imageAlt);

  const navLabel = dictionary.navLabel;
  primaryNav.setAttribute("aria-label", navLabel);
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-label", dictionary.menuToggle[isOpen ? "close" : "open"]);

  const formName = bookingForm.querySelector('input[name="name"]');
  const formPhone = bookingForm.querySelector('input[name="phone"]');
  const formSelect = bookingForm.querySelector('select[name="guests"]');
  const selectOptions = formSelect.querySelectorAll("option");

  formName.placeholder = dictionary.form.namePlaceholder;
  formPhone.placeholder = dictionary.form.phonePlaceholder;
  formSelect.options[0].textContent = dictionary.form.selectPlaceholder;
  selectOptions[1].textContent = dictionary.form.option1;
  selectOptions[2].textContent = dictionary.form.option2;
  selectOptions[3].textContent = dictionary.form.option3;

  document.querySelectorAll(".filter-button").forEach((button) => {
    const filterKey = button.dataset.filter;
    button.textContent = dictionary.menu.filters[filterKey];
    button.setAttribute("aria-label", dictionary.menu.filters[filterKey]);
  });

  document.querySelector(".menu-filters").setAttribute("aria-label", dictionary.menu.filterLabel);

  const menuCards = document.querySelectorAll(".menu-card");
  menuCards.forEach((card, index) => {
    const item = menuData[lang][index];
    card.querySelector(".dish-info h3").textContent = item.name;
    card.querySelector(".dish-info p").textContent = item.description;
  });

  const bookingMessage = dictionary.greeting;
  const formMessage = bookingForm.querySelector(".form-message");
  const formNote = bookingForm.querySelector(".form-note");
  if (formNote) formNote.textContent = dictionary.form.note;
  if (formMessage && formMessage.dataset.message) {
    formMessage.textContent = formMessage.dataset.message;
  }

  langButtons.forEach((button) => {
    const active = button.dataset.lang === lang;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  localStorage.setItem("afaridi-language", lang);
}

function setupMenuToggle() {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    const nextOpen = !isOpen;
    menuToggle.setAttribute("aria-expanded", String(nextOpen));
    menuToggle.setAttribute("aria-label", translations[localStorage.getItem("afaridi-language") || "ur"].menuToggle[nextOpen ? "close" : "open"]);
    primaryNav.classList.toggle("is-open", nextOpen);
  });

  primaryNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      primaryNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", translations[localStorage.getItem("afaridi-language") || "ur"].menuToggle.open);
    }
  });
}

function setupFilters() {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      filterButtons.forEach((item) => {
        const active = item === button;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      document.querySelectorAll(".menu-card").forEach((card) => {
        card.hidden = filter !== "all" && card.dataset.category !== filter;
      });
    });
  });
}

function setupBookingForm() {
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!(form instanceof HTMLFormElement) || !form.reportValidity()) return;

    const currentLanguage = localStorage.getItem("afaridi-language") || "ur";
    const formData = new FormData(form);
    const message = [
      translations[currentLanguage].greeting,
      `Name: ${formData.get("name")}`,
      `Phone: ${formData.get("phone")}`,
      `Guests: ${formData.get("guests")}`
    ].join("\n");

    const whatsappUrl = `https://wa.me/923209780148?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    const messageNode = form.querySelector(".form-message");
    messageNode.textContent = translations[currentLanguage].bookingSuccess;
    messageNode.dataset.message = translations[currentLanguage].bookingSuccess;
    form.reset();
  });
}

function initialiseLanguageButtons() {
  langButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.lang);
    });
  });
}

yearNode.textContent = String(new Date().getFullYear());
setupMenuToggle();
setupFilters();
setupBookingForm();
initialiseLanguageButtons();
setLanguage(localStorage.getItem("afaridi-language") || "ur");
