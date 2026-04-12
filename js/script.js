// ── DATA ─────────────────────────────────────────────────────────────────────

// ── DATA ── VERSIÓN SÚPER SEXY ────────────────────────────────────────────────
let misterioActivo = false;      // Modo misterio activado
let tiradaPendiente = null;      // Tirada guardada para revelar paso a paso
let pasoActual = 0;              // 0=quién, 1=acción, 2=zona, 3=condición, 4=tiempo

const DATA = {
  es: {
    suave: {
      acciones: [
        "Besa con lengua y sonrisa","Muerde muy suave y luego lame",
        "Acaricia con las puntas de los dedos","Sopla aire caliente y besa",
        "Susurra algo sucio al oído mientras roza","Pasa la lengua muy despacio",
        "Frota tu nariz y luego tus labios","Da un beso húmedo y chupado",
        "Muerde el lóbulo y tira suavecito","Traza un camino de besos ardientes",
        "Aprieta y suelta con las yemas","Lame como si fuera un helado",
        "Muerde y arrastra la piel con los dientes","Haz cosquillas con la lengua",
        "Chupa un momento y luego sopla frío","Acaricia con el dorso de la mano",
        "Muerde muy cerquita de la zona caliente","Frota tus labios mojados contra",
        "Muerde y deja una pequeña marca rosa","Pasa la uña muy suave",
      ],
      zonas: [
        "el cuello", "la oreja", "la nuca", "la clavícula", "el ombligo",
        "la cadera", "el muslo interno", "la muñeca", "detrás de la rodilla",
        "el pezón (muy suave)", "la espalda baja", "el vientre", "las costillas",
        "el hueso de la cadera", "el inicio de la entrepierna"
      ]
    },
    extremo: {
      neutras: [
        "Lame con la lengua ancha y presión","Chupa con fuerza y hace vacío",
        "Muerde fuerte y luego consuela con la lengua","Pasa la lengua de arriba abajo sin parar",
        "Golpetea con la lengua rapidísimo","Presiona con la boca húmeda y frota",
        "Sopla y lame al mismo tiempo","Hace círculos con la punta de la lengua",
        "Muerde la piel y tira hacia atrás","Usa solo la punta de la lengua",
        "Deja un chupetón evidente","Pasa la lengua como si fuera un pincel",
        "Succiona y muerde alternando","Frota tus genitales mojados contra",
        "Masajea con la palma caliente","Pellizca el pezón y tira suave",
        "Hace espirales desde afuera hacia adentro","Chupa con ritmo de subida y bajada",
        "Muerde a lo largo de todo el recorrido","Lame desde abajo hasta arriba lentísimo",
      ],
      especificas: [
        { a:"Mete el pene hasta el fondo de su garganta", z:"la garganta", actor:"ella" },
        { a:"Chupa solo la cabeza mientras la miras", z:"el glande", actor:"ella" },
        { a:"Lame los huevos uno por uno lentamente", z:"los testículos", actor:"ella" },
        { a:"Masturba con la mano bien apretada y giros", z:"El pene", actor:"ella" },
        { a:"Besa la punta con labios muy húmedos", z:"el glande", actor:"ella" },
        { a:"Masajea los huevos con una mano mientras chupa", z:"los testículos", actor:"ella" },
        { a:"Pasa la lengua por todo el tronco de arriba abajo", z:"El pene", actor:"ella" },
        { a:"Hace círculos con la lengua alrededor del clítoris", z:"el clítoris", actor:"el" },
        { a:"Chupa el clítoris suave pero sin parar", z:"el clítoris", actor:"el" },
        { a:"Mete dos dedos y los mueve como 'ven aquí'", z:"la vagina", actor:"el" },
        { a:"Masturba lento con los dedos mojados", z:"la vagina", actor:"el" },
        { a:"Lame rápido de abajo arriba sobre", z:"el clítoris", actor:"el" },
        { a:"Introduce un dedo y masajea el punto G", z:"la vagina", actor:"el" },
        { a:"Frota el pulgar sobre el clítoris mientras los dedos penetran", z:"el clítoris", actor:"el" },
        { a:"Lame el ano con la lengua bien plana", z:"el ano", actor:"ambos" },
        { a:"Hace anilingus con puntazos de lengua", z:"el ano", actor:"ambos" },
        { a:"Masajea el perineo con presión circular", z:"el perineo", actor:"ambos" },
        { a:"Pellizca el pezón con los labios y succiona", z:"los pezones", actor:"ambos" },
        { a:"Lame los pezones en zigzag", z:"los pezones", actor:"ambos" },
        { a:"Muerde el pezón con cuidado y tira", z:"los pezones", actor:"ambos" },
        { a:"Azota las nalgas con ritmo de vaivén", z:"las nalgas", actor:"ambos" },
        { a:"Masajea las nalgas con fuerza y luego separa", z:"las nalgas", actor:"ambos" },
        { a:"Muerde suave la nalga y jala la piel", z:"las nalgas", actor:"ambos" },
      ],
      zonasElHace: [
        "los pezones erectos","el cuello y la nuca","las nalgas abiertas","el ano húmedo","la entrepierna caliente",
        "los muslos internos temblorosos","la espalda baja sudorosa","el perineo","las caderas",
        "la barriga hacia abajo","la cara interna del muslo","los labios vaginales"
      ],
      zonasEllaHace: [
        "los pezones duros","el cuello y la nuez","las nalgas apretadas","el ano","la entrepierna",
        "los muslos por dentro","la espalda baja","el perineo","el abdomen bajo",
        "la cara interna del muslo","las caderas hasta El pene","el frenillo"
      ],
    },
    condiciones: [
      "MODO: NORMAL 🔥","MODO: OJOS VENDADOS 🕶️","MODO: SIN MANOS ✋❌",
      "MODO: GIME BAJITO 🤫","MODO: CON HIELO Y LENGUA 🧊","MODO: SUSURRANDO SUCEDADES 🗣️",
      "MODO: A OSCURAS 🌙","MODO: CON MÚSICA SENSUAL 🎶","MODO: CÁMARA LENTA 🐢",
      "MODO: SIN ROPA 👗❌","MODO: CON ACEITE CALIENTE 💧","MODO: MIENTRAS TE MIRAN 👀",
      "MODO: ATAD@ SUAVEMENTE 🪢","MODO: CON LUBRICANTE 💦","MODO: PROHIBIDO CORRERSE 🚫💦"
    ],
    tiempos: [
      {txt:"20 SEG 🔥",seg:20},{txt:"45 SEG 🔥🔥",seg:45},{txt:"1 MIN 🔥🔥🔥",seg:60},
      {txt:"2 MIN 🔥🔥🔥🔥",seg:120},{txt:"3 MIN 🔥🔥🔥🔥🔥",seg:180},{txt:"5 MIN 🥵",seg:300},
    ],
    tiempoEspecial: {txt:"🔥🔥 HASTA CORRERSE 🔥🔥",seg:599},
    wildcards: [
      "🔥 69 ABSOLUTO — 4 minutos sin respirar, turnos cada 30 segundos",
      "💆‍♀️ FULL BODY SEXUAL — ella se deja hacer, él obedece todas sus órdenes",
      "😈 CARA ENTRE PIERNAS — ella monta su cara 2 minutos mínimo",
      "💦 SQUIRT CHALLENGE — él no para hasta que ella moje",
      "👑 FACE-SITTING — ella se sienta en su cara, él lame como quiere",
      "🍆 JUGUETE PROHIBIDO — 5 minutos con el juguete que elija ella",
      "🪢 ATAD@ A LA CAMA — el otro hace lo que quiera durante 3 minutos",
      "👗 STRIPTEASE LENTO — una prenda cada 30 segundos, mirándose fijo",
      "🤐 TURNO EN SILENCIO — 4 minutos, solo gemidos ahogados",
      "👁️ PAUSA DRAMÁTICA — 60 segundos sin tocarse, solo miradas lascivas",
      "🍑 ANAL DE UNA VEZ — con mucho lubricante, ella lleva el ritmo",
      "🧴 MASAJE CON ACEITE CORPORAL — todo el cuerpo, acabando donde él diga",
      "🔁 INTERCAMBIO DE ROLES — durante 5 minutos uno manda y el otro obedece",
      "📹 GRABA UN AUDIO SUCIO — 1 minuto de susurros eróticos para escuchar después",
      "🧊 HIELO POR TODO EL CUERPO — mientras el otro lame donde se derrite"
    ],
    ui:{quien:"¿Quién?",accion:"Acción 🔥",zona:"Zona 🫦",roll:"🎲 TIRAR DADOS 🎲",wild:"🃏 RETO SALVAJE 🃏",suave:"🌸 SUAVE",extremo:"⚡ EXTREMO",arrancar:"▶️ ARRANCAR",pausa:"⏸️ PAUSAR",el_lbl:"ÉL",ella_lbl:"ELLA"}
  },

  en: {
    // (Mantén tu versión en inglés o pídeme que la traduzca también con la misma intensidad)
    suave: { acciones: [], zonas: [] },
    extremo: { neutras: [], especificas: [], zonasElHace: [], zonasEllaHace: [] },
    condiciones: [], tiempos: [], tiempoEspecial: {}, wildcards: [],
    ui: {}
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
