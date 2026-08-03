
    const form      = document.getElementById('leadForm');
    const card      = document.getElementById('cardSucesso');
    const cardMsg   = document.getElementById('cardMsg');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const nome      = document.getElementById('nome').value.trim();
      const email     = document.getElementById('email').value.trim();
      const whatsapp  = document.getElementById('whatsapp').value.trim();

      if (!nome || !email || !whatsapp) {
        alert('Preencha todos os campos antes de continuar!');
        return;
      }

      // Esconde form, mostra card
      form.style.display = 'none';
      card.style.display = 'block';
      cardMsg.textContent =
        `Valeu, ${nome}! Te avisamos no WhatsApp quando seu copo gelado estiver pronto 🥤`;
    });
    