function TampilkanData() {
  const nama = document.getElementById('name').value;
  const role = document.getElementById('role').value;
  const availability = document.getElementById('availability').value;
  const usia = document.getElementById('age').value;
  const lokasi = document.getElementById('location').value;
  const experience = document.getElementById('experience').value;
  const email = document.getElementById('email').value;

  document.getElementById('displayName').innerText = nama;
  document.getElementById('displayRole').innerText = role;
  document.getElementById('displayAvailability').innerText = availability;
  document.getElementById('displayAge').innerText = usia;
  document.getElementById('displayLocation').innerText = lokasi;
  document.getElementById('displayExperience').innerText = experience + ' Tahun';
  document.getElementById('displayEmail').innerText = email;

  document.getElementById('formCard').style.display = 'none';
}

function toggleForm() {
  const formCard = document.getElementById('formCard');
  formCard.style.display = formCard.style.display === 'none' ? 'block' : 'none';
}