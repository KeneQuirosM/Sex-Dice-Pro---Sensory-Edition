const datos = {
    suave: {
        acciones: ["Besa", "Acaricia", "Susurra a", "Masajea", "Sopla en", "Muerde suave"],
        cuerpo: ["el cuello", "la oreja", "la mejilla", "la mano", "la nuca", "la espalda"]
    },
    extremo: {
        acciones: ["Lame intensamente", "Muerde fuerte", "Succiona", "Frota tus genitales en", "Vibra con un juguete en", "Penetra con dedos en", "Masajea con lubricante", "Azota suavemente", "Masturba"],
        cuerpo: ["el pene", "el clítoris", "la vagina", "el culo", "los testículos", "los pezones", "la entrepierna", "los muslos"]
    },
    condiciones: ["MODO: NORMAL", "MODO: OJOS VENDADOS", "MODO: MANOS ATADAS", "MODO: SIN USAR MANOS", "MODO: SUSURRANDO", "MODO: CON HIELO", "MODO: MUY LENTO", "MODO: CON LUBRICANTE"],
    tiempos: [{txt: "20 SEG", seg: 20}, {txt: "1 MIN", seg: 60}, {txt: "3 MIN", seg: 180}, {txt: "HASTA CORRERSE", seg: 600}],
    wildcards: ["69 POR 2 MINUTOS", "SEXO ORAL", "QUÍTATE TODA LA ROPA", "USA UN JUGUETE", "POSICIÓN FAVORITA", "AZOTES EN EL CULO"]
};

let modoActual = "suave", nombres = { h: "", m: "" }, segundosRestantes = 0, timerInterval = null;
let vozActiva = localStorage.getItem('vozDice') !== 'false';

document.addEventListener('DOMContentLoaded', () => {
    const dQuien = document.getElementById('display-quien'), dAccion = document.getElementById('dice-accion'),
          dCuerpo = document.getElementById('dice-cuerpo'), dCondicion = document.getElementById('dice-condicion'),
          dTiempo = document.getElementById('dice-tiempo'), dTimerDisp = document.getElementById('timer-display'),
          btnTimer = document.getElementById('btn-timer'), btnReroll = document.getElementById('btn-reroll-tiempo'),
          btnVoice = document.getElementById('btn-voice-toggle'), timerBox = document.getElementById('timer-box'),
          modal = document.getElementById('settings-modal');

    // Inicializar Voz
    const actualizarIconoVoz = () => {
        btnVoice.innerText = vozActiva ? "🔊" : "🔇";
        btnVoice.classList.toggle('voice-off', !vozActiva);
    };
    actualizarIconoVoz();

    btnVoice.onclick = () => {
        vozActiva = !vozActiva;
        localStorage.setItem('vozDice', vozActiva);
        actualizarIconoVoz();
        if (!vozActiva) window.speechSynthesis.cancel();
    };

    const vibrar = (ms) => { if ("vibrate" in navigator) navigator.vibrate(ms); };
    const hablar = (t) => {
        if (!vozActiva) return;
        window.speechSynthesis.cancel();
        const msg = new SpeechSynthesisUtterance(t);
        msg.lang = 'es-ES'; msg.rate = 0.9;
        window.speechSynthesis.speak(msg);
    };

    // Personalización
    const guardados = localStorage.getItem('misRetosDice');
    if (guardados) {
        datos.extremo.acciones.push(...guardados.split(',').map(s => s.trim()).filter(s => s !== ""));
        document.getElementById('custom-extremo').value = guardados;
    }

    window.empezarJuego = () => {
        nombres.h = document.getElementById('nombre-h').value.trim() || "ÉL";
        nombres.m = document.getElementById('nombre-m').value.trim() || "ELLA";
        document.getElementById('setup-screen').style.display = "none";
        document.getElementById('game-container').style.display = "flex";
    };

    document.getElementById('btn-settings').onclick = () => modal.style.display = "flex";
    window.cerrarConfig = () => modal.style.display = "none";
    window.guardarConfig = () => {
        localStorage.setItem('misRetosDice', document.getElementById('custom-extremo').value);
        location.reload();
    };

    document.getElementById('btn-suave').onclick = () => { modoActual = "suave"; actualizarUI(); };
    document.getElementById('btn-extremo').onclick = () => { modoActual = "extremo"; actualizarUI(); };
    function actualizarUI() {
        document.getElementById('btn-suave').classList.toggle('active', modoActual === 'suave');
        document.getElementById('btn-extremo').classList.toggle('active', modoActual === 'extremo');
    }

    document.getElementById('btn-lanzar').onclick = () => {
        limpiarTimer(); btnReroll.disabled = false;
        let vueltas = 0;
        const interval = setInterval(() => {
            const esH = Math.random() > 0.5;
            dQuien.innerText = esH ? nombres.h : nombres.m;
            let accion = datos[modoActual].acciones[Math.floor(Math.random() * datos[modoActual].acciones.length)];
            if (accion === "Masturba" && Math.random() > 0.3) accion = datos[modoActual].acciones[0];
            dAccion.innerText = accion;
            let listaC = esH ? datos[modoActual].cuerpo.filter(c => c !== "el pene") : datos[modoActual].cuerpo.filter(c => c !== "la vagina");
            if (accion === "Masturba") dCuerpo.innerText = esH ? "la vagina" : "el pene";
            else dCuerpo.innerText = listaC[Math.floor(Math.random() * listaC.length)];
            
            dCondicion.innerText = datos.condiciones[Math.floor(Math.random() * datos.condiciones.length)];
            let t = datos.tiempos[Math.floor(Math.random() * (datos.tiempos.length - 1))];
            dTiempo.innerText = t.txt; segundosRestantes = t.seg;

            vueltas++;
            if (vueltas > 12) {
                clearInterval(interval); timerBox.style.visibility = "visible"; actualizarReloj();
                vibrar([100, 50, 100]);
                hablar(`${dQuien.innerText}: ${dAccion.innerText} ${dCuerpo.innerText}, ${dCondicion.innerText}, por ${dTiempo.innerText}`);
            }
        }, 60);
    };

    btnReroll.onclick = () => {
        const opciones = datos.tiempos.filter(t => t.txt !== dTiempo.innerText && !t.txt.includes("CORRERSE"));
        const nuevo = opciones[Math.floor(Math.random() * opciones.length)];
        dTiempo.innerText = nuevo.txt; segundosRestantes = nuevo.seg; actualizarReloj();
        btnReroll.disabled = true; dTiempo.classList.add('pop');
        setTimeout(() => dTiempo.classList.remove('pop'), 300);
        hablar(`Tiempo cambiado a ${nuevo.txt}`);
    };

    document.getElementById('btn-wildcard').onclick = () => {
        limpiarTimer();
        let vueltas = 0;
        const interval = setInterval(() => {
            dAccion.innerText = "🔥"; dCuerpo.innerText = "ESPERA...";
            vueltas++;
            if (vueltas > 15) {
                clearInterval(interval);
                const reto = datos.wildcards[Math.floor(Math.random() * datos.wildcards.length)];
                dAccion.innerText = "RETO SALVAJE"; dCuerpo.innerText = reto; dTiempo.innerText = "¡YA!";
                dAccion.classList.add('wildcard-active'); dCuerpo.classList.add('wildcard-active');
                hablar(`Reto salvaje: ${reto}`);
            }
        }, 50);
    };

    function limpiarTimer() {
        if (timerInterval) clearInterval(timerInterval);
        timerInterval = null; timerBox.style.visibility = "hidden";
        dAccion.classList.remove('wildcard-active'); dCuerpo.classList.remove('wildcard-active');
    }

    function actualizarReloj() {
        const min = Math.floor(segundosRestantes / 60), seg = segundosRestantes % 60;
        dTimerDisp.innerText = `${min.toString().padStart(2, '0')}:${seg.toString().padStart(2, '0')}`;
    }

    btnTimer.onclick = () => {
        if (timerInterval) { clearInterval(timerInterval); timerInterval = null; btnTimer.innerText = "REANUDAR"; }
        else {
            btnTimer.innerText = "PAUSAR";
            timerInterval = setInterval(() => {
                segundosRestantes--; actualizarReloj();
                if (segundosRestantes <= 0) { 
                    clearInterval(timerInterval); document.getElementById('alarma-audio').play().catch(() => {});
                    alert("¡TIEMPO!"); 
                }
            }, 1000);
        }
    };
});