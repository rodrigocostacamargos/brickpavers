// Contacts by language (from the business card)
const CONTACTS = {
  en: { name: "Raphael",         phone: "4079948574", pretty: "407-994-8574" },
  pt: { name: "Fabio Guimaraes", phone: "3213147384", pretty: "321-314-7384" },
  es: { name: "Ana Paula",       phone: "3212404024", pretty: "321-240-4024" },
};

const T = {
  en: {
    nav_area: "Service area",
    area_title: "Service area", area_sub: "We serve Central Florida, including:",
    area_note: "And nearby areas. Ask us if you're not sure.",
    hours_label: "Hours", hours_val: "Mon–Sat, 8 AM – 6 PM",
    title: "Brickpavers | Paver Repair, Sealing & Pool Decks in Central Florida",
    nav_services: "Services", nav_gallery: "Our Work", nav_contact: "Contact",
    hero_eyebrow: "CFA Business LLC · Central Florida",
    hero_title: "Brick Pavers done right: repair, sealing & pool decks.",
    hero_lead: "We bring driveways, patios and pool decks back to life. Free quotes, and we speak English, Português and Español.",
    cta_call: "Call now", cta_quote: "Get a free quote",
    nav_quote: "Free quote",
    hero_t1: "Brick Pavers done right:",
    hero_t2: "repair, sealing & pool decks.",
    aria_prev: "Previous photo",
    aria_next: "Next photo",
    aria_layers: "Cross-section of a paver installation",
    layer1: "Interlocking pavers",
    layer2: "Bedding sand",
    layer3: "Compacted rock base",
    layer4: "Compacted soil",
    base_title: "Built on a solid base",
    base_p: "A paver surface is only as good as what is underneath it: compacted soil, a compacted rock base, a thin layer of bedding sand, then interlocking pavers held in place by edge restraint. That is how driveways and pool decks stay level for years.",
    services_title: "Our services",
    s1_t: "Paver repair", s1_d: "Sunken, shifted or stained pavers? We level, re-lay and restore them.",
    s2_t: "Sealing", s2_d: "Protect your pavers from sun, rain and stains and bring back the color.",
    s3_t: "Pool decks", s3_d: "Pavers and travertine for a safe, beautiful, cool-to-the-touch deck.",
    s4_t: "Driveways", s4_d: "New driveways, walkways and borders that boost your curb appeal.",
    s5_t: "Pressure washing", s5_d: "Remove dirt, algae and oil from pavers, concrete and driveways.",
    s6_t: "Patios & fire pits", s6_d: "Paver patios and fire pits for outdoor living.",
    s7_t: "Retaining walls & borders", s7_d: "Paver retaining walls, planters and curbing for your landscaping.",
    s8_t: "Artificial turf", s8_d: "Low-maintenance artificial turf for yards and side areas.",
    gallery_title: "Our work", gallery_sub: "Real projects completed by our team. Tap a photo to enlarge.",
    g1: "Gray paver driveway", g2: "Paver pool deck", g3: "Travertine pool deck with spa", g4: "Red paver driveway",
    g5: "Paver patio with border", g6: "Paver walkway with dark border", g7: "Gray paver driveway", g8: "Base preparation before paving",
    g9: "Paver patio with gazebo and bar",
    g10: "Paver patio with fire pit",
    g11: "Artificial turf side yard",
    g12: "Pergola, paver patio and stone fire pit",
    g13: "Landscaping with paver retaining wall",
    g14: "Paver patio with pergola",
    g15: "Paver landscape border around a palm",
    g16: "Round paver planter bed with palm",
    g17: "Travertine walkway by the pool",
    video_title: "See a paver driveway project",
    why_title: "Why Brickpavers",
    why1: "Free, no-obligation quotes",
    why2: "A team that speaks English, Português and Español",
    why3: "Proper base preparation: the secret of lasting pavers",
    why4: "One company for repair, sealing, pool decks and washing",
    contact_title: "Request your free quote",
    contact_sub: "Tell us about your project and we'll reply on WhatsApp.",
    f_name: "Name", f_service: "Service", f_city: "City / ZIP", f_msg: "Message",
    f_send: "Send via WhatsApp",
    f_hint: "Photos of the area help us quote faster. You can attach them in the WhatsApp chat.",
    wa_hello: "Hello! I'd like a free quote.",
    wa_name: "Name", wa_service: "Service", wa_city: "City/ZIP",
    footer_tag: "Repair · Sealing · Pool Decks · Driveway · Pressure Washing",
    footer_aka: "Also known as Brick on Brick",
  },
  pt: {
    nav_area: "Área atendida",
    area_title: "Área atendida", area_sub: "Atendemos a Flórida Central, incluindo:",
    area_note: "E regiões próximas. Pergunte se tiver dúvida.",
    hours_label: "Horário", hours_val: "Seg–Sáb, 8h às 18h",
    title: "Brickpavers | Reparo, Selagem e Pool Decks de Pavers na Flórida Central",
    nav_services: "Serviços", nav_gallery: "Nossos Trabalhos", nav_contact: "Contato",
    hero_eyebrow: "CFA Business LLC · Flórida Central",
    hero_title: "Brick Pavers bem feitos: reparo, selagem e pool decks.",
    hero_lead: "Devolvemos a vida a driveways, patios e pool decks. Orçamento grátis, e falamos Português, English e Español.",
    cta_call: "Ligar agora", cta_quote: "Orçamento grátis",
    nav_quote: "Orçamento grátis",
    hero_t1: "Brick Pavers bem feitos:",
    hero_t2: "reparo, selagem e pool decks.",
    aria_prev: "Foto anterior",
    aria_next: "Próxima foto",
    aria_layers: "Corte transversal de uma instalação de pavers",
    layer1: "Pavers intertravados",
    layer2: "Areia de assentamento",
    layer3: "Base de pedra compactada",
    layer4: "Solo compactado",
    base_title: "Feito sobre uma base sólida",
    base_p: "Um piso de pavers é tão bom quanto o que fica embaixo dele: solo compactado, base de pedra compactada, uma camada fina de areia de assentamento e os pavers intertravados, presos por uma contenção de borda. É assim que driveways e pool decks se mantêm nivelados por muitos anos.",
    services_title: "Nossos serviços",
    s1_t: "Reparo de pavers", s1_d: "Pavers afundados, desnivelados ou manchados? Nós nivelamos, reassentamos e restauramos.",
    s2_t: "Selagem", s2_d: "Proteja seus pavers do sol, da chuva e de manchas e devolva a cor.",
    s3_t: "Pool decks", s3_d: "Pavers e travertino para um deck seguro, bonito e fresco ao toque.",
    s4_t: "Driveways", s4_d: "Driveways, calçadas e bordas novas que valorizam a fachada.",
    s5_t: "Lavagem de alta pressão", s5_d: "Remova sujeira, algas e óleo de pavers, concreto e driveways.",
    s6_t: "Patios e fire pits", s6_d: "Patios de pavers e fire pits para curtir a área externa.",
    s7_t: "Muros e bordas", s7_d: "Muros de contenção, canteiros e bordas de pavers para o paisagismo.",
    s8_t: "Grama sintética", s8_d: "Grama sintética de baixa manutenção para quintais e laterais.",
    gallery_title: "Nossos trabalhos", gallery_sub: "Projetos reais feitos pela nossa equipe. Toque na foto para ampliar.",
    g1: "Driveway de pavers cinza", g2: "Pool deck de pavers", g3: "Pool deck de travertino com spa", g4: "Driveway de pavers vermelho",
    g5: "Patio de pavers com borda", g6: "Calçada de pavers com borda escura", g7: "Driveway de pavers cinza", g8: "Preparação da base antes da instalação",
    g9: "Patio de pavers com gazebo e bar",
    g10: "Patio de pavers com fire pit",
    g11: "Lateral da casa com grama sintética",
    g12: "Pergola, patio de pavers e fire pit de pedra",
    g13: "Paisagismo com muro de contenção de pavers",
    g14: "Patio de pavers com pergola",
    g15: "Borda de pavers ao redor de uma palmeira",
    g16: "Canteiro redondo de pavers com palmeira",
    g17: "Passarela de travertino na piscina",
    video_title: "Veja um projeto de driveway de pavers",
    why_title: "Por que a Brickpavers",
    why1: "Orçamento grátis e sem compromisso",
    why2: "Equipe que fala Português, English e Español",
    why3: "Base bem preparada: o segredo de pavers que duram",
    why4: "Uma só empresa para reparo, selagem, pool decks e lavagem",
    contact_title: "Peça seu orçamento grátis",
    contact_sub: "Conte sobre o seu projeto e respondemos pelo WhatsApp.",
    f_name: "Nome", f_service: "Serviço", f_city: "Cidade / ZIP", f_msg: "Mensagem",
    f_send: "Enviar pelo WhatsApp",
    f_hint: "Fotos do local ajudam a orçar mais rápido. Você pode anexá-las na conversa do WhatsApp.",
    wa_hello: "Olá! Gostaria de um orçamento grátis.",
    wa_name: "Nome", wa_service: "Serviço", wa_city: "Cidade/ZIP",
    footer_tag: "Reparo · Selagem · Pool Decks · Driveway · Lavagem de Alta Pressão",
    footer_aka: "Também conhecida como Brick on Brick",
  },
  es: {
    nav_area: "Área de servicio",
    area_title: "Área de servicio", area_sub: "Servimos Florida Central, incluyendo:",
    area_note: "Y zonas cercanas. Pregúntenos si tiene dudas.",
    hours_label: "Horario", hours_val: "Lun–Sáb, 8 AM – 6 PM",
    title: "Brickpavers | Reparación, Sellado y Pool Decks de Pavers en Florida Central",
    nav_services: "Servicios", nav_gallery: "Nuestros Trabajos", nav_contact: "Contacto",
    hero_eyebrow: "CFA Business LLC · Florida Central",
    hero_title: "Brick Pavers bien hechos: reparación, sellado y pool decks.",
    hero_lead: "Le devolvemos la vida a driveways, patios y pool decks. Cotización gratis, y hablamos Español, English y Português.",
    cta_call: "Llamar ahora", cta_quote: "Cotización gratis",
    nav_quote: "Cotización gratis",
    hero_t1: "Brick Pavers bien hechos:",
    hero_t2: "reparación, sellado y pool decks.",
    aria_prev: "Foto anterior",
    aria_next: "Foto siguiente",
    aria_layers: "Corte transversal de una instalación de pavers",
    layer1: "Pavers entrelazados",
    layer2: "Arena de asiento",
    layer3: "Base de piedra compactada",
    layer4: "Suelo compactado",
    base_title: "Construido sobre una base sólida",
    base_p: "Un piso de pavers es tan bueno como lo que hay debajo: suelo compactado, base de piedra compactada, una capa fina de arena de asiento y pavers entrelazados sujetos por una contención de borde. Así los driveways y pool decks se mantienen nivelados por muchos años.",
    services_title: "Nuestros servicios",
    s1_t: "Reparación de pavers", s1_d: "¿Pavers hundidos, desnivelados o manchados? Los nivelamos, reinstalamos y restauramos.",
    s2_t: "Sellado", s2_d: "Proteja sus pavers del sol, la lluvia y las manchas y recupere el color.",
    s3_t: "Pool decks", s3_d: "Pavers y travertino para un deck seguro, bonito y fresco al tacto.",
    s4_t: "Driveways", s4_d: "Driveways, caminos y bordes nuevos que realzan la fachada.",
    s5_t: "Lavado a presión", s5_d: "Elimine suciedad, algas y aceite de pavers, concreto y driveways.",
    s6_t: "Patios y fire pits", s6_d: "Patios de pavers y fire pits para disfrutar el exterior.",
    s7_t: "Muros y bordes", s7_d: "Muros de contención, jardineras y bordes de pavers para su paisajismo.",
    s8_t: "Césped artificial", s8_d: "Césped artificial de bajo mantenimiento para patios y costados.",
    gallery_title: "Nuestros trabajos", gallery_sub: "Proyectos reales de nuestro equipo. Toque una foto para ampliarla.",
    g1: "Driveway de pavers gris", g2: "Pool deck de pavers", g3: "Pool deck de travertino con spa", g4: "Driveway de pavers rojo",
    g5: "Patio de pavers con borde", g6: "Camino de pavers con borde oscuro", g7: "Driveway de pavers gris", g8: "Preparación de la base antes de instalar",
    g9: "Patio de pavers con gazebo y bar",
    g10: "Patio de pavers con fire pit",
    g11: "Costado de la casa con césped artificial",
    g12: "Pérgola, patio de pavers y fire pit de piedra",
    g13: "Paisajismo con muro de contención de pavers",
    g14: "Patio de pavers con pérgola",
    g15: "Borde de pavers alrededor de una palmera",
    g16: "Jardinera redonda de pavers con palmera",
    g17: "Pasarela de travertino junto a la piscina",
    video_title: "Vea un proyecto de driveway de pavers",
    why_title: "Por qué Brickpavers",
    why1: "Cotización gratis y sin compromiso",
    why2: "Equipo que habla Español, English y Português",
    why3: "Base bien preparada: el secreto de pavers duraderos",
    why4: "Una sola empresa para reparación, sellado, pool decks y lavado",
    contact_title: "Pida su cotización gratis",
    contact_sub: "Cuéntenos sobre su proyecto y le respondemos por WhatsApp.",
    f_name: "Nombre", f_service: "Servicio", f_city: "Ciudad / ZIP", f_msg: "Mensaje",
    f_send: "Enviar por WhatsApp",
    f_hint: "Las fotos del lugar nos ayudan a cotizar más rápido. Puede adjuntarlas en el chat de WhatsApp.",
    wa_hello: "¡Hola! Quisiera una cotización gratis.",
    wa_name: "Nombre", wa_service: "Servicio", wa_city: "Ciudad/ZIP",
    footer_tag: "Reparación · Sellado · Pool Decks · Driveway · Lavado a Presión",
    footer_aka: "También conocida como Brick on Brick",
  },
};

let lang = "en";
try {
  const saved = localStorage.getItem("lang");
  if (saved && T[saved]) lang = saved;
  else {
    const nav = (navigator.language || "en").slice(0, 2);
    if (T[nav]) lang = nav;
  }
} catch (_) {}

function apply() {
  const t = T[lang], c = CONTACTS[lang];
  document.documentElement.lang = lang;
  document.title = t.title;
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t[el.dataset.i18n]; });
  document.querySelectorAll("#serviceSel option").forEach(o => { o.textContent = t[o.value]; });
  document.querySelectorAll("#galleryGrid .g").forEach(b => {
    b.querySelector("img").alt = t[b.dataset.altKey];
  });
  document.querySelectorAll(".lang button").forEach(b =>
    b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
  document.querySelectorAll(".person").forEach(p =>
    p.classList.toggle("active", p.dataset.langFor === lang));
  // Main call buttons follow the language
  document.querySelectorAll(".js-call").forEach(a => { a.href = "tel:+1" + c.phone; });
  document.querySelectorAll(".js-phone").forEach(el => { el.textContent = c.pretty; });
  document.querySelectorAll("[data-i18n-aria]").forEach(el => el.setAttribute("aria-label", t[el.dataset.i18nAria]));
}

document.querySelectorAll(".lang button").forEach(b => b.addEventListener("click", () => {
  lang = b.dataset.lang;
  try { localStorage.setItem("lang", lang); } catch (_) {}
  apply();
}));

// Quote form -> WhatsApp message to the contact of the current language
document.getElementById("quoteForm").addEventListener("submit", e => {
  e.preventDefault();
  const f = new FormData(e.target), t = T[lang], c = CONTACTS[lang];
  const lines = [
    t.wa_hello,
    `${t.wa_name}: ${f.get("name")}`,
    `${t.wa_service}: ${t[f.get("service")]}`,
    f.get("city") ? `${t.wa_city}: ${f.get("city")}` : "",
    f.get("msg") || "",
  ].filter(Boolean);
  window.open(`https://wa.me/1${c.phone}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");
});

// Lightbox
const lb = document.getElementById("lightbox"), lbImg = lb.querySelector("img");
document.getElementById("galleryGrid").addEventListener("click", e => {
  const b = e.target.closest(".g"); if (!b) return;
  lbImg.src = b.dataset.src; lbImg.alt = b.querySelector("img").alt; lb.hidden = false;
});
lb.addEventListener("click", () => { lb.hidden = true; });
document.addEventListener("keydown", e => { if (e.key === "Escape") lb.hidden = true; });

// Hero carousel (autoplay pauses on hover/focus; off for reduced motion)
(function () {
  const box = document.getElementById("carousel"); if (!box) return;
  const slides = [...box.querySelectorAll(".slide")]; let i = 0, timer = null;
  const show = n => { slides[i].classList.remove("active"); i = (n + slides.length) % slides.length; slides[i].classList.add("active"); };
  box.querySelector(".next").addEventListener("click", () => show(i + 1));
  box.querySelector(".prev").addEventListener("click", () => show(i - 1));
  const play = () => { if (matchMedia("(prefers-reduced-motion: reduce)").matches) return; stop(); timer = setInterval(() => show(i + 1), 5000); };
  const stop = () => { if (timer) clearInterval(timer); timer = null; };
  ["mouseenter", "focusin"].forEach(e => box.addEventListener(e, stop));
  ["mouseleave", "focusout"].forEach(e => box.addEventListener(e, play));
  play();
})();

apply();
