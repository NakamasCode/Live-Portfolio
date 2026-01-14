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


const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // prevent normal redirect

  const formData = new FormData(form);

  fetch("https://formspree.io/f/mwvvpeer", {
    method: "POST",
    body: formData,
    headers: { "Accept": "application/json" }
  })
  .then(response => {
    if(response.ok){
      alert("Message sent successfully!"); // simple success alert
      form.reset();
      window.location.href = "index.html"; // redirect after alert
    } else {
      alert("Oops! Something went wrong. Please try again.");
    }
  })
  .catch(() => alert("Oops! Something went wrong. Please try again."));
});