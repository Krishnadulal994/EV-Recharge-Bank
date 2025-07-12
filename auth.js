
document.addEventListener('DOMContentLoaded', () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const userNameElement = document.getElementById('user-name');
  const loginLink = document.getElementById('login-link');
  const registerLink = document.getElementById('register-link');
  const logoutLink = document.getElementById('logout-link');

  if (user) {
    userNameElement.textContent = `Welcome, ${user.name}`;
    loginLink.style.display = 'none';
    registerLink.style.display = 'none';
    logoutLink.style.display = 'block';
  } else {
    userNameElement.style.display = 'none';
  }

  logoutLink.addEventListener('click', () => {
    localStorage.removeItem('user');
    window.location.href = 'index.html';
  });
});



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);