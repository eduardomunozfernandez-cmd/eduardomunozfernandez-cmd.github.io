/* =========================================================
   Eduardo Muñoz — Portfolio
   Vanilla JS: scroll reveal, sticky header, mobile nav,
   graceful logo fallback. No dependencies.
   ========================================================= */
(function () {
  "use strict";

  /* ---- current year in footer ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- sticky header shadow on scroll ---- */
  var header = document.getElementById("siteHeader");
  var onScroll = function () {
    if (!header) return;
    var y = window.scrollY;
    header.classList.toggle("scrolled", y > 8);
    header.classList.toggle("show-cta", y > 220);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---- mobile nav toggle ---- */
  var toggle = document.getElementById("navToggle");
  var mobileNav = document.getElementById("mobileNav");
  if (toggle && mobileNav) {
    var menuLabel = function (open) {
      var lang = document.documentElement.lang === "es" ? "es" : "en";
      var labels = {
        en: { open: "Open menu", close: "Close menu" },
        es: { open: "Abrir menú", close: "Cerrar menú" },
      };
      return open ? labels[lang].close : labels[lang].open;
    };
    var closeNav = function () {
      mobileNav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", menuLabel(false));
    };
    toggle.addEventListener("click", function () {
      var open = mobileNav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", menuLabel(open));
    });
    mobileNav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeNav);
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 860) closeNav();
    });
  }

  /* ---- language switch: EN / ES ---- */
  var I18N = {
    en: {
      "nav.work": "Work",
      "nav.about": "About",
      "nav.contact": "Contact",
      "nav.contactCta": "Contact me",
      "hero.kicker": "Marketing Data Strategist",
      "hero.phrase": "I turn data into decisions that grow brands.",
      "hero.cta1": "See my work",
      "hero.cta2": "Get in touch",
      "brands.heading": "Brands I've worked with",
      "brands.count": "brands across national and international markets",
      "work.heading": "Selected work",
      "case.solan.desc": "Strategic involvement in one of Spain's leading water brands, part of the Mahou San Miguel group. Work included competitive benchmarking, brand positioning tracking based on DAI rankings, campaign and content coordination around major sponsorships (La Liga, Real Madrid, Atlético de Madrid, Madrid Fashion Week), brand presence and communication around Aitana's 2026 tour, and cross-agency coordination to ensure strategic alignment across all brand touchpoints.",
      "case.legado.name": "Legado Ibérico — El Pozo Group",
      "case.legado.desc": "Ongoing strategic involvement in Legado Ibérico, premium ibérico brand of El Pozo Group. Continuous performance tracking and data-driven decision-making alongside campaign-specific work spanning high-profile activations such as Madrid Fashion Week sponsorship, the Spanish National Football Team sponsorship, and partnerships with key influencers including Javier Castillo, Carmen Lomana and Mario Vaquerizo.",
      "case.haagen.desc": "Full digital presence management across Spain and Mexico since 2023: situational audit of the existing strategy, content and paid media optimization, end-to-end planning and execution of seasonal campaigns (summer and winter) adapted to each market, digital activations to drive traffic to physical stores, and ongoing performance tracking and strategic decision-making throughout the year. Campaign work included collaborations with key public figures such as Jordi Cruz and David Muñoz.",
      "case.manteigaria.desc": "Led the digital strategy from day one for Manteigaria's launch in Spain, building the brand from scratch in a new market. End-to-end ownership of 4 store opening campaigns across Madrid, each with a tailored launch plan and activation strategy. Managed the brand's digital presence at ARCO art fair, and coordinated strategy alignment with Manteigaria's agencies across other international markets.",
      "case.liberty.desc": "Multi-country digital strategy across Spain, Portugal, Italy and Germany, including political and social crisis management within the Venezuelan community in Europe.",
      "case.vezzo.desc": "Direction of Vezzo's digital strategy across its national expansion to over 10 locations.",
      "m.solan.interactions": "total interactions*",
      "m.solan.views": "views*",
      "m.solan.reach": "total annual reach*",
      "case.solan.note": "*Global results across all brand agencies.",
      "m.legado.followers": "new followers on Instagram (2025–2026)",
      "m.legado.reach": "combined reach (IG + FB)",
      "m.legado.impressions": "combined impressions (IG + FB)",
      "m.legado.interactions": "total interactions (IG + FB)",
      "m.legado.q1target": "above impressions target Q1 2026",
      "m.legado.q2target": "above interactions target Q2 2026",
      "m.haagen.igImpressions": "combined IG impressions Spain & Mexico (2025–2026)",
      "m.haagen.igInteractions": "combined IG interactions Spain & Mexico (2025–2026)",
      "m.haagen.tiktokImpressions": "TikTok impressions Spain (2025–2026)",
      "m.haagen.clicksLocator": "clicks to store locator & website Mexico (2026)",
      "m.haagen.directions": "directions to physical stores via Google Ads Summer 2026",
      "m.manteigaria.reviews": "Google reviews across 4 locations (rating 4.8+)",
      "m.manteigaria.igFollowers": "Instagram follower growth (2025–2026)",
      "m.manteigaria.ttFollowers": "TikTok follower growth (2025–2026)",
      "m.manteigaria.igReach": "Instagram reach (2025–2026)",
      "m.manteigaria.igImpressions": "Instagram impressions (2025–2026)",
      "m.manteigaria.ttViews": "TikTok views (2025–2026)",
      "m.liberty.clicks": "clicks (up to)",
      "m.liberty.impressionsMarket": "impressions per market (up to)",
      "m.vezzo.impressions": "impressions",
      "m.vezzo.followers": "followers on Instagram",
      "m.vezzo.impressionsTikTok": "impressions on TikTok",
      "about.heading": "About",
      "about.location": "Madrid, Spain",
      "about.p1": "Marketing Data Strategist with over 3 years of experience leading growth and brand positioning strategies for more than 40 national and international brands at a strategic marketing agency.",
      "about.p2": "Specialized in turning data into decisions: from KPI definition, market audits and marketing strategies to autonomous account management and paid media campaigns.",
      "about.p3": "My approach combines systemic thinking with a business mindset, I identify opportunities where others see metrics, and prioritize actions with real impact on results.",
      "about.p4": "I currently apply AI tools (Claude, Claude Code, Windsor.ai) to automate operational processes such as reporting, information research and lead management.",
      "about.p5": "Based in Madrid and looking to bring this strategic expertise to a brand-side role where strategy, data and business go hand in hand.",
      "about.skillsHeading1": "Marketing & Strategy",
      "about.skillsHeading2": "Data & Tools",
      "about.note": "*This website was built entirely by me using Claude Code.",
      "skill.brandStrategy": "Brand Strategy",
      "skill.kpis": "KPIs",
      "skill.marketAudits": "Market Audits",
      "skill.consumerInsights": "Consumer Insights",
      "skill.campaignPlanning": "Campaign Planning",
      "skill.dataDriven": "Data-driven Decision Making",
      "skill.paidMedia": "Paid Media",
      "skill.multiMarket": "Multi-market Strategy",
      "skill.crisisManagement": "Crisis Management",
      "contact.title1": "Let's work",
      "contact.title2": "together.",
      "contact.lead": "Open to brand-side roles in fashion, sport and retail.",
      "contact.email": "Email",
      "contact.linkedin": "LinkedIn",
      "contact.call": "Call",
      "contact.whatsapp": "WhatsApp",
      "contact.downloadCV": "Download CV",
      __title: "Eduardo Muñoz — Marketing Data Strategist",
      __metaDescription: "Marketing Data Strategist. I turn data into decisions that grow brands.",
      __cvHref: "assets/cv/cv-eduardo-munoz-en.pdf",
      __cvFilename: "Eduardo Munoz - CV.pdf",
    },
    es: {
      "nav.work": "Trabajo",
      "nav.about": "Sobre mí",
      "nav.contact": "Contacto",
      "nav.contactCta": "Contáctame",
      "hero.kicker": "Estratega de Marketing y Datos",
      "hero.phrase": "Convierto datos en decisiones que hacen crecer marcas.",
      "hero.cta1": "Ver mi trabajo",
      "hero.cta2": "Contactar",
      "brands.heading": "Marcas con las que he trabajado",
      "brands.count": "marcas en mercados nacionales e internacionales",
      "work.heading": "Trabajo seleccionado",
      "case.solan.desc": "Implicación estratégica en una de las marcas de agua líderes de España, perteneciente al grupo Mahou San Miguel. El trabajo incluyó benchmarking competitivo, seguimiento del posicionamiento de marca basado en rankings DAI, coordinación de campañas y contenido en torno a grandes patrocinios (LaLiga, Real Madrid, Atlético de Madrid, Madrid Fashion Week), presencia y comunicación de marca en torno a la gira de Aitana en 2026, y coordinación entre agencias para garantizar la alineación estratégica en todos los puntos de contacto de la marca.",
      "case.legado.name": "Legado Ibérico — Grupo El Pozo",
      "case.legado.desc": "Implicación estratégica continua en Legado Ibérico, marca ibérica premium del Grupo El Pozo. Seguimiento constante de resultados y toma de decisiones basada en datos, además de trabajo específico en campañas que abarcan activaciones de alto nivel como el patrocinio de Madrid Fashion Week, el patrocinio de la Selección Española de Fútbol, y colaboraciones con influencers clave como Javier Castillo, Carmen Lomana y Mario Vaquerizo.",
      "case.haagen.desc": "Gestión integral de la presencia digital en España y México desde 2023: auditoría de la estrategia existente, optimización de contenido y paid media, planificación y ejecución integral de campañas estacionales (verano e invierno) adaptadas a cada mercado, activaciones digitales para atraer tráfico a tiendas físicas, y seguimiento continuo de resultados y toma de decisiones estratégicas durante todo el año. El trabajo de campañas incluyó colaboraciones con figuras públicas como Jordi Cruz y David Muñoz.",
      "case.manteigaria.desc": "Lideré la estrategia digital desde el primer día para el lanzamiento de Manteigaria en España, construyendo la marca desde cero en un mercado nuevo. Responsable de principio a fin de 4 campañas de apertura de tienda en Madrid, cada una con un plan de lanzamiento y estrategia de activación a medida. Gestioné la presencia digital de la marca en la feria de arte ARCO, y coordiné la alineación estratégica con las agencias de Manteigaria en otros mercados internacionales.",
      "case.liberty.desc": "Estrategia digital multipaís en España, Portugal, Italia y Alemania, incluyendo gestión de crisis política y social dentro de la comunidad venezolana en Europa.",
      "case.vezzo.desc": "Dirección de la estrategia digital de Vezzo durante su expansión nacional a más de 10 locales.",
      "m.solan.interactions": "interacciones totales*",
      "m.solan.views": "visualizaciones*",
      "m.solan.reach": "alcance anual total*",
      "case.solan.note": "*Resultados globales de todas las agencias de la marca.",
      "m.legado.followers": "nuevos seguidores en Instagram (2025-2026)",
      "m.legado.reach": "alcance combinado (IG + FB)",
      "m.legado.impressions": "impresiones combinadas (IG + FB)",
      "m.legado.interactions": "interacciones totales (IG + FB)",
      "m.legado.q1target": "por encima del objetivo de impresiones Q1 2026",
      "m.legado.q2target": "por encima del objetivo de interacciones Q2 2026",
      "m.haagen.igImpressions": "impresiones combinadas en Instagram España y México (2025-2026)",
      "m.haagen.igInteractions": "interacciones combinadas en Instagram España y México (2025-2026)",
      "m.haagen.tiktokImpressions": "impresiones en TikTok España (2025-2026)",
      "m.haagen.clicksLocator": "clics al localizador de tiendas y web en México (2026)",
      "m.haagen.directions": "cómo llegar a tiendas físicas vía Google Ads, verano 2026",
      "m.manteigaria.reviews": "reseñas de Google en 4 locales (valoración 4,8+)",
      "m.manteigaria.igFollowers": "crecimiento de seguidores en Instagram (2025-2026)",
      "m.manteigaria.ttFollowers": "crecimiento de seguidores en TikTok (2025-2026)",
      "m.manteigaria.igReach": "alcance en Instagram (2025-2026)",
      "m.manteigaria.igImpressions": "impresiones en Instagram (2025-2026)",
      "m.manteigaria.ttViews": "visualizaciones en TikTok (2025-2026)",
      "m.liberty.clicks": "clics (hasta)",
      "m.liberty.impressionsMarket": "impresiones por mercado (hasta)",
      "m.vezzo.impressions": "impresiones",
      "m.vezzo.followers": "seguidores en Instagram",
      "m.vezzo.impressionsTikTok": "impresiones en TikTok",
      "about.heading": "Sobre mí",
      "about.location": "Madrid, España",
      "about.p1": "Estratega de Marketing y Datos con más de 3 años de experiencia liderando estrategias de crecimiento y posicionamiento de marca para más de 40 marcas nacionales e internacionales en una agencia de marketing estratégico.",
      "about.p2": "Especializado en convertir datos en decisiones: desde la definición de KPIs, auditorías de mercado y estrategias de marketing hasta la gestión autónoma de cuentas y campañas de paid media.",
      "about.p3": "Mi enfoque combina el pensamiento sistémico con una mentalidad de negocio: identifico oportunidades donde otros ven métricas, y priorizo acciones con impacto real en los resultados.",
      "about.p4": "Actualmente aplico herramientas de IA (Claude, Claude Code, Windsor.ai) para automatizar procesos operativos como la elaboración de informes, la investigación de información y la gestión de leads.",
      "about.p5": "Con base en Madrid, busco aportar esta experiencia estratégica a un puesto in-house en el que estrategia, datos y negocio vayan de la mano.",
      "about.skillsHeading1": "Marketing y Estrategia",
      "about.skillsHeading2": "Datos y Herramientas",
      "about.note": "*Esta web está hecha íntegramente por mí con Claude Code.",
      "skill.brandStrategy": "Estrategia de Marca",
      "skill.kpis": "KPIs",
      "skill.marketAudits": "Auditorías de Mercado",
      "skill.consumerInsights": "Insights de Consumidor",
      "skill.campaignPlanning": "Planificación de Campañas",
      "skill.dataDriven": "Decisiones Basadas en Datos",
      "skill.paidMedia": "Paid Media",
      "skill.multiMarket": "Estrategia Multi-mercado",
      "skill.crisisManagement": "Gestión de Crisis",
      "contact.title1": "Trabajemos",
      "contact.title2": "juntos.",
      "contact.lead": "Abierto a incorporarme a una marca en moda, deporte o retail.",
      "contact.email": "Email",
      "contact.linkedin": "LinkedIn",
      "contact.call": "Llamar",
      "contact.whatsapp": "WhatsApp",
      "contact.downloadCV": "Descargar CV",
      __title: "Eduardo Muñoz — Estratega de Marketing y Datos",
      __metaDescription: "Estratega de Marketing y Datos. Convierto datos en decisiones que hacen crecer marcas.",
      __cvHref: "assets/cv/cv-eduardo-munoz-es.pdf",
      __cvFilename: "Eduardo Muñoz - CV.pdf",
    },
  };

  var langToggle = document.getElementById("langToggle");
  var metaDescriptionEl = document.querySelector('meta[name="description"]');
  var cvDownloadEl = document.getElementById("cvDownload");

  var setLanguage = function (lang) {
    var dict = I18N[lang] || I18N.en;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });
    if (dict.__title) document.title = dict.__title;
    if (metaDescriptionEl && dict.__metaDescription) {
      metaDescriptionEl.setAttribute("content", dict.__metaDescription);
    }
    if (cvDownloadEl && dict.__cvHref) {
      cvDownloadEl.setAttribute("href", dict.__cvHref);
      cvDownloadEl.setAttribute("download", dict.__cvFilename || "");
    }
    if (langToggle) {
      langToggle.setAttribute("aria-checked", lang === "es" ? "true" : "false");
    }
    try { localStorage.setItem("lang", lang); } catch (e) {}
  };

  if (langToggle) {
    langToggle.addEventListener("click", function () {
      var current = document.documentElement.lang === "es" ? "es" : "en";
      setLanguage(current === "es" ? "en" : "es");
    });
  }

  var savedLang = null;
  try { savedLang = localStorage.getItem("lang"); } catch (e) {}
  setLanguage(savedLang === "es" ? "es" : "en");

  /* ---- scroll reveal via IntersectionObserver ---- */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var revealAll = function () {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  };

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealAll();
  } else {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });

    // Safety net: never leave content invisible if the observer
    // doesn't run (background tab, edge cases). Reveal on-screen
    // items after load, and everything after a short grace period.
    var sweep = function () {
      revealEls.forEach(function (el) {
        var r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) el.classList.add("is-visible");
      });
    };
    window.addEventListener("load", sweep);
    setTimeout(sweep, 400);
    setTimeout(revealAll, 3000);
  }

  /* ---- brand logos: if a PNG is missing, show the text label ---- */
  document.querySelectorAll(".brand img").forEach(function (img) {
    var markMissing = function () { img.classList.add("missing"); };
    img.addEventListener("error", markMissing);
    // already failed before listener attached (cached)
    if (img.complete && img.naturalWidth === 0) markMissing();
  });
})();
