/**
 * ASTROFRAY LANDING PAGE - ENGINE SCRIPT
 * Ezrok Studios (c) 2026
 * Features: Bilingual i18n (EN/DE), Preview & Legal Modals
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
    nav_updates: "Updates",
    nav_cta: "Join Preview",

    hero_status: "Closed Preview Live",
    hero_slogan: "Survive the Swarm.<br><span class=\"neon-text-cyan\">Use the Debris.</span><br>Merge Your Arsenal.",
    hero_subtitle: "A fast-paced neon-industrial 2D space arena roguelite auto-shooter. Weave through bullet-hell curtains behind fracturing physics asteroids, execute split-second thruster dashes, and dismantle multi-phase dreadnought bosses across 10-wave runs.",
    hero_cta_itch: "Get Preview on itch.io",
    hero_cta_discord: "Get Password on Discord",
    hero_password_note: "<span class=\"neon-text-orange\">🔒 Password Required:</span> The itch.io preview is password-protected. Join our <a href=\"https://discord.gg/FEmXQx8Tuh\" target=\"_blank\" rel=\"noopener\">Discord</a> to get instant access.",
    hero_support_note: "🎮 Full Gamepad Support (Xbox, PlayStation, Switch) & Keyboard",

    usp_tag: "Tactical Combat Depth",
    usp_title: "High-Speed Evasion & Tactical Survival",
    usp_desc: "Engineered around aggressive positioning, deterministic physics, and high-risk salvage economics. Direct 360° thruster evasion with full controller and keyboard support.",

    feature_asteroid_title: "Physics Asteroids as Dynamic Cover",
    feature_asteroid_text: "Drifting asteroid clusters feature authentic 2D rigid-body kinematics. Maneuver behind dense rocks to absorb relentless bullet-hell salvos. Under heavy ballistic pressure, large asteroids fracture into smaller shards—or get punched straight through by penetrating plasma rounds.",
    feature_asteroid_spec1: "Kinetic Deflection",
    feature_asteroid_spec2: "Dynamic Fracture",
    feature_asteroid_spec3: "Plasma Piercing",

    feature_boss_title: "Multi-Phase Dreadnought Bosses",
    feature_boss_text: "Face gargantuan command vessels and alien horrors like the Brood Queen across 10 escalating campaign waves. Bosses cannot simply be burned down: systematically eliminate perimeter point-defense turrets before breaching the exposed reactor core.",
    feature_boss_spec1: "Hierarchical Hitboxes",
    feature_boss_spec2: "Turret Destruction",
    feature_boss_spec3: "Core Overload",

    feature_scrap_title: "The 33% Scrap Tax (Greed vs. Safety)",
    feature_scrap_text: "Defeated enemies detonate into glowing Scrap in the heart of the crossfire. Scoop up drops actively during combat for full 100% value, or play it safe and wait for the wave-end auto-vacuum—which claims a 33% salvage tax, granting only 2/3 value.",
    feature_scrap_spec1: "Realtime Salvage (100%)",
    feature_scrap_spec2: "High-Risk Incentive",
    feature_scrap_spec3: "Auto-Vacuum (2/3 Value)",

    feature_arsenal_title: "Modular Arsenal & Weapon Merging",
    feature_arsenal_text: "Automated weaponry fires continuously with predictive targeting. Purchase and merge duplicate weapons in the Upgrade Shop (MK1 → MK2 → MK3) across three distinct weapon families: high-DPS Machine Guns, versatile Ion Blasters, and asteroid-piercing Plasma Cannons. Lock favorite shop cards to save them across rerolls.",
    feature_arsenal_spec1: "Predictive Autofire",
    feature_arsenal_spec2: "MK1 → MK3 Fusion",
    feature_arsenal_spec3: "Shop Card Locking",

    ships_tag: "Hull Doctrine",
    ships_title: "Operational Ship Classes",
    ships_desc: "Choose a chassis suited to your survival doctrine—from ultra-maneuverable hit-and-run interceptors to heavily armored weapon platforms.",

    ship1_name: "Interceptor",
    ship1_archetype: "Ultra-Agile Skirmisher",
    ship1_desc: "Relies on blistering acceleration and 3 rapid thruster dashes with 0.25s invulnerability frames (i-frames) to thread the needle through dense bullet curtains.",

    ship2_name: "Scout Fighter",
    ship2_archetype: "Tactical Fleet All-Rounder",
    ship2_desc: "Versatile operational profile with balanced thrusters and 3 hardpoints, accommodating flexible combinations of ballistic and energy weaponry with 2 dash charges.",

    ship3_name: "Heavy Fighter",
    ship3_archetype: "Armored Gunship",
    ship3_desc: "A 5-mount heavy gunship featuring fortified hull plating with built-in damage reduction and an emergency dash, built to anchor the line against overwhelming swarms.",

    feed_tag: "Devlog & Changelog",
    feed_title: "Latest Updates & Patch Notes",
    feed_desc: "Track active gameplay calibrations, visual overhauls, and upcoming playtest milestones.",
    feed_subscribe_btn: "Subscribe to Updates",
    feed_t1_title: "Major 0.4.0 Overhaul: Dashing, Asteroids, Scrap Economy & New Bosses",
    feed_t1_desc: "Tactical thruster dashing, dynamic physics asteroids, scrap-based armory purchasing, fresh enemies and bosses, new music, and full combat rebalancing. (Note: Progress reset for v0.3 testers).",
    feed_t2_title: "Overhauled Boss Explosions & Target Tracking",
    feed_t2_desc: "Major combat visual overhaul making boss takedowns significantly punchier, plus dynamic off-screen enemy indicators and frame-rate optimizations for dense bullet curtains.",
    toast_title: "Stay in Orbit!",
    toast_desc: "Subscribe to patch notes & game updates.",
    toast_btn: "Subscribe",

    footer_desc: "Survive the swarm, master kinetic asteroid cover, and forge devastating weapon synergies in deep space. Developed by Ezrok Studios.",
    footer_col_nav: "Navigation",
    footer_col_community: "Community & Channels",
    footer_col_legal: "Legal",
    footer_discord: "Discord Community",
    footer_itch: "itch.io Preview (Password on Discord)",
    footer_imprint: "Imprint (Impressum)",
    footer_privacy: "Privacy Policy (Datenschutz)",
    footer_rights: "All rights reserved.",
    footer_developed_by: "DEVELOPED BY",
    footer_feed: "Info Feed (RSS)"
  },

  de: {
    meta_title: "Astrofray | Neon Space Arena Roguelite von Ezrok Studios",
    meta_desc: "Überlebe Bullet-Hell-Salven im Schutz splitternder Physik-Asteroiden. Astrofray ist ein rasanter 2D Neon-Industrial Weltraum-Roguelite-Auto-Shooter von Ezrok Studios. Weiche aus, fusioniere Waffen und bezwinge Dreadnoughts.",
    nav_features: "Features",
    nav_ships: "Schiffe",
    nav_updates: "Updates",
    nav_cta: "Zur Preview",

    hero_status: "Closed Preview Live",
    hero_slogan: "Überlebe den Schwarm.<br><span class=\"neon-text-cyan\">Nutze die Trümmer.</span><br>Fusioniere dein Arsenal.",
    hero_subtitle: "Ein rasanter Neon-Industrial 2D-Weltraum-Roguelite-Auto-Shooter. Gleite im Schutz splitternder Physik-Asteroiden durch dichte Bullet-Hell-Schleier, nutze den Triebwerks-Dash für lebensrettende Unverwundbarkeits-Frames und zerlege mehrphasige Dreadnought-Bosse in 10-Wellen-Runs.",
    hero_cta_itch: "Preview auf itch.io holen",
    hero_cta_discord: "Passwort auf Discord holen",
    hero_password_note: "<span class=\"neon-text-orange\">🔒 Passwort erforderlich:</span> Die itch.io-Preview ist passwortgeschützt. Tritt unserem <a href=\"https://discord.gg/FEmXQx8Tuh\" target=\"_blank\" rel=\"noopener\">Discord</a> bei, um sofortigen Zugriff zu erhalten.",
    hero_support_note: "🎮 Volle Gamepad-Unterstützung (Xbox, PlayStation, Switch) & Tastatur",

    usp_tag: "Taktischer Tiefgang",
    usp_title: "Rasantes Dogfighting & Taktisches Überleben",
    usp_desc: "Entwickelt für aggressive Positionierung, deterministische Physik und risikoreiche Bergungsmanöver. Direkte 360°-Schubsteuerung mit voller Controller- und Tastaturunterstützung.",

    feature_asteroid_title: "Physik-Asteroiden als kinetische Deckung",
    feature_asteroid_text: "Driftende Asteroidenfelder verfügen über echte 2D-Starrkörper-Physik. Nutze schwere Gesteinsbrocken als Deckung, um unerbittliche Bullet-Hell-Salven abzufangen. Bei schwerem Beschuss zersplittern große Asteroiden in kleinere Trümmer – oder werden von Plasma direkt durchschlagen.",
    feature_asteroid_spec1: "Kinetische Ablenkung",
    feature_asteroid_spec2: "Dynamisches Zersplittern",
    feature_asteroid_spec3: "Plasma-Durchschlag",

    feature_boss_title: "Mehrphasige Dreadnought-Bosse",
    feature_boss_text: "Stelle dich kolossalen Kommandoschiffen und Alien-Horrors wie der Brood Queen im Verlauf der 10 Kampagnen-Wellen. Bosse lassen sich nicht einfach niederbrennen: Zerstöre zuerst die äußeren Geschütztürme, bevor der freiliegende Reaktorkern verwundbar wird.",
    feature_boss_spec1: "Hierarchische Hitboxen",
    feature_boss_spec2: "Turm-Zerstörung",
    feature_boss_spec3: "Kern-Überhitzung",

    feature_scrap_title: "Die 33% Schrott-Steuer (Gier vs. Sicherheit)",
    feature_scrap_text: "Besiegte Feinde detonieren mitten im Kreuzfeuer zu leuchtendem Schrott. Sammle Schrott aktiv im Gefecht für den vollen 100%-Wert – oder gehe auf Nummer sicher und warte auf den Auto-Sauger am Wellenende, der einen Abschlag von 33% einbehält (bringt nur 2/3 Wert).",
    feature_scrap_spec1: "Echtzeit-Bergung (100%)",
    feature_scrap_spec2: "High-Risk-Belohnung",
    feature_scrap_spec3: "Auto-Sauger (2/3 Wert)",

    feature_arsenal_title: "Modulares Arsenal & Waffenfusion",
    feature_arsenal_text: "Bordwaffen feuern vollautomatisch mit prädiktiver Zielerfassung. Kaufe und fusioniere gleiche Waffen im Upgrade-Shop (MK1 → MK2 → MK3) aus drei eigenständigen Waffenfamilien: durchschlagskräftige Maschinengewehre, vielseitige Ionenblaster und asteroidenbrechende Plasmakanonen. Sperre wichtige Shop-Karten, um sie über Rerolls hinweg zu sichern.",
    feature_arsenal_spec1: "Prädiktive Zielautomatik",
    feature_arsenal_spec2: "MK1 → MK3 Fusion",
    feature_arsenal_spec3: "Shop-Karten sperren",

    ships_tag: "Schiffsklassen",
    ships_title: "Einsatzbereite Schiffshüllen",
    ships_desc: "Wähle ein Schiff passend zu deiner Taktik – vom ultra-wendigen Skirmisher bis zur schwer gepanzerten Waffenplattform.",

    ship1_name: "Abfangjäger (Interceptor)",
    ship1_archetype: "Ultra-agiler Skirmisher",
    ship1_desc: "Setzt auf blitzschnelle Beschleunigung und 3 Triebwerks-Dashes mit 0,25s Unverwundbarkeit (i-frames), um haarscharf durch dichte Kugelvorhänge zu gleiten.",

    ship2_name: "Aufklärungsjäger (Scout Fighter)",
    ship2_archetype: "Taktischer Allrounder",
    ship2_desc: "Vielseitiges Einsatzprofil mit optimal abgestimmten Triebwerken und 3 Waffenplätzen für flexible Ballistik- und Energiewaffen-Builds mit 2 Dash-Ladungen.",

    ship3_name: "Schwerer Jäger (Heavy Fighter)",
    ship3_archetype: "Gepanzerte Waffenplattform",
    ship3_desc: "Ein schweres 5-Waffen-Kriegsschiff mit verstärkter Hülle, integrierter Schadensreduktion und einem Notfall-Dash – gebaut, um gewaltigen Schwärmen standzuhalten.",

    feed_tag: "Devlog & Changelog",
    feed_title: "Neueste Updates & Patchnotes",
    feed_desc: "Verfolge aktive Gameplay-Feinabstimmungen, Grafik-Updates und anstehende Playtest-Meilensteine.",
    feed_subscribe_btn: "Updates abonnieren",
    feed_t1_title: "Großes 0.4.0 Update: Dashing, Asteroiden, Schrott-Wirtschaft & Neue Bosse",
    feed_t1_desc: "Taktischer Ausweich-Dash, zerberstende Asteroiden als Deckung, neues Schrott-Kaufsystem, neue Feinde und Bosse, neuer Soundtrack und Effekte sowie Performance-Feinschliff. (Hinweis: Fortschritt für v0.3-Tester zurückgesetzt).",
    feed_t2_title: "Überarbeitete Boss-Explosionen & Zielmarkierungen",
    feed_t2_desc: "Großes visuelles Kampf-Upgrade mit wuchtigen Boss-Abschüssen, dynamischen Off-Screen-Feindindikatoren und Performance-Optimierungen für dichte Kugelvorhänge.",
    toast_title: "Auf dem Laufenden bleiben!",
    toast_desc: "Abonniere Patchnotes & Spiel-Updates.",
    toast_btn: "Abonnieren",

    footer_desc: "Überlebe den Schwarm, nutze Asteroiden als kinetische Deckung und schmiede verheerende Waffensynergien im Weltraum. Entwickelt von Ezrok Studios.",
    footer_col_nav: "Navigation",
    footer_col_community: "Community & Kanäle",
    footer_col_legal: "Rechtliches",
    footer_discord: "Discord-Community",
    footer_itch: "itch.io-Preview (Passwort auf Discord)",
    footer_imprint: "Impressum",
    footer_privacy: "Datenschutzerklärung",
    footer_rights: "Alle Rechte vorbehalten.",
    footer_developed_by: "ENTWICKELT VON",
    footer_feed: "Info-Feed (RSS)"
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
      title: "Closed Preview Available",
      body: `
        <div style="display: inline-block; background: rgba(0, 240, 255, 0.12); border: 1px solid var(--neon-cyan); color: var(--neon-cyan); padding: 4px 12px; border-radius: 4px; font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700; letter-spacing: 0.12em; margin-bottom: 16px;">
          AVAILABLE NOW (PASSWORD PROTECTED)
        </div>
        <p style="margin-bottom: 16px;">
          The <strong>Closed Preview</strong> build of Astrofray is now live on itch.io!
        </p>
        <p style="margin-bottom: 16px;">
          To unlock the build download on itch.io, you will need the access password. Fetch your password immediately by joining our official <a href="https://discord.gg/FEmXQx8Tuh" target="_blank" rel="noopener" style="color: var(--neon-cyan); text-decoration: underline;">Discord Community</a>.
        </p>
        <div style="background: rgba(0, 240, 255, 0.05); border-left: 3px solid var(--neon-cyan); padding: 8px 12px; margin-bottom: 20px; font-size: 0.85rem; color: var(--text-dim); text-align: left;">
          <strong style="color: var(--neon-cyan);">Platform Support:</strong> Windows PC standalone. Tested and runs smoothly on Linux desktop and Steam Deck via Steam Proton.
        </div>
        <div class="modal-actions" style="display: flex; gap: 12px; flex-wrap: wrap; justify-content: center;">
          <a href="https://ezrokstudios.itch.io/astrofray-preview" target="_blank" rel="noopener" class="btn btn-primary" style="padding: 10px 20px; font-size: 0.85rem;">
            Get Preview on itch.io
          </a>
          <a href="https://discord.gg/FEmXQx8Tuh" target="_blank" rel="noopener" class="btn btn-secondary" style="padding: 10px 20px; font-size: 0.85rem;">
            Get Password on Discord
          </a>
        </div>
      `
    },
    de: {
      title: "Closed Preview verfügbar",
      body: `
        <div style="display: inline-block; background: rgba(0, 240, 255, 0.12); border: 1px solid var(--neon-cyan); color: var(--neon-cyan); padding: 4px 12px; border-radius: 4px; font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700; letter-spacing: 0.12em; margin-bottom: 16px;">
          JETZT VERFÜGBAR (PASSWORTGESCHÜTZT)
        </div>
        <p style="margin-bottom: 16px;">
          Der <strong>Closed Preview</strong> Build von Astrofray ist ab sofort auf itch.io verfügbar!
        </p>
        <p style="margin-bottom: 16px;">
          Um den Download auf itch.io freizuschalten, benötigst du das Zugangspasswort. Du erhältst dein Passwort direkt nach dem Beitritt in unserer offiziellen <a href="https://discord.gg/FEmXQx8Tuh" target="_blank" rel="noopener" style="color: var(--neon-cyan); text-decoration: underline;">Discord-Community</a>.
        </p>
        <div style="background: rgba(0, 240, 255, 0.05); border-left: 3px solid var(--neon-cyan); padding: 8px 12px; margin-bottom: 20px; font-size: 0.85rem; color: var(--text-dim); text-align: left;">
          <strong style="color: var(--neon-cyan);">Plattform-Unterstützung:</strong> Windows PC Standalone. Getestet und läuft dank Steam Proton einwandfrei auf Linux und dem Steam Deck.
        </div>
        <div class="modal-actions" style="display: flex; gap: 12px; flex-wrap: wrap; justify-content: center;">
          <a href="https://ezrokstudios.itch.io/astrofray-preview" target="_blank" rel="noopener" class="btn btn-primary" style="padding: 10px 20px; font-size: 0.85rem;">
            Preview auf itch.io holen
          </a>
          <a href="https://discord.gg/FEmXQx8Tuh" target="_blank" rel="noopener" class="btn btn-secondary" style="padding: 10px 20px; font-size: 0.85rem;">
            Passwort auf Discord holen
          </a>
        </div>
      `
    }
  },
  imprint: {
    en: {
      title: "Legal Notice / Imprint (Impressum)",
      body: `
        <div style="text-align: center; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid rgba(0, 240, 255, 0.15);">
          <img src="assets/ezrok-studios-logo.png?v=0.4.1" alt="Ezrok Studios" style="max-height: 48px; width: auto; filter: drop-shadow(0 0 16px rgba(0, 240, 255, 0.35));">
        </div>
        <h4>Information pursuant to Austrian Media Act (MedienG)</h4>
        <p><strong>Ezrok Studios</strong><br>
        Published by: Ronald Korze (Private Individual / Independent Project)<br>
        Location: A-4050 Traun, Austria</p>

        <h4>Contact</h4>
        <p>Email: <a href="mailto:ezrokstudios@proton.me">ezrokstudios@proton.me</a><br>
        Web: <a href="https://ezrokstudios.github.io/astrofray" target="_blank" rel="noopener">https://ezrokstudios.github.io/astrofray</a></p>

        <h4>Project Information</h4>
        <p>Astrofray is an independently developed video game project by Ronald Korze (Ezrok Studios). All game assets, code, and trademarks belong to their respective creator.</p>
      `
    },
    de: {
      title: "Impressum & Offenlegung",
      body: `
        <div style="text-align: center; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid rgba(0, 240, 255, 0.15);">
          <img src="assets/ezrok-studios-logo.png?v=0.4.1" alt="Ezrok Studios" style="max-height: 48px; width: auto; filter: drop-shadow(0 0 16px rgba(0, 240, 255, 0.35));">
        </div>
        <h4>Angaben gemäß Mediengesetz (MedienG)</h4>
        <p><strong>Ezrok Studios</strong><br>
        Medieninhaber &amp; Herausgeber: Ronald Korze (Privatperson / Unabhängiges Projekt)<br>
        Wohnort: A-4050 Traun, Österreich</p>

        <h4>Kontakt</h4>
        <p>E-Mail: <a href="mailto:ezrokstudios@proton.me">ezrokstudios@proton.me</a><br>
        Website: <a href="https://ezrokstudios.github.io/astrofray" target="_blank" rel="noopener">https://ezrokstudios.github.io/astrofray</a></p>

        <h4>Hinweis zum Projekt</h4>
        <p>Astrofray ist ein unabhängig entwickeltes Videospiel-Projekt von Ronald Korze (Ezrok Studios). Alle Inhalte, Code und Urheberrechte liegen beim Entwickler.</p>
      `
    }
  },
  privacy: {
    en: {
      title: "Privacy Policy (Datenschutzerklärung)",
      body: `
        <h4>1. Data Controller</h4>
        <p>The controller responsible for data processing on this website is: Ronald Korze (Ezrok Studios), A-4050 Traun, Austria. Contact: <a href="mailto:ezrokstudios@proton.me">ezrokstudios@proton.me</a>.</p>

        <h4>2. Website Hosting &amp; Server Logs (GitHub Pages)</h4>
        <p>This website is hosted statically via GitHub Pages (GitHub Inc., USA). When accessing the site, GitHub automatically processes technical server log data (such as IP address, access timestamp, browser type) to ensure system stability and security (Art. 6(1)(f) GDPR). GitHub Inc. is certified under the EU-U.S. Data Privacy Framework (DPF). We do not use tracking cookies, advertising trackers, or user profiling tools.</p>

        <h4>3. Local Game Saves &amp; Diagnostic Logs</h4>
        <p>The Astrofray game client stores save files, settings, and diagnostic crash logs <strong>strictly locally on your PC</strong> (under <code>AppData/LocalLow/Ezrok/Astrofray</code>). There is <strong>no automated transmission</strong> of telemetry, crash dumps, or gameplay data to Ezrok Studios or third-party servers.</p>

        <h4>4. Contact via Email</h4>
        <p>If you contact us via email, your provided contact details are used exclusively to process your inquiry and are deleted once the matter is resolved.</p>

        <h4>5. Your Privacy Rights</h4>
        <p>Under the GDPR, you have the right to request access (Art. 15), rectification (Art. 16), erasure (Art. 17), restriction of processing (Art. 18), data portability (Art. 20), and objection (Art. 21).</p>
        <p>You also have the right to lodge a complaint with the Austrian data protection authority:<br>
        <strong>Österreichische Datenschutzbehörde (DSB)</strong>, Barichgasse 40–42, 1030 Vienna, Austria, Web: <a href="https://www.dsb.gv.at" target="_blank" rel="noopener">www.dsb.gv.at</a>.</p>
      `
    },
    de: {
      title: "Datenschutzerklärung",
      body: `
        <h4>1. Verantwortlicher</h4>
        <p>Verantwortlicher für die Datenverarbeitung ist: Ronald Korze (Ezrok Studios), A-4050 Traun, Österreich. Kontakt: <a href="mailto:ezrokstudios@proton.me">ezrokstudios@proton.me</a>.</p>

        <h4>2. Webhosting &amp; Server-Logs (GitHub Pages)</h4>
        <p>Diese Website wird statisch über GitHub Pages (GitHub Inc., USA) bereitgestellt. Beim Aufruf erfasst GitHub technisch notwendige Server-Logdaten (z. B. IP-Adresse, Zugriffszeitpunkt, Browsertyp), um Stabilität und Sicherheit des Hostings zu gewährleisten (Art. 6 Abs. 1 lit. f DSGVO). GitHub Inc. ist nach dem EU-U.S. Data Privacy Framework (DPF) zertifiziert. Auf dieser Website werden keine Tracking-Cookies, Analysedienste oder Werbe-Tracker eingesetzt.</p>

        <h4>3. Spielstände &amp; Lokale Fehlerprotokolle</h4>
        <p>Das Spiel Astrofray speichert Spielstände, Einstellungen und Absturzberichte <strong>ausschließlich lokal auf deinem Computer</strong> (unter <code>AppData/LocalLow/Ezrok/Astrofray</code>). Es findet <strong>keine automatisierte Übertragung</strong> von Absturzdaten oder Telemetriedaten an Ezrok Studios oder Server Dritter statt.</p>

        <h4>4. Kontaktaufnahme per E-Mail</h4>
        <p>Wenn du uns per E-Mail kontaktierst, werden deine Angaben ausschließlich zur Bearbeitung deiner Anfrage verwendet und nach Erledigung gelöscht, sofern keine gesetzlichen Aufbewahrungsgründe vorliegen.</p>

        <h4>5. Deine Betroffenenrechte</h4>
        <p>Dir stehen gemäß DSGVO die Rechte auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21) zu.</p>
        <p>Zudem hast du das Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde:<br>
        <strong>Österreichische Datenschutzbehörde (DSB)</strong>, Barichgasse 40–42, 1030 Wien, Web: <a href="https://www.dsb.gv.at" target="_blank" rel="noopener">www.dsb.gv.at</a>.</p>
      `
    }
  },
  subscribe: {
    en: {
      title: "Subscribe to Devlog & Updates",
      body: `
        <p style="margin-bottom: 20px; color: var(--text-muted); font-size: 0.9rem;">
          Stay notified on upcoming playtests, patch notes, and balance overhauls through your preferred channel. Zero trackers, zero algorithms.
        </p>

        <!-- Channel 1: RSS / Atom Feed -->
        <div class="subscribe-channel-card">
          <div class="sub-channel-header">
            <div class="sub-channel-icon">📡</div>
            <div style="flex-grow: 1;">
              <div class="sub-channel-title">Direct RSS / Atom Feed</div>
              <div class="sub-channel-desc">
                Subscribe via any modern RSS reader (Thunderbird, NetNewsWire, Feedly, Feedbro). Direct developer announcements delivered without tracking cookies or spam.
              </div>
              <div class="sub-copy-wrap">
                <input type="text" class="sub-feed-input" id="feedUrlInput" value="https://ezrokstudios.github.io/astrofray/feed.xml" readonly>
                <button type="button" class="btn btn-outline sub-copy-btn" id="copyFeedBtn" onclick="copyFeedUrl()">Copy Feed URL</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Channel 2: Discord Announcement Ping -->
        <div class="subscribe-channel-card">
          <div class="sub-channel-header">
            <div class="sub-channel-icon">💬</div>
            <div style="flex-grow: 1;">
              <div class="sub-channel-title">Discord Playtest Role</div>
              <div class="sub-channel-desc">
                Join our official Discord community to grab your Closed Preview password and receive instant notifications for new patches and builds.
              </div>
              <div style="margin-top: 10px;">
                <a href="https://discord.gg/FEmXQx8Tuh" target="_blank" rel="noopener" class="btn btn-outline" style="font-size: 0.8rem; padding: 6px 14px;">Join Discord Server</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Channel 3: itch.io Devlog Follow -->
        <div class="subscribe-channel-card" style="margin-bottom: 0;">
          <div class="sub-channel-header">
            <div class="sub-channel-icon">🎮</div>
            <div style="flex-grow: 1;">
              <div class="sub-channel-title">itch.io Devlog Follow</div>
              <div class="sub-channel-desc">
                Follow Astrofray on itch.io to receive devlog posts directly in your itch dashboard feed.
              </div>
              <div style="margin-top: 10px;">
                <a href="https://ezrokstudios.itch.io/astrofray-preview" target="_blank" rel="noopener" class="btn btn-outline" style="font-size: 0.8rem; padding: 6px 14px;">Visit itch.io Page</a>
              </div>
            </div>
          </div>
        </div>
      `
    },
    de: {
      title: "Updates & Devlog abonnieren",
      body: `
        <p style="margin-bottom: 20px; color: var(--text-muted); font-size: 0.9rem;">
          Bleibe über anstehende Playtests, Patchnotes und Balancing-Updates auf deinem bevorzugten Kanal informiert. Keine Tracker, keine Werbealgorithmen.
        </p>

        <!-- Channel 1: RSS / Atom Feed -->
        <div class="subscribe-channel-card">
          <div class="sub-channel-header">
            <div class="sub-channel-icon">📡</div>
            <div style="flex-grow: 1;">
              <div class="sub-channel-title">Direkter RSS / Atom Feed</div>
              <div class="sub-channel-desc">
                Abonniere über jeden modernen Feed-Reader (Thunderbird, NetNewsWire, Feedly, Feedbro). Direkte Entwickler-Updates ohne Tracking-Cookies oder Werbemails.
              </div>
              <div class="sub-copy-wrap">
                <input type="text" class="sub-feed-input" id="feedUrlInput" value="https://ezrokstudios.github.io/astrofray/feed.xml" readonly>
                <button type="button" class="btn btn-outline sub-copy-btn" id="copyFeedBtn" onclick="copyFeedUrl()">Feed-URL kopieren</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Channel 2: Discord Announcement Ping -->
        <div class="subscribe-channel-card">
          <div class="sub-channel-header">
            <div class="sub-channel-icon">💬</div>
            <div style="flex-grow: 1;">
              <div class="sub-channel-title">Discord Playtest-Rolle</div>
              <div class="sub-channel-desc">
                Tritt unserer offiziellen Discord-Community bei, um dein Passwort für die Closed Preview zu erhalten und direkt über neue Patches und Builds informiert zu werden.
              </div>
              <div style="margin-top: 10px;">
                <a href="https://discord.gg/FEmXQx8Tuh" target="_blank" rel="noopener" class="btn btn-outline" style="font-size: 0.8rem; padding: 6px 14px;">Discord-Server beitreten</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Channel 3: itch.io Devlog Follow -->
        <div class="subscribe-channel-card" style="margin-bottom: 0;">
          <div class="sub-channel-header">
            <div class="sub-channel-icon">🎮</div>
            <div style="flex-grow: 1;">
              <div class="sub-channel-title">itch.io Entwicklertagebuch folgen</div>
              <div class="sub-channel-desc">
                Folge Astrofray auf itch.io, um Devlogs und Patches direkt in deinem itch.io-Dashboard zu sehen.
              </div>
              <div style="margin-top: 10px;">
                <a href="https://ezrokstudios.itch.io/astrofray-preview" target="_blank" rel="noopener" class="btn btn-outline" style="font-size: 0.8rem; padding: 6px 14px;">itch.io-Seite besuchen</a>
              </div>
            </div>
          </div>
        </div>
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
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-modal]');
    if (trigger) {
      e.preventDefault();
      const type = trigger.getAttribute('data-modal');
      openModal(type);
    }
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

function copyFeedUrl() {
  const url = "https://ezrokstudios.github.io/astrofray/feed.xml";
  const btn = document.getElementById('copyFeedBtn');
  navigator.clipboard.writeText(url).then(() => {
    if (btn) {
      const originalText = btn.textContent;
      btn.textContent = currentLang === 'de' ? 'Kopiert! ✓' : 'Copied! ✓';
      btn.style.borderColor = 'var(--neon-green)';
      btn.style.color = 'var(--neon-green)';
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.borderColor = '';
        btn.style.color = '';
      }, 2000);
    }
  }).catch(() => {
    const input = document.getElementById('feedUrlInput');
    if (input) {
      input.select();
      document.execCommand('copy');
      if (btn) btn.textContent = currentLang === 'de' ? 'Kopiert! ✓' : 'Copied! ✓';
    }
  });
}
window.copyFeedUrl = copyFeedUrl;

function initFeedToast() {
  const toast = document.getElementById('feedToast');
  if (!toast) return;

  try {
    if (localStorage.getItem('astrofray_toast_dismissed') === 'true') {
      return;
    }
  } catch (e) {}

  let shown = false;
  function showToast() {
    if (shown) return;
    shown = true;
    toast.classList.add('visible');
  }

  function dismissToast() {
    toast.classList.remove('visible');
    try {
      localStorage.setItem('astrofray_toast_dismissed', 'true');
    } catch (e) {}
  }

  const dismissBtn = document.getElementById('dismissToastBtn');
  if (dismissBtn) {
    dismissBtn.addEventListener('click', dismissToast);
  }

  const toastSubBtn = toast.querySelector('.feed-toast-btn');
  if (toastSubBtn) {
    toastSubBtn.addEventListener('click', dismissToast);
  }

  let scrollTriggered = false;
  const onScroll = () => {
    if (window.scrollY > 350) {
      showToast();
      window.removeEventListener('scroll', onScroll);
      scrollTriggered = true;
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  setTimeout(() => {
    if (!scrollTriggered) {
      showToast();
      window.removeEventListener('scroll', onScroll);
    }
  }, 7000);
}

// ==========================================
// 4. REAL-TIME IN-GAME SHADER LOGO (WEBGL)
// Replicates Src/Astrofray/Assets/Shaders/AstrofrayLogoGlow.shader
// ==========================================
const LOGO_MASK_BASE64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACAAAAAIACAYAAAAW14x+AAAy70lEQVR4nO3dCfQ9V1Un+u+WQAKICYMkAWxxQDRhDIMyzypEwIcCjYJAkGZ6PB4oaC/fanv16u4nyqB2t0KYIiIIKDSTCsgYJyaZQfGJ0s0QQCCIQgIJ+62iyzZGk/z///xquHU/n7XuSkL+qbPZ99Q5Vbd2nZMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwMWpi/23AAAws+7uiZt4elU9fOI2AIBD1N1HJ7lxkhsl+c4k357kxCTHJ7lSkmOSXG6fE1pVfsMDAAAOyVGH9scAAAAA4GB098lJ7p7kbklunmQoAgAAAOBSUgAAAAAAwOS6+8pJHpTkgUluKOUAAAAHTwEAAAAAAJPp7m9K8vgkpyW5olQDAABMRwEAAAAAAAeuu49L8jNJ/s8kx0gxAADA9BQAAAAAAHCguvvUJKcnuYbUAgAAzOfrZmwLAAAAgI2/9d/dz0nySg//AQAA5mcFAAAAAAAute6+ZZIXJbmmdAIAACzDCgAAAAAAXCrd/UNJXufhPwAAwLIUAAAAAABwxLr7seOb/8dIIwAAwLIUAAAAAABwRLr755M8xW9MAAAA66AAAAAAAIDD1t2PS/J4qQMAAFgPBQAAAAAAHJbu/uEkT5I2AACAdVEAAAAAAMAh6+5bJvn1JCVtAAAA66IAAAAAAIBD0t3HJXlxkmOkDAAAYH2OWjoAYF7dfcUkN0tywyTfleRbk5yY5OpJrjD+iGNs4NI4L8k5Sf4+yaeSnJXkL5N8MMl7kry1qr4oxQAAsJN+Ock1lg4CAACAf5mHfLAHuvvGSe6e5NQkpzj3mWFu+frxc3yS6ye5ywX+/Xnd/adJXpnk5VX1bt8IAACsX3cP95UPWDoOAAAALpq92mCjuvtqSU5L8qDxTX9Yq/cnOSPJs6vqs0sHAyyvu3viJp5eVQ+fuA0A2JTuvnKSDyQ5YelY9lFV+Q0PAAA4JF93aH8M2BXd/c3d/d+SfCTJEz38ZwecnOQXkvyP7v7l7v6mpQMCAAD+mX/n4T8AAMD6KQCADb2N0d1PSfLnSR6Z5ApLxwSH6YpJHp3kQ939C919nAwCAMA6Cs2TPGLpOAAAALhkCgBgO/swDsuoPzbJ0UvHA5fSMUl+cujT3X032QQAgMX9lHtNAACA3aAAAHb/rf/nJnl5khOXjgcO2DWSvKq7n9Pdx8ouAADMr7uvmuSBcg8AALAbFADAjuruWyd5X5IHLB0LTOxBQ1/v7lvINAAAzO7BtpgDAADYHQoAYAd1932S/P74hjTsg2sleV1332vpQAAAYA8LcgEAANgRRy0dAHB4unvYG/3nk5TcsWcun+TF3f0TVfWLSwcDAABb1903SHLygiF8flz57qwknxlCWjAWAACAnaAAAHZIdz85yeOWjgMWXrnmqd19YlX9lG8CAAAmdfcF8js85P/NJM9K8uaq+soCMQAAAOwsBQCwI7r78R7+w//2hO7+hJUAAABgUnebOb9/muShVTX8FQAAgCN8kxJYue6+T5InLh0HrMyTu/teSwcBAABb1N3HJLnpjE2+OMltPPwHAAC4dBQAwMp1962TPDdJLR0LrHAOe153f8/SgQAAwAbdJMnlZnz4f9+q+uJM7QEAAGyWAgBYse6+cpIXJTl66VhgpS4/nCPdfezSgQAAwMbceKZ23pHkgVXVM7UHAACwaQoAYN1+OcmJSwcBK/dNSZ6ydBAAALAx3zlDG8ND/4dW1ZdmaAsAAGAvKACAlerueyS5/9JxwI44rbvvunQQAACwId82QxvPr6p3ztAOAADA3lAAAOtd+v/pS8cBO+YZtgIAAIADc8IMuXzWDG0AAADsFQUAsE7/bqYfW2BLrpnkZ5YOAgAANuL4iY9/dpIzJ24DAABg7ygAgJXp7m9O8oil44Ad9ejuvtbSQQAAwAZcaeLjv7eqzpu4DQAAgL2jAADW56eSHL10ELCjjknyhKWDAACADZj6vvSsiY8PAACwlxQAwIp099WSPGjpOGDHndbdV1k6CAAA2HGXnfj4n5v4+AAAAHtJAQCsy0OSXH7pIGDHXTHJg5cOAgAAuFgtPwAAAAdPAQCsi7f/wbkEAAAAAABwRI46sv8MOGjdfUqS71wws59N8v5xH8bh7+FIDcvvn5Dk5PHvl3C97r5hVb17ofYBAAAAAABmpwAA1uMeC7R5fpLnJjkjyR9W1fDPcCC6+zJJbjWubPFjSYZ/nvucUgAAAAAAAADsDVsAwHrcbeb2/ijJ8Ib0aVX1Zg//OWhDnxr71mlJbpTkT2bO8qkztwcAAAAAALAoBQCwAt19xSQ3nrHJX0tyh6oalvyHyVXV+5LcPsnzZkz3Tbr7CjO2BwAAAAAAsCgFALAON59xS44zqupBVfXlmdqDr6mqc6vqATMWAQzn1M2kHwAAAAAA2BcKAGAdbjhTO3+Y5GEztQUX5cdn3A5grnMLAAAAAABgcQoAYB2+a4Y2zk/yUG/+s4aVAMYigKFPbuHcAgAAAAAAWAUFALAO3zZDG8+pqg/O0A5coqp6f5Jf28i5BQAAAAAAsAoKAGAdTpihjTNmaAPW1ifnOLcAAAAAAABWQQEArMPVJz7+3yT544nbgMP1R0k+s+PnFgAAAAAAwGooAIB1uOLEx39fVX114jbgsFTV+UmGrQB2+dwCAAAAAABYDQUAsA5HT3z8T058fDhSZ02cumMmPj4AAAAAAMBqKACAdbjMxMc/e+Ljw5H63MSpO2ri4wMAAAAAAKyGAgAAAAAAAAAA2AAFAAAAAAAAAACwAQoAAAAAAAAAAGADFAAAAAAAAAAAwAYoAAAAAAAAAACADThq6QAAgEuvuyvJSUlumuTkJNdNco0kJya5UpJjklxOrletk5yb5Jwkn0tyVpKPJfmzJB9I8raq+v+WDnIjHtbdD1s6iF1RVcP4spVx8jsvNE5ecxwnv8E4uR672ucuNBefNPY3c/HuzsVnJ/nEBebiD45z8V8sHeSGmI/3YGy8IHPx/va37h7GVzjkLrPv98bd/e8nbuLtVfXKidtgpbr7B8Z7lslU1dR9GLgECgAAYEd195WTDBft90xyhyRXWTomLpUaCzWGz3FJvuXCf6C7P5nk9UleluR3q+pv5RwuWncP59KpFxgnryZfHCRz8ebn4mtf+A9096eSvGGci3+nqj6/TKiwG8zFwIT3xhecj7d2b/yzEx//6UkUAOyv4bfEqV+KUAAAC1MAAAA7prvvlOTfJPlBb/XvneOT3G/8fKm7fzvJM6vqTUsHBmvS3cPD/ocmuVeSo5eOh+3p7juPfcxcvH+unuS+4+ec7n5pkmdV1euWDgzWxFwMzHBv/K/HzzAfv2S8Nx6KAgBg733d3mcAAHZkuczuvk93vzPJ7ye5j4f/e+/ySe6f5I3d/bbu/qFxWVXY53Hyh7v7HeNKGUOhjIf/HHQfu+84F7/WXMz4ZuIw1vz+0C+6+193t99Z2FvmYmDB+fhHhnuA4V5g/O3EvTEAe82NKQCsXHffbtifLckLk9xo6XhYpWHvtt9K8pbuvs3SwcBC4+Tbkrw4ySm+ASZaVWIoLvlNczEXYbhGe8HQT8bVmmCvmIuBlThl/O3k7eP1GwDsJQUAALBS3X2l7n7m8Ia3B1ocopsleXN3n97dXy9r7Mk4+YxxnLzJ0vGwPd39Dd397HFViRsvHQ87UwgwrAhwRncfu3QwMDVzMbDiQoBhRYBnD+PU0sEAwNwUAADACnX3bZO8J8lDlo6FnTTsS/3u7r710oHAxG8aDuPkj8syE/WxO4x97MEyzBF44NB/uvuOssdWmYuBHTBcx723u2+/dCAAMCcFAACwIt19me7+hSRvSHLtpeNhp31rkjd19xOHfrV0MHBQuvuo7n7S+Ea2cZKp+thTkrwuyTdLMZfCvxpXA/jFoV/JJFthLgZ2zDePqwE82XwMwL5QAAAAK9HdV0zysiQ/aY7mAK/1npDkpd19BVllI+Pky5P8hHGSifrYsH3KK5I8NknJMgdg6EePSfIqSxCzBeZiYIfn48cN9xLjOAYAm6YAAABWoLu/cXzr/9SlY2GT7j70r7GfwU7q7uOHVS2S3HXpWNim7j5h7GPfv3QsbNL3jivznLh0IHCkzMXABtx1nI+HewsA2CwFAACwsO4elmr/4yQ3WzoWNu3mQz8b+xvslO6+zjhO3mTpWNh8Hztl6VjYtBuPc/F1lw4EDpe5GNiQm4zz8bcvHQgATEUBAAAsaHwj+zVJvs0XwQyGfvYaKwGwS8a3c16d5FuWjoVNv/k/zMXXXjoW9mYf4ldbCYBdYi4GNuhbxntjKwEAsEkKAABgIeOe7MM+wx7+M6ehv72iuy8v7ezIfuyv8vCfGfqYh//MXQTwqrH/waqZi4GNFwG8sruvuHQgAHDQFAAAwAK6e5iDn5/ku30BLGDody8Y+yGsUncfleRFlv1n4j72Ysv+s+B2AC8e+yGskrkY2AM3TfLC7r7M0oEAwEHyoy8ALOM/Jbmn5LOgof/9R98AK/bzSe66dBBsvo99/9JBsNeG/vcLSwcBF8NcDOyDU5P83NJBAMBBUgAAADPr7lsmeYLEswJP6O5bLB0EXFh33z7J/y0zTEUfY0Ue0913WDoIuDDjJLBnHtfdt1k6CAA4KAoAAGBG3X2FJGeYg1mJYZnDXxv7JaxCd19pHCdr6VjYJn2MlRnGuueM/RJWwTgJ7OlzkjO6++uXDgQADoICAACY1xOTXEfSWZHrjP0S1uIXk3zz0kGwafoYazOMeU9dOgi4AOMksI++NcmTlg4CAA6CAgAAmEl3f0+SR0k4K/SosX/CGpYbPs3XgD7GHnrIOAbCoszFwJ57WHffeukgAODSUgAAAPN5siWtWfHyw0P/hMV0t36IPsa+e9I4FsIizMUAX/Nk8zEAu04BAADMoLvvkeSWks2K3XLsp7CU+yQ5RfrRx9hjN0nyw0sHwV4zFwMkN0/yf0gEALtMAQAAzOPfSjQ74KeXDoC99lNLB8Dm6WPsAnMxSzJOAvwvfsMBYKcpAACAiXX3rZLYX51dcIuxv8KsuvtOSW4s7ehjkFO6+47ywNzMxQD/xE27+3ZyAsCuUgAAANP7N5LMDnno0gGwl/Q79DH4Rz8uGSzAXAxgXARgI45aOgAA2LLuvtLCe7l+Psn7kpyV5DNDSAvGwsWrJFdNckKSk5Mct1DC7t3dj66qL2S7PpDkzKWD4H/p7qGv/+CC+Tj7QuMkG6OPcYRz8fWSHLtQ9u419NuqGsanLTMfr4Rxkhk8XZbZwfn4h7r7kVX1twu1DwBHTAEAAEzrrkmuMHOSh4f8L0zyrCRvqqqvzNw+l1J3D9dot03ykCT3G38AmcsVxn77omzXmVX18KWD4H/7gSRHz5yPryZ5fpJnj/3hPN/HpuljHLbuvmyS2yw0Fw9j4qlJfiPbZj5eD+Mkk3LtzaWcj283zsf3nXk+Pmacj18wY5sAcCBsAQAA07rHzAl+V5KbV9X9qur3PfzfTcPDyKp6fVX96LD3YJJ3zhzCPWduj/029zj5tiSnVNUDquoNHv7vBX2MwzZcQ11oLv7TmdNoLmZOxklgzfPx8NvGUIz33UnePXMIS65UBgBHTAEAAEzrzjMm+GVJbl1Vb5+xTSZWVcMDh1snecmMyb7TjG2xx7p7eIPnjjM2+ZvD6hpVNfcPhyxEH+MA5+JhNYDfmjGjdxj7L0zKOAnsiqoaCnlvNf72MZc571UA4MAoAACAiXT3dZIcP1OChxvge1XV38/UHjOqqi8m+eEkL52pyePH/gtT+65xf885vGBcHeWcmdpjHfQxDnIuvs+MRQBXS/KdM7XFfjNOAjtj/M3jXklePlOTV+tu8zEAO0cBAABM5+YzJfc9Se5fVcOe1mxUVXWSB8y45OHNZmqH/TZXPxtWRjltprZYF32Mg56LHzjjdgDmYrbUz8zFwIEYf/sYtuh570wpNR8DsHMUAADAdE6eKbkPraq/m6ktln/b4aHDAhMb6r/st5NmaGP4gfDHvfm/t/QxplgJYK65eI7+C8ZJYOeMv4EM8/EczMcA7BwFAAAwnevOkNwXV9VbZ2iHde17+OIZmrLMIVsZJ59fVXOtnMH66GMcuKoaVgB4wUb6LxgngZ1UVW+ZaWse8zEAO0cBAABM51ozJPf0GdpgfZ45QxvXnKENmKOfPUua95o+xi6PLeZi5mCcBHbZM2Zow3wMwM5RAAAA0zlx4uR+IcmbJ26DdXrT+P3vcv+FOfrZ2Un+QKr3mj7GVM5M8vmJ02suZg7GSWCXvdG9MQD8cwoAAGA6x02c3PdU1ZcnboMVGr/390zczLETHx8G3zBxGt5bVedJ9V7Tx5hEVX0lyft2vP/CHP3MXAxMfW/83olT7N4YgJ2jAAAApnP0xMk9a+Ljs26fnPj4x0x8fJijnxkn0cfY5THGXMwcjJPArjMfA8CFKAAAgOlcbuLkfmbi47Nuf7PjBSwwuOzEaficNO89fYxdvhab+loSBsZJYNdNfW9sPgZg5ygAAIDd1UsHwKJ8/+A8YXnG4v3m+wfnCbA88zEAXMhRF/4fAADYCR9O8palgwAAAAAAYD0UAAAA7KCq+vkkwwcAAAAAAL7GFgAAAAAAAAAAsAEKAAAAAAAAAABgAxQAAAAAAAAAAMAGKAAAAAAAAAAAgA1QAAAAAAAAAAAAG6AAAAAAAAAAAAA2QAEAAAAAAAAAAGyAAgAAAAAAAAAA2AAFAAAAAAAAAACwAQoAAAAAAAAAAGADFAAAAAAAAAAAwAYoAAAAAAAAAACADVAAAAAAAAAAAAAboAAAAAAAAAAAADZAAQAAAAAAAAAAbIACAAAAAAAAAADYAAUAAAAAAAAAALABCgAAAAAAAAAAYAMUAAAAAAAAAADABigAAAAAAAAAAIANUAAAAAAAAAAAABugAAAAAAAAAAAANkABAAAAAAAAAABsgAIAAJjOVydO7uUmPj4AAAAAALBDFAAAwHTOnTi5x098fAAAAAAAYIcoAACA6Xxp4uR+08THBwAAAAAAdogCAACYzqcnTu71uvuEidsAAAAAAAB2hAIAAJjOJyZObiW5+8RtAAAAAAAAO0IBAABM569mSO4TuvuoGdoBAAAAAABWTgEAAEzngzMk99uTPGKGdgAAAAAAgJXzxiDsh9t099OWDgL+BbfZeFbeO1M7P9/db6mqt87UHgAAAAAAsEIKAGA/nDR+gHn9cZKvzrDizjFJXtrdt6+qv5i4LQAAAAAAYKVsAQAAE6mqz8+4CsA1kvzJUAQwU3sAAAAAAMDKKAAAgGn9zowJvkqS13b3r3T31WdsFwAAAAAAWAEFAAAwrZctsL3PI5J8uLtf2N0/2t0ndfdQHAAAAAAAAGzY8JAAAJjOW4eH8Um+deYkXzHJfcbP13T3zCFwmIYv6Nwk5yQ5O8lZST6W5M+SfHDoS1X1F7IKAADsknYzCgAwKwUAADChqhp+63h2kv8o0VxSd0lyzPg5Lsm1L/wHuvvTSV6f5OXD9hJVNRQKAAAAAADA19gCAACm96zxzW64tL4xyX2T/MawQkB3/2Z331laAQAAAAAYKAAAgIlV1bCU+3MlmgN29FgM8Nrufld336+7XdsBAAAAAOwxPxIDwDyemOQrks1Ebpjk+Un+1IoAAAAAAAD7SwEAAMygqv4yya9KNjMUAgwrAjy3u4+TbQAAAACA/aIAAADm8x+SfFrCmcEDkry3u+8i2wAAAAAA+0MBAADMpKo+k+RhEs5MrpXkNd3937r7srIOAAAAALB9CgAAYEZV9dIkz5N0ZvTIJL/X3cfKOgAAAADAtikAAID5PTrJRyWeGd0xyZndPawKAAAAAADARikAAICZVdXZ4x7tX5F8ZnT9JH/S3SfJOgAAAADANikAAIAFVNUbk5wm+czsmklebSUAAAAAAIBtUgAAAAupqucl+RlfADMbtgH4ne4+VuYBAAAAALZFAQAALKiq/nOSX/UlsMB2AC/p7svJPAAAAADAdigAAIDlPSrJk5YOgr1zxyRPXToIAAAAAAAOjgIAAFhYVXVVPT7JY5J8del42CuP7O7vXToIAAAAAAAOhgIAAFiJqvrlJPdJcs7SsbBXntXdxy0dBAAAAAAAl54CAABYkar67SQ3T/KupWNhb1wryX9ZOggAAAAAAC49BQAAsDJV9d6xCOA/JTl/6XjYC/fv7rssHQQAAAAAAJeOAgAAWKGq+kpV/T9JbpXkfUvHw154Une7NgQAAAAA2GFHLR0AMIunV9XD5Zq16e6nJXnY0nGsWVW9pbtvlOQhSf59khOXjonNukGS+yX5jaUDAQAAAADgyHjLCwBWrqrOr6rTk3xLkqGY50NLx8Rm/XR319JBAAAAAABwZBQAAMCOqKpzq2pY0eO6Se6Q5LlJPrd0XGzK9ZJ879JBAAAAAABwZBQAAMAOqqo3VtUDk1w9yZ2S/OckZyb54tKxsfMeunQAAAAAAAAcmaOO8L8DAFagqs5L8vrxk3H59mGrgO9Ics0kJyb5hiTHJLns8J8sHTMXafhurpLkhPFN/OMWytU9uvuqVfWZhdoHAAA4HB8YC+LZT7dJctLSQQDAmigAAIANqapO8uHxw47q7qPGHzEenORHZ161aSgUuXuSM2ZsEwAA4EidWVUPl7791N1PUwAAAP+ULQAAAFa4skNVvaGqfizJKUneNnMI95y5PQAAAAAADoACAACAFauqdye5bZIXzNjs7cftJAAAAAAA2CEKAAAAVq6qzqmqH5mxCOC4JNebqS0AAAAAAA6IAgAAgN1xWpK3ztTWTWdqBwAAAACAA6IAAABgh1YCSPLQJF+dobmTZmgDAAAAAIADpAAAAGCHVNV7kjx3hqauO0MbAAAAAAAcIAUAAAC754wZ2rjGDG0AAAAAAHCAFAAAAOyeP0jy2YnbOHHi4wMAAAAAcMAUAAAA7JiqOj/J+ydu5koTHx8AAAAAgAOmAAAAYDedNfHxj5n4+AAAAAAAHDAFAAAAu2nqLQAuO/HxAQAAAAA4YAoAAAAAAAAAAGADFAAAAAAAAAAAwAYoAAAAAAAAAACADVAAAAAAAAAAAAAboAAAAAAAAAAAADZAAQAAAAAAAAAAbIACAAAAAAAAAADYAAUAAAAAAAAAALABCgAAAAAAAAAAYAMUAAAAAAAAAADABigAAAAAAAAAAIANUAAAAAAAAAAAABugAAAAAAAAAAAANkABAAAAAAAAAABsgAIAAAAAAAAAANgABQAAAAAAAAAAsAEKAAAAAAAAAABgAxQAAAAAAAAAAMAGKAAAAAAAAAAAgA1QAAAAAAAAAAAAG6AAAAAAAAAAAAA2QAEAAAAAAAAAAGyAAgAAAAAAAAAA2ICjlg4AALaqu585cRNvrKrnTdwGAAAAAACwIxQAAMB0HjJxcs9LogAAAAAAAAD4GlsAAACwb2rpAIDNMJ7sN98/ALCLXMPsN98/7AEFAAAw7Rv6U7ryxMdn3a4y8fG/MvHxl2zbuQP7w3jClK46cXq/PPHxAebi3hgOj2tYdvkaFlgBBQAAMJ1zJk7uCRMfn3U7Ycf775JtO3dgfxhPmNKW52KAg2Q+BucM6+E3EdgDCgAAYDp/O3FyT+7uy0zcBis0fu8nT9zMF7Ldc+f63X3UxG0A62A8YRLjPHK9He+/AHOZ+t7CvTFb4xqWXb6GBVZAAQAATOesGZbsuuXEbbBOt5phC4BPZDmfnPj4xyW5zcRtAOvwiRnGk1tP3AbrdNskx254LgbYtXvjW0zcBszJNSy7fA0LrIACAACYzsdmSO6DZ2iD9Znje//4DG0s2fZDZmgD2I+52Hiyn07b+FwMcJDcG8P6zhnXsPtpjmtYYAUUAADAdD40Q3J/rLst3bVHuvv6w/c+Q1N/nm2fOz/S3TeaoR1gWXONJzeYoR1WortvPHzvMzT1ZzO0AbCV+fiB3X3SDO1ANnI/7hp2z8x4DQusgAIAAJjO+2dI7rAX/OndffQMbbGw8Xs+faZruA9kOR+coY1K8szuvvwMbQHbnou/bhxPjpmhLRY2zhvPGOeRLc/FALs2ng33xs/o7svN0BZMzTUsu3wNC6yAAgAAmM7bZ0rusNfhM2dqi2UN3/P3bKz/Ltn2TZKc0d1ugGG73jZTOzdL8uyZ2mIh43zxa+P8saX+C7CV6/tbJnn6TG3BlFzDssvXsMAKKAAAgOm8L8nnZkrw/bv7uVYC2Kbhe+3uXx++55maPHvsv0t5b5IvzNTWfZL8ppUAYLOGFUU+M1Nb9+vu51sJYJvGeeKFSe49U5NDv7UFALAVw/X952dq60Hd/RwrAbDLqmq4hv2bmZpzDbthC1zDAiuhAAAAJlJVneSNMyb4AUneNO4Rz0Z09/XGfjTXw//BG8f+u4iqOj/Jm2dscigC+INxPzxgQ8ax7PUzNnm/cS6+wYxtMrFxfjhz5h9OX7/kXAxwkKrqqzPfGz8oyRu6++QZ24SD5hqWXbyGBVZCAQAATOvlMyf4u5O8a1wN4HbdfdTM7XMAuvsy3X3b7h6WaHv3jMv+/4OXZXmvnLm9U5K8o7t/o7vv6NyBTZl7Lr55kneOc/HtjSe7afjeuvsO3f28YX5YYMnUNczFALs8Hw/bAbynu88Y760uM3P7sGvXAq5hN2AF17DAStjvFFagu6d+s+PpVfXwiduAw9bdT0vysClTV1WLznXdfdUkn0hy2YVC+Ny43OInk3x2oRg4dFdJcnySYRWHKy+UuK8kObGq5loy+1/U3ddI8j8XLFgdlih9zwXOnb19C3PKawjXQMyhu688zsVHLzgXD9uqnGUuXr3hunHoLyeMc/FxC8Vx7hBDVQ1b8izGGL0ffM/M2Ne+McnHkyxVpO7eeLtuk+Skrf221N3HjtePx2QZZ4+/J501nj97e0+8A9ZyDbua32OB5S64AGAvDA9Ru/sVSe61UAjDDcBtF2qb3fTypR/+D6rq4939uiR3WSiEY8cfkkgUEbLTqupz3f3fk9x3wbnYeMLheOnSD/8BDlpVfbq7X5Xkngtl170xO6WqPt/dLx23mFrC8BDZNSzAjrIFAABM73RJZoc8I+vx7KUDADZjTWMbXJJnShGwUe6NwTkDwAwUAADA9F4zLv0La/e+sb+uxW+N2wAAXCpVNawo8i5pZAe8c+yvAFv0u0k+uHQQsCuq6o3jPu4AcFgUAADAxKpq2CftiRLNDvi5sb+uQlWdl+SpS8cBbMbPLR0AHIL/V5aArXJvDEfEtQEAh00BAADM4/lJ3iPZrNjQP1+Q9Xlako8tHQSwCS8a3q5eOgi4GO8YV78B2LLnJfnA0kHADnlJkrctHQQAu0UBAADMoKq+muQnJZsV+8mxn65KVX0pyc8uHQewmbcOf2LpOOAS5uLVrMQDMIWqOj/J42UXDvmccQ0LwGFTAAAAM6mq145vO8DaPG/sn2v17CRnLh0EsPuq6g3jmAJr8+xxn1+Azauq30nywqXjgF1RVcP98OlLxwHA7lAAAADzenSSj0o6K/LRsV+u/Y2HByf54tKxAJvw2CQfWToIuICPjP0SYJ88Msknlg4CdsiwktVfLR0EALtBAQAAzKiqzk7yEElnJYYH66eN/XLVquovk/zbpeMAdl9V/e1YVGSpddbga0VuY78E2BtV9Vn3xnBY58zfJXlgktVt3QfA+igAAICZVdVrkvyKxLMCv7Lypf8v7L8ksTwycFBbAfySVLICvzT2R4C9U1W/m+TpS8cBO7YVwFOWjgOA9VMAAADLGJZ5fb3ks6Ch/z1ul76BcSuA+yQZVgMAuLQen+T3pJEFvXrshwD77P9S5AuH5aeTvErOALg4CgAAYAFV9eUk90ryXl8ACxj63b3GfrhTqurTSe6W5DNLxwLstqo6L8m9k/zp0rGwl9419L+xHwLsrfGe5AeTvG/pWGAXVNX5Se6b5G1LxwLAeikAAICFVNXnxweZH/UlMKOhv9117H87qao+lOSeSc5dOhZgE3upnprkr5eOhb3ykeEasKq+sHQgAGsw3pvcNcnHlo4FdkFV/X2SH0jy4aVjAWCdFAAAwIKqangY+32KAJjJ0N++t6p2/oe1qvrD8c3dLy0dC7DbquqsYWxUBMCMD/+/r6o+IeMA/2Q+/tq9iiIAODRV9anxnFEEAMA/owAAABZWVR9IcgtLHjLDsv+3qKoPbiXTVfWKJHeyHQBwAOPJX4xz8Ttlk4mX/R/m4j+XZYCLvDf+HlvlwaGpqr8cr2FtBwDAP6EAAADW87bDrZO8YelY2KTXDf1r7GebUlV/nORW3twFDmglgNsmebVsMoHXDv3Lm/8AlzgfD/cst0nyermCQ14J4A5JXiVfAPwDBQAAsK59D78/ya8uHQub8ivDfppV9bfZqPFNyuGtBz8SApd2PPm7cT/VX0zS0skBGPrRLyc5taq+IKMAh3xvfNfxXga45HPm75PcM8mTknxVwgBQAAAAK1JVX66qR44/dnx86XjYaV/bQ7OqHlVVX8l+vLl75ySPSfKlpeMBdldVnVdVjx23GPkfS8fDTvufSe5SVY/Zh7kYYIJ740cl+b7x3ga4+HPm/Kp6fJLbJ/kryQLYbwoAAGCFqur3klwvyfOXjoWd9Lwk16+qYbnhvVFVXVXDW5Y3TvLWpeMBdltVDdvyXD/JGUvHwk567jgXD9vwAHCEquo143w83OMAl3zOnJnkBklOlyyA/aUAAABWqqo+V1U/Oq4G8L6l42EnvGd86/8BVXV29tS4JcAtkzwiySeXjgfYXcP2KVX14HE1gHctHQ87Yegnd66qB45LWANwKQ33NsM9znCvM97zABd/zvxdVT0syW2TvE2yAPaPAgAA2I3VAG6U5MeSvH/peFil4UewoVjkxvv21v8lLH/4tCTXSfLTSYYtAgCOdEx5fZKbJPkRDx64CO8e+8dNvPUPMI3xXmdY7WsoBlAkD4e2GsB3J7l3kndIGMD+UAAAALvzMPPXx6UP75bkpUnsJbvfzk3yovGN/xtW1fOr6qtLB7U2VfWFqnpikmuPRTRvStJLxwXsnmGMraoXDGPu+AbibyX58tJxsfhc/MIkd6mqG439w1wMMP18/LxxifPvT/IS98ZwiVvl/VZV3TTJHZO8IMk5cgawbUctHQAAcHg3bkl+d/h099WS3D3JPZLcPslxcrl5n04yvIX6iiSv2udl/g9XVQ0PaYYiml/v7n+V5J5JfmDcKuDrl44P2Mk3EF/b3VcZx5J7jnPx8M9sm7kYYD33xq8ePt191fHeePjcIcmVl44P1qiq3pDkDd19bJJTx2vYoShg+H0JgA2ppQMAku6e+k3Ep1fVw+WatenuYXnuYU+yyVTVXsx13T2s6nO9JENF90lJviPJNZOckOQbkhyj8G/1enyTdKjEP3tcsv6jSYb97D+Q5O3j3vYcZNK7LzNusXFKku8atwy4xnjuXGk8dy67z0mfchx1DcSWdPdwrpw8zsXDX69rLt7pufjzST6xz3OxMXo/+J7Z6Hx8vQvMx98xXt+f6N6YI7X135a6e7gXvtmFrmEveM7s9T0xh2/r5wwAAAAAAAAArOKFrJ7Y0v8fgWR4WxAAAAAAAAAA2HEKAAAAAAAAAABgAxQAAAAAAAAAAMAGKAAAAAAAAAAAgA1QAAAAAAAAAAAAG6AAAAAAAAAAAAA2QAEAAAAAAAAAAGyAAgAAAAAAAAAA2AAFAAAAAAAAAACwAQoAAAAAAAAAAGADFAAAAAAAAAAAwAYoAAAAAAAAAACADVAAAAAAAAAAAAAboAAAAAAAAAAAADZAAQAAAAAAAAAAbIACAAAAAAAAAADYAAUAAAAAAAAAALABCgAAAAAAAAAAYAMUAAAAAAAAAADABigAAAAAAAAAAIANUAAAAAAAAAAAABugAAAAAAAAAAAANkABAAAAAAAAAABsgAIAAAAAAAAAANgABQAAAAAAAAAAsAEKAAAAAAAAAABgAxQAAAAAAAAAAMAGKAAAAAAAAAAAgA1QAAAAAAAAAAAAG6AAAAAAAAAAAAA2QAEAAAAAAAAAAGyAAgAAAAAAAADYvpr4+D3x8YFDoAAAAAAAAAAAtu9qEx//3ImPDxwCBQAAAAAAAACwfcdPfPxzJj4+cAgUAAAAAAAAAMCGdfflktxg4mY+O/HxgUOgAAAAAAAAAAC27XZJrjRxG5+c+PjAIVAAAAAAAAAAANv24zO08fEZ2gAugQIAAAAAAAAA2KjuvlmSe8/Q1J/P0AZwCRQAAAAAAAAAwAZ19xWTnJ6kZmjugzO0AVwCBQAAAAAAAACwMd09PPR/bpIbzdTk22dqBwAAAAAAAAD2Q3dfobt/u+fzmbHgAFiYFQAAAAAAAABgI7r7lCR/kOReMzb7pqrqGdsDLsJRF/UvAAAAAAAAgPXr7uGZ322TPCTJ/ZLM/Tb+K2duD7gIluIAAAAAAABgeIj8xCTHSsVOPee7cpITklw/yXELxXF+kmtU1acWah+4AAUAAAAAAAAADAUAZyU5Xio4TK+qqh+QNViHr1s6AAAAAAAAAGBnPWfpAIB/pAAAAAAAAAAAOBJ/neS/Sx2shwIAAAAAAAAA4Eg8tarOlzpYj1o6AAAAAAAAAJbX3WclOX7pONgZH01ynao6Z+lAgH9kBQAAAAAAAADgcP2sh/+wPgoAAAAAAAAAgMPx5iTPkTJYHwUAAAAAAAAAwKH6YpLTqqqlDNZHAQAAAAAAAABwqH66qv5SumCdFAAAAAAAAAAAh+JNSf6rVMF6KQAAAAAAAAAALsmHk9zb0v+wbgoAAAAAAAAAgIvz2SR3rapPSxOsmwIAAAAAAAAA4KKcm+QHq+pDUgTrpwAAAAAAAAAA+Jeck+S+VXWm9MBuOGrpAAAAAAAAAIBVLvt/j6r6w6UDAQ6dAgAAAAAAAADggj6S5Pur6s+kBXaLLQAAAAAAAACAf/CGJLfw8B92kwIAAAAAAAAA4Jwkj0typ6r6hHTAbrIFAAAAAAAAAOy3tyd5gLf+YfdZAQAAAAAAAAD206eSPMqS/7AdVgAAAAAAAACA/fLJJL+U5L9W1ReWDgY4OAoAAAAAAAAAYD+cmeRZSV5YVecsHQxw8BQAAAAAAAAAwDZ9MckfJXllkpdV1V8vHRAwLQUAAAAAAAAAsJu+kuTcJMMy/mcl+XiSv0jywSTvHD5Vdd7SQQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkJX4/wGH283aBIjz7wAAAABJRU5ErkJggg==';

function initHeroLogoShader() {
  const canvas = document.getElementById('heroLogoCanvas');
  const fallback = document.getElementById('heroLogoFallback');
  const container = document.getElementById('heroLogoContainer');
  if (!canvas) return;

  function showFallback() {
    canvas.style.display = 'none';
    if (fallback) fallback.style.display = 'block';
  }

  const gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: true });
  if (!gl) {
    console.warn('WebGL not supported, using fallback static logo.');
    showFallback();
    return;
  }

  const vsSource = `
    attribute vec2 aPos;
    varying vec2 vUv;
    void main() {
      vUv = aPos * 0.5 + 0.5;
      gl_Position = vec4(aPos, 0.0, 1.0);
    }
  `;

  const fsSource = `
    precision highp float;
    varying vec2 vUv;
    uniform sampler2D uTex;
    uniform float uTime;

    // Evaluates 4-color horizontal neon gradient matching in-game shader
    vec4 evaluateGradient(float x) {
      x = clamp(x, 0.0, 1.0);
      vec4 c1 = vec4(0.416, 1.0, 0.0, 1.0);
      vec4 c2 = vec4(0.0, 1.0, 1.0, 1.0);
      vec4 c3 = vec4(0.25, 0.25, 1.0, 1.0);
      vec4 c4 = vec4(1.0, 0.0, 0.667, 1.0);

      if (x < 0.38) {
        float t = x / 0.38;
        return mix(c1, c2, smoothstep(0.0, 1.0, t));
      } else if (x < 0.65) {
        float t = (x - 0.38) / (0.65 - 0.38);
        return mix(c2, c3, smoothstep(0.0, 1.0, t));
      } else {
        float t = (x - 0.65) / (1.0 - 0.65);
        return mix(c3, c4, smoothstep(0.0, 1.0, t));
      }
    }

    void main() {
      // Flip vertical texture coordinate for WebGL texture orientation
      vec2 uv = vec2(vUv.x, 1.0 - vUv.y);
      float baseAlpha = texture2D(uTex, uv).a;

      // 1. Procedural breathing glow pulse matching Unity shader
      // _GlowPulseSpeed = 2.0, _GlowPulseAmount = 0.25, _GlowRadius = 0.015
      float pulse = 1.0 + 0.25 * sin(uTime * 2.0);
      float currentRadius = 0.015 * pulse;

      vec2 offsets[12];
      offsets[0] = vec2( 1.0,  0.0); offsets[1] = vec2(-1.0,  0.0);
      offsets[2] = vec2( 0.0,  1.0); offsets[3] = vec2( 0.0, -1.0);
      offsets[4] = vec2( 0.707,  0.707); offsets[5] = vec2(-0.707,  0.707);
      offsets[6] = vec2( 0.707, -0.707); offsets[7] = vec2(-0.707, -0.707);
      offsets[8] = vec2( 0.5,  0.866); offsets[9] = vec2(-0.5,  0.866);
      offsets[10] = vec2( 0.5, -0.866); offsets[11] = vec2(-0.5, -0.866);

      float glowSum = 0.0;
      for (int i = 0; i < 12; i++) {
        vec2 uv1 = uv + offsets[i] * currentRadius;
        vec2 uv2 = uv + offsets[i] * (currentRadius * 2.2);
        glowSum += texture2D(uTex, uv1).a * 0.6;
        glowSum += texture2D(uTex, uv2).a * 0.4;
      }
      float glowHalo = clamp(glowSum / 12.0, 0.0, 1.0);

      // 2. Stroke / Hollow Outline Calculation (_OutlineThickness = 0.012)
      float edgeSum = 0.0;
      edgeSum += texture2D(uTex, uv + vec2( 0.012, 0.0)).a;
      edgeSum += texture2D(uTex, uv + vec2(-0.012, 0.0)).a;
      edgeSum += texture2D(uTex, uv + vec2(0.0,  0.012)).a;
      edgeSum += texture2D(uTex, uv + vec2(0.0, -0.012)).a;
      float strokeMask = clamp(abs(baseAlpha - (edgeSum * 0.25)), 0.0, 1.0);
      float textMask = max(baseAlpha, strokeMask);

      // 3. Shimmer wave traveling across horizontal UV.x
      // _ShimmerSpeed = 1.2, _ShimmerWidth = 0.15, _ShimmerIntensity = 0.8
      float shimmerPos = fract(uTime * 1.2 * 0.15);
      float shimmerDist = abs(uv.x - shimmerPos);
      float shimmerWave = smoothstep(0.15, 0.0, shimmerDist) * 0.8;

      // 4. Evaluate horizontal 4-color gradient
      vec4 gradientColor = evaluateGradient(uv.x);

      // 5. Combine outer glow, colored stroke, and hot white core
      // _GlowIntensity = 3.5, _CoreBrightness = 1.2
      vec3 outerGlowCol = gradientColor.rgb * glowHalo * 3.5 * pulse;
      vec3 strokeCol = gradientColor.rgb * textMask * 1.5;
      vec3 coreCol = vec3(1.0) * baseAlpha * 1.2 * (1.0 + shimmerWave);

      vec3 finalColor = outerGlowCol + strokeCol + coreCol;
      float finalAlpha = clamp(glowHalo * 0.8 + textMask + baseAlpha, 0.0, 1.0);

      // Premultiplied alpha output for accurate additive bloom against dark page background
      gl_FragColor = vec4(finalColor, finalAlpha);
    }
  `;

  function createShader(type, src) {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
      console.error('Shader compile error:', gl.getShaderInfoLog(s));
      gl.deleteShader(s);
      return null;
    }
    return s;
  }

  const vs = createShader(gl.VERTEX_SHADER, vsSource);
  const fs = createShader(gl.FRAGMENT_SHADER, fsSource);
  if (!vs || !fs) {
    showFallback();
    return;
  }

  const program = gl.createProgram();
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('Program link error:', gl.getProgramInfoLog(program));
    showFallback();
    return;
  }
  gl.useProgram(program);

  // Fullscreen quad buffer
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
    -1, -1,
     1, -1,
    -1,  1,
    -1,  1,
     1, -1,
     1,  1
  ]), gl.STATIC_DRAW);

  const aPos = gl.getAttribLocation(program, 'aPos');
  gl.enableVertexAttribArray(aPos);
  gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

  const uTex = gl.getUniformLocation(program, 'uTex');
  const uTime = gl.getUniformLocation(program, 'uTime');

  // Texture setup
  const texture = gl.createTexture();
  const img = new Image();
  img.onload = () => {
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);

    let startTime = performance.now();
    function render(time) {
      const elapsed = (time - startTime) * 0.001;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.useProgram(program);
      gl.uniform1i(uTex, 0);
      gl.uniform1f(uTime, elapsed);
      gl.drawArrays(gl.TRIANGLES, 0, 6);

      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
  };

  img.onerror = () => {
    console.warn('Failed to load mask image, loading external asset...');
    img.src = 'assets/game-logo-mask.png?v=0.4.1';
  };

  // Use embedded data URI for zero-latency, zero-CORS instant load
  img.src = LOGO_MASK_BASE64;

  // Interactive 3D mouse parallax tilt (desktop) & click surge
  if (container) {
    container.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = (-y / rect.height) * 8;
      const rotateY = (x / rect.width) * 8;
      container.style.transform = `perspective(700px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale(1.02)`;
    });

    container.addEventListener('mouseleave', () => {
      container.style.transform = '';
    });

    container.addEventListener('click', () => {
      container.style.transform = 'scale(1.05)';
      setTimeout(() => {
        container.style.transform = '';
      }, 260);
    });
  }
}

// ==========================================
// 5. INITIALIZATION ON DOM READY
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

  // Initialize non-intrusive subscription HUD toast
  initFeedToast();

  // Initialize real-time in-game WebGL shader logo
  initHeroLogoShader();
});
