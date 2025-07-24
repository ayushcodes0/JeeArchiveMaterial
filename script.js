document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle 
    const themeToggle = document.getElementById('themeToggle');
    
    // Check for saved user preference or use dark mode as default
    const currentTheme = localStorage.getItem('theme') || 'dark';
    document.body.classList.toggle('light-mode', currentTheme === 'light');
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('light-mode');
        const isLight = document.body.classList.contains('light-mode');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        
        // Add animation class
        themeToggle.classList.add('theme-toggle-active');
        setTimeout(() => {
            themeToggle.classList.remove('theme-toggle-active');
        }, 300);
});

    // JEE Countdown 
    const countdownTabs = document.querySelectorAll('.countdown-tab');
    const countdownTimers = document.querySelectorAll('.countdown-timer');
    
    const jeeMainsDate = new Date('January 20, 2026 00:00:00').getTime();
    const jeeAdvancedDate = new Date('April 5, 2026 00:00:00').getTime();
    
    
    countdownTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            
            countdownTabs.forEach(t => t.classList.remove('active'));
            countdownTimers.forEach(timer => timer.classList.remove('active'));
            
            
            tab.classList.add('active');
            const targetTimer = document.getElementById(`${tab.dataset.target}-timer`);
            if (targetTimer) {
                targetTimer.classList.add('active');
            }
        });
    });
    
    // timer
    function updateCountdown() {
        const now = new Date().getTime();
        
        
        const mainsTimeRemaining = jeeMainsDate - now;
        updateTimerValues('mains', mainsTimeRemaining);
        updateNavTimerValues('mains', mainsTimeRemaining);
        
        // Calculate time remaining for JEE Advanced
        const advancedTimeRemaining = jeeAdvancedDate - now;
        updateTimerValues('advanced', advancedTimeRemaining);
        updateNavTimerValues('advanced', advancedTimeRemaining);
        
       
        setTimeout(updateCountdown, 1000);
    }
    
   
    function updateTimerValues(prefix, timeRemaining) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        
        // Update DOM elements if they exist
        const daysElement = document.getElementById(`${prefix}-days`);
        const hoursElement = document.getElementById(`${prefix}-hours`);
        const minutesElement = document.getElementById(`${prefix}-minutes`);
        const secondsElement = document.getElementById(`${prefix}-seconds`);
        
        if (daysElement) daysElement.textContent = days < 10 ? `0${days}` : days;
        if (hoursElement) hoursElement.textContent = hours < 10 ? `0${hours}` : hours;
        if (minutesElement) minutesElement.textContent = minutes < 10 ? `0${minutes}` : minutes;
        if (secondsElement) secondsElement.textContent = seconds < 10 ? `0${seconds}` : seconds;
    }
    
    
    function updateNavTimerValues(prefix, timeRemaining) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        
        // Update DOM elements if they exist
        const navDaysElement = document.getElementById(`nav-${prefix}-days`);
        const navHoursElement = document.getElementById(`nav-${prefix}-hours`);
        const navMinutesElement = document.getElementById(`nav-${prefix}-minutes`);
        
        if (navDaysElement) navDaysElement.innerHTML = `${days}<span>d</span>`;
        if (navHoursElement) navHoursElement.innerHTML = `${hours}<span>h</span>`;
        if (navMinutesElement) navMinutesElement.innerHTML = `${minutes}<span>m</span>`;
    }
    
    // Start the countdown
    updateCountdown();
    
    // Mobile menu 
    const menuToggle = document.getElementById('fa-bars');
    const closeMenu = document.getElementById('fa-close');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuToggle && closeMenu && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            menuToggle.style.display = 'none';
            closeMenu.style.display = 'block';
        });
        
        closeMenu.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            menuToggle.style.display = 'block';
            closeMenu.style.display = 'none';
        });
        
        
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                mobileMenu.classList.remove('active');
                menuToggle.style.display = 'none';
                closeMenu.style.display = 'none';
            } else {
                menuToggle.style.display = mobileMenu.classList.contains('active') ? 'none' : 'block';
                closeMenu.style.display = mobileMenu.classList.contains('active') ? 'block' : 'none';
            }
        });
        
        
        if (window.innerWidth <= 768) {
            menuToggle.style.display = 'block';
            closeMenu.style.display = 'none';
        } else {
            menuToggle.style.display = 'none';
            closeMenu.style.display = 'none';
        }
    }
    
    // Custom animations 
    const subjectShowcases = document.querySelectorAll('.subject-showcase');
    
    if (subjectShowcases.length > 0) {
        subjectShowcases.forEach((showcase, index) => {
            
            setTimeout(() => {
                showcase.style.opacity = '0';
                showcase.style.transform = 'translateX(-20px)';
                
                showcase.style.transition = 'all 0.5s ease';
                
                setTimeout(() => {
                    showcase.style.opacity = '1';
                    showcase.style.transform = 'translateX(0)';
                }, 100);
            }, index * 150);
            
            
            const icon = showcase.querySelector('.subject-icon');
            
            showcase.addEventListener('mouseenter', () => {
                if (icon) {
                    icon.style.transform = 'scale(1.2) rotate(10deg)';
                }
            });
            
            showcase.addEventListener('mouseleave', () => {
                if (icon) {
                    icon.style.transform = 'scale(1) rotate(0)';
                }
            });
        });
    }
    
   
    const mainLinks = document.querySelectorAll('.main-links');
    
    const animateMainLinks = () => {
        mainLinks.forEach((link, index) => {
            const linkPosition = link.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (linkPosition < screenPosition) {
                setTimeout(() => {
                    link.style.opacity = '1';
                    link.style.transform = 'translateX(0)';
                }, index * 100);
            }
        });
    };
    
   
    mainLinks.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateX(-20px)';
        link.style.transition = 'all 0.5s ease';
    });
    
    
    animateMainLinks();
    window.addEventListener('scroll', animateMainLinks);
    
    // scroll animations 
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.box-left, .box-right-first, .box-right-sec');
        
        elements.forEach((element, index) => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
            
                setTimeout(() => {
                    element.classList.add('fade-in-up');
                }, index * 100); 
            }
        });
        
        
        const backToTopBtn = document.getElementById('backToTop');
        if (backToTopBtn) {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }
    };
    

    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    
    animateOnScroll();
    
   
    window.addEventListener('scroll', animateOnScroll);
    
   
const popup = document.getElementById("supportPopup");
  const closeBtn = document.getElementById("closePopup");
  const supportButtons = document.querySelectorAll(".support-btn");

  supportButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      popup.style.display = "flex";
            setTimeout(() => {
                document.querySelector('.popup-content').classList.add('popup-active');
            }, 10);
    });
  });

  closeBtn.addEventListener("click", () => {
        document.querySelector('.popup-content').classList.remove('popup-active');
        setTimeout(() => {
    popup.style.display = "none";
    document.getElementById("copyMsg").innerText = "";
        }, 300);
  });

  window.addEventListener("click", (e) => {
    if (e.target === popup) {
            document.querySelector('.popup-content').classList.remove('popup-active');
            setTimeout(() => {
      popup.style.display = "none";
      document.getElementById("copyMsg").innerText = "";
            }, 300);
    }
  });

 
  window.copyUPI = function() {
    const upi = "9415423928@axl";
    navigator.clipboard.writeText(upi).then(() => {
            const copyMsg = document.getElementById("copyMsg");
            copyMsg.innerText = "UPI ID copied!";
            copyMsg.classList.add('copy-msg-active');
            
      // Clear message after 3 seconds
      setTimeout(() => {
                copyMsg.classList.remove('copy-msg-active');
                setTimeout(() => {
                    copyMsg.innerText = "";
                }, 300);
      }, 3000);
    }).catch(err => {
      console.error('Failed to copy:', err);
      document.getElementById("copyMsg").innerText = "Failed to copy!";
    });
  };
    
   
    window.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) / 25;
        const moveY = (e.clientY - window.innerHeight / 2) / 25;
        
        const heading = document.querySelector('.right h1');
        if (heading) {
            heading.style.transform = `translate(${moveX * 0.5}px, ${moveY * 0.5}px)`;
        }
    });
});