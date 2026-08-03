const menuBtn = document.getElementById('menuIcon');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('show');
  menuBtn.classList.toggle('menu-icon-close');
});

const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('section-visible');
    } else {
      entry.target.classList.remove('section-visible');
    }
  });
});

sections.forEach((section) => {
  observer.observe(section);
});

// FAQ Dropdown

const chevrons = document.querySelectorAll('.chevron');
const faqAnswers = document.querySelectorAll('.faq-answer');

chevrons.forEach((chevron, index) => {
  chevron.addEventListener('click', () => {
    console.log(faqAnswers[index]);
    faqAnswers[index].classList.toggle('show-answer');
  });
});
