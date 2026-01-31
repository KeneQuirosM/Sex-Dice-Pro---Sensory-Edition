const traducciones = {
    es: {
        suave: {
            acciones: ["Besa", "Acaricia", "Susurra a", "Masajea", "Sopla en", "Muerde suave", "Lame lento"],
            cuerpo: ["el cuello", "la oreja", "la mejilla", "la mano", "la nuca", "la espalda", "el hombro", "el ombligo"]
        },
        extremo: {
            acciones: [
                "Lame salvajemente", "Muerde con malicia", "Succiona con fuerza", "Escupe y masajea", 
                "Vibra intensamente en", "Penetra profundamente con dedos en", "Azota rítmicamente", 
                "Anilingus profundo en", "Deepthroat en", "Gime mientras succionas", 
                "Masturba", "Haz círculos con la lengua en", "Usa tus dientes con cuidado en", 
                "Introduce dos dedos en", "Succiona y muerde al mismo tiempo", "Lame el 'agujero' de", 
                "Masajea con la punta de la lengua", "Frota tus genitales húmedos contra", "Usa un juguete vibrador en",
                "Succiona hasta dejar marca en", "Da lengüetazos rápidos en", "Explora con mucha saliva",
                "Muerde y tira suavecito", "Presiona con fuerza tu lengua en", "Haz un masaje erótico en"
            ],
            cuerpo: ["el pene", "el clítoris", "la vagina", "el ano", "los testículos", "los pezones", "la entrepierna", "los muslos", "las tetas", "el cuello", "las nalgas"]
        },
        condiciones: ["MODO: NORMAL", "MODO: OJOS VENDADOS", "MODO: SIN USAR MANOS", "MODO: POSICIÓN PERRITO", "MODO: CON HIELO", "MODO: SUSURRANDO COCHINADAS"],
        tiempos: [{txt: "20 SEG", seg: 20}, {txt: "1 MIN", seg: 60}, {txt: "3 MIN", seg: 180}, {txt: "HASTA CORRERSE", seg: 600}],
        wildcards: ["69 SALVAJE: 2 minutos.", "ANILINGUS TOTAL", "SQUIRT CHALLENGE", "FACE-SITTING"],
        ui: { start: "EMPEZAR", lanzar: "LANZAR DADOS", salvaje: "RETO SALVAJE", suave: "SUAVE", extremo: "EXTREMO" }
    },
    en: {
        suave: {
            acciones: ["Kiss", "Caress", "Whisper to", "Massage", "Blow on", "Soft bite on", "Slow lick on"],
            cuerpo: ["the neck", "the ear", "the cheek", "the hand", "the nape", "the back", "the shoulder", "the belly button"]
        },
        extremo: {
            acciones: [
                "Lick wildly", "Bite with malice", "Suck hard", "Spit and massage", 
                "Vibrate intensely on", "Deep finger penetration on", "Rhythmic spanking on", 
                "Deep anilingus on", "Deepthroat on", "Grip and moan on", 
                "Masturbate", "Tongue circles on", "Use your teeth carefully on", 
                "Insert two fingers into", "Suck and bite at the same time", "Lick the 'hole' of", 
                "Massage with the tip of the tongue", "Rub your wet genitals against", "Use a vibrator on",
                "Suck until you leave a mark on", "Quick tongue flicks on", "Explore with lots of spit",
                "Bite and pull gently", "Press your tongue hard on", "Erotic massage on"
            ],
            cuerpo: ["the penis", "the clitoris", "the vagina", "the anus", "the testicles", "the nipples", "the crotch", "the thighs", "the breasts", "the neck", "the butt cheeks"]
        },
        condiciones: ["MODE: NORMAL", "MODE: BLINDFOLDED", "MODE: NO HANDS", "MODE: DOGGY STYLE", "MODE: WITH ICE", "MODE: WHISPERING DIRTY THINGS"],
        tiempos: [{txt: "20 SEC", seg: 20}, {txt: "1 MIN", seg: 60}, {txt: "3 MIN", seg: 180}, {txt: "UNTIL CUMMING", seg: 600}],
        wildcards: ["WILD 69: 2 minutes.", "TOTAL ANILINGUS", "SQUIRT CHALLENGE", "FACE-SITTING"],
        ui: { start: "START", lanzar: "ROLL DICE", salvaje: "WILD CARD", suave: "SOFT", extremo: "EXTREME" }
    }
};

let idiomaActual = localStorage.getItem('idiomaDice') || "es";
let modoActual = "suave", nombres = { h: "", m: "" }, segundosRestantes = 0, timerInterval = null;
let vozActiva = localStorage.getItem('vozDice') !== 'false';

document.addEventListener('DOMContentLoaded', () => {
    const dQuien = document.getElementById('display-quien'), dAccion = document.getElementById('dice-accion'),
          dCuerpo = document.getElementById('dice-cuerpo'), dCondicion = document.getElementById('dice-condicion'),
          dTiempo = document.getElementById('dice-tiempo'), dTimerDisp = document.getElementById('timer-display'),
          btnTimer = document.getElementById('btn-timer'), btnReroll = document.getElementById('btn-reroll-tiempo'),
          btnVoice = document.getElementById('btn-voice-toggle'), btnLang = document.getElementById('btn-lang-toggle'),
          timerBox = document.getElementById('timer-box');

    const actualizarUI = () => {
        const t = traducciones[idiomaActual].ui;
        if(btnLang) btnLang.innerText = idiomaActual.toUpperCase();
        document.getElementById('btn-lanzar').innerText = t.lanzar;
        document.getElementById('btn-wildcard').innerText = t.salvaje;
        document.getElementById('btn-suave').innerText = t.suave;
        document.getElementById('btn-extremo').innerText = t.extremo;
        const btnStart = document.getElementById('btn-empezar');
        if(btnStart) btnStart.innerText = t.start;
    };

    window.cambiarIdioma = () => {
        idiomaActual = (idiomaActual === "es") ? "en" : "es";
        localStorage.setItem('idiomaDice', idiomaActual);
        actualizarUI();
    };

    const hablar = (t) => {
        if (!vozActiva) return;
        window.speechSynthesis.cancel();
        const msg = new SpeechSynthesisUtterance(t);
        msg.lang = (idiomaActual === "es") ? 'es-ES' : 'en-US';
        msg.rate = 0.85;
        window.speechSynthesis.speak(msg);
    };

    window.empezarJuego = () => {
        nombres.h = document.getElementById('nombre-h').value.trim() || (idiomaActual === "es" ? "ÉL" : "HIM");
        nombres.m = document.getElementById('nombre-m').value.trim() || (idiomaActual === "es" ? "ELLA" : "HER");
        document.getElementById('setup-screen').style.display = "none";
        document.getElementById('game-container').style.display = "flex";
    };

    document.getElementById('btn-suave').onclick = () => { modoActual = "suave"; toggleModoBotones(); };
    document.getElementById('btn-extremo').onclick = () => { modoActual = "extremo"; toggleModoBotones(); };
    
    function toggleModoBotones() {
        document.getElementById('btn-suave').classList.toggle('active', modoActual === 'suave');
        document.getElementById('btn-extremo').classList.toggle('active', modoActual === 'extremo');
    }

    document.getElementById('btn-lanzar').onclick = () => {
        limpiarTimer();
        let vueltas = 0;
        const interval = setInterval(() => {
            const esH = Math.random() > 0.5; // Quién HACE la acción
            dQuien.innerText = esH ? nombres.h : nombres.m;
            
            const lang = traducciones[idiomaActual];
            let accion = lang[modoActual].acciones[Math.floor(Math.random() * lang[modoActual].acciones.length)];
            let listaCuerpo = [...lang[modoActual].cuerpo];

            // LÓGICA ANATÓMICA
            if (accion.toLowerCase().includes("anilingus") || accion.toLowerCase().includes("hole")) {
                listaCuerpo = (idiomaActual === "es") ? ["el ano"] : ["the anus"];
            } else if (accion.toLowerCase().includes("deepthroat")) {
                dQuien.innerText = nombres.m; // Solo ella hace esto
                listaCuerpo = (idiomaActual === "es") ? ["el pene"] : ["the penis"];
            } else if (accion.toLowerCase().includes("introduce") || accion.toLowerCase().includes("insert")) {
                listaCuerpo = (idiomaActual === "es") ? ["la vagina", "el ano"] : ["the vagina", "the anus"];
            } else if (accion.toLowerCase().includes("masturba")) {
                listaCuerpo = esH ? (idiomaActual === "es" ? ["la vagina", "las tetas"] : ["the vagina", "the breasts"]) : (idiomaActual === "es" ? ["el pene"] : ["the penis"]);
            } else {
                // Filtro cruzado: El cuerpo es el de la pareja
                if (esH) { // Hace KENE, recibe ELLA
                    const out = (idiomaActual === "es") ? ["el pene", "los testículos"] : ["the penis", "the testicles"];
                    listaCuerpo = listaCuerpo.filter(c => !out.includes(c));
                } else { // Hace ELLA, recibe KENE
                    const out = (idiomaActual === "es") ? ["la vagina", "el clítoris", "las tetas"] : ["the vagina", "the clitoris", "the breasts"];
                    listaCuerpo = listaCuerpo.filter(c => !out.includes(c));
                }
            }

            dAccion.innerText = accion;
            dCuerpo.innerText = listaCuerpo[Math.floor(Math.random() * listaCuerpo.length)];
            dCondicion.innerText = lang.condiciones[Math.floor(Math.random() * lang.condiciones.length)];
            
            let t = lang.tiempos[Math.floor(Math.random() * (lang.tiempos.length - 1))];
            dTiempo.innerText = t.txt; segundosRestantes = t.seg;

            vueltas++;
            if (vueltas > 12) {
                clearInterval(interval);
                timerBox.style.visibility = "visible";
                actualizarReloj();
                hablar(`${dQuien.innerText}: ${dAccion.innerText} ${dCuerpo.innerText}`);
            }
        }, 60);
    };

    // Wildcards, Timer y limpieza
    document.getElementById('btn-wildcard').onclick = () => {
        limpiarTimer();
        const lang = traducciones[idiomaActual];
        const reto = lang.wildcards[Math.floor(Math.random() * lang.wildcards.length)];
        dAccion.innerText = "!!!"; dCuerpo.innerText = reto; dTiempo.innerText = "---";
        hablar(reto);
    };

    function limpiarTimer() { if (timerInterval) clearInterval(timerInterval); timerInterval = null; timerBox.style.visibility = "hidden"; }
    function actualizarReloj() {
        const min = Math.floor(segundosRestantes / 60), seg = segundosRestantes % 60;
        dTimerDisp.innerText = `${min.toString().padStart(2, '0')}:${seg.toString().padStart(2, '0')}`;
    }

    btnTimer.onclick = () => {
        if (timerInterval) { clearInterval(timerInterval); timerInterval = null; btnTimer.innerText = "▶"; }
        else {
            btnTimer.innerText = "⏸";
            timerInterval = setInterval(() => {
                segundosRestantes--; actualizarReloj();
                if (segundosRestantes <= 0) { clearInterval(timerInterval); alert("TIME!"); }
            }, 1000);
        }
    };

    actualizarUI();
});
