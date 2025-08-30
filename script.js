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


  document.addEventListener("DOMContentLoaded", function() {
    const donorNames = [
        "Aarav", "Vivaan", "Aditya", "Vihaan", "Arjun",
        "Sai", "Reyansh", "Krishna", "Ishaan", "Rahul"
    ];

    // Array of allowed donation amounts
    const possibleAmounts = [10, 20, 30, 40, 50, 60];

    const donationElement = document.querySelector(".donations span");

    function updateDonations() {
        if (donationElement) {
            // Pick two distinct random names from the list
            let index1 = Math.floor(Math.random() * donorNames.length);
            let index2 = Math.floor(Math.random() * donorNames.length);

            // Ensure the two names are not the same
            while (index1 === index2) {
                index2 = Math.floor(Math.random() * donorNames.length);
            }

            // --- UPDATED LOGIC ---
            // Pick random donation amounts from the `possibleAmounts` array
            const amount1 = possibleAmounts[Math.floor(Math.random() * possibleAmounts.length)];
            const amount2 = possibleAmounts[Math.floor(Math.random() * possibleAmounts.length)];

            const name1 = donorNames[index1];
            const name2 = donorNames[index2];

            // Update the text content
            donationElement.textContent = `${name1} ₹${amount1}, ${name2} ₹${amount2}`;
        }
    }

    // Update the donations immediately on page load
    updateDonations();

    // Set an interval to update the donations every 2 minutes (120,000 milliseconds)
    setInterval(updateDonations, 120000); 
});
