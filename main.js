function playSonido (idELementoAudio){
    document.querySelector(idELementoAudio).play();
}

// document.querySelector('.tecla_pom').onclick = playSonidoPom; (ya no vamos a usar esta, porque necesitamos llamar todos los elementos tecla, como mostramos en la línea siguiente)

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    console.log(contador)

    const idAudio = `#sonido_${instrumento}`;
    console.log(idAudio);

    tecla.onclick = function (){
        playSonido(idAudio);
    };

    tecla.onKeydown = function(evento){
        if (evento.code === 'Space' || evento.code === 'enter'){
            tecla.classList.add('activa');
    }
    console.log(evento.code === 'Space' || evento.code === 'enter')
    }
    tecla.onkeyup = function(){

    }
}


/* function playSonidoClap() {
    document.querySelector('#sonido_tecla_clap').play()
} */



