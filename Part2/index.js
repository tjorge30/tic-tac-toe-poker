let idInput = document.getElementById('idInput');
let colorInput = document.getElementById('colorInput');

function setCard() {
    const card = document.getElementById(idInput.value);
    console.log(card);
    card.style.color = colorInput.value;
  }