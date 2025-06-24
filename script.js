document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    
    // Check for saved user preference or use dark mode as default
    const currentTheme = localStorage.getItem('theme') || 'dark';
    document.body.classList.toggle('light-mode', currentTheme === 'light');
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('light-mode');
        const isLight = document.body.classList.contains('light-mode');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
});


const fa_bars = document.getElementById('fa-bars');
const fa_close = document.getElementById('fa-close');
const mobile_menu = document.getElementById('mobile-menu');

let toggle_menu = false;

fa_bars.addEventListener("click", function(){
    mobile_menu.style.display = "block";
    fa_bars.style.display = "none";
    fa_close.style.display = "block";
})

fa_close.addEventListener("click", function(){
    mobile_menu.style.display = "none";
    fa_bars.style.display = "block";
    fa_close.style.display = "none";
})


fetch('https://api.countapi.xyz/update/jee-archive.com/visitor/?amount=1')
    .then(res => res.json())
    .then(data => {
      document.getElementById('visitorCount').innerText = data.value;
});


const popup = document.getElementById("supportPopup");
  const closeBtn = document.getElementById("closePopup");
  const supportButtons = document.querySelectorAll("button, a");

  supportButtons.forEach((btn) => {
    if (btn.textContent.trim().toLowerCase() === "support") {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        popup.style.display = "flex";
      });
    }
  });

  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
    document.getElementById("copyMsg").innerText = "";
  });

  window.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
      document.getElementById("copyMsg").innerText = "";
    }
  });

  function copyUPI() {
    const upi = "9415423928@axl";
    navigator.clipboard.writeText(upi).then(() => {
      document.getElementById("copyMsg").innerText = "UPI ID copied!";
    });
  }