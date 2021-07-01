// Chequeo si el browser puede usar Service Worker
if (navigator.serviceWorker.register("../service-worker")){
	console.log (" service ok");
}else{
	console.log (" service no");
}

// Event Listener para Offline/ Online Status
window.addEventListener('offline', event => {
  document.querySelector('body').classList.add('offline');
 
});

window.addEventListener('online', event => {
  document.querySelector('body').classList.remove('offline');
  
});

// A veces este evento falla, ojo!
// Sirve para saber si el navegador esta offline, cuando entramos offline. 
// Es decir, no se disparo los eventos de arriba aun, y necesito conocer el estado.
// 

if (!navigator.onLine) {
  document.querySelector('body').classList.add('offline');
  
}