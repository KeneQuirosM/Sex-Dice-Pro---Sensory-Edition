// ── DATA ─────────────────────────────────────────────────────────────────────

const DATA = {
  es: {
    suave: {
      acciones: [
        "Besa lentamente","Acaricia con las yemas","Sopla suavecito en",
        "Masajea en círculos","Susurra al oído mientras tocas",
        "Muerde muy suave","Lame despacio","Pasa los labios por",
        "Frota la nariz contra","Dale calor con el aliento en",
        "Besa con mordisquito","Acaricia de arriba a abajo",
        "Traza líneas con la uña en","Huele y besa","Chupa el dedo y traza en",
      ],
      zonas: [
        "el cuello","la oreja","la nuca","la mejilla","la espalda baja",
        "el hombro","el ombligo","la muñeca","la clavícula","el muslo",
        "los labios","la pantorrilla","la frente","las costillas",
      ]
    },
    extremo: {
      neutras: [
        "Lame lento y profundo","Succiona con fuerza",
        "Muerde y suelta","Da lengüetazos rápidos",
        "Presiona la lengua fuerte contra","Frota tus labios húmedos en",
        "Sopla y lame alternando en","Hace círculos con la lengua en",
        "Muerde y jala suavecito","Pasa la lengua de punta en",
        "Succiona hasta dejar marca en","Usa la lengua de punta en",
        "Succiona y muerde al mismo tiempo","Frota tus genitales húmedos contra",
        "Masajea con la palma abierta","Pellizca fuerte y suelta",
        "Traza espirales con la lengua en","Succiona rítmicamente",
        "Muerde a lo largo de","Lame de abajo a arriba lentísimo",
      ],
      especificas: [
        { a:"Deepthroat hasta el fondo", z:"el pene", actor:"ella" },
        { a:"Chupa el glande con la lengua", z:"el pene", actor:"ella" },
        { a:"Lame los testículos uno a uno", z:"los testículos", actor:"ella" },
        { a:"Masturba con la mano aprepando bien", z:"el pene", actor:"ella" },
        { a:"Besa el glande con labios mojados", z:"el pene", actor:"ella" },
        { a:"Masajea los testículos suave con la mano", z:"los testículos", actor:"ella" },
        { a:"Pasa la lengua por todo el largo de", z:"el pene", actor:"ella" },
        { a:"Estimula con la lengua en círculos", z:"el clítoris", actor:"el" },
        { a:"Succiona el clítoris suave y rítmico", z:"el clítoris", actor:"el" },
        { a:"Introduce dos dedos y dobla hacia arriba en", z:"la vagina", actor:"el" },
        { a:"Masturba lento con los dedos", z:"la vagina", actor:"el" },
        { a:"Lame arriba-abajo rápido en", z:"el clítoris", actor:"el" },
        { a:"Introduce un dedo y masajea por dentro", z:"la vagina", actor:"el" },
        { a:"Frota con el pulgar mientras penetra con dedos", z:"el clítoris", actor:"el" },
        { a:"Haz anilingus profundo en", z:"el ano", actor:"ambos" },
        { a:"Lame el ano y los alrededores de", z:"el ano", actor:"ambos" },
        { a:"Masajea el periné de", z:"el periné", actor:"ambos" },
        { a:"Pellizca y succiona", z:"los pezones", actor:"ambos" },
        { a:"Lame lento de lado a lado en", z:"los pezones", actor:"ambos" },
        { a:"Muerde con cuidado y suelta", z:"los pezones", actor:"ambos" },
        { a:"Azota rítmicamente", z:"las nalgas", actor:"ambos" },
        { a:"Masajea fuerte con ambas manos", z:"las nalgas", actor:"ambos" },
        { a:"Muerde suave y jala la piel de", z:"las nalgas", actor:"ambos" },
      ],
      zonasElHace: [
        "los pezones","el cuello","las nalgas","el ano","la entrepierna",
        "los muslos internos","la espalda baja","el periné","la cadera",
        "la barriga","la cara interna del muslo",
      ],
      zonasEllaHace: [
        "los pezones","el cuello","las nalgas","el ano","la entrepierna",
        "los muslos","la espalda baja","el periné","el abdomen",
        "la cara interna del muslo","las caderas",
      ],
    },
    condiciones: [
      "MODO: NORMAL","MODO: OJOS VENDADOS","MODO: SIN USAR MANOS",
      "MODO: EN SILENCIO TOTAL","MODO: CON HIELO","MODO: SUSURRANDO COCHINADAS",
      "MODO: EN LA OSCURIDAD","MODO: CON MÚSICA","MODO: A CÁMARA LENTA",
      "MODO: SIN QUITARSE TODA LA ROPA","MODO: CON ACEITE",
    ],
    tiempos: [
      {txt:"20 SEG",seg:20},{txt:"45 SEG",seg:45},{txt:"1 MIN",seg:60},
      {txt:"2 MIN",seg:120},{txt:"3 MIN",seg:180},{txt:"5 MIN",seg:300},
    ],
    tiempoEspecial: {txt:"HASTA CORRERSE",seg:599},
    wildcards: [
      "69 SALVAJE — 3 minutos sin parar",
      "FULL BODY — masaje de cuerpo completo, ella primero",
      "CARA ENTRE LAS PIERNAS — 2 minutos mínimo",
      "SQUIRT CHALLENGE — él hace lo que sea necesario",
      "FACE-SITTING — ella manda, él obedece",
      "JUGUETE A ELECCIÓN — 4 minutos, sin parar",
      "ESPOSAS IMPROVISADAS — usa corbata o cinturón",
      "STRIPTEASE — quítense ropa alternando, una prenda cada uno",
      "TURNO MUDO — 5 minutos sin hablar ni hacer ruido",
      "PAUSA DRAMÁTICA — 60 segundos sin tocarse, solo mirándose",
    ],
    ui:{quien:"¿Quién?",accion:"Acción",zona:"Zona",roll:"TIRAR DADOS",wild:"🃏 RETO SALVAJE 🃏",suave:"SUAVE",extremo:"EXTREMO",arrancar:"ARRANCAR",pausa:"PAUSAR",el_lbl:"Él",ella_lbl:"Ella"}
  },

  en: {
    suave: {
      acciones: [
        "Slowly kiss","Softly caress","Gently blow on",
        "Massage in circles","Whisper while touching",
        "Gently bite","Slowly lick","Run your lips over",
        "Nuzzle your nose against","Breathe warm air on",
        "Kiss with a little nibble","Stroke up and down",
        "Trace lines with your nail on","Smell and kiss","Wet your finger and trace on",
      ],
      zonas: [
        "the neck","the ear","the nape","the cheek","the lower back",
        "the shoulder","the belly button","the wrist","the collarbone","the thigh",
        "the lips","the calf","the forehead","the ribs",
      ]
    },
    extremo: {
      neutras: [
        "Deep slow lick on","Suck hard on",
        "Bite and release","Quick tongue flicks on",
        "Press tongue firmly against","Rub wet lips across",
        "Alternate blowing and licking on","Circle with tongue on",
        "Bite and pull gently on","Tip of tongue on",
        "Suck until you leave a mark on","Use pointed tongue tip on",
        "Suck and bite at once on","Rub wet genitals against",
        "Open palm massage on","Pinch hard and release",
        "Spiral with tongue on","Rhythmic sucking on",
        "Bite along the length of","Slow full lick bottom to top of",
      ],
      especificas: [
        {a:"Deep deepthroat all the way down",z:"the penis",actor:"ella"},
        {a:"Suck the head with your tongue",z:"the penis",actor:"ella"},
        {a:"Lick each testicle one by one",z:"the testicles",actor:"ella"},
        {a:"Hand masturbation, grip tight",z:"the penis",actor:"ella"},
        {a:"Kiss the tip with wet lips",z:"the penis",actor:"ella"},
        {a:"Gently massage with both hands",z:"the testicles",actor:"ella"},
        {a:"Tongue all the way along",z:"the penis",actor:"ella"},
        {a:"Tongue circles on the",z:"the clitoris",actor:"el"},
        {a:"Rhythmic soft sucking on",z:"the clitoris",actor:"el"},
        {a:"Two fingers curling upward inside",z:"the vagina",actor:"el"},
        {a:"Slow finger masturbation inside",z:"the vagina",actor:"el"},
        {a:"Fast up-and-down lick on",z:"the clitoris",actor:"el"},
        {a:"One finger inside massaging the walls of",z:"the vagina",actor:"el"},
        {a:"Thumb on clit while fingers penetrate",z:"the clitoris",actor:"el"},
        {a:"Deep anilingus on",z:"the anus",actor:"ambos"},
        {a:"Lick around the rim of",z:"the anus",actor:"ambos"},
        {a:"Perineum massage on",z:"the perineum",actor:"ambos"},
        {a:"Pinch and suck",z:"the nipples",actor:"ambos"},
        {a:"Side-to-side slow lick on",z:"the nipples",actor:"ambos"},
        {a:"Careful nibble and release on",z:"the nipples",actor:"ambos"},
        {a:"Rhythmic spanking on",z:"the butt",actor:"ambos"},
        {a:"Deep two-hand massage on",z:"the butt",actor:"ambos"},
        {a:"Soft bite and skin pull on",z:"the butt",actor:"ambos"},
      ],
      zonasElHace: [
        "the nipples","the neck","the butt","the anus","the crotch",
        "the inner thighs","the lower back","the perineum","the hips",
        "the belly","the inner leg",
      ],
      zonasEllaHace: [
        "the nipples","the neck","the butt","the anus","the crotch",
        "the thighs","the lower back","the perineum","the abs",
        "the inner thigh","the hips",
      ],
    },
    condiciones: [
      "MODE: NORMAL","MODE: BLINDFOLDED","MODE: NO HANDS",
      "MODE: TOTAL SILENCE","MODE: WITH ICE","MODE: WHISPERING DIRTY",
      "MODE: IN THE DARK","MODE: WITH MUSIC","MODE: IN SLOW MOTION",
      "MODE: KEEP SOME CLOTHES ON","MODE: WITH OIL",
    ],
    tiempos: [
      {txt:"20 SEC",seg:20},{txt:"45 SEC",seg:45},{txt:"1 MIN",seg:60},
      {txt:"2 MIN",seg:120},{txt:"3 MIN",seg:180},{txt:"5 MIN",seg:300},
    ],
    tiempoEspecial: {txt:"UNTIL CUMMING",seg:599},
    wildcards: [
      "WILD 69 — 3 minutes non-stop",
      "FULL BODY MASSAGE — her first",
      "FACE BETWEEN THE LEGS — 2 minutes minimum",
      "SQUIRT CHALLENGE — he does whatever it takes",
      "FACE-SITTING — she's in charge",
      "TOY OF CHOICE — 4 minutes straight",
      "MAKESHIFT HANDCUFFS — use a tie or belt",
      "STRIPTEASE — alternate removing one piece each",
      "SILENT TURN — 5 minutes, no talking, no sounds",
      "DRAMATIC PAUSE — 60 seconds no touching, just staring",
    ],
    ui:{quien:"Who?",accion:"Action",zona:"Zone",roll:"ROLL DICE",wild:"🃏 WILD CHALLENGE 🃏",suave:"SOFT",extremo:"EXTREME",arrancar:"START",pausa:"PAUSE",el_lbl:"Him",ella_lbl:"Her"}
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

// ── ROLL ANIMATION ────────────────────────────────────────────────────────────

function lanzar() {
  detenerTimer();
  const tw = $('timer-wrap'); if(tw) tw.classList.add('hidden');
  const br = $('btn-roll'); if(br) br.disabled = true;

  const cardIds = ['c-accion','c-cuerpo','c-condicion','c-tiempo'];
  cardIds.forEach(id => { const el=$(id); if(el) el.classList.add('rolling'); });

  let tick = 0;
  const total = 15;

  const iv = setInterval(() => {
    const d = DATA[lang];
    const esHAnim = Math.random() > 0.5;
    $('d-quien').textContent = esHAnim ? nombres.h : nombres.m;

    if(modo==='suave'){
      $('d-accion').textContent = pick(d.suave.acciones);
      $('d-cuerpo').textContent = pick(d.suave.zonas);
    } else {
      const todas = [...d.extremo.neutras, ...d.extremo.especificas.map(e=>e.a)];
      $('d-accion').textContent = pick(todas);
      $('d-cuerpo').textContent = pick(esHAnim ? d.extremo.zonasElHace : d.extremo.zonasEllaHace);
    }
    $('d-condicion').textContent = pick(d.condiciones);
    $('d-tiempo').textContent = pick(d.tiempos).txt;

    tick++;
    if(tick >= total) {
      clearInterval(iv);
      const r = resolverRonda();
      $('d-quien').textContent  = r.actor;
      $('d-accion').textContent = r.accion;
      $('d-cuerpo').textContent = r.zona;
      $('d-condicion').textContent = r.condicion;
      $('d-tiempo').textContent = r.tiempoObj.txt;
      timerSeg = r.tiempoObj.seg;
      actualizarReloj();

      cardIds.forEach(id => {
        const el = $(id);
        if(!el) return;
        el.classList.remove('rolling');
        el.classList.add('pop');
        setTimeout(()=>el.classList.remove('pop'), 400);
      });

      const tw2 = $('timer-wrap'); if(tw2) tw2.classList.remove('hidden');
      const br2 = $('btn-roll'); if(br2) br2.disabled = false;
      hablar(`${r.actor}: ${r.accion} ${r.zona}`);
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

// Init seguro
function _init() {
  const modal = $('modal');
  if(modal) modal.addEventListener('click', e=>{ if(e.target===modal) cerrarConfig(); });
  const bv = $('btn-voice');
  if(bv) bv.classList.toggle('off', !vozOn);
}
if(document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _init);
} else {
  _init();
}
