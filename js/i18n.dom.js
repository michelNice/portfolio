import { getTexts } from './i18n.logic.js'

const buttonPt = document.querySelector('.option-1')
const buttonEng = document.querySelector('.option-2')

let language = 'en'

function changeLanguage(lang) {
  language = lang
  const texts = getTexts(lang)

  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.dataset.key
    if (texts[key]) el.textContent = texts[key]
  })
}

buttonPt.addEventListener('click', () => changeLanguage('pt'))
buttonEng.addEventListener('click', () => changeLanguage('en'))
