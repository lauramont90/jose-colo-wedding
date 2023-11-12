// Fecha objetivo (24 de noviembre)
const targetDate = new Date('2023-12-22 20:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = formatTime(days);
    document.getElementById('hours').textContent = formatTime(hours);
    document.getElementById('minutes').textContent = formatTime(minutes);
    document.getElementById('seconds').textContent = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Actualiza el contador cada segundo
setInterval(updateCountdown, 1000);

// Llama a la función para actualizar el contador inmediatamente
updateCountdown();
// Obtén una referencia al botón por su ID
const botonWhatsapp = document.getElementById("botonWhatsapp");
const botonGoogleMaps = document.getElementById("botonGoogleMaps");
const botonSpotify = document.getElementById("botonSpotify");
const botonWhatsappMenu = document.getElementById("botonWhatsappMenu");

// Agrega un manejador de eventos al botón
botonWhatsapp.addEventListener("click", function() {
    // URL de WhatsApp que deseas abrir
    const urlWhatsapp = "https://wa.me/+541134720959?text=Gracias%20por%20la%20invitación%20Mi%20nombre%20y%20apellido%20es...";

    // Redirige a la URL de WhatsApp
    window.open(urlWhatsapp, "_blank");
});
// Agrega un manejador de eventos al botón de Google Maps
botonGoogleMaps.addEventListener("click", function() {
    const urlGoogleMaps = "https://maps.app.goo.gl/jefK9ca36A1jwJwTA";
    window.open(urlGoogleMaps, "_blank");
});
botonSpotify.addEventListener("click", function() {
    // Abre la URL de la lista de reproducción en una nueva pestaña
    window.open("https://open.spotify.com/playlist/6yaIQyEIfGu3qQXerKWRk1?si=TIaKjqdERYeECoYRq6jyag&utm_source=whatsapp");
});
// Agrega un manejador de eventos al botón
botonWhatsappMenu.addEventListener("click", function() {
    // URL de WhatsApp que deseas abrir
    const urlWhatsappMenu = "https://wa.me/+?text=Tengo%20una%20condición%20con%20el%20menú";

    // Redirige a la URL de WhatsApp
    window.open(urlWhatsappMenu, "_blank");
});