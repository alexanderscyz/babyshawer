const envelopeBtn = document.getElementById('envelopeBtn');

function openInvite() {
  if (!envelopeBtn) return;

  envelopeBtn.classList.add('open');

  // Pequeña pausa para que se vea la animación antes de ir a la invitación
  setTimeout(() => {
    window.location.href = 'invitacion.html';
  }, 900);
}

envelopeBtn?.addEventListener('click', openInvite);
