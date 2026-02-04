const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('translate-x-full');
  mobileMenu.classList.toggle('opacity-0');

  menuIcon.classList.toggle('fa-bars');
  menuIcon.classList.toggle('fa-xmark');
});

const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('translate-x-full');
    mobileMenu.classList.add('opacity-0');

    menuIcon.classList.add('fa-bars');
    menuIcon.classList.remove('fa-xmark');
  });
});





	$('.slider-cradle').click(function(){
  $(this).toggleClass('is-transitioned');
});








const buttonPt = document.querySelector('.option-1')
const buttonEng = document.querySelector('.option-2')

let language = 'en'

const useText = function (){

  switch(language){

    case 'en':

    return useEnglish()

    case 'pt':

    return usePortugues()
  }
}

const useEnglish = () => ({
    about:'About',
    projects:'Projects',
    skills:'skills',
    contact:'Contact',
    herotxt:'I’m a front-end developer with solid skills in React, JavaScript, and SCSS, focused on building modern, responsive, and user-friendly interfaces. I enjoy turning ideas into clean and functional web experiences. Currently, I’m learning Node.js and Express to expand my back-end knowledge and grow as a full-stack developer, aiming to build complete and scalable web applications." agora em portgues',
    aboutTxt1:'I am a web developer focused on creating modern and responsive applications using JavaScript, React, and Sass. aboutI enjoy building clean interfaces and transforming ideas into functional digital experiences through real projects.',
    aboutTxt2:'On the back-end, I work with Node.js, developing efficient and scalable solutions while continuously improving my skills by creating practical projects and exploring new technologies in everyday development.',


})

const usePortugues = () => ({
   about:'Sobre',
   projects:'Projetos',
   skills:'Habilidades',
   contact:'Contato',
   herotxt:'Sou um desenvolvedor front-end com sólidos conhecimentos em React, JavaScript e SCSS, focado na criação de interfaces modernas, responsivas e fáceis de usar. Gosto de transformar ideias em experiências web limpas e funcionais. Atualmente, estou aprendendo Node.js e Express para expandir meus conhecimentos em back-end e evoluir como desenvolvedor full-stack, com o objetivo de construir aplicações web completas e escaláveis.',
   aboutTxt1:'Sou um desenvolvedor web focado na criação de aplicações modernas e responsivas utilizando JavaScript, React e Sass. Gosto de desenvolver interfaces limpas e transformar ideias em experiências digitais funcionais por meio de projetos reais.',
   aboutTxt2:'No back-end, trabalho com Node.js, desenvolvendo soluções eficientes e escaláveis, enquanto aprimoro continuamente minhas habilidades por meio da criação de projetos práticos e da exploração de novas tecnologias no dia a dia do desenvolvimento.'
})

function changeLanguage(lan){

  language = lan

  let texts 

  if(lan === 'pt') texts = usePortugues()
  if(lan === 'en') texts = useEnglish()

  document.querySelectorAll('[data-key]').forEach(link => {

    const key = link.dataset.key


    if(texts[key]){
        link.textContent = texts[key]
    }
  })

}


buttonPt.addEventListener('click',() => changeLanguage('pt'))
buttonEng.addEventListener('click', () =>changeLanguage('en'))



