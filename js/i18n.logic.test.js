import { useEnglish, usePortugues,getTexts} from './i18n.logic.js'

describe('i18n logic', () => {
  test('english translations', () => {
    const texts = useEnglish()

    expect(texts.Nome).toBe('Name')
    expect(texts.about).toBe('About')
    expect(texts.skills).toBe('Skills')
  })

  test('Portugues translations', ()=> {

    const texts = usePortugues()

    expect(texts.Nome).toBe('Nome')
    expect(texts.about).toBe('Sobre')
    expect(texts.skills).toBe('Habilidades')
  })

  test('check langueage in english', ()=> {
      const lan = getTexts('en')

      expect(lan.Nome).toBe('Name')
  })

  test('check language in portugues', ()=> {
    const lan = getTexts('pt')

    expect(lan.Nome).toBe('Nome')
  })
})
