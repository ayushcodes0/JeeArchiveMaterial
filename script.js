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


const popup = document.getElementById("supportPopup");
  const closeBtn = document.getElementById("closePopup");
  
  // Correct selector with . for class
  const supportButtons = document.querySelectorAll(".support-btn");

  // Simplified - no need for text check since we have the class
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

  // Make function available globally
  window.copyUPI = function() {
    const upi = "9415423928@axl";
    navigator.clipboard.writeText(upi).then(() => {
      document.getElementById("copyMsg").innerText = "UPI ID copied!";
      // Clear message after 3 seconds
      setTimeout(() => {
        document.getElementById("copyMsg").innerText = "";
      }, 3000);
    }).catch(err => {
      console.error('Failed to copy:', err);
      document.getElementById("copyMsg").innerText = "Failed to copy!";
    });
  };