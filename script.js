const form = document.getElementById("loginForm");
const message = document.getElementById("message");

// DEMO ONLY.
// This is NOT secure authentication because credentials are visible in JavaScript.
// Use a real authentication backend (e.g. Supabase Auth) for a production system.
const DEMO_USERNAME = "admin";
const DEMO_PASSWORD = "admin123";

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (username === DEMO_USERNAME && password === DEMO_PASSWORD) {
    sessionStorage.setItem("demoLoggedIn", "true");
    message.className = "message success";
    message.textContent = "Login berhasil. Membuka dashboard...";

    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 500);
  } else {
    message.className = "message error";
    message.textContent = "Username atau password salah.";
  }
});
