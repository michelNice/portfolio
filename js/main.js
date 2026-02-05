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
    projects:'Best Projects',
    skills:'Skills',
    Nome:'Name',
    contact:'Contact',
    herotxt:'I’m a front-end developer with solid skills in React, JavaScript, and SCSS, focused on building modern, responsive, and user-friendly interfaces. I enjoy turning ideas into clean and functional web experiences. Currently, I’m learning Node.js and Express to expand my back-end knowledge and grow as a full-stack developer, aiming to build complete and scalable web applications." agora em portgues',
    aboutTxt1:'I am a web developer focused on creating modern and responsive applications using JavaScript, React, and Sass. I enjoy building clean and intuitive interfaces, transforming ideas into functional digital experiences through real projectsOn the back end, I work with Node.js to develop efficient and scalable solutions, constantly improving my skills through hands-on practice and continuous learning of new technologies.',
    aboutTxt2:'I work as a web developer with an emphasis on developing responsive and well-structured applications using JavaScript, React, and Sass. I enjoy solving problems through code and turning concepts into high-quality digital products.In addition to front-end development, I also work with Node.js on the back end, building robust and maintainable systems while continuously improving my knowledge through practical projects and exploration of modern tools.',
    buttonHero:'Download my Resumate',
    buttonContact:'Enviar mensagem',
    navBtn:"Let's talk",
    projectOne:'Trevo Supermercado is a full-stack web application built with React and SCSS on the frontend, and Node.js, Express, and MongoDB on the backend, featuring a modern and responsive interface. text em portugues',
    projectTwo:'This is my dance portfolio and my first project built with React, focused on learning the framework while creating a responsive and visually engaging website.',
    projectTree:'This was my first freelance side project, built using HTML and CSS, focused on delivering a clean and responsive website for the client. portugues',
    projectFour:'A modern and responsive web project built with JavaScript, React, and SASS. portues'
})

const usePortugues = () => ({
   about:'Sobre',
   projects:'Melhores Projetos',
   skills:'Habilidades',
   Nome:'Nome',
   contact:'Contato',
   herotxt:'Sou um desenvolvedor front-end com sólidos conhecimentos em React, JavaScript e SCSS, focado na criação de interfaces modernas, responsivas e fáceis de usar. Gosto de transformar ideias em experiências web limpas e funcionais. Atualmente, estou aprendendo Node.js e Express para expandir meus conhecimentos em back-end e evoluir como desenvolvedor full-stack, com o objetivo de construir aplicações web completas e escaláveis.',
   aboutTxt1:'Sou um desenvolvedor web focado na criação de aplicações modernas e responsivas utilizando JavaScript, React e Sass. Gosto de desenvolver interfaces limpas e transformar ideias em experiências digitais funcionais por meio de projetos reais.',
   aboutTxt2:'No back-end, trabalho com Node.js, desenvolvendo soluções eficientes e escaláveis, enquanto aprimoro continuamente minhas habilidades por meio da criação de projetos práticos e da exploração de novas tecnologias no dia a dia do desenvolvimento.',
   buttonHero:'Baixar meu currículo',
   buttonContact:'Send me Message',
   navBtn:"Let's talk",
   projectOne:'Trevo Supermercado é uma aplicação web full stack desenvolvida com React e SCSS no front-end, e Node.js, Express e MongoDB no back-end. O projeto conta com uma interface moderna, responsiva e focada em uma boa experiência do usuário.',
   projectTwo:'Este é o meu portfólio de dança e meu primeiro projeto desenvolvido com React, com foco no aprendizado do framework enquanto crio um site responsivo e visualmente envolvente.',
   projectTree:'Este foi o meu primeiro projeto freelancer, desenvolvido utilizando HTML e CSS, com foco em entregar um site limpo, responsivo e alinhado às necessidades do cliente.',
   projectFour:'Um projeto web moderno e responsivo, desenvolvido com JavaScript, React e SASS.'
})

//AI HELP DATA-KEY

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



