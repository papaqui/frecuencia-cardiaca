'use strict';

// Calculate FC Max
document.querySelector('.check').addEventListener('click', function () {
  let age = Number(document.querySelector('.age').value);
  let fcReposo = Number(document.querySelector('.fcReposo').value);

  // Show box for results
  document.querySelector('.box-resultado').classList.remove('hidden');

  // Show results
  if (age == '' || fcReposo == '') {
    document.querySelector('.fcMax').textContent =
      'Campos vacíos. Por favor ingresa tus datos.';
  } else {
    let fcm = 220 - age;
    let fcm60 = (220 - age - fcReposo) * 0.6 + fcReposo;
    let fcm80 = (220 - age - fcReposo) * 0.8 + fcReposo;

    document.querySelector('.fcMax').textContent = `Tu FCM es: ${fcm}`;
    document.querySelector('.fcMax60').textContent = `60% de FCM: ${fcm60}`;
    document.querySelector('.fcMax80').textContent = `80% FCM: ${fcm80}`;
  }
});

/*
60% FCM = (220 - edad - FC reposo) * 60% + FC reposo
80% FCM = (220 - edad - FC reposo) * 80% + FC reposo
*/
