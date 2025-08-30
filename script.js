document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    
    const currentTheme = localStorage.getItem('theme') || 'dark';
    document.body.classList.toggle('light-mode', currentTheme === 'light');
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('light-mode');
        const isLight = document.body.classList.contains('light-mode');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
});


  const popup = document.getElementById("supportPopup");
  const closeBtn = document.getElementById("closePopup");
  
  const supportButtons = document.querySelectorAll(".support-btn");

  supportButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      popup.style.display = "flex";
    });
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

  window.copyUPI = function() {
    const upi = "9415423928@axl";
    navigator.clipboard.writeText(upi).then(() => {
      document.getElementById("copyMsg").innerText = "UPI ID copied!";
      setTimeout(() => {
        document.getElementById("copyMsg").innerText = "";
      }, 3000);
    }).catch(err => {
      console.error('Failed to copy:', err);
      document.getElementById("copyMsg").innerText = "Failed to copy!";
    });
  };


  
