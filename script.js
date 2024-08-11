// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Modal functionality for payment
document.getElementById('buy-now').addEventListener('click', function() {
  document.getElementById('payment-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function() {
  document.getElementById('payment-modal').style.display = 'none';
});



// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80, // Adjusted for header height
        behavior: 'smooth'
      });
    }
  });
});

// Burger menu toggle
const burgerMenu = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.mobile-menu');

burgerMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

function showPaymentOptions(id) {
  document.querySelectorAll('.card > div').forEach(div => {
    div.classList.add('hidden');
  });
  document.getElementById(id).classList.remove('hidden');
}

function showQRCode(method, id) {
  const qrImageId = `qr-image-${id}`;
  const qrContainerId = `qr-${id}`;
  const qrImage = document.getElementById(qrImageId);
  const qrContainer = document.getElementById(qrContainerId);

  // Set the QR code image source based on the selected method
  switch (method) {
    case 'googlePay':
      qrImage.src = 'google pay.jpg';
      break;
    case 'paytm':
      qrImage.src = 'paytem.jpg';
      break;
    case 'phonePe':
      qrImage.src = 'path/to/phonePe-qr-code.png';
      break;
  }

  // Show the QR code container
  qrContainer.classList.remove('hidden');
}

function confirmPayment(event, id) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      form.classList.add('hidden');
      document.getElementById(`success-message-${id}`).classList.remove('hidden');
    } else {
      alert('There was an issue confirming your payment. Please try again.');
    }
  }).catch(error => {
    console.error('Error:', error);
    alert('There was an issue confirming your payment. Please try again.');
  });
}



document.querySelector('.burger').addEventListener('click', () => {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
});