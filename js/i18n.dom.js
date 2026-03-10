import { getTexts } from './i18n.logic.js'

const buttonPt = document.querySelector('.option-1')
const buttonEng = document.querySelector('.option-2')
let buttonCV = document.querySelector('[data-key="buttonHero"]')

let language = 'en'

async function changeLanguage(lang) {
  language = lang
  const texts = await getTexts(lang)

   console.log("TEXTS:", texts) 

  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.dataset.key
    if (texts[key]) el.textContent = texts[key]
  })

  if(lang === 'pt'){
      buttonCV.href = '/img/Michel_Oliveira_CV_PT.pdf'
  }else{
    buttonCV.href = '/img/Michel_Oliveira_CV_EN.pdf'

  }
}

buttonPt.addEventListener('click', () => changeLanguage('pt'))
buttonEng.addEventListener('click', () => changeLanguage('en'))
