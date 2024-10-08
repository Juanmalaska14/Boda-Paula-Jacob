document.addEventListener('DOMContentLoaded', () => { 

    //===
    // VARIABLES
    //===
    const DATE_TARGET = new Date('12/07/2024 01:00 PM');
    // DOM for render
    const SPAN_DAYS = document.querySelector('span#days');
    const SPAN_HOURS = document.querySelector('span#hours');
    const SPAN_MINUTES = document.querySelector('span#minutes');
    const SPAN_SECONDS = document.querySelector('span#seconds');
    // Milliseconds for the calculations
    const MILLISECONDS_OF_A_SECOND = 1000;
    const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
    const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
    const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24

    //===
    // FUNCTIONS
    //===

    /**
    * Method that updates the countdown and the sample
    */
    function updateCountdown() {
        // Calcs
        const NOW = new Date()
        const DURATION = DATE_TARGET - NOW;
        const REMAINING_DAYS = Math.floor(DURATION / MILLISECONDS_OF_A_DAY);
        const REMAINING_HOURS = Math.floor((DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
        const REMAINING_MINUTES = Math.floor((DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);
        const REMAINING_SECONDS = Math.floor((DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);

        // Render
        SPAN_DAYS.textContent = REMAINING_DAYS;
        SPAN_HOURS.textContent = REMAINING_HOURS;
        SPAN_MINUTES.textContent = REMAINING_MINUTES;
        SPAN_SECONDS.textContent = REMAINING_SECONDS;
    }

    //===
    // INIT
    //===
    updateCountdown();
    // Refresh every second8
    setInterval(updateCountdown, MILLISECONDS_OF_A_SECOND);

    
});

function formulario(){
    let asistencia = document.querySelector('select').value;
    console.log(document.querySelectorAll("#formulario"));

    let form = document.querySelectorAll("#formulario");

    form.forEach(element => {

        if(asistencia == 'acepto'){
            document.getElementById("formulario").classList.remove('oculto');
            document.getElementById("formulario").classList.add('mostrar');
            document.getElementById("especificiaciones").classList.remove('oculto');
            document.getElementById("especificiaciones").classList.add('mostrar');
        }else if(asistencia == 'declino'){
            document.getElementById("formulario").classList.remove('oculto');
            document.getElementById("formulario").classList.add('mostrar');
            document.getElementById("especificiaciones").classList.remove('mostrar');
            document.getElementById("especificiaciones").classList.add('oculto');
        }else{
            document.getElementById("formulario").classList.remove('mostrar');
            document.getElementById("formulario").classList.add('oculto'); 
        }
    });

    
    // if(asistencia == 'acepto'){
    //     // document.querySelectorAll("#formulario").classList.remove('ocultar');
    //     document.querySelectorAll("#formulario").style.display="block";
    //     console.log('entra')
    // }else{
    //     // document.querySelectorAll("#formulario").classList.remove('mostrar');
    //     document.querySelectorAll("#formulario").classList.add('ocultar');
    //     console.log('entra')
    // }

}

function pregunta(){
    if (confirm('Enviado. ¡Gracias!')){
       document.asistencia.submit()
    }
}


// document.addEventListener('DOMContentLoaded', function(){
//     let formulario = document.getElementById('formul');
//     formulario.addEventListener('submit', function() {
//       formulario.reset();
//     });
//   });

//======================================================================
// LOADING
//======================================================================
var Loading = (loadingDelayHidden = 0) => {

    //-----------------------------------------------------
    // Variables
    //-----------------------------------------------------
    // HTML
    let loading = null;
    // Retardo para borrar
    const myLoadingDelayHidden = loadingDelayHidden;
    // Imágenes
    let imgs = [];
    let lenImgs = 0;
    let counterImgsLoading = 0;

    //-----------------------------------------------------
    // Funciones
    //-----------------------------------------------------

    /**
     * Método que aumenta el contador de las imágenes cargadas
     */
    function incrementCounterImgs() {
        counterImgsLoading += 1;
        // Comprueba si todas las imágenes están cargadas
        if (counterImgsLoading === lenImgs) hideLoading();
    }

    /**
     * Ocultar HTML
     */
    function hideLoading() {
        // Comprueba que exista el HTML
        if(loading !== null) {
            // Oculta el HTML de "cargando..." quitando la clase .show
            loading.classList.remove('show');

            // Borra el HTML
            setTimeout(function () {
                loading.remove();
            }, myLoadingDelayHidden);
        }

    }

    /**
     * Método que inicia la lógica
     */
    function init() {
        /* Comprobar que el HTML esté cargadas */
        document.addEventListener('DOMContentLoaded', function () {
            loading = document.querySelector('.loading');
            imgs = Array.from(document.images);
            lenImgs = imgs.length;

            /* Comprobar que todas las imágenes estén cargadas */
            if(imgs.length === 0) {
                // No hay ninguna
                hideLoading();
            } else {
                // Una o más
                imgs.forEach(function (img) {
                    // A cada una le añade un evento que cuando se carge la imagen llame a la funcion incrementCounterImgs
                    img.addEventListener('load', incrementCounterImgs, false);
                });
            }
        });
    }

    return {
        'init': init
    }
}


// Para usarlo se declara e inicia. El número es el tiempo transcurrido para borra el HTML una vez cargado todos los elementos, en este caso 1 segundo: 1000 milisegundos,
Loading(1000).init();

