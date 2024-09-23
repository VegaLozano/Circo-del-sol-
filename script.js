document.getElementById('acceptBtn').addEventListener('click', function () {
    // Redirige a la página de celebración
    window.location.href = 'celebracion.html';
});

document.getElementById('declineBtn').addEventListener('click', function () {
    showModal('No pasa nada, lo importante es pasarla bien 😊');
});

document.getElementById('closeModal').addEventListener('click', function () {
    closeModal();
});

function showModal(message) {
    document.getElementById('modalMessage').innerText = message;
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}