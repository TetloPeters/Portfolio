// ==========================================
// TETLO PETERS PORTFOLIO - JAVASCRIPT
// ==========================================

// ==========================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  });
});

// ==========================================
// INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
// ==========================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all cards for scroll animations
document.querySelectorAll('.card').forEach(card => {
  observer.observe(card);
});

// ==========================================
// PDF GENERATION INSTRUCTIONS (Console)
// ==========================================

console.log('%c📄 PDF Generation Instructions:', 'color: #8fc9c6; font-size: 16px; font-weight: bold;');
console.log('To create a PDF resume:');
console.log('1. Press Ctrl+P (or Cmd+P on Mac)');
console.log('2. Select "Save as PDF" as the destination');
console.log('3. Adjust margins and layout as needed');
console.log('4. Click "Save"');
console.log('\nOr use online tools like:');
console.log('- Canva (canva.com)');
console.log('- Resume.io');
console.log('- Google Docs → File → Download → PDF');

// ==========================================
// DYNAMIC YEAR IN FOOTER
// ==========================================

const updateFooterYear = () => {
  const footer = document.querySelector('.page-footer p');
  if (footer) {
    const currentYear = new Date().getFullYear();
    footer.innerHTML = footer.innerHTML.replace(/© \d{4}/, `© ${currentYear}`);
  }
};

// Run on page load
updateFooterYear();

// ==========================================
// SKILL HOVER COUNTER (Easter Egg)
// ==========================================

let skillHoverCount = 0;
document.querySelectorAll('.skills li').forEach(skill => {
  skill.addEventListener('mouseenter', () => {
    skillHoverCount++;
    if (skillHoverCount === 7) {
      console.log('🎉 You found all the skills! Nice exploration!');
    }
  });
});

// ==========================================
// PROJECT HOVER ENHANCEMENT
// ==========================================

document.querySelectorAll('.project').forEach(project => {
  project.addEventListener('mouseenter', function() {
    this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
  });
});

// ==========================================
// LOAD TIME MESSAGE
// ==========================================

window.addEventListener('load', () => {
  console.log('%c✨ Portfolio loaded successfully!', 'color: #8fc9c6; font-size: 14px; font-weight: bold;');
  console.log('Made with ❤️ by Tetlo Peters');
});