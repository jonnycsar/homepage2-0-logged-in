/* ============================================================================
   iGraal DESKTOP — centralized, localizable content.
   ----------------------------------------------------------------------------
   PMs / designers: edit copy and data HERE (one place) instead of hunting
   through the components. The template renders whichever language the Tweaks
   panel selects.

   Brand names (adidas, SHEIN, …) are proper nouns — shared across all
   languages. Only the surrounding labels are translated.
   ============================================================================ */
(function () {
  // ---- Language-independent data -------------------------------------------
  const BEST_STORES = [
    'adidas', 'AliExpress', 'Atida | Mifarma', 'Barceló', 'Casa del Libro', 'Cash Converters', 'Decathlon', 'Druni', 'Dyson', 'eBay',
    'Hoteles.com', 'Iberdrola', 'IKEA', 'Kiwoko', 'Mango Outlet', 'MediaMarkt', 'Miravia', 'Movistar Plus', 'N26', 'Octopus Energy',
    'PcComponentes', 'Primor', 'Privé by Zalando', 'Samsung', 'SHEIN', 'Singularu', 'Temu', 'Unicaja', 'UNIQLO', 'Just Eat',
  ];

  // Account dropdown — icon per row (paired by index with the per-language labels).
  const ACCOUNT_ICONS = [
    'clock', 'credit-card-02', 'user-01', 'gift-01', 'user-plus-01', 'plus-square',
    'heart', 'message-square-01', 'mail-01', 'settings-01', 'help-circle',
  ];

  // Suggested brands — name/rate/coupons shared; the meta line is built per language.
  const SUGGESTED = [
    { name: 'Primor',     rate: '1.5%', upTo: false, coupons: 12 },
    { name: 'SHEIN',      rate: '7.5%', upTo: true,  coupons: 9 },
    { name: 'MediaMarkt', rate: '3.5%', upTo: true,  coupons: 10 },
    { name: 'AliExpress', rate: '1%',   upTo: false, coupons: 13 },
    { name: 'Barceló',    rate: '4%',   upTo: false, coupons: 10 },
    { name: 'Temu',       rate: '15%',  upTo: true,  coupons: 10 },
    { name: 'IKEA',       rate: '2%',   upTo: false, coupons: 9 },
    { name: 'Miravia',    rate: '10%',  upTo: true,  coupons: 9 },
  ];

  // Which top-nav slots open which menu (same across languages; labels differ).
  const NAV_KEYS = ['stores', 'categories', 'deal', 'worldcup', 'giftcards', 'topcodes', 'more'];

  // ---- Per-language strings -------------------------------------------------
  const L = {
    en: {
      ui: {
        searchPlaceholder: 'Search 2,200 stores', suggestedBrands: 'Suggested brands',
        available: 'Available', pending: 'Pending', login: 'Log in', signup: 'Sign up',
        logout: 'Log out', seeAll: 'See all', home: 'Home', myAccount: 'My account',
      },
      navLabels: ['Best stores', 'Popular categories', 'Deal of the day', 'World Cup 2026 deals', 'Gift cards', 'Top codes', 'More'],
      suggestedMeta: (b) => `${b.upTo ? 'Up to ' : ''}${b.rate} cashback · ${b.coupons} coupons`,
      categories: [
        { label: 'Travel & transport', children: ['Hotels & accommodation', 'Flights', 'Car rental', 'Trains & buses'] },
        { label: 'Electronics', children: ['Computing', 'Electronic accessories', 'Phones & tablets'] },
        { label: 'Gaming' },
        { label: 'Fashion & accessories', children: ['Women', 'Men', 'Kids', 'Shoes', 'Bags & accessories'] },
        { label: 'TV & internet' },
        { label: 'Home & garden', children: ['Furniture', 'Decor', 'Kitchen', 'DIY & tools'] },
        { label: 'Garden' },
        { label: 'Beauty & health', children: ['Skincare', 'Make-up', 'Fragrances', 'Pharmacy'] },
        { label: 'Banking & insurance' },
        { label: 'Sports', children: ['Fitness', 'Outdoor', 'Cycling', 'Team sports'] },
        { label: 'Culture & entertainment', children: ['Books', 'Music & films', 'Events & tickets'] },
        { label: 'Family & kids' },
        { label: 'Food', children: ['Food delivery', 'Groceries', 'Wine & spirits'] },
        { label: 'Supermarkets & gifts' },
        { label: 'Foreign brands' },
        { label: 'Cars & motorbikes', children: ['New & used cars', 'Parts & accessories', 'Insurance'] },
        { label: 'Other services', children: ['Telecom & energy', 'Subscriptions', 'Pets'] },
      ],
      moreLinks: ['How cashback works', 'Browser extension', 'Gift cards', 'Refer a friend', 'Blog', 'Help centre'],
      accountLabels: ['My balance', 'My payments', 'My profile', 'My gift cards', 'Invitations', 'iGraal Bonus', 'My favorites', 'My reviews', 'Contact preferences', 'Account & security', 'Customer support'],
      footer: {
        tagline: 'Cashback that really pays off. Save on every purchase.',
        helpTitle: 'Help', help: ['FAQ', 'Talk to us', 'Partner with us'],
        igraalTitle: 'iGraal', igraal: ['Top codes', 'iGraal extension', 'Gift cards', 'Work with us'],
        copyright: '© 2026 iGraal. All rights reserved.',
        legal: ['T&C', 'Privacy', 'Legal Notice', 'Cookie Policy', 'Manage cookies'],
      },
      body: { hero: 'hero / banner', card: 'card', featured: 'featured offers', sidebar: 'sidebar' },
    },

    es: {
      ui: {
        searchPlaceholder: 'Busca tu tienda favorita', suggestedBrands: 'Marcas sugeridas',
        available: 'Disponible', pending: 'Pendiente', login: 'Iniciar sesión', signup: 'Regístrate',
        logout: 'Cerrar sesión', seeAll: 'Ver todo', home: 'Inicio', myAccount: 'Mi cuenta',
      },
      navLabels: ['Mejores tiendas', 'Categorías populares', 'Selección del día', 'Ofertas Mundial 2026', 'Tarjetas regalo', 'Top códigos', 'Ver más'],
      suggestedMeta: (b) => `${b.upTo ? 'Hasta ' : ''}${b.rate} de cashback · ${b.coupons} cupones`,
      categories: [
        { label: 'Viajes y transporte', children: ['Hoteles y alojamiento', 'Vuelos', 'Alquiler de coches', 'Trenes y autobuses'] },
        { label: 'Electrónica', children: ['Informática', 'Accesorios electrónicos', 'Telefonía y tablets'] },
        { label: 'Gaming' },
        { label: 'Moda y accesorios', children: ['Mujer', 'Hombre', 'Niños', 'Calzado', 'Bolsos y accesorios'] },
        { label: 'TV e internet' },
        { label: 'Hogar y jardín', children: ['Muebles', 'Decoración', 'Cocina', 'Bricolaje y herramientas'] },
        { label: 'Jardín' },
        { label: 'Belleza y salud', children: ['Cuidado de la piel', 'Maquillaje', 'Perfumes', 'Farmacia'] },
        { label: 'Bancos y seguros' },
        { label: 'Deporte', children: ['Fitness', 'Aire libre', 'Ciclismo', 'Deportes de equipo'] },
        { label: 'Cultura y entretenimiento', children: ['Libros', 'Música y películas', 'Eventos y entradas'] },
        { label: 'Familia y niños' },
        { label: 'Alimentación', children: ['Comida a domicilio', 'Supermercado', 'Vinos y licores'] },
        { label: 'Supermercados y regalos' },
        { label: 'Marcas extranjeras' },
        { label: 'Coches y motos', children: ['Coches nuevos y usados', 'Piezas y accesorios', 'Seguros'] },
        { label: 'Otros servicios', children: ['Telecom y energía', 'Suscripciones', 'Mascotas'] },
      ],
      moreLinks: ['Cómo funciona el cashback', 'Extensión de navegador', 'Tarjetas regalo', 'Recomienda a un amigo', 'Blog', 'Centro de ayuda'],
      accountLabels: ['Mi saldo', 'Mis pagos', 'Mi perfil', 'Mis tarjetas regalo', 'Invitaciones', 'iGraal Bonus', 'Mis favoritos', 'Mis opiniones', 'Preferencias de contacto', 'Cuenta y seguridad', 'Atención al cliente'],
      footer: {
        tagline: 'Cashback que de verdad merece la pena. Ahorra en cada compra.',
        helpTitle: 'Ayuda', help: ['FAQ', 'Habla con nosotros', 'Colabora con nosotros'],
        igraalTitle: 'iGraal', igraal: ['Top códigos', 'Extensión iGraal', 'Tarjetas regalo', 'Trabaja con nosotros'],
        copyright: '© 2026 iGraal. Todos los derechos reservados.',
        legal: ['Términos', 'Privacidad', 'Aviso legal', 'Política de cookies', 'Gestionar cookies'],
      },
      body: { hero: 'cabecera / banner', card: 'tarjeta', featured: 'ofertas destacadas', sidebar: 'barra lateral' },
    },

    fr: {
      ui: {
        searchPlaceholder: 'Cherchez votre marchand favori', suggestedBrands: 'Marques suggérées',
        available: 'Disponible', pending: 'En attente', login: 'Connexion', signup: 'Inscription',
        logout: 'Déconnexion', seeAll: 'Tout voir', home: 'Accueil', myAccount: 'Mon compte',
      },
      navLabels: ['Meilleures boutiques', 'Catégories populaires', 'Offre du jour', 'Offres Coupe du monde 2026', 'Cartes cadeaux', 'Top codes', 'Plus'],
      suggestedMeta: (b) => `${b.upTo ? "Jusqu'à " : ''}${b.rate} de cashback · ${b.coupons} codes`,
      categories: [
        { label: 'Voyage et transport', children: ['Hôtels et hébergement', 'Vols', 'Location de voiture', 'Trains et bus'] },
        { label: 'Électronique', children: ['Informatique', 'Accessoires électroniques', 'Téléphonie et tablettes'] },
        { label: 'Jeux vidéo' },
        { label: 'Mode et accessoires', children: ['Femme', 'Homme', 'Enfants', 'Chaussures', 'Sacs et accessoires'] },
        { label: 'TV et internet' },
        { label: 'Maison et jardin', children: ['Meubles', 'Décoration', 'Cuisine', 'Bricolage et outils'] },
        { label: 'Jardin' },
        { label: 'Beauté et santé', children: ['Soin de la peau', 'Maquillage', 'Parfums', 'Pharmacie'] },
        { label: 'Banque et assurance' },
        { label: 'Sport', children: ['Fitness', 'Plein air', 'Cyclisme', "Sports d'équipe"] },
        { label: 'Culture et loisirs', children: ['Livres', 'Musique et films', 'Événements et billets'] },
        { label: 'Famille et enfants' },
        { label: 'Alimentation', children: ['Livraison de repas', 'Courses', 'Vins et spiritueux'] },
        { label: 'Supermarchés et cadeaux' },
        { label: 'Marques étrangères' },
        { label: 'Auto et moto', children: ['Voitures neuves et occasion', 'Pièces et accessoires', 'Assurance'] },
        { label: 'Autres services', children: ['Télécom et énergie', 'Abonnements', 'Animaux'] },
      ],
      moreLinks: ['Comment fonctionne le cashback', 'Extension navigateur', 'Cartes cadeaux', 'Parrainer un ami', 'Blog', "Centre d'aide"],
      accountLabels: ['Mon solde', 'Mes paiements', 'Mon profil', 'Mes cartes cadeaux', 'Invitations', 'iGraal Bonus', 'Mes favoris', 'Mes avis', 'Préférences de contact', 'Compte et sécurité', 'Service client'],
      footer: {
        tagline: 'Un cashback qui rapporte vraiment. Économisez sur chaque achat.',
        helpTitle: 'Aide', help: ['FAQ', 'Contactez-nous', 'Devenir partenaire'],
        igraalTitle: 'iGraal', igraal: ['Top codes', 'Extension iGraal', 'Cartes cadeaux', 'Travailler avec nous'],
        copyright: '© 2026 iGraal. Tous droits réservés.',
        legal: ['CGU', 'Confidentialité', 'Mentions légales', 'Politique cookies', 'Gérer les cookies'],
      },
      body: { hero: 'héros / bannière', card: 'carte', featured: 'offres en vedette', sidebar: 'barre latérale' },
    },

    de: {
      ui: {
        searchPlaceholder: 'Suche deinen Lieblingsshop', suggestedBrands: 'Vorgeschlagene Shops',
        available: 'Verfügbar', pending: 'Ausstehend', login: 'Anmelden', signup: 'Registrieren',
        logout: 'Abmelden', seeAll: 'Alle ansehen', home: 'Startseite', myAccount: 'Mein Konto',
      },
      navLabels: ['Top-Shops', 'Beliebte Kategorien', 'Angebot des Tages', 'WM-2026-Angebote', 'Geschenkkarten', 'Top-Gutscheine', 'Mehr'],
      suggestedMeta: (b) => `${b.upTo ? 'Bis zu ' : ''}${b.rate} Cashback · ${b.coupons} Gutscheine`,
      categories: [
        { label: 'Reisen & Transport', children: ['Hotels & Unterkünfte', 'Flüge', 'Mietwagen', 'Bahn & Bus'] },
        { label: 'Elektronik', children: ['Computer', 'Elektronik-Zubehör', 'Handys & Tablets'] },
        { label: 'Gaming' },
        { label: 'Mode & Accessoires', children: ['Damen', 'Herren', 'Kinder', 'Schuhe', 'Taschen & Accessoires'] },
        { label: 'TV & Internet' },
        { label: 'Haus & Garten', children: ['Möbel', 'Deko', 'Küche', 'Heimwerken & Werkzeug'] },
        { label: 'Garten' },
        { label: 'Beauty & Gesundheit', children: ['Hautpflege', 'Make-up', 'Parfüm', 'Apotheke'] },
        { label: 'Banken & Versicherungen' },
        { label: 'Sport', children: ['Fitness', 'Outdoor', 'Radfahren', 'Mannschaftssport'] },
        { label: 'Kultur & Unterhaltung', children: ['Bücher', 'Musik & Filme', 'Events & Tickets'] },
        { label: 'Familie & Kinder' },
        { label: 'Lebensmittel', children: ['Essenslieferung', 'Lebensmittel', 'Wein & Spirituosen'] },
        { label: 'Supermärkte & Geschenke' },
        { label: 'Ausländische Marken' },
        { label: 'Auto & Motorrad', children: ['Neu- & Gebrauchtwagen', 'Teile & Zubehör', 'Versicherung'] },
        { label: 'Weitere Services', children: ['Telekom & Energie', 'Abos', 'Haustiere'] },
      ],
      moreLinks: ['So funktioniert Cashback', 'Browser-Erweiterung', 'Geschenkkarten', 'Freunde werben', 'Blog', 'Hilfecenter'],
      accountLabels: ['Mein Guthaben', 'Meine Zahlungen', 'Mein Profil', 'Meine Geschenkkarten', 'Einladungen', 'iGraal Bonus', 'Meine Favoriten', 'Meine Bewertungen', 'Kontakteinstellungen', 'Konto & Sicherheit', 'Kundenservice'],
      footer: {
        tagline: 'Cashback, das sich wirklich lohnt. Spare bei jedem Einkauf.',
        helpTitle: 'Hilfe', help: ['FAQ', 'Kontakt', 'Partner werden'],
        igraalTitle: 'iGraal', igraal: ['Top-Gutscheine', 'iGraal-Erweiterung', 'Geschenkkarten', 'Jobs bei uns'],
        copyright: '© 2026 iGraal. Alle Rechte vorbehalten.',
        legal: ['AGB', 'Datenschutz', 'Impressum', 'Cookie-Richtlinie', 'Cookies verwalten'],
      },
      body: { hero: 'Hero / Banner', card: 'Karte', featured: 'Top-Angebote', sidebar: 'Seitenleiste' },
    },

    pl: {
      ui: {
        searchPlaceholder: 'Szukaj ulubionego sklepu', suggestedBrands: 'Polecane marki',
        available: 'Dostępne', pending: 'Oczekujące', login: 'Zaloguj się', signup: 'Zarejestruj się',
        logout: 'Wyloguj się', seeAll: 'Zobacz wszystko', home: 'Strona główna', myAccount: 'Moje konto',
      },
      navLabels: ['Najlepsze sklepy', 'Popularne kategorie', 'Oferta dnia', 'Oferty MŚ 2026', 'Karty podarunkowe', 'Top kody', 'Więcej'],
      suggestedMeta: (b) => `${b.upTo ? 'Do ' : ''}${b.rate} cashbacku · ${b.coupons} kuponów`,
      categories: [
        { label: 'Podróże i transport', children: ['Hotele i noclegi', 'Loty', 'Wynajem samochodów', 'Pociągi i autobusy'] },
        { label: 'Elektronika', children: ['Komputery', 'Akcesoria elektroniczne', 'Telefony i tablety'] },
        { label: 'Gaming' },
        { label: 'Moda i akcesoria', children: ['Kobiety', 'Mężczyźni', 'Dzieci', 'Obuwie', 'Torby i akcesoria'] },
        { label: 'TV i internet' },
        { label: 'Dom i ogród', children: ['Meble', 'Dekoracje', 'Kuchnia', 'Majsterkowanie i narzędzia'] },
        { label: 'Ogród' },
        { label: 'Uroda i zdrowie', children: ['Pielęgnacja skóry', 'Makijaż', 'Perfumy', 'Apteka'] },
        { label: 'Banki i ubezpieczenia' },
        { label: 'Sport', children: ['Fitness', 'Outdoor', 'Kolarstwo', 'Sporty drużynowe'] },
        { label: 'Kultura i rozrywka', children: ['Książki', 'Muzyka i filmy', 'Wydarzenia i bilety'] },
        { label: 'Rodzina i dzieci' },
        { label: 'Jedzenie', children: ['Dostawa jedzenia', 'Zakupy spożywcze', 'Wina i alkohole'] },
        { label: 'Supermarkety i prezenty' },
        { label: 'Marki zagraniczne' },
        { label: 'Samochody i motocykle', children: ['Nowe i używane auta', 'Części i akcesoria', 'Ubezpieczenia'] },
        { label: 'Inne usługi', children: ['Telekom i energia', 'Subskrypcje', 'Zwierzęta'] },
      ],
      moreLinks: ['Jak działa cashback', 'Rozszerzenie do przeglądarki', 'Karty podarunkowe', 'Poleć znajomemu', 'Blog', 'Centrum pomocy'],
      accountLabels: ['Moje saldo', 'Moje płatności', 'Mój profil', 'Moje karty podarunkowe', 'Zaproszenia', 'iGraal Bonus', 'Moje ulubione', 'Moje opinie', 'Preferencje kontaktu', 'Konto i bezpieczeństwo', 'Obsługa klienta'],
      footer: {
        tagline: 'Cashback, który naprawdę się opłaca. Oszczędzaj przy każdym zakupie.',
        helpTitle: 'Pomoc', help: ['FAQ', 'Napisz do nas', 'Zostań partnerem'],
        igraalTitle: 'iGraal', igraal: ['Top kody', 'Rozszerzenie iGraal', 'Karty podarunkowe', 'Pracuj z nami'],
        copyright: '© 2026 iGraal. Wszelkie prawa zastrzeżone.',
        legal: ['Regulamin', 'Prywatność', 'Nota prawna', 'Polityka cookies', 'Zarządzaj cookies'],
      },
      body: { hero: 'baner / hero', card: 'karta', featured: 'wyróżnione oferty', sidebar: 'panel boczny' },
    },
  };

  // ---- Assemble: fold shared data into each language -----------------------
  const LANGS = {};
  Object.keys(L).forEach((code) => {
    const t = L[code];
    const nav = t.navLabels.map((label, i) => {
      const key = NAV_KEYS[i];
      let menu = null;
      if (key === 'stores') menu = { type: 'stores', items: BEST_STORES };
      else if (key === 'categories') menu = { type: 'categories', items: t.categories };
      else if (key === 'more') menu = { type: 'links', items: t.moreLinks };
      return { label, menu, drop: !!menu };
    });
    LANGS[code] = {
      ui: t.ui,
      nav,
      categories: t.categories,
      suggested: SUGGESTED.map((b) => ({ name: b.name, meta: t.suggestedMeta(b) })),
      account: t.accountLabels.map((label, i) => ({ label, icon: ACCOUNT_ICONS[i] })),
      footer: t.footer,
      body: t.body,
    };
  });

  window.IGRAAL_DESKTOP_CONTENT = LANGS;
  window.IGRAAL_LANGS = [
    { code: 'en', label: 'EN' }, { code: 'es', label: 'ES' }, { code: 'fr', label: 'FR' }, { code: 'de', label: 'DE' }, { code: 'pl', label: 'PL' },
  ];

  // Nalu brands available in this kit (logo = sprite id, null → wordmark).
  // Switching brand re-skins the whole kit via data-brand on <html>.
  if (!window.BRANDS) window.BRANDS = [
    { key: 'igraal',    label: 'iGraal',    logo: 'igraal-landscape',  word: 'iGraal' },
    { key: 'shoop',     label: 'Shoop',     logo: 'shoop-landscape',   word: 'Shoop' },
    { key: 'coupons',   label: 'Coupons',   logo: 'coupons-landscape', word: 'Coupons' },
    { key: 'focus',     label: 'Focus',     logo: null,                word: 'Focus' },
    { key: 'dailymail', label: 'DailyMail', logo: null,                word: 'DailyMail' },
    { key: 'cuponation',label: 'Cuponation',logo: null,                word: 'Cuponation' },
    { key: 'radins',    label: 'Radins',    logo: null,                word: 'Radins' },
    { key: 'elpais',    label: 'El País',   logo: null,                word: 'El País' },
    { key: 'gazzetta',  label: 'Gazzetta',  logo: null,                word: 'Gazzetta' },
    { key: 'cnn',       label: 'CNN',       logo: null,                word: 'CNN' },
  ];
})();
