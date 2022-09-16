const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

const navLink = document.querySelectorAll('.nav_link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

// skills

const skillsContent = document.getElementsByClassName('skills__content'),
  skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = 'skills__content skills__close';
  }
  if (itemClass === 'skills__content skills__close') {
    this.parentNode.className = 'skills__content skills__open';
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener('click', toggleSkills);
});

// qualification
const tabs = document.querySelectorAll('[data-target]'),
  tabsContents = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);

    tabsContents.forEach((tabsContent) => {
      tabsContent.classList.remove('qualification__active');
    });
    target.classList.add('qualification__active');

    tab.forEach((tab) => {
      tab.classList.remove('qualification__active');
    });
    tab.classList.add('qualification__active');
  });
});

// services
const modalViews = document.querySelectorAll('.services__modal'),
  modalBtns = document.querySelectorAll('.services__button'),
  modalCloses = document.querySelectorAll('.service__modal-close');

let modal = function (modalClick) {
  modalViews[modalClick].classList.add('active-modal');
};
modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener('click', () => {
    modal(i);
  });
});
modalCloses.forEach((modalClose) => {
  modalClose.addEventListener('click', () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove('active-modal');
    });
  });
});

// slide animation

let swiper = new Swiper('.portfolio__container', {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',

    clickable: true,
  },
});

// scrollTo
const sections = document.querySelectorAll('section[id]');
function scrollActive() {
  const scrollY = window.pageYOffset;

  section.forEach((curent) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.add('active-link');
    } else {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.remove('active-link');
    }
  });
}

window.addEventListener('scroll', scrollActive);

// backgroud
function scrollHeader() {
  const nav = document.getElementById('header');

  if (this.scrollY >= 80) nav.classList.add('scroll-header');
  else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

// show scroll
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
  else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

//darkmode

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
    darkTheme
  );
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});

// form validation

// function sendEmail() {
//   // e.preventDefault();

//   Email.send({
//     SecureToken: ' 9c2f63c3-af93-4561-a9ec-79c776e0c96b ',
//     To: 'stephenadebayo611@gmail.com',
//     From: document.getElementById('email').value,
//     Subject: 'New Contact Form Enquiry',
//     Body:
//       'Name: ' +
//       document.getElementById('name').value +
//       '<br> Email: ' +
//       document.getElementById('email').value +
//       '<br> Project: ' +
//       document.getElementById('message').value +
//       '<br> Message: ' +
//       document.getElementById('message').value,
//   }).then((message) => alert('Message Sent Succesfully'));
// }
const sub = document.getElementById('.submit');

// sub.addEventListener('click', function (event) {
//   event.preventDefault();
//   var params = {
//     name: document.getElementById('name').value,
//     email: document.getElementById('email').value,
//     message: document.getElementById('message').value,
//   };
//   emailjs
//     .send('service_qp17eu7', 'template_kqdrwzu', params)
//     .then(function (res) {
//       alert('Success!' + res.status);
//     });
// });

// emailjs.send('service_zxc8ih1', 'template_kqdrwzu', {
//   from_name: 'steteh',
//   name: 'sgfudsudu',
//   email: 'ste@gmail.com',
//   message: 'stecjsa',
// });

// window.onload = function () {
//   document
//     .getElementById('contact-form')
//     .addEventListener('submit', function (event) {
//       event.preventDefault();

//       emailjs.send('service_qp17eu7', 'template_kqdrwzu', this).then(
//         function (res) {
//           alert('Success!');
//         },
//         function (error) {
//           alert('Failled');
//         }
//       );
//     });
// };
sub.addEventListener('click', function (event) {
  event.preventDefault();
  const submit = {
    from_name: document.getElementById('fullName').value,
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };

  emailjs
    .send('service_zxc8ih1', 'template_kqdrwzu', submit)
    .then(function (res) {
      alert('success');
    });
});

// scroll
const allSections = document.querySelectorAll('.section');
const revealSection = function (entries, observes) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');

  observes.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// document.onreadystatechange = function () {
//   if (document.readyState !== 'complete') {
//     document.querySelector('body').style.visibility = 'hidden';

//     document.querySelector('#loader').style.visibility = 'visible';
//   } else {
//     document.querySelector('#loader').style.display = 'none';

//     document.querySelector('body').style.visibility = 'visible';
//   }
// };

// window.addEventListener('load', () => {
//   document.getElementById('loader').style.display = 'none';
// });
// function loaded() {
//   if (document.readyState !== 'complete') {
//     document.querySelector('body').style.visibility = 'hidden';

//     document.querySelector('#loader').style.visibility = 'visible';
//   } else {
//     document.querySelector('#loader').style.display = 'none';

//     document.querySelector('body').style.visibility = 'visible';
//   }
// }

// $(function () {
//   $('.center').fadeOut(2000, function () {
//     $('.content').fadeIn(1000);
//   });
// });

// var loader = document.getElementById('preloader');

// window.addEventListener('load', function () {
//   loader.style.display = 'none';
// });
// document.querySelector('.contact__form').addEventListener('submit', submitForm);

// function submitForm(e) {
//   e.preventDefault();

//   // Get input values
//   let name = document.getElementById('name').value;
//   let email = document.getElementById('email').value;
//   let message = document.getElementById('message').value;

//   saveContactInfo(name, email, message);

//   document.querySelector('.contact__form').reset();
// }

// function sendEmail(name, email, message) {
//   Email.send({
//     Host: 'smtp.gmail.com',
//     Username: 'stephenadebayo17@gmail.com',
//     Password: 'steve1234567890S',
//     To: 'stephenadebayo17@gmail.com',
//     From: 'stephenadebayo17@gmail.com',
//     Subject: `${name} sent you a message`,
//     Body: `Name:${name} <br/> Email: ${email} <br/> Message:${message}`,
//   }).then((message) => alert('Mail sent successfully'));
// }
