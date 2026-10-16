/**
 * ASTROFRAY LANDING PAGE - ENGINE SCRIPT
 * Ezrok Studios (c) 2026
 * Features: Bilingual i18n (EN/DE), Coming Soon Modal, Legal Modals
 * Unified with in-game terminology (CommonStrings_en / CommonStrings_de)
 */

// ==========================================
// 1. LOCALIZATION DICTIONARIES (EN / DE)
// ==========================================
const translations = {
  en: {
    meta_title: "Astrofray | Neon Space Arena Roguelite by Ezrok Studios",
    meta_desc: "Survive bullet-hell curtains behind fracturing physics asteroids. Astrofray is a fast-paced 2D neon-industrial space roguelite auto-shooter by Ezrok Studios. Dodge, merge weapons, and defeat multi-phase dreadnoughts.",
    nav_features: "Features",
    nav_ships: "Ships",
    nav_presskit: "Press Kit",
    nav_cta: "Join Preview",

    hero_status: "Closed Preview 2 Deployment Inbound",
    hero_slogan: "Survive the Swarm.<br><span class=\"neon-text-cyan\">Use the Debris.</span><br>Merge Your Arsenal.",
    hero_subtitle: "A fast-paced neon-industrial 2D space arena roguelite auto-shooter. Weave through bullet-hell curtains behind fracturing physics asteroids, execute split-second thruster dashes, and dismantle multi-phase dreadnought bosses.",
    hero_cta_discord: "Get Preview Password (Discord)",
    hero_cta_itch: "Closed Preview on itch.io (Soon)",
    hero_cta_github: "View on GitHub",

    usp_tag: "Tactical Combat Depth",
    usp_title: "High-Speed Evasion & Survival Mechanics",
    usp_desc: "Engineered around aggressive positioning, deterministic physics, and high-risk salvage economics.",

    feature_asteroid_title: "Physics Asteroids as Cover",
    feature_asteroid_text: "Drifting asteroid clusters feature authentic 2D rigid-body kinematics. Maneuver behind dense rocks to absorb relentless bullet-hell salvos. Under heavy ballistic pressure, large asteroids fracture into smaller shards—or get punched straight through by penetrating plasma rounds.",
    feature_asteroid_spec1: "Kinetic Deflection",
    feature_asteroid_spec2: "Dynamic Fracture",
    feature_asteroid_spec3: "Plasma Piercing",

    feature_boss_title: "Multi-Phase Dreadnought Bosses",
    feature_boss_text: "Face gargantuan command vessels and alien horrors like the Brood Queen across the 10 campaign waves. Bosses cannot simply be burned down: systematically eliminate perimeter point-defense turrets and shield generators before breaching the exposed reactor core.",
    feature_boss_spec1: "Hierarchical Hitboxes",
    feature_boss_spec2: "Turret Destruction",
    feature_boss_spec3: "Core Overload",

    feature_scrap_title: "The 33% Scrap Tax (Greed vs. Safety)",
    feature_scrap_text: "Defeated enemies detonate into glowing Scrap in the middle of active crossfire. Collect drops actively during combat for 100% value, or play safely and wait for the wave-end auto-vacuum—which deducts a 33% recovery tax (granting only 2/3 value).",
    feature_scrap_spec1: "Realtime Salvage (100%)",
    feature_scrap_spec2: "Greed Incentives",
    feature_scrap_spec3: "Auto-Vacuum (2/3 Value)",

    feature_arsenal_title: "Modular Arsenal & Weapon Merging",
    feature_arsenal_text: "Automated weaponry fires continuously based on predictive targeting. Purchase and merge duplicate weapons in the Upgrade Shop (MK1 → MK2 → MK3) across three distinct weapon families: rapid-fire Machine Guns, chain-disrupting Ion Blasters, and armor-penetrating Plasma Cannons. Lock favorite shop cards to save them across rerolls.",
    feature_arsenal_spec1: "Predictive Autofire",
    feature_arsenal_spec2: "MK1 → MK3 Fusion",
    feature_arsenal_spec3: "Shop Card Locking",

    ships_tag: "Hull Doctrine",
    ships_title: "Operational Ship Classes",
    ships_desc: "Choose a chassis suited to your survival doctrine—from ultra-maneuverable hit-and-run interceptors to heavily armored weapon platforms.",

    ship1_name: "Interceptor",
    ship1_archetype: "Ultra-Agile Skirmisher",
    ship1_desc: "Relies on lightning-fast acceleration and 3 rapid thruster dashes with 0.25s invulnerability frames (i-frames) to thread the needle through dense bullet curtains.",

    ship2_name: "Scout Fighter",
    ship2_archetype: "Balanced Fleet Scout",
    ship2_desc: "Versatile operational profile with balanced thrusters and hardpoints, accommodating flexible combinations of ballistic and energy weaponry with 2 dash charges.",

    ship3_name: "Heavy Fighter",
    ship3_archetype: "Armored Dreadnought",
    ship3_desc: "A 5-mount heavy gunship featuring fortified hull plating with built-in damage reduction and an emergency dash, built to anchor the line against overwhelming swarms.",

    presskit_title: "Creator & Press Factsheet",
    presskit_desc: "Official media assets, factsheets, transparent vessel renders, and logos for content creators.",
    pk_studio: "Developer",
    pk_genre: "Genre",
    pk_genre_val: "2D Roguelite Space Auto-Shooter",
    pk_platforms: "Target Platforms",
    pk_platforms_val: "Windows PC • Runs on Linux & Steam Deck via Proton (Native ports planned)",
    pk_release: "Release Cycle",
    pk_release_val: "Closed Preview 2",

    dl_logos_title: "Game Logo & Icons Pack",
    dl_logos_meta: "PNG (Hi-Res & Alpha Favicon)",
    dl_ships_title: "Transparent Ship Hull Sprites",
    dl_ships_meta: "PNG (Interceptor, Scout, Heavy Fighter)",
    dl_factsheet_title: "Press Factsheet & Description",
    dl_factsheet_meta: "Available with Preview 2 (Soon)",

    footer_desc: "Survive the swarm, master kinetic asteroid cover, and build devastating weapon synergies in deep space. Developed by Ezrok Studios.",
    footer_col_nav: "Navigation",
    footer_col_community: "Community & Channels",
    footer_col_legal: "Legal",
    footer_imprint: "Imprint (Impressum)",
    footer_privacy: "Privacy Policy (Datenschutz)",
    footer_rights: "All rights reserved."
  },

  de: {
    meta_title: "Astrofray | Neon Space Arena Roguelite von Ezrok Studios",
    meta_desc: "Überlebe Bullet-Hell-Salven im Schutz splitternder Physik-Asteroiden. Astrofray ist ein rasanter 2D Neon-Industrial Weltraum-Roguelite-Auto-Shooter von Ezrok Studios. Weiche aus, fusioniere Waffen und bezwinge Dreadnoughts.",
    nav_features: "Features",
    nav_ships: "Schiffe",
    nav_presskit: "Presse-Kit",
    nav_cta: "Zur Preview",

    hero_status: "Bereitstellung von Closed Preview 2 steht bevor",
    hero_slogan: "Überlebe den Schwarm.<br><span class=\"neon-text-cyan\">Nutze die Trümmer.</span><br>Fusioniere dein Arsenal.",
    hero_subtitle: "Ein rasanter Neon-Industrial 2D-Weltraum-Roguelite-Auto-Shooter. Weiche Bullet-Hell-Schleiern im Schutz splitternder Physik-Asteroiden aus, nutze den Triebwerks-Dash für Unverwundbarkeits-Frames und zerlege mehrphasige Dreadnought-Bosse.",
    hero_cta_discord: "Preview-Passwort holen (Discord)",
    hero_cta_itch: "Closed Preview auf itch.io (In Kürze)",
    hero_cta_github: "Auf GitHub ansehen",

    usp_tag: "Taktischer Tiefgang",
    usp_title: "Präzises Dogfighting & Überlebensmechaniken",
    usp_desc: "Entwickelt für High-Speed-Ausweichmanöver, deterministische Physik und lohnende Risikobereitschaft.",

    feature_asteroid_title: "Physik-Asteroiden als Deckung",
    feature_asteroid_text: "Driftende Asteroidenfelder verfügen über echte 2D-Starrkörper-Physik. Nutze schwere Gesteinsbrocken als Deckung, um unerbittliche Bullet-Hell-Salven abzufangen. Bei schwerem Beschuss zersplittern große Asteroiden in kleinere Trümmer – oder werden von Plasma direkt durchschlagen.",
    feature_asteroid_spec1: "Kinetische Ablenkung",
    feature_asteroid_spec2: "Dynamisches Zersplittern",
    feature_asteroid_spec3: "Plasma-Durchschlag",

    feature_boss_title: "Mehrphasige Dreadnought-Bosse",
    feature_boss_text: "Stelle dich kolossalen Kommandoschiffen und Alien-Horden wie der Brood Queen im Verlauf der 10 Kampagnen-Wellen. Bosse können nicht einfach niedergebrannt werden: Zerstöre erst äußere Geschütztürme und Schildgeneratoren, bevor der überhitzte Reaktorkern verwundbar wird.",
    feature_boss_spec1: "Hierarchische Hitboxen",
    feature_boss_spec2: "Turm-Zerstörung",
    feature_boss_spec3: "Kern-Überhitzung",

    feature_scrap_title: "Die 33% Schrott-Steuer (Gier vs. Sicherheit)",
    feature_scrap_text: "Besiegte Feinde hinterlassen leuchtenden Schrott mitten im feindlichen Kreuzfeuer. Sammle Schrott im Kampf für vollen 100% Wert – oder warte auf den Auto-Sauger am Wellenende, der einen Abschlag von 33% einbehält (bringt nur 2/3 Wert).",
    feature_scrap_spec1: "Echtzeit-Bergung (100%)",
    feature_scrap_spec2: "Gier-Belohnung",
    feature_scrap_spec3: "Auto-Sauger (2/3 Wert)",

    feature_arsenal_title: "Modulares Arsenal & Waffenfusion",
    feature_arsenal_text: "Automatische Bordwaffen feuern kontinuierlich mit vorausschauender Zielerfassung. Kaufe und fusioniere gleiche Waffen im Upgrade-Shop (MK1 → MK2 → MK3) aus drei verschiedenen Waffenfamilien: Schnellfeuer-Maschinengewehre, Ionenblaster und panzerbrechende Plasmakanonen. Sperre Shop-Karten, um sie über Rerolls hinweg aufzubewahren.",
    feature_arsenal_spec1: "Prädiktive Zielautomatik",
    feature_arsenal_spec2: "MK1 → MK3 Fusion",
    feature_arsenal_spec3: "Karten-Sperren im Shop",

    ships_tag: "Schiffsklassen",
    ships_title: "Einsatzbereite Schiffshüllen",
    ships_desc: "Wähle das Chassis, das perfekt zu deiner Überlebensstrategie passt – vom extrem wendigen Abfangjäger bis zum schwer gepanzerten Waffen-Dreadnought.",

    ship1_name: "Abfangjäger (Interceptor)",
    ship1_archetype: "Ultra-agiler Skirmisher",
    ship1_desc: "Setzt auf blitzschnelle Beschleunigung und 3 Triebwerks-Dashes mit 0,25s Unverwundbarkeit (i-frames), um haarscharf durch dichte Kugelvorhänge zu gleiten.",

    ship2_name: "Aufklärungsjäger (Scout Fighter)",
    ship2_archetype: "Ausgewogener Flotten-Scout",
    ship2_desc: "Vielseitiges Einsatzprofil mit optimal austarierten Triebwerken und Waffenplätzen für flexible Ballistik- und Energiewaffen-Builds mit 2 Dash-Ladungen.",

    ship3_name: "Schwerer Jäger (Heavy Fighter)",
    ship3_archetype: "Gepanzerte Festung",
    ship3_desc: "Ein schweres 5-Waffen-Schiff mit verstärkter Hülle, integrierter Schadensreduktion und einem Notfall-Dash – gebaut, um gewaltigen Schwärmen standzuhalten.",

    presskit_title: "Creator- & Presse-Factsheet",
    presskit_desc: "Offizielle Medien-Assets, Factsheets, transparente Schiffsgrafiken und Logos für Content-Creator.",
    pk_studio: "Entwickler",
    pk_genre: "Genre",
    pk_genre_val: "2D-Roguelite-Weltraum-Auto-Shooter",
    pk_platforms: "Plattformen",
    pk_platforms_val: "Windows PC • Läuft auf Linux & Steam Deck über Proton (Native Ports geplant)",
    pk_release: "Release-Zyklus",
    pk_release_val: "Closed Preview 2",

    dl_logos_title: "Logo- & Icon-Paket",
    dl_logos_meta: "PNG (Hohe Auflösung & Alpha Favicon)",
    dl_ships_title: "Transparente Schiffsgrafiken",
    dl_ships_meta: "PNG (Interceptor, Scout, Heavy Fighter)",
    dl_factsheet_title: "Presse-Factsheet & Beschreibungen",
    dl_factsheet_meta: "Verfügbar mit Preview 2 (In Kürze)",

    footer_desc: "Überlebe den Schwarm, nutze Asteroiden als kinetische Deckung und schmiede verheerende Waffensynergien in den Weiten des Alls. Entwickelt von Ezrok Studios.",
    footer_col_nav: "Navigation",
    footer_col_community: "Community & Kanäle",
    footer_col_legal: "Rechtliches",
    footer_imprint: "Impressum",
    footer_privacy: "Datenschutzerklärung",
    footer_rights: "Alle Rechte vorbehalten."
  }
};

// ==========================================
// 2. STATE & LANGUAGE HANDLER
// ==========================================
let currentLang = 'en';

function detectPreferredLanguage() {
  // 1. Explicit query parameter override (e.g. ?lang=de or ?lang=en)
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const qLang = urlParams.get('lang');
    if (qLang && translations[qLang.toLowerCase()]) {
      return qLang.toLowerCase();
    }
  } catch (e) {}

  // 2. User's previously chosen language in localStorage
  try {
    const saved = localStorage.getItem('astrofray_lang');
    if (saved && translations[saved]) {
      return saved;
    }
  } catch (e) {}

  // 3. Browser language detection (navigator.languages array, navigator.language, navigator.userLanguage)
  const browserLangs = (navigator.languages && navigator.languages.length > 0)
    ? navigator.languages
    : [navigator.language || navigator.userLanguage || ''];

  for (const l of browserLangs) {
    if (l && typeof l === 'string' && l.toLowerCase().startsWith('de')) {
      return 'de';
    }
  }

  return 'en';
}

function setLanguage(lang, persist = false) {
  if (!translations[lang]) return;
  currentLang = lang;

  if (persist) {
    try {
      localStorage.setItem('astrofray_lang', lang);
    } catch (e) {}
  }

  // Update HTML attribute
  document.documentElement.lang = lang;

  // Update page title & meta description
  document.title = translations[lang].meta_title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && translations[lang].meta_desc) {
    metaDesc.setAttribute('content', translations[lang].meta_desc);
  }

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update button active state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}

// ==========================================
// 3. MODAL HANDLER (PREVIEW, IMPRINT, PRIVACY)
// ==========================================
const legalContent = {
  preview: {
    en: {
      title: "Closed Preview 2 — Coming Soon",
      body: `
        <div style="display: inline-block; background: rgba(255, 106, 0, 0.12); border: 1px solid var(--neon-orange); color: var(--neon-orange); padding: 4px 12px; border-radius: 4px; font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700; letter-spacing: 0.12em; margin-bottom: 16px;">
          DEPLOYMENT IN PREPARATION
        </div>
        <p style="margin-bottom: 16px;">
          Access to <strong>Closed Preview 2</strong> on itch.io and invitations to our official Discord playtesting server will launch soon!
        </p>
        <p style="margin-bottom: 16px;">
          We are currently preparing the upcoming test build and community feedback channels. Check back here soon or keep an eye on our GitHub updates!
        </p>
        <div style="background: rgba(0, 240, 255, 0.05); border-left: 3px solid var(--neon-cyan); padding: 8px 12px; margin-bottom: 20px; font-size: 0.85rem; color: var(--text-dim); text-align: left;">
          <strong style="color: var(--neon-cyan);">Platform Support:</strong> Windows PC standalone. Tested and runs smoothly on Linux desktop and Steam Deck via Steam Proton.
        </div>
        <div class="modal-actions">
          <button type="button" class="btn btn-primary" onclick="closeModal()" style="padding: 10px 24px; font-size: 0.85rem;">
            Got it
          </button>
        </div>
      `
    },
    de: {
      title: "Closed Preview 2 — Demnächst verfügbar",
      body: `
        <div style="display: inline-block; background: rgba(255, 106, 0, 0.12); border: 1px solid var(--neon-orange); color: var(--neon-orange); padding: 4px 12px; border-radius: 4px; font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700; letter-spacing: 0.12em; margin-bottom: 16px;">
          BEREITSTELLUNG IN VORBEREITUNG
        </div>
        <p style="margin-bottom: 16px;">
          Der Zugang zur <strong>Closed Preview 2</strong> auf itch.io sowie Einladungen zu unserem offiziellen Discord-Playtesting-Server starten in Kürze!
        </p>
        <p style="margin-bottom: 16px;">
          Wir bereiten derzeit den neuen Test-Build und die Feedback-Kanäle vor. Schau bald wieder vorbei oder verfolge unsere Updates auf GitHub!
        </p>
        <div style="background: rgba(0, 240, 255, 0.05); border-left: 3px solid var(--neon-cyan); padding: 8px 12px; margin-bottom: 20px; font-size: 0.85rem; color: var(--text-dim); text-align: left;">
          <strong style="color: var(--neon-cyan);">Plattform-Unterstützung:</strong> Windows PC Standalone. Getestet und läuft dank Steam Proton einwandfrei auf Linux und dem Steam Deck.
        </div>
        <div class="modal-actions">
          <button type="button" class="btn btn-primary" onclick="closeModal()" style="padding: 10px 24px; font-size: 0.85rem;">
            Verstanden
          </button>
        </div>
      `
    }
  },
  imprint: {
    en: {
      title: "Legal Notice / Imprint (Impressum)",
      body: `
        <h4>Information according to § 5 ECG / Media Law</h4>
        <p><strong>Ezrok Studios</strong><br>
        Owner: Ronald Korze<br>
        Location: A-4050 Traun, Austria</p>

        <h4>Contact</h4>
        <p>Email: <a href="mailto:ezrokstudios@proton.me">ezrokstudios@proton.me</a><br>
        Web: <a href="https://ezrokstudios.github.io/astrofray" target="_blank" rel="noopener">https://ezrokstudios.github.io/astrofray</a></p>

        <h4>Project Information</h4>
        <p>Astrofray is an independently developed video game by Ezrok Studios. All trademarks and copyrighted materials belong to their respective owners.</p>
      `
    },
    de: {
      title: "Impressum & Offenlegung",
      body: `
        <h4>Angaben gemäß § 5 E-Commerce-Gesetz (ECG) / Mediengesetz</h4>
        <p><strong>Ezrok Studios</strong><br>
        Inhaber: Ronald Korze<br>
        Standort: A-4050 Traun, Österreich</p>

        <h4>Kontakt</h4>
        <p>E-Mail: <a href="mailto:ezrokstudios@proton.me">ezrokstudios@proton.me</a><br>
        Website: <a href="https://ezrokstudios.github.io/astrofray" target="_blank" rel="noopener">https://ezrokstudios.github.io/astrofray</a></p>

        <h4>Hinweis zum Projekt</h4>
        <p>Astrofray ist ein unabhängig entwickeltes Videospiel von Ezrok Studios. Alle Markenzeichen und Urheberrechte liegen bei ihren jeweiligen Inhabern.</p>
      `
    }
  },
  privacy: {
    en: {
      title: "Privacy Policy (Datenschutzerklärung)",
      body: `
        <h4>1. Static Website Privacy</h4>
        <p>This marketing website is hosted statically via GitHub Pages. We do not use tracking cookies, advertising analytics, or personal user profiling on this website.</p>

        <h4>2. Game Telemetry & Stability Diagnostics</h4>
        <p>The Astrofray game client processes anonymous technical telemetry data in the background (such as anonymous hardware specifications, operating system, and crash breadcrumbs) to diagnose game crashes and balance performance across hardware configurations.</p>

        <h4>3. Local Save Data</h4>
        <p>The game stores local progress, options, and achievements locally on your PC (under AppData/LocalLow/Ezrok/Astrofray). No personal data is transmitted.</p>

        <h4>4. Contact for Privacy Inquiries</h4>
        <p>For any data protection inquiries, please contact: <a href="mailto:ezrokstudios@proton.me">ezrokstudios@proton.me</a></p>
      `
    },
    de: {
      title: "Datenschutzerklärung",
      body: `
        <h4>1. Datenschutz dieser Website</h4>
        <p>Diese Website wird statisch über GitHub Pages gehostet. Es werden keine Tracking-Cookies, Werbe-Tracker oder Profiling-Dienste von Drittanbietern auf dieser Website eingesetzt.</p>

        <h4>2. Spiel-Telemetrie & Stabilitätsdiagnose</h4>
        <p>Das Spiel Astrofray verarbeitet im Hintergrund bestimmte technische Telemetriedaten (wie anonymisierte Hardware-Spezifikationen, Betriebssystemversion und Absturzberichte), um Fehler zu beheben und die Stabilität zu sichern.</p>

        <h4>3. Lokale Speicherdaten</h4>
        <p>Das Spiel speichert Fortschritte, Optionen und Errungenschaften ausschließlich lokal auf deinem Computer (unter AppData/LocalLow/Ezrok/Astrofray). Es werden keine persönlichen Daten übermittelt.</p>

        <h4>4. Anfragen zum Datenschutz</h4>
        <p>Bei Fragen zum Datenschutz wende dich bitte an: <a href="mailto:ezrokstudios@proton.me">ezrokstudios@proton.me</a></p>
      `
    }
  }
};

function openModal(type) {
  const modal = document.getElementById('legal-modal');
  const title = document.getElementById('modal-title');
  const body = document.getElementById('modal-body');

  const content = legalContent[type][currentLang] || legalContent[type]['en'];
  title.textContent = content.title;
  body.innerHTML = content.body;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('legal-modal');
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

function initModals() {
  document.querySelectorAll('[data-modal]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const type = trigger.getAttribute('data-modal');
      openModal(type);
    });
  });

  const closeBtn = document.getElementById('modal-close-btn');
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  const modal = document.getElementById('legal-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

// ==========================================
// 4. INITIALIZATION ON DOM READY
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // Determine preferred language: URL parameter, saved choice, or browser German detection
  const initialLang = detectPreferredLanguage();
  setLanguage(initialLang, false);

  // Language button click listeners (explicit choice is persisted)
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang, true);
    });
  });

  // Initialize interactive modals
  initModals();
});
