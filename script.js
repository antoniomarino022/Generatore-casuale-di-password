const passwordCasual = document.getElementById('passwordResult');

// lunghezza della password
const lunghezzaPassword = 10;

// caratteri della password
const caratteriMin = 'abcdefghijklmnopqrstuvwxyz';
const caratteriMax = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const caratteriSpeciali = '@#£$%&/';
const numeri = '0123456789';

const tuttiICaratteri = caratteriMin + caratteriMax + caratteriSpeciali + numeri;

function keyCreate() {

    let password = '';

    // Aggiungo un carattere casuale per ogni categoria
    password += caratteriMin[Math.floor(Math.random() * caratteriMin.length)];
    password += caratteriMax[Math.floor(Math.random() * caratteriMax.length)];
    password += caratteriSpeciali[Math.floor(Math.random() * caratteriSpeciali.length)];
    password += numeri[Math.floor(Math.random() * numeri.length)];

    // Aggiungo altri caratteri casuali fino a raggiungere la lunghezza desiderata
  while(lunghezzaPassword > password.length){
    password += tuttiICaratteri[Math.floor(Math.random() * tuttiICaratteri.length)];
  }

    passwordCasual.textContent = password;
    console.log(password)
}

