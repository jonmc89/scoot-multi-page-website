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

const faqItem = document.querySelectorAll('.faq-item');
const faqAnswers = document.querySelectorAll('.faq-answer');

faqItem.forEach((item, index) => {
  const chevrons = item.querySelector('.chevron');

  item.addEventListener('click', () => {
    faqAnswers[index].classList.toggle('show-answer');
    chevrons.classList.toggle('chevron-open');
  });
});
