// ── DATA ─────────────────────────────────────────────────────────────────────

// ── DATA ── VERSIÓN SÚPER SEXY ────────────────────────────────────────────────
let misterioActivo = false;      // Modo misterio activado
let tiradaPendiente = null;      // Tirada guardada para revelar paso a paso
let pasoActual = 0;              // 0=quién, 1=acción, 2=zona, 3=condición, 4=tiempo

const DATA = {
  es: {
    suave: {
      acciones: [
        "Besa con lengua, despacio, saboreando cada centímetro",
        "Muerde muy suave la piel y luego soplas para refrescar",
        "Acaricia con las yemas de los dedos como si fuera pluma",
        "Sopla aire caliente justo antes de pegar un beso húmedo",
        "Susurra al oído algo sucio y muy pegadito, sin dejar de rozar",
        "Pasa la lengua plana desde abajo hacia arriba, muy lento",
        "Frota tu nariz contra la suya y luego tus labios, sin prisa",
        "Da un beso con succión suave, dejando un poco de saliva",
        "Muerde el lóbulo de la oreja y tira hacia atrás con cariño",
        "Traza un camino de besos ardientes desde el cuello hasta el ombligo",
        "Aprieta y suelta la carne con las manos, como amasando",
        "Lame como si fuera un helado que se derrite, con la puntita",
        "Muerde y arrastra la piel con los dientes, sin hacer daño",
        "Haz cosquillas con la lengua en la zona más sensible",
        "Chupa un momento y luego sopla frío para provocar escalofríos",
        "Acaricia con el dorso de la mano, muy suave, por los costados",
        "Muerde muy cerquita de la zona caliente, sólo amagando",
        "Frota tus labios mojados contra los suyos, sin abrir la boca",
        "Muerde y deja una pequeña marca rosa que dure unos minutos",
        "Pasa la uña muy suave por la piel, sin arañar, sólo rozando"
      ],
      zonas: [
        "el cuello, justo donde late la vena",
        "la oreja y detrás de ella",
        "la nuca, donde termina el cabello",
        "la clavícula, esa parte huesuda",
        "el ombligo, con la puntita de la lengua",
        "la cadera, justo donde empieza el pantalón",
        "el muslo interno, muy cerca de la entrepierna",
        "la muñeca, donde se siente el pulso",
        "detrás de la rodilla, esa parte tan suave",
        "el pezón, pero sólo con los labios",
        "la espalda baja, justo antes del culo",
        "el vientre, haciendo círculos",
        "las costillas, subiendo y bajando",
        "el hueso de la cadera, mordiéndolo muy suave",
        "el inicio de la entrepierna, sólo rozando"
      ]
    },
    extremo: {
      neutras: [
        "Lame con toda la lengua ancha, apretando contra la piel",
        "Chupa con fuerza como si quisieras dejar un chupetón morado",
        "Muerde fuerte y luego pasa la lengua consolando",
        "Pasa la lengua de arriba abajo sin parar, muy rápido",
        "Golpetea con la lengua rapidísimo, como un colibrí",
        "Presiona la boca bien abierta y frota con los labios húmedos",
        "Sopla y lame al mismo tiempo, alternando",
        "Hace círculos con la punta de la lengua cada vez más pequeños",
        "Muerde la piel, tira hacia atrás y suelta de golpe",
        "Usa sólo la punta de la lengua, muy tiesa, para dar puntazos",
        "Deja un chupetón bien marcado, de esos que duran días",
        "Pasa la lengua como si fuera un pincel mojado",
        "Succiona y muerde alternando: chupa, muerde, chupa",
        "Frota tus genitales mojados contra cualquier parte de su cuerpo",
        "Masajea con la palma caliente, apretando con fuerza",
        "Pellizca el pezón y tira suave mientras lo lames",
        "Hace espirales desde afuera hacia el centro con la lengua",
        "Chupa con ritmo de subida y bajada, como si fuera una polla",
        "Muerde a lo largo de todo el recorrido, dejando un rastro",
        "Lame desde abajo hasta arriba lentísimo, como con deseo"
      ],
      especificas: [
        // Ella a él
        { a: "Mete la verga hasta el fondo de su garganta, hasta ahogarse un poco", z: "la garganta", actor: "ella" },
        { a: "Chupa sólo la cabeza mientras lo miras fijo a los ojos", z: "el glande", actor: "ella" },
        { a: "Lame los huevos uno por uno, bien despacio, y luego te los metes a la boca", z: "los testículos", actor: "ella" },
        { a: "Masturba con la mano bien apretada, girando la muñeca al llegar arriba", z: "el pene", actor: "ella" },
        { a: "Besa la punta con labios muy húmedos, sólo la puntita, como un pico", z: "el glande", actor: "ella" },
        { a: "Masajea los huevos con una mano mientras chupas la cabeza con la otra", z: "los testículos", actor: "ella" },
        { a: "Pasa la lengua por todo el tronco, desde la base hasta la punta, muy lento", z: "el pene", actor: "ella" },
        // Él a ella
        { a: "Hace círculos con la lengua alrededor del clítoris, sin tocarlo directamente", z: "el clítoris", actor: "el" },
        { a: "Chupa el clítoris suave pero sin parar, como si fuera un caramelo", z: "el clítoris", actor: "el" },
        { a: "Mete dos dedos y los mueve haciendo 'ven aquí' mientras chupas el clítoris", z: "la vagina", actor: "el" },
        { a: "Masturba lento con los dedos mojados, entrando y saliendo muy despacio", z: "la vagina", actor: "el" },
        { a: "Lame rápido de abajo arriba, desde la entrada hasta el clítoris", z: "el clítoris", actor: "el" },
        { a: "Introduce un dedo y masajea el punto G mientras lames el clítoris", z: "la vagina", actor: "el" },
        { a: "Frota el pulgar sobre el clítoris mientras los otros dedos se mueven dentro", z: "el clítoris", actor: "el" },
        // Ambos
        { a: "Lame el ano con la lengua bien plana, desde abajo hacia arriba", z: "el ano", actor: "ambos" },
        { a: "Hace anilingus con puntazos de lengua, entrando un poquito", z: "el ano", actor: "ambos" },
        { a: "Masajea el perineo con presión circular, justo entre los huevos y el culo", z: "el perineo", actor: "ambos" },
        { a: "Pellizca el pezón con los labios y succiona fuerte, como si quisieras sacar leche", z: "los pezones", actor: "ambos" },
        { a: "Lame los pezones en zigzag, de un lado a otro, sin parar", z: "los pezones", actor: "ambos" },
        { a: "Muerde el pezón con cuidado y tira hacia fuera mientras chupas", z: "los pezones", actor: "ambos" },
        { a: "Azota las nalgas con ritmo, primero suave y luego más fuerte", z: "las nalgas", actor: "ambos" },
        { a: "Masajea las nalgas con fuerza, las separa y lame el agujerito", z: "las nalgas", actor: "ambos" },
        { a: "Muerde suave la nalga y jala la piel con los dientes", z: "las nalgas", actor: "ambos" }
      ],
      zonasElHace: [
        "los pezones erectos, chupándolos como loco",
        "el cuello y la nuca, mordiendo justo donde late",
        "las nalgas abiertas, metiendo la lengua entre ellas",
        "el ano húmedo, lamiéndolo con ganas",
        "la entrepierna caliente, frotando tu cara allí",
        "los muslos internos temblorosos, besando hasta llegar",
        "la espalda baja sudorosa, lamiendo la columna",
        "el perineo, esa parte tan suave antes del culo",
        "las caderas, agarrándolas fuerte mientras besas",
        "la barriga hacia abajo, desde el ombligo hasta el vello",
        "la cara interna del muslo, muy cerca de la vagina",
        "los labios vaginales, succionándolos suavemente"
      ],
      zonasEllaHace: [
        "los pezones duros, lamiéndolos en círculos",
        "el cuello y la nuez, mordiendo la manzana de Adán",
        "las nalgas apretadas, mordiéndolas mientras las agarras",
        "el ano, lamiéndolo con la lengua bien mojada",
        "la entrepierna, desde los huevos hasta la base del pene",
        "los muslos por dentro, subiendo muy lento",
        "la espalda baja, arañando suavemente mientras besas",
        "el perineo, masajeando con la lengua",
        "el abdomen bajo, justo encima del pene",
        "la cara interna del muslo, lamiendo hasta los huevos",
        "las caderas hasta el pene, besando todo el recorrido",
        "el frenillo, esa parte tan sensible debajo de la cabeza"
      ]
    },
    condiciones: [
      "MODO: NORMAL 🔥",
      "MODO: OJOS VENDADOS 🕶️ (solo tacto y gusto)",
      "MODO: SIN MANOS ✋❌ (usa solo boca, lengua y cuerpo)",
      "MODO: GIME BAJITO 🤫 (prohibido gemir fuerte)",
      "MODO: CON HIELO Y LENGUA 🧊 (alterna frío y calor)",
      "MODO: SUSURRANDO SUCEDADES 🗣️ (di todo lo que harás)",
      "MODO: A OSCURAS 🌙 (sin luz, solo palpando)",
      "MODO: CON MÚSICA SENSUAL 🎶 (sigue el ritmo)",
      "MODO: CÁMARA LENTA 🐢 (todo al 50% de velocidad)",
      "MODO: SIN ROPA 👗❌ (desnudos totales)",
      "MODO: CON ACEITE CALIENTE 💧 (resbala todo)",
      "MODO: MIENTRAS TE MIRAN 👀 (hazlo como si hubiera público)",
      "MODO: ATAD@ SUAVEMENTE 🪢 (uno inmovilizado, el otro hace todo)",
      "MODO: CON LUBRICANTE 💦 (úsalo en cada caricia)",
      "MODO: PROHIBIDO CORRERSE 🚫💦 (aguanta hasta el final)"
    ],
    tiempos: [
      { txt: "20 SEG 🔥", seg: 20 },
      { txt: "45 SEG 🔥🔥", seg: 45 },
      { txt: "1 MIN 🔥🔥🔥", seg: 60 },
      { txt: "2 MIN 🔥🔥🔥🔥", seg: 120 },
      { txt: "3 MIN 🔥🔥🔥🔥🔥", seg: 180 },
      { txt: "5 MIN 🥵", seg: 300 }
    ],
    tiempoEspecial: { txt: "🔥🔥 HASTA CORRERSE 🔥🔥", seg: 599 },
    wildcards: [
      "🔥 69 ABSOLUTO — 4 minutos sin respirar, turnos cada 30 segundos, el que se ríe pierde",
      "💆‍♀️ FULL BODY SEXUAL — ella se deja hacer, él obedece todas sus órdenes durante 5 minutos",
      "😈 CARA ENTRE PIERNAS — ella monta su cara 2 minutos mínimo, él tiene que lamer sin parar",
      "💦 SQUIRT CHALLENGE — él no para de estimular el punto G hasta que ella moje la cama",
      "👑 FACE-SITTING — ella se sienta en su cara y él lame como si fuera su última cena",
      "🍆 JUGUETE PROHIBIDO — 5 minutos con el juguete que elija ella, él solo mira y gime",
      "🪢 ATAD@ A LA CAMA — el otro hace lo que quiera durante 3 minutos, sin límites",
      "👗 STRIPTEASE LENTO — una prenda cada 30 segundos, mirándose fijo, sin tocarse",
      "🤐 TURNO EN SILENCIO — 4 minutos, solo gemidos ahogados, si hablas se reinicia",
      "👁️ PAUSA DRAMÁTICA — 60 segundos sin tocarse, solo miradas lascivas y respiración agitada",
      "🍑 ANAL DE UNA VEZ — con mucho lubricante, ella lleva el ritmo, él solo mete y espera",
      "🧴 MASAJE CON ACEITE CORPORAL — todo el cuerpo, acabando donde él diga, con los dedos o la lengua",
      "🔁 INTERCAMBIO DE ROLES — durante 5 minutos uno manda y el otro obedece, luego se cambia",
      "📹 GRABA UN AUDIO SUCIO — 1 minuto de susurros eróticos para escuchar después, sin cortar",
      "🧊 HIELO POR TODO EL CUERPO — mientras el otro lame donde se derrite, alternando frío y calor"
    ],
    ui: {
      quien: "¿Quién?",
      accion: "Acción 🔥",
      zona: "Zona 🫦",
      roll: "🎲 TIRAR DADOS 🎲",
      wild: "🃏 RETO SALVAJE 🃏",
      suave: "🌸 SUAVE",
      extremo: "⚡ EXTREMO",
      arrancar: "▶️ ARRANCAR",
      pausa: "⏸️ PAUSAR",
      el_lbl: "ÉL",
      ella_lbl: "ELLA"
    }
  },
  en: {
  suave: {
    acciones: [
      "Kiss with tongue, slowly, savoring every inch",
      "Bite very softly and then blow to refresh",
      "Caress with your fingertips like a feather",
      "Blow hot air just before giving a wet kiss",
      "Whisper something dirty in their ear, very close, while rubbing",
      "Run your flat tongue from bottom to top, very slowly",
      "Rub your nose against theirs and then your lips, unhurried",
      "Give a gentle suction kiss, leaving a little saliva",
      "Bite the earlobe and pull back gently",
      "Trace a path of burning kisses from the neck down to the navel",
      "Squeeze and release the flesh with your hands, like kneading",
      "Lick like a melting ice cream, with the tip of your tongue",
      "Bite and drag the skin with your teeth, without hurting",
      "Tickle with your tongue on the most sensitive spot",
      "Suck for a moment and then blow cold to cause shivers",
      "Stroke with the back of your hand, very softly, along the sides",
      "Bite very close to the hot zone, just teasing",
      "Rub your wet lips against theirs, without opening your mouth",
      "Bite and leave a small pink mark that lasts a few minutes",
      "Run your fingernail very gently over the skin, without scratching, just grazing"
    ],
    zonas: [
      "the neck, right where the vein pulses",
      "the ear and behind it",
      "the nape, where the hair ends",
      "the collarbone, that bony part",
      "the navel, with the tip of your tongue",
      "the hip, right where the pants start",
      "the inner thigh, very close to the crotch",
      "the wrist, where you feel the pulse",
      "behind the knee, that very soft area",
      "the nipple, but only with your lips",
      "the lower back, just before the butt",
      "the belly, making circles",
      "the ribs, going up and down",
      "the hip bone, biting very softly",
      "the beginning of the crotch, just grazing"
    ]
  },
  extremo: {
    neutras: [
      "Lick with your whole wide tongue, pressing against the skin",
      "Suck hard as if you want to leave a purple hickey",
      "Bite hard and then run your tongue over it soothingly",
      "Run your tongue up and down non-stop, very fast",
      "Tap rapidly with your tongue, like a hummingbird",
      "Press your mouth wide open and rub with wet lips",
      "Blow and lick at the same time, alternating",
      "Make circles with the tip of your tongue, getting smaller and smaller",
      "Bite the skin, pull back and let go suddenly",
      "Use only the tip of your tongue, very stiff, to give little jabs",
      "Leave a well-marked hickey, the kind that lasts for days",
      "Run your tongue like a wet paintbrush",
      "Alternate sucking and biting: suck, bite, suck",
      "Rub your wet genitals against any part of their body",
      "Massage with your warm palm, pressing hard",
      "Pinch the nipple and pull gently while you lick it",
      "Make spirals from the outside toward the center with your tongue",
      "Suck with an up-and-down rhythm, as if it were a cock",
      "Bite along the entire path, leaving a trail",
      "Lick from bottom to top very slowly, as if with desire"
    ],
    especificas: [
      // She to him
      { a: "Take the cock all the way to the back of your throat, choking a little", z: "the throat", actor: "she" },
      { a: "Suck only the head while looking straight into his eyes", z: "the glans", actor: "she" },
      { a: "Lick the balls one by one, very slowly, then take them into your mouth", z: "the testicles", actor: "she" },
      { a: "Jerk him off with a tight grip, twisting your wrist at the top", z: "the penis", actor: "she" },
      { a: "Kiss the tip with very wet lips, just the very tip, like a peck", z: "the glans", actor: "she" },
      { a: "Massage the balls with one hand while sucking the head with the other", z: "the testicles", actor: "she" },
      { a: "Run your tongue along the entire shaft, from base to tip, very slowly", z: "the penis", actor: "she" },
      // He to her
      { a: "Make circles around the clitoris with your tongue, without touching it directly", z: "the clitoris", actor: "he" },
      { a: "Suck the clitoris softly but non-stop, as if it were a candy", z: "the clitoris", actor: "he" },
      { a: "Insert two fingers and make a 'come here' motion while sucking the clitoris", z: "the vagina", actor: "he" },
      { a: "Masturbate slowly with wet fingers, going in and out very slowly", z: "the vagina", actor: "he" },
      { a: "Lick quickly from bottom to top, from the entrance to the clitoris", z: "the clitoris", actor: "he" },
      { a: "Insert one finger and massage the G-spot while licking the clitoris", z: "the vagina", actor: "he" },
      { a: "Rub your thumb over the clitoris while your other fingers move inside", z: "the clitoris", actor: "he" },
      // Both
      { a: "Lick the anus with a flat tongue, from bottom to top", z: "the anus", actor: "both" },
      { a: "Perform anilingus with little tongue jabs, going slightly inside", z: "the anus", actor: "both" },
      { a: "Massage the perineum with circular pressure, right between the balls and the ass", z: "the perineum", actor: "both" },
      { a: "Pinch the nipple with your lips and suck hard, as if trying to draw milk", z: "the nipples", actor: "both" },
      { a: "Lick the nipples in a zigzag, from side to side, non-stop", z: "the nipples", actor: "both" },
      { a: "Bite the nipple carefully and pull outward while sucking", z: "the nipples", actor: "both" },
      { a: "Spank the buttocks rhythmically, first soft then harder", z: "the buttocks", actor: "both" },
      { a: "Massage the buttocks firmly, spread them and lick the little hole", z: "the buttocks", actor: "both" },
      { a: "Bite the buttock softly and pull the skin with your teeth", z: "the buttocks", actor: "both" }
    ],
    zonasElHace: [
      "the erect nipples, sucking like crazy",
      "the neck and nape, biting right where it pulses",
      "the spread buttocks, sticking your tongue between them",
      "the wet anus, licking eagerly",
      "the hot crotch, rubbing your face there",
      "the trembling inner thighs, kissing your way up",
      "the sweaty lower back, licking the spine",
      "the perineum, that soft area before the ass",
      "the hips, gripping them hard while kissing",
      "the belly downwards, from navel to pubic hair",
      "the inner thigh, very close to the vagina",
      "the vaginal lips, sucking them gently"
    ],
    zonasEllaHace: [
      "the hard nipples, licking them in circles",
      "the neck and Adam's apple, biting the Adam's apple",
      "the squeezed buttocks, biting them while grabbing",
      "the anus, licking it with a very wet tongue",
      "the crotch, from the balls to the base of the penis",
      "the inner thighs, going up very slowly",
      "the lower back, scratching gently while kissing",
      "the perineum, massaging with your tongue",
      "the lower abdomen, just above the penis",
      "the inner thigh, licking up to the balls",
      "the hips to the penis, kissing the whole path",
      "the frenulum, that very sensitive part under the head"
    ]
  },
  condiciones: [
    "MODE: NORMAL 🔥",
    "MODE: BLINDFOLDED 🕶️ (touch and taste only)",
    "MODE: NO HANDS ✋❌ (use only mouth, tongue and body)",
    "MODE: MOAN QUIETLY 🤫 (forbidden to moan loud)",
    "MODE: ICE AND TONGUE 🧊 (alternate cold and heat)",
    "MODE: WHISPERING FILTH 🗣️ (say everything you'll do)",
    "MODE: IN THE DARK 🌙 (no light, just groping)",
    "MODE: SENSUAL MUSIC 🎶 (follow the rhythm)",
    "MODE: SLOW MOTION 🐢 (everything at 50% speed)",
    "MODE: NO CLOTHES 👗❌ (totally naked)",
    "MODE: HOT OIL 💧 (everything slides)",
    "MODE: WHILE BEING WATCHED 👀 (act as if there's an audience)",
    "MODE: GENTLY TIED 🪢 (one immobilized, the other does everything)",
    "MODE: WITH LUBE 💦 (use it on every caress)",
    "MODE: FORBIDDEN TO CUM 🚫💦 (hold until the end)"
  ],
  tiempos: [
    { txt: "20 SEC 🔥", seg: 20 },
    { txt: "45 SEC 🔥🔥", seg: 45 },
    { txt: "1 MIN 🔥🔥🔥", seg: 60 },
    { txt: "2 MIN 🔥🔥🔥🔥", seg: 120 },
    { txt: "3 MIN 🔥🔥🔥🔥🔥", seg: 180 },
    { txt: "5 MIN 🥵", seg: 300 }
  ],
  tiempoEspecial: { txt: "🔥🔥 UNTIL YOU CUM 🔥🔥", seg: 599 },
  wildcards: [
    "🔥 ABSOLUTE 69 — 4 minutes without breathing, turns every 30 seconds, whoever laughs loses",
    "💆‍♀️ FULL BODY SEXUAL — she lets herself be done, he obeys all her orders for 5 minutes",
    "😈 FACE BETWEEN THIGHS — she rides his face for at least 2 minutes, he has to lick non-stop",
    "💦 SQUIRT CHALLENGE — he doesn't stop stimulating the G-spot until she wets the bed",
    "👑 FACE-SITTING — she sits on his face and he licks as if it were his last meal",
    "🍆 FORBIDDEN TOY — 5 minutes with the toy she chooses, he just watches and moans",
    "🪢 TIED TO THE BED — the other does whatever they want for 3 minutes, no limits",
    "👗 SLOW STRIPTEASE — one piece of clothing every 30 seconds, staring at each other, no touching",
    "🤐 SILENT TURN — 4 minutes, only muffled moans, if you speak it resets",
    "👁️ DRAMATIC PAUSE — 60 seconds without touching, only lustful looks and heavy breathing",
    "🍑 ANAL RIGHT AWAY — with lots of lube, she sets the rhythm, he only inserts and waits",
    "🧴 BODY OIL MASSAGE — whole body, ending where he says, with fingers or tongue",
    "🔁 ROLE SWAP — for 5 minutes one commands and the other obeys, then swap",
    "📹 RECORD A DIRTY AUDIO — 1 minute of erotic whispers to listen later, no cutting",
    "🧊 ICE ALL OVER THE BODY — while the other licks where it melts, alternating cold and heat"
  ],
  ui: {
    quien: "Who?",
    accion: "Action 🔥",
    zona: "Zone 🫦",
    roll: "🎲 ROLL DICE 🎲",
    wild: "🃏 WILD CHALLENGE 🃏",
    suave: "🌸 SOFT",
    extremo: "⚡ EXTREME",
    arrancar: "▶️ START",
    pausa: "⏸️ PAUSE",
    el_lbl: "HIM",
    ella_lbl: "HER"
  }
}
};
// ── STATE ────────────────────────────────────────────────────────────────────

let lang = localStorage.getItem('dd-lang') || 'es';
let modo = 'suave';
let vozOn = localStorage.getItem('dd-voz') !== 'false';
let nombres = { h:'', m:'' };
let timerSeg = 0, timerInterval = null, timerRunning = false;
let customAcciones = JSON.parse(localStorage.getItem('dd-custom') || '[]');

// ── UTILS ────────────────────────────────────────────────────────────────────

const pick = arr => arr[Math.floor(Math.random() * arr.length)];
const $  = id => document.getElementById(id);

// ── SETUP ────────────────────────────────────────────────────────────────────

function empezar() {
  nombres.h = $('inp-h').value.trim() || (lang==='es'?'ÉL':'HIM');
  nombres.m = $('inp-m').value.trim() || (lang==='es'?'ELLA':'HER');
  $('lbl-h').textContent = nombres.h;
  $('lbl-m').textContent = nombres.m;
  const s = $('setup');
  s.classList.add('out');
  setTimeout(()=>s.style.display='none', 520);
  actualizarUI();
}

function _kd(e) {
  const s = $('setup');
  if(e.key==='Enter' && s && getComputedStyle(s).display !== 'none' && !s.classList.contains('out')) empezar();
}
document.addEventListener('keydown', _kd);

// ── LANGUAGE ─────────────────────────────────────────────────────────────────

function cambiarIdioma() {
  lang = lang==='es'?'en':'es';
  localStorage.setItem('dd-lang', lang);
  actualizarUI();
}


function setText(id, value) {
  const el = $(id);
  if (el) el.textContent = value;
  else console.error(`Elemento con id "${id}" no encontrado`);
}

function actualizarUI() {
  const ui = DATA[lang].ui;
  const set = (id, val) => { const el = $(id); if(el) el.textContent = val; };
  const setq = (sel, val) => { const el = document.querySelector(sel); if(el) el.textContent = val; };
  set('btn-lang', lang.toUpperCase());
  set('btn-roll', ui.roll);
  set('btn-wild', ui.wild);
  set('btn-suave', ui.suave);
  set('btn-extremo', ui.extremo);
  set('btn-timer', timerRunning ? ui.pausa : ui.arrancar);
  setq('.pchip:first-child .plabel', ui.el_lbl);
  setq('.pchip:last-child .plabel', ui.ella_lbl);
  setq('#c-quien .ctag', ui.quien);
  setq('#c-accion .ctag', ui.accion);
  setq('#c-cuerpo .ctag', ui.zona);
}

// ── MODE ─────────────────────────────────────────────────────────────────────

function setModo(m) {
  modo = m;
  const bs = $('btn-suave'); if(bs) bs.classList.toggle('active', m==='suave');
  const be = $('btn-extremo'); if(be) be.classList.toggle('active', m==='extremo');
}

// ── VOICE ────────────────────────────────────────────────────────────────────

function toggleVoz() {
  vozOn = !vozOn;
  localStorage.setItem('dd-voz', vozOn);
  $('btn-voice').classList.toggle('off', !vozOn);
}

function hablar(txt) {
  if(!vozOn) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(txt);
  u.lang = lang==='es'?'es-ES':'en-US';
  u.rate = 0.88;
  window.speechSynthesis.speak(u);
}

// ── ROLL LOGIC ────────────────────────────────────────────────────────────────

function resolverRonda() {
  const d = DATA[lang];
  const esH = Math.random() > 0.5; // true = él hace
  const actorNombre = esH ? nombres.h : nombres.m;

  let accionTxt, zonaTxt;

  if (modo === 'suave') {
    accionTxt = pick(d.suave.acciones);
    zonaTxt = pick(d.suave.zonas);
  } else {
    const dx = d.extremo;

    // Filtrar específicas por actor
    const especificasCandidatas = dx.especificas.filter(e => {
      if(e.actor==='ambos') return true;
      if(e.actor==='el' && esH) return true;
      if(e.actor==='ella' && !esH) return true;
      return false;
    });

    // 40% chance de una acción específica, 60% neutra
    const usarEspecifica = especificasCandidatas.length > 0 && Math.random() < 0.4;

    if (usarEspecifica) {
      const esp = pick(especificasCandidatas);
      accionTxt = esp.a;
      zonaTxt = esp.z;
    } else {
      // Acción neutra + agregar custom si hay
      const todasNeutras = [...dx.neutras, ...customAcciones];
      accionTxt = pick(todasNeutras);
      // Zona según quién recibe
      const zonas = esH ? dx.zonasElHace : dx.zonasEllaHace;
      zonaTxt = pick(zonas);
    }
  }

  const condicion = pick(DATA[lang].condiciones);

  // 10% chance de tiempo especial
  const usarEspecial = Math.random() < 0.1;
  const tiempoObj = usarEspecial
    ? DATA[lang].tiempoEspecial
    : pick(DATA[lang].tiempos);

  return { actor: actorNombre, accion: accionTxt, zona: zonaTxt, condicion, tiempoObj };
}

function siguientePaso() {
  if (!misterioActivo || !tiradaPendiente) return;
  
  pasoActual++;
  const r = tiradaPendiente;
  
  switch(pasoActual) {
    case 1:
      setText('d-accion', r.accion);
      hablar(r.accion);
      break;
    case 2:
      setText('d-cuerpo', r.zona);
      hablar(r.zona);
      break;
    case 3:
      setText('d-condicion', r.condicion);
      hablar(r.condicion);
      break;
    case 4:
      setText('d-tiempo', r.tiempoObj.txt);
      timerSeg = r.tiempoObj.seg;
      actualizarReloj();
      const tw = $('timer-wrap');
      if (tw) tw.classList.remove('hidden');
      const btnNext = $('btn-next');
      if (btnNext) btnNext.style.display = 'none';
      hablar(`Tiempo: ${r.tiempoObj.txt}`);
      tiradaPendiente = null;
      pasoActual = 0;
      break;
  }
}

// Función auxiliar para asignar textContent de forma segura
function setText(id, value) {
  const el = $(id);
  if (el) el.textContent = value;
  else console.error(`Elemento con id "${id}" no encontrado`);
}
// ── ROLL ANIMATION ────────────────────────────────────────────────────────────

function lanzar() {
  if (misterioActivo && tiradaPendiente) {
    hablar(lang === 'es' ? 'Primero completa la tirada actual' : 'Finish current roll first');
    return;
  }

  detenerTimer();
  const tw = $('timer-wrap');
  if (tw) tw.classList.add('hidden');
  const br = $('btn-roll');
  if (br) br.disabled = true;

  const cardIds = ['c-accion', 'c-cuerpo', 'c-condicion', 'c-tiempo'];
  cardIds.forEach(id => {
    const el = $(id);
    if (el) el.classList.add('rolling');
  });

  let tick = 0;
  const total = 15;

  const iv = setInterval(() => {
    const d = DATA[lang];
    const esHAnim = Math.random() > 0.5;
    setText('d-quien', esHAnim ? nombres.h : nombres.m);

    if (modo === 'suave') {
      setText('d-accion', pick(d.suave.acciones));
      setText('d-cuerpo', pick(d.suave.zonas));
    } else {
      const todas = [...d.extremo.neutras, ...d.extremo.especificas.map(e => e.a)];
      setText('d-accion', pick(todas));
      setText('d-cuerpo', pick(esHAnim ? d.extremo.zonasElHace : d.extremo.zonasEllaHace));
    }
    setText('d-condicion', pick(d.condiciones));
    setText('d-tiempo', pick(d.tiempos).txt);

    tick++;
    if (tick >= total) {
      clearInterval(iv);
      const r = resolverRonda();

      if (misterioActivo) {
        tiradaPendiente = r;
        pasoActual = 0;
        setText('d-quien', r.actor);
        setText('d-accion', '???');
        setText('d-cuerpo', '???');
        setText('d-condicion', '???');
        setText('d-tiempo', '???');
        const btnNext = $('btn-next');
        if (btnNext) btnNext.style.display = 'block';
        const tw2 = $('timer-wrap');
        if (tw2) tw2.classList.add('hidden');
        hablar(`${r.actor}... (siguiente paso)`);
      } else {
        setText('d-quien', r.actor);
        setText('d-accion', r.accion);
        setText('d-cuerpo', r.zona);
        setText('d-condicion', r.condicion);
        setText('d-tiempo', r.tiempoObj.txt);
        timerSeg = r.tiempoObj.seg;
        actualizarReloj();
        const tw2 = $('timer-wrap');
        if (tw2) tw2.classList.remove('hidden');
        hablar(`${r.actor}: ${r.accion} ${r.zona}`);
      }

      cardIds.forEach(id => {
        const el = $(id);
        if (el) {
          el.classList.remove('rolling');
          el.classList.add('pop');
          setTimeout(() => el.classList.remove('pop'), 400);
        }
      });

      const br2 = $('btn-roll');
      if (br2) br2.disabled = false;
    }
  }, 65);
}

// ── WILDCARD ──────────────────────────────────────────────────────────────────

function wildcard() {
  detenerTimer();
  const tww = $('timer-wrap'); if(tww) tww.classList.add('hidden');
  const reto = pick(DATA[lang].wildcards);
  const cc = $('c-cuerpo');
  $('d-quien').textContent = '🃏';
  $('d-accion').textContent = lang==='es'?'RETO ESPECIAL':'SPECIAL CHALLENGE';
  $('d-cuerpo').textContent = reto;
  $('d-condicion').textContent = lang==='es'?'¡TODOS PARTICIPAN!':'EVERYONE PLAYS!';
  $('d-tiempo').textContent = '—';
  if(cc) cc.classList.add('wflash');
  setTimeout(()=>{ if(cc) cc.classList.remove('wflash'); }, 3500);
  hablar(reto);
}

// ── TIMER ─────────────────────────────────────────────────────────────────────

function actualizarReloj() {
  const m = Math.floor(timerSeg/60), s = timerSeg%60;
  $('tdisp').textContent = `${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
}

function toggleTimer() {
  if(timerRunning){ detenerTimer(); }
  else {
    timerRunning = true;
    $('btn-timer').textContent = DATA[lang].ui.pausa;
    timerInterval = setInterval(()=>{
      timerSeg--;
      actualizarReloj();
      if(timerSeg <= 0){
        detenerTimer();
        try{ $('alarma').play(); }catch(e){}
        $('tdisp').textContent = '⏰ TIME!';
      }
    }, 1000);
  }
}

function detenerTimer() {
  if(timerInterval) clearInterval(timerInterval);
  timerInterval = null; timerRunning = false;
  const bt = $('btn-timer'); if(bt) bt.textContent = DATA[lang].ui.arrancar;
}

function rerollTiempo() {
  detenerTimer();
  const t = Math.random() < 0.1 ? DATA[lang].tiempoEspecial : pick(DATA[lang].tiempos);
  $('d-tiempo').textContent = t.txt;
  timerSeg = t.seg;
  actualizarReloj();
}

function toggleMisterio() {
  misterioActivo = !misterioActivo;
  const btn = $('btn-misterio');
  if (btn) btn.classList.toggle('active', misterioActivo);
  if (!misterioActivo && tiradaPendiente) {
    cancelarModoMisterio();
  }
  if (!misterioActivo) {
    const btnNext = $('btn-next');
    if (btnNext) btnNext.style.display = 'none';
  }
}


function cancelarModoMisterio() {
  if (tiradaPendiente) {
    tiradaPendiente = null;
    pasoActual = 0;
    const btnNext = $('btn-next');
    if (btnNext) btnNext.style.display = 'none';
    setText('d-quien', '—');
    setText('d-accion', 'TIRA LOS DADOS');
    setText('d-cuerpo', 'PARA EMPEZAR');
    setText('d-condicion', 'MODO: NORMAL');
    setText('d-tiempo', 'TIEMPO');
    detenerTimer();
    const tw = $('timer-wrap');
    if (tw) tw.classList.add('hidden');
    const br = $('btn-roll');
    if (br) br.disabled = false;
  }
}

// ── CONFIG ────────────────────────────────────────────────────────────────────

function abrirConfig() {
  const tc = $('txt-custom'); if(tc) tc.value = customAcciones.join('\n');
  const mo = $('modal'); if(mo) mo.classList.add('open');
}
function cerrarConfig() { const mo = $('modal'); if(mo) mo.classList.remove('open'); }
function guardarConfig() {
  customAcciones = $('txt-custom').value.split('\n').map(s=>s.trim()).filter(Boolean);
  localStorage.setItem('dd-custom', JSON.stringify(customAcciones));
  cerrarConfig();
}

function _init() {
  // Botón "Siguiente paso"
  const btnNext = $('btn-next');
  if (btnNext) btnNext.addEventListener('click', siguientePaso);

  // Botón modo misterio
  const btnMisterio = $('btn-misterio');
  if (btnMisterio) {
    btnMisterio.addEventListener('click', toggleMisterio);
    btnMisterio.classList.remove('active');
  }

  // Cerrar modal al hacer clic fuera
  const modal = $('modal');
  if (modal) {
    modal.addEventListener('click', e => {
      if (e.target === modal) cerrarConfig();
    });
  }

  // Estado inicial del botón de voz
  const bv = $('btn-voice');
  if (bv) bv.classList.toggle('off', !vozOn);
}
