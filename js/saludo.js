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

if (toastTrigger) {
  const toastBootstrap = new bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}