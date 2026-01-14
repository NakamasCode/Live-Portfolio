document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for contacting JohnTimeless!');
    form.reset();
  });
});

const now = new Date();
document.getElementById("year").textContent = now.toDateString();



const form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // prevent default submission

    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    }).then(response => {
      if (response.ok) {
        // Show success modal
        const successModal = new bootstrap.Modal(document.getElementById('successModal'));
        successModal.show();

        // Reset the form
        form.reset();
      } else {
        alert("Oops! There was a problem submitting your form.");
      }
    }).catch(error => {
      alert("Oops! There was a problem submitting your form.");
    });
  });