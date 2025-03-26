// Función para mostrar u ocultar los detalles del servicio
function toggleServiceDetails(serviceId) {
    const serviceParagraph = document.getElementById(`service-${serviceId}`);
    if (serviceParagraph.style.display === "none" || serviceParagraph.style.display === "") {
        serviceParagraph.style.display = "block";
    } else {
        serviceParagraph.style.display = "none";
    }
}
