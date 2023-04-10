const salutdo = document.querySelector('.h1j');
fecha = new Date();
hora = fecha.getHours();
if(hora >= 0 && hora < 12){
salutdo.textContent = 'Buenos días';
}
if(hora >= 12 && hora < 18){
salutdo.textContent = 'Buenas tardes';
}
if(hora >= 18 && hora < 24){
salutdo.textContent = 'Buenas noches';
};
//Código para notificación//
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

const toastTrigger = document.getElementById('liveToastBtn');
const toastLiveExample = document.getElementById('liveToast');
const toastBootstrap = new bootstrap.Toast(toastLiveExample);
if (toastTrigger) {
    toastTrigger.addEventListener('click', () => {
        toastBootstrap.show();
    });
}