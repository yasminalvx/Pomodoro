//Selecionar tempo inicial do temporizador
function time_start_change(time_start) {
    document.getElementById("timer").innerHTML = time_start + ":00";
}

function start() {
    let action = document.getElementById("start-button").innerText;

    if (action == "Parar") {
        document.getElementById("start-button").innerText = "Reiniciar";
    }
    else if (action == "Iniciar") {
        timer();
        document.getElementById("start-button").innerText = "Parar";
    }
    else if (action == "Reiniciar") {
        document.getElementById("start-button").innerText = "Iniciar";
        document.getElementById("timer").innerHTML = "25:00";

    }
}

//Funcionamento do temporizador pomodoro
function timer() {
    let time_initial = document.getElementById("timer").innerText;
    let time_total = time_initial.split(':')[0] * 60 - 1;


    let second = setInterval(() => {

        const action = document.getElementById("start-button").innerText;
        console.log(action);

        let min = Math.floor(time_total / 60);
        let seg = time_total % 60;

        let string_seg = seg < 10 ? '0' + seg : seg;

        if ((min == 0 && seg == 0) || action == "Stop" || action == "Reiniciar") {
            stop(second);
            document.getElementById("start-button").innerText = "Reiniciar";
            if (min == 0 && seg == 0) {
                alert("O tempo terminou!");
                play_song();
            }
        } 

        time_total -= 1;

        document.getElementById("timer").innerText = min + ":" + string_seg;
        
    }, 1000);
    
}

function play_song() {
    let audio = new Audio('audio/sound.mp3');
    audio.currentTime = 0.1;
    audio.play();
}

function stop(interval){
    console.log("PARAR")
    clearInterval(interval);
}